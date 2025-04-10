import Image from 'next/image';
import bank1 from '../../../../../public/bankImage1.png';
import bank2 from '../../../../../public/bankImage2.jpg';
import bank3 from '../../../../../public/bankImage3.webp';

const BankImages = () => {
  const cards = [
    {
      src: bank1,
      alt: 'MTB Bank Logo',
    },
    {
      src: bank2,
      alt: 'BRAC Bank Logo',
    },
    {
      src: bank3,
      alt: 'Dhaka Bank Logo',
    },
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

export default BankImages;
