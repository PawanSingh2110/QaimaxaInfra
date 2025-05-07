import React, { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "Description 1",
    image: "https://source.unsplash.com/400x600/?space",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Description 2",
    image: "https://source.unsplash.com/400x600/?technology",
    bgColor: "bg-blue-200",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Description 3",
    image: "https://source.unsplash.com/400x600/?science",
    bgColor: "bg-blue-300",
  },
  {
    id: 4,
    title: "NEW TECHNOLOGIES",
    description: "Space engineering becomes more and more advanced",
    image: "https://source.unsplash.com/400x600/?astronaut",
    bgColor: "bg-blue-500",
  },
];

const ExpandingCards = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100 p-5 overflow-hidden">
      {cards.map((card, index) => (
        <div
          key={card.id}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)} // Reset active on mouse leave
          className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
            ${active === index ? "flex-[5]" : active === null ? "flex-1" : "flex-[1]"}
            h-[100vh] bg-black flex items-end ${card.bgColor}`}
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/50 w-full p-4 text-white">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                {card.id}
              </div>
              {active === index && (
                <div>
                  <h2 className="font-bold text-lg">{card.title}</h2>
                  <p className="text-xs">{card.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;
