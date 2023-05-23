import React from 'react';
import s from './MyPost.module.css'

type MyPostType = {
    message: string
    likes: number
}

export const MyPost = (props:MyPostType) => {
    return (

        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZz281J5f0xfoWQApytqedMOr3IBbS_wW9w&usqp=CAU"/>
            {props.message}
            <div>
                <span> {props.likes} likes</span>
            </div>
        </div>


    )
}
