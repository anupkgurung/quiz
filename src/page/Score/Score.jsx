import axios from "axios";
import { useEffect, useState } from "react";
import { useQuizContext } from "../../context";

const getQuestionByCategory = async (categoryId, setQuestionList) => {
    try {
        const { data: { questionList } } = await axios.get(`api/quiz/${categoryId}`);
        setQuestionList(questionList[0][categoryId]);
    } catch (error) {
        console.log(error)
    }
}

export const Score = () => {
    const [question, setQuestionList] = useState([]);
    const { quizCategoryState: { score, valueSelected, categoryId } } = useQuizContext();

    useEffect(() => { getQuestionByCategory("begginer", setQuestionList) }, [])

    return (
        <div className="w-100 flex-row flex-row-center pd-4">
            <div className="quiz-play-card">
                <h2 className="pd-5">Javscript Quiz - Your Score</h2>
                <div>Final Score - {score}</div>
                {question.length > 0 && question.map(({ correct, question, options },idx) => (
                    <>
                        <div className="pd-5 font-l">Q.{++idx} {question}</div>
                        <div className="font-l">
                            <ul className="pd-4">
                                {options.map((value, idx) => (
                                    <li key={idx} className="pd-2">
                                        <button className="btn btn-primary w-100 m-0"
                                            style={{
                                                backgroundColor: value === correct ? '#00800094' : ''
                                            }}
                                        >{value}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr/>
                    </>
                ))
                }
            </div>
        </div>
    )
}