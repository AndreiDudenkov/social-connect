import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

export type DialogType = {
    id: string,
    name: string
}
export type MessageType = {
    id: string,
    message: string
}
export type PostType = {
    message: string,
    likes: number
}


type AppType = {
    dialogs: DialogType[]
    messages: MessageType[]
    posts: PostType[]


}

const App:React.FC<AppType> = ({dialogs,messages,posts}) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'} render={() => <Profile posts={posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={dialogs} messages={messages} />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

