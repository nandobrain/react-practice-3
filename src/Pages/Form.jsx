import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

export default function Form() {
    

    const schema = yup.object().shape({
        fullName: yup.string().required("your Full Name is Required"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().min().oneOf([yup.ref("password"), null]).required(),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data)
    }
       
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("Email")}/>
            <input type="number" placeholder="Age..." {...register("Age")}/>
            <input type="Password" placeholder="Password..." {...register("Password")}/>
            <input type="Password" placeholder="Confirm Password..." {...register("Confirm Password")}/>
            <input type="Submit"  />
        </form>
    )
}