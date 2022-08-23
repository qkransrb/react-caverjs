import React, { useState, useEffect } from "react";
import Caver from "caver-js";

const App = () => {
  const [account, setAccount] = useState(undefined);
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    const connectWallet = async () => {
      try {
        if (window.klaytn) {
          const accounts = await window.klaytn.enable();
          setAccount(accounts[0]);
        }
      } catch (error) {
        throw error;
      }
    };

    connectWallet();
  }, []);

  const getBalance = async () => {
    const caver = new Caver(window.klaytn);
    const balance = await caver.klay.getBalance(account);
    setBalance(caver.utils.fromPeb(balance));
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {account ? (
        <div className="flex flex-col gap-5">
          <span className="text-xl font-semibold">{account}</span>
          <div className="flex justify-end items-center gap-2 text-gray-500 font-semibold">
            <span>{balance}</span>
            <span>KLAY</span>
          </div>
          <button
            type="button"
            onClick={getBalance}
            className="border border-gray-400 shadow-md rounded py-1 text-gray-500"
          >
            Balance
          </button>
        </div>
      ) : (
        <p>Please install Kaikas</p>
      )}
    </div>
  );
};

export default App;
