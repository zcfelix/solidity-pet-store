const Adoption = artifacts.require("Adoption");
const truffleAssert = require('truffle-assertions');

contract("Adoption", async accounts => {
    let instance;

    beforeEach('deploy adoption contract', async () => {
        instance = await Adoption.deployed();
    });

    it('should adopter adopts pet', async () => {
        const petId = 7;
        let tx = await instance.adopt(petId, {from: accounts[9]});
        truffleAssert.eventEmitted(tx, 'PetAdopted', (ev) => {
            return ev.petId.toNumber() === petId && ev.adopter.toString() === accounts[9];
        });
    });

    it('should get adopter address by pet id', async () => {
        const petId = 8;
        await instance.adopt(petId, {from: accounts[1]});
        let adopterAddresses = await instance.adopters.call(petId);
        assert.equal(adopterAddresses, accounts[1]);
    });

    it('should get adopters address by pet id in array', async () => {
        let adopters = await instance.getAdopters();
        assert.equal(adopters[8], accounts[1], "Owner of pet ID 8 should be recorded.");
    });

});
