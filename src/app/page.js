import { Header } from "@/components/Header";
import { NewNote } from "@/components/NewNote";
import { NoteAdd } from "@/components/NoteAdd";
import { NoteList } from "@/components/NoteList";
import { NoteSearch } from "@/components/NoteSearch";
import { fetchNotes } from "@/fetch/notes";

export const dynamic = 'force-dynamic'

export default async function Home() {

  const notes = await fetchNotes({ cache: 'no-store' })

  return (
    <>
      <Header />
      <NewNote />
      <div className="flex gap-2">
        <NoteSearch />
        <NoteAdd />
      </div>
      <NoteList notes={notes}/>
    </>
  );
}

