import React from 'react'

function TextError(props) {
    return (
        <div className="message">
            {props.children}
        </div>
    )
}

export default React.memo(TextError)