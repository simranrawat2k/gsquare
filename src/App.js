import "./App.css";
import Exam from "./components/Exam";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Home from "./components/Home";
import Information from "./components/Information";
import Teachers from "./components/Teachers";


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Information/>
      <Exam/>
      <Feature/>
      <Teachers/>
    </div>
  );
}

export default App;
