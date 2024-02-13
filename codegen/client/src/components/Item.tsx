import { FC } from 'react'
import { FeedItem } from '../api'

const Item: FC<{ item: FeedItem }> = ({ item }) => {
  return (
    <div className={`item ${item.breaking ? 'breaking' : ''}`}>
      <h2>{item.title}</h2>
      <div>{item.body}</div>
    </div>
  )
}

export default Item
