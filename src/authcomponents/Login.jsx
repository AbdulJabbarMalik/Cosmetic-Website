import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of i

  return (
    <>
      <div className="flex flex-col items-start text-start gap-4 w-[340px]">
        <h2 className="text-start font-normal w-[82px] h-[56px] text-[34px]">
          Login
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
            {...register("example", { required: true })}
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
            {...register("exampleRequired", { required: true })}
          />
          <img className="w-[20px] h-[15px] absolute top-8 right-4" src="/eye.svg" alt="" />
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
            <span className="text-red-500">Forgot Password?</span>
          </div>

          <Link to="/home" className="rounded-none self-end" ><Button
            className="rounded-none w-[65px] h-[40px] tracking-[3px]   font-semibold text-[11.2px] "
            type="submit"
          >
            LOGIN
          </Button></Link>

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
              <span className="opacity-50">Don't have an account ?{" "}</span>
              <span className="text-red-600">SIGN UP</span>
            </p>
          </div>

        </form>
      </div>
    </>
  );
}
