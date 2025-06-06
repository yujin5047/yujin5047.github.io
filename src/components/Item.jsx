function Item({title, script }) {
  return <li style={{listStyle: 'none'}}>
    <h3>{title}</h3>
    <p>{script}</p>
    </li>
}

export default Item