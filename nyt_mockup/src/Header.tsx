import { faArrowUp, faBars, faCaretDown, faCloudRain, faOm, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import knowledge from './images/knowledge_thumbnail.jpg';
import syringe from './images/syringe_thumbnail.jpg';
import us from './images/us_thumbnail.jpg';

let topics: string[] = [
    "World", "U.S.", "Politics", "N.Y.", "Business", "Opinion", "Tech", "Science", "Health", "Sports" , "Arts", "Books", "Style", "Food", "Travel", "Magazine", "T Magazine", "Real Estate", "Video"
]

export class Header extends Component<{}, {}> {
    render() {
        return  (
        <div className="header">
            <div className="userOptions">
                <div className="userOptionsWest">
                    <FontAwesomeIcon icon={faBars}/>
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
                <div className="userOptionsCenter">
                    <p className="languageOption"><b>U.S.</b></p>
                    <p className="languageOption">International</p>
                    <p className="languageOption">Canada</p>
                    <p className="languageOption">Español</p>
                    <p className="languageOption">中文</p>
                </div>
                <div className="userOptionsEast">
                    <div className="playCrossword">PLAY THE CROSSWORD</div>
                    <div className="accountOption">
                        Account <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
            </div>
            <div className="mainHeader">
                <div className="mainHeaderWest">
                    <p className="dateHeading">{(new Date()).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="dateSubscript smallfont">Today's Paper</p>
                </div>
                <div className="mainHeaderCenter">
                    The New York Record
                </div>
                <div className="mainHeaderEast">
                    <div className="weather">
                        <FontAwesomeIcon icon={faCloudRain} />
                        <b className="currentTemp">47°F</b>
                        <p className="highTemp">48°</p>
                        <p className="lowTemp">44°</p>
                    </div>
                    <div className="stocks">
                        <div className="dow">
                            <div className="stockName">Dow</div>
                            <div className="risingFast">+42.0% <FontAwesomeIcon icon={faArrowUp}/></div>
                        </div>
                        <div className="nasdaq">
                            <div className="stockName">Nasdaq</div>
                            <div className="risingFast">+360.1% <FontAwesomeIcon icon={faArrowUp}/></div>
                        </div>
                        <div className="sp">
                            <div className="stockName">S&amp;P 500</div>
                            <div className="risingFast">+1,138.9% <FontAwesomeIcon icon={faArrowUp}/></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="lightHr"/>
            <div className="topicsBar">
                {topics.map(
                    (topic) => <p className="topic smallfont">{topic}</p>
                )}
            </div>
            <hr className="darkHr"/>
            <div className="featuredItems">
                <div className="bookReview featuredItem">
                    <img className="thumbnail" src={knowledge} alt="Book Review Icon" />
                    <div className="featureDescription">
                        <p className="featureTitle">The Book Review Radio Show</p>
                        <p className="featureText">Robert H. Van Wagoner discusses his latest book.</p>
                    </div>
                </div>
                <div className="dailyHighlights featuredItem">
                    <img className="thumbnail" src={syringe} alt="Daily Highlights Icon" />
                    <div className="featureDescription">
                        <p className="featureTitle">Listen to 'Daily Highlights'</p>
                        <p className="featureText">America begins coronavirus vaccinations.</p>
                    </div>
                </div>
                <div className="influcencers featuredItem">
                    <img className="thumbnail" src={us} alt="Influence Icon" />
                    <div className="featureDescription">
                        <p className="featureTitle">Listen to 'Influence'</p>
                        <p className="featureText">Mitch McConnell acknowledges Biden's victory.</p>
                    </div>
                </div>
            </div>
            {/* <hr className="doubleHr"/> */}
        </div>
        );
    }
}