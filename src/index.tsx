import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogs = [
    {id : '1', name : 'Andrei'},
    {id : '2', name : 'Dennis'},
    {id : '3', name : 'Smith'},
    {id : '4', name : 'Alex'},
    {id : '5', name : 'Jonathan'}

]
const messages = [
    {id : '1', message : 'Hey, how\'s it going?'},
    {id : '2', message : 'Pretty good, thanks for asking! How about you?'},
    {id : '3', message : 'I\'m doing okay, just a bit stressed with work. How was your weekend?'},
    {id : '4', message : 'It was really nice, I went camping with some friends. How about you?'},
    {id : '5', message: 'I didn\'t do much, just stayed home and watched TV.'}

]
const posts = [
    {message:'Hello, how are you?', likes: 5},
    {message:'I\'m fine.', likes: 10},
    {message:'Bye', likes: 15},

]

ReactDOM.render(

    <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById('root')
);