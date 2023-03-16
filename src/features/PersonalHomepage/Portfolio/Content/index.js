import { ErrorBox } from "./ErrorBox";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";

export const Content = ({ status, repos }) => {
  
     switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />

        case "error":
            return <ErrorBox />;

        case "success":
            return <Repositories repos={repos} />
    }
};