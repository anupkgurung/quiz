import axios from "axios";
import { useEffect, useState } from "react";
import { QuizCard } from "../../component/QuizCard/QuizCard"

const getCategories = async (setCategories) => {
    const { data : {categories} } = await axios.get("api/category/");
    setCategories(categories)
}
export const Home = () => {
    const [categories, setCategories] = useState([]);    
    useEffect(()=>{getCategories(setCategories)},[setCategories])
    return (
        <>
            <div className="flex-row pd-5 m-5 justify-evenly">
            {categories.length > 0 && categories.map(({id,cateoryName,description,image,path})=>
                <QuizCard key={id}
                    id={id}
                    cateoryName={""}
                    description={description}
                    caption={cateoryName}
                    image={image}
                    path={path}
                 />
            )}
            </div>
        </>
    )
}