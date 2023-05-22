import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (<nav className={s.nav}>
            <div className={s.items}><a>Profile</a></div>
            <div className={s.items}><a>Messages</a></div>
            <div className={s.items}><a>News</a></div>
            <div className={s.items}><a>Music</a></div>
            <div className={s.items}><a>Settings</a></div>
        </nav>
    )
}
