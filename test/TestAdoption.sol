//pragma solidity ^0.5.0;
//
//import "truffle/Assert.sol";
//import "truffle/DeployedAddresses.sol";
//import "../contracts/Adoption.sol";
//
//
////const Adoption = artifacts.require("Adoption");
////contract("Adoption", adoption => {
////
////})
//
//contract TestAdoption {
//    Adoption adoption = Adoption(DeployedAddresses.Adoption());
//
//    event adopterCast(address adopter);
//
//    function testUserCanAdoptPet() public {
//        uint returnedId = adoption.adopt(8);
//
//        uint expected = 8;
//        Assert.equal(returnedId, expected, "Adoption of Pet ID 8 should be recorded.");
//    }
//
//    function testGetAdopterAddressByPetId() public {
//        address expected = DeployedAddresses.TestAdoption();
//        address adopter = adoption.adopters(8);
//
//        Assert.equal(adopter, expected, "Owner of pet ID 8 should be recorded.");
//    }
//}
