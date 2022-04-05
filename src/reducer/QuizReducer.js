export const initialQuizState = {
    category : null,
    currentQuestion : 0,
    categoryId : null,
    isCorrect : null,
    score : 0,
    valueSelected : null
}
export const QuizPageReducer = (state, {operation,payLoad}) => {
    switch (operation) {
        case "QUIZ_CATEGORY" :
            return {
                ...state,
                quizCategory : payLoad
            }
        case "UPDATE_QUESTION" :
            return {
                ...state,
                categoryId : payLoad.categoryId,
                currentQuestion : payLoad.currentQuestion++,
            }
        case "VALIDATE_ANSWER" :
            return {
                ...state,
                categoryId : payLoad.categoryId,
                isCorrect : payLoad.correctValue === payLoad.value,
                score : payLoad.correctValue === payLoad.value ? 
                        state.score+10:state.score-10 ,
                valueSelected : payLoad.value

            }
        default:
            return state
    }
}