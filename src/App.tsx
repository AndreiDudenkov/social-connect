import React from 'react';
import './App.css';
import {Technologies} from "./user_page/Technologies";
import {Header} from "./user_page/Header";

const App = () => {
    return (
        <div>
            <Header ageValue={32} />
            <Technologies />
        </div>
    );
}

export default App;

