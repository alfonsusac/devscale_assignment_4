import { Note } from "./Note"

export const NoteList = () => {

  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


  return (
    <div className="grid grid-cols-2 flex-wrap gap-3 pb-4">
      {
        data.map((note, i) => {
          return (
            <Note key={i} />
          )
        })
      }
    </div>
  )
}