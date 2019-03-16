import React from 'react'

import Plot from 'react-plotly.js'
import { Grid } from '../../node_modules/semantic-ui-react'
const Plotly = props => {
  return (
    <div>
      {props.data != null ? (
        <Plot
          data={[
            {
              type: 'bar',
              x: props.data[0],
              y: props.data[1]
            }
          ]}
          layout={{ width: 500, height: 500, title: 'AST 2009' }}
        />
      ) : null}
    </div>
  )
}

export default Plotly
