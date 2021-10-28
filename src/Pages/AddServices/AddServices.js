import React from 'react';
import { useForm } from "react-hook-form";
import "./AddServices.css"
const axios = require('axios').default;

const AddServices = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        // fetch("http://localhost:5000/services",{
        //     method:"POST",
        //     headers:{
        //         "content-type":"application/json"
        //     },
        //     body:JSON.stringify(data)
        // })
        // .then()

        //axios for post method
        axios.post("https://protected-lowlands-75573.herokuapp.com/services",data)
        .then(res=>{
            // console.log(res);
            if(res.data.insertedId){
                alert("service added successfully");
            }
        })
        
        //reset input field
        reset();
    };
    return (
        <div className="services">
            <h1>Add Services what you want :</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="services ame" />
                <textarea {...register("description")} placeholder="description" />
                <input type="text" {...register("img")} placeholder="img-url" />
                <input type="number" {...register("price")} placeholder="price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;