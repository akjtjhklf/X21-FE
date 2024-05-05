import React from "react";
import Ranking from "../../components/homepage/ranking";
import ChooseSubject from "../../components/homepage/chooseSubject.js";

import "./style.css"

const HomePage = () => {

    return (
        <div className="row homepage-main">
            <Ranking/>
            <ChooseSubject/>
        </div>
    )
}

export default HomePage;