import './App.css';
import DemoFunctionComp from './components/DemoComponent/DemoFunctionComp';
import DemoClassComp from './components/DemoComponent/DemoClassComp';
import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleWithJSX from './StyleWithJSX/StyleWithJSX';


function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      <StyleWithJSX />
      <p className='text-red'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo modi eos quidem molestiae debitis ullam ut id possimus. Officia laborum illo eligendi reiciendis sint asperiores officiis eaque expedita cupiditate.</p>
    </div>
  );
}

export default App;
