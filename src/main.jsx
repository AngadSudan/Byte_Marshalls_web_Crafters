import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Login,
  LoginUser,
  LoginDoctor,
  Signup,
  SignupUser,
  SignupDoctor,
} from "./pages/index.js";
import FAQs from "./pages/Faqs.jsx";
import Advice from "./pages/Advice.jsx";
import Review from "./pages/Review.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="faq" element={<FAQs />} />
        <Route path="advice" element={<Advice />} />
        <Route path="reviews" element={<Review />} />
      </Route>
      <Route path="login-doctor" element={<LoginDoctor />} />
      <Route path="login-user" element={<LoginUser />} />
      <Route path="signup-user" element={<SignupUser />} />
      <Route path="signup-doctor" element={<SignupDoctor />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
