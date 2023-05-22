import React from "react";
import s from './Profile.module.css'



export const Profile = () => {
    return (<div className={s.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgQ9pro7ubhf9a7-MAxZqRM5N6HEJfoNgLw&usqp=CAU"/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.items}>post 1</div>
                <div className={s.items}>post 2</div>
                <div className={s.items}>post 3</div>
            </div>
        </div>
    )
}
