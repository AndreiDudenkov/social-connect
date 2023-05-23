import React from "react";
import s from './MyPosts.module.css'
import {MyPost} from './Post/MyPost';



export const MyPosts = () => {
         return (
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.item}>
                    <MyPost/>
                    <MyPost/>
                    <MyPost/>
                    <MyPost/>
                    <MyPost/>

                </div>

            </div>

    )
}
