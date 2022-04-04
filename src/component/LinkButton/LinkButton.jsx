import { Link } from "react-router-dom"

export const LinkButton = ({pathName, btnCaption, classes}) => {
    
    return (
        <Link className="w-100" to={pathName}>
            <button className={`btn ${classes}`}>{btnCaption}</button>
        </Link>
    )
}