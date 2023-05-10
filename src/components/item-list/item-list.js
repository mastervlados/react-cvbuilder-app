import React from "react";

import './item-list.scss'

const ItemList = ({ data, classes }) => {
    return (
        <ul className={classes}>
            {data}
        </ul>
    )
}

export default ItemList