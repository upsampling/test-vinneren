import React, { useMemo, useState, useEffect } from 'react';
import { Button, Form, Row, Table } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { BiAddToQueue } from 'react-icons/bi';
import FormAddData from '../form/Form';
import types from './typesS.json';
import { useDataStarWars } from '../../services/UseData/useData';

let filterData;

const Tables = ({ data, type }) => {

  const [remove, setRemove] = useState(false);
  const [addValue, setAddValue] = useState(false);
  const [saveData, setSaveData] = useState(false);

  const column = types[type];


  const arrayTypes =  Object.entries(column).map( t => t[0] );


useMemo(() => {

  data = JSON.parse(localStorage.getItem(type));


  filterData = data.map( item =>{
    return {
      "item1": item[arrayTypes[0]],
      "item2": item[arrayTypes[1]],
      "item3": item[arrayTypes[2]],
      "item4": item[arrayTypes[3]]
    }
  });

}, [remove, type, saveData])


const handleDelete = ({item: {item1}})=>{
  const data = JSON.parse(localStorage.getItem(type));

  const newobject = data.map((item)=> item.name !== item1 ? item : null );
  
  const deleteObject = newobject.filter(n => n);
  localStorage.setItem(type, JSON.stringify(deleteObject));
  setRemove(!remove);
}

const resetData = ()=>{
  localStorage.clear();
  useDataStarWars();
  setRemove(!remove);
}
  return (
    <>
    
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {
            Object.entries(column).map( (t, index)=> <th key={index}>{t[1]}</th> )
          }
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          filterData 
          ?
            filterData.map( (item)=> {
              return(
              <tr>
                <td>{item.item1}</td>
                <td>{item.item2}</td>
                <td>{item.item3}</td>
                <td>{item.item4}</td>
                <td className='d-flex justify-content-around'>
                  <AiFillDelete                
                  size={25}
                  onClick={()=>handleDelete({item})}
                  />
                  <AiFillEdit
                    size={25}
                  />

                </td>
              </tr>

          )
          })
          : null
        }          
      </tbody>
    </Table>
    <div className='d-flex justify-content-end'>

        <div className='d-flex flex-column justify-content-end' >
          {
            <div className='d-flex flex-row justify-content-end'>
              <Button
                className="me-5"
                onClick={resetData}
              >RESET</Button>
              {
                addValue ?
                  <GrClose
                  size={30}
                  onClick={()=>setAddValue(false)}
                  />
                : 
  
                <BiAddToQueue
                  size={35}
                  onClick={()=>setAddValue(true)}
                  />

              }
            
            </div>

          }
            {
              addValue ? 
              <FormAddData
              className="col-sm-5"
              types={[arrayTypes, type]} 
              passSaveData={setSaveData}
              stateChange={saveData}
              />
              : null
            }

        </div>

    </div>
</>
  );
}

export default Tables;
