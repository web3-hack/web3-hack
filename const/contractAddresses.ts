/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
// import { Mumbai } from "@thirdweb-dev/chains";
import { Astar } from "@thirdweb-dev/chains";
// export const NETWORK = Mumbai;
export const NETWORK = Astar;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS =
//  "0x6604bd9D7770035f26B4ACeab2C746fdCE166473";テンプレのアドレス
// "0x6C3C83D94091ED039521505D896cC87F9642Aa36"; //munbaiのアドレス
// "0xD47c697A162365edafB7E2657108a225e93410eD"; //test astar
// "0xd3FBa9354B29B2bBCce80552D2E0389B941bC2C3"; //test2 astar
"0x11A3B02543c9594b671601aB8F6Acb8AD57Ec579";


// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  // "0xFfd9bAddF3f6e427EfAa1A4AEC99131078C1d683";　テンプレのアドレス
  // "0xA181CA2fe0Fb26d493B83b9e34974ddF1af7b6fE"; //munbaiのアドレス
  // "0x37F27DaAB6fcf4f8Fbbf961ba0C28E283B2d31A0";  //test astar
  // "0x3Bb860F2a09AdcFaDd8716D9a245797FcA4a3147";//test2 astar
   "0xd44Bad05c2B8236C28e02E169768767392A0e789";　//demo astar ここ！！！

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
