require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/QtDafAYwRY1jwGfROPfE7ClAqli-y_Q3',
      accounts: [
        '3cbaa445a0157ce9c290e9aa00099c4239d24e59c5983a3788c096c591afd8c6',
      ],
    },
  },
}
