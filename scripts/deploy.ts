import { ethers } from "hardhat";

async function main() {
  const SaturnNFT = await ethers.getContractFactory("SaturnNFT");
  const saturnNFT = await SaturnNFT.deploy("https://bafybeifio4dlnybg7btthpgdmoq4awn6w3nbokh4ymbavh427tdnper3iy.ipfs.nftstorage.link/_metadata.json");
  await saturnNFT.deployed();

  console.log(`SaturnNFT deployed to :, ${saturnNFT.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x24a3D5b4efDe52b07BD6598F994Ea71978c6189b