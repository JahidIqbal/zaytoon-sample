const BankImages = () => {
    const cards = [
      {
        bankName: 'Polygon Bank',
        cardNumber: '**** **** **** 1234',
        expiry: '12/27',
        holder: 'Jahid Hasan',
        bgColor: 'from-[#7eb456] to-[#a3d66f]',
      },
      {
        bankName: 'Neo Bank',
        cardNumber: '**** **** **** 5678',
        expiry: '08/26',
        holder: 'Alex Doe',
        bgColor: 'from-[#4e54c8] to-[#8f94fb]',
      },
      {
        bankName: 'Luma Credit',
        cardNumber: '**** **** **** 9012',
        expiry: '04/25',
        holder: 'Sara Lee',
        bgColor: 'from-[#ff9966] to-[#ff5e62]',
      },
    ];
  
    return (
      <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${card.bgColor} text-white p-6 rounded-2xl shadow-xl flex flex-col justify-between h-52`}
            >
              <div className="text-lg font-semibold">{card.bankName}</div>
              <div className="mt-6">
                <div className="text-xl tracking-widest font-mono">{card.cardNumber}</div>
                <div className="flex justify-between mt-4 text-sm">
                  <span>Expiry: {card.expiry}</span>
                  <span>{card.holder}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BankImages;
  