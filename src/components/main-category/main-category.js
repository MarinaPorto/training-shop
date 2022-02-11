
import React from "react";
import './main-category.css';
import { Link } from "react-router-dom";
import { mainPageCategories } from "./category-list"
import { CardItem } from "../product-card";


export const MainCategory = () => {
    return (
        <div className="main__category">
            <div className="container">
                {mainPageCategories.map((el) => {
                    return (
                        <div className=" clothes main__category-inner" data-test-id={`clothes-${el.types}`} key={el.id}>
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
                                {el.cards.map((el) => (
                                    <CardItem id={el.id}
                                        img={el.img}
                                        title={el.title}
                                        price={el.price}
                                        oldPrice={el.oldPrice}
                                        rate={el.rate}
                                        path={el.path}
                                        discount={el.discount}
                                    />
                                ))}
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