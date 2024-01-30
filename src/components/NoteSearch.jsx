"use client"

import { searchNoteAtom } from "@/atoms/atoms"
import { useAtom } from 'jotai'


export const NoteSearch = () => {

  const [search, setSearch] = useAtom(searchNoteAtom)

  function handleSearchInputChange(e) {
    setSearch(e.target.value)
  }

  return (
    <div
      className="group transition-all
      grow relative 
      bg-zinc-800 rounded-lg 
      flex items-end justify-end
      focus-within:outline outline-white/20"
    >
      <input placeholder="Search..."
        className="grow p-1 px-2 m-1.5 mr-0 focus:outline-none bg-inherit placeholder:text-zinc-500 focus:bg-transparent"
        value={search}
        onChange={handleSearchInputChange}
      />
      <button className="m-1.5 p-2 text-zinc-200 rounded-md text-lg 
      hover:bg-white hover:text-zinc-800
      hover:outline-8 outline-white
      active:brightness-75 transition">
        <MaterialSymbolsSearch />
      </button>
    </div>
  )
}
export function MaterialSymbolsSearch(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"></path></svg>
  )
}