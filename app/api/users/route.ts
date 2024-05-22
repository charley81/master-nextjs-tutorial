import { getUsers, saveUser } from '@/utils/actions'
import { log } from 'console'

export const GET = async (req: Request) => {
  console.log(req)
  const users = await getUsers()
  return Response.json({ users })
}
