import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../../App';

export type ProfileType = {
    posts: PostType[]
}


export const Profile:React.FC<ProfileType> = ({posts}) => {

    return (
        <div>
            <ProfileInfo
                imgAddress={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgQ9pro7ubhf9a7-MAxZqRM5N6HEJfoNgLw&usqp=CAU'}
            />
            <MyPosts posts={posts}/>
        </div>
    )
}
