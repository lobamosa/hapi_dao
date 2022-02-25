// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
contract Hapi is ERC1155, Ownable {
    
    uint256 public MAX_HAPI;
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    Counters.Counter public tokenSupply;

    
    constructor(uint256 _max_hapi) ERC1155('https://ipfs.io/ipfs/QmXuxNpTpgyTwJbhZQ7VK9hbFYu112gbEQk9YnKfYqUpYQ?filename=sample_metadata.json') {
        MAX_HAPI = _max_hapi;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function _safeMint(address account, uint256 id, uint256 _amount)
        public
        onlyOwner
    {
        require(_amount > 0, "You must mint at least 1 gray boy");
        require(tokenSupply.current().add(_amount) <= MAX_HAPI);

        _safeMint(account, id, _amount);
    }
}