import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Shop from "../pages/Shop/Shop/Shop";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Cart from "../pages/Home/DashBoard/Cart/Cart";
import UserHome from "../pages/Home/DashBoard/UserHome/UserHome";
import Reservation from "../pages/Home/DashBoard/Reservation/Reservation";
import AddReview from "../pages/Home/DashBoard/AddReview/AddReview";
import MyBooking from "../pages/Home/DashBoard/MyBooking/MyBooking";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "myBooking",
        element: <MyBooking></MyBooking>,
      },
    ],
  },
]);

export default router;
