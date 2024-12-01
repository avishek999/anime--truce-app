// core imports
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonInput,
  IonLoading,
} from "@ionic/react";
import React, { useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
// icons imports
import { MdLogin } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";


// API imports

import { isLogin , registerUser } from "../../api/api";

// style imports
import "./Auth.scss";
import loginImage from "/auth/log-in-screen-image.webp";
import registerImage from "/auth/register-screen-image.webp";

//interface import
import { IFormValues } from "../../interface/auth";
import { useForm } from "react-hook-form";
import Wrapper from "../../shared/utils/wrapper/Wrapper";

// Dummy Login Data
const FakeLogin = [
  { email: "avishek@fake.com", password: "123456789" },
  { email: "goku@fake.com", password: "123456789" },
];

const Auth: React.FC = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();



  const handleLogin = async (data: IFormValues) => {
    console.log("Login data:", data);
    setShowLoading(true);
  
    // Use the loginUser function from the api.ts file
    const response = await isLogin(data.email, data.password);
  
    if (response.success) {
      const { token, user } = response.data;
  
      toast.success("Login Successful!", {
        position: "top-center",
        theme: "dark",
        onClose: () => setShowLoading(false),
      });
  
      // Store token in localStorage or cookies
      localStorage.setItem("authToken", JSON.stringify(token));
      setIsAuthenticated(true);
      console.log("Logged-in user:", user);
    } else {
      toast.error(response.error, {
        position: "top-center",
        theme: "dark",
        onClose: () => setShowLoading(false),
      });
    }
  };

  


  const handleRegister = async (data: IFormValues) => {
    console.log("Signup Data:", data);
  
    // Password validation
    if (data.password !== data.confirmPassword) {
      toast.error("Password doesn't match!", {
        position: "top-center",
        theme: "dark",
        onClose: () => setShowLoading(false),
      });
      return;
    }
  
    setShowLoading(true);
  
    try {
    
      const result = await registerUser(data.email, data.password, data.confirmPassword);
  
      console.log("API Response:", result);
  
      toast.success("Sign up Successful!", {
        position: "top-center",
        theme: "dark",
        onClose: () => setShowLoading(false),
      });
  
      reset(); 
    } catch (error: any) {
      console.error("Error:", error);
  
      toast.error(error, {
        position: "top-center",
        theme: "dark",
        onClose: () => setShowLoading(false),
      });
    } finally {
      setShowLoading(false); 
    }
  };

if (isAuthenticated) {
  return <Redirect to="/home" />;
}
  
  return (
    <Wrapper>
      <section className="mt-[100px] px-4">
        <ToastContainer transition={Slide} autoClose={3000} hideProgressBar />

        <img src={isLogIn ? loginImage : registerImage} />
        <IonCard className="backdrop-blur-sm  bg-black/40">
          <IonCardContent>
            <form
              onSubmit={handleSubmit(isLogIn ? handleLogin : handleRegister)}
            >
              <IonInput
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
                fill="outline"
                labelPlacement="floating"
                label="Email"
                type="email"
                placeholder="Enter email"
                color="dark"
              />
              {errors.email && (
                <p className="text-[var(--primary-danger-text)]">
                  {errors.email.message}
                </p>
              )}

              <IonInput
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must be at lest 6 digit",
                  },
                })}
                className="ion-margin-top"
                fill="outline"
                labelPlacement="floating"
                label="Password"
                type="password"
                placeholder="Enter password"
                color="dark"
              />
              {errors.password && (
                <p className="text-[var(--primary-danger-text)]">
                  {errors.password.message}
                </p>
              )}
              {!isLogIn && (
                <IonInput
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                  className="ion-margin-top"
                  fill="outline"
                  labelPlacement="floating"
                  label="Confirm Password"
                  type="password"
                  placeholder="Enter password"
                  color="dark"
                />
              )}
              {!isLogIn && errors.confirmPassword && (
                <p className="text-[var(--primary-danger-text)]">
                  {errors.confirmPassword.message}
                </p>
              )}

              <IonButton
                className="ion-margin-top"
                expand="block"
                type="submit"
                color="light"
                shape="round"
                id="open-loading"
              >
                {isLogIn ? "Login" : "Sign Up"}
                {isLogIn ? <MdLogin /> : <RiLoginCircleFill />}
              </IonButton>

              {showLoading && 
              <IonLoading trigger="open-loading" message="Loading...." duration={1000} />
}
              <IonButton
                color="dark"
                className="ion-margin-top"
                expand="block"
                shape="round"
                onClick={() => setIsLogIn(!isLogIn)}
              >
                {isLogIn ? "Create Accoun" : "Switch to Login"}
                {isLogIn ? <RiLoginCircleFill /> : <MdLogin />}
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </section>
    </Wrapper>
  );
};

export default Auth;