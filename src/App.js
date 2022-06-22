import './App.css';
import StateTutorial from "./UseState/UseStatedemo";
import ReducerTutorial from "./UseReducer/UseReducerdemo";
import EffectTutorial from "./UseEffect/UseEffectdemo";
import RefTutorial from "./UseRef/UseRefdemo";
import LayoutEffectTutorial from "./UseLayoutEffect/UseLayoutEffectdemo";
import ImperitiveTutorial from "./UseImperitiveHandle/UseImapritiveHandledemo";
import ContextTutorial from './UseContext/UseContextdemo';
import MemoTutorial from './UseMemo/UseMemodemo';
import CallBackTutorial from './UseCallback/CallBackdemo';

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <ImperitiveTutorial />
      <ContextTutorial />
      <MemoTutorial />
      <CallBackTutorial />
    </div>
  );
}

export default App;
