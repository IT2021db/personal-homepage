import { ErrorBox } from "./ErrorBox";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";

export const Content = ({ status, repos }) => {
    console.log(`status ${status}`)
    console.log(`repos w Content:`)
    
    console.log({repos})
    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />

        case "error":
             return <ErrorBox/>;

        case "success":
            return <Repositories repos={repos} />
    }
};