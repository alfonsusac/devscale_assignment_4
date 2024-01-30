"use client"

import { atom } from 'jotai'


export const isNewPost = atom(false)
export const newPostFormState = atom("idle")

export const searchNoteAtom = atom("")

export const postListAtom = atom([])