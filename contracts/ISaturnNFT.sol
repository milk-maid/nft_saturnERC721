// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface ISaturnNFT {
    function giftItem (address _to, string memory _tokenURI) external returns (uint256);
}