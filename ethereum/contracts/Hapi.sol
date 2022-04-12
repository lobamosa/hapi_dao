// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract Hapi is ERC721, Ownable {
    
    using SafeMath for uint256;
    uint256 public constant THORS_HAMMER = 2;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    uint256 public constant MAX_HAPI = 10000;
    
    constructor(uint256 _maxHapi, uint256 _maxHapiPerPurchase, uint256 _maxHapiWhitelistCap
    ) ERC721("Hapi", "Hapi"){
        MAX_HAPI = _maxGrayBoys;
        MAX_HAPI_PER_PURCHASE = _maxGrayBoysPerPurchase;
        MAX_HAPI_WHITELIST_CAP = _maxGrayBoysWhitelistCap;
    }

    function _safeMintHapi(uint256 _quantity) internal {
    require(_quantity > 0, "You must mint at least 1 hapi");
    require(tokenSupply.current().add(_quantity) <= MAX_GRAY_BOYS, "This purchase would exceed max supply of Gray Boys");
    require(msg.value >= GRAY_BOY_PRICE.mul(_quantity), "The ether value sent is not correct");

    for (uint256 i = 0; i < _quantity; i++) {
      uint256 mintIndex = tokenSupply.current();

      if (mintIndex < MAX_GRAY_BOYS) {
        tokenSupply.increment();
        _safeMint(msg.sender, mintIndex);
      }
    }
  }

}