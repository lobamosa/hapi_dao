const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hapi", function () {
  it('should initialize Hapi DAO contract', async function () {
    const hapi = await ethers.getContractFactory('Hapi')
    const contract = await hapi.deploy(1000);
    expect(await contract.MAX_HAPI()).to.equal(1000);

  })
  it("Should mint the new token once it's signed", async function () {
    const Greeter = await ethers.getContractFactory("Hapi");
    const greeter = await Greeter.deploy(1);
    await greeter.deployed();
    address = '0xC189dfc043c3787014EDFE968eeAd1b7FDa94aa1'
    data = {"name":"Gray Boy #1","image":"ipfs://QmQ9WVBYTWaBXZhT1uBWXgQpoe164pTydZPnQkxmncCHhn","attributes":[{"trait_type":"Body","value":"Gray"},{"trait_type":"Accessories","value":"Silver Chain"},{"trait_type":"Shirt","value":"High Fashion Jacket"},{"trait_type":"Face","value":"Gray Head"},{"trait_type":"Facial Hair","value":"Patchy Beard"},{"trait_type":"Mouth","value":"Basic Mouth"},{"trait_type":"Nose","value":"Rabbit Nose"},{"trait_type":"Eyes","value":"Radioactive Eyes"},{"trait_type":"Hat","value":"Rice Farmer Hat"}]}
    expect(await greeter._safeMint(address, 1, 1 )).to.equal("Hello, world!");
  });
});
