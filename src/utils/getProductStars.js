
import starGood from './img/star-good.svg';
import starBad from './img/star-bad.svg';

const maxStars = 5;


 export function getProductStars(number) {
    let result = [];
    for (let i = 1; i <= maxStars; i++) {
        if (i <= number) {
            result.push(<img src={starGood} alt="card-stars" className="category-card-star" />);
        } else {
            result.push(<img src={starBad} alt="card-stars" className="category-card-star" />);
        }
    }
    return result
};
