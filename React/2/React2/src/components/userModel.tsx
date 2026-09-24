
import UserProfile from '../components/UserProfile'
import { useUsers } from '../hooks/useUsers'


export const UserModel = () => {
    const { users, hasError } = useUsers()

  return (
    <div>
        {
      hasError ? <h1>Error Inesperado</h1>
      :
      (
        <>
        <div>Usuarios Activos</div>
        <br />
        {
          users.map((user) => (
        <UserProfile key={user.id} user={user} />
      )
      )
      }
        
        </>
      )
      }
    </div>

    )
}
