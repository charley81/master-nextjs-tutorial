'use server'
import { readFile, writeFile } from 'fs/promises'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { User, Tour } from '@/utils/types'

const url = 'https://www.course-api.com/react-tours-project'

// ===== create user =====
export const createUserAction = async (
  prevState: unknown,
  formData: FormData
) => {
  'use server'
  console.log(prevState)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const newUser: User = { firstName, lastName, id: Date.now().toString() }

  try {
    await saveUser(newUser)
    revalidatePath('/actions')
    // some logic
    return 'user created successfully...'
  } catch (error) {
    console.error(error)
    return 'failed to create a user...'
  }

  //redirect('/')
}

// ===== get users =====
export const getUsers = async (): Promise<User[]> => {
  'use server'
  const result = await readFile('users.json', { encoding: 'utf-8' })
  const users = result ? JSON.parse(result) : []
  return users
}

// ===== save user =====
export const saveUser = async (user: User) => {
  const users = await getUsers()
  users.push(user)
  await writeFile('users.json', JSON.stringify(users))
}

// ===== fetch tours =====
export const fetchTours = async () => {
  const response = await fetch(url)
  const data: Tour[] = await response.json()
  return data
}

//
export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string
  const users = await getUsers()
  const filteredUsers = users.filter((user) => user.id !== id)
  await writeFile('users.json', JSON.stringify(filteredUsers))
  revalidatePath('/actions')
}

export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get('name') as string
  const users = await getUsers()
  const filteredUsers = users.filter((user) => user.id !== id)
  await writeFile('users.json', JSON.stringify(filteredUsers))
  revalidatePath('/actions')
}
