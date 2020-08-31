import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck} from "react-bootstrap";
import {useState, useEffect} from 'react';
import "./Book.css";
import StarRatingComponent from './StarRatingComponent';
import Rate from './Rate';
const New = () => {
  const [category,setCategory]=useState("cat1")
  {/*const [bookData,setBookData]=useState([])
  const fetchData=async()=>{
    const res=await fetch("");
    const data=await res.json();
    setBookData(data.data);
   }
   useEffect(()=>{
     fetchData()
   },[])*/}


  const cardInfo = [
    {
      id:`${category}-b1`,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAQldFbywLQbnBBgho5Q8roFArNyJIQrs_3Q&usqp=CAU',
      title: "Lebron Jam",
      author:"Author1",
      text: "GOAT",
      rating: 3,
    },
    {
      id:`${category}-b2`,
      image: "",
      title: "Michael Jordan",
      author:"Author2",
      text: "he is very close to goat",
      rating: 3,
    },
    {   
      id:`${category}-b3`,
      image: "",
      title: "Lebron James",
      author:"Author3",
      text: "THE GOAT",
      rating: 3,
    },
    {
      id:`${category}-b4`,
      image: "",
      title: "Alex Caruso",
      author:"Author4",
      text: "THE TRUE GOAT",
      rating: 3,
    },
    {
      id:`${category}-b5`,
      image: "",
      title: "Steph Curry",
      author:"Author5",
      text: "he good",
      rating: 3,
    },
    {
      id:`${category}-b6`,
      image: "",
      title: "Michael Jordan",
      author:"Author6",
      text: "he is very close to goat",
      rating: 3,
    },
    {
      id:`${category}-b7`,
      image: "",
      title: "Lebron James",
      author:"Author7",
      text: "THE GOAT",
      rating: 3,
    },
    {
      id:`${category}-b8`,
      image: "",
      title: "Alex Caruso",
      author:"Author8",
      text: "THE TRUE GOAT",
      rating: 3,
    },
    {
      id:`${category}-b9`,
      image: "",
      title: "Steph Curry",
      author:"Author9",
      text: "he good",
      rating: 3,
    },
    {
      id:`${category}-b10`,
      image: "",
      title: "Michael Jordan",
      author:"Author10",
      text: "he is very close to goat",
      rating: 3,
    },
    {
      id:`${category}-b11`,
      image: "",
      title: "Lebron James",
      author:"Author11",
      text: "THE GOAT",
      rating: 3,
    },
    {
      id:`${category}-b12`,
      image: "",
      title: "iug7tiuhyiu",
      author:"Author12",
      text: "THE TRUE GOAT",
      rating: 3,
    },
  ];
  
  const handleCategory=e=>{
    const val=e.target.value
    setCategory(val);
    alert(val)
  }

  const mystyle={
      marginLeft:"15px"
  }
  const renderCard = (card, index) => {
    return (
        <div className="col" key={card.id} style={mystyle}>
<Card style={{ width: '18rem' }}  className="flip-card  mb-4 ml-0 mr-0">
  <div className="flip-card-inner">
    <div  className="flip-card-front">
  <Card.Img variant="top" src="holder.js/100px180" src={card.image} height="200px" />
  <Card.Body>
    <Card.Title className="cardA-title">Id={card.id} title={card.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted cardA-subtitle">{card.author}</Card.Subtitle>
    <Card.Text className="cardA-text">

{card.text} 
</Card.Text>
    
   
    </Card.Body>
    </div>
    
   <Card.Body className="flip-card-back col d-flex justify-content-center flex-column">
   <Rate/>
      <button>View Book</button>
   
    </Card.Body>
  </div>
</Card>
</div>
    );
  };
  return (
    <div>
    <select value={category} onChange={handleCategory}>
    <option>Select Category</option>
  <option value="cat1">CATEGORY1</option>
  <option value="cat2">CATEGORY2</option>
  <option value="cat3">CATEGORY3</option>
  <option value="cat4">CATEGORY4</option>
  <option value="cat5">CATEGORY5</option>
  <option value="cat6">CATEGORY6</option>
</select>
  <CardDeck> 
  {cardInfo.map(renderCard)}
  </CardDeck>
  </div>
  );
};


export default New;