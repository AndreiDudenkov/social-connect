import React from 'react';
import s from './../Dialogs.module.css'
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

