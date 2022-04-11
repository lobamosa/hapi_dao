const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('staking', () => {
    beforeEach(async () => {
        const owner = await ethers.getSigners();
        stackingToken = await ethers.getContractFactory('StakingToken')

    })
    it('should transfer from owner to address1', async () => {
        const [owner, address1] = await ethers.getSigners();
        const supply = 10000;
        const name = "hapi";
        const symbol = "hapi";
        const staking = await ethers.getContractFactory("StakingToken")
        const stakingContract = await staking.deploy(owner.address, supply, name, symbol);
        const stakHolder = await stakingContract.transfer(address1.address, 100)
        expect(await stakingContract.balanceOf(address1.address)).to.equal(100)
    })
    it("should return the address of the stakholder", async () => {
        const [owner, address1, address2] = await ethers.getSigners();
        const supply = 10000;
        const name = "hapi";
        const symbol = "hapi";
        const staking = await ethers.getContractFactory("StakingToken")
        const stakingContract = await staking.deploy(owner.address, supply, name, symbol);
        await stakingContract.addStackHolder(address1.address, 100);
        const stakHolder = await stakingContract.getStakHolder(address1.address);
        const stackHolderAddress = await stakingContract.getStakHolderAddress(address1.address);
        expect(await stakingContract.getStakHolderAddress(stackHolderAddress)).to.equal(address1.address)

    })
    it("should verify if address is a stakholder", async () => {
        const [owner, address1, address2] = await ethers.getSigners();
        const supply = 10000;
        const name = "hapi";
        const symbol = "hapi";
        const staking = await ethers.getContractFactory("StakingToken")
        const stakingContract = await staking.deploy(owner.address, supply, name, symbol);
        stakingContract.addStackHolder(address1.address, 100);
        const stackHolder = await stakingContract.getStakHolderAddress(address1.address);
        const test_is_stakholder = await stakingContract.isStakHolder(address1.address);
        expect(test_is_stakholder).to.equal(true)
    })
})