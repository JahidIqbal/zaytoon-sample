const WalletImages = () => {
    const wallets = [
      {
        name: 'PayPal Wallet',
        balance: '$1,245.00',
        email: 'user@example.com',
        bgColor: 'from-[#0070ba] to-[#1546a0]', 
      },
      {
        name: 'Apple Pay',
        balance: '$980.55',
        email: 'apple.user@icloud.com',
        bgColor: 'from-[#333333] to-[#000000]', 
      },
      {
        name: 'Google Wallet',
        balance: '$2,102.30',
        email: 'user@gmail.com',
        bgColor: 'from-[#34a853] to-[#4285f4]',
      },
    ];
  
    return (
      <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wallets.map((wallet, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${wallet.bgColor} text-white p-6 rounded-2xl shadow-xl flex flex-col justify-between h-44`}
            >
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">{wallet.name}</div>
                {/* Placeholder for Wallet Icon */}
                <div className="text-xl">💼</div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold">{wallet.balance}</div>
                <div className="text-sm mt-1">{wallet.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WalletImages;
  