import React from "react";
import { Repositories } from "./Repositories";

export const Content = ({ status, repositories }) => {
  switch (status) {
    case "initial":
      return null;
    case "success":
      return <Repositories repositories={repositories} />;
  }
};
