import React from 'react';
import s from './MyPosts.module.css'
import {MyPost} from './Post/MyPost';
import {PostType} from '../../../App';


type MyPostsType = {
    posts: PostType[]
}


export const MyPosts:React.FC<MyPostsType> = ({posts}) => {

    const postElement = posts.map(p=><MyPost message={p.message} likes={p.likes}/>)


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
                {postElement}
            </div>

        </div>

    )
}
