import axios from "axios";
import { useEffect, useState } from "react";
import { QuizCard } from "../../component";
import { useDocumentTitle } from "../../customHooks";

const getCategories = async (setCategories) => {
    try{
        const { data : {categories} } = await axios.get("api/category/");
        setCategories(categories)
    }catch({response}){
        console.log(response)
    }
}
export const Home = () => {
    useDocumentTitle("Home");
    const [categories, setCategories] = useState([]);    
    useEffect(()=>{getCategories(setCategories)},[setCategories])
    return (
        <>
            <div className="flex-row pd-5 m-5 justify-evenly">
            {categories.length > 0 && categories.map(({id,cateoryName,description,image,path})=>
                <QuizCard key={id}
                    id={id}
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