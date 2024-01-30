import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { isNewPost, newPostFormState } from '@/atoms/atoms'
import { useAtom } from 'jotai'
import { postNote } from "@/fetch/notes"
import { delay } from "@/util/util"

export const NewNoteForm = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const router = useRouter()
  const [_, setIsAdding] = useAtom(isNewPost)
  const [formState, setFormState] = useAtom(newPostFormState)

  useEffect(() => {
    setFormState("idle")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFormState])

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
      <div className="max-w-xs bg-zinc-800 p-2 rounded-md flex flex-col w-full h-40 items-center justify-center">
        {
          formState === "success" &&
          <div className="text-4xl">
            <LineMdConfirmCircle />
          </div>
        }
        {
          formState === "loading" &&
          <div className="text-4xl">
            <LineMdLoadingTwotoneLoop />
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
          disabled={!isValid()}
        >
          Post
        </button>
      </div>
    </>
  )
}


export function LineMdConfirmCircle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="60" strokeDashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path strokeDasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g></svg>
  )
}


export function LineMdLoadingTwotoneLoop(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path strokeDasharray="60" strokeDashoffset="60" strokeOpacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"></animate></path><path strokeDasharray="15" strokeDashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></g></svg>
  )
}