import React from "react";

type HeaderPropsType = {
    ageValue: number
}


export const Header = (props:HeaderPropsType) => {
    return (<div>
            <div className="title"><h1>User page</h1></div>
            <div>
            </div>
            <div>
                <a href=''>Home</a> <br/>
                <a href=''>News</a><br/>
                <a href=''>Messages</a><br/>
                <a href=''>Settings</a><br/>
            </div>
            <div> < Userage age={props.ageValue} /></div>
        </div>
    )
}

type UseragePropsType = {
    age: number
}
const Userage = (props:UseragePropsType) => {
    return (
        <div id = "age"> User age is {props.age}</div>
    )
}