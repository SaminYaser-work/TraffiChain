/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/contractInfo.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "driverContractABI": () => (/* binding */ driverContractABI),
/* harmony export */   "driverContractFactoryABI": () => (/* binding */ driverContractFactoryABI),
/* harmony export */   "ticketFactoryContractABI": () => (/* binding */ ticketFactoryContractABI)
/* harmony export */ });
var driverContractABI = [{
  inputs: [{
    internalType: "string",
    name: "_name",
    type: "string"
  }, {
    internalType: "uint256",
    name: "NID",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_licenseNo",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "issue_date",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "exp_date",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  inputs: [{
    internalType: "string",
    name: "_name",
    type: "string"
  }],
  name: "changeName",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint16",
    name: "_score",
    type: "uint16"
  }],
  name: "updateScore",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "getName",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}];
var driverContractFactoryABI = [{
  inputs: [{
    internalType: "address",
    name: "driverWallet",
    type: "address"
  }, {
    internalType: "string",
    name: "name",
    type: "string"
  }, {
    internalType: "uint256",
    name: "nid",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "licenseNo",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "issue_date",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "exp_date",
    type: "uint256"
  }],
  name: "createNewDriverProfile",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "driverWallet",
    type: "address"
  }],
  name: "getDriverProfile",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function",
  constant: true
}, {
  inputs: [],
  name: "getAddress",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function",
  constant: true
}];
var ticketFactoryContractABI = [{
  inputs: [],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  inputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  name: "tickets",
  outputs: [{
    internalType: "contract Ticket",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}];

/******/ })()
;