import Joi from "@hapi/joi";
import { RegisterForm } from "../../types/RegisterForm";

const formInitalsValues = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  password: ""
};

const validateForm = (form: RegisterForm): Joi.ValidationResult => {
  const schema = Joi.object({
    username: Joi.string().min(4).max(255).required(),
    firstname: Joi.string().min(1).max(255).required(),
    lastname: Joi.string().min(1).max(255).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(8).max(255).required()
  });
  return schema.validate(form);
};

export { formInitalsValues, validateForm };
