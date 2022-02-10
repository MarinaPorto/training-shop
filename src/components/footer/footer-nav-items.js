
import React from "react";
import phoneFooter from '../../img/footer/phone-footer.svg';
import locationFooter from '../../img/footer/location-marker-footer.svg';
import clockFooter from '../../img/footer/clock-footer.svg';
import emailIconFooter from '../../img/footer/mail.svg';

export const footerNavItems = [
    {
        id: "f1",
        title: "Categories",
        items: [{
            id: "f11",
            nameItem: "Men",
            path: "men",
            picture: ""
        },
        {
            id: "f12",
            nameItem: "Women",
            path: "women",
            picture: ""
        },
        {
            id: "f13",
            nameItem: "Accessories",
            path: "accessories",
            picture: ""
        },
        {
            id: "f14",
            nameItem: "Beauty",
            path: "beauty",
            picture: ""

        }
        ]
    },
    {
        id: "f2",
        title: "Infomation",
        items: [{
            id: "f21",
            nameItem: "About Us",
            path: "about",
            picture: ""
        },
        {
            id: "f22",
            nameItem: "Contact Us",
            path: "contact",
            picture: ""
        },
        {
            id: "f23",
            nameItem: "Blog",
            path: "blog",
            picture: ""
        },
        {
            id: "f24",
            nameItem: "FAQs",
            path: "faqs",
            picture: ""

        }
        ]
    },
    {
        id: "f3",
        title: "Useful links",
        items: [{
            id: "f31",
            nameItem: "Terms & Conditions",
            path: "terms-conditions",
            picture: ""
        },
        {
            id: "f32",
            nameItem: "Returns & Exchanges",
            path: "returns-exchanges",
            picture: ""
        },
        {
            id: "f33",
            nameItem: "Shipping & Delivery",
            path: "shipping-delivery",
            picture: ""
        },
        {
            id: "f24",
            nameItem: "Privacy Policy",
            path: "privacy-policy",
            picture: ""

        }
        ]
    },
    {
        id: "f4",
        title: "CONTACT US",
        items: [{
            id: "f41",
            nameItem: "Belarus, Gomel, Lange 17",
            path: "adress",
            picture: locationFooter
        },
        {
            id: "f42",
            nameItem: "+375 29 100 20 30",
            path: "tel",
            picture: phoneFooter
        },
        {
            id: "f43",
            nameItem: "All week 24/7",
            path: "time",
            picture: clockFooter
        },
        {
            id: "f44",
            nameItem: "info@clevertec.ru",
            path: "email",
            picture: emailIconFooter

        }
        ]
    },

]



