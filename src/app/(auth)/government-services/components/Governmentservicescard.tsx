import { FaFilePen } from "react-icons/fa6";

const Governmentservicescard = () => {
  const cards = [
    {
      icon: FaFilePen,
      alt: "pen Logo",
      title:'NID Service'
    },
    {
      icon: FaFilePen,
      alt: "pen Logo",
      title:'Drivers License'
    },
    {
      icon: FaFilePen,
      alt: "pen Logo",
       title:'Government Bill Payment'
    },
    {
      icon: FaFilePen,
      alt: "pen Logo",
      title:'Passport Application'
    },
    
  ];

  return (
    <div className="py-12 px-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center h-[165px] "
            >
              <Icon className="text-4xl mb-2" aria-label={card.alt} />
              <h1 className="text-center font-medium">{card.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Governmentservicescard;
