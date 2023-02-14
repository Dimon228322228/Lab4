import React from 'react';
import {Offcanvas} from "react-bootstrap";
import UserDisplay from "./UserDisplay";

const SideMenu = ({isShown, setIsShown}) => {
    return(
        <>
            <Offcanvas show={isShown} onHide={() => setIsShown(false)}>
                <Offcanvas.Header closeButton>
                    Menu
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <UserDisplay onLogoutClick={() => setIsShown(false)}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideMenu;