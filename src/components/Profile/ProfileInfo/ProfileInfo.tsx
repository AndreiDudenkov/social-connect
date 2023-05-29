import React from 'react';
import s from './ProfileInfo.module.css'



type ProfileInfoType = {
    imgAddress: string
}


export const ProfileInfo: React.FC<ProfileInfoType> = ({imgAddress}) => {
    return (<div>
            <div>
                <img src={imgAddress}/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
};