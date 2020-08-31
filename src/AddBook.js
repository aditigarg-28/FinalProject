import React from "react";
import './Add.css';

class AddBook extends React.Component{
  constructor(props)
  {
  super(props)
  this.state={
      category:"",
      title:"",
      author:"",
      description:"",
      image:"",
      textFile:"",
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
handleAuthorChange=(event)=>{
    this.setState({
        author: event.target.value
    })  
  }
  handleDescriptionChange=(event) => {
    this.setState({
        description: event.target.value
    })
}
handleImageChange=(event)=>{
    this.setState({
       image: event.target.value
    })
}
handleTextFileChange=(event)=>{
    this.setState({
        textFile: event.target.value
    })  
  }
  handleSubmit=(event)=>{
    alert(`${this.state.category} ${this.state.title} ${this.state.author} ${this.state.description} ${this.state.image} ${this.state.textFile}`)
    event.preventDefault()
}

   render(){
       return (
    <div className="container" >
    <h2>Add Book</h2><br></br>
    <form onSubmit={this.handleSubmit}>
    <div className="row pt-5 mx-auto add-book d-flex row" >
         <div className="col-8 form-group mx-auto add-book-input">
      <input  type="text" placeholder="Category" name="category" value={this.state.category} onChange={this.handleCategoryChange} required/>
      </div>
      <div className="col-8 form-group mx-auto add-book-input">
      <input  type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleTitleChange} required/>
      </div>
      <div className="col-8 form-group mx-auto add-book-input">
      <input type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.handleAuthorChange} required/>
      </div>
      <div className="col-8 form-group mx-auto add-book-textarea">
      <textarea type="text" cols="25" rows="5" placeholder="Desciption" name="description" value={this.state.description} onChange={this.handleDescriptionChange} required/>
      </div>
      <div className="col-8 form-group mx-auto add-book-select d-flex column">
      <label className="lbl">Image</label><input type="file" class="select" name="picture" accept=".png,.jpg,.jpeg" value={this.state.image} onChange={this.handleImageChange} required/>
      </div> 
      <div className="col-8 form-group mx-auto add-book-select d-flex column">
      <label className="lbl">TextFile</label><input type="file" class="select" name="text" accept=".txt,.docx,.pdf" value={this.state.textFile} onChange={this.handleTextFileChange} required/>
      </div>
      <div className="col-8 pt-3 mx-auto">
      <button type="submit" className="add">Save</button>
      </div>
      </div>
    </form>
    </div>
  );
       }

}
export default AddBook;