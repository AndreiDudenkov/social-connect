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
                    <MyPost message = {"Hello, how are you?"} likes={5}/>
                    <MyPost message = {"I'm fine."} likes={10}/>
                    <MyPost message = {"Bye"} likes={15}/>


                </div>

            </div>

    )
}
