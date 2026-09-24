import { type UserReference } from "../types/userTypes";

export const getUsersAsync = async ():Promise<UserReference[]> => {

     const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if(!response.ok) {
            
                throw new Error('Error en la ejeucion de la api')
                
            }

            const usersData:UserReference[] = await response.json()
            return usersData

}