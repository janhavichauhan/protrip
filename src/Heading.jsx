import {Link} from "react-router-dom"

function Heading() {
  return (
    <div className="navbar">
     <h3> <Link to="/"> Kalvium ❤️</Link> </h3>
     <ul>
      <Link to="/contact">Contacts</Link>
      <Link to="/about">Form</Link>
    </ul>
    </div>
  )
}

export default Heading