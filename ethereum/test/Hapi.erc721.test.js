const { expect } = require("chai");
const { cp } = require("fs");
const { ethers } = require("hardhat");

describe("Hapi", function () {
  it("should display the balance of Hapi item", async function () {
    const Hapi = await ethers.getContractFactory("Hapi");
    const hapiContract = await Hapi.deploy("HAPI", "HAPI");
    const [address1, address2] = await ethers.getSigners();
    const tokenURI = "https://opensea.mypinata.cloud/ipfs/QmYzLgjwZAPkvtsadop5McYfZBW4cG3oQR6m8gog8gRpUY/2120";
    const tx = await hapiContract.connect(address1).mint(tokenURI);
    expect(await hapiContract.balanceOf(address1.address)).to.equal(1);
  });
});
