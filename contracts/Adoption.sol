pragma solidity ^0.5.0;

contract Adoption {
  address[16] public adopters;

  event PetAdopted(uint petId, address adopter);

  function adopt (uint petId) public returns (uint) {
    require(petId >= 0 && petId <= 15);
    adopters[petId] = msg.sender;

    emit PetAdopted(petId, msg.sender);
    return petId;
  }

  function getAdopters() public view returns (address[16] memory) {
    return adopters;
  }
}