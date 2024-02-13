import { useEffect, useState } from 'react'
import Item from './Item'
import { Configuration, DefaultApi, FeedItem } from '../api'

const Feed = () => {
  const [items, setItems] = useState<FeedItem[]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    new DefaultApi(new Configuration({ basePath: 'http://localhost:8080' }))
      .newsGet()
      .then((data) => setItems(data))
      .catch((error) => setError(error.toString()))
  }, [])

  return (
    <>
      <div className="feed">
        <h1>News Network Agency</h1>
        {(error && <p>{error}</p>) ||
          items?.map((i) => <Item key={i.id} item={i} />)}
      </div>
      <footer>© 2024 NNA</footer>
    </>
  )
}

export default Feed
