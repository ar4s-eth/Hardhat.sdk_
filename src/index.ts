import { extendConfig, extendEnvironment } from "hardhat/config";
import { lazyObject } from "hardhat/plugins";
import { HardhatConfig, HardhatUserConfig } from "hardhat/types";
import  * as sdk_ from "@dethcrypto/eth-sdk-client";
import path from "path";


// import * as sdk_ from "@dethcrypto/eth-sdk-client"
// console.log(`index sdk_`, sdk_)

import { ExampleHardhatRuntimeEnvironmentField } from "./ExampleHardhatRuntimeEnvironmentField";
// This import is needed to let the TypeScript compiler know that it should include your type
// extensions in your npm package's types file.
import "./type-extensions";
// import { sdk_ } from "hardhat";
// import { createEthSdkConfig } from "@dethcrypto/eth-sdk/dist/config";
// import { getBscSdk } from "@dethcrypto/eth-sdk-client";

extendConfig(
  (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
    // We apply our default config here. Any other kind of config resolution
    // or normalization should be placed here.
    //
    // `config` is the resolved config, which will be used during runtime and
    // you should modify.
    // `userConfig` is the config as provided by the user. You should not modify
    // it.
    //
    // If you extended the `HardhatConfig` type, you need to make sure that
    // executing this function ensures that the `config` object is in a valid
    // state for its type, including its extensions. For example, you may
    // need to apply a default value, like in this example.
    const userPath = userConfig.paths?.newPath;

    let newPath: string;
    if (userPath === undefined) {
      newPath = path.join(config.paths.root, "newPath");
    } else {
      if (path.isAbsolute(userPath)) {
        newPath = userPath;
      } else {
        // We resolve relative paths starting from the project's root.
        // Please keep this convention to avoid confusion.
        newPath = path.normalize(path.join(config.paths.root, userPath));
      }
    }

    config.paths.newPath = newPath;
  }
);

// let x = async () => {
//   const lol = await what();
//   return lol
// }
// console.log(x);
// const DEBUG = false;

// function debug(text: string) {
//   if (DEBUG) {
//     console.log(text);
//   }
// }
extendEnvironment((hre) => {
  // We add a field to the Hardhat Runtime Environment here.
  // We use lazyObject to avoid initializing things until they are actually
  // needed.

  hre.sdk_ = sdk_

  // hre.sdk_ = /*lazyFunction(*/() => {

  //   // if(sdk_.getBscSdk) {
  //     require(["@dethcrypto/eth-sdk-client"], (getBscSdk: typeof sdk_) => {
  //       let instance_ = async () => {
  //         return await getBscSdk.getBscSdk(await ethers.getSigner("0x714957aE1F13fEA947a4a141B4ba8547017D8785"))
  //       }
  //     //   return instance_
  //     })
  //   }
  // })

  // hre.sdk_ = lazyFunction(() => {
  //   return {
  //     //@ts-ignore
  //     ...(await eth_sdk.getEthSdk(ethers.getSigner()) ?? await eth_sdk.getBscSdk(ethers.getSigner()))
  //   }
  // });

  // console.log(`network`, hre.network)
  // console.log(`XXxxxXXXXXXXXX`, async(await what (what) => {return what}))

  // const sdk_signer = 0x000000000000000000000000000000000000dEaD 
  // const done = await initialize()
  // const SDK: HardhatSdk_ = await require("@dethcrypto/eth-sdk-client");
  // console.log(`SDK`,SDK)
  // const bsc = await use.getBscSdk(hre.ethers.provider.getSigner())
  // return console.log(bsc)
  // console.log(`SDK  ------------- >`, sdk_)
  
  // hre.sdk_ = lazyObject(() => new 
  // hre.sdk_ = lazyObject(() => new ExampleHardhatRuntimeEnvironmentField());
  hre.example = lazyObject(() => new ExampleHardhatRuntimeEnvironmentField());
});
