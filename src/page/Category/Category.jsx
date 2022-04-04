import axios from "axios";
import { useEffect, useState } from "react";
import { LinkButton, QuizCard } from "../../component";

const getCategories = async (setCategories) => {
    const { data: { quizzes } } = await axios.get("api/category/quiz");
    setCategories(quizzes)
}


export const Category = () => {
    const [categories, setCategories] = useState([]);    
    useEffect(()=>{getCategories(setCategories)},[setCategories])

    return (
        <>
            <div className="flex-row pd-5 m-5 justify-evenly">
            {categories.length > 0 && categories.map(({id,cateoryName,image,path})=>
                <QuizCard key={id}
                    id={id}
                    cateoryName={cateoryName}
                    description={"Test your Javascript Knowledge"}
                    caption={"Play Now"}
                    image={image}
                    path={path}
                 />
            )}
            </div>
            <div>
                <LinkButton pathName ={"/"} 
                btnCaption={"Back"} 
                classes={"btn-primary w-10"} />
            </div>
        </>
    )
}