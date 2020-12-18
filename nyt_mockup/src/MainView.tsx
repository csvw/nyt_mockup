import React, { Component } from 'react';
import { Header } from './Header';
import { MainHeadline } from './MainHeadline';
import { SecondHeadline } from './SecondHeadline';
import { MainContent } from './MainContent';

export class MainView extends Component<{}, {}> {
    render() {
        return  (
        <div className="main">
            <Header/>
            <MainContent/>
        </div>
        );
    }
}