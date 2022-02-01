require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth remain come include enrich swift soup'; 
let testAccounts = [
"0xab5b19def88e7856bc480ca4495204e4d9a797c00de0be2c833b954d9c357925",
"0x9cc4411e4b840c95743b4926e05bf106335c814abb80beed445dd9ab42d620ec",
"0x6e539022169f41e276306b7e7bf2ee389aa66967f6d6b5ee56c77f49c777a98f",
"0xf2b755edcec9d897d808944405493a613098e1e9038a309becc2a772cf2c9f69",
"0xece2295e2d172d34f417c5fd198552dcb28c4d3c27b35bae557c3cd91dcaddfc",
"0x349c06f94cb2d7c27b0497f2f4c020cfe288f4029669e5bd45875d27b132cb83",
"0x0cc90cb12696732886315091f1904be75644de4e58686dc2d350fddc73c898f1",
"0xd215762e140cef116d37af4fdd2baa994eade6770c0f1d20cf7f7956b03fd5b1",
"0x9a21cbefde2cc1ee4c9b2bebed269ac2b9bcdc180ec6df35f4c6119a6ddab80f",
"0x8c94c519231b3f56a493791d4545626b3518980f4bec35de4fa8d7262a73610a"
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

