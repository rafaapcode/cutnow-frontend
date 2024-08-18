"use client";
import { client } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import NavBar from "./_components/NavBar/NavBarComponent";

const Homelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-main-black w-full max-h-full md:container md:mx-auto text-white">
      <ApolloProvider client={client}>
        <NavBar />
        {children}
      </ApolloProvider>
    </div>
  );
};

export default Homelayout;
