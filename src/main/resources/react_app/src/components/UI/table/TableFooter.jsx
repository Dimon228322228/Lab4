import DropdownMenuItem from "./DropdownMenuItem";

const TableFooter = ({itemsCount, itemsPerPage, setItemsPerPage, showedItems}) => {
    return (
        <div className="d-flex justify-content-between">
            {itemsCount==BigInt(0) ? <div/> :
                <div>
                    Showing {showedItems.at(0)+1} - {showedItems.at(showedItems.length-1)+1} of {itemsCount.toString()}
                </div>
            }
            <DropdownMenuItem itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage}/>
        </div>
    )
}

export default TableFooter;