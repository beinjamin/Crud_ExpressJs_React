import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <ToastContainer/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/add" component={AddEdit}/>
      <Route exact path="/update/:id" component={AddEdit} />
      <Route exact path="/view/:id" component={View} />
      <Route exact path="/about" component={About} />



    </Switch>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
