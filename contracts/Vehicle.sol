// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Vehicle {
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

    string private chassisNo;
    string private name;
    Status private status;
    Class private class;
    Type private vehicleType;

    constructor(
        string memory name_,
        string memory chassisNo_,
        Class class_,
        Type type_
    ) {
        name = name_;
        chassisNo = chassisNo_;
        vehicleType = type_;
        class = class_;
        status = Status.registration_pending;
    }

}
