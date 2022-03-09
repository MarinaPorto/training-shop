
import React, { useState } from "react";
import './main-category.css';
import { Link } from "react-router-dom";
import { CardItem } from "../product-card";
import { CategoryMenu } from "./main-clothes-menu/main-category-menu";


export const MainCategory = (props) => {
    let [particular, setParticular] = useState('isNewArrivals');

    return (
        <div className="main__category">
            <div className="container">
                <div className=" clothes main__category-inner" >
                    <div className="main__category-inner-nav">
                        <Link key={props.type} to={`/${props.type}`} className="menu-item" data-test-id={`menu-link-${props.type}`} onClick={() => props.toggleMenuMode()}>
                            <span className="category-title">{props.products.length === 10 ? "women's" : "men's"}</span>
                        </Link>
                        <CategoryMenu changeParticular={particular => setParticular(particular)} productType={props.type} />
                    </div>
                    <div className="main__category-cards">
                        {props.products.map((el) => {
                            if (el.particulars[particular]) {
                                return <CardItem id={el.id}
                                    type={el.category}
                                    images={el.images}
                                    title={el.name}
                                    price={el.price}
                                    oldPrice={el.oldPrice}
                                    rate={el.rating}
                                    path={el.id}
                                    discount={el.discount}
                                    key={el.id}
                                />
                            }
                            return ""
                        }
                        )}
                    </div>
                    <div className="main__category-more">
                        <span className="main__category-text">see all</span>
                    </div>
                </div>
            </div>
        </div>
    )
}