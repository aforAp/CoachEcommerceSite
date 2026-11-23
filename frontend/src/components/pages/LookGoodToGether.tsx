import { Link } from "react-router-dom"

const LookGoodToGether = () => {
  return (
    <div>
      <h1>We look good together.</h1>
      <h2>Keep carrying (and tagging) @coach #CoachNY</h2>
      <Link to="/shop/women/handbags/view-all">
      Shop All Bags
      </Link>
      <Link to="/social-gallery">
      Social Gallery
      </Link>
    </div>
  )
}

export default LookGoodToGether
