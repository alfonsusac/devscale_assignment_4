export async function fetchNotes() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fg1t096qfIGE")
  return (await res.json()).data
}

export async function fetchNote(id) {
  const res = await fetch(`https://v1.appbackend.io/v1/rows/fg1t096qfIGE/${id}`)
  return (await res.json()).data
}

export async function postNote(name, description) {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fg1t096qfIGE", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify([{ "name": "", "description": "" }])
    body: JSON.stringify([{ name, description }])
  })
  return await res.json()
}

export async function updateNote(_id, name, description) {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fg1t096qfIGE", {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ _id, name, description })
  })
  return await res.json()
}

export async function deleteNote(id) {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fg1t096qfIGE", {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([id])
  })
  return await res.json()
}