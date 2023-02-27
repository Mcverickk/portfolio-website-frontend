const NAME = "Chirag Agarwal";
const INSTAGRAM = "https://www.instagram.com/chitrachirag_/";
const TWITTER = "https://twitter.com/mcverickk";
const LINKEDIN = "https://www.linkedin.com/in/chiragagarwal2001/";
const GITHUB = "https://github.com/Mcverickk";
const MEDIUM = "https://medium.com/@Mcverick";
const EMAIL = "chiragagarwal2001@gmail.com";
const PHONE = "+91 8777859648";
const LOCATION = "India";
const RESUME_FILENAME = "ChiragAgarwal_Resume_v2.pdf";
const COLLEGE = "BITS Pilani Goa '23";

const TYPOGRAPHY = [
  1200,
  " Blockchain Developer",
  1000,
  " Full-stack Web Developer",
  1000,
  " Photographer",
  1000,
  " Traveller",
  1000,
  " #buidler",
];

const BIO =
  "I am a final-year B.E. Electrical & Electronics engineering student at BITS Pilani Goa. I have a strong interest in blockchain technology and have been exploring its applications in finance and technology. As a software engineer, I have experience working on various personal and professional projects, including those related to Web3 payment systems, NFTs, DeFi, zkSNARKs, and oracles. In addition to my technical pursuits, I also have a passion for mountains, traveling, photography, cricket, simulator racing and graphic design.";

const PROJECT1 = {
  TYPE: "BLOCKCHAIN",
  TITLE: "Polygon Pay",
  DETAILS:
    "Built a payment system on Polygon for merchants where users can pay the merchant by scanning a QR code using EIP 681. The payment can be made in ERC20 & MATIC tokes & the transaction is instantly verified at the merchant's end.",
  LINK: { GITHUB },
  TAGS: ["DeFi", "Node.js", "Ethereum"],
};

const PROJECT2 = {
  TYPE: "BLOCKCHAIN",
  TITLE: "Mr.Gadget",
  DETAILS:
    "Mr.Gadget is a collection of 241 uniquely generated NFTs on Polygon. IPFS is used to store NFT's metadata & React.js was used to build the frontend.",
  LINK: "https://mrgadget.netlify.app/",
  TAGS: ["NFT", "React.js", "Solidity", "IPFS"],
};

const PROJECT3 = {
  TYPE: "ARTICLE",
  TITLE: "Ethernaut Lvl 27 Walkthrough",
  DETAILS:
    "The article contains a step-by-step walkthrough to hack Ethernaut's Lvl 27 - Good Samaritan. It explains in detail what is custom errors in solidity & how we can use them to hack the level.",
  LINK: "https://medium.com/block-magnates/ethernaut-lvl-27-good-samaritan-walkthrough-custom-errors-in-solidity-17c7e20fb58a",
  TAGS: ["Solidity", "Security", "Smart Contract"],
};

const PROJECT4 = {
  TYPE: "BLOCKCHAIN",
  TITLE: "Batch Payments",
  DETAILS:
    "Written smart contract in solidity to make batch payments in ETH. Batch payments made using this contract will lead to low gas fee consumption in making payments to many accounts addresses at once.",
  LINK: "https://github.com/Mcverickk/Batch-Payments-Contract.git",
  TAGS: ["Solidity", "Smart Contract", "DeFi"],
};

const PROJECT5 = {
  TYPE: "ARTICLE",
  TITLE: "Bitcoin and Ethereum",
  DETAILS:
    "The article describes Bitcoin & Ethereum & explains how Ethereum is different from Bitcoin. We also look at how these technologies add value to our lives and how their use cases can solve problems.",
  LINK: "https://medium.com/@Mcverick/bitcoin-and-ethereum-underlying-technology-and-its-applications-3e16128a022f",
  TAGS: ["Bitcoin", "Ethereum", "Blockchain"],
};

const PROJECT6 = {
  TYPE: "ARTICLE",
  TITLE: "Decentralized Storage",
  DETAILS:
    "The article is an explainer of decentralized storage. It takes us through the history of storage systems & how decentralized storage can be the next evolution. It also explains IPFS & Filecoin and what they are doing in this space.",
  LINK: "https://medium.com/@Mcverick/an-explainer-on-decentralized-storage-983159eb7a3d",
  TAGS: ["IPFS", "Decentralized Storage"],
};

const PROJECT7 = {
  TYPE: "WEB DEVELOPMENT",
  TITLE: "Porfolio Website",
  DETAILS:
    "Created this portfolio website using React.js, Bootstrap & CSS. Also configured it as a template for anyone to use.",
  LINK: "https://github.com/Mcverickk/portfolio-website-frontend",
  TAGS: ["React.js", "Bootstrap", "Designing", "HTML", "CSS"],
};

const PROJECT8 = {
  TYPE: "BLOCKCHAIN",
  TITLE: "Warranty NFTs",
  DETAILS:
    "Built an NFT project for warranty cards, where the NFT decays automatically after the warrant period is over. The warrant card also can be soulbound to prevent transfer of item ownership. The smart contract was written in Solidity & Next.js was used to build the website.",
  LINK: "https://github.com/Mcverickk/Decaying-Warranty-NFT-ethereum.git",
  TAGS: ["React.js", "Solidity", "Next.js", "NFT"],
};

const PROJECT9 = {
  TYPE: "BLOCKCHAIN",
  TITLE: "Box Protocol",
  DETAILS:
    "A platform for buying and selling tokenized crypto portfolios. It is an easy, self custodial way to invest in boxes representing the hottest ideas and sectors in Web3!",
  LINK: "https://box-protocol.netlify.app/",
  TAGS: ["DeFi", "Solidity", "React.js"],
};

const WORK = {
  ONE: {
    COMPANY: "Yushu Excellence",
    ROLE: "Blockchain Developer Intern",
    TIME: "AUG 2022 - OCT 2022",
    DETAILS: [
      "Worked on implementing a UniswapV2 fork on Layer1 called Cube Network.",
      "Explored & developed smart contracts involving Uniswap's Core & Router contracts.",
      "Integrated swap and liquidity feature to the frontend of the protocol using React and Ethers.js.",
      "Managed a project to build an ERC20 token launchpad with staking.",
      "Documented the entire end-to-end structure & work of the launchpad project.",
      "Created a detailed explainer on Fractional NFTs.",
    ],
  },
  TWO: {
    COMPANY: "Pay3",
    ROLE: "Blockchain Developer Intern",
    TIME: "FEB 2022 - PRESENT",
    DETAILS: [
      "Researched various crypto exchanges & structured the execution of on-ramp & off-ramp payment systems.",
      "Created, tested and deployed smart contracts for batch payments on Ethereum & Polygon.",
      "Built smart contracts that directly interacted with the Uniswap Router contract to swap tokens and send them to an address.",
      "Worked on building a multi-wallet connect SDK, which the client can import to add multi-wallet connectivity with Metamask, Coinbase, WalletConnect & Web3Auth to their applications.",
    ],
  },
  FOUR: {
    COMPANY: "Kubera Capital",
    ROLE: "Web3 Research Analyst",
    TIME: "NOV 2021 - FEB 2022",
    DETAILS: [
      "Explored the financial side of the Web3 space and gained an understanding of various DeFi protocols.",
      "Tracked DeFi protocols to understand how we can use them to generate yield.",
      "Researched on few projects on Polkadot & Kusama.",
    ],
  },
  FIVE: {
    COMPANY: "The Department of Photography",
    ROLE: "Head of Photography",
    TIME: "JUL 2021 - JUN 2022",
    DETAILS: [
      "Managed an inventory of worth 15 lakh.",
      "Trained a team of around 120 photographers.",
      "Organized a photography contest with more than 900+ entries.",
    ],
  },
};

export {
  NAME,
  INSTAGRAM,
  TWITTER,
  LINKEDIN,
  GITHUB,
  MEDIUM,
  PROJECT1,
  PROJECT2,
  PROJECT3,
  PROJECT4,
  PROJECT5,
  PROJECT6,
  PROJECT7,
  PROJECT8,
  PROJECT9,
  BIO,
  WORK,
  EMAIL,
  PHONE,
  LOCATION,
  RESUME_FILENAME,
  TYPOGRAPHY,
  COLLEGE,
};
