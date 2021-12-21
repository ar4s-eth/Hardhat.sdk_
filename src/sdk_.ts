import type * as eth_sdk from "@dethcrypto/eth-sdk-client"; //eth-sdk exports dynamic types based on eth-sdk.config.ts
import { lazyFunction, lazyObject } from "hardhat/plugins";
import {getBscSdk} from "@dethcrypto/eth-sdk-client"
// import {getMainnetSdk} from "@dethcrypto/eth-sdk-client"
// import {ethers} from "hardhat"

// declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

export { eth_sdk } 
// export const eth_sdk = lazyFunction(() => require("@dethcrypto/eth-sdk-client"));

// export const what = async () => {
  // if(true) {
    // require(["@dethcrypto/eth-sdk-client"],  
    // (eth_sdk_client: typeof eth_sdk) => { 
    // //   console.log(`inside what`)
    // //   const TestConstructorFunction = async () => await function (this: any, getSdkType: any, getSdkContract?: any) {
    // //     this.getSdkType = getSdkType;
    // //     this.getSdkContract = getSdkContract;
    // //     return
    // // };
    // //   const sdk = async () => new (TestConstructorFunction as any)(getBscSdk(await ethers.getSigner("0x0")))
    //   const sdk = async () => getBscSdk(await ethers.getSigner("0x0"))
    //   return console.log(`__-------_____---- sdk_`, sdk)
    // })
  // } 
// }


// import * as bunk from "@dethcrypto/eth-sdk-client"

// export default class sdk_ {
//   public getMainnetSdk(s: signer) {
//     return s
//   }
// }




// export default class HardhatSdk_ {
  //   interface sdk_ {
  //     eth_sdk: typeof import("@dethcrypto/eth-sdk-client/types");
  //   }
  // }



// declare interface eth_sdk {
//     libraryObject: sdkObject
// }


// import * as {_proto...} from '@dethcrypto/eth-sdk-client';
// const {...sdk_} = _proto;
// export default sdk_
// console.log(`...sdk`, sdk_)


// export default class sdk_ {
//   public get(_: object) {
//     return {..._}
//     }
//   }

// export default class sdk_ {
// public get(_: object) {
//   return {..._}
//   }
// }

// export default class HardhatSDK {
//   public get() {
//     return "hello";
//   }
// }