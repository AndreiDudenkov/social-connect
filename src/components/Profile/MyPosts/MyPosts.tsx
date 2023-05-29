import React from 'react';
import s from './MyPosts.module.css'
import {MyPost} from './Post/MyPost';


export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <MyPost message={'Hello, how are you?'} likes={5}/>
                <MyPost message={'I\'m fine.'} likes={10}/>
                <MyPost message={'Bye'} likes={15}/>
            </div>

        </div>

    )
}
