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
        //xpect(await stakingContract.isStakHolder(address1).to.equal(true))   
    })

    it("should verify if address is a stakholder", async () => {
        const [owner, address1] = await ethers.getSigners();
        const supply = 10000;
        const name = "hapi";
        const symbol = "hapi";
        const staking = await ethers.getContractFactory("StakingToken")
        const stakingContract = await staking.deploy(owner.address, supply, name, symbol);
        stakingContract.addStackHolder(address1.address, 1);
        const stackHolder = stakingContract.getStakHolder(address1.address);
        console.log(stackHolder);
        expect(await stakingContract.isStakHolder(address1.address, stackHolder));
    })
})