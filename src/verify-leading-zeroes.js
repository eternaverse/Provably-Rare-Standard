#!/usr/bin/env node

/**
 * PRS-001: Provably Rare Standard
 * Leading-Zero Verifier
 *
 * A small reference verifier for checking SHA-256 leading-zero rarity.
 *
 * This script validates:
 * 1. whether a supplied hash is a valid SHA-256 hex digest,
 * 2. how many leading zero bits it contains,
 * 3. how many full leading hex zeroes it contains,
 * 4. its approximate rarity odds,
 * 5. its suggested PRS-001 rarity class.
 */

function isValidSha256Hex(hash) {
  return typeof hash === "string" && /^[a-fA-F0-9]{64}$/.test(hash);
}

function countLeadingHexZeroes(hash) {
  let count = 0;

  for (const char of hash.toLowerCase()) {
    if (char === "0") {
      count += 1;
    } else {
      break;
    }
  }

  return count;
}

function hexCharToBinary(char) {
  return parseInt(char, 16).toString(2).padStart(4, "0");
}

function countLeadingZeroBits(hash) {
  let count = 0;

  for (const char of hash.toLowerCase()) {
    const bits = hexCharToBinary(char);

    for (const bit of bits) {
      if (bit === "0") {
        count += 1;
      } else {
        return count;
      }
    }
  }

  return count;
}

function getApproximateOdds(leadingZeroBits) {
  if (!Number.isInteger(leadingZeroBits) || leadingZeroBits < 0) {
    throw new Error("leadingZeroBits must be a non-negative integer.");
  }

  const odds = 2n ** BigInt(leadingZeroBits);
  return `1 in ${odds.toLocaleString("en-US")}`;
}

function getRarityClass(leadingZeroBits) {
  if (leadingZeroBits >= 44) return "Crown Proof";
  if (leadingZeroBits >= 40) return leadingZeroBits === 40 ? "Genesis Proof" : "Genesis+";
  if (leadingZeroBits >= 36) return leadingZeroBits === 36 ? "Mythic Proof" : "Mythic+";
  if (leadingZeroBits >= 32) return leadingZeroBits === 32 ? "Legendary Proof" : "Legendary+";
  if (leadingZeroBits >= 28) return leadingZeroBits === 28 ? "Epic Proof" : "Epic+";
  if (leadingZeroBits >= 24) return leadingZeroBits === 24 ? "Rare Proof" : "Rare+";
  if (leadingZeroBits >= 20) return leadingZeroBits === 20 ? "Uncommon Proof" : "Uncommon+";
  if (leadingZeroBits >= 16) return leadingZeroBits === 16 ? "Proof" : "Proof+";
  return "Below PRS-001 public rarity ladder";
}

function verifyHash(hash) {
  if (!isValidSha256Hex(hash)) {
    throw new Error("Invalid SHA-256 hash. Expected a 64-character hexadecimal digest.");
  }

  const normalizedHash = hash.toLowerCase();
  const leadingZeroBits = countLeadingZeroBits(normalizedHash);
  const leadingHexZeroes = countLeadingHexZeroes(normalizedHash);
  const approximateOdds = getApproximateOdds(leadingZeroBits);
  const rarityClass = getRarityClass(leadingZeroBits);

  return {
    standard: "PRS-001",
    standard_name: "Provably Rare Standard",
    standard_family: "DigitalOwnership Proof Standards",
    hash_algorithm: "SHA-256",
    anchor_hash: normalizedHash,
    valid_sha256_digest: true,
    leading_zero_bits: leadingZeroBits,
    leading_hex_zeroes: leadingHexZeroes,
    approximate_odds: approximateOdds,
    rarity_class: rarityClass
  };
}

function main() {
  const hash = process.argv[2];

  if (!hash) {
    console.error("Usage: node src/verify-leading-zeroes.js <sha256_hash>");
    process.exit(1);
  }

  try {
    const result = verifyHash(hash);
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(JSON.stringify({
      standard: "PRS-001",
      valid_sha256_digest: false,
      error: error.message
    }, null, 2));
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  isValidSha256Hex,
  countLeadingHexZeroes,
  countLeadingZeroBits,
  getApproximateOdds,
  getRarityClass,
  verifyHash
};
