import React from 'react'
import { OptionsCard } from '../../../Options'

const DashboardCard = props => {
  return (
    <React.Fragment>
      <OptionsCard
        state={props.state}
        handleDropdown={props.handleDropdown}
        searchResult={props.searchResult}
        handleSelectOption={props.handleSelectOption}
      />
    </React.Fragment>
  )
}
export { DashboardCard }
