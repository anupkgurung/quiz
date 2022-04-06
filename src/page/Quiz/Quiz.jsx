import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuizContext } from "../../context";
import { LinkButton } from "../../component";

const getQuestionByCategory = async (categoryId,setQuestionList) => {
    try{
        const { data : { questionList } } = await axios.get(`api/quiz/${categoryId}`);
        setQuestionList(questionList[0][categoryId]);
    }catch(error){
        console.log(error)
    }
}

export const Quiz = () => {
    const { quizCategoryState : {score, currentQuestion, isCorrect, valueSelected } , dispatchQuizCategory } = useQuizContext();
    const {state : { categoryId }} =useLocation();
   
    const [question,setQuestionList] = useState([]);
    const totalQuestion = question.length

    useEffect(()=>{
        getQuestionByCategory(categoryId,setQuestionList)
    },[categoryId])
    
    return (
        <div className="w-100 flex-row flex-row-center pd-4">
            <div className="quiz-play-card">
                <h2 className="pd-5">Javscript Quiz - Begginer</h2>
                <div className="quiz-score-div pd-2">
                    <h6>{`Question ${currentQuestion+1}/${totalQuestion}`}</h6>
                    <div>Score - {score}</div>
                </div>
                    <div className="pd-5 font-l">{question[currentQuestion] && question[currentQuestion].question}</div>
                     <div className="font-l">
                         <ul className="pd-4">
                             {question[currentQuestion]&& question[currentQuestion].options.map((value,idx)=>(
                                 <li key={idx} className="pd-2">
                                     <button className="btn btn-primary w-100 m-0"
                                        style ={{ backgroundColor :
                                            valueSelected === value ?
                                             (isCorrect ? '#00800094' : 'red') : ''
                                        }}
                                        onClick={
                                            (e)=>dispatchQuizCategory({
                                                operation : "VALIDATE_ANSWER",
                                                payLoad : {value, categoryId,
                                                    correctValue : question[currentQuestion].correct} ,
                                            })
                                        }
                                     >{value}</button>
                                </li>
                             ))}
                         </ul>
                     </div>
                <div className="quiz-next-btn">
                    { currentQuestion === totalQuestion-1 ? 
                        <LinkButton pathName={"/score"} linkClasses={"w-20"}  btnCaption={"View Score"} classes={"btn btn-secondary"} />
                        :
                        <button className="btn btn-secondary w-10" 
                        onClick={()=>
                            dispatchQuizCategory({
                                operation : "UPDATE_QUESTION",
                                payLoad : { categoryId, currentQuestion }
                            })}
                            >Next</button>
                    }
                   
                </div>
            </div>
        </div>
    )
}