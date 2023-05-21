import React from 'react';
import './App.css';
// import {Technologies} from "./user_page/Technologies";
// import {Header} from "./user_page/Header";
// import {Footer} from './user_page/Footer';

const App = () => {
    return (<div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1vm3g8JVcKB8VG60WGTckmiIJ-C6XZE89A&usqp=CAU"/>
            </header>
            <nav className={'nav'}>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className={'content'}>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgQ9pro7ubhf9a7-MAxZqRM5N6HEJfoNgLw&usqp=CAU"/>
                </div>
                <div>
                    avatar + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
        </div>
    );
}

export default App;

