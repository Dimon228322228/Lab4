import React from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";

const DropdownMenuItem = ({itemsPerPage, setItemsPerPage}) => {
    return (
        <DropdownButton title={itemsPerPage}>
            {[3, 4, 5].map(num => (<Dropdown.Item key={num} onClick={() => setItemsPerPage(num)}
                                                    active={itemsPerPage == num}>{num}</Dropdown.Item>))}
        </DropdownButton>
    );
}

export default DropdownMenuItem;