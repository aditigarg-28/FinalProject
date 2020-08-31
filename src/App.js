import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Select from 'react-select';
import Comp1 from './Comp1';
import About from './About';
import Contact from './Contact';
import New from './New';
import BookCRUD from './BookCRUD';
import AddBook from './AddBook';
import DeleteBook from './DeleteBook';
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import DropDown from './DropDown';
class App extends React.Component {
  
  render() {
    
    return (
      <React.Fragment>

  <div className="mt-5">
          <New/>

           <BookCRUD/>
          </div>
</React.Fragment>
    );
  }
}
export default App;