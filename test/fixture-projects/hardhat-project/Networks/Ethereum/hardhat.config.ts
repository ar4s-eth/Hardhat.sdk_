// We load the plugin here.
import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@dethcrypto/eth-sdk"
import "../../index";
import ethers from 'hardhat';
import "@nomiclabs/hardhat-ethers"


// https://github.com/Uniswap/v3-periphery-optimism/blob/main/hardhat.config.ts
const config: HardhatUserConfig = {
  solidity: "0.7.3",
  defaultNetwork: "hardhat",
  paths: {
    newPath: "asd",
  },
};

export default config;

