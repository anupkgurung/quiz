import { createContext, useContext, useReducer } from "react";
import { initialQuizState , QuizPageReducer } from "../../reducer";

const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const [ quizCategoryState, dispatchQuizCategory ] = useReducer(QuizPageReducer,initialQuizState);
    return (
        <QuizContext.Provider value={{quizCategoryState, dispatchQuizCategory}}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuizContext = () => useContext(QuizContext);
