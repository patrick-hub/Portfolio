import "./App.css";
import NavBar from "./component/NavBar";
import {Banner} from "./component/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Technologies } from "./component/Technologies";


function App() {
	return <div className="App">
  <NavBar/>
 <Banner />
 <Technologies />
  </div>;
}

export default App;
