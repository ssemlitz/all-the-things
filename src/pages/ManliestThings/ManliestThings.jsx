import ThingCard from '../../components/ThingCard/ThingCard'

import { Link } from 'react-router-dom'

const ManliestThings = (props) => {
  return (
    <>
      <h1>Ben's Stuff</h1>
      <Link to="/">Hole</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}

export default ManliestThings