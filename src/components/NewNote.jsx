"use client"

import { isNewPost } from '@/atoms/atoms'
import { useAtom } from 'jotai'


export const NewNote = () => {
  const [isAdding, setIsAdding] = useAtom(isNewPost)

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
        />
        <textarea placeholder='description'
          className='p-1 px-3 text-sm text-white/80'
          rows={4}
        />
      </div>

      <div className='max-w-xs w-full flex justify-end'>
        <button className="bg-zinc-800/50 p-1.5 px-6 rounded-md
        text-white/70 text-sm font-medium
        hover:text-white/80
        hover:bg-zinc-800/80
        ">
          Save
        </button>
      </div>
    </div>
  )
}