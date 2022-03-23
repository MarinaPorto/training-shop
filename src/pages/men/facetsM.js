//  { PRODUCTS } from "../../data/products";
// export const facets = [
//     {
//         id: "facet01",
//         title: "Size",
//         text: [
//             {
//                 id: "size01",
//                 content: "XL",
//             },
//             {
//                 id: "size02",
//                 content: "L",
//             },
//             {
//                 id: "size03",
//                 content: "M",
//             },
//             {
//                 id: "size04",
//                 content: "S",
//             },
//             {
//                 id: "size05",
//                 content: "Xs",
//             }
//         ]

//     },
//     {
//         id: "facet02",
//         title: "Brand",
//         text: [
//             {
//                 id: "brand01",
//                 content: "Ck",
//             },
//             {
//                 id: "brand02",
//                 content: "H&M",
//             },
//             {
//                 id: "brand03",
//                 content: "Kalles",
//             },
//             {
//                 id: "brand04",
//                 content: "Levi's",
//             },
//             {
//                 id: "brand05",
//                 content: "Monki",
//             },
//             {
//                 id: "brand06",
//                 content: "Nike",
//             }
//         ]
//     },
//     {
//         id: "price03",
//         title: "Price",
//         text: [
//             {
//                 id: "price01",
//                 content: "$1200+",
//             },
//             {
//                 id: "price02",
//                 content: "$600-$1200",
//             },
//             {
//                 id: "price03",
//                 content: "$300-$600",
//             },
//             {
//                 id: "price04",
//                 content: "$150-$300",
//             },
//             {
//                 id: "price05",
//                 content: "$50-$150",
//             },
//             {
//                 id: "price06",
//                 content: "$7-$50",
//             }
//         ]
//     }
// ]


// let menFacetsSize = [];

// PRODUCTS.men.forEach((el) => {
//     el.sizes.forEach((item) => {
//         menFacetsSize.push(item)
//     })

// })

// export const uniqueSizesM = Array.from(new Set(menFacetsSize));

// let menFacetsBrand = [];

// PRODUCTS.men.forEach((el) => {
//     menFacetsBrand.push(el.brand)
// })

// export const uniqueBrandM = Array.from(new Set(menFacetsBrand));


// const menFacetsColors = [];

// PRODUCTS.men.forEach((el) => {
//     el.images.forEach((item) => {
//         menFacetsColors.push(item.color)
//     })

// })

// export const uniqueColorsM = Array.from(new Set(menFacetsColors));

// export const rangePrice = ["$1200+","$600-$1200", "$300-$600", "$150-$300", "$50-$150","$7-$50"];

// let womenFacetsSize = [];

// PRODUCTS.women.forEach((el) => {
//     el.sizes.forEach((item) => {
//         womenFacetsSize.push(item)
//     })

// })

// export const uniqueSizes = Array.from(new Set(womenFacetsSize));

// let womenFacetsBrand = [];

// PRODUCTS.women.forEach((el) => {
//     womenFacetsBrand.push(el.brand)
// })

// export const uniqueBrand = Array.from(new Set(womenFacetsBrand));


// const womenFacetsColors = [];

// PRODUCTS.women.forEach((el) => {
//     el.images.forEach((item) => {
//         womenFacetsColors.push(item.color)
//     })

// })

// export const uniqueColors = Array.from(new Set(womenFacetsColors));
