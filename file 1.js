//code here is used of javascript for implementing and triggering functions on the frontend
// app.js
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with the actual contract address
const contractABI = [...]; // Replace with the actual ABI of the contract

const web3 = new Web3(Web3.givenProvider);
const simpleContract = new web3.eth.Contract(contractABI, contractAddress);

const valueElement = document.getElementById('value');
const newValueInput = document.getElementById('newValue');
const setValueButton = document.getElementById('setValueButton');

async function updateValue() {
    const value = await simpleContract.methods.getValue().call();
    valueElement.textContent = value;
}

async function setValue() {
    const newValue = newValueInput.value;
    await simpleContract.methods.setValue(newValue).send({ from: web3.eth.defaultAccount });
    await updateValue();
}

setValueButton.addEventListener('click', setValue);

window.addEventListener('load', async () => {
    // Prompt user to connect their wallet
    await window.ethereum.enable();
    web3.eth.defaultAccount = (await web3.eth.getAccounts())[0];

    await updateValue();
});
