import React, { useMemo, useState } from 'react'
import { Button, Dropdown, Form } from 'react-bootstrap';
import Tables from '../components/table/Tables';
import { useForm } from '../hooks/useForm';
import { useDataStarWars } from '../services/UseData/useData'

function Main() {
  const { data, isLoading, error, selectType } = useDataStarWars();
  const [list, setList] = useState("starships");
  const [tittle, setTittle] = useState("LISTADO DE NAVES");
  const [formLoginValues, handleInputChange] = useForm({ text: '' });
  const { text } = formLoginValues;
  const listTypes = { "starships": "NAVES", "planets": "PLANETAS", "people": "GENTE"};

  useMemo(() => {
    list ? setTittle(`LISTADO DE ${listTypes[list]}`) : '';
    selectType(list)
  }, [list]);

console.log('Soy el texto: ', text);
const handleLogin = (e) => {
  e.preventDefault();

};
  return (
    <div className='container'>
      <h1 className='text-center mt-5'>{tittle}</h1>

      <div className='d-flex justify-content-end'>

        <Form onSubmit={handleLogin} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
              type="text" 
              placeholder="buscar..." 
              name="text"
              value={text}
              onChange={handleInputChange}
              />
          </Form.Group>
        </Form>

        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Seleccionar
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>setList("starships")} >Naves</Dropdown.Item>
              <Dropdown.Item onClick={()=>setList("planets")}>Planetas</Dropdown.Item>
              <Dropdown.Item onClick={()=>setList("people")}>Personas</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

      </div>

        <Tables 
          data = { data }
          type = {list}
        />
    </div>
  )
}
export default Main;