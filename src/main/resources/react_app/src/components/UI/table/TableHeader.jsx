import React from 'react';
import {useGetCurrentUserQuery} from "../../../services/auth";
import {Button} from "react-bootstrap";
import DropdownMenuItem from "./DropdownMenuItem";
import PaginationMenuItem from "./PaginationMenuItem";

const TableHeader = ({itemsCount, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, clearPost}) => {
    const {currentData: user} = useGetCurrentUserQuery();
    return (
        <div className="d-flex justify-content-between">
            <Button className="h-auto d-inline-block" onClick={() => clearPost(user.id)}>Clear</Button>
            <PaginationMenuItem itemsCount={itemsCount} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <DropdownMenuItem itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage}/>
        </div>
    )
}

export default TableHeader;