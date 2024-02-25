require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/3Jss3W7-YWqwyUHWKGD_eZu5zqyigLCt',
      accounts: [
        'ENTER_PRIVET_KEY',
      ],
    },
  },
}
