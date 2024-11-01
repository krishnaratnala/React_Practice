// import React,{useContext} from 'react' 
// import { logincontext } from './App'


// function SinglePost(){
//   const login=useContext(logincontext);
//   console.log(login);
//   return(
//     <div>
//       <h1>hell this is {login}</h1>
//     </div>

//   )

// }
// export default SinglePost;

// import React,{useEffect, useState} from "react";
// import axios from "axios"

// function singlepost (){
//   const[products,setproducts]=useState([])
//   useEffect(()=>{
//     axios.get("https://dummyjson.com/products?sortBy=title&order=asc").then((res)=>setproducts(res.data.products))
//   },[])
//   return(
//     <div>
//       {products.map((product)=>(
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <p>{product.description}</p>
//           <img src={product.image} alt={product.title}/>
//         </div>
//       ))}
//     </div>
//   )
// }

// SinglePost.jsx
// SinglePost.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/home";
// import Profile from "./pages/profile";
// import Navbar from "./Components/navbar";
// import UserDetails from "./user/usedetails.jsx";

// function SinglePost() {
//   return (
//     <Router>
//       <Navbar />
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />  {/* Home route */}
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/user" element={<UserDetails />} />
//           {/* Catch-all route to redirect to Home if no other routes match */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default SinglePost;

import React from "react";
import { Formik, Form, Field } from "formik";
import { signupSchema } from "./yup_Schemas/yup";  // Correct import path

function SinglePost() {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const onSubmit = (values, actions) => {
    console.log("Form values: ", values); // Logs the form values on submit
    actions.resetForm(); // Clear form after submit
  };

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={onSubmit}>
        {({ errors, touched }) => (
          <Form className="form">
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" placeholder="Enter your name" />
            {/* <input
              type="text"
              id="name"
              value={values.name}
              placeholder="Enter your name"
              onBlur={handleBlur}
              onChange={handleChange}
            /> */}
            {errors.name && touched.name && <div className="error">{errors.name}</div>}
            <br />

            <label htmlFor="phone">Phone:</label>
            <Field type="number" id="phone" name="phone" placeholder="Enter your Phone number" />
            {/* <input
              type="text"
              id="phone"
              value={values.phone}
              placeholder="Enter your phone number"
              onBlur={handleBlur}
              onChange={handleChange}
            /> */}
            {errors.phone && touched.phone && <div className="error">{errors.phone}</div>}
            <br />

            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" placeholder="Enter your email" />
            {/* <input
              type="email"
              id="email"
              value={values.email}
              placeholder="Enter your email"
              onBlur={handleBlur}
              onChange={handleChange}
            /> */}
            {errors.email && touched.email && <div className="error">{errors.email}</div>}
            <br />

            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" placeholder="Enter your password" />
            {/* <input
              type="password"
              id="password"
              value={values.password}
              placeholder="Enter your password"
              onBlur={handleBlur}
              onChange={handleChange}
            /> */}
            {errors.password && touched.password && <div className="error">{errors.password}</div>}
            <br />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
            {/* <input
              type="password"
              id="confirmPassword"
              value={values.confirmPassword}
              placeholder="Confirm your password"
              onBlur={handleBlur}
              onChange={handleChange}
            /> */}
            {errors.confirmPassword && touched.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
            <br />

            <button id="submit-button" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SinglePost;
