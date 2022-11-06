// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract VehicleFactory {

    enum Status {
        normal,
        impounded,
        decommissioned,
        registration_pending
    }

    enum Class {
        sedan,
        suv,
        bus,
        truck,
        motorbike,
        cng
    }

    enum Type {
        government,
        civilian,
        special
    }

    struct Vehicle {
        string name;
        uint256 chassisNo;
        Status vehicleStatus;
        Class vehicleClass;
        Type vehicleType;
        uint256 licenseNo;
        address owner;
    }

    mapping(address => Vehicle[]) private ownerToVehicles;
    mapping(uint256 => Vehicle) private licenseToVehicle;

    function createNewVehicle(
        string memory name_,
        uint256 chassisNo_,
        Class class_,
        Type type_,
        uint256 licenseNo_
    ) external
    {
        ownerToVehicles[msg.sender].push(Vehicle({
            name: name_,
            chassisNo: chassisNo_,
            vehicleStatus: Status.registration_pending,
            vehicleClass: class_,
            vehicleType: type_,
            licenseNo: licenseNo_,
            owner: msg.sender
        }));

        licenseToVehicle[licenseNo_] = Vehicle({
            name: name_,
            chassisNo: chassisNo_,
            vehicleStatus: Status.registration_pending,
            vehicleClass: class_,
            vehicleType: type_,
            licenseNo: licenseNo_,
            owner: msg.sender
        });

    }

    function changeStatus(
        uint256 licenseNo,
        Status status
    ) external
    {
        licenseToVehicle[licenseNo].vehicleStatus = status;
    }

    function getVehicleByLicense(
        uint256 licenseNo
    ) external view returns(Vehicle memory) {
        return licenseToVehicle[licenseNo];
    }
}
