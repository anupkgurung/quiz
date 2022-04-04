import { Response } from "miragejs";


export const getAllCategories = function (schema, request) {
  try {
    return schema.categories.all()
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
