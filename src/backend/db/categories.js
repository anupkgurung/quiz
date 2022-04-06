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
        path : "/category"
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
        cateoryName : "begginer",
        image : "https://raw.githubusercontent.com/anupkgurung/images/main/quizimg/js.jpeg",
        path : "/quiz"
    },
    { 
        id : uuid(), 
        cateoryName : "intermediate",
        image : "https://raw.githubusercontent.com/anupkgurung/images/main/quizimg/js.jpeg",
        path : "/quiz"
    },
    {   id : uuid(), 
        cateoryName : "advanced",
        image : "https://raw.githubusercontent.com/anupkgurung/images/main/quizimg/js.jpeg",
        path : "/quiz"
    }
]


export const question = [
    {
        begginer: [
            {
                question: "Javascript is an _______ language? ",
                options: [
                    "Object-Oriented", "Object-Based",
                    "Procedural", "None of the above"
                ],
                correct : "Object-Oriented"
            },
            {
                question: "Which of the following keywords is used to define a variable in Javascript? ",
                options: [
                    "var", "let",
                    "Both A and B", "None of the above"
                ],
                correct : "Both A and B"
            },
            {
                question: "Which of the following methods is used to access HTML elements using Javascript? ",
                options: [
                    "getElementbyId()", "getElementByClassNam()",
                    "Both A and B", "None of the above"
                ],
                correct : "Both A and B"
            },
            {
                question: "Which function is used to serialize an object into a JSON string in Javascript? ",
                options: [
                    "stringify()", "parse()",
                    "convert()", "None of the above"
                ],
                correct : "stringify()"
            },
            {
                question: "How can a datatype be declared to be a constant type? ",
                options: [
                    "const", "let",
                    "var", "None of the above"
                ],
                correct : "const"
            }
        ]
    },

    {
        intermediate: [
            {
                question: "The JavaScript global execution context creates two things for you: the global object, and the 'this' keyword. ",
                options: [
                    "true", "false",
                    "it depends", "None of the above"
                ],
                correct: "true"
            },
            {
                question: "What's the output console.log(3 + 4 + '5') ? ",
                options: [
                    "'345'", "'75'",
                    "12", "'12'"
                ],
                correct : "75"
            },
            {
                question: "What's the value of num? const num = parseInt('7*6', 10);",
                options: [
                    "42", "'42'",
                    "7", "NaN"
                ],
                correct : "7"
            },
            {
                question: "What does … operator do in JS? ",
                options: [
                    "it is used to spread iterables to individual elements",
                    "it is used to describe a datatype of undefined size",
                    "No such oerator exists", "None of the above"
                ],
                correct: "it is used to spread iterables to individual elements"
            },
            {
                question: "How to stop an interval timer in Javascript? ",
                options: [
                    "clearInterval", "clearTimer",
                    "intervalOver", "None of the above"
                ],
                correct : "clearInterval"
            }
        ]
    },

    {
        advance: [
            {
                question: "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
                options: [
                    "Object Serialization", "Object Encapsulation",
                    "Object inheritence", "None of the above"
                ],
                correct : "Object Serialization"
            },
            {
                question: "Which of the following are closures in Javascript?",
                options: [
                    "Variables", "Functions",
                    "Objects", "All of the above"
                ],
                correct:"Functions"
            },
            {
                question: "What does the ‘toLocateString()’ method do in JS?",
                options: [
                    "Returns a localised object representation", "Returns a parsed string",
                    "Return a localized string representation of an object", "None of the above"
                ],
                correct : "Return a localized string representation of an object"
            },
            {
                question: "Which object in Javascript doesn’t have a prototype",
                options: [
                    "Base Object", "All objects have a prototype",
                    "None of the objects have a prototype", "None of the above"
                ],
                correct:"Base Object"
            },
            {
                question: "Which of the following are not server-side Javascript objects? ",
                options: [
                    "Date", "FileUpload",
                    "Function", "All of the above"
                ],
                correct: "All of the above"
            }
        ]
    }
]
