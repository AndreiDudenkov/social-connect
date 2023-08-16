import React from 'react';
import s from './../Dialogs.module.css'



type MessageType = {
    message: string
    id: string
}
export const Message: React.FC<MessageType> = ({message,id}) => {
    return (
            <div className={s.message} key={id}>{message}</div>
    );
};

