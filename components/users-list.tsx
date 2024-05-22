import { getUsers } from '@/utils/actions'
import DeleteButton from './delete'

export default async function UsersList() {
  const users = await getUsers()
  return (
    <div className="mt-10">
      {users.length ? (
        <div>
          {users.map((user) => (
            <h4
              key={user.id}
              className="capitalize text-lg flex justify-between items-center mb-2"
            >
              {user.firstName} {user.lastName}
              <DeleteButton id={user.id} />
            </h4>
          ))}
        </div>
      ) : (
        <p>no users found</p>
      )}
    </div>
  )
}
