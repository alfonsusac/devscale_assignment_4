"use client"

import { useState } from "react"

export const Note = () => {
  const [editMode, setEditMode] = useState(false)
  const enterEditMode = () => setEditMode(true)
  const exitEditMode = () => setEditMode(false)

  function handleEditAcceptButtonClick() {
    exitEditMode()
  }
  function handleDeleteButtonClick() {
    exitEditMode()
  }

  return (
    <article className="group relative w=full h-auto bg-zinc-700/60 rounded-md
      flex
    ">
      <div className="grow min-h-20
        p-2 pr-1
      ">
        <p className="text-sm font-medium p-2 pr-1 py-1 rounded-t-lg transition duration-150
        [&[contenteditable=true]]:bg-black/10
        [&[contenteditable=true]]:focus:bg-black/20
        "
          contentEditable={editMode}
        >
          Lorem ipsum
        </p>
        <p className="text-xs text-white/40 p-2 pr-1 py-1 rounded-b-lg transition duration-150
        [&[contenteditable=true]]:bg-black/10
        [&[contenteditable=true]]:focus:bg-black/20
        "
          contentEditable={editMode}
        >
          Lorem ipsum Lorem ipsum adf asf asd fas dfasdf asa sdf adf asd fasd fas fads fs s s . s ss s s s s s s s s s s . s s 
        </p>
      </div>
      <div className="flex flex-col gap-1 p-2 pl-0 h-full">
        {
          !editMode && <button className="opacity-0 group-hover:opacity-100 
            right-2 top-2 rounded-md
            p-1.5 text-sm
            bg-white/5 text-white/60
            hover:bg-white/10 hover:text-white/80
            active:brightness-75
            "
            onClick={enterEditMode}
          >
            <MaterialSymbolsEdit />
          </button>
        }
        {
          editMode && <>
            <button className="
              rounded-md
              p-1.5 text-sm
              bg-white/5 text-white/60
              hover:bg-white/10 hover:text-white/80
              active:brightness-75
              "
              onClick={handleEditAcceptButtonClick}
            >
              <IcRoundDone />
            </button>
            <button className="
              rounded-md
              p-1.5 text-sm
              bg-white/5 text-white/60
              hover:bg-red-500/60 hover:text-white/80
              active:brightness-75
              "
              onClick={handleDeleteButtonClick}
            >
              <MaterialSymbolsDeleteRounded />
            </button>
          </>
        }
      </div>
    </article>
  )


  return (
    <article className="group relative w-full h-auto bg-white/10 rounded-md p-2">
      {
        !editMode && <>
          <p className="text-sm font-medium p-2 py-1">
            Lorem ipsum
          </p>
          <p className="text-xs text-white/40 p-2 py-1">
            Lorem ipsum Lorem ipsum adf asf asd fas dfasdf as
          </p>
          <button className="block absolute opacity-0 group-hover:opacity-100 
            right-2 top-2 rounded-md
            p-1.5 text-sm
            bg-white/5 text-white/60
            hover:bg-white/10 hover:text-white/80
            active:brightness-75
            "
            onClick={enterEditMode}
          >
            <MaterialSymbolsEdit />
          </button>
        </>
      }
      {
        !!editMode && <>
          <input
            className="text-sm font-medium 
              bg-black/10 p-2 py-1 rounded-md block tracking-[inherit]
              focus:outline-none focus:bg-black/20
              "
            defaultValue={"Lorem ipsum"} />
          <div
            contentEditable
            className="text-xs text-white/40 
              bg-black/10 p-2 py-1 rounded-md block tracking-[inherit]
              focus:outline-none focus:bg-black/20
              "
            value={"Lorem ipsum Lorem ipsum adf asf asd fas dfasdf as"}
          >{"Lorem ipsum Lorem ipsum adf asf asd fas dfasdf as"}</div>
          <div className="absolute right-2 top-2 flex flex-col gap-1">
            <button className="
              rounded-md
              p-1.5 text-sm
              bg-white/5 text-white/60
              hover:bg-white/10 hover:text-white/80
              active:brightness-75
              "
              onClick={handleEditAcceptButtonClick}
            >
              <IcRoundDone />
            </button>
            <button className="
              rounded-md
              p-1.5 text-sm
              bg-white/5 text-white/60
              hover:bg-red-500/60 hover:text-white/80
              active:brightness-75
              "
              onClick={handleDeleteButtonClick}
            >
              <MaterialSymbolsDeleteRounded />
            </button>
          </div>
        </>
      }
    </article>
  )
}


export function MaterialSymbolsEdit(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"></path></svg>
  )
}

export function IcRoundDone(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0a.984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4a.984.984 0 0 0-1.4 0z"></path></svg>
  )
}

export function MaterialSymbolsDeleteRounded(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17"></path></svg>
  )
}