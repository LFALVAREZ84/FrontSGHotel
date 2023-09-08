/* eslint-disable react/prop-types */
import axios from 'axios'
import { createContext, useEffect, useState} from 'react'

export const UsersContext = createContext()

const UserContext = ({children}) => {
    const [users, setUsers] = useState([])
  
    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users")
            console.log(response, "response context")
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
            localStorage.removeItem("user")
            window.location.href = "/Login"
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
    <UsersContext.Provider value={{users, setUsers, logout}}>
        {children}
    </UsersContext.Provider>
  )
}

export default UserContext