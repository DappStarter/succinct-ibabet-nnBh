require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remember clump gesture basket fringe gas'; 
let testAccounts = [
"0xdd2bacd22cdb5ea417e0eb8e4a1944142e26e301e25a441c14260966cd6733f0",
"0xdeb5d0075284dc559550433889c136534591041e2c032c859ee3588c7463d821",
"0xc7d7d6636f4f89b8ba5898bc8fa5bd8dfe60091e30cdd35403d4b052d8273636",
"0x4feb5a76602349e3dc5571de816d2a52d6ae972ee95c1696f213df37b20a4a03",
"0xe561103f206fc535ed8f5d526f296e3ebe860097b572c43a4b27023ed25b4515",
"0x6b0c3cc90151be610050ed443d63764265a307573a995b119a27108564142ff9",
"0x889063cae3a251fcf3ad0ca1639f5178e3c0ed3aceeab2333ad6d44c85b4f50c",
"0xfcafeabbc3b48f11017fb0449184f28b50165bf1322d33cfaaa33abd3c3dd28d",
"0x6cf730535da6c202415c40cfdfbf58505d54c058b005a75a73ec5249859292b6",
"0x341c472ddf7fbecb4c1caac284ed751b486b33a8af1d8b10df13dd3511440b83"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

