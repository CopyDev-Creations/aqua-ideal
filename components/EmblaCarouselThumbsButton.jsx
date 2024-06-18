import React from 'react'

export const Thumb = (props) => {
    const { selected, children, onClick } = props

    return (
        <button
            onClick={onClick}
            type="button"
            className={'embla-thumbs__slide'.concat(
                selected ? ' embla-thumbs__slide--selected' : ''
            )}
        >
            {children}
        </button>
    )
}
