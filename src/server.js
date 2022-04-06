import { createServer, Model } from "miragejs";

import {
  getAllCategories,
  getQuizCategory,
  getCategoryHandler
} from "./backend/controllers/CategoryController";
import { categories,quizCategory, question } from "./backend/db/categories";

export const callCreateServer =()=> {
    createServer({
        routes() {
            this.namespace = "api"
            this.get("/category", getAllCategories.bind(this));
            this.get("/category/quiz", getQuizCategory.bind(this));
            this.get("/quiz/:categoryId", getCategoryHandler.bind(this));
        },
        models: {
            category: Model,
            quiz :Model,
            question :Model
        },
        seeds(server){
            server.logging=false;
            categories.forEach(item => server.create("category",{...item}))
            quizCategory.forEach(item => server.create("quiz",{...item}))
            question.forEach(item => server.create("question",{...item}))
        }
    })
}