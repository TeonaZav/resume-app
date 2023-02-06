import * as Yup from "yup";
const geoSymbols = /^[ა-ჰ]+$/g;
const mobileIndexes = [
  59, 58, 57, 55, 52, 51, 14, 11, 99, 98, 96, 95, 93, 91, 77, 79, 68, 71, 70,
  74, 92, 97,
];

export const schemaGeneral = Yup.object({
  name: Yup.string()
    .min(2, "სახელი ძალიან მოკლეა")
    .matches(geoSymbols, "გთხოვთ მიუთითოთ ქართული სიმბოლოები")
    .required("სახელის მითითება სავალდებულოა!"),
  surname: Yup.string()
    .min(2, "გვარი ძალიან მოკლეა")
    .matches(geoSymbols, "გთხოვთ მიუთითოთ ქართული სიმბოლოები")
    .required("გვარის მითითება სავალდებულოა!"),
  about_me: Yup.string().notRequired(),
  email: Yup.string()
    .email("არასწორი ფორმატი")
    .required("ელ. ფოსტის მითითება სავალდებულოა")
    .test(
      "",
      "მითითებული მისამართი არასწორია",
      (val) => `${val}`.slice(-12) === "@redberry.ge"
    ),
  phone_number: Yup.string()
    .test((val) => `${val}`.slice(0, -8) === "+9955")
    .test((val) => `${val}`.slice(-6).match(/^[0-9]+$/g))
    .test((val) => mobileIndexes.includes(Number(`${val}`.slice(5, 7))))
    .min(13)
    .max(13)
    .required(""),
});

export const schemaExperience = Yup.object({
  position: Yup.string().min(2, "მინიმუმ 2 სიმბოლო").required("სავალდებულო"),
  employer: Yup.string().min(2, "მინიმუმ 2 სიმბოლო").required("სავალდებულო"),
  description: Yup.string().required("სავალდებულო"),
});
