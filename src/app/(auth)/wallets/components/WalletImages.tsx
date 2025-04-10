import Image from 'next/image';
import wallet1 from '../../../../../public/wallet1.png';

const WalletImages = () => {
  const cards = [
    {
      src: wallet1,
      alt: 'ekapay Bank Logo',
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg  p-4"
          >
            <Image
              src={card.src}
              alt={card.alt}
              className="object-contain lg:h-[200px]"
              width={500}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletImages;
