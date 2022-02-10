import React from "react";
import './main-advantage.css';
import { advantageList } from "./main-advantage-list";




export const MainAdvantage = () => {
    return (
        <div className="main__advantage-block">
            <div className="container">
                <div className="main__advantage-list">
                    {advantageList.map((item) => {
                        return (
                            <div className="main__advantage-item" key={item.id}>
                                <img src={item.img} alt="adventage-icon" className="adventage-icon"/>
                                <div className="adventage-content">
                                    <span className="advantage-title">{item.title}</span>
                                    <p className="advantage-text">{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
           
            </div >
        </div >
    )
}