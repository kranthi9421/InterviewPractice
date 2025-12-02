import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
};

const Accordion = ({ title, children, isActive, onToggle }: AccordionProps) => {
  return (
    <section style={{ marginBottom: "15px" }}>
      <h3>{title}</h3>

      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onToggle}>Show</button>
      )}
    </section>
  );
};

export default function AccordionPanel() {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActivePanel((prev) => (prev === index ? null : index));
  };

  const panels = [
    {
      title: "Hayu",
      content:
        "With a population of about 2 million, Almaty is Kazakhstan's largest city.",
    },
    {
      title: "Budda",
      content:
        'The name comes from "alma", the Kazakh word for "apple". It means "full of apples".',
    },
    {
      title: "Tyson",
      content:
        "The region surrounding Almaty is thought to be the ancestral home of the apple.",
    },
  ];

  return (
    <div>
      {panels.map((panel, index) => (
        <Accordion
          key={index}
          title={panel.title}
          isActive={activePanel === index}
          onToggle={() => toggle(index)}
        >
          {panel.content}
        </Accordion>
      ))}
    </div>
  );
}
