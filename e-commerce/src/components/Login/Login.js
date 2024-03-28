import React from "react";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserActionCreator } from "../../store/actions/userAction";
import { FETCH_STATES } from "../../store/reducers/productReducer";
import { Spinner } from "@material-tailwind/react";

export default function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const push = useHistory();

  const onFormSubmit = (formData) => {
    dispatch(fetchUserActionCreator(formData));
  };

  const userLoading = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.Fetching
  );

  const userLoaded = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.Fetched
  );

  if (userLoaded) {
    push.push("/");
  }

  return (
    <div className="sm:w-[800px] m-auto w-full  ">
      <ToastContainer />
      <div className="shadow-xl shadow-blue-gray-300 border-light-green-50 flex flex-col justify-center items-center gap-4 py-28 m-10">
        <i className="bx bx-lock px-4 py-3 bg-primary-color rounded-full text-3xl text-center"></i>
        <div className="w-[35rem] flex justify-center items-center gap-20  ">
          {" "}
          <NavLink
            to="/login"
            className="font-bold text-2xl hover:text-primary-color underline"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="font-bold text-2xl hover:text-primary-color underline"
          >
            Sign Up
          </NavLink>
        </div>

        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className=" container m-auto  flex flex-col justify-center items-center px-2  "
        >
          <div className=" flex flex-col sm:w-[35rem] w-full ">
            <label className="font-bold text-xl p-3">E-mail:</label>
            <input
              autoFocus
              placeholder="E-mail"
              className="p-4 rounded-md border border-[#DADADA] text-black"
              type="email"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email is not valid",
                },
              })}
              invalid={!!errors.email?.message}
            />
            <div className="text-red-600">{errors.email?.message}</div>
          </div>
          <div className=" flex flex-col sm:w-[35rem] w-full ">
            <label className="font-bold text-xl p-3">Password:</label>
            <input
              placeholder="Password"
              className="p-4 rounded-md border border-[#DADADA] text-black"
              type="password"
              name={"password"}
              {...register("password", {
                required: "Password is required.",
              })}
              invalid={!!errors.password?.message}
            />
            <div className="text-red-600">{errors.password?.message}</div>
          </div>

          <button
            className="flex justify-center items-center bg-primary-color px-6 py-3 rounded-md text-xl sm:w-[35rem] w-full  mt-6 hover:bg-[rgba(35,165,240,0.79)] cursor-pointer text-center"
            type="submit"
            formNoValidate="formnovalidate"
          >
            {userLoading ? <Spinner /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
