import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  useHistory
} from "react-router-dom"
import logo from "../cards/logo"
import Typography from '@material-ui/core/Typography';


import './card-style.css';

const Card = props =>{
    return(
        <div>
            <h3>logo</h3>
         
        <div className="card test-center shadow">
            <div className="overflow">
                <img src = {props.imgsrc} alt="Image 1" className="cards-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque est voluptatibus quae! Error voluptatem optio, quae cupiditate architecto omnis.
                </p>
                <a href ='#' className='btn btn-outline-success'>{props.goto}</a>
            </div>
        </div>  
        </div> 
        
    
       


    );

}


export default Card;