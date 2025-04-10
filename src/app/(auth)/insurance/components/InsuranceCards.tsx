import Image from 'next/image';
import insurance1 from '../../../../../public/insurance1.png';
import insurance2 from '../../../../../public/insurance2.png';

const InsuranceCards = () => {
  const cards = [
    {
      src: insurance1,
      alt: 'Bimafy Bank Logo',
    },
    {
      src: insurance2,
      alt: 'Gurdian Bank Logo',
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

export default InsuranceCards;
