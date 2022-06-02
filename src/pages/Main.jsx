import React, { useMemo } from 'react'
import Tables from '../components/table/Tables';
import { useDataStarWars } from '../services/UseData/useData'

function Main() {
  const { data, isLoading, handleInfo, selectType } = useDataStarWars();

  const typeList = "planets";
  
  useMemo(() => 
    selectType(typeList)
  , []);



  return (
    <div>
      <Tables 
        data = { data }
        type = {typeList}
      />
    </div>
  )
}
export default Main;