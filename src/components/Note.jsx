"use client"

import { deleteNote, updateNote } from "@/fetch/notes"
import { useRouter } from "next/navigation"
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from "react"
import { LoadingIcon } from "@/icons/animated";
import { DeleteIcon, DoneIcon, EditIcon } from "@/icons/static";
import { Toaster, toast } from 'sonner'


export const Note = ({ _id, name, description }) => {
  const [editMode, setEditMode] = useState(false)
  const enterEditMode = () => setEditMode(true)
  const exitEditMode = () => setEditMode(false)
  const [title, setTitle] = useState(name)
  const [desc, setDesc] = useState(description)
  const isChanged = name !== title || description !== desc
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }
  function handleDescriptionChange(e) {
    setDesc(e.target.value)
  }

  async function handleEditAcceptButtonClick() {
    if (isChanged)
      try {
        setLoading(true)
        const res = await updateNote(_id, title, desc)
        console.log(res)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    exitEditMode()
    router.refresh()
  }
  async function handleDeleteButtonClick() {
    try {
      setLoading(true)
      const res = await deleteNote(_id)
      console.log(res)
      toast("Successfully Deleted")
    } catch (error) {
      console.log(error)
    }
    router.refresh()
  }

  return (
    <article className="group relative w=full h-auto bg-zinc-700/60 rounded-md
      flex
    ">
      <div className="w-0 grow min-h-20
        p-2 pr-1 flex flex-col
      ">
        {
          !editMode && <>
            <p className="text-sm font-medium p-2 pr-1 py-1 pb-0 rounded-t-lg transition duration-150 tracking-tight
              whitespace-break-spaces break-words"
            >
              {title}
            </p>
            <p className="text-xs text-white/40 p-2 pr-1 py-1 rounded-b-lg transition duration-150 tracking-tight
              min-w-0 w-auto whitespace-break-spaces break-words"
            >
              {desc}
            </p>
          </>
        }
        {
          !!editMode && <>
            <TextareaAutosize className="text-sm font-medium p-2 pr-1 py-1 pb-0
            rounded-none rounded-t-lg 
            transition duration-150
            bg-black/10 focus:bg-black/20
            tracking-tight
            "
              onChange={handleTitleChange}
              value={title}
            />
            <TextareaAutosize className="text-xs text-white/40 p-2 pr-1 py-1 
            rounded-none rounded-b-lg 
            transition duration-150
            bg-black/10 focus:bg-black/20
            tracking-tight font-normal
            "
              onChange={handleDescriptionChange}
              value={desc}
            />
          </>
        }
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
            <EditIcon />
          </button>
        }
        {
          loading && <>
            <button className="
              rounded-md
              text-xl
              text-white/60
              p-1
              "
              disabled={true}
            >
              <LoadingIcon />
            </button>
          </>
        }
        {
          editMode && !loading && <>
            <button className="
              rounded-md
              p-1.5 text-sm
              bg-white/5 text-white/60
              hover:bg-white/10 hover:text-white/80
              active:brightness-75
              "
              onClick={handleEditAcceptButtonClick}
            >
              <DoneIcon />
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
              
              <DeleteIcon />
            </button>
          </>
        }
      </div>
    </article>
  )
}

