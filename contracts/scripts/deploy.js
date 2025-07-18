const hre = require('hardhat');

async function main() {
  console.log('Deploying Notary contract...');

  // Get the contract factory
  const Notary = await hre.ethers.getContractFactory('Notary');

  // Deploy the contract
  const notary = await Notary.deploy();

  // Wait for deployment to finish
  await notary.deployed();

  console.log(`Notary contract deployed to: ${notary.address}`);

  // Deploy PaymentEscrow
  const PaymentEscrow = await hre.ethers.getContractFactory('PaymentEscrow');
  const paymentEscrow = await PaymentEscrow.deploy();
  await paymentEscrow.deployed();
  console.log('PaymentEscrow deployed to:', paymentEscrow.address);

  // Deploy ReceiptNFT
  const ReceiptNFT = await hre.ethers.getContractFactory('ReceiptNFT');
  const receiptNFT = await ReceiptNFT.deploy();
  await receiptNFT.deployed();
  console.log('ReceiptNFT deployed to:', receiptNFT.address);
}

// Execute deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
