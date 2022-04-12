const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hapi", function () {
  it("should display the balance of Thor item", async function () {
    const Hapi = await ethers.getContractFactory("Hapi");
    const hapiContract = await Hapi.deploy();
    await hapiContract.deployed();
    const [address1, address2] = await ethers.getSigners();
    await hapiContract._mint(address1.address, 1)
    expect(await Hapi.balanceOf(address1.address, 1)).to.equal(1);
  });
});
