// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract VehicleFactory {

    enum VehicleStatus {
        normal,
        impounded,
        decommissioned
    }

    enum VehicleClass {
        sedan,
        suv,
        microbus,
        minibus,
        bus
    }

    enum VehicleType {
        civilian,
        government,
        special
    }

    struct Vehicle {
        string name;
        string chassisNo;
        uint16 vehicleStatus;
        uint16 vehicleClass;
        uint16 vehicleType;
    }

    Vehicle[] private vehicles;

    mapping(address => Vehicle) private ownerToVehicle;


    function registerVehicle
    (
        string calldata _name,
        string calldata _chassisNo,
        uint16 _vehicleStatus,
        uint16 _vehicleClass,
        uint16 _vehicleType
    ) external
    {
        Vehicle memory vehicle = Vehicle(
            _name,
            _chassisNo,
            _vehicleStatus,
            _vehicleClass,
            _vehicleType
        );

        vehicles.push(vehicle);
    }

    function assignOwner(address owner, uint256 VehicleID) external {
        ownerToVehicle[owner] = vehicles[VehicleID];
    }

    function getOwnedVehicles(address owner) external {

    }
}
