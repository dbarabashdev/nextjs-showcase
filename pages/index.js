import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1> Welcome!</h1>
      <Link href="/aboutme">
        <a>About</a>
      </Link>

      <Link href="/fetch">
        <a>Fetch</a>
      </Link>
    </div>
  )
}

export default HomePage
