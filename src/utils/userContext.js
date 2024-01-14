import {createContext} from "react";

const userContext = createContext(
    {
        loggedInUser :"default",
    }
)

export default userContext;