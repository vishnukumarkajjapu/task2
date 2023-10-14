import React from 'react'

const Cal = (props) => {
    const { data, handleClick } = props
    const { value } = data
    const handleC = () => {
        handleClick(value)
    }
    return (
        <button className='w-10 px-3' onClick={handleC} value={value}>{value}</button>
    )
}

export default Cal
