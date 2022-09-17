import './App.css';
import FunctionClick from './components/Tut13/FunctionClick';
import ClassClick from './components/Tut13/ClassClick';
// import DestrPropStateFunc from './components/DestrPropStateFunc';
// import DestrPropStateClass from './components/DestrPropStateClass';
// import Counter from './components/Counter';
// import State from './components/State';
// import Props from './components/Props';
// import ClassComponent from './components/ClassComponent';
// import FunctionComponent from './components/FunctionComponent';
// import Jsx from './components/Jsx';
// import NoJsx from './components/NoJsx';
function App() {
  return (
    <div className="App">
      <FunctionClick/>
      <ClassClick/>

      {/* <DestrPropStateFunc name="Bruce" heroName="Batman"/>
      <DestrPropStateClass name="Bruce" heroName="Batman"/> */}
      {/* <Counter /> */}
      {/* <State /> */}
      {/* <FunctionComponent />
      <ClassComponent />
      <Jsx />
      <NoJsx /> */}

      {/* props tut */}
      {/* <Props name="Vuthik" age="23">
        <p>This is children props</p>
      </Props>
      <Props name="Bruce" heroName="Batman">
        <button>Action</button>
      </Props>
      <Props name="Clark" heroName="Superman" />
      <Props name="Diana" heroName="Wonder Woman" />

      <ClassComponent name="Bruce" heroName="Batman"></ClassComponent>
      <ClassComponent name="Clark" heroName="Superman"></ClassComponent>
      <ClassComponent name="Diana" heroName="Wonder Woman"></ClassComponent> */}
    </div>
  );
}

export default App;
