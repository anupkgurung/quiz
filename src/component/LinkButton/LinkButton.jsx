import { Link } from "react-router-dom"

export const LinkButton = ({pathName, btnCaption, classes, linkClasses}) => {
    return (
        <Link className={linkClasses ? linkClasses : 'w-100'} to={pathName} state={pathName.state}>
            <button className={`btn ${classes}`}>{btnCaption}</button>
        </Link>
    )
}