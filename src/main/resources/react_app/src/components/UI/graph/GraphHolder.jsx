import React, {useEffect, useRef} from 'react';
import classes from "./Cnavas.module.css";
import {useSelector} from "react-redux";
import {useGetCurrentUserQuery} from "../../../services/auth";
import {useHitResultPageQuery} from "../../../services/htiResults";
const GraphHolder = ({graphDrawer, pointsDrawer, canvasParam, graphStyle}) => {
    const r = useSelector(state => state.chooser.r);
    const currentPage = useSelector(state => state.pagination.currentPage);
    const itemsPerPage = useSelector(state => state.pagination.itemPerPage);
    const {currentData: user} = useGetCurrentUserQuery();
    const {data: hitResultsPage, isSuccess: isPointsLoadingSuccess} = useHitResultPageQuery({userId: user.id, page: currentPage-1, size: itemsPerPage});
    const canvas = useRef();

    useEffect(() => {
        if (isPointsLoadingSuccess) {
            const graph = { canvas: canvas.current.getContext("2d"), canvasParam, r }
            graphDrawer.draw(graph, graphStyle);
            pointsDrawer.draw(graph, graphStyle, hitResultsPage.hitResults);
        }
    }, [isPointsLoadingSuccess, r, hitResultsPage])

    return (
        <canvas
            ref={canvas}
            width={canvasParam.width}
            height={canvasParam.height}
            // className={styles.layer2}
        />
    )
}

export default GraphHolder;