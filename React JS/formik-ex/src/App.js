/** @format */

import "./App.css";
import rocketImg from "./imgs/rocket.png";
import Signup from "./components/Signup";

const App = () => {
    // const formik = useFormik({
    //     initialValues: {
    //         firstname: "",
    //         lastname: "",
    //         email: "",
    //     },

    //     // custom validation
    //     validate: (values) => {
    //         const errors = {};
    //         if (!values.firstname) {
    //             errors.firstname = "Required";
    //         } else if (values.firstname.length > 7) {
    //             errors.firstname = "Length must be less than 8";
    //         }

    //         if (!values.lastname) {
    //             errors.lastname = "Required";
    //         } else if (values.lastname.length > 7) {
    //             errors.lastname = "Length must be less than 8";
    //         }

    //         if (!values.email) {
    //             errors.email = "Required";
    //         } else if (
    //             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //         ) {
    //             errors.email = "Invalid Email";
    //         }

    //         return errors;
    //     },

    //     //yup validation
    //     validationSchema: Yup.object({
    //         firstname: Yup.string()
    //             .required("Required")
    //             .max(7, "Length must be less than 8")
    //             .min(3, "Length must be more than 3"),
    //         lastname: Yup.string()
    //             .required("Required")
    //             .max(7, "Length must be less than 8")
    //             .min(3, "Length must be more than 3"),
    //         email: Yup.string().required("Required").email("Invalid Email"),
    //     }),

    //     onSubmit: (values) => {
    //         console.log(values);
    //     },
    // });

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <Signup />
                    <div className="col-md-7 d-none d-md-block my-auto">
                        <img
                            className="img img-fluid"
                            src={rocketImg}
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
