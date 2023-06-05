import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {MyPost} from './Post/MyPost';
import {PostType} from '../../../App';


type MyPostsType = {
    posts: PostType[]
}


export const MyPosts: React.FC<MyPostsType> = ({posts}) => {

    const postElement = posts.map(p => <MyPost message={p.message} likes={p.likes}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
         let text = newPostElement.current !== null? newPostElement.current.value: null
         console.log(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>

        </div>

    )
}
