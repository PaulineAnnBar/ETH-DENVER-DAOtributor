# DAOtributor 👋 
### Full Stack Blockchain Development ✨
<p> ETH DENVER submission project</p>
<p>DAOtributor, a DAO contributor marketplace is a service platform that connects DAOs to individual and independent professionals across the globe.</p>


What we learned:
* Create, compile & deploy a smart contract to the Polygon Mumbai testnet using Hardhat.
* Verify your smart contract using Polygonscan API.
* Interact with your deployed smart contract from your front-end using Wagmi React Hooks.
* Use Web3Storage to store images & user data.
* Create, compile and deploy a Subgraph to The Graph's Hosted Service.
* Query your Subgraph from your front-end using GraphQL to display blockchain & ipfs data.
* Learn how search, filter and sort your data.

Deliverables: 

[Workshop Presentation Slides](https://www.canva.com/design/DAFcTRwa1Z4/GT_79aI7fAOFwPSC54a9Yw/view?utm_content=DAFcTRwa1Z4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)

# 🤖 Tech Stack and Chain Info:

#### Tech Stack: 
 - Javascript
 - Next.js
 - Tailwind CSS 
 - Chakra UI
 - Rainbow Wallet
 - IPFS / Web3 Storage
 - The Graph
 - GraphQL
 - WAGMI
 - Hardhat
 - Ethers.js


 
#### Chain: 
 
 Polygon Mumbai Contract Address:
0x757c0968f4763DD03B0C190D0B6b7146Ad07A022

FVM Contract Address:
0x539c4F1AFEA1199257126Cb1e2F8EA17207c44A4

Scroll Alpha Testnet Address:
0xC6EE62b2857733F65Da347df4553E096DCdD1c6E

Base Testnet Address:
0xd7c2Ba62222d7F868E856029f89B93216Cd78138

Mantle Testnet Address:
0xC6EE62b2857733F65Da347df4553E096DCdD1c6E
#### Other Characteristics: 
 - Monorepo
  
 ---

# 🏄‍♂️ Quick Start for Running Locally

#### Before you clone this project make sure you have the following installed on your machine (in this order)!
* [Node.js](https://nodejs.org/en/) 
* [Yarn](https://classic.yarnpkg.com/en/docs/install/)
* [Git](https://git-scm.com/downloads)

#### You can check by running these commands on your terminal:

```bash
node -v
npm -v
yarn -v
git --version
```
> If any don't return back the version info then you must install those to ensure your machine meets the prerequisites.

#### Fork and clone this project
* First, fork this project by clicking the `Fork` button in the upper right-hand corner of the repo page.
![Figure 2](./images/fork.png)
* Second, open your terminal and run the following command with your github username.
  
```bash
git clone https://github.com/<YOUR-USERNAME>/hello-world-polygon-and-thegraph
```
#### Install all project dependencies

* Inside the root directory run `yarn install`

```bash
cd hello-world-polygon-and-thegraph
yarn install
```
---

# 🛠 Environment Variables & Wallet Setup

#### Set Your Environment Variables:
#
```bash
# Navigate inside the 'hardhat' folder
cd packages/hardhat 
# Copy the contents of .env.example to .env
cp .env.example .env
# Then Navigate inside the 'next-app' folder
cd ../next-app
# Copy the contents of .env.example to .env
cp .env.example .env
```
* Fill out the variables inside `.env` using your keys, urls, and seed phrase you saved during the earlier steps.

---

# 📱 Run the App

* In the root directory, run the command `yarn dev`

```bash
yarn dev
```
* Open http://localhost:3000

---
