import Joi from "joi";

export const validateInsertData = (data: any) => {
  const schema = Joi.object({
    projectId: Joi.string().required(),
    databaseName: Joi.string().required(),
    collection: Joi.string().required(),
    data: Joi.object().required(),
  });

  const { error } = schema.validate(data);
  if (error) {
    throw new Error(`Validation error: ${error.message}`);
  }
}