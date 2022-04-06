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

export const getQuizCategory = function (schema, request) {
  try {
    return schema.quizzes.all()
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

export const getCategoryHandler = function (schema, request) {
  const categoryId = request.params.categoryId;
  try {
    const questionList  = schema.questions.all().models.filter(item=>item[categoryId]);
    return new Response(200, {}, { questionList });
  } catch (error) {
    new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};