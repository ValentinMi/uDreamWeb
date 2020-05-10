import Joi from "@hapi/joi";
import { LoginForm } from "../../types/LoginForm";

const formInitalsValues = {
  email: "",
  password: ""
};

const validateForm = (form: LoginForm): Joi.ValidationResult => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(8).max(255).required()
  });
  return schema.validate(form);
};

export { formInitalsValues, validateForm };
