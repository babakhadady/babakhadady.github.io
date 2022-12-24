import Visible from "../../hooks/Visible";
import { useRef } from "react";
import "./style.css";

const Header3 = ({ children, offset, offsetY }) => {
    const ref = useRef();
    const shouldShow = Visible(offset);

    return (
        <h3 ref={ref} className={shouldShow ? 'visible' : 'notvisible'}
            style={{
                transform: `translateY(-${offsetY * .8}px`,
                opacity: `${-1 + .01 * offsetY}`
            }}>
            {children}
        </h3>
    )
}

export default Header3