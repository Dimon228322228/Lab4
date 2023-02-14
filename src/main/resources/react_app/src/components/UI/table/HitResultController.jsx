import {useDispatch, useSelector} from "react-redux";
import {useClearMutation, useHitResultPageQuery} from "../../../services/htiResults";
import {setCurrentPage, setItemPerPage} from "../../../store/paginationSlice";
import {useGetCurrentUserQuery} from "../../../services/auth";
import classes from "./../../MainContent.module.css";
import Table from "./Table";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

const HitResultsController = () => {
    const dispatch = useDispatch();
    const [clearPost, {}] = useClearMutation();
    const currentPage = useSelector(state => state.pagination.currentPage);
    const dispatchCurrentPage = currentPage => dispatch(setCurrentPage(currentPage))
    const itemsPerPage = useSelector(state => state.pagination.itemsPerPage);
    const dispatchItemsPerPage = itemsPerPage => dispatch(setItemPerPage(itemsPerPage))
    const {currentData: user} = useGetCurrentUserQuery();
    const {data: hitResultsPage, isLoading} = useHitResultPageQuery({userId: user.id, page: currentPage-1, size: itemsPerPage});
    if (isLoading) return (<></>)
    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            {hitResultsPage.totalLength ==BigInt(0) ?
                <div className="text-center">
                    <h1>No attempts found - try choosing a radius and then filling form or clicking on a graph!</h1>
                </div> :
                <>
                    <div className={classes.flexRow}>
                        <TableHeader itemsCount={hitResultsPage.totalLength} itemsPerPage={itemsPerPage} setItemsPerPage={dispatchItemsPerPage} currentPage={currentPage} setCurrentPage={dispatchCurrentPage} clearPost={clearPost}/>
                    </div>
                    <div className={classes.flexRow}>
                        <Table attempts={hitResultsPage.hitResults} isLoading={isLoading}/>
                    </div>
                    <div className={classes.flexRow}>
                        <TableFooter itemsCount={hitResultsPage.totalLength} itemsPerPage={itemsPerPage} setItemsPerPage={dispatchItemsPerPage}
                                     showedItems={hitResultsPage.hitResults.map(hitResult => hitResult.number)}/>
                    </div>
                </>
            }
        </div>
    )
}

export default HitResultsController;