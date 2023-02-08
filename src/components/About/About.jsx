import React from "react";
import { ModalDiv } from "../Generalstyles";
import { Appslist, DivAbout } from "./Aboutstyles";
export default class About extends React.Component {

    render() {
        return (
            <ModalDiv>
                <h2>Cristian Massa</h2>
                <h3>Cohorte: 11a</h3>
                <p>Estudiante de desarrollo FullStack en Henry.</p>
                <Appslist>
                    <li><img src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" alt="html" width='150px' /></li>
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/250px-CSS3_logo.svg.png" alt="css" width='150px' /></li>
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="js" width='150px'/></li>
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" width='150px' /></li>
                </Appslist>
            </ModalDiv>
        )
    }
}