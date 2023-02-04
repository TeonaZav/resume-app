import * as Yup from "yup";
const geoSymbols = /^[ა-ჰ]+$/g;

export const schemaGeneral = Yup.object({
  firstName: Yup.string()
    .min(2, "სახელი ძალიან მოკლეა")
    .matches(geoSymbols, "გთხოვთ მიუთითოთ ქართული სიმბოლოები")
    .required("სახელის მითითება სავალდებულოა!"),
  lastName: Yup.string()
    .min(2, "გვარი ძალიან მოკლეა")
    .matches(geoSymbols, "გთხოვთ მიუთითოთ ქართული სიმბოლოები")
    .required("გვარის მითითება სავალდებულოა!"),
  about: Yup.string().notRequired(),
  email: Yup.string()
    .email("არასწორი ფორმატი")
    .required("ელ. ფოსტის მითითება სავალდებულოა")
    .test(
      "",
      "მითითებული მისამართი არასწორია",
      (val) => `${val}`.slice(-12) === "@redberry.ge"
    ),
  mobile: Yup.string()
    .required("Password cannot be empty")
    .min(6, "Password too short!")
    .max(28, "Password too long!"),
});
