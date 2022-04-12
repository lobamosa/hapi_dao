pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
/**
* @title Staking Token (STK)
* @author Alberto Cuesta Canada
* @notice Implements a basic ERC20 staking token with incentive distribution.
*/
contract StakingToken is ERC20, Ownable {
   using SafeMath for uint256;

    struct Stakholder {
        address _address;
        uint256 amount_staked;
    }
    mapping (address => Stakholder) listStakholder;
    address[] listStakholders;
    /**
     * @notice The stakes for each stakeholder.
     */
    
    mapping(address => uint256) internal stakes;

    /**
     * @notice The accumulated rewards for each stakeholder.
     */
    mapping(address => uint256) internal rewards;

   /**
    * @notice The constructor for the Staking Token.
    * @param _owner The address to receive all tokens on construction.
    * @param _supply The amount of tokens to mint on construction.
    */
   constructor(address _owner, uint256 _supply, string memory __name, string memory symbol) ERC20(__name, symbol)
       public
   {
       _mint(_owner, _supply);
   }

   function isStakHolder(address _address) public view returns(bool)
   {
       if(_address == listStakholder[_address]._address) return true;
       return false;
   }
   function getStakHolderAddress(address _address) public view returns(address)
   {
       return listStakholder[_address]._address;
   }
   function addStackHolder(address _address, uint256 amount_staked) public
   {
       Stakholder memory stakholder = Stakholder(_address, amount_staked);
       listStakholder[_address] = stakholder;
       listStakholders.push(_address);

   }
   function remove_stakeholder(address _address) public returns(address)
   {
       (bool _isStakeholder) = isStakHolder(_address);
       if(_isStakeholder)
        delete listStakholder[_address];
   }
   function getStakHolder(address _address) public view returns (Stakholder memory)
   {
       return listStakholder[_address];
   }

   
}