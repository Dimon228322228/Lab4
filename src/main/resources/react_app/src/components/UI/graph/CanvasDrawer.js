export const createGraphParams = (width, height, offset) => {
    return {
        startX: width / 2,
        startY: height / 2,
        minX: offset,
        maxY: offset,
        maxX: width - offset,
        minY: height - offset,
        width: width,
        height: height,
        xMulled: (xMul) => { return xMul * (xMul >= 0 ? (offset - width / 2) : (width / 2 - offset)) },
        yMulled: (yMul) => { return yMul*(yMul >=0 ? (offset - height / 2) : (height / 2 - height - offset)) },
    };
}

export const createStyles = (strokeStyle, fillStyle, text, errorColor, backgroundCanvas, pointerColor) => {
    return {
        strokeStyle,
        fillStyle,
        text,
        errorColor,
        backgroundCanvas,
        pointerColor,
    };
}

export const createGraph = (canvas, canvasOffset, r) => {
    return {
        canvas: canvas.getContext("2d"),
        canvasParam: createGraphParams(canvas.width, canvas.height, canvasOffset),
        r,
    };
}

export class CanvasDrawer {
    drawBackground = (graph, style) => {
        graph.canvas.clearRect(0,0,graph.canvasParam.width, graph.canvasParam.height);
        graph.canvas.fillStyle = style.backgroundCanvas;
        graph.canvas.fillRect(0, 0, graph.width, graph.height);
    }

    draw = (graph, style) => {
        this.drawBackground(graph);
        this.drawAxis(graph);
        this.drawCircle(graph, style);
        this.drawRectangle(graph, style);
        this.drawTriangle(graph, style);
        this.drawText(graph, style);
    }

    drawAxis = (graph) => {
        graph.canvas.strokeStyle = '#000';
        graph.canvas.fillStyle = '#000';
        let xAxis = new Path2D();
        let yAxis = new Path2D();
        let axisTriangles = new Path2D();

        xAxis.moveTo(graph.canvasParam.minX, graph.canvasParam.startY);
        xAxis.lineTo(graph.canvasParam.maxX, graph.canvasParam.startY);
        yAxis.moveTo(graph.canvasParam.startX, graph.canvasParam.minY);
        yAxis.lineTo(graph.canvasParam.startX, graph.canvasParam.maxY);
        yAxis.addPath(xAxis);
        graph.canvas.stroke(yAxis);

        axisTriangles.moveTo(graph.canvasParam.maxX, graph.canvasParam.startY);
        axisTriangles.lineTo(graph.canvasParam.maxX - 10, graph.canvasParam.startY - 5);
        axisTriangles.lineTo(graph.canvasParam.maxX - 10, graph.canvasParam.startY + 5);
        axisTriangles.closePath();
        axisTriangles.moveTo(graph.canvasParam.startX, graph.canvasParam.maxY + 0);
        axisTriangles.lineTo(graph.canvasParam.startX + 5, graph.canvasParam.maxY + 10);
        axisTriangles.lineTo(graph.canvasParam.startX - 5, graph.canvasParam.maxY + 10);
        graph.canvas.fill(axisTriangles);
    }

    drawCircle = (graph, xMul, yMul) => {
        graph.canvas.beginPath();
        graph.canvas.moveTo(graph.canvasParam.startX, graph.canvasParam.startY);
        const orientation = (xMul >=0) !== (yMul>=0);
        const xPiMul = (xMul) => { return xMul >=0 ? 0 : 1 }
        const yPiMul = (yMul) => { return yMul >=0 ? -1 : 1 }

        graph.canvas.arc(graph.canvasParam.startX,
                         graph.canvasParam.startY,
                         Math.abs(graph.xMulled(xMul)),
               yPiMul(yMul)*Math.PI/2,
                xPiMul(xMul)*Math.PI,
                         orientation);
        graph.canvas.fill();
    }

    drawRectangle = (graph, xMul, yMul) => {
        graph.canvas.fillRect(graph.canvasParam.startX, graph.canvasParam.startY, graph.xMulled(xMul), graph.yMulled(yMul));
    }

    drawTriangle = (graph, xMul, yMul) => {
        graph.canvas.beginPath();
        graph.canvas.moveTo(graph.canvasParam.startX, graph.canvasParam.startY + graph.yMulled(yMul));
        graph.canvas.lineTo(graph.canvasParam.startX + graph.xMulled(xMul), graph.canvasParam.startY);
        graph.canvas.lineTo(graph.canvasParam.startX, graph.canvasParam.startY);
        graph.canvas.fill();
    }

    drawText(graph, style) {
        const ctx = graph.canvas;
        const r = graph.r;
        if (r===undefined) {
            //if no radius say that there is none
            ctx.fillStyle = style.errorColor;
            ctx.font = "24px serif";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText("Radius not set!", graph.canvasParam.startX, graph.canvasParam.minY+20);
            return;
        }

        const labels = [-r, -r/2, '', r/2, r];
        const offset = (r+"").length;
        ctx.fillStyle = style.text;
        ctx.font = "18px serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        for (let i = 0; i < labels.length; i++) {
            const text = labels[i].toString();
            const factor = labels.length - 1;
            const xStep = graph.canvasParam.minX + (graph.canvasParam.maxX - graph.canvasParam.minX) / factor * i;
            const yStep = graph.canvasParam.maxY + (graph.canvasParam.minY - graph.canvasParam.maxY) / factor * (factor - i);

            //draw points on axis
            ctx.beginPath();
            ctx.arc(xStep, graph.canvasParam.startY, 3, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(graph.canvasParam.startX, yStep, 3, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillText(text, xStep, graph.canvasParam.startY + 20);
            ctx.fillText(text, graph.canvasParam.startX - 13 - (3 * offset), yStep);
        }
    }
}