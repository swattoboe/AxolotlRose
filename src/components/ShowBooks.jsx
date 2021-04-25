import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowBooks = (props)=>{

    const handleLibraryClick = () =>{
        axios.post('/ourserverendpoint', {'title': props.title, 'author':props.author, 'imgLink': props.imgLink, 'ISBN':props.id})
    }

    const handleWishClick = () =>{
        axios.post('/ourserverendpoint', {'title': props.title, 'author':props.author, 'imgLink': props.imgLink, 'ISBN':props.id})
    }

    return(

        <div id='bookComponent'>
            <h3>{props.title}</h3>
            <img src={props.imgLink}/>
            <h4>{props.author}</h4>
            <button id='addLibrary' onClick = {handleLibraryClick}>I own this!</button>
            <button id='addWishlist' onClick = {handleWishClick}>I want this!</button>
        </div>

    )

}


export default ShowBooks;