import { Traffic } from "./TrafficLight/Traffic"
import { ClickInterval } from "./ClickInterval/ClickInterval"
import { Circle } from "./Circle/Circle"
import { Panel } from "./PanelHideShow/Panel"
import { Shopping } from "./ShoppingCart/Shopping"
import { Step } from "./StepForm/Step"
import { CountrySelect } from "./CountrySelect/CountrySelect"
import { TimerStop } from "./TimerStop/TimerStop"
import { DebounceList } from "./UseDebounce/DebounceList"
import { HtmlEntities } from "./HtmlEntitiesApiDisplay/HtmlEntities"
import { Pagination } from "./Pagination/Pagination"
import { Parallel } from "./ParallelDataFetch/Parallel"
import { Sequential } from "./SequentialDataFetch/Sequential"
import { Users } from "./UseFetch/Users"
import { Form } from "./UseForm/Form"
import { ProgressBar } from "./ProgressBar/ProgressBar"

const App = () => {
  return (
    <div className="h-[1000vh] flex flex-col gap-12">
      <Traffic />
      <ClickInterval />
      <Circle />
      <Panel />
      <Shopping />
      <Step />
      <CountrySelect />
      <DebounceList />
      <HtmlEntities />
      <Pagination />
      <Parallel />
      <Sequential />
      <TimerStop />
      <Users />
      <Form />
      <ProgressBar />
    </div>
  )
}

export default App
