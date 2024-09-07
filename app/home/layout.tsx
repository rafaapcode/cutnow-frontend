"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import NavBar from "./_components/NavBar/NavBarComponent";

const Homelayout = ({ children }: { children: React.ReactNode }) => {

  const tokenValue = () => {
    if(typeof window !== "undefined") {
      return localStorage.getItem("token") ?? "";
    }
    return '';
  };

  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
    headers: {
      "Authorization": tokenValue()
    }
  });

  return (
    <div className="bg-main-black w-full h-screen md:container md:mx-auto text-white">
      <ApolloProvider client={client}>
        <NavBar />
        {children}
      </ApolloProvider>
    </div>
  );
};

export default Homelayout;
