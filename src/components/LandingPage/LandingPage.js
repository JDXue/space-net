import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/LandingPage.css'

function LandingPage(){
    return(
        <div className='context-box'>
            <img src='../../../logo/spacenet-logo.png' alt='logo' width='300' height='300'/>
            <h1 className='title'>Welcome to spaceNET</h1>
            <div className='dropdown-box'>
                <h4 className='sub-text'>What would you like to explore?</h4>
                <DropdownButton id="dropdown-navigator" title="explore..." className='dropdown' variant='dark'>
                    <Dropdown.Item href="#/action-1">Asteroids</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Urgent Space News</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Mars</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Astronomy Photo of the Day (APOD)</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Earth Observatory Natural Event Tracker (EONET)</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Take me to the home page</Dropdown.Item>
                </DropdownButton>

                <button
                    className='go-button'
                    onClick={() => {}}
                >Go</button>


            </div>

        </div>
    )
}


export default LandingPage