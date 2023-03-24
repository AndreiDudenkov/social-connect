import React from 'react';
import './App.css';
import {Technologies} from "./user_page/Technologies";
import {Header} from "./user_page/Header";

const App = () => {
    return (
        <div>
            <div><Header/></div>
            <div><Technologies /></div>
        </div>
    );
}

export default App;

