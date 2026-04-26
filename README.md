# Provably Rare Standard — PRS-001

<p align="center">
  <strong>Digital rarity should be verifiable.</strong>
</p>

<p align="center">
  PRS-001 is an open cryptographic rarity and provenance standard for digital assets.
</p>

<p align="center">
  <em>Rarity you can verify. Scarcity you can calculate. Ownership you can prove.</em>
</p>

---

## Overview

The **Provably Rare Standard**, or **PRS-001**, defines a public method for anchoring digital assets to mathematically scarce SHA-256 entropy hashes.

Traditional NFT rarity is usually based on assigned metadata traits, collection design choices, or marketplace perception.

PRS-001 introduces a different approach:

> **An asset can be rare because its cryptographic anchor required measurable probabilistic work to discover.**

A PRS-001 asset may include:

- a digital artwork, NFT, model output, document, dataset, or artifact,
- a unique SHA-256 entropy anchor,
- a verifiable leading-zero rarity class,
- a metadata commitment,
- a Merkle inclusion proof,
- a public collection root,
- and a reproducible verification procedure.

The purpose of PRS-001 is to transform digital rarity from subjective metadata into independently verifiable cryptographic evidence.

---

## Core Principle

A digital asset is **Provably Rare** when it is connected to a verifiable cryptographic anchor whose scarcity can be independently calculated.

At minimum, a PRS-001 asset should include:

| Layer | Purpose |
|---|---|
| Asset | The artwork, NFT, file, model output, document, dataset, or artifact being anchored |
| Anchor Hash | A SHA-256 digest with measurable leading-zero rarity |
| Rarity Class | The mathematical scarcity tier of the anchor |
| Metadata Commitment | A structured record connecting the asset to its anchor |
| Merkle Leaf | A deterministic hash of the asset’s proof object |
| Collection Root | A Merkle root proving inclusion in a collection |
| Verification Procedure | A public method for confirming the proof |

---

## Core Claim

> **Digital rarity can be measured by verifiable mathematical scarcity rather than subjective trait metadata alone.**

PRS-001 does not replace existing NFT standards.

Instead, it can extend them.

PRS-001 can be used alongside ERC-721, ERC-1155, ERC-2981, IPFS, Arweave, provenance registries, creator platforms, AI art systems, and future digital ownership protocols.

---

## Initial Scope

The first public version of PRS-001 focuses on:

1. SHA-256 leading-zero rarity classes,
2. entropy anchor objects,
3. NFT-compatible metadata fields,
4. proof objects,
5. Merkle leaf construction,
6. single-root collection attestation,
7. public/private proof boundaries,
8. verification procedures,
9. licensing categories for rare entropy anchors.

Advanced multi-root lattice structures, derivative roots, mutation roots, lineage roots, and Root of Roots systems may be introduced in later PRS extensions.

---

## Rarity Ladder

PRS-001 defines rarity by the number of **leading zero bits** in a SHA-256 digest.

Each additional leading zero bit makes the expected work approximately twice as difficult.

| Leading Zero Bits | Hex Equivalent | Approximate Odds | Suggested Class |
|---:|---:|---:|---|
| 16 | 4 full hex zeroes | 1 in 65,536 | Proof |
| 17 | 4 hex zeroes + 1 bit | 1 in 131,072 | Proof+ |
| 18 | 4 hex zeroes + 2 bits | 1 in 262,144 | Proof+ |
| 19 | 4 hex zeroes + 3 bits | 1 in 524,288 | Proof+ |
| 20 | 5 full hex zeroes | 1 in 1,048,576 | Uncommon Proof |
| 21 | 5 hex zeroes + 1 bit | 1 in 2,097,152 | Uncommon+ |
| 22 | 5 hex zeroes + 2 bits | 1 in 4,194,304 | Uncommon+ |
| 23 | 5 hex zeroes + 3 bits | 1 in 8,388,608 | Uncommon+ |
| 24 | 6 full hex zeroes | 1 in 16,777,216 | Rare Proof |
| 25 | 6 hex zeroes + 1 bit | 1 in 33,554,432 | Rare+ |
| 26 | 6 hex zeroes + 2 bits | 1 in 67,108,864 | Rare+ |
| 27 | 6 hex zeroes + 3 bits | 1 in 134,217,728 | Rare+ |
| 28 | 7 full hex zeroes | 1 in 268,435,456 | Epic Proof |
| 29 | 7 hex zeroes + 1 bit | 1 in 536,870,912 | Epic+ |
| 30 | 7 hex zeroes + 2 bits | 1 in 1,073,741,824 | Epic+ |
| 31 | 7 hex zeroes + 3 bits | 1 in 2,147,483,648 | Epic+ |
| 32 | 8 full hex zeroes | 1 in 4,294,967,296 | Legendary Proof |
| 33 | 8 hex zeroes + 1 bit | 1 in 8,589,934,592 | Legendary+ |
| 34 | 8 hex zeroes + 2 bits | 1 in 17,179,869,184 | Legendary+ |
| 35 | 8 hex zeroes + 3 bits | 1 in 34,359,738,368 | Legendary+ |
| 36 | 9 full hex zeroes | 1 in 68,719,476,736 | Mythic Proof |
| 37 | 9 hex zeroes + 1 bit | 1 in 137,438,953,472 | Mythic+ |
| 38 | 9 hex zeroes + 2 bits | 1 in 274,877,906,944 | Mythic+ |
| 39 | 9 hex zeroes + 3 bits | 1 in 549,755,813,888 | Mythic+ |
| 40 | 10 full hex zeroes | 1 in 1,099,511,627,776 | Genesis Proof |
| 41 | 10 hex zeroes + 1 bit | 1 in 2,199,023,255,552 | Genesis+ |
| 42 | 10 hex zeroes + 2 bits | 1 in 4,398,046,511,104 | Genesis+ |
| 43 | 10 hex zeroes + 3 bits | 1 in 8,796,093,022,208 | Genesis+ |
| 44 | 11 full hex zeroes | 1 in 17,592,186,044,416 | Crown Proof |

---

## Recommended Genesis Drop Classes

The initial Genesis drop may use anchors from the following high-rarity range:

| Class | Leading Zero Bits | Approximate Odds |
|---|---:|---:|
| Mythic Proof | 36 | 1 in 68,719,476,736 |
| Mythic+ | 37 | 1 in 137,438,953,472 |
| Mythic+ | 38 | 1 in 274,877,906,944 |
| Mythic+ | 39 | 1 in 549,755,813,888 |
| Genesis Proof | 40 | 1 in 1,099,511,627,776 |
| Genesis+ | 41 | 1 in 2,199,023,255,552 |
| Genesis+ | 42 | 1 in 4,398,046,511,104 |
| Crown Proof | 44 | 1 in 17,592,186,044,416 |

These classes are intended to demonstrate that NFT rarity can be established through cryptographic probability before cosmetic metadata is considered.

---

## Basic PRS-001 Proof Flow

The first PRS-001 release uses a simple and publicly auditable proof path.

```text
Asset
  ↓
Asset Metadata
  ↓
Entropy Anchor Hash
  ↓
PRS Proof Object
  ↓
Merkle Leaf
  ↓
Collection Merkle Root
  ↓
Public Verification
