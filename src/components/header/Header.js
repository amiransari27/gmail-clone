import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout, selectUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = () =>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
        
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="newgmaillogo.jpg" alt="" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} />
            </div>
        </div>
    )
}

export default Header
