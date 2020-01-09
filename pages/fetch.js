import fetch from "unfetch"
import useSWR from "swr"

const API_URL = "https://jsonplaceholder.typicode.com"
async function fetcher(path) {
  const res = await fetch(API_URL + path)
  const json = await res.json()
  return json
}

const Fetch = ({ posts }) => {
  const { data, error } = useSWR("/albums", fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <style jsx>{`
        h3 {
          color: blue;
          cursor: pointer;
        }
      `}</style>
      <h3 onClick={() => window.history.back()}>Back</h3>
      Posts:
      {data &&
        data.map(u => (
          <div>
            <p>
              {u.id} / {u.userId} / {u.title}
            </p>
          </div>
        ))}
    </div>
  )
}

export default Fetch
