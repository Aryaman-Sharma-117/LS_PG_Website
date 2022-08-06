import React, {useState} from 'react'
import database from './data';
import './ReviewCard.css'

export default function ReviewCard(props) {
    const [count,setcount]=useState(0)
    const Next = ()=>{
        let newcount=(count+1)%3;
        setcount(newcount);
    }

    return(
        <div className="card" width="50%">
            <img src={database[count].url} class="card-img-top center" alt="..."></img>
        <div className="card-body">
          <p className="card-text">{database[count].content}</p>
          <p className="card-text"><strong>{database[count].by}</strong></p>
          <button type="button" class="btn btn-dark" onClick={Next}>Next</button>
        </div>
      </div>
    )
}