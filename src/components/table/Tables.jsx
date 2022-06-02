import React, { useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import types from './typesS.json';


const Tables = ({ data, type }) => {

  const [remove, setRemove] = useState(false);

  const column = types[type];


  const arrayTypes =  Object.entries(column).map( t => t[0] );

let filterData;

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
}, [remove, type])



const handleDelete = ({item: {item1}})=>{
  const data = JSON.parse(localStorage.getItem(type));

  const newobject = data.map((item)=>{
    if(item.name === item1){
      return
    }else{
      return item
    }
  });
  const deleteObject = newobject.filter(n => n);
  localStorage.setItem(type, JSON.stringify(deleteObject));
  setRemove(!remove);
}
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {
            Object.entries(column).map( 
              (t)=> <th>{t[1]}</th> 
            )
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
  );
}

export default Tables;
