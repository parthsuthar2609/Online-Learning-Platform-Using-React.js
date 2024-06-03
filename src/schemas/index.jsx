import * as Yup from "yup";

export const signupSchema = Yup.object({
    name : Yup.string().min(3).required("Please Enter Your First Name"),
    lastname : Yup.string().min(3).required("Please Enter Your Last Name"),
    email : Yup.string().email().required("Please Enter Valid Email Id"),
    password : Yup.string().min(6).required("Please Enter Valid Password"),
    address :  Yup.string().min(6).required("Please Enter Address"),
    state : Yup.string().min(3).required("Please Enter State"),
    pinCode : Yup.string().min(6).required("Please Enter Pin Code"),
    projects : Yup.string().min(3).required("Please Enter Projects"),
    country : Yup.string().min(3).required("Please Enter Country"),
});