import React from "react"
import News from "../pages/news"
import { Link } from "gatsby"

const BAR = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>

        <li>
          <Link to="/news/">news</Link>
        </li>
        <li>
          <Link to="/articles/">Articles</Link>
        </li>
        <li>
          <Link to="/horoscope/">Horoscope</Link>
        </li>
      </ul>
    </div>
  )
}

export default BAR
