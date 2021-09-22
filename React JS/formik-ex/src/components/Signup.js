/** @format */

import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(10, "Must be 10 char or less")
            .required("Required"),
        lastName: Yup.string()
            .max(10, "Must be 10 char or less")
            .required("Required"),
        email: Yup.string().email("Invalid Email").required("Email Required"),
        password: Yup.string()
            .min(6, "Must be 6 char or more")
            .required("Password Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password doesn't matched")
            .required("Confirm Password Required"),
    });

    return (
        <>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <div className="col-md-5">
                        <h1>SignUp</h1>
                        <Form>
                            <TextField
                                label="First Name"
                                name="firstName"
                                type="text"
                            />
                            <TextField
                                label="Last Name"
                                name="lastName"
                                type="text"
                            />
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                            />
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                            />
                            <TextField
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                            />
                            <button className="btn btn-dark mt-3" type="submit">
                                Register
                            </button>
                            <button
                                className="btn btn-danger mt-3 ms-3"
                                type="reset"
                            >
                                Reset
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    );
};

export default Signup;
