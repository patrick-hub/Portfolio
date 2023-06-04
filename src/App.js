import "./App.css";
import NavBar from "./component/NavBar";
import {Banner} from "./component/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Technologies } from "./component/Technologies";
import { Projects } from "./component/Projects";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";


function App() {
	return <div className="App">
  <NavBar/>
 <Banner />
 <Technologies />
 <Projects />
 <Contact />
 <Footer />
  </div>;
}

export default App;
