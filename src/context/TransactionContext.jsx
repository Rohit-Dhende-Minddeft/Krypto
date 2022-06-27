import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccounts] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        return alert("Please install Metamask");
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccounts(accounts[0]);
      } else {
        console.log("No Account Found");
      }
    } catch (error) {
      console.log("No Ethereum Found");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please install Metamask");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccounts(accounts[0]);
    } catch (error) {
      console.error(error);
      throw new Error("No Ethereum object.");
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
