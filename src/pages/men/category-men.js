import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import './category-men.css';
import arrow from './img/arrow.svg';
import share from './img/share.svg';
import adjustments from './img/adjustments.svg';
import viewLlist from './img/view-list.svg';
import viewGrid from './img/view-grid.svg';
import { CardItem } from "../../components/product-card";
import { cardDataMen } from "../../components/product-card/product-card-data";
import { useState } from "react";
import { useRef } from "react";

export const MenCategoryPage = (props) => {

    const PRODUCTS = props.products;

    let menFacetsSize = [];

    PRODUCTS.men.forEach((el) => {
        el.sizes.forEach((item) => {
            menFacetsSize.push(item)
        })

    })

    const uniqueSizesM = Array.from(new Set(menFacetsSize));

    let menFacetsBrand = [];

    PRODUCTS.men.forEach((el) => {
        menFacetsBrand.push(el.brand)
    })

    const uniqueBrandM = Array.from(new Set(menFacetsBrand));


    const menFacetsColors = [];

    PRODUCTS.men.forEach((el) => {
        el.images.forEach((item) => {
            menFacetsColors.push(item.color)
        })

    })

    const uniqueColorsM = Array.from(new Set(menFacetsColors));

    const rangePrice = ["$1200+", "$600-$1200", "$300-$600", "$150-$300", "$50-$150", "$7-$50"];


    let [filters, setFilters] = useState({})
    let [selectedFilterColor, setselectedFilterColor] = useState([]);

    function getFilterColors(el) {
        if (el.target.checked) {
            setselectedFilterColor([...selectedFilterColor, el.target.labels[0].innerText])
            setFilters(selectedFilterColor)
        } else {
            setselectedFilterColor(selectedFilterColor.filter(word => word !== el.target.labels[0].innerText));
        }
    }

    let [selectedFilterSize, setselectedFilterSize] = useState([]);

    function getFilterSize(el) {

        if (el.target.checked) {
            setselectedFilterSize([...selectedFilterSize, el.target.labels[0].innerText])
            setFilters(selectedFilterSize)
        } else {
            setselectedFilterSize(selectedFilterSize.filter(word => word !== el.target.labels[0].innerText));

        }
    }

    let [selectedFilterBrand, setselectedFilterBrand] = useState([]);

    function getFilterBrand(el) {
        if (el.target.checked) {
            setselectedFilterBrand([...selectedFilterBrand, el.target.labels[0].innerText])
            setFilters(selectedFilterBrand)

        } else {
            setselectedFilterBrand(selectedFilterBrand.filter(word => word !== el.target.labels[0].innerText));
        }
    }

    let [selectedFilterPrice, setselectedFilterPrice] = useState([]);

    function getFilterPrice(el) {

        if (el.target.checked) {
            setselectedFilterPrice([...selectedFilterPrice, el.target.labels[0].innerText])
            setFilters(selectedFilterPrice)

        } else {
            setselectedFilterPrice(selectedFilterPrice.filter(word => word !== el.target.labels[0].innerText));
        }
    }

    filters = {
        color: selectedFilterColor,
        size: selectedFilterSize,
        brand: selectedFilterBrand,
        price: selectedFilterPrice,
    };

    function facetFilter(elem) {

        for (let key in filters) {
            if (filters[key].length > 0) {
                switch (key) {
                    case "color":
                        if (!elem.images.some(el => filters.color.includes(el.color))) {
                            return false;
                        }
                        break;
                    case "size":
                        if (!elem.sizes.some(el => filters.size.includes(el))) {
                            return false;
                        }
                        break;
                    case "brand":
                        if (!filters.brand.includes(elem.brand)) {
                            return false;
                        }
                        break;
                    case "price":
                        if (!checkPrice(elem)) {

                            return false;
                        }
                        break;
                    default:
                        console.log("No such facet value");
                }
            }
        }
        return true
    }

    function checkPrice(elem) {
        for (let priceFilter of filters.price) {
            switch (priceFilter) {
                case "$1200+":
                    if (elem.price > 1200) {
                        return true;
                    }
                    break;
                case "$600-$1200":
                    if (elem.price >= 600 && elem.price <= 1200) {
                        return true;
                    }
                    break;
                case "$300-$600":
                    if (elem.price >= 300 && elem.price <= 600) {
                        return true;
                    }
                    break;
                case "$150-$300":
                    if (elem.price >= 150 && elem.price <= 300) {
                        return true;
                    }
                    break;
                case "$50-$150":
                    if (elem.price >= 50 && elem.price <= 150) {
                        return true;
                    }
                    break;
                case "$7-$50":
                    if (elem.price >= 7 && elem.price <= 50) {
                        return true;
                    }
                    break
                default:
                    console.log("No such price");
            }
        }
        return false;
    }

    let productsMenArray = props.products.men.filter(elem => facetFilter(elem))
    let facetProductsCount = productsMenArray.length
    let selectedKeys = Object.keys(filters).filter(el => filters[el].length > 0);
    const filterBtn = useRef();
    const filterBlock = useRef();

    function openFilter() {
        setCheckOpenedFilter(!checkOpenedFilter)
    }

    let [checkOpenedFilter, setCheckOpenedFilter] = useState(false);

    return (
        <section className="products-page category__page-inner" data-test-id={`products-page-${cardDataMen.type}`}>
            <div className="category-page-title">
                <div className="container">
                    <div className="bread-crumbs-block">
                        <Link key={'main'} to={`/`} className="bread-crumbs-link">
                            <span className="bread-crumbs">Home </span>
                        </Link>
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
                    <div className="filter" ref={filterBtn} onClick={openFilter} data-test-id='filter-button'>
                        <img src={adjustments} alt="filter" className="filter-img" />
                        <span className="filter-text">Filter</span>
                    </div>
                    <div className="view-list">
                        <img src={viewLlist} alt="view-list-icon" className="view-list-icon" />
                        <img src={viewGrid} alt="filter" />
                    </div>
                </div>
                <div className={classNames("filter_closed", { filter_opened: checkOpenedFilter })} ref={filterBlock} data-test-id={`filters-men`}>
                    <div className="filter-color-inner">
                        <div className="filter-color-block">
                            <h4 className="facet-title">Color</h4>
                            <ul className="filter-color facet-item-scroll" data-test-id='filters-color'>
                                {uniqueColorsM.map((el, index) => {
                                    return (
                                        <li className="facet-block"  key={index}>
                                            <input type="checkbox" id={index + "cm"} name={index} className="facet-chackbox" onChange={getFilterColors} data-test-id={`filter-color-${el}`} />
                                            <label htmlFor={index + "cm"} className="facet-name">{el}</label>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="facet-item" >
                        <h4 className="facet-title">Size</h4>
                        <ul className="facet-block-wpapper filter-color" data-test-id='filters-size'>
                            {uniqueSizesM.map((el, index) => {
                                return (
                                    <li className="facet-block"  key={index}>
                                        <input type="checkbox" id={index + "sm"} name={index} className="facet-chackbox" onChange={getFilterSize} data-test-id={`filter-size-${el}`} />
                                        <label htmlFor={index + "sm"} className="facet-name">{el}</label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="facet-item facet-item-scroll" >
                        <h4 className="facet-title">Brand</h4>
                        <ul className="facet-block-wpapper filter-color" data-test-id='filters-brand'>
                            {uniqueBrandM.map((el, index) => {
                                return (
                                    <li className="facet-block"  key={index}>
                                        <input type="checkbox" id={index + "bm"} name={index} className="facet-chackbox" onChange={getFilterBrand} data-test-id={`filter-brand-${el}`} />
                                        <label htmlFor={index + "bm"} className="facet-name">{el}</label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="facet-item" >
                        <h4 className="facet-title">Price</h4>
                        <ul className="facet-block-wpapper filter-color" data-test-id='filters-price'>
                            {rangePrice.map((el, index) => {
                                return (
                                    <li className="facet-block" key={index}>
                                        <input type="checkbox" id={index + "pm"} name={index} className="facet-chackbox" onChange={getFilterPrice} data-test-id={`filter-price-${el}`} />
                                        <label htmlFor={index + "pm"} className="facet-name">{el}</label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="selected-filters">
                    <div className="founded-items">
                        {selectedKeys.length > 0 ? facetProductsCount + " item Found" : ""}
                    </div>
                    {selectedKeys.map(key => (
                        <div key={key} className="checked-filters">
                            {filters[key].map((el) => {
                                return (
                                    <p className="name-key-value">{key + ": " + el + " "}</p>
                                )
                            })}
                        </div>
                    ))}
                </div>
                <div className="main__category-cards">
                    {productsMenArray.map((el, index) => (
                        <CardItem id={el.id}
                            key={index}
                            type="men"
                            images={el.images}
                            title={el.name}
                            price={el.price}
                            oldPrice={el.oldPrice}
                            rate={el.rating}
                            path={el.id}
                            discount={el.discount}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
