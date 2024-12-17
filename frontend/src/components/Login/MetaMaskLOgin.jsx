import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const MetaMaskLogin = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const loadMetaMask = async () => {
      if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });

          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (error) {
          console.error('User denied account access');
        }
      } else if (typeof window.web3 !== 'undefined') {
        // Fallback for older versions of MetaMask
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    };

    loadMetaMask();
  }, []);

  const authenticateWithMetaMask = async () => {
    if (typeof window.ethereum === 'undefined') {
      console.error('MetaMask not detected. Please install MetaMask.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Error authenticating with MetaMask:', error);
    }
  };

  const logout = () => {
    try {
      setAccount('');
      alert('LOGGED OUT');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="">
        <h1 className="text-3xl font-bold mb-4 text-center">MetaMask Login</h1>

        {account ? (
          <div className="text-green-600">
            <p>Authenticated with MetaMask</p>
            <p>Ethereum Address: {account}</p>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-red-600">
            <p>You are not authenticated with MetaMask</p>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={authenticateWithMetaMask}
            >
              Login with MetaMask
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetaMaskLogin;
