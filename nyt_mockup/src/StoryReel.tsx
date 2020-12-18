import React, { Component } from 'react';

export interface StoryText {
    text1: string;
    text2: string | undefined;
}

export interface ReelProps {
    title: string[];
    text: StoryText[];
}

export class StoryReel extends Component<ReelProps, {}> {
    render() {
        let text;
        if (this.props.text[0].text2 !== undefined) {
            text = <ul>
                <li className='storyReelText'>{this.props.text[0].text1}</li>
                <li className='storyReelText'>{this.props.text[0].text2}</li>
            </ul>
        }
        else {
            text = <p className='storyReelText'>{this.props.text[0].text1}</p>
        }


        return  (
        <div className="storyReelContainer">
            <div className="firstStory">
                <p className='firstStoryTitle'>{this.props.title[0]}</p>
                {text}
            </div>
            <div className='storyReelDivider'></div>
            <div className="secondStoryContainer">
                <p className='secondStoryTitle'>
                    {this.props.title[1]}
                </p>
                <p className='secondStoryText'>
                    {this.props.text[1].text1}
                </p>
            </div>
            <div className='storyReelDivider'></div>
            <div className="secondStoryContainer">
                <p className='secondStoryTitle'>
                    {this.props.title[2]}
                </p>
                <p className='secondStoryText'>
                    {this.props.text[2].text1}
                </p>
            </div>
        </div>
        );
    }
}