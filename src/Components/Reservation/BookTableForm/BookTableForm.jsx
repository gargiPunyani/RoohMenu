import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { db } from "../../../Firebase.jsx";
import { reservationSchema } from "./Schema/ValidationSchema.jsx";
import emailjs from "emailjs-com";

const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const initialValues = {
  name: "",
  email: "",
  phone: "",
  people: "",
  date: new Date().toISOString().slice(0, 10),
  time: getCurrentTime(),
  message: "",
  current_year: new Date().getFullYear(),
};
const BookTableForm = () => {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: reservationSchema,
      onSubmit: async (values, action) => {
        const {
          name,
          email,
          phone,
          people,
          date,
          time,
          message,
          current_year,
        } = values;

        // 1. Save to Firebase
        try {
          const res = await addDoc(collection(db, "reservations"), {
            name,
            email,
            phone,
            people,
            date,
            time,
            message,
            current_year: new Date().getFullYear(),
          });
        } catch (err) {}

        // 2. Send Email via EmailJS
        try {
          await emailjs.send(
            //  'smtp_roohcafe',
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
              name,
              email,
              phone,
              people,
              date,
              time,
              message,
              current_year,
            },
            import.meta.env.VITE_PUBLIC_ID
          );
        } catch (error) {}

        // 3. Reset form and alert
        action.resetForm();
        alert("Our team will contact you soon");
      },
    });

  return (
    <div className="reservationRight">
      <div className="reservationOuter borderRadius12">
        <div className="reservationInner">
          <div className="reserveInnerHeading textCenter">
            <div className="uppercase h3 textCenter primaryColor">
              <h3>reservation</h3>
            </div>
            <div className="reservePara h5 mt20 secondaryColor">
              <p>
                Secure your spot at Rooh, where Indian curries, Mexican hotpots,
                and signature rolls create an unforgettable dining experience.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="reservationForm ">
              <div className="borderRadius8 mt20 ">
                <input
                  className="inputForm borderRadius8"
                  name="name"
                  value={values.name}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                />
                {errors.name && touched.name ? (
                  <p className="validationError reservationError">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div className="borderRadius8 mt20">
                <input
                  className="inputForm borderRadius8"
                  name="email"
                  value={values.email}
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your email"
                />
                {errors.email && touched.email ? (
                  <p className="validationError reservationError">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div className="borderRadius8 mt20">
                <input
                  className="inputForm borderRadius8"
                  name="phone"
                  value={values.phone}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Number"
                />
                {errors.phone && touched.phone ? (
                  <p className="validationError reservationError">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
              <div className="reservationInput  dFlex gap12 secondaryColor">
                <div className="resevationDetails borderRadius8 mt20">
                  <input
                    className="inputForm borderRadius8"
                    name="people"
                    value={values.people}
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Number of people 1-10"
                    max={10}
                    min={0}
                  />
                  {errors.people && touched.people ? (
                    <p className="validationError reservationError">
                      {errors.people}
                    </p>
                  ) : null}
                </div>
                <div className="resevationDetails mt20 ">
                  <input
                    id="myDate"
                    className="inputForm borderRadius8 myDate pointer dateInput"
                    name="date"
                    value={values.date}
                    type="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {/* 25-11-24 */}
                  {errors.date && touched.date ? (
                    <p className="validationError reservationError">
                      {errors.date}
                    </p>
                  ) : null}
                </div>
                <div className="resevationDetails borderRadius8 mt20">
                  <input
                    className="myTime inputForm borderRadius8 pointer"
                    name="time"
                    value={values.time}
                    type="time"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.time && touched.time ? (
                    <p className="validationError reservationError">
                      {errors.time}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="borderRadius8 mt20">
                <input
                  className="inputForm borderRadius8"
                  name="message"
                  value={values.message}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Message"
                />
              </div>
              <div className="mt20 pointer" onClick={handleSubmit}>
                <button
                  className="submit borderRadius12 uppercase font16 pointer "
                  type="submit"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTableForm;
