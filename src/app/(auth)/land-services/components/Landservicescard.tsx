import Image from 'next/image';
import land1 from '../../../../../public/land_tax.png';

const Landservicescard = () => {
  const cards = [
    {
      src: land1,
      alt: 'land Logo',
      tilte:'Land Tax'
    },
    {
      src: land1,
      alt: 'land Logo',
      tilte:'Land Record'
    },
    {
      src: land1,
      alt: 'land Logo',
      tilte:'Land Record Mutation'
    },
    {
      src: land1,
      alt: 'land Logo',
      tilte:'Inheritence'
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
            <h1 className='text-center uppercase font-semibold'>{card.tilte}</h1>
          </div>
        
        ))}
      </div>
    </div>
  );
};

export default Landservicescard;
