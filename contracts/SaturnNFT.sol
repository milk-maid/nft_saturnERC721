// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SaturnNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address creator;
    error NotCreator(string info);

    constructor(string memory _tokenURI) ERC721("Saturn", "STN") {
        creator = msg.sender;
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);
        _tokenIds.increment();
    }

    function giftItem (address _to, string memory _tokenURI)
        public
        returns (uint256)
    {
        if (msg.sender != creator) revert NotCreator("Only Creator Can Do This");
        // require(msg.sender == creator, "Only Token Creator Can Do This");
        uint256 newItemId = _tokenIds.current();
        _mint(_to, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        _tokenIds.increment();
        return newItemId;
    }
}


