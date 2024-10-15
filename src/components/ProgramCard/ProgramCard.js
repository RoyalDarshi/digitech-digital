// ProgramCard.js
import React from 'react';
import './ProgramCard.css';
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const ProgramCard = ({ category,index, title, backgroundImage }) => {
    return (
        <Link to={`/${index}`}>
            <div className="program-card" style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className="program-card-content">
                    <span className="program-card-category">{category}</span>
                    <h3 className="program-card-title">{title}</h3>
                    <Link to={"/"+index} className="program-card-link">Know More &rarr;</Link>
                </div>
            </div>
        </Link>
    );
};

export default ProgramCard;
