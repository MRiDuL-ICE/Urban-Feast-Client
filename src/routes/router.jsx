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
import AdminHome from "../pages/Home/DashBoard/AdminDashBoard/AdminHome/AdminHome";
import AddItems from "../pages/Home/DashBoard/AdminDashBoard/AddItems/AddItems";
import ManageItems from "../pages/Home/DashBoard/AdminDashBoard/ManageItems/ManageItems";
import ManageBookings from "../pages/Home/DashBoard/AdminDashBoard/ManageBookings/ManageBookings";
import AllUsers from "../pages/Home/DashBoard/AdminDashBoard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import UpdateItems from "../pages/Home/DashBoard/AdminDashBoard/UpdateItems/UpdateItems";
import Payment from "../pages/Home/DashBoard/Payment/Payment";
import PaymentHistory from "../pages/Home/DashBoard/PaymentHistory/PaymentHistory";

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
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
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
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/menu/${params.id}`),
      },
      {
        path: "manageBookings",
        element: <ManageBookings></ManageBookings>,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
