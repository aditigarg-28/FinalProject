import React from "react";
import './Add.css';

class DeleteBook extends React.Component{
  constructor(props)
  {
  super(props)
  this.state={
      category:"",
      title:"",
  }
  }
  handleCategoryChange=(event) => {
    this.setState({
        category: event.target.value
    })
}
handleTitleChange=(event)=>{
    this.setState({
        title: event.target.value
    })
}
handleSubmit=(event)=>{
  alert(`${this.state.category} ${this.state.title}`)
  event.preventDefault()
}
    render(){
  return (
    <div className="container" >
    <h2>Delete Book</h2><br></br>
    <form onSubmit={this.handleSubmit}>
    <div className="row pt-5 mx-auto add-book d-flex row" >
         <div className="col-8 form-group mx-auto add-book-input">
      <input  type="text" placeholder="Category" name="category" value={this.state.category} onChange={this.handleCategoryChange} required/>
      </div>
      <div className="col-8 form-group mx-auto add-book-input">
      <input  type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleTitleChange} required/>
      </div>
      <div className="col-8 pt-3 mx-auto">
      <button type="submit" className="delete">Delete</button>
      </div>
      </div>
    </form>
    </div>
  );

  }
}
export default DeleteBook;