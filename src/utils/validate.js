export const checkValidateData = (email, password, isSignForm, name) => {
  const isEmailValue = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValue =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const isNameValue =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      name
    );
  if (!isSignForm &&!isNameValue) return "Invalid Name";
  if (!isEmailValue) return "email is not validate";
  if (!isPasswordValue) return "password is not validate";

  return null;
};

// export const checkValidateName = (name) => {
//   const name =
//     /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
//       name
//     );
//   if (!name) return "Invalid Name";
// };
