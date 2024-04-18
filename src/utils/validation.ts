import Joi from 'joi';

export const contactFormSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
});

export const createBlogSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.binary(), // Accepts a binary file
});

export const updateBlogSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  image: Joi.binary(), // Accepts a binary file
});



export const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const emailSchema = Joi.string().email().required();
export const RemailSchema = Joi.string().email().required();

export const passwordSchema = Joi.string().min(6).required();
