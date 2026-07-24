import React from 'react'
import './Table.css'

const Table = () => {
  return (
    <table className='common_table'>
     <thead>
       {headings.map((item, index) =>(
        <th key={index}>{item}</th>
       ))}
     </thead>
    </table>
  )
}

export default Table