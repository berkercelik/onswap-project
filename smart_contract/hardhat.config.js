require("@nomiclabs/hardhat-waffle");


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/dnH8RR8BopdAXKtY69Yl89AQBA4zDDrX',
      accounts:[
        '95e2c443de4adba177f0fff6f94bc2b9e9e59975310bd497b35536cae56ae26b',
      ],
    },
  }
}
