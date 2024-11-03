import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword  } from "firebase/auth";
import Swal from 'sweetalert2'
export function Login() {

  const [issignup , setIssignup] = useState(false)
  const [email , setEmail] = useState(null)
  const [pass , setPass] =useState(null)
  const navigate = useNavigate()



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const firebaseConfig = {
    apiKey: "AIzaSyCCVJB0RlgsMTxoH6TYlsYN6NJZdxd19Sw",
    authDomain: "cosmetic-website-10366.firebaseapp.com",
    projectId: "cosmetic-website-10366",
    storageBucket: "cosmetic-website-10366.firebasestorage.app",
    messagingSenderId: "636946372599",
    appId: "1:636946372599:web:aac7853500d2403744c0f2",
    measurementId: "G-C01BC7Z74D",
  };
  const onSubmit = (data) => {

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app)

    if(issignup == true){

      signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        Swal.fire({
          title: 'Login',
          text: 'Successfully',
          icon: 'success',
          confirmButtonText: 'Okay',
          confirmButtonColor:'green'
        }).then(()=> navigate('/home') )
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: 'Error',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'Okay',
           confirmButtonColor:'red'
        })
      });
      
      }
      else {
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          Swal.fire({
            title: 'Sign Up',
            text: 'Successfully',
            icon: 'success',
            confirmButtonText: 'Okay',
            confirmButtonColor:'green'
          }).then(()=> setIssignup(true) )
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
            title: 'Error',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'Okay',
            confirmButtonColor:'red',
           
          })
          // ..
        });
      }

    }
    

    

  

  console.log(watch("example")); // watch input value by passing the name of i

  return (
    <>
      <div className="flex flex-col items-start text-start gap-4 w-[340px] ">
        <h2 className="text-start font-normal w-max h-[56px] text-[34px] p-1">

          {issignup == true ? 'Login' : 'Sign Up' }
         
        </h2>
        <hr className="border border-red-600 w-[57px]" />
        {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form
          className="login-form flex flex-col gap-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="inp-field email"
            placeholder="example@gmail.com"
            {...register("email", { required: true })}
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          {errors.example && (
            <span className="text-red-500">Username is required</span>
          )}

          {/* include validation with required or other standard HTML validation rules */}
          <div className="relative">
            <input
              className="inp-field pass w-full"
              placeholder="password"
              type="password"
              {...register("password", { required: true })}
              value={pass}
              onChange={(e)=> setPass(e.target.value)}
            />
            <img
              className="w-[20px] h-[15px] absolute top-8 right-4"
              src="/eye.svg"
              alt=""
            />
          </div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && (
            <span className="text-red-500">Password is required</span>
          )}

          <div className="flex flex-row justify-between items-center">
            <p className="text-sm flex flex-row gap-1">
              <input type="checkbox" />
              <span className="opacity-50">Remember me</span>
            </p>

            {issignup && <span className="text-red-500">Forgot Password?</span> }
            
          </div>

          <Button
            className="rounded-none w-max h-[40px] tracking-[3px] self-end   font-semibold text-[11.2px]  "
            type="submit"
          >
            {issignup == true ? 'LOGIN' : 'SIGN UP'}
            
          </Button>

          <span className="self-center text-[20px] font-normal text-[#A5A5A5]">
            OR
          </span>

          <div className="auth-img w-[169px] h-[45px] flex flex-row self-center gap-4">
            <div>
              <img src="/f.svg" alt="facebook" />
            </div>
            <div>
              <img src="/m.svg" alt="mail" />
            </div>
            <div>
              <img src="/twitter.svg" alt="twitter" />
            </div>
          </div>
          <div className="self-center mt-4">
            <p>
              <span className="opacity-50">{issignup == true ? "Don't have an account ?" : "Already have an account ?"} </span>
              <span className="text-red-600 cursor-pointer" onClick={()=> setIssignup(!issignup)}>{issignup == true ? "SIGN UP" : "LOGIN"}</span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
