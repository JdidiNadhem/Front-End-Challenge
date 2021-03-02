import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import {Switch, Route} from "react-router-dom";
import DrinkList from "./Component/DrinkList/DrinkList";
import Error from "./Component/Error/Error";
import DrinkDescription from "./Component/DrinkDescription/DrinkDescription";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={DrinkList} />
        <Route path="/DrinkDescription/:id" component={DrinkDescription} />
        <Route path="/AboutUs" component={About} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
