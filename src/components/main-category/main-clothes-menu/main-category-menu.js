
import { categoryMenu } from "./category-menu"

export const CategoryMenu = (props) => {

    return (
        <ul className="category-inner-nav-list">
            {categoryMenu.map((element) => {
                return (
                    <div key={element.id} className="category-inner-nav-link" onClick={() => props.changeParticular(element.particularName)} data-test-id={`clothes-${props.productType}-${element.particularName}`}>
                        <li className="category-inner-nav-item" >{element.nameItem}</li>
                    </div>

                )
            })}
        </ul>
    )
}