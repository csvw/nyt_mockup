import React, { Component } from 'react';
// import a1 from './images/a1.jpg';


export interface OpinionCardProps {
    img: string | undefined;
    author: string;
    title: string;
}



export class OpinionCard extends Component<OpinionCardProps, {}> {
    render() {
        let image;
        if (this.props.img !== undefined) {
            image = <img className="authorImage" src={this.props.img} alt={this.props.title} />
        } else {
            image = <div style={{display: "none"}}/>
        }

        return  (
        <div className="opinionCardContainer">
            {image}
            <p className="authorName">{this.props.author}</p>
            <p className="opinionTitle">{this.props.title}</p>
            <div className="opinionDivider"/>
        </div>
        );
    }
}