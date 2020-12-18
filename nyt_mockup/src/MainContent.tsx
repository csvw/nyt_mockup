import React, { Component } from 'react';
import { OpinionCard } from './OpinionCard';
import { BigStory } from './BigStory';
import { StoryReel, ReelProps } from './StoryReel';

import a1 from './images/a1.jpg';
import a2 from './images/a2.jpg';
import a3 from './images/a3.jpg';
import a4 from './images/a4.jpg';
import a5 from './images/a5.jpg';
import a6 from './images/a6.jpg';
import capitol from './images/capitol-cropped.jpg';
import wildfire from './images/fire.jpg';

let storyReelTitles: string[] = [
    'Mike Pence Recieves Vaccine', 'Emperica Approves New Vaccine', 'Coronavirus Cases Broke Records This Week'
]
let storyReelTexts =  [
    {
        text1: '"I feel fine," Mr. Pence said. Speaker Nancy Pelosi also recieved a vaccine today.',
        text2: "President Emmanuel Macron of France tested positive for Covid. Here's the latest.",
    },
    {
        text1: 'The vaccine was found to have an effectiveness of 93%. The vaccine could enter distribution as soon as the first week of January.',
        text2: undefined,
    },
    {
        text1: "It has been another trying week in the U.S. Among nurses and other hospital staff, morale is low. Here's a look at happened.",
        text2: undefined
    }
]

export class MainContent extends Component<{}, {}> {
    render() {
        return  (
        <div className="mainContent">
            <div className="leftColumn">
                <BigStory img={capitol} alt='Capitol Building' title='Congress Negotiates A New Stimulus Package' title2="Progress Stalls As Congress Quarrels Over Fed's Powers" title3='Supreme Court Rejects Texas Lawsuit' text1='The stimulus bill will include support for states and small businesses.' text2='In addition, a one time payment of six hundred dollars shall be rendered to all Americans.' text3="Republicans seek to curb Fed's spending powers. Democrats argue that this could limit the Fed's ability to respond to a financial crisis." text4='The Supreme Court rejected a bid by Texas to have the election results thrown out in four of the states that Trump lost in November.'/>
                <StoryReel title={storyReelTitles} text={storyReelTexts} />
                {/* <BigStory img={wildfire} alt='Wildfire' title='Congress Negotiates A New Stimulus Package' text1='The stimulus bill will include support for the cruise industry and Walmart.' text2='In addition, a one time payment of six pennies shall be rendered to the poor and indigent.'/> */}
                {/* <BigStory img={court} alt='Supreme Court' title='Congress Negotiates A New Stimulus Package' text1='The stimulus bill will include support for the cruise industry and Walmart.' text2='In addition, a one time payment of six pennies shall be rendered to the poor and indigent.'/> */}
            </div>
            <div className='divider'></div>
            <div className="rightColumn">
                <p className="opinion">Opinion</p>
                <div className="mainEditorials">
                    <OpinionCard img={undefined} author="The Editorial Board" title="Millions Of Americans Are At Risk Of Going Hungry. Congress Must Act Now."/>
                </div>
                <div className="subEditorials">
                    <div className="westSubEditorials">
                        <OpinionCard img={a1} author="Sabrina Castillo" title="Those Steel Monoliths? We Found Out Where They're Coming From."/>
                        <OpinionCard img={undefined} author="Jensen Mueller" title="You Can Try To Forget Politics, But Politics Won't Forget You"/>
                        <OpinionCard img={a3} author="Mark Hansen" title="Cancel Culture Can't Read "/>
                        <OpinionCard img={undefined} author="Araki Isamu" title="The QAnon Conspiracy Theory Is Getting Out Of Hand"/>
                        <OpinionCard img={undefined} author="Aamir Ali" title="Facebook Is A Threat To Democracy"/>
                    </div>
                    <div className="divider"></div>
                    <div className="eastSubEditorials">
                        <OpinionCard img={a2} author="Angela Murphy" title="America Has A Long Road Ahead"/>
                        <OpinionCard img={undefined} author="Alexis Brown" title="This Winter Is Going To Be Devestating"/>
                        <OpinionCard img={a6} author="Mary Wright" title="Russia's Recent Cyberattack Demands A Response. We Must Invest In Cyber Defense."/>
                        <OpinionCard img={a5} author="James A. Williams" title="Biden May Have Won The Election, But Did He Save The Nation?"/>
                        <OpinionCard img={a4} author="George Campbell" title="Is Virtual Living Harming Our Children?"/>
                    </div>
                </div>
                <div className='editorialDivider'></div>
            </div>
        </div>
        );
    }
}