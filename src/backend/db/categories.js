import { v4 as uuid } from "uuid";


/**
 * Category Database
 * */

export const categories = [
    { 
        id : uuid(), 
        cateoryName : "Quiz",
        image : "https://raw.githubusercontent.com/anupkgurung/images/main/quizimg/quiz.jpg",
        description : "Play The Quiz",
        path : "/quiz-category"
    },
    { 
        id : uuid(), 
        cateoryName : "Rules",
        image : "https://raw.githubusercontent.com/anupkgurung/images/main/quizimg/rules.webp",
        description : "Know the Rules",
        path : "/rules"
    },
    {   id : uuid(), 
        cateoryName : "Score Board",
        image : "https://raw.githubusercontent.com/anupkgurung/images/main/quizimg/scoore.png",
        description : "What's your Score",
        path : "/score"
    }
];

export const quizCategory = [
    { 
        id : uuid(), 
        cateoryName : "Begginer",
        image : "https://raw.githubusercontent.com/anupkgurung/images/main/quizimg/js.jpeg",
        path : "quiz"
    },
    { 
        id : uuid(), 
        cateoryName : "Intermediate",
        image : "https://raw.githubusercontent.com/anupkgurung/images/main/quizimg/js.jpeg",
        path : "quiz"
    },
    {   id : uuid(), 
        cateoryName : "Advanced",
        image : "https://raw.githubusercontent.com/anupkgurung/images/main/quizimg/js.jpeg",
        path : "quiz"
    }
]