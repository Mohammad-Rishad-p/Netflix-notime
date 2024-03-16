import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = (props) => {
  return (
    <div>
        <button className="text-lg border-2  border-red-500 w-24 h-12 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">
          <Link to={props.Link} >
          {props.title}
          </Link>
        </button>
    </div>
  )
}

export default Buttons