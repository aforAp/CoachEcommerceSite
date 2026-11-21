import { ChevronRight, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

const CountrySelectorLink = () => (
  <Link
    className="flex items-center justify-between gap-3 py-3 text-sm hover:underline"
    to="/country-selector"
  >
    <span className="flex items-center gap-3">
      <MapPin aria-hidden="true" className="size-5" />
      Country / Language
    </span>
    <ChevronRight aria-hidden="true" className="size-4" />
  </Link>
)

export default CountrySelectorLink
