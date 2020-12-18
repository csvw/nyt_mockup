import React, { Component } from 'react';
import { Header } from './Header';
import { MainContent } from './MainContent';

export interface StoryProps {
    img: string;
    alt: string;
    title: string;
    title2: string;
    title3: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

export class BigStory extends Component<StoryProps, {}> {
    render() {
        return  (
        <div className="bigStoryContainer">
            <div className="bigStoryTextContainer">
                <p className="bigStoryTitle">{this.props.title}</p>
                <ul className="bigStoryBulletList">
                    <li className="bigStoryText">{this.props.text1}</li>
                    <li className="bigStoryText">{this.props.text2}</li>
                </ul>
                <div className='bigStoryTextDivider'></div>
                <p className='bigStoryTitle'>{this.props.title2}</p>
                <p className='bigStoryText'>{this.props.text3}</p>
            </div>
            <div className='bigStoryDivider'></div>
            <div className='imageContainer'>
                <img className='bigStoryImage' src={this.props.img} alt={this.props.alt}/>
                <p className='bigStorySubtitle'>{this.props.title3}</p>
                <p className='bigStoryText'>{this.props.text4}</p>
            </div>
        </div>
        );
    }
}