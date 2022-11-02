const driverContractABI = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "NID",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_licenseNo",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "issue_date",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "exp_date",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        name: "changeName",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getName",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_score",
                type: "uint16",
            },
        ],
        name: "updateScore",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

const driverContractByteCode = {
    functionDebugData: {
        "@_47": {
            entryPoint: null,
            id: 47,
            parameterSlots: 5,
            returnSlots: 0,
        },
        abi_decode_available_length_t_string_memory_ptr_fromMemory: {
            entryPoint: 392,
            id: null,
            parameterSlots: 3,
            returnSlots: 1,
        },
        abi_decode_t_string_memory_ptr_fromMemory: {
            entryPoint: 467,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
        },
        abi_decode_t_uint256_fromMemory: {
            entryPoint: 554,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
        },
        abi_decode_tuple_t_string_memory_ptrt_uint256t_uint256t_uint256t_uint256_fromMemory:
            {
                entryPoint: 577,
                id: null,
                parameterSlots: 2,
                returnSlots: 5,
            },
        allocate_memory: {
            entryPoint: 263,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        allocate_unbounded: {
            entryPoint: 115,
            id: null,
            parameterSlots: 0,
            returnSlots: 1,
        },
        array_allocation_size_t_string_memory_ptr: {
            entryPoint: 294,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        array_dataslot_t_string_storage: {
            entryPoint: 855,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        array_length_t_string_memory_ptr: {
            entryPoint: 744,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        clean_up_bytearray_end_slots_t_string_storage: {
            entryPoint: 1166,
            id: null,
            parameterSlots: 3,
            returnSlots: 0,
        },
        cleanup_t_uint256: {
            entryPoint: 518,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        clear_storage_range_t_bytes1: {
            entryPoint: 1127,
            id: null,
            parameterSlots: 2,
            returnSlots: 0,
        },
        convert_t_uint256_to_t_uint256: {
            entryPoint: 1001,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage:
            {
                entryPoint: 1321,
                id: null,
                parameterSlots: 2,
                returnSlots: 0,
            },
        copy_memory_to_memory_with_cleanup: {
            entryPoint: 348,
            id: null,
            parameterSlots: 3,
            returnSlots: 0,
        },
        divide_by_32_ceil: {
            entryPoint: 876,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        extract_byte_array_length: {
            entryPoint: 802,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        extract_used_part_and_set_length_of_short_byte_array: {
            entryPoint: 1291,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
        },
        finalize_allocation: {
            entryPoint: 209,
            id: null,
            parameterSlots: 2,
            returnSlots: 0,
        },
        identity: {
            entryPoint: 991,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        mask_bytes_dynamic: {
            entryPoint: 1259,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
        },
        panic_error_0x22: {
            entryPoint: 755,
            id: null,
            parameterSlots: 0,
            returnSlots: 0,
        },
        panic_error_0x41: {
            entryPoint: 162,
            id: null,
            parameterSlots: 0,
            returnSlots: 0,
        },
        prepare_store_t_uint256: {
            entryPoint: 1041,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d:
            {
                entryPoint: 135,
                id: null,
                parameterSlots: 0,
                returnSlots: 0,
            },
        revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae:
            {
                entryPoint: 140,
                id: null,
                parameterSlots: 0,
                returnSlots: 0,
            },
        revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db:
            {
                entryPoint: 130,
                id: null,
                parameterSlots: 0,
                returnSlots: 0,
            },
        revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b:
            {
                entryPoint: 125,
                id: null,
                parameterSlots: 0,
                returnSlots: 0,
            },
        round_up_to_mul_of_32: {
            entryPoint: 145,
            id: null,
            parameterSlots: 1,
            returnSlots: 1,
        },
        shift_left_dynamic: {
            entryPoint: 892,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
        },
        shift_right_unsigned_dynamic: {
            entryPoint: 1246,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
        },
        storage_set_to_zero_t_uint256: {
            entryPoint: 1099,
            id: null,
            parameterSlots: 2,
            returnSlots: 0,
        },
        update_byte_slice_dynamic32: {
            entryPoint: 905,
            id: null,
            parameterSlots: 3,
            returnSlots: 1,
        },
        update_storage_value_t_uint256_to_t_uint256: {
            entryPoint: 1051,
            id: null,
            parameterSlots: 3,
            returnSlots: 0,
        },
        validator_revert_t_uint256: {
            entryPoint: 528,
            id: null,
            parameterSlots: 1,
            returnSlots: 0,
        },
        zero_value_for_split_t_uint256: {
            entryPoint: 1094,
            id: null,
            parameterSlots: 0,
            returnSlots: 1,
        },
    },
    generatedSources: [
        {
            ast: {
                nodeType: "YulBlock",
                src: "0:9148:1",
                statements: [
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "47:35:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "57:19:1",
                                    value: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "73:2:1",
                                                type: "",
                                                value: "64",
                                            },
                                        ],
                                        functionName: {
                                            name: "mload",
                                            nodeType: "YulIdentifier",
                                            src: "67:5:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "67:9:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "memPtr",
                                            nodeType: "YulIdentifier",
                                            src: "57:6:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "allocate_unbounded",
                        nodeType: "YulFunctionDefinition",
                        returnVariables: [
                            {
                                name: "memPtr",
                                nodeType: "YulTypedName",
                                src: "40:6:1",
                                type: "",
                            },
                        ],
                        src: "7:75:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "177:28:1",
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "194:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "197:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                        ],
                                        functionName: {
                                            name: "revert",
                                            nodeType: "YulIdentifier",
                                            src: "187:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "187:12:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "187:12:1",
                                },
                            ],
                        },
                        name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                        nodeType: "YulFunctionDefinition",
                        src: "88:117:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "300:28:1",
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "317:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "320:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                        ],
                                        functionName: {
                                            name: "revert",
                                            nodeType: "YulIdentifier",
                                            src: "310:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "310:12:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "310:12:1",
                                },
                            ],
                        },
                        name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                        nodeType: "YulFunctionDefinition",
                        src: "211:117:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "423:28:1",
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "440:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "443:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                        ],
                                        functionName: {
                                            name: "revert",
                                            nodeType: "YulIdentifier",
                                            src: "433:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "433:12:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "433:12:1",
                                },
                            ],
                        },
                        name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                        nodeType: "YulFunctionDefinition",
                        src: "334:117:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "546:28:1",
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "563:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "566:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                        ],
                                        functionName: {
                                            name: "revert",
                                            nodeType: "YulIdentifier",
                                            src: "556:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "556:12:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "556:12:1",
                                },
                            ],
                        },
                        name: "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                        nodeType: "YulFunctionDefinition",
                        src: "457:117:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "628:54:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "638:38:1",
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: "value",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "656:5:1",
                                                    },
                                                    {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "663:2:1",
                                                        type: "",
                                                        value: "31",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "add",
                                                    nodeType: "YulIdentifier",
                                                    src: "652:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "652:14:1",
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "672:2:1",
                                                        type: "",
                                                        value: "31",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "not",
                                                    nodeType: "YulIdentifier",
                                                    src: "668:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "668:7:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "and",
                                            nodeType: "YulIdentifier",
                                            src: "648:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "648:28:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "result",
                                            nodeType: "YulIdentifier",
                                            src: "638:6:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "round_up_to_mul_of_32",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "611:5:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "result",
                                nodeType: "YulTypedName",
                                src: "621:6:1",
                                type: "",
                            },
                        ],
                        src: "580:102:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "716:152:1",
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "733:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "736:77:1",
                                                type: "",
                                                value: "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                                            },
                                        ],
                                        functionName: {
                                            name: "mstore",
                                            nodeType: "YulIdentifier",
                                            src: "726:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "726:88:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "726:88:1",
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "830:1:1",
                                                type: "",
                                                value: "4",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "833:4:1",
                                                type: "",
                                                value: "0x41",
                                            },
                                        ],
                                        functionName: {
                                            name: "mstore",
                                            nodeType: "YulIdentifier",
                                            src: "823:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "823:15:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "823:15:1",
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "854:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "857:4:1",
                                                type: "",
                                                value: "0x24",
                                            },
                                        ],
                                        functionName: {
                                            name: "revert",
                                            nodeType: "YulIdentifier",
                                            src: "847:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "847:15:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "847:15:1",
                                },
                            ],
                        },
                        name: "panic_error_0x41",
                        nodeType: "YulFunctionDefinition",
                        src: "688:180:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "917:238:1",
                            statements: [
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "927:58:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "memPtr",
                                                nodeType: "YulIdentifier",
                                                src: "949:6:1",
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: "size",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "979:4:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "round_up_to_mul_of_32",
                                                    nodeType: "YulIdentifier",
                                                    src: "957:21:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "957:27:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "add",
                                            nodeType: "YulIdentifier",
                                            src: "945:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "945:40:1",
                                    },
                                    variables: [
                                        {
                                            name: "newFreePtr",
                                            nodeType: "YulTypedName",
                                            src: "931:10:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "1096:22:1",
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: "panic_error_0x41",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "1098:16:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "1098:18:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "1098:18:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: "newFreePtr",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "1039:10:1",
                                                    },
                                                    {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "1051:18:1",
                                                        type: "",
                                                        value: "0xffffffffffffffff",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "gt",
                                                    nodeType: "YulIdentifier",
                                                    src: "1036:2:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "1036:34:1",
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: "newFreePtr",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "1075:10:1",
                                                    },
                                                    {
                                                        name: "memPtr",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "1087:6:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "lt",
                                                    nodeType: "YulIdentifier",
                                                    src: "1072:2:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "1072:22:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "or",
                                            nodeType: "YulIdentifier",
                                            src: "1033:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "1033:62:1",
                                    },
                                    nodeType: "YulIf",
                                    src: "1030:88:1",
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "1134:2:1",
                                                type: "",
                                                value: "64",
                                            },
                                            {
                                                name: "newFreePtr",
                                                nodeType: "YulIdentifier",
                                                src: "1138:10:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "mstore",
                                            nodeType: "YulIdentifier",
                                            src: "1127:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "1127:22:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "1127:22:1",
                                },
                            ],
                        },
                        name: "finalize_allocation",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "memPtr",
                                nodeType: "YulTypedName",
                                src: "903:6:1",
                                type: "",
                            },
                            {
                                name: "size",
                                nodeType: "YulTypedName",
                                src: "911:4:1",
                                type: "",
                            },
                        ],
                        src: "874:281:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "1202:88:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "1212:30:1",
                                    value: {
                                        arguments: [],
                                        functionName: {
                                            name: "allocate_unbounded",
                                            nodeType: "YulIdentifier",
                                            src: "1222:18:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "1222:20:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "memPtr",
                                            nodeType: "YulIdentifier",
                                            src: "1212:6:1",
                                        },
                                    ],
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: "memPtr",
                                                nodeType: "YulIdentifier",
                                                src: "1271:6:1",
                                            },
                                            {
                                                name: "size",
                                                nodeType: "YulIdentifier",
                                                src: "1279:4:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "finalize_allocation",
                                            nodeType: "YulIdentifier",
                                            src: "1251:19:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "1251:33:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "1251:33:1",
                                },
                            ],
                        },
                        name: "allocate_memory",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "size",
                                nodeType: "YulTypedName",
                                src: "1186:4:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "memPtr",
                                nodeType: "YulTypedName",
                                src: "1195:6:1",
                                type: "",
                            },
                        ],
                        src: "1161:129:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "1363:241:1",
                            statements: [
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "1468:22:1",
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: "panic_error_0x41",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "1470:16:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "1470:18:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "1470:18:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: "length",
                                                nodeType: "YulIdentifier",
                                                src: "1440:6:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "1448:18:1",
                                                type: "",
                                                value: "0xffffffffffffffff",
                                            },
                                        ],
                                        functionName: {
                                            name: "gt",
                                            nodeType: "YulIdentifier",
                                            src: "1437:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "1437:30:1",
                                    },
                                    nodeType: "YulIf",
                                    src: "1434:56:1",
                                },
                                {
                                    nodeType: "YulAssignment",
                                    src: "1500:37:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "length",
                                                nodeType: "YulIdentifier",
                                                src: "1530:6:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "round_up_to_mul_of_32",
                                            nodeType: "YulIdentifier",
                                            src: "1508:21:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "1508:29:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "size",
                                            nodeType: "YulIdentifier",
                                            src: "1500:4:1",
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulAssignment",
                                    src: "1574:23:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "size",
                                                nodeType: "YulIdentifier",
                                                src: "1586:4:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "1592:4:1",
                                                type: "",
                                                value: "0x20",
                                            },
                                        ],
                                        functionName: {
                                            name: "add",
                                            nodeType: "YulIdentifier",
                                            src: "1582:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "1582:15:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "size",
                                            nodeType: "YulIdentifier",
                                            src: "1574:4:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "array_allocation_size_t_string_memory_ptr",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "length",
                                nodeType: "YulTypedName",
                                src: "1347:6:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "size",
                                nodeType: "YulTypedName",
                                src: "1358:4:1",
                                type: "",
                            },
                        ],
                        src: "1296:308:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "1672:184:1",
                            statements: [
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "1682:10:1",
                                    value: {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "1691:1:1",
                                        type: "",
                                        value: "0",
                                    },
                                    variables: [
                                        {
                                            name: "i",
                                            nodeType: "YulTypedName",
                                            src: "1686:1:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "1751:63:1",
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [
                                                        {
                                                            arguments: [
                                                                {
                                                                    name: "dst",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "1776:3:1",
                                                                },
                                                                {
                                                                    name: "i",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "1781:1:1",
                                                                },
                                                            ],
                                                            functionName: {
                                                                name: "add",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "1772:3:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "1772:11:1",
                                                        },
                                                        {
                                                            arguments: [
                                                                {
                                                                    arguments: [
                                                                        {
                                                                            name: "src",
                                                                            nodeType:
                                                                                "YulIdentifier",
                                                                            src: "1795:3:1",
                                                                        },
                                                                        {
                                                                            name: "i",
                                                                            nodeType:
                                                                                "YulIdentifier",
                                                                            src: "1800:1:1",
                                                                        },
                                                                    ],
                                                                    functionName:
                                                                        {
                                                                            name: "add",
                                                                            nodeType:
                                                                                "YulIdentifier",
                                                                            src: "1791:3:1",
                                                                        },
                                                                    nodeType:
                                                                        "YulFunctionCall",
                                                                    src: "1791:11:1",
                                                                },
                                                            ],
                                                            functionName: {
                                                                name: "mload",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "1785:5:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "1785:18:1",
                                                        },
                                                    ],
                                                    functionName: {
                                                        name: "mstore",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "1765:6:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "1765:39:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "1765:39:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: "i",
                                                nodeType: "YulIdentifier",
                                                src: "1712:1:1",
                                            },
                                            {
                                                name: "length",
                                                nodeType: "YulIdentifier",
                                                src: "1715:6:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "lt",
                                            nodeType: "YulIdentifier",
                                            src: "1709:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "1709:13:1",
                                    },
                                    nodeType: "YulForLoop",
                                    post: {
                                        nodeType: "YulBlock",
                                        src: "1723:19:1",
                                        statements: [
                                            {
                                                nodeType: "YulAssignment",
                                                src: "1725:15:1",
                                                value: {
                                                    arguments: [
                                                        {
                                                            name: "i",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "1734:1:1",
                                                        },
                                                        {
                                                            kind: "number",
                                                            nodeType:
                                                                "YulLiteral",
                                                            src: "1737:2:1",
                                                            type: "",
                                                            value: "32",
                                                        },
                                                    ],
                                                    functionName: {
                                                        name: "add",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "1730:3:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "1730:10:1",
                                                },
                                                variableNames: [
                                                    {
                                                        name: "i",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "1725:1:1",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    pre: {
                                        nodeType: "YulBlock",
                                        src: "1705:3:1",
                                        statements: [],
                                    },
                                    src: "1701:113:1",
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: "dst",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "1834:3:1",
                                                    },
                                                    {
                                                        name: "length",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "1839:6:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "add",
                                                    nodeType: "YulIdentifier",
                                                    src: "1830:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "1830:16:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "1848:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                        ],
                                        functionName: {
                                            name: "mstore",
                                            nodeType: "YulIdentifier",
                                            src: "1823:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "1823:27:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "1823:27:1",
                                },
                            ],
                        },
                        name: "copy_memory_to_memory_with_cleanup",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "src",
                                nodeType: "YulTypedName",
                                src: "1654:3:1",
                                type: "",
                            },
                            {
                                name: "dst",
                                nodeType: "YulTypedName",
                                src: "1659:3:1",
                                type: "",
                            },
                            {
                                name: "length",
                                nodeType: "YulTypedName",
                                src: "1664:6:1",
                                type: "",
                            },
                        ],
                        src: "1610:246:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "1957:339:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "1967:75:1",
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: "length",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "2034:6:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "array_allocation_size_t_string_memory_ptr",
                                                    nodeType: "YulIdentifier",
                                                    src: "1992:41:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "1992:49:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "allocate_memory",
                                            nodeType: "YulIdentifier",
                                            src: "1976:15:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "1976:66:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "array",
                                            nodeType: "YulIdentifier",
                                            src: "1967:5:1",
                                        },
                                    ],
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: "array",
                                                nodeType: "YulIdentifier",
                                                src: "2058:5:1",
                                            },
                                            {
                                                name: "length",
                                                nodeType: "YulIdentifier",
                                                src: "2065:6:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "mstore",
                                            nodeType: "YulIdentifier",
                                            src: "2051:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "2051:21:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "2051:21:1",
                                },
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "2081:27:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "array",
                                                nodeType: "YulIdentifier",
                                                src: "2096:5:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "2103:4:1",
                                                type: "",
                                                value: "0x20",
                                            },
                                        ],
                                        functionName: {
                                            name: "add",
                                            nodeType: "YulIdentifier",
                                            src: "2092:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "2092:16:1",
                                    },
                                    variables: [
                                        {
                                            name: "dst",
                                            nodeType: "YulTypedName",
                                            src: "2085:3:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "2146:83:1",
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "2148:77:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "2148:79:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "2148:79:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: "src",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "2127:3:1",
                                                    },
                                                    {
                                                        name: "length",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "2132:6:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "add",
                                                    nodeType: "YulIdentifier",
                                                    src: "2123:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "2123:16:1",
                                            },
                                            {
                                                name: "end",
                                                nodeType: "YulIdentifier",
                                                src: "2141:3:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "gt",
                                            nodeType: "YulIdentifier",
                                            src: "2120:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "2120:25:1",
                                    },
                                    nodeType: "YulIf",
                                    src: "2117:112:1",
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: "src",
                                                nodeType: "YulIdentifier",
                                                src: "2273:3:1",
                                            },
                                            {
                                                name: "dst",
                                                nodeType: "YulIdentifier",
                                                src: "2278:3:1",
                                            },
                                            {
                                                name: "length",
                                                nodeType: "YulIdentifier",
                                                src: "2283:6:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "copy_memory_to_memory_with_cleanup",
                                            nodeType: "YulIdentifier",
                                            src: "2238:34:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "2238:52:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "2238:52:1",
                                },
                            ],
                        },
                        name: "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "src",
                                nodeType: "YulTypedName",
                                src: "1930:3:1",
                                type: "",
                            },
                            {
                                name: "length",
                                nodeType: "YulTypedName",
                                src: "1935:6:1",
                                type: "",
                            },
                            {
                                name: "end",
                                nodeType: "YulTypedName",
                                src: "1943:3:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "array",
                                nodeType: "YulTypedName",
                                src: "1951:5:1",
                                type: "",
                            },
                        ],
                        src: "1862:434:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "2389:282:1",
                            statements: [
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "2438:83:1",
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "2440:77:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "2440:79:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "2440:79:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "offset",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "2417:6:1",
                                                            },
                                                            {
                                                                kind: "number",
                                                                nodeType:
                                                                    "YulLiteral",
                                                                src: "2425:4:1",
                                                                type: "",
                                                                value: "0x1f",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "add",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "2413:3:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "2413:17:1",
                                                    },
                                                    {
                                                        name: "end",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "2432:3:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "slt",
                                                    nodeType: "YulIdentifier",
                                                    src: "2409:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "2409:27:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "iszero",
                                            nodeType: "YulIdentifier",
                                            src: "2402:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "2402:35:1",
                                    },
                                    nodeType: "YulIf",
                                    src: "2399:122:1",
                                },
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "2530:27:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "offset",
                                                nodeType: "YulIdentifier",
                                                src: "2550:6:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "mload",
                                            nodeType: "YulIdentifier",
                                            src: "2544:5:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "2544:13:1",
                                    },
                                    variables: [
                                        {
                                            name: "length",
                                            nodeType: "YulTypedName",
                                            src: "2534:6:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulAssignment",
                                    src: "2566:99:1",
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: "offset",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "2638:6:1",
                                                    },
                                                    {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "2646:4:1",
                                                        type: "",
                                                        value: "0x20",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "add",
                                                    nodeType: "YulIdentifier",
                                                    src: "2634:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "2634:17:1",
                                            },
                                            {
                                                name: "length",
                                                nodeType: "YulIdentifier",
                                                src: "2653:6:1",
                                            },
                                            {
                                                name: "end",
                                                nodeType: "YulIdentifier",
                                                src: "2661:3:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                                            nodeType: "YulIdentifier",
                                            src: "2575:58:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "2575:90:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "array",
                                            nodeType: "YulIdentifier",
                                            src: "2566:5:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "abi_decode_t_string_memory_ptr_fromMemory",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "offset",
                                nodeType: "YulTypedName",
                                src: "2367:6:1",
                                type: "",
                            },
                            {
                                name: "end",
                                nodeType: "YulTypedName",
                                src: "2375:3:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "array",
                                nodeType: "YulTypedName",
                                src: "2383:5:1",
                                type: "",
                            },
                        ],
                        src: "2316:355:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "2722:32:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "2732:16:1",
                                    value: {
                                        name: "value",
                                        nodeType: "YulIdentifier",
                                        src: "2743:5:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "cleaned",
                                            nodeType: "YulIdentifier",
                                            src: "2732:7:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "cleanup_t_uint256",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "2704:5:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "cleaned",
                                nodeType: "YulTypedName",
                                src: "2714:7:1",
                                type: "",
                            },
                        ],
                        src: "2677:77:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "2803:79:1",
                            statements: [
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "2860:16:1",
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [
                                                        {
                                                            kind: "number",
                                                            nodeType:
                                                                "YulLiteral",
                                                            src: "2869:1:1",
                                                            type: "",
                                                            value: "0",
                                                        },
                                                        {
                                                            kind: "number",
                                                            nodeType:
                                                                "YulLiteral",
                                                            src: "2872:1:1",
                                                            type: "",
                                                            value: "0",
                                                        },
                                                    ],
                                                    functionName: {
                                                        name: "revert",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "2862:6:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "2862:12:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "2862:12:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: "value",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "2826:5:1",
                                                    },
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "value",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "2851:5:1",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "cleanup_t_uint256",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "2833:17:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "2833:24:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "eq",
                                                    nodeType: "YulIdentifier",
                                                    src: "2823:2:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "2823:35:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "iszero",
                                            nodeType: "YulIdentifier",
                                            src: "2816:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "2816:43:1",
                                    },
                                    nodeType: "YulIf",
                                    src: "2813:63:1",
                                },
                            ],
                        },
                        name: "validator_revert_t_uint256",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "2796:5:1",
                                type: "",
                            },
                        ],
                        src: "2760:122:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "2951:80:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "2961:22:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "offset",
                                                nodeType: "YulIdentifier",
                                                src: "2976:6:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "mload",
                                            nodeType: "YulIdentifier",
                                            src: "2970:5:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "2970:13:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "value",
                                            nodeType: "YulIdentifier",
                                            src: "2961:5:1",
                                        },
                                    ],
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: "value",
                                                nodeType: "YulIdentifier",
                                                src: "3019:5:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "validator_revert_t_uint256",
                                            nodeType: "YulIdentifier",
                                            src: "2992:26:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "2992:33:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "2992:33:1",
                                },
                            ],
                        },
                        name: "abi_decode_t_uint256_fromMemory",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "offset",
                                nodeType: "YulTypedName",
                                src: "2929:6:1",
                                type: "",
                            },
                            {
                                name: "end",
                                nodeType: "YulTypedName",
                                src: "2937:3:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "2945:5:1",
                                type: "",
                            },
                        ],
                        src: "2888:143:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "3192:995:1",
                            statements: [
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "3239:83:1",
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "3241:77:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "3241:79:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "3241:79:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: "dataEnd",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "3213:7:1",
                                                    },
                                                    {
                                                        name: "headStart",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "3222:9:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "sub",
                                                    nodeType: "YulIdentifier",
                                                    src: "3209:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "3209:23:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "3234:3:1",
                                                type: "",
                                                value: "160",
                                            },
                                        ],
                                        functionName: {
                                            name: "slt",
                                            nodeType: "YulIdentifier",
                                            src: "3205:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "3205:33:1",
                                    },
                                    nodeType: "YulIf",
                                    src: "3202:120:1",
                                },
                                {
                                    nodeType: "YulBlock",
                                    src: "3332:291:1",
                                    statements: [
                                        {
                                            nodeType: "YulVariableDeclaration",
                                            src: "3347:38:1",
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "headStart",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "3371:9:1",
                                                            },
                                                            {
                                                                kind: "number",
                                                                nodeType:
                                                                    "YulLiteral",
                                                                src: "3382:1:1",
                                                                type: "",
                                                                value: "0",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "add",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "3367:3:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "3367:17:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "mload",
                                                    nodeType: "YulIdentifier",
                                                    src: "3361:5:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "3361:24:1",
                                            },
                                            variables: [
                                                {
                                                    name: "offset",
                                                    nodeType: "YulTypedName",
                                                    src: "3351:6:1",
                                                    type: "",
                                                },
                                            ],
                                        },
                                        {
                                            body: {
                                                nodeType: "YulBlock",
                                                src: "3432:83:1",
                                                statements: [
                                                    {
                                                        expression: {
                                                            arguments: [],
                                                            functionName: {
                                                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "3434:77:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "3434:79:1",
                                                        },
                                                        nodeType:
                                                            "YulExpressionStatement",
                                                        src: "3434:79:1",
                                                    },
                                                ],
                                            },
                                            condition: {
                                                arguments: [
                                                    {
                                                        name: "offset",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "3404:6:1",
                                                    },
                                                    {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "3412:18:1",
                                                        type: "",
                                                        value: "0xffffffffffffffff",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "gt",
                                                    nodeType: "YulIdentifier",
                                                    src: "3401:2:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "3401:30:1",
                                            },
                                            nodeType: "YulIf",
                                            src: "3398:117:1",
                                        },
                                        {
                                            nodeType: "YulAssignment",
                                            src: "3529:84:1",
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "headStart",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "3585:9:1",
                                                            },
                                                            {
                                                                name: "offset",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "3596:6:1",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "add",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "3581:3:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "3581:22:1",
                                                    },
                                                    {
                                                        name: "dataEnd",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "3605:7:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "abi_decode_t_string_memory_ptr_fromMemory",
                                                    nodeType: "YulIdentifier",
                                                    src: "3539:41:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "3539:74:1",
                                            },
                                            variableNames: [
                                                {
                                                    name: "value0",
                                                    nodeType: "YulIdentifier",
                                                    src: "3529:6:1",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulBlock",
                                    src: "3633:129:1",
                                    statements: [
                                        {
                                            nodeType: "YulVariableDeclaration",
                                            src: "3648:16:1",
                                            value: {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "3662:2:1",
                                                type: "",
                                                value: "32",
                                            },
                                            variables: [
                                                {
                                                    name: "offset",
                                                    nodeType: "YulTypedName",
                                                    src: "3652:6:1",
                                                    type: "",
                                                },
                                            ],
                                        },
                                        {
                                            nodeType: "YulAssignment",
                                            src: "3678:74:1",
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "headStart",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "3724:9:1",
                                                            },
                                                            {
                                                                name: "offset",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "3735:6:1",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "add",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "3720:3:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "3720:22:1",
                                                    },
                                                    {
                                                        name: "dataEnd",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "3744:7:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "abi_decode_t_uint256_fromMemory",
                                                    nodeType: "YulIdentifier",
                                                    src: "3688:31:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "3688:64:1",
                                            },
                                            variableNames: [
                                                {
                                                    name: "value1",
                                                    nodeType: "YulIdentifier",
                                                    src: "3678:6:1",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulBlock",
                                    src: "3772:129:1",
                                    statements: [
                                        {
                                            nodeType: "YulVariableDeclaration",
                                            src: "3787:16:1",
                                            value: {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "3801:2:1",
                                                type: "",
                                                value: "64",
                                            },
                                            variables: [
                                                {
                                                    name: "offset",
                                                    nodeType: "YulTypedName",
                                                    src: "3791:6:1",
                                                    type: "",
                                                },
                                            ],
                                        },
                                        {
                                            nodeType: "YulAssignment",
                                            src: "3817:74:1",
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "headStart",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "3863:9:1",
                                                            },
                                                            {
                                                                name: "offset",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "3874:6:1",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "add",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "3859:3:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "3859:22:1",
                                                    },
                                                    {
                                                        name: "dataEnd",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "3883:7:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "abi_decode_t_uint256_fromMemory",
                                                    nodeType: "YulIdentifier",
                                                    src: "3827:31:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "3827:64:1",
                                            },
                                            variableNames: [
                                                {
                                                    name: "value2",
                                                    nodeType: "YulIdentifier",
                                                    src: "3817:6:1",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulBlock",
                                    src: "3911:129:1",
                                    statements: [
                                        {
                                            nodeType: "YulVariableDeclaration",
                                            src: "3926:16:1",
                                            value: {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "3940:2:1",
                                                type: "",
                                                value: "96",
                                            },
                                            variables: [
                                                {
                                                    name: "offset",
                                                    nodeType: "YulTypedName",
                                                    src: "3930:6:1",
                                                    type: "",
                                                },
                                            ],
                                        },
                                        {
                                            nodeType: "YulAssignment",
                                            src: "3956:74:1",
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "headStart",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "4002:9:1",
                                                            },
                                                            {
                                                                name: "offset",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "4013:6:1",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "add",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "3998:3:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "3998:22:1",
                                                    },
                                                    {
                                                        name: "dataEnd",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "4022:7:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "abi_decode_t_uint256_fromMemory",
                                                    nodeType: "YulIdentifier",
                                                    src: "3966:31:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "3966:64:1",
                                            },
                                            variableNames: [
                                                {
                                                    name: "value3",
                                                    nodeType: "YulIdentifier",
                                                    src: "3956:6:1",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulBlock",
                                    src: "4050:130:1",
                                    statements: [
                                        {
                                            nodeType: "YulVariableDeclaration",
                                            src: "4065:17:1",
                                            value: {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4079:3:1",
                                                type: "",
                                                value: "128",
                                            },
                                            variables: [
                                                {
                                                    name: "offset",
                                                    nodeType: "YulTypedName",
                                                    src: "4069:6:1",
                                                    type: "",
                                                },
                                            ],
                                        },
                                        {
                                            nodeType: "YulAssignment",
                                            src: "4096:74:1",
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "headStart",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "4142:9:1",
                                                            },
                                                            {
                                                                name: "offset",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "4153:6:1",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "add",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "4138:3:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "4138:22:1",
                                                    },
                                                    {
                                                        name: "dataEnd",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "4162:7:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "abi_decode_t_uint256_fromMemory",
                                                    nodeType: "YulIdentifier",
                                                    src: "4106:31:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "4106:64:1",
                                            },
                                            variableNames: [
                                                {
                                                    name: "value4",
                                                    nodeType: "YulIdentifier",
                                                    src: "4096:6:1",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "abi_decode_tuple_t_string_memory_ptrt_uint256t_uint256t_uint256t_uint256_fromMemory",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "headStart",
                                nodeType: "YulTypedName",
                                src: "3130:9:1",
                                type: "",
                            },
                            {
                                name: "dataEnd",
                                nodeType: "YulTypedName",
                                src: "3141:7:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "value0",
                                nodeType: "YulTypedName",
                                src: "3153:6:1",
                                type: "",
                            },
                            {
                                name: "value1",
                                nodeType: "YulTypedName",
                                src: "3161:6:1",
                                type: "",
                            },
                            {
                                name: "value2",
                                nodeType: "YulTypedName",
                                src: "3169:6:1",
                                type: "",
                            },
                            {
                                name: "value3",
                                nodeType: "YulTypedName",
                                src: "3177:6:1",
                                type: "",
                            },
                            {
                                name: "value4",
                                nodeType: "YulTypedName",
                                src: "3185:6:1",
                                type: "",
                            },
                        ],
                        src: "3037:1150:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "4252:40:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "4263:22:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "value",
                                                nodeType: "YulIdentifier",
                                                src: "4279:5:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "mload",
                                            nodeType: "YulIdentifier",
                                            src: "4273:5:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4273:12:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "length",
                                            nodeType: "YulIdentifier",
                                            src: "4263:6:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "array_length_t_string_memory_ptr",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "4235:5:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "length",
                                nodeType: "YulTypedName",
                                src: "4245:6:1",
                                type: "",
                            },
                        ],
                        src: "4193:99:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "4326:152:1",
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4343:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4346:77:1",
                                                type: "",
                                                value: "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                                            },
                                        ],
                                        functionName: {
                                            name: "mstore",
                                            nodeType: "YulIdentifier",
                                            src: "4336:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4336:88:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "4336:88:1",
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4440:1:1",
                                                type: "",
                                                value: "4",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4443:4:1",
                                                type: "",
                                                value: "0x22",
                                            },
                                        ],
                                        functionName: {
                                            name: "mstore",
                                            nodeType: "YulIdentifier",
                                            src: "4433:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4433:15:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "4433:15:1",
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4464:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4467:4:1",
                                                type: "",
                                                value: "0x24",
                                            },
                                        ],
                                        functionName: {
                                            name: "revert",
                                            nodeType: "YulIdentifier",
                                            src: "4457:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4457:15:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "4457:15:1",
                                },
                            ],
                        },
                        name: "panic_error_0x22",
                        nodeType: "YulFunctionDefinition",
                        src: "4298:180:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "4535:269:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "4545:22:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "data",
                                                nodeType: "YulIdentifier",
                                                src: "4559:4:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4565:1:1",
                                                type: "",
                                                value: "2",
                                            },
                                        ],
                                        functionName: {
                                            name: "div",
                                            nodeType: "YulIdentifier",
                                            src: "4555:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4555:12:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "length",
                                            nodeType: "YulIdentifier",
                                            src: "4545:6:1",
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "4576:38:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "data",
                                                nodeType: "YulIdentifier",
                                                src: "4606:4:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4612:1:1",
                                                type: "",
                                                value: "1",
                                            },
                                        ],
                                        functionName: {
                                            name: "and",
                                            nodeType: "YulIdentifier",
                                            src: "4602:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4602:12:1",
                                    },
                                    variables: [
                                        {
                                            name: "outOfPlaceEncoding",
                                            nodeType: "YulTypedName",
                                            src: "4580:18:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "4653:51:1",
                                        statements: [
                                            {
                                                nodeType: "YulAssignment",
                                                src: "4667:27:1",
                                                value: {
                                                    arguments: [
                                                        {
                                                            name: "length",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "4681:6:1",
                                                        },
                                                        {
                                                            kind: "number",
                                                            nodeType:
                                                                "YulLiteral",
                                                            src: "4689:4:1",
                                                            type: "",
                                                            value: "0x7f",
                                                        },
                                                    ],
                                                    functionName: {
                                                        name: "and",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "4677:3:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "4677:17:1",
                                                },
                                                variableNames: [
                                                    {
                                                        name: "length",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "4667:6:1",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: "outOfPlaceEncoding",
                                                nodeType: "YulIdentifier",
                                                src: "4633:18:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "iszero",
                                            nodeType: "YulIdentifier",
                                            src: "4626:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4626:26:1",
                                    },
                                    nodeType: "YulIf",
                                    src: "4623:81:1",
                                },
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "4756:42:1",
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: "panic_error_0x22",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "4770:16:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "4770:18:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "4770:18:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: "outOfPlaceEncoding",
                                                nodeType: "YulIdentifier",
                                                src: "4720:18:1",
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: "length",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "4743:6:1",
                                                    },
                                                    {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "4751:2:1",
                                                        type: "",
                                                        value: "32",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "lt",
                                                    nodeType: "YulIdentifier",
                                                    src: "4740:2:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "4740:14:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "eq",
                                            nodeType: "YulIdentifier",
                                            src: "4717:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4717:38:1",
                                    },
                                    nodeType: "YulIf",
                                    src: "4714:84:1",
                                },
                            ],
                        },
                        name: "extract_byte_array_length",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "data",
                                nodeType: "YulTypedName",
                                src: "4519:4:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "length",
                                nodeType: "YulTypedName",
                                src: "4528:6:1",
                                type: "",
                            },
                        ],
                        src: "4484:320:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "4864:87:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "4874:11:1",
                                    value: {
                                        name: "ptr",
                                        nodeType: "YulIdentifier",
                                        src: "4882:3:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "data",
                                            nodeType: "YulIdentifier",
                                            src: "4874:4:1",
                                        },
                                    ],
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4902:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                            {
                                                name: "ptr",
                                                nodeType: "YulIdentifier",
                                                src: "4905:3:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "mstore",
                                            nodeType: "YulIdentifier",
                                            src: "4895:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4895:14:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "4895:14:1",
                                },
                                {
                                    nodeType: "YulAssignment",
                                    src: "4918:26:1",
                                    value: {
                                        arguments: [
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4936:1:1",
                                                type: "",
                                                value: "0",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4939:4:1",
                                                type: "",
                                                value: "0x20",
                                            },
                                        ],
                                        functionName: {
                                            name: "keccak256",
                                            nodeType: "YulIdentifier",
                                            src: "4926:9:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4926:18:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "data",
                                            nodeType: "YulIdentifier",
                                            src: "4918:4:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "array_dataslot_t_string_storage",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "ptr",
                                nodeType: "YulTypedName",
                                src: "4851:3:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "data",
                                nodeType: "YulTypedName",
                                src: "4859:4:1",
                                type: "",
                            },
                        ],
                        src: "4810:141:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "5001:49:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "5011:33:1",
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: "value",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "5029:5:1",
                                                    },
                                                    {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "5036:2:1",
                                                        type: "",
                                                        value: "31",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "add",
                                                    nodeType: "YulIdentifier",
                                                    src: "5025:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "5025:14:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "5041:2:1",
                                                type: "",
                                                value: "32",
                                            },
                                        ],
                                        functionName: {
                                            name: "div",
                                            nodeType: "YulIdentifier",
                                            src: "5021:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5021:23:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "result",
                                            nodeType: "YulIdentifier",
                                            src: "5011:6:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "divide_by_32_ceil",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "4984:5:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "result",
                                nodeType: "YulTypedName",
                                src: "4994:6:1",
                                type: "",
                            },
                        ],
                        src: "4957:93:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "5109:54:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "5119:37:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "bits",
                                                nodeType: "YulIdentifier",
                                                src: "5144:4:1",
                                            },
                                            {
                                                name: "value",
                                                nodeType: "YulIdentifier",
                                                src: "5150:5:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "shl",
                                            nodeType: "YulIdentifier",
                                            src: "5140:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5140:16:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "newValue",
                                            nodeType: "YulIdentifier",
                                            src: "5119:8:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "shift_left_dynamic",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "bits",
                                nodeType: "YulTypedName",
                                src: "5084:4:1",
                                type: "",
                            },
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "5090:5:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "newValue",
                                nodeType: "YulTypedName",
                                src: "5100:8:1",
                                type: "",
                            },
                        ],
                        src: "5056:107:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "5245:317:1",
                            statements: [
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "5255:35:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "shiftBytes",
                                                nodeType: "YulIdentifier",
                                                src: "5276:10:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "5288:1:1",
                                                type: "",
                                                value: "8",
                                            },
                                        ],
                                        functionName: {
                                            name: "mul",
                                            nodeType: "YulIdentifier",
                                            src: "5272:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5272:18:1",
                                    },
                                    variables: [
                                        {
                                            name: "shiftBits",
                                            nodeType: "YulTypedName",
                                            src: "5259:9:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "5299:109:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "shiftBits",
                                                nodeType: "YulIdentifier",
                                                src: "5330:9:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "5341:66:1",
                                                type: "",
                                                value: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                                            },
                                        ],
                                        functionName: {
                                            name: "shift_left_dynamic",
                                            nodeType: "YulIdentifier",
                                            src: "5311:18:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5311:97:1",
                                    },
                                    variables: [
                                        {
                                            name: "mask",
                                            nodeType: "YulTypedName",
                                            src: "5303:4:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulAssignment",
                                    src: "5417:51:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "shiftBits",
                                                nodeType: "YulIdentifier",
                                                src: "5448:9:1",
                                            },
                                            {
                                                name: "toInsert",
                                                nodeType: "YulIdentifier",
                                                src: "5459:8:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "shift_left_dynamic",
                                            nodeType: "YulIdentifier",
                                            src: "5429:18:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5429:39:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "toInsert",
                                            nodeType: "YulIdentifier",
                                            src: "5417:8:1",
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulAssignment",
                                    src: "5477:30:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "value",
                                                nodeType: "YulIdentifier",
                                                src: "5490:5:1",
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: "mask",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "5501:4:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "not",
                                                    nodeType: "YulIdentifier",
                                                    src: "5497:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "5497:9:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "and",
                                            nodeType: "YulIdentifier",
                                            src: "5486:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5486:21:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "value",
                                            nodeType: "YulIdentifier",
                                            src: "5477:5:1",
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulAssignment",
                                    src: "5516:40:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "value",
                                                nodeType: "YulIdentifier",
                                                src: "5529:5:1",
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: "toInsert",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "5540:8:1",
                                                    },
                                                    {
                                                        name: "mask",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "5550:4:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "and",
                                                    nodeType: "YulIdentifier",
                                                    src: "5536:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "5536:19:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "or",
                                            nodeType: "YulIdentifier",
                                            src: "5526:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5526:30:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "result",
                                            nodeType: "YulIdentifier",
                                            src: "5516:6:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "update_byte_slice_dynamic32",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "5206:5:1",
                                type: "",
                            },
                            {
                                name: "shiftBytes",
                                nodeType: "YulTypedName",
                                src: "5213:10:1",
                                type: "",
                            },
                            {
                                name: "toInsert",
                                nodeType: "YulTypedName",
                                src: "5225:8:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "result",
                                nodeType: "YulTypedName",
                                src: "5238:6:1",
                                type: "",
                            },
                        ],
                        src: "5169:393:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "5600:28:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "5610:12:1",
                                    value: {
                                        name: "value",
                                        nodeType: "YulIdentifier",
                                        src: "5617:5:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "ret",
                                            nodeType: "YulIdentifier",
                                            src: "5610:3:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "identity",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "5586:5:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "ret",
                                nodeType: "YulTypedName",
                                src: "5596:3:1",
                                type: "",
                            },
                        ],
                        src: "5568:60:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "5694:82:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "5704:66:1",
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "value",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "5762:5:1",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "cleanup_t_uint256",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "5744:17:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "5744:24:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "identity",
                                                    nodeType: "YulIdentifier",
                                                    src: "5735:8:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "5735:34:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "cleanup_t_uint256",
                                            nodeType: "YulIdentifier",
                                            src: "5717:17:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5717:53:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "converted",
                                            nodeType: "YulIdentifier",
                                            src: "5704:9:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "convert_t_uint256_to_t_uint256",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "5674:5:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "converted",
                                nodeType: "YulTypedName",
                                src: "5684:9:1",
                                type: "",
                            },
                        ],
                        src: "5634:142:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "5829:28:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "5839:12:1",
                                    value: {
                                        name: "value",
                                        nodeType: "YulIdentifier",
                                        src: "5846:5:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "ret",
                                            nodeType: "YulIdentifier",
                                            src: "5839:3:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "prepare_store_t_uint256",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "5815:5:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "ret",
                                nodeType: "YulTypedName",
                                src: "5825:3:1",
                                type: "",
                            },
                        ],
                        src: "5782:75:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "5939:193:1",
                            statements: [
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "5949:63:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "value_0",
                                                nodeType: "YulIdentifier",
                                                src: "6004:7:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "convert_t_uint256_to_t_uint256",
                                            nodeType: "YulIdentifier",
                                            src: "5973:30:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5973:39:1",
                                    },
                                    variables: [
                                        {
                                            name: "convertedValue_0",
                                            nodeType: "YulTypedName",
                                            src: "5953:16:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: "slot",
                                                nodeType: "YulIdentifier",
                                                src: "6028:4:1",
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "slot",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "6068:4:1",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "sload",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "6062:5:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "6062:11:1",
                                                    },
                                                    {
                                                        name: "offset",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "6075:6:1",
                                                    },
                                                    {
                                                        arguments: [
                                                            {
                                                                name: "convertedValue_0",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "6107:16:1",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "prepare_store_t_uint256",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "6083:23:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "6083:41:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "update_byte_slice_dynamic32",
                                                    nodeType: "YulIdentifier",
                                                    src: "6034:27:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "6034:91:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "sstore",
                                            nodeType: "YulIdentifier",
                                            src: "6021:6:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "6021:105:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "6021:105:1",
                                },
                            ],
                        },
                        name: "update_storage_value_t_uint256_to_t_uint256",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "slot",
                                nodeType: "YulTypedName",
                                src: "5916:4:1",
                                type: "",
                            },
                            {
                                name: "offset",
                                nodeType: "YulTypedName",
                                src: "5922:6:1",
                                type: "",
                            },
                            {
                                name: "value_0",
                                nodeType: "YulTypedName",
                                src: "5930:7:1",
                                type: "",
                            },
                        ],
                        src: "5863:269:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "6187:24:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "6197:8:1",
                                    value: {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "6204:1:1",
                                        type: "",
                                        value: "0",
                                    },
                                    variableNames: [
                                        {
                                            name: "ret",
                                            nodeType: "YulIdentifier",
                                            src: "6197:3:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "zero_value_for_split_t_uint256",
                        nodeType: "YulFunctionDefinition",
                        returnVariables: [
                            {
                                name: "ret",
                                nodeType: "YulTypedName",
                                src: "6183:3:1",
                                type: "",
                            },
                        ],
                        src: "6138:73:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "6270:136:1",
                            statements: [
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "6280:46:1",
                                    value: {
                                        arguments: [],
                                        functionName: {
                                            name: "zero_value_for_split_t_uint256",
                                            nodeType: "YulIdentifier",
                                            src: "6294:30:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "6294:32:1",
                                    },
                                    variables: [
                                        {
                                            name: "zero_0",
                                            nodeType: "YulTypedName",
                                            src: "6284:6:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: "slot",
                                                nodeType: "YulIdentifier",
                                                src: "6379:4:1",
                                            },
                                            {
                                                name: "offset",
                                                nodeType: "YulIdentifier",
                                                src: "6385:6:1",
                                            },
                                            {
                                                name: "zero_0",
                                                nodeType: "YulIdentifier",
                                                src: "6393:6:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "update_storage_value_t_uint256_to_t_uint256",
                                            nodeType: "YulIdentifier",
                                            src: "6335:43:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "6335:65:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "6335:65:1",
                                },
                            ],
                        },
                        name: "storage_set_to_zero_t_uint256",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "slot",
                                nodeType: "YulTypedName",
                                src: "6256:4:1",
                                type: "",
                            },
                            {
                                name: "offset",
                                nodeType: "YulTypedName",
                                src: "6262:6:1",
                                type: "",
                            },
                        ],
                        src: "6217:189:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "6462:136:1",
                            statements: [
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "6529:63:1",
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [
                                                        {
                                                            name: "start",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "6573:5:1",
                                                        },
                                                        {
                                                            kind: "number",
                                                            nodeType:
                                                                "YulLiteral",
                                                            src: "6580:1:1",
                                                            type: "",
                                                            value: "0",
                                                        },
                                                    ],
                                                    functionName: {
                                                        name: "storage_set_to_zero_t_uint256",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "6543:29:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "6543:39:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "6543:39:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: "start",
                                                nodeType: "YulIdentifier",
                                                src: "6482:5:1",
                                            },
                                            {
                                                name: "end",
                                                nodeType: "YulIdentifier",
                                                src: "6489:3:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "lt",
                                            nodeType: "YulIdentifier",
                                            src: "6479:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "6479:14:1",
                                    },
                                    nodeType: "YulForLoop",
                                    post: {
                                        nodeType: "YulBlock",
                                        src: "6494:26:1",
                                        statements: [
                                            {
                                                nodeType: "YulAssignment",
                                                src: "6496:22:1",
                                                value: {
                                                    arguments: [
                                                        {
                                                            name: "start",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "6509:5:1",
                                                        },
                                                        {
                                                            kind: "number",
                                                            nodeType:
                                                                "YulLiteral",
                                                            src: "6516:1:1",
                                                            type: "",
                                                            value: "1",
                                                        },
                                                    ],
                                                    functionName: {
                                                        name: "add",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "6505:3:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "6505:13:1",
                                                },
                                                variableNames: [
                                                    {
                                                        name: "start",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "6496:5:1",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    pre: {
                                        nodeType: "YulBlock",
                                        src: "6476:2:1",
                                        statements: [],
                                    },
                                    src: "6472:120:1",
                                },
                            ],
                        },
                        name: "clear_storage_range_t_bytes1",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "start",
                                nodeType: "YulTypedName",
                                src: "6450:5:1",
                                type: "",
                            },
                            {
                                name: "end",
                                nodeType: "YulTypedName",
                                src: "6457:3:1",
                                type: "",
                            },
                        ],
                        src: "6412:186:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "6683:464:1",
                            statements: [
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "6709:431:1",
                                        statements: [
                                            {
                                                nodeType:
                                                    "YulVariableDeclaration",
                                                src: "6723:54:1",
                                                value: {
                                                    arguments: [
                                                        {
                                                            name: "array",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "6771:5:1",
                                                        },
                                                    ],
                                                    functionName: {
                                                        name: "array_dataslot_t_string_storage",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "6739:31:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "6739:38:1",
                                                },
                                                variables: [
                                                    {
                                                        name: "dataArea",
                                                        nodeType:
                                                            "YulTypedName",
                                                        src: "6727:8:1",
                                                        type: "",
                                                    },
                                                ],
                                            },
                                            {
                                                nodeType:
                                                    "YulVariableDeclaration",
                                                src: "6790:63:1",
                                                value: {
                                                    arguments: [
                                                        {
                                                            name: "dataArea",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "6813:8:1",
                                                        },
                                                        {
                                                            arguments: [
                                                                {
                                                                    name: "startIndex",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "6841:10:1",
                                                                },
                                                            ],
                                                            functionName: {
                                                                name: "divide_by_32_ceil",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "6823:17:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "6823:29:1",
                                                        },
                                                    ],
                                                    functionName: {
                                                        name: "add",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "6809:3:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "6809:44:1",
                                                },
                                                variables: [
                                                    {
                                                        name: "deleteStart",
                                                        nodeType:
                                                            "YulTypedName",
                                                        src: "6794:11:1",
                                                        type: "",
                                                    },
                                                ],
                                            },
                                            {
                                                body: {
                                                    nodeType: "YulBlock",
                                                    src: "7010:27:1",
                                                    statements: [
                                                        {
                                                            nodeType:
                                                                "YulAssignment",
                                                            src: "7012:23:1",
                                                            value: {
                                                                name: "dataArea",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "7027:8:1",
                                                            },
                                                            variableNames: [
                                                                {
                                                                    name: "deleteStart",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "7012:11:1",
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                                condition: {
                                                    arguments: [
                                                        {
                                                            name: "startIndex",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "6994:10:1",
                                                        },
                                                        {
                                                            kind: "number",
                                                            nodeType:
                                                                "YulLiteral",
                                                            src: "7006:2:1",
                                                            type: "",
                                                            value: "32",
                                                        },
                                                    ],
                                                    functionName: {
                                                        name: "lt",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "6991:2:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "6991:18:1",
                                                },
                                                nodeType: "YulIf",
                                                src: "6988:49:1",
                                            },
                                            {
                                                expression: {
                                                    arguments: [
                                                        {
                                                            name: "deleteStart",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "7079:11:1",
                                                        },
                                                        {
                                                            arguments: [
                                                                {
                                                                    name: "dataArea",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "7096:8:1",
                                                                },
                                                                {
                                                                    arguments: [
                                                                        {
                                                                            name: "len",
                                                                            nodeType:
                                                                                "YulIdentifier",
                                                                            src: "7124:3:1",
                                                                        },
                                                                    ],
                                                                    functionName:
                                                                        {
                                                                            name: "divide_by_32_ceil",
                                                                            nodeType:
                                                                                "YulIdentifier",
                                                                            src: "7106:17:1",
                                                                        },
                                                                    nodeType:
                                                                        "YulFunctionCall",
                                                                    src: "7106:22:1",
                                                                },
                                                            ],
                                                            functionName: {
                                                                name: "add",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "7092:3:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "7092:37:1",
                                                        },
                                                    ],
                                                    functionName: {
                                                        name: "clear_storage_range_t_bytes1",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "7050:28:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "7050:80:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "7050:80:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: "len",
                                                nodeType: "YulIdentifier",
                                                src: "6700:3:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "6705:2:1",
                                                type: "",
                                                value: "31",
                                            },
                                        ],
                                        functionName: {
                                            name: "gt",
                                            nodeType: "YulIdentifier",
                                            src: "6697:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "6697:11:1",
                                    },
                                    nodeType: "YulIf",
                                    src: "6694:446:1",
                                },
                            ],
                        },
                        name: "clean_up_bytearray_end_slots_t_string_storage",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "array",
                                nodeType: "YulTypedName",
                                src: "6659:5:1",
                                type: "",
                            },
                            {
                                name: "len",
                                nodeType: "YulTypedName",
                                src: "6666:3:1",
                                type: "",
                            },
                            {
                                name: "startIndex",
                                nodeType: "YulTypedName",
                                src: "6671:10:1",
                                type: "",
                            },
                        ],
                        src: "6604:543:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "7216:54:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "7226:37:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "bits",
                                                nodeType: "YulIdentifier",
                                                src: "7251:4:1",
                                            },
                                            {
                                                name: "value",
                                                nodeType: "YulIdentifier",
                                                src: "7257:5:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "shr",
                                            nodeType: "YulIdentifier",
                                            src: "7247:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "7247:16:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "newValue",
                                            nodeType: "YulIdentifier",
                                            src: "7226:8:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "shift_right_unsigned_dynamic",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "bits",
                                nodeType: "YulTypedName",
                                src: "7191:4:1",
                                type: "",
                            },
                            {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "7197:5:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "newValue",
                                nodeType: "YulTypedName",
                                src: "7207:8:1",
                                type: "",
                            },
                        ],
                        src: "7153:117:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "7327:118:1",
                            statements: [
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "7337:68:1",
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                kind: "number",
                                                                nodeType:
                                                                    "YulLiteral",
                                                                src: "7386:1:1",
                                                                type: "",
                                                                value: "8",
                                                            },
                                                            {
                                                                name: "bytes",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "7389:5:1",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "mul",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "7382:3:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "7382:13:1",
                                                    },
                                                    {
                                                        arguments: [
                                                            {
                                                                kind: "number",
                                                                nodeType:
                                                                    "YulLiteral",
                                                                src: "7401:1:1",
                                                                type: "",
                                                                value: "0",
                                                            },
                                                        ],
                                                        functionName: {
                                                            name: "not",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "7397:3:1",
                                                        },
                                                        nodeType:
                                                            "YulFunctionCall",
                                                        src: "7397:6:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "shift_right_unsigned_dynamic",
                                                    nodeType: "YulIdentifier",
                                                    src: "7353:28:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "7353:51:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "not",
                                            nodeType: "YulIdentifier",
                                            src: "7349:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "7349:56:1",
                                    },
                                    variables: [
                                        {
                                            name: "mask",
                                            nodeType: "YulTypedName",
                                            src: "7341:4:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulAssignment",
                                    src: "7414:25:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "data",
                                                nodeType: "YulIdentifier",
                                                src: "7428:4:1",
                                            },
                                            {
                                                name: "mask",
                                                nodeType: "YulIdentifier",
                                                src: "7434:4:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "and",
                                            nodeType: "YulIdentifier",
                                            src: "7424:3:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "7424:15:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "result",
                                            nodeType: "YulIdentifier",
                                            src: "7414:6:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "mask_bytes_dynamic",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "data",
                                nodeType: "YulTypedName",
                                src: "7304:4:1",
                                type: "",
                            },
                            {
                                name: "bytes",
                                nodeType: "YulTypedName",
                                src: "7310:5:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "result",
                                nodeType: "YulTypedName",
                                src: "7320:6:1",
                                type: "",
                            },
                        ],
                        src: "7276:169:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "7531:214:1",
                            statements: [
                                {
                                    nodeType: "YulAssignment",
                                    src: "7664:37:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "data",
                                                nodeType: "YulIdentifier",
                                                src: "7691:4:1",
                                            },
                                            {
                                                name: "len",
                                                nodeType: "YulIdentifier",
                                                src: "7697:3:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "mask_bytes_dynamic",
                                            nodeType: "YulIdentifier",
                                            src: "7672:18:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "7672:29:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "data",
                                            nodeType: "YulIdentifier",
                                            src: "7664:4:1",
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulAssignment",
                                    src: "7710:29:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "data",
                                                nodeType: "YulIdentifier",
                                                src: "7721:4:1",
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        kind: "number",
                                                        nodeType: "YulLiteral",
                                                        src: "7731:1:1",
                                                        type: "",
                                                        value: "2",
                                                    },
                                                    {
                                                        name: "len",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "7734:3:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "mul",
                                                    nodeType: "YulIdentifier",
                                                    src: "7727:3:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "7727:11:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "or",
                                            nodeType: "YulIdentifier",
                                            src: "7718:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "7718:21:1",
                                    },
                                    variableNames: [
                                        {
                                            name: "used",
                                            nodeType: "YulIdentifier",
                                            src: "7710:4:1",
                                        },
                                    ],
                                },
                            ],
                        },
                        name: "extract_used_part_and_set_length_of_short_byte_array",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "data",
                                nodeType: "YulTypedName",
                                src: "7512:4:1",
                                type: "",
                            },
                            {
                                name: "len",
                                nodeType: "YulTypedName",
                                src: "7518:3:1",
                                type: "",
                            },
                        ],
                        returnVariables: [
                            {
                                name: "used",
                                nodeType: "YulTypedName",
                                src: "7526:4:1",
                                type: "",
                            },
                        ],
                        src: "7450:295:1",
                    },
                    {
                        body: {
                            nodeType: "YulBlock",
                            src: "7842:1303:1",
                            statements: [
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "7853:51:1",
                                    value: {
                                        arguments: [
                                            {
                                                name: "src",
                                                nodeType: "YulIdentifier",
                                                src: "7900:3:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "array_length_t_string_memory_ptr",
                                            nodeType: "YulIdentifier",
                                            src: "7867:32:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "7867:37:1",
                                    },
                                    variables: [
                                        {
                                            name: "newLen",
                                            nodeType: "YulTypedName",
                                            src: "7857:6:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    body: {
                                        nodeType: "YulBlock",
                                        src: "7989:22:1",
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: "panic_error_0x41",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "7991:16:1",
                                                    },
                                                    nodeType: "YulFunctionCall",
                                                    src: "7991:18:1",
                                                },
                                                nodeType:
                                                    "YulExpressionStatement",
                                                src: "7991:18:1",
                                            },
                                        ],
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: "newLen",
                                                nodeType: "YulIdentifier",
                                                src: "7961:6:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "7969:18:1",
                                                type: "",
                                                value: "0xffffffffffffffff",
                                            },
                                        ],
                                        functionName: {
                                            name: "gt",
                                            nodeType: "YulIdentifier",
                                            src: "7958:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "7958:30:1",
                                    },
                                    nodeType: "YulIf",
                                    src: "7955:56:1",
                                },
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "8021:52:1",
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: "slot",
                                                        nodeType:
                                                            "YulIdentifier",
                                                        src: "8067:4:1",
                                                    },
                                                ],
                                                functionName: {
                                                    name: "sload",
                                                    nodeType: "YulIdentifier",
                                                    src: "8061:5:1",
                                                },
                                                nodeType: "YulFunctionCall",
                                                src: "8061:11:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "extract_byte_array_length",
                                            nodeType: "YulIdentifier",
                                            src: "8035:25:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "8035:38:1",
                                    },
                                    variables: [
                                        {
                                            name: "oldLen",
                                            nodeType: "YulTypedName",
                                            src: "8025:6:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: "slot",
                                                nodeType: "YulIdentifier",
                                                src: "8166:4:1",
                                            },
                                            {
                                                name: "oldLen",
                                                nodeType: "YulIdentifier",
                                                src: "8172:6:1",
                                            },
                                            {
                                                name: "newLen",
                                                nodeType: "YulIdentifier",
                                                src: "8180:6:1",
                                            },
                                        ],
                                        functionName: {
                                            name: "clean_up_bytearray_end_slots_t_string_storage",
                                            nodeType: "YulIdentifier",
                                            src: "8120:45:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "8120:67:1",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "8120:67:1",
                                },
                                {
                                    nodeType: "YulVariableDeclaration",
                                    src: "8197:18:1",
                                    value: {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "8214:1:1",
                                        type: "",
                                        value: "0",
                                    },
                                    variables: [
                                        {
                                            name: "srcOffset",
                                            nodeType: "YulTypedName",
                                            src: "8201:9:1",
                                            type: "",
                                        },
                                    ],
                                },
                                {
                                    nodeType: "YulAssignment",
                                    src: "8225:17:1",
                                    value: {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "8238:4:1",
                                        type: "",
                                        value: "0x20",
                                    },
                                    variableNames: [
                                        {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "8225:9:1",
                                        },
                                    ],
                                },
                                {
                                    cases: [
                                        {
                                            body: {
                                                nodeType: "YulBlock",
                                                src: "8289:611:1",
                                                statements: [
                                                    {
                                                        nodeType:
                                                            "YulVariableDeclaration",
                                                        src: "8303:37:1",
                                                        value: {
                                                            arguments: [
                                                                {
                                                                    name: "newLen",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "8322:6:1",
                                                                },
                                                                {
                                                                    arguments: [
                                                                        {
                                                                            kind: "number",
                                                                            nodeType:
                                                                                "YulLiteral",
                                                                            src: "8334:4:1",
                                                                            type: "",
                                                                            value: "0x1f",
                                                                        },
                                                                    ],
                                                                    functionName:
                                                                        {
                                                                            name: "not",
                                                                            nodeType:
                                                                                "YulIdentifier",
                                                                            src: "8330:3:1",
                                                                        },
                                                                    nodeType:
                                                                        "YulFunctionCall",
                                                                    src: "8330:9:1",
                                                                },
                                                            ],
                                                            functionName: {
                                                                name: "and",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "8318:3:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "8318:22:1",
                                                        },
                                                        variables: [
                                                            {
                                                                name: "loopEnd",
                                                                nodeType:
                                                                    "YulTypedName",
                                                                src: "8307:7:1",
                                                                type: "",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        nodeType:
                                                            "YulVariableDeclaration",
                                                        src: "8354:51:1",
                                                        value: {
                                                            arguments: [
                                                                {
                                                                    name: "slot",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "8400:4:1",
                                                                },
                                                            ],
                                                            functionName: {
                                                                name: "array_dataslot_t_string_storage",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "8368:31:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "8368:37:1",
                                                        },
                                                        variables: [
                                                            {
                                                                name: "dstPtr",
                                                                nodeType:
                                                                    "YulTypedName",
                                                                src: "8358:6:1",
                                                                type: "",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        nodeType:
                                                            "YulVariableDeclaration",
                                                        src: "8418:10:1",
                                                        value: {
                                                            kind: "number",
                                                            nodeType:
                                                                "YulLiteral",
                                                            src: "8427:1:1",
                                                            type: "",
                                                            value: "0",
                                                        },
                                                        variables: [
                                                            {
                                                                name: "i",
                                                                nodeType:
                                                                    "YulTypedName",
                                                                src: "8422:1:1",
                                                                type: "",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        body: {
                                                            nodeType:
                                                                "YulBlock",
                                                            src: "8486:163:1",
                                                            statements: [
                                                                {
                                                                    expression:
                                                                        {
                                                                            arguments:
                                                                                [
                                                                                    {
                                                                                        name: "dstPtr",
                                                                                        nodeType:
                                                                                            "YulIdentifier",
                                                                                        src: "8511:6:1",
                                                                                    },
                                                                                    {
                                                                                        arguments:
                                                                                            [
                                                                                                {
                                                                                                    arguments:
                                                                                                        [
                                                                                                            {
                                                                                                                name: "src",
                                                                                                                nodeType:
                                                                                                                    "YulIdentifier",
                                                                                                                src: "8529:3:1",
                                                                                                            },
                                                                                                            {
                                                                                                                name: "srcOffset",
                                                                                                                nodeType:
                                                                                                                    "YulIdentifier",
                                                                                                                src: "8534:9:1",
                                                                                                            },
                                                                                                        ],
                                                                                                    functionName:
                                                                                                        {
                                                                                                            name: "add",
                                                                                                            nodeType:
                                                                                                                "YulIdentifier",
                                                                                                            src: "8525:3:1",
                                                                                                        },
                                                                                                    nodeType:
                                                                                                        "YulFunctionCall",
                                                                                                    src: "8525:19:1",
                                                                                                },
                                                                                            ],
                                                                                        functionName:
                                                                                            {
                                                                                                name: "mload",
                                                                                                nodeType:
                                                                                                    "YulIdentifier",
                                                                                                src: "8519:5:1",
                                                                                            },
                                                                                        nodeType:
                                                                                            "YulFunctionCall",
                                                                                        src: "8519:26:1",
                                                                                    },
                                                                                ],
                                                                            functionName:
                                                                                {
                                                                                    name: "sstore",
                                                                                    nodeType:
                                                                                        "YulIdentifier",
                                                                                    src: "8504:6:1",
                                                                                },
                                                                            nodeType:
                                                                                "YulFunctionCall",
                                                                            src: "8504:42:1",
                                                                        },
                                                                    nodeType:
                                                                        "YulExpressionStatement",
                                                                    src: "8504:42:1",
                                                                },
                                                                {
                                                                    nodeType:
                                                                        "YulAssignment",
                                                                    src: "8563:24:1",
                                                                    value: {
                                                                        arguments:
                                                                            [
                                                                                {
                                                                                    name: "dstPtr",
                                                                                    nodeType:
                                                                                        "YulIdentifier",
                                                                                    src: "8577:6:1",
                                                                                },
                                                                                {
                                                                                    kind: "number",
                                                                                    nodeType:
                                                                                        "YulLiteral",
                                                                                    src: "8585:1:1",
                                                                                    type: "",
                                                                                    value: "1",
                                                                                },
                                                                            ],
                                                                        functionName:
                                                                            {
                                                                                name: "add",
                                                                                nodeType:
                                                                                    "YulIdentifier",
                                                                                src: "8573:3:1",
                                                                            },
                                                                        nodeType:
                                                                            "YulFunctionCall",
                                                                        src: "8573:14:1",
                                                                    },
                                                                    variableNames:
                                                                        [
                                                                            {
                                                                                name: "dstPtr",
                                                                                nodeType:
                                                                                    "YulIdentifier",
                                                                                src: "8563:6:1",
                                                                            },
                                                                        ],
                                                                },
                                                                {
                                                                    nodeType:
                                                                        "YulAssignment",
                                                                    src: "8604:31:1",
                                                                    value: {
                                                                        arguments:
                                                                            [
                                                                                {
                                                                                    name: "srcOffset",
                                                                                    nodeType:
                                                                                        "YulIdentifier",
                                                                                    src: "8621:9:1",
                                                                                },
                                                                                {
                                                                                    kind: "number",
                                                                                    nodeType:
                                                                                        "YulLiteral",
                                                                                    src: "8632:2:1",
                                                                                    type: "",
                                                                                    value: "32",
                                                                                },
                                                                            ],
                                                                        functionName:
                                                                            {
                                                                                name: "add",
                                                                                nodeType:
                                                                                    "YulIdentifier",
                                                                                src: "8617:3:1",
                                                                            },
                                                                        nodeType:
                                                                            "YulFunctionCall",
                                                                        src: "8617:18:1",
                                                                    },
                                                                    variableNames:
                                                                        [
                                                                            {
                                                                                name: "srcOffset",
                                                                                nodeType:
                                                                                    "YulIdentifier",
                                                                                src: "8604:9:1",
                                                                            },
                                                                        ],
                                                                },
                                                            ],
                                                        },
                                                        condition: {
                                                            arguments: [
                                                                {
                                                                    name: "i",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "8452:1:1",
                                                                },
                                                                {
                                                                    name: "loopEnd",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "8455:7:1",
                                                                },
                                                            ],
                                                            functionName: {
                                                                name: "lt",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "8449:2:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "8449:14:1",
                                                        },
                                                        nodeType: "YulForLoop",
                                                        post: {
                                                            nodeType:
                                                                "YulBlock",
                                                            src: "8464:21:1",
                                                            statements: [
                                                                {
                                                                    nodeType:
                                                                        "YulAssignment",
                                                                    src: "8466:17:1",
                                                                    value: {
                                                                        arguments:
                                                                            [
                                                                                {
                                                                                    name: "i",
                                                                                    nodeType:
                                                                                        "YulIdentifier",
                                                                                    src: "8475:1:1",
                                                                                },
                                                                                {
                                                                                    kind: "number",
                                                                                    nodeType:
                                                                                        "YulLiteral",
                                                                                    src: "8478:4:1",
                                                                                    type: "",
                                                                                    value: "0x20",
                                                                                },
                                                                            ],
                                                                        functionName:
                                                                            {
                                                                                name: "add",
                                                                                nodeType:
                                                                                    "YulIdentifier",
                                                                                src: "8471:3:1",
                                                                            },
                                                                        nodeType:
                                                                            "YulFunctionCall",
                                                                        src: "8471:12:1",
                                                                    },
                                                                    variableNames:
                                                                        [
                                                                            {
                                                                                name: "i",
                                                                                nodeType:
                                                                                    "YulIdentifier",
                                                                                src: "8466:1:1",
                                                                            },
                                                                        ],
                                                                },
                                                            ],
                                                        },
                                                        pre: {
                                                            nodeType:
                                                                "YulBlock",
                                                            src: "8445:3:1",
                                                            statements: [],
                                                        },
                                                        src: "8441:208:1",
                                                    },
                                                    {
                                                        body: {
                                                            nodeType:
                                                                "YulBlock",
                                                            src: "8685:156:1",
                                                            statements: [
                                                                {
                                                                    nodeType:
                                                                        "YulVariableDeclaration",
                                                                    src: "8703:43:1",
                                                                    value: {
                                                                        arguments:
                                                                            [
                                                                                {
                                                                                    arguments:
                                                                                        [
                                                                                            {
                                                                                                name: "src",
                                                                                                nodeType:
                                                                                                    "YulIdentifier",
                                                                                                src: "8730:3:1",
                                                                                            },
                                                                                            {
                                                                                                name: "srcOffset",
                                                                                                nodeType:
                                                                                                    "YulIdentifier",
                                                                                                src: "8735:9:1",
                                                                                            },
                                                                                        ],
                                                                                    functionName:
                                                                                        {
                                                                                            name: "add",
                                                                                            nodeType:
                                                                                                "YulIdentifier",
                                                                                            src: "8726:3:1",
                                                                                        },
                                                                                    nodeType:
                                                                                        "YulFunctionCall",
                                                                                    src: "8726:19:1",
                                                                                },
                                                                            ],
                                                                        functionName:
                                                                            {
                                                                                name: "mload",
                                                                                nodeType:
                                                                                    "YulIdentifier",
                                                                                src: "8720:5:1",
                                                                            },
                                                                        nodeType:
                                                                            "YulFunctionCall",
                                                                        src: "8720:26:1",
                                                                    },
                                                                    variables: [
                                                                        {
                                                                            name: "lastValue",
                                                                            nodeType:
                                                                                "YulTypedName",
                                                                            src: "8707:9:1",
                                                                            type: "",
                                                                        },
                                                                    ],
                                                                },
                                                                {
                                                                    expression:
                                                                        {
                                                                            arguments:
                                                                                [
                                                                                    {
                                                                                        name: "dstPtr",
                                                                                        nodeType:
                                                                                            "YulIdentifier",
                                                                                        src: "8770:6:1",
                                                                                    },
                                                                                    {
                                                                                        arguments:
                                                                                            [
                                                                                                {
                                                                                                    name: "lastValue",
                                                                                                    nodeType:
                                                                                                        "YulIdentifier",
                                                                                                    src: "8797:9:1",
                                                                                                },
                                                                                                {
                                                                                                    arguments:
                                                                                                        [
                                                                                                            {
                                                                                                                name: "newLen",
                                                                                                                nodeType:
                                                                                                                    "YulIdentifier",
                                                                                                                src: "8812:6:1",
                                                                                                            },
                                                                                                            {
                                                                                                                kind: "number",
                                                                                                                nodeType:
                                                                                                                    "YulLiteral",
                                                                                                                src: "8820:4:1",
                                                                                                                type: "",
                                                                                                                value: "0x1f",
                                                                                                            },
                                                                                                        ],
                                                                                                    functionName:
                                                                                                        {
                                                                                                            name: "and",
                                                                                                            nodeType:
                                                                                                                "YulIdentifier",
                                                                                                            src: "8808:3:1",
                                                                                                        },
                                                                                                    nodeType:
                                                                                                        "YulFunctionCall",
                                                                                                    src: "8808:17:1",
                                                                                                },
                                                                                            ],
                                                                                        functionName:
                                                                                            {
                                                                                                name: "mask_bytes_dynamic",
                                                                                                nodeType:
                                                                                                    "YulIdentifier",
                                                                                                src: "8778:18:1",
                                                                                            },
                                                                                        nodeType:
                                                                                            "YulFunctionCall",
                                                                                        src: "8778:48:1",
                                                                                    },
                                                                                ],
                                                                            functionName:
                                                                                {
                                                                                    name: "sstore",
                                                                                    nodeType:
                                                                                        "YulIdentifier",
                                                                                    src: "8763:6:1",
                                                                                },
                                                                            nodeType:
                                                                                "YulFunctionCall",
                                                                            src: "8763:64:1",
                                                                        },
                                                                    nodeType:
                                                                        "YulExpressionStatement",
                                                                    src: "8763:64:1",
                                                                },
                                                            ],
                                                        },
                                                        condition: {
                                                            arguments: [
                                                                {
                                                                    name: "loopEnd",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "8668:7:1",
                                                                },
                                                                {
                                                                    name: "newLen",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "8677:6:1",
                                                                },
                                                            ],
                                                            functionName: {
                                                                name: "lt",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "8665:2:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "8665:19:1",
                                                        },
                                                        nodeType: "YulIf",
                                                        src: "8662:179:1",
                                                    },
                                                    {
                                                        expression: {
                                                            arguments: [
                                                                {
                                                                    name: "slot",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "8861:4:1",
                                                                },
                                                                {
                                                                    arguments: [
                                                                        {
                                                                            arguments:
                                                                                [
                                                                                    {
                                                                                        name: "newLen",
                                                                                        nodeType:
                                                                                            "YulIdentifier",
                                                                                        src: "8875:6:1",
                                                                                    },
                                                                                    {
                                                                                        kind: "number",
                                                                                        nodeType:
                                                                                            "YulLiteral",
                                                                                        src: "8883:1:1",
                                                                                        type: "",
                                                                                        value: "2",
                                                                                    },
                                                                                ],
                                                                            functionName:
                                                                                {
                                                                                    name: "mul",
                                                                                    nodeType:
                                                                                        "YulIdentifier",
                                                                                    src: "8871:3:1",
                                                                                },
                                                                            nodeType:
                                                                                "YulFunctionCall",
                                                                            src: "8871:14:1",
                                                                        },
                                                                        {
                                                                            kind: "number",
                                                                            nodeType:
                                                                                "YulLiteral",
                                                                            src: "8887:1:1",
                                                                            type: "",
                                                                            value: "1",
                                                                        },
                                                                    ],
                                                                    functionName:
                                                                        {
                                                                            name: "add",
                                                                            nodeType:
                                                                                "YulIdentifier",
                                                                            src: "8867:3:1",
                                                                        },
                                                                    nodeType:
                                                                        "YulFunctionCall",
                                                                    src: "8867:22:1",
                                                                },
                                                            ],
                                                            functionName: {
                                                                name: "sstore",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "8854:6:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "8854:36:1",
                                                        },
                                                        nodeType:
                                                            "YulExpressionStatement",
                                                        src: "8854:36:1",
                                                    },
                                                ],
                                            },
                                            nodeType: "YulCase",
                                            src: "8282:618:1",
                                            value: {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "8287:1:1",
                                                type: "",
                                                value: "1",
                                            },
                                        },
                                        {
                                            body: {
                                                nodeType: "YulBlock",
                                                src: "8917:222:1",
                                                statements: [
                                                    {
                                                        nodeType:
                                                            "YulVariableDeclaration",
                                                        src: "8931:14:1",
                                                        value: {
                                                            kind: "number",
                                                            nodeType:
                                                                "YulLiteral",
                                                            src: "8944:1:1",
                                                            type: "",
                                                            value: "0",
                                                        },
                                                        variables: [
                                                            {
                                                                name: "value",
                                                                nodeType:
                                                                    "YulTypedName",
                                                                src: "8935:5:1",
                                                                type: "",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        body: {
                                                            nodeType:
                                                                "YulBlock",
                                                            src: "8968:67:1",
                                                            statements: [
                                                                {
                                                                    nodeType:
                                                                        "YulAssignment",
                                                                    src: "8986:35:1",
                                                                    value: {
                                                                        arguments:
                                                                            [
                                                                                {
                                                                                    arguments:
                                                                                        [
                                                                                            {
                                                                                                name: "src",
                                                                                                nodeType:
                                                                                                    "YulIdentifier",
                                                                                                src: "9005:3:1",
                                                                                            },
                                                                                            {
                                                                                                name: "srcOffset",
                                                                                                nodeType:
                                                                                                    "YulIdentifier",
                                                                                                src: "9010:9:1",
                                                                                            },
                                                                                        ],
                                                                                    functionName:
                                                                                        {
                                                                                            name: "add",
                                                                                            nodeType:
                                                                                                "YulIdentifier",
                                                                                            src: "9001:3:1",
                                                                                        },
                                                                                    nodeType:
                                                                                        "YulFunctionCall",
                                                                                    src: "9001:19:1",
                                                                                },
                                                                            ],
                                                                        functionName:
                                                                            {
                                                                                name: "mload",
                                                                                nodeType:
                                                                                    "YulIdentifier",
                                                                                src: "8995:5:1",
                                                                            },
                                                                        nodeType:
                                                                            "YulFunctionCall",
                                                                        src: "8995:26:1",
                                                                    },
                                                                    variableNames:
                                                                        [
                                                                            {
                                                                                name: "value",
                                                                                nodeType:
                                                                                    "YulIdentifier",
                                                                                src: "8986:5:1",
                                                                            },
                                                                        ],
                                                                },
                                                            ],
                                                        },
                                                        condition: {
                                                            name: "newLen",
                                                            nodeType:
                                                                "YulIdentifier",
                                                            src: "8961:6:1",
                                                        },
                                                        nodeType: "YulIf",
                                                        src: "8958:77:1",
                                                    },
                                                    {
                                                        expression: {
                                                            arguments: [
                                                                {
                                                                    name: "slot",
                                                                    nodeType:
                                                                        "YulIdentifier",
                                                                    src: "9055:4:1",
                                                                },
                                                                {
                                                                    arguments: [
                                                                        {
                                                                            name: "value",
                                                                            nodeType:
                                                                                "YulIdentifier",
                                                                            src: "9114:5:1",
                                                                        },
                                                                        {
                                                                            name: "newLen",
                                                                            nodeType:
                                                                                "YulIdentifier",
                                                                            src: "9121:6:1",
                                                                        },
                                                                    ],
                                                                    functionName:
                                                                        {
                                                                            name: "extract_used_part_and_set_length_of_short_byte_array",
                                                                            nodeType:
                                                                                "YulIdentifier",
                                                                            src: "9061:52:1",
                                                                        },
                                                                    nodeType:
                                                                        "YulFunctionCall",
                                                                    src: "9061:67:1",
                                                                },
                                                            ],
                                                            functionName: {
                                                                name: "sstore",
                                                                nodeType:
                                                                    "YulIdentifier",
                                                                src: "9048:6:1",
                                                            },
                                                            nodeType:
                                                                "YulFunctionCall",
                                                            src: "9048:81:1",
                                                        },
                                                        nodeType:
                                                            "YulExpressionStatement",
                                                        src: "9048:81:1",
                                                    },
                                                ],
                                            },
                                            nodeType: "YulCase",
                                            src: "8909:230:1",
                                            value: "default",
                                        },
                                    ],
                                    expression: {
                                        arguments: [
                                            {
                                                name: "newLen",
                                                nodeType: "YulIdentifier",
                                                src: "8262:6:1",
                                            },
                                            {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "8270:2:1",
                                                type: "",
                                                value: "31",
                                            },
                                        ],
                                        functionName: {
                                            name: "gt",
                                            nodeType: "YulIdentifier",
                                            src: "8259:2:1",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "8259:14:1",
                                    },
                                    nodeType: "YulSwitch",
                                    src: "8252:887:1",
                                },
                            ],
                        },
                        name: "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
                        nodeType: "YulFunctionDefinition",
                        parameters: [
                            {
                                name: "slot",
                                nodeType: "YulTypedName",
                                src: "7831:4:1",
                                type: "",
                            },
                            {
                                name: "src",
                                nodeType: "YulTypedName",
                                src: "7837:3:1",
                                type: "",
                            },
                        ],
                        src: "7750:1395:1",
                    },
                ],
            },
            contents:
                "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_memory_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_uint256t_uint256t_uint256t_uint256_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3, value4 {\n        if slt(sub(dataEnd, headStart), 160) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 96\n\n            value3 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 128\n\n            value4 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
            id: 1,
            language: "Yul",
            name: "#utility.yul",
        },
    ],
    linkReferences: {},
    object: "60e06040523480156200001157600080fd5b5060405162000d6138038062000d61833981810160405281019062000037919062000241565b8360a08181525050846000908162000050919062000529565b5082608081815250508160c0818152505080600181905550505050505062000610565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000dc8262000091565b810181811067ffffffffffffffff82111715620000fe57620000fd620000a2565b5b80604052505050565b60006200011362000073565b9050620001218282620000d1565b919050565b600067ffffffffffffffff821115620001445762000143620000a2565b5b6200014f8262000091565b9050602081019050919050565b60005b838110156200017c5780820151818401526020810190506200015f565b60008484015250505050565b60006200019f620001998462000126565b62000107565b905082815260208101848484011115620001be57620001bd6200008c565b5b620001cb8482856200015c565b509392505050565b600082601f830112620001eb57620001ea62000087565b5b8151620001fd84826020860162000188565b91505092915050565b6000819050919050565b6200021b8162000206565b81146200022757600080fd5b50565b6000815190506200023b8162000210565b92915050565b600080600080600060a0868803121562000260576200025f6200007d565b5b600086015167ffffffffffffffff81111562000281576200028062000082565b5b6200028f88828901620001d3565b9550506020620002a2888289016200022a565b9450506040620002b5888289016200022a565b9350506060620002c8888289016200022a565b9250506080620002db888289016200022a565b9150509295509295909350565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200033b57607f821691505b602082108103620003515762000350620002f3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003bb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200037c565b620003c786836200037c565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200040a62000404620003fe8462000206565b620003df565b62000206565b9050919050565b6000819050919050565b6200042683620003e9565b6200043e620004358262000411565b84845462000389565b825550505050565b600090565b6200045562000446565b620004628184846200041b565b505050565b5b818110156200048a576200047e6000826200044b565b60018101905062000468565b5050565b601f821115620004d957620004a38162000357565b620004ae846200036c565b81016020851015620004be578190505b620004d6620004cd856200036c565b83018262000467565b50505b505050565b600082821c905092915050565b6000620004fe60001984600802620004de565b1980831691505092915050565b6000620005198383620004eb565b9150826002028217905092915050565b6200053482620002e8565b67ffffffffffffffff81111562000550576200054f620000a2565b5b6200055c825462000322565b620005698282856200048e565b600060209050601f831160018114620005a157600084156200058c578287015190505b6200059885826200050b565b86555062000608565b601f198416620005b18662000357565b60005b82811015620005db57848901518255600182019150602085019450602081019050620005b4565b86831015620005fb5784890151620005f7601f891682620004eb565b8355505b6001600288020188555050505b505050505050565b60805160a05160c05161072a6200063760003960005050600050506000505061072a6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806317d7de7c1461004657806317fd2967146100645780635353a2d814610080575b600080fd5b61004e61009c565b60405161005b91906101f1565b60405180910390f35b61007e60048036038101906100799190610261565b61012e565b005b61009a600480360381019061009591906103c3565b61014e565b005b6060600080546100ab9061043b565b80601f01602080910402602001604051908101604052809291908181526020018280546100d79061043b565b80156101245780601f106100f957610100808354040283529160200191610124565b820191906000526020600020905b81548152906001019060200180831161010757829003601f168201915b5050505050905090565b80600260006101000a81548161ffff021916908361ffff16021790555050565b806000908161015d9190610622565b5050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561019b578082015181840152602081019050610180565b60008484015250505050565b6000601f19601f8301169050919050565b60006101c382610161565b6101cd818561016c565b93506101dd81856020860161017d565b6101e6816101a7565b840191505092915050565b6000602082019050818103600083015261020b81846101b8565b905092915050565b6000604051905090565b600080fd5b600080fd5b600061ffff82169050919050565b61023e81610227565b811461024957600080fd5b50565b60008135905061025b81610235565b92915050565b6000602082840312156102775761027661021d565b5b60006102858482850161024c565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102d0826101a7565b810181811067ffffffffffffffff821117156102ef576102ee610298565b5b80604052505050565b6000610302610213565b905061030e82826102c7565b919050565b600067ffffffffffffffff82111561032e5761032d610298565b5b610337826101a7565b9050602081019050919050565b82818337600083830152505050565b600061036661036184610313565b6102f8565b90508281526020810184848401111561038257610381610293565b5b61038d848285610344565b509392505050565b600082601f8301126103aa576103a961028e565b5b81356103ba848260208601610353565b91505092915050565b6000602082840312156103d9576103d861021d565b5b600082013567ffffffffffffffff8111156103f7576103f6610222565b5b61040384828501610395565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061045357607f821691505b6020821081036104665761046561040c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026104ce7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610491565b6104d88683610491565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061051f61051a610515846104f0565b6104fa565b6104f0565b9050919050565b6000819050919050565b61053983610504565b61054d61054582610526565b84845461049e565b825550505050565b600090565b610562610555565b61056d818484610530565b505050565b5b818110156105915761058660008261055a565b600181019050610573565b5050565b601f8211156105d6576105a78161046c565b6105b084610481565b810160208510156105bf578190505b6105d36105cb85610481565b830182610572565b50505b505050565b600082821c905092915050565b60006105f9600019846008026105db565b1980831691505092915050565b600061061283836105e8565b9150826002028217905092915050565b61062b82610161565b67ffffffffffffffff81111561064457610643610298565b5b61064e825461043b565b610659828285610595565b600060209050601f83116001811461068c576000841561067a578287015190505b6106848582610606565b8655506106ec565b601f19841661069a8661046c565b60005b828110156106c25784890151825560018201915060208501945060208101905061069d565b868310156106df57848901516106db601f8916826105e8565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220fe1827f8f75eedff7d39750ff753058778e9fe6cefa902736e03f1c22fa34fcb64736f6c63430008110033",
    opcodes:
        "PUSH1 0xE0 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0xD61 CODESIZE SUB DUP1 PUSH3 0xD61 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x241 JUMP JUMPDEST DUP4 PUSH1 0xA0 DUP2 DUP2 MSTORE POP POP DUP5 PUSH1 0x0 SWAP1 DUP2 PUSH3 0x50 SWAP2 SWAP1 PUSH3 0x529 JUMP JUMPDEST POP DUP3 PUSH1 0x80 DUP2 DUP2 MSTORE POP POP DUP2 PUSH1 0xC0 DUP2 DUP2 MSTORE POP POP DUP1 PUSH1 0x1 DUP2 SWAP1 SSTORE POP POP POP POP POP POP PUSH3 0x610 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH3 0xDC DUP3 PUSH3 0x91 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0xFE JUMPI PUSH3 0xFD PUSH3 0xA2 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x113 PUSH3 0x73 JUMP JUMPDEST SWAP1 POP PUSH3 0x121 DUP3 DUP3 PUSH3 0xD1 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x144 JUMPI PUSH3 0x143 PUSH3 0xA2 JUMP JUMPDEST JUMPDEST PUSH3 0x14F DUP3 PUSH3 0x91 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x17C JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x15F JUMP JUMPDEST PUSH1 0x0 DUP5 DUP5 ADD MSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x19F PUSH3 0x199 DUP5 PUSH3 0x126 JUMP JUMPDEST PUSH3 0x107 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH3 0x1BE JUMPI PUSH3 0x1BD PUSH3 0x8C JUMP JUMPDEST JUMPDEST PUSH3 0x1CB DUP5 DUP3 DUP6 PUSH3 0x15C JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x1EB JUMPI PUSH3 0x1EA PUSH3 0x87 JUMP JUMPDEST JUMPDEST DUP2 MLOAD PUSH3 0x1FD DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x188 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x21B DUP2 PUSH3 0x206 JUMP JUMPDEST DUP2 EQ PUSH3 0x227 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x23B DUP2 PUSH3 0x210 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0xA0 DUP7 DUP9 SUB SLT ISZERO PUSH3 0x260 JUMPI PUSH3 0x25F PUSH3 0x7D JUMP JUMPDEST JUMPDEST PUSH1 0x0 DUP7 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x281 JUMPI PUSH3 0x280 PUSH3 0x82 JUMP JUMPDEST JUMPDEST PUSH3 0x28F DUP9 DUP3 DUP10 ADD PUSH3 0x1D3 JUMP JUMPDEST SWAP6 POP POP PUSH1 0x20 PUSH3 0x2A2 DUP9 DUP3 DUP10 ADD PUSH3 0x22A JUMP JUMPDEST SWAP5 POP POP PUSH1 0x40 PUSH3 0x2B5 DUP9 DUP3 DUP10 ADD PUSH3 0x22A JUMP JUMPDEST SWAP4 POP POP PUSH1 0x60 PUSH3 0x2C8 DUP9 DUP3 DUP10 ADD PUSH3 0x22A JUMP JUMPDEST SWAP3 POP POP PUSH1 0x80 PUSH3 0x2DB DUP9 DUP3 DUP10 ADD PUSH3 0x22A JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 POP SWAP3 SWAP6 SWAP1 SWAP4 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH3 0x33B JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH3 0x351 JUMPI PUSH3 0x350 PUSH3 0x2F3 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP2 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 PUSH1 0x1F DUP4 ADD DIV SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SHL SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x8 DUP4 MUL PUSH3 0x3BB PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 PUSH3 0x37C JUMP JUMPDEST PUSH3 0x3C7 DUP7 DUP4 PUSH3 0x37C JUMP JUMPDEST SWAP6 POP DUP1 NOT DUP5 AND SWAP4 POP DUP1 DUP7 AND DUP5 OR SWAP3 POP POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x40A PUSH3 0x404 PUSH3 0x3FE DUP5 PUSH3 0x206 JUMP JUMPDEST PUSH3 0x3DF JUMP JUMPDEST PUSH3 0x206 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x426 DUP4 PUSH3 0x3E9 JUMP JUMPDEST PUSH3 0x43E PUSH3 0x435 DUP3 PUSH3 0x411 JUMP JUMPDEST DUP5 DUP5 SLOAD PUSH3 0x389 JUMP JUMPDEST DUP3 SSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 SWAP1 JUMP JUMPDEST PUSH3 0x455 PUSH3 0x446 JUMP JUMPDEST PUSH3 0x462 DUP2 DUP5 DUP5 PUSH3 0x41B JUMP JUMPDEST POP POP POP JUMP JUMPDEST JUMPDEST DUP2 DUP2 LT ISZERO PUSH3 0x48A JUMPI PUSH3 0x47E PUSH1 0x0 DUP3 PUSH3 0x44B JUMP JUMPDEST PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH3 0x468 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1F DUP3 GT ISZERO PUSH3 0x4D9 JUMPI PUSH3 0x4A3 DUP2 PUSH3 0x357 JUMP JUMPDEST PUSH3 0x4AE DUP5 PUSH3 0x36C JUMP JUMPDEST DUP2 ADD PUSH1 0x20 DUP6 LT ISZERO PUSH3 0x4BE JUMPI DUP2 SWAP1 POP JUMPDEST PUSH3 0x4D6 PUSH3 0x4CD DUP6 PUSH3 0x36C JUMP JUMPDEST DUP4 ADD DUP3 PUSH3 0x467 JUMP JUMPDEST POP POP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SHR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x4FE PUSH1 0x0 NOT DUP5 PUSH1 0x8 MUL PUSH3 0x4DE JUMP JUMPDEST NOT DUP1 DUP4 AND SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x519 DUP4 DUP4 PUSH3 0x4EB JUMP JUMPDEST SWAP2 POP DUP3 PUSH1 0x2 MUL DUP3 OR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH3 0x534 DUP3 PUSH3 0x2E8 JUMP JUMPDEST PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x550 JUMPI PUSH3 0x54F PUSH3 0xA2 JUMP JUMPDEST JUMPDEST PUSH3 0x55C DUP3 SLOAD PUSH3 0x322 JUMP JUMPDEST PUSH3 0x569 DUP3 DUP3 DUP6 PUSH3 0x48E JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 SWAP1 POP PUSH1 0x1F DUP4 GT PUSH1 0x1 DUP2 EQ PUSH3 0x5A1 JUMPI PUSH1 0x0 DUP5 ISZERO PUSH3 0x58C JUMPI DUP3 DUP8 ADD MLOAD SWAP1 POP JUMPDEST PUSH3 0x598 DUP6 DUP3 PUSH3 0x50B JUMP JUMPDEST DUP7 SSTORE POP PUSH3 0x608 JUMP JUMPDEST PUSH1 0x1F NOT DUP5 AND PUSH3 0x5B1 DUP7 PUSH3 0x357 JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP3 DUP2 LT ISZERO PUSH3 0x5DB JUMPI DUP5 DUP10 ADD MLOAD DUP3 SSTORE PUSH1 0x1 DUP3 ADD SWAP2 POP PUSH1 0x20 DUP6 ADD SWAP5 POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x5B4 JUMP JUMPDEST DUP7 DUP4 LT ISZERO PUSH3 0x5FB JUMPI DUP5 DUP10 ADD MLOAD PUSH3 0x5F7 PUSH1 0x1F DUP10 AND DUP3 PUSH3 0x4EB JUMP JUMPDEST DUP4 SSTORE POP JUMPDEST PUSH1 0x1 PUSH1 0x2 DUP9 MUL ADD DUP9 SSTORE POP POP POP JUMPDEST POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x80 MLOAD PUSH1 0xA0 MLOAD PUSH1 0xC0 MLOAD PUSH2 0x72A PUSH3 0x637 PUSH1 0x0 CODECOPY PUSH1 0x0 POP POP PUSH1 0x0 POP POP PUSH1 0x0 POP POP PUSH2 0x72A PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x41 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x17D7DE7C EQ PUSH2 0x46 JUMPI DUP1 PUSH4 0x17FD2967 EQ PUSH2 0x64 JUMPI DUP1 PUSH4 0x5353A2D8 EQ PUSH2 0x80 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x4E PUSH2 0x9C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x5B SWAP2 SWAP1 PUSH2 0x1F1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x7E PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x79 SWAP2 SWAP1 PUSH2 0x261 JUMP JUMPDEST PUSH2 0x12E JUMP JUMPDEST STOP JUMPDEST PUSH2 0x9A PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x95 SWAP2 SWAP1 PUSH2 0x3C3 JUMP JUMPDEST PUSH2 0x14E JUMP JUMPDEST STOP JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP1 SLOAD PUSH2 0xAB SWAP1 PUSH2 0x43B JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0xD7 SWAP1 PUSH2 0x43B JUMP JUMPDEST DUP1 ISZERO PUSH2 0x124 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xF9 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x124 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x107 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST DUP1 PUSH1 0x2 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH2 0xFFFF MUL NOT AND SWAP1 DUP4 PUSH2 0xFFFF AND MUL OR SWAP1 SSTORE POP POP JUMP JUMPDEST DUP1 PUSH1 0x0 SWAP1 DUP2 PUSH2 0x15D SWAP2 SWAP1 PUSH2 0x622 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x19B JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x180 JUMP JUMPDEST PUSH1 0x0 DUP5 DUP5 ADD MSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1C3 DUP3 PUSH2 0x161 JUMP JUMPDEST PUSH2 0x1CD DUP2 DUP6 PUSH2 0x16C JUMP JUMPDEST SWAP4 POP PUSH2 0x1DD DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x17D JUMP JUMPDEST PUSH2 0x1E6 DUP2 PUSH2 0x1A7 JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x20B DUP2 DUP5 PUSH2 0x1B8 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0xFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x23E DUP2 PUSH2 0x227 JUMP JUMPDEST DUP2 EQ PUSH2 0x249 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x25B DUP2 PUSH2 0x235 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x277 JUMPI PUSH2 0x276 PUSH2 0x21D JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x285 DUP5 DUP3 DUP6 ADD PUSH2 0x24C JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH2 0x2D0 DUP3 PUSH2 0x1A7 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x2EF JUMPI PUSH2 0x2EE PUSH2 0x298 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x302 PUSH2 0x213 JUMP JUMPDEST SWAP1 POP PUSH2 0x30E DUP3 DUP3 PUSH2 0x2C7 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x32E JUMPI PUSH2 0x32D PUSH2 0x298 JUMP JUMPDEST JUMPDEST PUSH2 0x337 DUP3 PUSH2 0x1A7 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH1 0x0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x366 PUSH2 0x361 DUP5 PUSH2 0x313 JUMP JUMPDEST PUSH2 0x2F8 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x382 JUMPI PUSH2 0x381 PUSH2 0x293 JUMP JUMPDEST JUMPDEST PUSH2 0x38D DUP5 DUP3 DUP6 PUSH2 0x344 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x3AA JUMPI PUSH2 0x3A9 PUSH2 0x28E JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0x3BA DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x353 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x3D9 JUMPI PUSH2 0x3D8 PUSH2 0x21D JUMP JUMPDEST JUMPDEST PUSH1 0x0 DUP3 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x3F7 JUMPI PUSH2 0x3F6 PUSH2 0x222 JUMP JUMPDEST JUMPDEST PUSH2 0x403 DUP5 DUP3 DUP6 ADD PUSH2 0x395 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x453 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH2 0x466 JUMPI PUSH2 0x465 PUSH2 0x40C JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP2 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 PUSH1 0x1F DUP4 ADD DIV SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SHL SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x8 DUP4 MUL PUSH2 0x4CE PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 PUSH2 0x491 JUMP JUMPDEST PUSH2 0x4D8 DUP7 DUP4 PUSH2 0x491 JUMP JUMPDEST SWAP6 POP DUP1 NOT DUP5 AND SWAP4 POP DUP1 DUP7 AND DUP5 OR SWAP3 POP POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x51F PUSH2 0x51A PUSH2 0x515 DUP5 PUSH2 0x4F0 JUMP JUMPDEST PUSH2 0x4FA JUMP JUMPDEST PUSH2 0x4F0 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x539 DUP4 PUSH2 0x504 JUMP JUMPDEST PUSH2 0x54D PUSH2 0x545 DUP3 PUSH2 0x526 JUMP JUMPDEST DUP5 DUP5 SLOAD PUSH2 0x49E JUMP JUMPDEST DUP3 SSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 SWAP1 JUMP JUMPDEST PUSH2 0x562 PUSH2 0x555 JUMP JUMPDEST PUSH2 0x56D DUP2 DUP5 DUP5 PUSH2 0x530 JUMP JUMPDEST POP POP POP JUMP JUMPDEST JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x591 JUMPI PUSH2 0x586 PUSH1 0x0 DUP3 PUSH2 0x55A JUMP JUMPDEST PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH2 0x573 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1F DUP3 GT ISZERO PUSH2 0x5D6 JUMPI PUSH2 0x5A7 DUP2 PUSH2 0x46C JUMP JUMPDEST PUSH2 0x5B0 DUP5 PUSH2 0x481 JUMP JUMPDEST DUP2 ADD PUSH1 0x20 DUP6 LT ISZERO PUSH2 0x5BF JUMPI DUP2 SWAP1 POP JUMPDEST PUSH2 0x5D3 PUSH2 0x5CB DUP6 PUSH2 0x481 JUMP JUMPDEST DUP4 ADD DUP3 PUSH2 0x572 JUMP JUMPDEST POP POP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SHR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x5F9 PUSH1 0x0 NOT DUP5 PUSH1 0x8 MUL PUSH2 0x5DB JUMP JUMPDEST NOT DUP1 DUP4 AND SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x612 DUP4 DUP4 PUSH2 0x5E8 JUMP JUMPDEST SWAP2 POP DUP3 PUSH1 0x2 MUL DUP3 OR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x62B DUP3 PUSH2 0x161 JUMP JUMPDEST PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x644 JUMPI PUSH2 0x643 PUSH2 0x298 JUMP JUMPDEST JUMPDEST PUSH2 0x64E DUP3 SLOAD PUSH2 0x43B JUMP JUMPDEST PUSH2 0x659 DUP3 DUP3 DUP6 PUSH2 0x595 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 SWAP1 POP PUSH1 0x1F DUP4 GT PUSH1 0x1 DUP2 EQ PUSH2 0x68C JUMPI PUSH1 0x0 DUP5 ISZERO PUSH2 0x67A JUMPI DUP3 DUP8 ADD MLOAD SWAP1 POP JUMPDEST PUSH2 0x684 DUP6 DUP3 PUSH2 0x606 JUMP JUMPDEST DUP7 SSTORE POP PUSH2 0x6EC JUMP JUMPDEST PUSH1 0x1F NOT DUP5 AND PUSH2 0x69A DUP7 PUSH2 0x46C JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP3 DUP2 LT ISZERO PUSH2 0x6C2 JUMPI DUP5 DUP10 ADD MLOAD DUP3 SSTORE PUSH1 0x1 DUP3 ADD SWAP2 POP PUSH1 0x20 DUP6 ADD SWAP5 POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x69D JUMP JUMPDEST DUP7 DUP4 LT ISZERO PUSH2 0x6DF JUMPI DUP5 DUP10 ADD MLOAD PUSH2 0x6DB PUSH1 0x1F DUP10 AND DUP3 PUSH2 0x5E8 JUMP JUMPDEST DUP4 SSTORE POP JUMPDEST PUSH1 0x1 PUSH1 0x2 DUP9 MUL ADD DUP9 SSTORE POP POP POP JUMPDEST POP POP POP POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 INVALID XOR 0x27 0xF8 0xF7 0x5E 0xED SELFDESTRUCT PUSH30 0x39750FF753058778E9FE6CEFA902736E03F1C22FA34FCB64736F6C634300 ADDMOD GT STOP CALLER ",
    sourceMap:
        "60:836:0:-:0;;;306:318;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;481:3;473:11;;;;;;502:5;495:4;:12;;;;;;:::i;:::-;;530:10;518:22;;;;;;570:10;551:29;;;;;;608:8;591:14;:25;;;;306:318;;;;;60:836;;7:75:1;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:246::-;1691:1;1701:113;1715:6;1712:1;1709:13;1701:113;;;1800:1;1795:3;1791:11;1785:18;1781:1;1776:3;1772:11;1765:39;1737:2;1734:1;1730:10;1725:15;;1701:113;;;1848:1;1839:6;1834:3;1830:16;1823:27;1672:184;1610:246;;;:::o;1862:434::-;1951:5;1976:66;1992:49;2034:6;1992:49;:::i;:::-;1976:66;:::i;:::-;1967:75;;2065:6;2058:5;2051:21;2103:4;2096:5;2092:16;2141:3;2132:6;2127:3;2123:16;2120:25;2117:112;;;2148:79;;:::i;:::-;2117:112;2238:52;2283:6;2278:3;2273;2238:52;:::i;:::-;1957:339;1862:434;;;;;:::o;2316:355::-;2383:5;2432:3;2425:4;2417:6;2413:17;2409:27;2399:122;;2440:79;;:::i;:::-;2399:122;2550:6;2544:13;2575:90;2661:3;2653:6;2646:4;2638:6;2634:17;2575:90;:::i;:::-;2566:99;;2389:282;2316:355;;;;:::o;2677:77::-;2714:7;2743:5;2732:16;;2677:77;;;:::o;2760:122::-;2833:24;2851:5;2833:24;:::i;:::-;2826:5;2823:35;2813:63;;2872:1;2869;2862:12;2813:63;2760:122;:::o;2888:143::-;2945:5;2976:6;2970:13;2961:22;;2992:33;3019:5;2992:33;:::i;:::-;2888:143;;;;:::o;3037:1150::-;3153:6;3161;3169;3177;3185;3234:3;3222:9;3213:7;3209:23;3205:33;3202:120;;;3241:79;;:::i;:::-;3202:120;3382:1;3371:9;3367:17;3361:24;3412:18;3404:6;3401:30;3398:117;;;3434:79;;:::i;:::-;3398:117;3539:74;3605:7;3596:6;3585:9;3581:22;3539:74;:::i;:::-;3529:84;;3332:291;3662:2;3688:64;3744:7;3735:6;3724:9;3720:22;3688:64;:::i;:::-;3678:74;;3633:129;3801:2;3827:64;3883:7;3874:6;3863:9;3859:22;3827:64;:::i;:::-;3817:74;;3772:129;3940:2;3966:64;4022:7;4013:6;4002:9;3998:22;3966:64;:::i;:::-;3956:74;;3911:129;4079:3;4106:64;4162:7;4153:6;4142:9;4138:22;4106:64;:::i;:::-;4096:74;;4050:130;3037:1150;;;;;;;;:::o;4193:99::-;4245:6;4279:5;4273:12;4263:22;;4193:99;;;:::o;4298:180::-;4346:77;4343:1;4336:88;4443:4;4440:1;4433:15;4467:4;4464:1;4457:15;4484:320;4528:6;4565:1;4559:4;4555:12;4545:22;;4612:1;4606:4;4602:12;4633:18;4623:81;;4689:4;4681:6;4677:17;4667:27;;4623:81;4751:2;4743:6;4740:14;4720:18;4717:38;4714:84;;4770:18;;:::i;:::-;4714:84;4535:269;4484:320;;;:::o;4810:141::-;4859:4;4882:3;4874:11;;4905:3;4902:1;4895:14;4939:4;4936:1;4926:18;4918:26;;4810:141;;;:::o;4957:93::-;4994:6;5041:2;5036;5029:5;5025:14;5021:23;5011:33;;4957:93;;;:::o;5056:107::-;5100:8;5150:5;5144:4;5140:16;5119:37;;5056:107;;;;:::o;5169:393::-;5238:6;5288:1;5276:10;5272:18;5311:97;5341:66;5330:9;5311:97;:::i;:::-;5429:39;5459:8;5448:9;5429:39;:::i;:::-;5417:51;;5501:4;5497:9;5490:5;5486:21;5477:30;;5550:4;5540:8;5536:19;5529:5;5526:30;5516:40;;5245:317;;5169:393;;;;;:::o;5568:60::-;5596:3;5617:5;5610:12;;5568:60;;;:::o;5634:142::-;5684:9;5717:53;5735:34;5744:24;5762:5;5744:24;:::i;:::-;5735:34;:::i;:::-;5717:53;:::i;:::-;5704:66;;5634:142;;;:::o;5782:75::-;5825:3;5846:5;5839:12;;5782:75;;;:::o;5863:269::-;5973:39;6004:7;5973:39;:::i;:::-;6034:91;6083:41;6107:16;6083:41;:::i;:::-;6075:6;6068:4;6062:11;6034:91;:::i;:::-;6028:4;6021:105;5939:193;5863:269;;;:::o;6138:73::-;6183:3;6138:73;:::o;6217:189::-;6294:32;;:::i;:::-;6335:65;6393:6;6385;6379:4;6335:65;:::i;:::-;6270:136;6217:189;;:::o;6412:186::-;6472:120;6489:3;6482:5;6479:14;6472:120;;;6543:39;6580:1;6573:5;6543:39;:::i;:::-;6516:1;6509:5;6505:13;6496:22;;6472:120;;;6412:186;;:::o;6604:543::-;6705:2;6700:3;6697:11;6694:446;;;6739:38;6771:5;6739:38;:::i;:::-;6823:29;6841:10;6823:29;:::i;:::-;6813:8;6809:44;7006:2;6994:10;6991:18;6988:49;;;7027:8;7012:23;;6988:49;7050:80;7106:22;7124:3;7106:22;:::i;:::-;7096:8;7092:37;7079:11;7050:80;:::i;:::-;6709:431;;6694:446;6604:543;;;:::o;7153:117::-;7207:8;7257:5;7251:4;7247:16;7226:37;;7153:117;;;;:::o;7276:169::-;7320:6;7353:51;7401:1;7397:6;7389:5;7386:1;7382:13;7353:51;:::i;:::-;7349:56;7434:4;7428;7424:15;7414:25;;7327:118;7276:169;;;;:::o;7450:295::-;7526:4;7672:29;7697:3;7691:4;7672:29;:::i;:::-;7664:37;;7734:3;7731:1;7727:11;7721:4;7718:21;7710:29;;7450:295;;;;:::o;7750:1395::-;7867:37;7900:3;7867:37;:::i;:::-;7969:18;7961:6;7958:30;7955:56;;;7991:18;;:::i;:::-;7955:56;8035:38;8067:4;8061:11;8035:38;:::i;:::-;8120:67;8180:6;8172;8166:4;8120:67;:::i;:::-;8214:1;8238:4;8225:17;;8270:2;8262:6;8259:14;8287:1;8282:618;;;;8944:1;8961:6;8958:77;;;9010:9;9005:3;9001:19;8995:26;8986:35;;8958:77;9061:67;9121:6;9114:5;9061:67;:::i;:::-;9055:4;9048:81;8917:222;8252:887;;8282:618;8334:4;8330:9;8322:6;8318:22;8368:37;8400:4;8368:37;:::i;:::-;8427:1;8441:208;8455:7;8452:1;8449:14;8441:208;;;8534:9;8529:3;8525:19;8519:26;8511:6;8504:42;8585:1;8577:6;8573:14;8563:24;;8632:2;8621:9;8617:18;8604:31;;8478:4;8475:1;8471:12;8466:17;;8441:208;;;8677:6;8668:7;8665:19;8662:179;;;8735:9;8730:3;8726:19;8720:26;8778:48;8820:4;8812:6;8808:17;8797:9;8778:48;:::i;:::-;8770:6;8763:64;8685:156;8662:179;8887:1;8883;8875:6;8871:14;8867:22;8861:4;8854:36;8289:611;;;8252:887;;7842:1303;;;7750:1395;;:::o;60:836:0:-;;;;;;;;;;;;;;;;;;;;;;",
};

const driverContractFactoryABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "driverWallet",
                type: "address",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "nid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "licenseNo",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "issue_date",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "exp_date",
                type: "uint256",
            },
        ],
        name: "createNewDriverProfile",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "driverWallet",
                type: "address",
            },
        ],
        name: "getDriverProfile",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
    },
    {
        inputs: [],
        name: "getAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
    },
];

export { driverContractABI, driverContractByteCode, driverContractFactoryABI };
