import './burger-button.css';
import { useRef, useState } from "react";
import classNames from "classnames";
import { MobileNavigation } from "../mobile-navigation/mobile-navigation";

export const BurgerBtn = () => {
   let [isMenuOpen, setOpen] = useState(false);
    const refBtn = useRef();

    // const closeMobileMenu = () => setOpen(false);

 function toggleMenu () {
     console.log("Нажал кнопку - toggleMenu")
      setOpen(!isMenuOpen)      
            
 }

    return (
        <>

            <div className="mob__nav"   ref={refBtn} onClick={toggleMenu}
            >  
                <div className={classNames("burger__menu-icon", { _active: isMenuOpen })} >
                    <span></span>
                </div>
            </div>
            {<MobileNavigation   open={isMenuOpen}  setOpen={setOpen} toggleMenu={toggleMenu} refBtn={refBtn}/>}
            
        </>
    )
}