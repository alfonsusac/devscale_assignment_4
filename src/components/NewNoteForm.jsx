import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { isNewPost, newPostFormState } from '@/atoms/atoms'
import { useAtom } from 'jotai'
import { postNote } from "@/fetch/notes"
import { delay } from "@/lib/util"
import { Icon } from "@iconify/react"
import { LoadingIcon, SuccessIcon } from "@/icons/animated"
import { Toaster, toast } from 'sonner'

export const NewNoteForm = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const router = useRouter()
  const [isAdding, setIsAdding] = useAtom(isNewPost)
  const [formState, setFormState] = useAtom(newPostFormState)

  useEffect(() => {
    if (isAdding === true)
      setFormState("idle")
  }, [setFormState, isAdding])

  function isValid() {
    if (title === "") return false
    return true
  }

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }
  function handleDescriptionChange(e) {
    setDesc(e.target.value)
  }

  async function handleAddButtonInput() {
    setFormState("loading")
    try {
      const res = await postNote(title, desc)
      console.log(res)
      setFormState("success")
      toast.success("Note Created")
      await delay(1000)
      setIsAdding(false)
      setTitle("")
      setDesc("")
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="max-w-xs bg-[#1e223d] p-2 rounded-md flex flex-col w-full h-40 items-center justify-center">
        {
          formState === "success" &&
          <div className="text-4xl">
            <SuccessIcon />
          </div>
        }
        {
          formState === "loading" &&
          <div className="text-4xl">
            <LoadingIcon />
          </div>
        }
        {
          formState === "idle" && <>
            <input placeholder='Untitled Post'
              className='p-2 px-3 placeholder:font-medium font-medium'
              value={title}
              onChange={handleTitleChange}
            />
            <textarea placeholder='description'
              className='p-1 px-3 text-sm text-white/80'
              rows={4}
              value={desc}
              onChange={handleDescriptionChange}
            />
          </>
        }
      </div>

      <div className='max-w-xs w-full flex justify-end'>
        <button className="bg-zinc-800/50 p-1.5 px-6 rounded-md
        text-white/70 text-sm font-medium
        hover:text-white/80
        hover:bg-zinc-800/80
        disabled:brightness-75
        disabled:text-white/20
        disabled:pointer-events-none
        "
          onClick={handleAddButtonInput}
          disabled={!isValid() || formState !== "idle"}
        >
          Post
        </button>
      </div>
    </>
  )
}