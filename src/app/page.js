"use client";
import Image from "next/image";
import React from "react";
import Card from "./card";
import axios from "axios";
import cardOne from "../images/cardTwo.jpg";
import cardTwo from "../images/cardOne.jpg";
import { useState, useEffect } from "react";
import PageLayout from "@/components/Pagelayout";
const Page = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function fetchData()  {
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setUsers(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  const apiData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div className="h-full w-full flex items-center flex-col justify-around">
      {" "}
      <div className="mt-16">
        <h1>Users</h1>
        <table>
          <thead>
            <tr className="gap-4 text-xl font-bold border-b-2">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className=" text-sm font-bold border-b-2">
                <td className="pr-5">{user.id}</td>
                <td className="pr-8">{user.name}</td>
                <td className="pr-8">{user.email}</td>
                <td className="pr-8">{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* user data ends  */}
      <div className="mt-10">
        <PageLayout/> 
      </div>
      <Card
        Title="card one"
        Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint!"
        Image={cardOne}
      />
      <Card
        Title="card two"
        Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint!"
        Image={cardTwo}
      />
      <Card
        Title="card three"
        Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint!"
      />
      <Card
        Title="card four"
        Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint!"
      />
      <Card
        Title="card five"
        Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint!"
      />
      <Card
        Title="card six"
        Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint!"
      />
      <Card
        Title="card seven"
        Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint!"
      />
      <Card
        Title="card eight"
        Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint!"
      />
      {/* user data  */}
      <div className="mt-12 bg-zinc-500 px-4 py-6 rounded shadow-lg h-96 w-96">
        <Image src={cardTwo} alt="" />
      </div>
    </div>
  );
};

export default Page;
