const validation = (values) => {
  let errors = {};

  if (values.email === "") {
    errors.email = "Digite seu e-mail";
  }

  if (values.password === "") {
    errors.password = "Digite sua senha";
  }

  return errors;
};

export default validation;
