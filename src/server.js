import { createServer, Model } from "miragejs";

import {
  getAllCategories,
} from "./backend/controllers/CategoryController";
import { categories } from "./backend/db/categories";

export const callCreateServer =()=> {
    createServer({
        routes() {
            this.namespace = "api"
            this.get("/category", getAllCategories.bind(this));
        },
        models: {
            category: Model,
        },
        seeds(server){
            server.logging=false;
            categories.forEach(item => server.create("category",{...item}))
        }
    })
}