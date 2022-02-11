
import React from "react";
import './product-card.css';
import { Link } from "react-router-dom";
import starGood from './star-good.svg';
import starBad from './star-bad.svg';

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
    return (
        
            <div className="main__category-inner" key={props.id}>
                <div className="main__category-cards">
                    <Link to={`/${props.path}`} key={props.id} className="category-link">
                        <div className="main__category-card">
                            {props.discount ? <div className="category-card-discount">-{props.discount}% </div> : ""}
                            <img src={props.img} alt="card-img" className="category-card-img" />
                            <span className="category-card-title">{props.title}</span>
                            <div className="category-card-info">
                                <span className="category-card-price">$ {props.price}</span>
                                {props.oldPrice ? <span className="category-card-old-price">$ {props.oldPrice}</span> : ""}
                                {props.rate != null ? <span className="category-card-stars">{getStars(props.rate)}</span> : ""}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        
    )
}



