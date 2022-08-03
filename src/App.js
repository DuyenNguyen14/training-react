import './App.css';
import DemoFunctionComp from './components/DemoComponent/DemoFunctionComp';
import DemoClassComp from './components/DemoComponent/DemoClassComp';
import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleWithJSX from './StyleWithJSX/StyleWithJSX';
import StateDemo from './StateDemo/StateDemo/StateDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import LayoutFilm from './RenderWithMap/LayoutFilm';
import LayoutFilms_SuaBai from './RenderWithMap/LayoutFilms_SuaBai';


function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <StyleWithJSX /> */}
      {/* <StateDemo /> */}
      {/* <RenderWithMap /> */}
      {/* <LayoutFilm /> */}
      <LayoutFilms_SuaBai />
    </div>
  );
}

export default App;
