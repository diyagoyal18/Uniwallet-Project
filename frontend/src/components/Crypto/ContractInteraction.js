import React, { useState } from 'react';
import Web3 from 'web3';

// Contract ABI
const contractABI = [/* Your contract ABI */];
// Contract address
const contractAddress = '0x123...'; // Your contract address

function ContractInteraction() {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);

    // Connect to Ethereum network
    const connectToEthereum = async () => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            await window.ethereum.enable();
            setWeb3(web3Instance);
            const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
            setContract(contractInstance);
        } else {
            alert('Please install MetaMask to use this application.');
        }
    };

    // Function to check contract balance
    const checkBalance = async () => {
        if (web3 && contract) {
            const balance = await contract.methods.checkBalance().call();
            console.log('Contract balance:', balance);
        }
    };

    // Function to send investment transaction
    const invest = async () => {
        if (web3 && contract) {
            const accounts = await web3.eth.getAccounts();
            await contract.methods.inputAndInvest(100).send({ from: accounts[0], value: '100000000000000000' });
        }
    };

    return (
        <div>
            <button onClick={connectToEthereum}>Connect to Ethereum</button>
            <button onClick={checkBalance}>Check Contract Balance</button>
            <button onClick={invest}>Invest</button>
            {/* Add contract interaction UI here */}
        </div>
    );
}

export default ContractInteraction;
