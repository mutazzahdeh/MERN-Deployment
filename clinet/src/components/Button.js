import React from 'react'
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const { authorId, successCallback,click } = props;
    const onclickfunction = () => {
        successCallback(authorId)
    }
    return (
        <button onClick={onclickfunction}>
           {click}
        </button>
    )
}