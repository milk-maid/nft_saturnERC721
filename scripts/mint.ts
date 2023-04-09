import { ethers } from "hardhat";

async function main() {
  const saturn = await ethers.getContractAt("ISaturnNFT", "0x24a3D5b4efDe52b07BD6598F994Ea71978c6189b");
  const logSth= await saturn.giftItem("0x34D19938B57a9C575F71ae86116990ec001FE213", "https://nftstorage.link/ipfs/bafkreieal2rt4idzemi6rmxyavlvftkjhqduadxucmlytonbbqbwbknpfm");
  console.log(logSth);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x24a3D5b4efDe52b07BD6598F994Ea71978c6189b