import Caption from './components/Caption';
import MainWrapper from './components/MainWrapper';
import Select from "./components/Select/Select"


function App() {

  return (
    <div className="App">
      <MainWrapper>
        <Caption/>
        <Select/>
      </MainWrapper>
    </div>
  );
}

export default App;
