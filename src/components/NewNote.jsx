"use client"

import { isNewPost, newPostFormState } from '@/atoms/atoms'
import { useAtom } from 'jotai'

import { NewNoteForm } from './NewNoteForm'


export const NewNote = () => {
  const [isAdding] = useAtom(isNewPost)

  return (
    <div className="
    bg-black/10 rounded-lg
    transition-all duration-500
    h-0 data-[expanded=true]:h-3/6
    w-full overflow-hidden shrink-0
    flex justify-center items-center gap-2 flex-col
    "
      data-expanded={isAdding}
    >
      {
        isAdding && <NewNoteForm />
      }
    </div>
  )
}