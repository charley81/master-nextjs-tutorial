'use client'

import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import { createUserAction } from '@/utils/actions'

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button type="submit" className={buttonStyles} disabled={pending}>
      {pending ? 'submitting...' : 'submit'}
    </button>
  )
}

export default function Form() {
  const [state, formAction] = useFormState(createUserAction, null)

  return (
    <form className={formStyles} action={formAction}>
      {state && <p>{state}</p>}
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        type="text"
        name="firstName"
        defaultValue="john"
        required
        className={inputStyles}
      />
      <input
        type="text"
        name="lastName"
        defaultValue="doe"
        required
        className={inputStyles}
      />
      <SubmitButton />
    </form>
  )
}

const formStyles = 'max-w-lg flex flex-col gap-y-4 shadow rounded p-8 mt-10'
const inputStyles = 'border shadow rounded py-2 px-3  text-gray-700'
const buttonStyles =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize'
