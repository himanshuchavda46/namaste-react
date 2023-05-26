import {createContext} from "react";

const UserContext = createContext({
    user: {
        name: "Dummy name",
        email: "Dummy email"
    }
})

UserContext.displayName = "UserContext"

export default UserContext;
