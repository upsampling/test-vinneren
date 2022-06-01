import React from 'react'
import { useDataStarWars } from '../services/UseData/useData'

function Main() {
  const { data, isLoading, handleInfo } = useDataStarWars();

  console.log('Soy la dataaaa: ', data);

  return (
    <div>hola jijiji</div>
  )
}
export default Main;