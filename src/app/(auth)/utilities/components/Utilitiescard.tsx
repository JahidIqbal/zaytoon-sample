import Image from 'next/image';
import Utilities1 from '../../../../../public/wallet1.png';
import Utilities2 from '../../../../../public/paywell_logo.png';

const Utilitiescard = () => {
  const cards = [
    {
      src: Utilities1,
      alt: 'ekpay Bank Logo',
    },
    {
      src: Utilities2,
      alt: 'Paywell Bank Logo',
    }
  ];

  return (
    <div className="py-12 px-8">
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

export default Utilitiescard;
