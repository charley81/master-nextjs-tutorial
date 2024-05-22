import { getUsers } from '@/utils/actions'

export default async function UsersList() {
  const users = await getUsers()
  return (
    <div className="mt-10">
      {users.length ? (
        <div>
          {users.map((user) => (
            <h4 key={user.id}>
              {user.firstName} {user.lastName}
            </h4>
          ))}
        </div>
      ) : (
        <p>no users found</p>
      )}
    </div>
  )
}
