import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';
import {DialogType, MessageType} from '../../App';

// const dialogs = [
//     {id : '1', name : 'Andrei'},
//     {id : '2', name : 'Dennis'},
//     {id : '3', name : 'Smith'},
//     {id : '4', name : 'Alex'},
//     {id : '5', name : 'Jonathan'}
//
// ]
// const messages = [
//     {id : '1', message : 'Hey, how\'s it going?'},
//     {id : '2', message : 'Pretty good, thanks for asking! How about you?'},
//     {id : '3', message : 'I\'m doing okay, just a bit stressed with work. How was your weekend?'},
//     {id : '4', message : 'It was really nice, I went camping with some friends. How about you?'},
//     {id : '5', message: 'I didn\'t do much, just stayed home and watched TV.'}
//
// ]

export type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
// const dialog = dialogs.map(d=><Dialog id={d.id} name={d.name}/>)
// const message = messages.map(m=><Message id={m.id} message={m.message}/>)

export const Dialogs:React.FC<DialogsType> = ({dialogs, messages}) => {
    const dialog = dialogs.map(d=><Dialog id={d.id} name={d.name}/>)
    const message = messages.map(m=><Message id={m.id} message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>

    )
}