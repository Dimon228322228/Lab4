import React from 'react';
import {useGetCurrentUserQuery} from "../../../services/auth";
import LogoutButton from "../button/LogoutButton";

const UserDisplay = ({onLogoutClick}) => {
    const {currentData: user} = useGetCurrentUserQuery();
    if (!user) return (<></>)
    return (
        <div>
            <h1>Current User:</h1>
            <h2>{user.username}</h2>
            <LogoutButton onClick={onLogoutClick}/>
        </div>
    )
}


export default UserDisplay;