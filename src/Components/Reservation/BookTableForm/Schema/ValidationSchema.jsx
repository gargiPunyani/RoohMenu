import * as Yup from "yup";

const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;

// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const reservationSchema = Yup.object({
  name: Yup.string().min(3).max(14).required("Please enter name"),
  email: Yup.string()
    .email()
    .matches(emailregex, "invalid email")
    .required("Enter Email"),
  phone: Yup.string().required("Enter Phone Number").length(10,"10 digit number is allowed"),
  people: Yup.string().max(50).required("Enter number of People"),
  date: Yup.date().required("Enter date"),
  time: Yup.string().required("Enter time slot"),
});
