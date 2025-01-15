import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        heading={"payment History"}
        subHeading={"---take a look---"}
      ></SectionTitle>
      <div className="bg-white w-11/12 mx-auto rounded-md shadow-lg p-10">
        <div className="overflow-x-auto px-24 py-10 pb-24">
          <table className="table rounded-xl overflow-hidden main">
            {/* head */}
            <thead className="bg-[#EBAB23] h-16 text-lg rounded-xl text-white">
              <tr className="rounded-2xl">
                <th>#</th>
                <th>Email</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="">
              {payments.map((item, idx) => (
                <>
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <td>{item.email}</td>
                    <td>${item.price}</td>
                    <td>{item.transactionId}</td>
                    <td>
                      {item.status === "pending" ? (
                        <>
                          <span className=" bg-red-500 rounded-full w-[80px] px-2 py-1 flex justify-center">
                            {item.status}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className=" bg-green-500 rounded-full w-[80px] px-2 py-1 flex justify-center">
                            {item.status}
                          </span>
                        </>
                      )}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
