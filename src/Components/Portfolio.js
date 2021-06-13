import React, { Component } from 'react'
import {PlaceholderExampleImage} from './semantic-ui-placeholder';
import { RevealExampleInstant } from './semantic-ui-reveal-content';
import '../Styles/Portfolio.scss';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="portforlio-root">
                <div className="preface">
                    <NewDabba/>
                    <PlaceholderExampleImage/>
                </div>
                <RevealExampleInstant/>
            </div>
        )
    }
}
export const NewDabba=()=><h3>Helloo my boy</h3>


