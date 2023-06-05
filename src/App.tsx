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
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostType = {
    message: string
    likes: number
}


// type AppType = {
//     dialogs: DialogType[]
//     messages: MessageType[]
//     posts: PostType[]
// }
type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
type ProfilePageType = {
    posts: PostType[]
}
type StateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
}
type MainStateType ={
    state: StateType
}


const App:React.FC<MainStateType> = ({state}) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'} render={() => <Profile posts={state.profilePage.posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={state.dialogPage.dialogs} messages={state.dialogPage.messages} />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

