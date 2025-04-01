import { useState } from "react"

type PanelProps = {
  title: string
  children: React.ReactNode
  isActive: boolean
  onToggle: () => void
}

function Accordion({ title, children, isActive, onToggle }: PanelProps) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onToggle}>Show</button>}
    </section>
  )
}

export const Panel = () => {
  const [activePanel, setActivePanel] = useState<number | null>(0) // Keeps track of the currently open panel

  const handleTogglePanel = (panelIndex: number) => {
    setActivePanel(activePanel === panelIndex ? null : panelIndex)
  }

  const panelsData = [
    {
      title: "Hayu",
      content:
        "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.",
    },
    {
      title: "Budda",
      content: `The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples".
      In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.`,
    },
    {
      title: "Tyson",
      content: `The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples".
      In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.`,
    },
  ]

  return (
    <>
      {panelsData.map((panel, index) => (
        <Accordion
          key={index}
          title={panel.title}
          isActive={activePanel === index}
          onToggle={() => handleTogglePanel(index)}
        >
          {panel.content}
        </Accordion>
      ))}
    </>
  )
}
