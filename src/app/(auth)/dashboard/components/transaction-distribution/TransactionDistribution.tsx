import React from "react";
import { get } from "@/api";
import {
  CustomerTransactionResponse,
  MerchantTransactionResponse,
} from "../../Types";
import TransactionByType from "./TransactionByType";

async function TransactionDistribution() {
  // const customerTransactions = await get<CustomerTransactionResponse>(
  //   "/api/v1/dashboard/customer-transaction-volume"
  // );
  // const merchantTransactions = await get<MerchantTransactionResponse>(
  //   "/api/v1/dashboard/merchant-transaction-volume"
  // );

  const customerTransactions: CustomerTransactionResponse = {
    transactionvolume: [
      { name: "Credit", value: 1500 },
      { name: "Debit", value: 800 },
      { name: "Transfer", value: 500 },
    ],
  };

  const merchantTransactions: MerchantTransactionResponse = {
    transactionvolume: [
      { name: "Credit", value: 2000 },
      { name: "Debit", value: 1200 },
      { name: "Transfer", value: 900 },
    ],
  };


  return (
    <div className="w-full flex gap-4">
      <div className="w-full">
        <TransactionByType
          title="Top Books Purchase Count"
          transactionTypes={customerTransactions.transactionvolume}
        />
      </div>
      <div className="w-full">
        <TransactionByType
          title="Top Book Purchase Volume"
          transactionTypes={merchantTransactions.transactionvolume}
          isMerchant={true}
        />
      </div>
    </div>
  );
}

export default TransactionDistribution;
