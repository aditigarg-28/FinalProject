import React from "react";
import './Add.css';
import AddBook from './AddBook';
import DeleteBook from "./DeleteBook";



class BookCRUD extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
        showDeleteComponent:false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
      this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this); 
    }
  
    _onButtonClick() {
      this.setState({
        showComponent: true,
        showDeleteComponent: false,
      });
    }
    _onDeleteButtonClick() {
        this.setState({
          showDeleteComponent: true,
          showComponent: false,
        });
      }
  
    render() {
      return (
        <div>
          <button onClick={this._onButtonClick} className="addBtn">Add</button>
          {this.state.showComponent ?
             <AddBook /> :
             null
          }
           <button onClick={this._onDeleteButtonClick} className="deleteBtn">Delete</button>
          {this.state.showDeleteComponent ?
             <DeleteBook /> :
             null
          }
        </div>
      );
    }
  }




export default BookCRUD;