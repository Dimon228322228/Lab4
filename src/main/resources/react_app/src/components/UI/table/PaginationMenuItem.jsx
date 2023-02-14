import React from 'react';
import {Pagination} from "react-bootstrap";

const PaginationMenuItem = ({itemsCount, itemsPerPage, currentPage, setCurrentPage}) => {
    const pageAmount = Math.ceil(Number(itemsCount) / Number(itemsPerPage));
    const isFirst = page => page==1;
    const isLast = page => page==pageAmount;

    const isFirstPage = isFirst(currentPage);
    const isLastPage = isLast(currentPage);
    const isShown = pageAmount > 1;

    const changePage = newPage => {
        if (currentPage==newPage) return;
        setCurrentPage(newPage);
    }
    const onNumberClick = pageNum => changePage(pageNum);
    const onPrevClick = () => changePage(currentPage - 1);
    const onNextClick = () => changePage(currentPage + 1);
    const onFirstClick = () => changePage(1);
    const onLastClick = () => changePage(pageAmount);
    const onEllipsisClick = (left, right) => changePage((left + right) / 2);

    let isPageOutOfRange = false;
    let leftEllipsisNumber = 1;
    const pages = [...new Array(pageAmount)].map((_, i) => {
        const pageNum = i+1;
        const isNearCurrent = Math.abs(pageNum - currentPage) <= 1;
        const isNextNearCurrent = Math.abs(pageNum + 1 - currentPage) <= 1;
        const isNextLast = isLast(pageNum+1);

        if (isFirst(pageNum) || isLast(pageNum) || isNearCurrent) {
            isPageOutOfRange = false;
            return <Pagination.Item key={pageNum} active={pageNum==currentPage} onClick={() => onNumberClick(pageNum)}>
                {pageNum}
            </Pagination.Item>
            }
        if (!isPageOutOfRange) leftEllipsisNumber = pageNum - 1;

        if (!isPageOutOfRange && (isNextNearCurrent || isNextLast)) {
            isPageOutOfRange = true;
            return <Pagination.Ellipsis key={pageNum} onClick={() => onEllipsisClick(leftEllipsisNumber, pageNum+1)}/>
        }
        return null;
    })

    if (isShown) return (
        <Pagination>
            <Pagination.First onClick={onFirstClick} disabled={isFirstPage}/>
            <Pagination.Prev onClick={onPrevClick} disabled={isFirstPage}/>
            {pages}
            <Pagination.Next onClick={onNextClick} disabled={isLastPage}/>
            <Pagination.Last onClick={onLastClick} disabled={isLastPage}/>
        </Pagination>
    )
    return (<></>)
}
export default PaginationMenuItem;