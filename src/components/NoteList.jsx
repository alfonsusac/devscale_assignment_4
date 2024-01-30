'use client'

import { Note } from "./Note"
import { searchNoteAtom } from "@/atoms/atoms"
import { useAtom } from 'jotai'


export const NoteList = ({notes}) => {

  const [search] = useAtom(searchNoteAtom)

  let list
  if (search === "") {
    list = notes
  } else {
    list = notes.filter(n => n.name.includes(search) || n.description.includes(search))
  }

  return (
    <div className="grid grid-cols-2 flex-wrap gap-3 pb-4 transition-all">
      {
        list.map((note) => {
          return (
            <Note
              key={note._id}
              _id={note._id}
              name={note.name}
              description={note.description}
            />
          )
        })
      }
    </div>
  )
}