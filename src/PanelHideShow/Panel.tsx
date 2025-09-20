import React, { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
};

// Simple, reusable Accordion
const Accordion: React.FC<AccordionProps> = ({ title, children, isActive, onToggle }) => {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onToggle}>Show</button>}
    </section>
  );
};

// Container that manages which panel is open
const AccordionPanel: React.FC = () => {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActivePanel((prev) => (prev === index ? null : index));
  };

  const panelsData = [
    {
      title: "Hayu",
      content: `With a population of about 2 million, Almaty is Kazakhstan's largest city.
      From 1929 to 1997, it was its capital city.`,
    },
    {
      title: "Budda",
      content: `The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples".
      In fact, the region surrounding Almaty is thought to be the ancestral home of the apple.`,
    },
    {
      title: "Tyson",
      content: `The region surrounding Almaty is thought to be the ancestral home of the apple,
      and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.`,
    },
  ];

  return (
    <>
      {panelsData.map((panel, index) => (
        <Accordion
          key={index}
          title={panel.title}
          isActive={activePanel === index}
          onToggle={() => handleToggle(index)}
        >
          {panel.content}
        </Accordion>
      ))}
    </>
  );
};

export default AccordionPanel;
