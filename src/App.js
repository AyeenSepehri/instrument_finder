import Caption from './components/Caption';
import MainWrapper from './components/MainWrapper';
import Select from "./components/Select/Select"
import Range from "./components/Range/Range"
import { useSelector } from 'react-redux';


function App() {

  const counter = useSelector((state) => state.questions.index)
  const data = useSelector((state) => state.questions.datas)

  const questionType = data[counter].type


  console.log(questionType)

  return (
    <div className="App">
      <MainWrapper>
        <Caption/>
        {questionType === "Drop_Down" && <Select/>}
        {questionType === "Range" && <Range/>}
      </MainWrapper>
    </div>
  );
}

export default App;
