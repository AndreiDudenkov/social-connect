import React from "react";
import {MyPosts} from './MyPosts/MyPosts';



export const Profile = () => {
         return (
    <div >
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgQ9pro7ubhf9a7-MAxZqRM5N6HEJfoNgLw&usqp=CAU"/>
            </div>
            <div>
                avatar + description
            </div>
        <MyPosts />
    </div>
    )
}
