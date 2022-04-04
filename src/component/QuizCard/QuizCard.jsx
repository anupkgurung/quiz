import { LinkButton } from "../../component";
import "./QuizCard.css";

export const QuizCard = ({ id, cateoryName, description, caption, image, path }) => {

    return (
        <>
            <div className="" id={id}>
                <div className='container'>
                    <div>
                        <img className="responsive img-radius" src={image} alt="js" />
                    </div>
                    <div className="pd-2">
                        <h5>{description}</h5>
                        <p className="font-sm">quiz by Kwiizy</p>
                    </div>
                    <div className="pd-1 font-bold">
                        {cateoryName}
                    </div>
                    <div className="h-100">
                        <div className="h-100">
                            <LinkButton pathName ={path} btnCaption={caption} classes={"btn-primary card-button w-100 h-100"} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}