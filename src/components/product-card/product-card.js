
import React from "react";
import './product-card.css';
import { Link } from "react-router-dom";
import starGood from './star-good.svg';
import starBad from './star-bad.svg';
import { useParams } from "react-router-dom";

const maxStars = 5;

function getStars(rate) {
    let result = [];
    for (let i = 1; i <= maxStars; i++) {
        if (i <= rate) {
            result.push(<img src={starGood} alt="card-stars" className="category-card-star" />);
        } else {
            result.push(<img src={starBad} alt="card-stars" className="category-card-star" />);
        }
    }
    return result
};


export const CardItem = (props) => {
    let { params } = useParams();
    console.log("params", params)
  
    let discount = props.discount;
 
    return (
        <div className="main__category-inner" key={props.id}>
            <div className="main__category-cards">
                <Link to={`/${props.type}/${props.id}`} key={props.id} className="category-link" data-test-id={`clothes-card-${props.type}`}>
                    <div className="main__category-card">
                        {props.discount ? <div className="category-card-discount">{props.discount} </div> : ""}
                        <img src={`https://training.cleverland.by/shop${props.images[0]?.url}`} alt="card-img" className="category-card-img" key={props.id+1}/>
                        <span className="category-card-title">{props.title}</span>
                        <div className="category-card-info">
                            <span className="category-card-price"> $ {props.discount ? (Math.round((props.price - props.price * (parseInt(discount.match(/\d+/))/100)) * 100) / 100).toFixed(2) : props.price.toFixed(2) }</span>
                            {props.discount ? <span className="category-card-old-price">$ {props.price.toFixed(2)}</span> : ""}
                            {props.rate != null ? <span className="category-card-stars">{getStars(props.rate)}</span> : ""}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}



