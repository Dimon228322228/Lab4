import React from 'react';
import {Button} from "react-bootstrap";
import {useGetCurrentUserQuery, useLogoutMutation} from "../../../services/auth";

const LogoutButton = ({onClick}) => {
    const [logoutPost, {}] = useLogoutMutation();
    const {currentData: user} = useGetCurrentUserQuery();
    return (
        <Button onClick={
            () => {
                logoutPost(user.id);
                onClick()
            }
        }>Logout</Button>
    )
}

export default LogoutButton;