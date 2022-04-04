import { createServer, Model } from "miragejs";

import {
  getAllCategories,
  getQuizCategory
} from "./backend/controllers/CategoryController";
import { categories,quizCategory } from "./backend/db/categories";

export const callCreateServer =()=> {
    createServer({
        routes() {
            this.namespace = "api"
            this.get("/category", getAllCategories.bind(this));
            this.get("/category/quiz", getQuizCategory.bind(this));
        },
        models: {
            category: Model,
            quiz :Model
        },
        seeds(server){
            server.logging=false;
            categories.forEach(item => server.create("category",{...item}))
            quizCategory.forEach(item => server.create("quiz",{...item}))
        }
    })
}