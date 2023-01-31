import React from 'react';

const Canvas = ({width, height, ...props}) => {
    return (
        <canvas width={width} height={height}>
            <svg>
                <path d={"m 10 10 l 10 50 l 50 50 l 50 10"}/>
            </svg>
        </canvas>
    );
};

export default Canvas;