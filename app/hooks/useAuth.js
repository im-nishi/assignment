import { useState } from "react"

export const useAuth = () => {

    const [activePart, setActivePart] = useState("signin-1");

    return {
        activePart,
        setActivePart
    }
}
