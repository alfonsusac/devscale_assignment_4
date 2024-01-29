import { GithubButton } from "./GitHubButton"

export const Header = () => {
  return (
    <header className="font-regular pt-6 pb-4 px-2
      flex items-center justify-between sticky
    ">
      <h1 className="text-2xl font-semibold">
        Notes
      </h1>
      <GithubButton />
    </header>
  )
}


