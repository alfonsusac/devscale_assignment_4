"use client"

import { isNewPost } from '@/atoms/atoms'
import { postNote } from '@/fetch/notes'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export const NewNote = () => {
  const [isAdding, setIsAdding] = useAtom(isNewPost)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const router = useRouter()
  
  function isValid() {
    if (title === "") return false
    return true
  }

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }
  function handleDescriptionChange(e) {
    setDesc(e.target.value)
  }

  async function handleAddButtonInput() {
    try {
      const res = await postNote(title, desc)
      console.log(res)
    } catch (error) {
      // todo: better error output
      console.log(error)
    }
    setIsAdding(false)
    setTitle("")
    setDesc("")
    router.refresh()
  }

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
      <div className="max-w-xs bg-zinc-800 p-2 rounded-md flex flex-col w-full">
        <input placeholder='Untitled Post'
          className='p-2 px-3 placeholder:font-medium font-medium'
          value={title}
          onChange={handleTitleChange}
        />
        <textarea placeholder='description'
          className='p-1 px-3 text-sm text-white/80'
          rows={4}
          value={desc}
          onChange={handleDescriptionChange}
        />
      </div>

      <div className='max-w-xs w-full flex justify-end'>
        <button className="bg-zinc-800/50 p-1.5 px-6 rounded-md
        text-white/70 text-sm font-medium
        hover:text-white/80
        hover:bg-zinc-800/80
        disabled:brightness-75
        disabled:text-white/20
        disabled:pointer-events-none
        "
          onClick={handleAddButtonInput}
          disabled={!isValid()}
        >
          Post
        </button>
      </div>
    </div>
  )
}