import { Header } from "@/components/Header";
import { NoteAdd } from "@/components/NoteAdd";
import { NoteSearch } from "@/components/NoteInput";
import { NoteList } from "@/components/NoteList";

export default function Home() {


  return (
    <>
      <Header />
      <div className="flex gap-2">
        <NoteSearch />
        <NoteAdd />
      </div>
      <NoteList />
    </>
  );
}

