import React from 'react'
import { Table } from '../../../node_modules/semantic-ui-react'
var commaNumber = require('comma-number')
const TableStatisticCard = props => {
  return (
    <React.Fragment>
      <Table definition celled textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2} style={{ backgroundColor: 'white' }} />
            <Table.HeaderCell width={2}>Passengers</Table.HeaderCell>
            <Table.HeaderCell width={2}>Seats</Table.HeaderCell>
            <Table.HeaderCell width={2}>Routes</Table.HeaderCell>
            <Table.HeaderCell width={2}>Frequencies</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.paxData.map((data, index) => {
            return (
              <Table.Row>
                <Table.Cell>{data.YEAR}</Table.Cell>
                <Table.Cell>{commaNumber(data.Results)}</Table.Cell>
                <Table.Cell>
                  {commaNumber(props.seatData[index].Results)}
                </Table.Cell>
                <Table.Cell>
                  {commaNumber(props.routeData[index].Results)}
                </Table.Cell>
                <Table.Cell>
                  {commaNumber(props.frequencyData[index].Results)}
                </Table.Cell>
              </Table.Row>
            )
          })}
          <Table.Row>
            <Table.Cell>Average</Table.Cell>
            {props.av.map((data, index) => {
              return <Table.Cell key={index}>{commaNumber(data)}</Table.Cell>
            })}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Standard Deviation</Table.Cell>
            {props.sd.map((data, index) => {
              return <Table.Cell key={index}>{commaNumber(data)}</Table.Cell>
            })}
          </Table.Row>

          {/* <Table.Row>
            <Table.Cell>reset rating</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>Resets rating to default value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>set rating</Table.Cell>
            <Table.Cell>rating (integer)</Table.Cell>
            <Table.Cell>
              Sets the current star rating to specified value
            </Table.Cell>
          </Table.Row> */}
        </Table.Body>
      </Table>
    </React.Fragment>
  )
}

export { TableStatisticCard }
