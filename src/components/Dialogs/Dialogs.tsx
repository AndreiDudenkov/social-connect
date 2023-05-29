import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogType = {
    id: string
    name: string
}
export const Dialog: React.FC<DialogType> = ({id, name}) => {
    return (
        <div>
            <div className={s.dialog}>
                <NavLink to={'/dialogs/' + id}>{name}</NavLink>
            </div>
        </div>
    );
};

type MessageType = {
    message: string
}
export const Message: React.FC<MessageType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    );
};


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog id={'1'} name={'Andrei'}/>
                <Dialog id={'2'} name={'Dennis'}/>
                <Dialog id={'3'} name={'Smith'}/>
                <Dialog id={'4'} name={'Alex'}/>
                <Dialog id={'5'} name={'Jonathan'}/>

            </div>
            <div className={s.messages}>
                <Message message={'Hey, how\'s it going?'}/>
                <Message message={'Pretty good, thanks for asking! How about you?'}/>
                <Message message={'I\'m doing okay, just a bit stressed with work. How was your weekend?'}/>
                <Message message={'It was really nice, I went camping with some friends. How about you?'}/>
                <Message message={'I didn\'t do much, just stayed home and watched TV.'}/>
            </div>
        </div>

    )
}