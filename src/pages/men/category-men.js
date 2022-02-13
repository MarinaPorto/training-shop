import React from "react";
import './category-men.css';
import arrow from './img/arrow.svg';
import share from './img/share.svg';
import adjustments from './img/adjustments.svg';
import viewLlist from './img/view-list.svg';
import viewGrid from './img/view-grid.svg';
import chevronRight from './img/chevron-right.svg';
import { colorList } from './color-list';
import { facets } from './facets';
import { CardItem } from "../../components/product-card";
import { cardDataMen } from "../../components/product-card/product-card-data";




export const MenCategoryPage = () => {
    return (
        <div className="products-page category__page-inner" data-test-id={`products-page-${cardDataMen.type}`} >
            <div className="category-page-title">
                <div className="container">
                    <div className="bread-crumbs-block">
                        <span className="bread-crumbs">Home</span>
                        <img src={arrow} alt="arrow-icon" className="bread-crumbs-arrow" />
                        <span className="bread-crumbs-current">Men</span>
                        <div className="share-block">
                            <img src={share} alt="share-icon" />
                            <span className="share-text">Share</span>
                        </div>
                    </div>
                    <h1 className="category-types-title">Men</h1>
                </div>
            </div>
            <div className="container">
                <div className="filter-block">
                    <div className="filter">
                        <img src={adjustments} alt="filter" className="filter-img" />
                        <span className="filter-text">Filter</span>
                    </div>
                    <div className="view-list">
                        <img src={viewLlist} alt="view-list-icon" className="view-list-icon" />
                        <img src={viewGrid} alt="filter" />
                    </div>
                    <div className="bestsellers">
                        <span className="filter-text">BESTSELLERS</span>
                        <img src={chevronRight} alt="filter" className="bestsellers-icon" />
                    </div>
                </div>
                <div className="filter_opened">
                    <div className="filter-color-inner">
                        <div className="filter-color-block">
                            <h4 className="facet-title">Color</h4>

                            <ul className="filter-color">
                                {colorList.map((el) => {
                                    return (
                                        <li className="color-item" key={el.id}>
                                            <span className="color-circle" style={{ backgroundColor: `${el.color}` }}></span>
                                            <span className="color-text">{el.text}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="color-scroll">
                        </div>
                    </div>
                    {facets.map((item) => {
                        return (
                            <div className="facet-item" key={item.id}>
                                <h4 className="facet-title">{item.title}</h4>
                                {item.text.map((element) => {
                                    return (
                                        <span className="facet-block">
                                            <input type="checkbox" id={element.id} name={element.id} className="facet-chackbox" />
                                            <label for={element.id} className="facet-name">{element.content}</label>
                                        </span>
                                    )
                                })}
                            </div>
                        )
                    })}

                </div>
                <div className="main__category-cards">
                    {cardDataMen.cards.map((el) => (
                        <CardItem id="1"
                            type="men"
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
            </div>
        </div>
    )
}
