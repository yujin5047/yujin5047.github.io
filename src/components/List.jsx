import Item from './Item'

function List({ items }) {
  return (
    <ul>
      {items.map((data) => (
        <Item key={data.id} title={data.title} script={data.script} />
      ))}
    </ul>
  )
}

export default List
