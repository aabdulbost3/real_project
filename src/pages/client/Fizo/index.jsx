import { NavLink } from "react-router-dom"
import "./fizo.css"
// import "./fizo.scss"
// import Lottie from "lottie-react";
// import puls from "../../../assets/client/puls.json";
 
function Fizo() {
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    return (
        <>
            <ul className="fizo_ul">
                <li className="fizo_li">

                    <div data-aos="flip-up">
                        <div className="fizo_div">
                            <NavLink to={"/fizo1"}>
                                <div>
                                   
                                    <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </li>

                <li className="fizo_li">
                    <div className="fizo_div">

                        <NavLink to={"/fizo2"}>
                        <a href="#" id="fli" className="btn-flip" data-back="Ingalatsiya loremm" data-front="Ingalatsiya"></a>
                        {/* <Lottie animationData={puls} /> */}
                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">

                        <NavLink to={"/fizo3"}>
                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo4"}>

                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>                            
                    </div>
                </li>
            </ul>
            <ul className="fizo_ul">
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo5"}>
                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo6"}>
                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo7"}>
                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>
                    </div></li>
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo8"}>
                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>
                    </div>
                </li>
            </ul> <ul className="fizo_ul">
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo9"}>
                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo10"}>
                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo11"}>
                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo12"}>
                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>
                    </div>
                </li>
            </ul>
            <ul className="fizo_ul">
                <li className="fizo_li"> <div className="fizo_div">
                    <NavLink to={"/fizo13"}>
                    <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                    </NavLink>
                </div></li>
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo14"}>
                        <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>

                        </NavLink>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Fizo