import React from 'react'
import { Link } from 'react-router-dom'



const Error = () => (
  <div className="Error hero is-fullheight">
    <Link to="/dinder">
      <div className="error-content all-items is-fullheight">
        <div>
          <h1>Oops! something went wrong!</h1>
          <p>Click anywhere to get back to the foooooooood</p>
        </div>
      </div>
    </Link>
  </div>
)

export default Error