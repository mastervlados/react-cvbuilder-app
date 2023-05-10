import React from "react";

import './row.scss'

const Row = ({leftBlock, rightBlock, classes = null}) => {
    return (
        <div className={`row ${classes}`}>
            {leftBlock}
            {rightBlock}
        </div>
    )
}

export default Row