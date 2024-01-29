import { Note } from "./Note"

export const NoteList = async ({notes}) => {


  // const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  return (
    <div className="grid grid-cols-2 flex-wrap gap-3 pb-4 transition-all">
      {
        notes.map((note, i) => {
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