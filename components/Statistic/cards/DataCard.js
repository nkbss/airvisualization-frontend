import React from 'react'
import { Card } from '../../../node_modules/semantic-ui-react'

const DataCard = props => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <label>{props.header}</label>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          {props.data.map((data, index) => {
            return (
              <div>
                <label key={index}>Year : {data.YEAR}</label>
                &emsp;
                <label>
                  Total of {props.header} : {data.Results}
                </label>
              </div>
            )
          })}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          <div>
            <label>Average : {props.av}</label>
          </div>
          <div>
            <label>SD : {props.sd}</label>
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export { DataCard }
