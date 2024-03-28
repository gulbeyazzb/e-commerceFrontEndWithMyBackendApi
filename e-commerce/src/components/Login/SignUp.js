import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchRolesActionCreator } from "../../store/actions/globalAction";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Signup = () => {
  const [sellerRole, setSellerRole] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [roleId, setRoleId] = useState();
  const dispatch = useDispatch();

  const roles = useSelector((store) => store.global.roles);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
    mode: "onChange",
  });

  const push = useHistory();

  const onFormSubmit = (formData) => {
    let postData = {};
    if (roleId === "customer") {
      postData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };
    } else if (roleId === "store") {
      postData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        store: {
          name: formData.store.name,
          tax_no: formData.store.tax_no,
          bank_account: formData.store.bank_account,
        },
      };
    }

    setSpinner(true);
    const signupUrl = "http://localhost:8888/auth/signup/";
    axios
      .post(signupUrl, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast("signup is successfully");
        setTimeout(() => {
          push.push("/login");
        }, 2000);
      })
      .catch((err) => {
        setSpinner(false);
        console.error(err);
        toast.error("Login olurken bir hata ile karşılaşıldı!");
      });
  };

  const changeOptionHandle = (e) => {
    const selectedId = e.target.value;
    setRoleId(selectedId);
    selectedId === "store" ? setSellerRole(true) : setSellerRole(false);
  };

  useEffect(() => {
    dispatch(fetchRolesActionCreator());
  }, []);

  return (
    <div className="sm:w-[800px] w-full m-auto ">
      <ToastContainer />
      <div className="shadow-xl shadow-blue-gray-300 border-light-green-50 flex flex-col justify-center items-center gap-4 py-28 m-10">
        <i className="bx bx-lock px-4 py-3 bg-primary-color rounded-full text-3xl text-center"></i>
        <div className="w-[35rem] flex justify-center items-center gap-20 ">
          {" "}
          <NavLink
            to="/login"
            className="font-bold text-2xl hover:text-primary-color underline "
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="font-bold text-2xl hover:text-primary-color underline "
          >
            Sign Up
          </NavLink>
        </div>

        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className=" container m-auto  flex flex-col justify-center items-center px-2 "
        >
          <div className="flex sm:flex-row flex-col gap-4 w-full container m-auto justify-center items-center">
            <div className="sm:w-[35rem] w-full flex flex-col ">
              <label className="font-bold text-xl p-3">Name:</label>
              <input
                autoFocus
                placeholder="Name"
                className="p-4 rounded-md border border-[#DADADA] text-black"
                {...register("name", {
                  required: "Name is required!",
                  minLength: {
                    value: 3,
                    message: "At least 3 char is must be",
                  },
                })}
                invalid={!!errors.name?.message}
              />
              <div className="text-red-600">{errors.name?.message}</div>
            </div>
          </div>
          <div className=" flex flex-col sm:w-[35rem] w-full ">
            <label className="font-bold text-xl p-3">E-mail:</label>
            <input
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
              className={`p-4 rounded-md border border-[#DADADA] text-black`}
              type="password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Must be at least 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                  message:
                    "Your password must contain uppercase letters, lowercase letters, numbers and special characters.",
                },
              })}
            />
            <div className="text-red-600 invalid-feedback">
              {errors.password?.message}
            </div>
          </div>

          <div className=" flex flex-col sm:w-[35rem] w-full ">
            <label className="font-bold text-xl p-3">Confirm Password:</label>
            <input
              type={"password"}
              id="password2"
              className="p-4 rounded-md border border-[#DADADA] text-black"
              placeholder="***************"
            />
          </div>

          <div className="flex flex-col sm:w-[35rem] w-full ">
            <label className="font-bold text-xl p-3">Role:</label>

            <select
              className="p-4 rounded-md border border-[#DADADA] text-black"
              {...register("role")}
              onClick={(e) => changeOptionHandle(e)}
            >
              {roles?.map((role, i) => (
                <option
                  key={i}
                  value={role.authority}
                  className=" text-lg font-bold"
                >
                  {role.authority}
                </option>
              ))}
            </select>
          </div>
          {sellerRole && (
            <div className="sm:w-[1050px] w-full flex flex-col justify-center items-center gap-4">
              <div className=" flex flex-col sm:w-[35rem] w-full ">
                <label className="font-bold text-xl p-3">Store Name:</label>
                <input
                  placeholder="Store Name"
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  {...register("store.name", {
                    required: "Store name is required!",
                    minLength: {
                      value: 3,
                      message: "At least 3 characters must be entered",
                    },
                  })}
                />
                <div className="text-red-600">
                  {errors.store?.name?.message}
                </div>
              </div>
              <div className=" flex flex-col sm:w-[35rem] w-full ">
                <label className="font-bold text-xl p-3">Store Tax ID:</label>
                <input
                  placeholder="TXXXXVXXXXXX"
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  {...register("store.tax_no", {
                    required: "Tax ID is required!",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/ /*[1-9](\d{9})([0,2,4,6,8]{1})*/,
                      message: "TAX ID is not valid",
                    },
                  })}
                />
                <div className="text-red-600">
                  {errors.store?.tax_no?.message}
                </div>
              </div>
              <div className=" flex flex-col sm:w-[35rem] w-full ">
                <label className="font-bold text-xl p-3">Iban:</label>
                <input
                  placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  {...register("store.bank_account", {
                    required: "Iban is required!",
                    pattern: {
                      value:
                        /TR[a-zA-Z0-9]{2}s?([0-9]{4}s?){1}([0-9]{1})([a-zA-Z0-9]{3}s?)([a-zA-Z0-9]{4}s?){3}([a-zA-Z0-9]{2})s?/,
                      message: "Iban is not valid",
                    },
                  })}
                />
                <div className="text-red-600">
                  {errors.store?.bank_account?.message}
                </div>
              </div>
            </div>
          )}

          <button
            className="flex justify-center items-center bg-primary-color px-6 py-3 rounded-md text-xl sm:w-[35rem] w-full  mt-6 hover:bg-[rgba(35,165,240,0.79)] cursor-pointer text-center"
            type="submit"
            formNoValidate="formnovalidate"
            disabled={spinner}
          >
            {spinner ? <Spinner className="text-center" /> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
