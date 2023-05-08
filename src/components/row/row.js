import React from "react";

import './row.scss'

const Row = ({leftBlock, rightBlock}) => {
    return (
        <div className="row">
            {leftBlock}
            {rightBlock}
        </div>
    )
}

export default Row