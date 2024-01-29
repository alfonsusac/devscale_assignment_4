import { Header } from "@/components/Header";
import { NewNote } from "@/components/NewNote";
import { NoteAdd } from "@/components/NoteAdd";
import { NoteList } from "@/components/NoteList";
import { NoteSearch } from "@/components/NoteSearch";

export default function Home() {
  return (
    <>
      <Header />
      <NewNote />
      <div className="flex gap-2">
        <NoteSearch />
        <NoteAdd />
      </div>
      <NoteList />
    </>
  );
}

