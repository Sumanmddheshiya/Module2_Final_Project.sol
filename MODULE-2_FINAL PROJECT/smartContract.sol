// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    string[] private suman;

    function setName(string memory _name) public {
        suman.push(_name);
    }

    function getAllNames() public view returns (string[] memory) {
        return suman;
    }

    function reset() public {
        delete suman;
    }

    function deleteName(string memory _gupta) public {
        for (uint256 i = 0; i < suman.length; i++) {
            if (keccak256(bytes(suman[i])) == keccak256(bytes(_gupta))) {
                for (uint256 j = i; j < suman.length - 1; j++) {
                    suman[j] = suman[j + 1];
                }
                suman.pop();
                break;
            }
        }
    }
}
