import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';





export const Profile = () => {
    const posts = [
        {message:'Hello, how are you?', likes: 5},
        {message:'I\'m fine.', likes: 10},
        {message:'Bye', likes: 15},

    ]
    return (
        <div>
            <ProfileInfo
                imgAddress={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgQ9pro7ubhf9a7-MAxZqRM5N6HEJfoNgLw&usqp=CAU'}
            />
            <MyPosts posts={posts}/>
        </div>
    )
}
