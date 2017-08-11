import React from 'react'
import { Collapsible, CollapsibleItem } from 'react-materialize'

const Projects = (props) => {
  var projs = props.items.map((projs) => {
    return (
      <div>
        <Collapsible>
          <CollapsibleItem key={projs._id} header={projs.name}>
            {projs.description}
          </CollapsibleItem>
        </Collapsible>
      </div>
    )
  })
  return (
    <div>{projs}</div>
  )
}

export default Projects
