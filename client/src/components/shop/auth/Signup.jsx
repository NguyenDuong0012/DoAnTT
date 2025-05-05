import React, { Fragment, useState } from "react";
import { signupReq } from "./fetchApi";
import { useSnackbar } from "notistack";

const Signup = ({ onSignupSuccess }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    error: {},
    loading: false,
    success: false,
  });

  const { enqueueSnackbar } = useSnackbar();

  const alert = (msg, type) =>
    msg && <div className={`text-sm text-${type}-500`}>{msg}</div>;

  const formSubmit = async () => {
    setData({ ...data, loading: true });

    if (data.cPassword !== data.password) {
      return setData({
        ...data,
        error: {
          cPassword: "Password doesn't match",
          password: "Password doesn't match",
        },
        loading: false,
      });
    }

    try {
      const responseData = await signupReq({
        name: data.name,
        email: data.email,
        password: data.password,
        cPassword: data.cPassword,
      });

      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
          cPassword: "",
        });
      } else if (responseData.success) {
        enqueueSnackbar("Đăng ký tài khoản thành công!", {
          variant: "success",
        });
        onSignupSuccess();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="text-center text-2xl mb-6">Đăng ký</div>
      <form className="space-y-4">
        {data.success && alert(data.success, "green")}

        <div className="flex flex-col">
          <label htmlFor="name">
            Tên <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                name: e.target.value,
              })
            }
            value={data.name}
            type="text"
            id="name"
            className={`${
              data.error.name ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {alert(data.error.name, "red")}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">
            Email <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                email: e.target.value,
              })
            }
            value={data.email}
            type="email"
            id="email"
            className={`${
              data.error.email ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {alert(data.error.email, "red")}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">
            Mật khẩu <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                password: e.target.value,
              })
            }
            value={data.password}
            type="password"
            id="password"
            className={`${
              data.error.password ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {alert(data.error.password, "red")}
        </div>

        <div className="flex flex-col">
          <label htmlFor="cPassword">
            Nhập lại mật khẩu <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                cPassword: e.target.value,
              })
            }
            value={data.cPassword}
            type="password"
            id="cPassword"
            className={`${
              data.error.cPassword ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {alert(data.error.cPassword, "red")}
        </div>

        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              className="px-4 py-2 focus:outline-none border mr-1"
            />
            <label htmlFor="rememberMe">
              Duy trì đăng nhập <span className="text-sm text-gray-600">*</span>
            </label>
          </div>
          <a className="block text-gray-600" href="/">
            Quên mật khẩu?
          </a>
        </div>

        <div
          onClick={formSubmit}
          style={{ background: "#303031" }}
          className="px-4 py-2 text-white text-center cursor-pointer font-medium"
        >
          Tạo tài khoảng
        </div>
      </form>
    </Fragment>
  );
};

export default Signup;
