import React from 'react';
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";

const App = () => {
    return (
        <div>
            <div><Header/></div>
            <div><Technologies /></div>
        </div>
    );
}
const Technologies = () => {
    return (
        <div>
            <h2> Resurses</h2>
            <a href='https://www.youtube.com'>Youtube</a> <br/>
            <a href='https://www.vk.com'>VK</a> <br/>
            <a href='https://www.onliner.by'>Onliner</a>
        </div>
    )
}
const Header = () => {
    return (<div>
        <div className="title"><h1>User page</h1></div>
        <div>
            <a href=''>Home</a> <br/>
            <a href=''>News</a><br/>
            <a href=''>Messages</a><br/>
            <a href=''>Settings</a><br/>
        </div>
        </div>
    )
}

export default App;

