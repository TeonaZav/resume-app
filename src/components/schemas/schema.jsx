import * as Yup from "yup";
const geoSymbols = /^[ა-ჰ]+$/g;
const mobileIndexes = [
  59, 58, 57, 55, 52, 51, 14, 11, 99, 98, 96, 95, 93, 91, 77, 79, 68, 71, 70,
  74, 92, 97,
];
const SUPPORTED_FORMATS = ["image/jpg", "image/png", "image/jpeg", "image/gif"];
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif"];
export const schemaGeneral = Yup.object({
  name: Yup.string()
    .min(2, "მინიმუმ 2 ასო")
    .matches(geoSymbols, "ქართული ასოები")
    .required("სახელის მითითება სავალდებულოა!"),
  surname: Yup.string()
    .min(2, "მინიმუმ 2 ასო")
    .matches(geoSymbols, "ქართული ასოები")
    .required("გვარის მითითება სავალდებულოა!"),
  about_me: Yup.string().notRequired(),
  email: Yup.string()
    .email("არასწორი ფორმატი")
    .required("ელ. ფოსტის მითითება სავალდებულოა")
    .test(
      "",
      "უნდა მთავრდებოდეს @redberry.ge-ით",
      (val) => `${val}`.slice(-12) === "@redberry.ge"
    ),
  phone_number: Yup.string()
    .test((val) => `${val}`.replace(/\s/g, "").slice(0, -8) === "+9955")
    .test((val) =>
      `${val}`
        .replace(/\s/g, "")
        .slice(-6)
        .match(/^[0-9]+$/g)
    )
    .test((val) =>
      mobileIndexes.includes(Number(`${val}`.replace(/\s/g, "").slice(5, 7)))
    )
    .min(17)
    .max(17)
    .required(""),
  image: Yup.mixed().required("Required Field"),
});

export const schemaExperience = Yup.object({
  position: Yup.string().min(2, "მინიმუმ 2 სიმბოლო").required("სავალდებულო"),
  employer: Yup.string().min(2, "მინიმუმ 2 სიმბოლო").required("სავალდებულო"),
  description: Yup.string().required("სავალდებულო"),
});

export const schema = Yup.object({
  name: Yup.string()
    .min(2, "მინიმუმ 2 ასო")
    .matches(geoSymbols, "ქართული ასოები")
    .required("სახელის მითითება სავალდებულოა!"),
  surname: Yup.string()
    .min(2, "მინიმუმ 2 ასო")
    .matches(geoSymbols, "ქართული ასოები")
    .required("გვარის მითითება სავალდებულოა!"),
  about_me: Yup.string().notRequired(),
  email: Yup.string()
    .email("არასწორი ფორმატი")
    .required("ელ. ფოსტის მითითება სავალდებულოა")
    .test(
      "",
      "უნდა მთავრდებოდეს @redberry.ge-ით",
      (val) => `${val}`.slice(-12) === "@redberry.ge"
    ),
  phone_number: Yup.string()
    .test((val) => `${val}`.replace(/\s/g, "").slice(0, -8) === "+9955")
    .test((val) =>
      `${val}`
        .replace(/\s/g, "")
        .slice(-6)
        .match(/^[0-9]+$/g)
    )
    .test((val) =>
      mobileIndexes.includes(Number(`${val}`.replace(/\s/g, "").slice(5, 7)))
    )
    .min(17)
    .max(17)
    .required(""),

  image: Yup.mixed().required("Required Field"),
  experiences: Yup.array().of(
    Yup.object().shape({
      position: Yup.string()
        .min(2, "მინიმუმ 2 სიმბოლო")
        .required("სავალდებულო"),
      employer: Yup.string()
        .min(2, "მინიმუმ 2 სიმბოლო")
        .required("სავალდებულო"),
      description: Yup.string().required("აღწერის მითითება სავალდებულო").min(1),
      start_date: Yup.date().required("თარიღის მითითება სავალდებულოა"),
      due_date: Yup.date().required("თარიღის მითითება სავალდებულოა"),
    })
  ),
});
