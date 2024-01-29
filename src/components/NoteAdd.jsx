"use client"

import { isNewPost } from "@/atoms/inputAtom"
import { useAtom } from 'jotai'


export const NoteAdd = ({ expanded, setExpanded }) => {
  const [_, setIsAdding] = useAtom(isNewPost)

  return (
    <button className="bg-zinc-800 rounded-md p-3 aspect-square text-xl
      hover:bg-zinc-300 hover:text-zinc-800 transition"
      onClick={() => { setIsAdding(prev => !prev) }}
    >
      <MaterialSymbolsAdd />
    </button>
  )
}

export function MaterialSymbolsAdd(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path></svg>
  )
}