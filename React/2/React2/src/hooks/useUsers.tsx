import {useState, useEffect} from 'react'
import {type UserReference} from '../types/userTypes'
import { getUsersAsync } from '../services/userService'

export const useUsers = () => {
    const [users, setUsers] = useState<UserReference[]>([])
    const [hasError, setHasError] = useState(false)
    
    useEffect(() => {
        const getUsers = async () => {
            setHasError(false)
            try {
                const UserResponse = await getUsersAsync()
                setUsers(UserResponse)
            } 
            catch 
            (error) {
                console.error(error)
                setHasError(true)
            }

        }
        void getUsers()

    }, [])

    return {
        users,
        hasError
    }
}
