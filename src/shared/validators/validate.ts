import Joi from 'joi';
// name may contain spaces
const nameRegex = /^[a-zA-Z0-9 ]+$/;
// username start with @ and not contain space
const userNameRegex = /^@[a-zA-Z0-9]{2,30}$/;
const nameSchema = Joi.object({
  name: Joi.string().required().regex(new RegExp(nameRegex)).min(2).max(20),
});
const usernameSchema = Joi.object({
  username: Joi.string().required().min(2).max(20),
});
const titleSchema = Joi.object({
  title: Joi.string().required().min(3).max(200),
});
const descriptionSchema = Joi.object({
  description: Joi.string().required().min(10).max(100),
});

export function isValidName(name: string): boolean {
  if (!name) return false;
  const result = nameSchema.validate({ name });
  return result.error ? false : true;
}

export function isValidUsername(username: string): boolean {
  if (!username) return false;
  const result = usernameSchema.validate({ username });
  return result.error ? false : true;
}

export function isValidTitle(title: string): boolean {
  if (!title) return false;
  const result = titleSchema.validate({ title });
  return result.error ? false : true;
}

export function isValidDescription(description: string): boolean {
  if (!description) return false;
  const result = descriptionSchema.validate({ description });
  return result.error ? false : true;
}
