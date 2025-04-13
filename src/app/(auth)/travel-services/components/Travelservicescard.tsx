import Image from 'next/image';
import travelcard1 from '../../../../../public/bd_tickets.png';
import travelcard2 from '../../../../../public/railyway_logo.png';

const Travelservicescard = () => {
  const cards = [
    {
      src: travelcard1,
      alt: 'bd tickets Logo',
    },
    {
      src: travelcard2,
      alt: 'bangladesh railway Bank Logo',
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

export default Travelservicescard;
