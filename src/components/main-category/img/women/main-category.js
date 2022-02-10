
import React from "react";
import './main-category.css';
import { Link } from "react-router-dom";
import { mainPageCategories } from "../../category-list";
import starGood from '../star-good.svg';
import starBad from '../star-bad.svg';

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


export const MainCategory = () => {
    return (
        <div className="main__category">
            <div className="container">
                {mainPageCategories.map((el) => {
                    return (
                        <div className="main__category-inner" key={el.id}>
                            <div className="main__category-inner-nav">
                                <span className="category-title">{el.title}</span>
                                <ul className="category-inner-nav-list">
                                    {el.menu.map((element) => {
                                        return (
                                            <Link to={`/${element.path}`} key={element.id} className="category-inner-nav-link">
                                                <li className="category-inner-nav-item">{element.nameItem}</li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="main__category-cards">
                                {el.cards.map((elem) => {
                                    return (
                                        <Link to={`/${elem.path}`} key={elem.id} className="category-link">
                                        <div className="main__category-card">
                                            {elem.discount ? <div className="category-card-discount">-{elem.discount}% </div> : ""}
                                            <img src={elem.img} alt="card-img" className="category-card-img" />
                                            <span className="category-card-title">{elem.title}</span>
                                            <div className="category-card-info">
                                                <span className="category-card-price">$ {elem.price}</span>
                                                {elem.oldPrice ? <span className="category-card-old-price">$ {elem.oldPrice}</span> : ""}
                                                {elem.rate != null ? <span className="category-card-stars">{getStars(elem.rate)}</span> : ""}
                                            </div>
                                        </div>
                                         </Link>
                                    )
                                })}
                            </div>
                            <div className="main__category-more">
                                <span className="main__category-text">see all</span> 
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}