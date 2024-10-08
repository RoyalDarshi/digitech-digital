import React from 'react';
import "./NewsSection.css"

const NewsHeader = () => {
    return (
        <div className="news-header">
            <h1>Digitech Digital in News</h1>
            <div className="logos">
                <div><img src="https://digiperform.com/wp-content/uploads/2022/02/t2.png" alt="News Channel 1"/></div>
                <div><img src="https://digiperform.com/wp-content/uploads/2022/02/t1.png" alt="News Channel 2"/></div>
                <div><img src="https://digiperform.com/wp-content/uploads/2022/02/t4.png" alt="News Channel 3"/></div>
                <div><img src="https://digiperform.com/wp-content/uploads/2022/02/t3.png" alt="News Channel 4"/></div>
            </div>
        </div>
    );
};

export default NewsHeader;
