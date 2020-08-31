import React from "react";
import {useState} from 'react'
function DropDown() {
    const [category,setCategory]=useState("")
    const handleCategory=e=>{
        setCategory(e.target.value)
        alert(e.target.value)
    }
    return (
      <select onChange={handleCategory}>
          <option>Select Category</option>
        <option value="cat1">CATEGORY1</option>
        <option value="cat2">CATEGORY2</option>
        <option value="cat3">CATEGORY3</option>
        <option value="cat4">CATEGORY4</option>
        <option value="cat5">CATEGORY5</option>
        <option value="cat6">CATEGORY6</option>
      </select>
    );
  }
  export default DropDown;