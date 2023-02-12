import React from "react";
import { Repositories } from "./Repositories";
import {Loadig, ErrorBox}from "./"

export const Content = ({ status, repositories }) => {
    switch (status) {
      case "initial":
        return null;
  
    //   case "loading":
    //     return <Loading />;
  
    //   case "error":
    //     return <ErrorBox />;
  
      case "success":
        return <Repositories repositories={repositories} />;
  
    //   default:
    //     throw new Error(`incorrect status: ${status}`);
    }
  };
