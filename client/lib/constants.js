import abi from './Transactions.json'

//firstly we need a contract that taking some varaibles from user and blockchain. Like amount, sender, receiver address... I used alchemy.io and hardhat API for
// creating a contract and deploy to rinkeby testnet blockchain. After that i selected the contract which is deployed and i wrote to here.

export const contractABI = abi.abi
export const contractAddress = '0x0'