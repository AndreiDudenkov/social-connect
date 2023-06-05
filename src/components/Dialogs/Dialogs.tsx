import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';
import {DialogType, MessageType} from '../../App';


export type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

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