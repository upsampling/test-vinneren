import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';

import typesData from '../table/typesS.json';

export default function FormAddData({types, passSaveData, stateChange}) {
    const [ values, type] = types

    const [formValues, handleInputChange] = useForm({
        item1: '',
        item2: '',
        item3: '',
        item4: '',
      });
    
    const { item1, item2, item3, item4 } = formValues;
    const arrayItem = typesData[type];

    const handleAdd = (e)=>{
        console.log('estoy guardando')
        e.preventDefault();
        let dataLocalStorage = JSON.parse(localStorage.getItem(type));
        let obj = Object.create(arrayItem);
        obj[values[0]] = item1;
        obj[values[1]] = item2;
        obj[values[2]] = item3;
        obj[values[3]] = item4;
        console.log('obj: ', obj)
        dataLocalStorage.push(obj)
        localStorage.setItem(type, JSON.stringify(dataLocalStorage));

        passSaveData(!stateChange);
    }

  return (
        <Form 
            onSubmit={handleAdd} 
            autoComplete="off"
            className="d-flex align-items-end flex-column"
            >
            <div className=''>
                <div className="mb-1 mt-1 row">
                    <label className="col-sm-5 col-form-label">{arrayItem[values[0]]}</label>
                    <div className="col-sm-3">
                        <input
                            required
                            type="text"
                            placeholder={arrayItem[values[0]]}
                            name="item1"
                            value={item1}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                
                <div className="mb-1 row">
                    <label className="col-sm-5 col-form-label">{arrayItem[values[1]]}</label>
                    <div className="col-sm-7">
                        <input
                            required
                            type="text"
                            placeholder={arrayItem[values[1]]}
                            name="item2"
                            value={item2}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="mb-1 row justify-content-end">
                    <label className="col-sm-5 col-form-label">{arrayItem[values[2]]}</label>
                    <div className="col-sm-7">
                        <input
                            required
                            type="text"
                            placeholder={arrayItem[values[2]]}
                            name="item3"
                            value={item3}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="mb-1 row justify-content-end">
                    <label className="col-sm-5 col-form-label">{arrayItem[values[3]]}</label>
                    <div className="col-sm-7">
                        <input
                            required
                            type="text"
                            placeholder={arrayItem[values[3]]}
                            name="item4"
                            value={item4}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>


            </div>


            <div className='' >
                <Button 
                    className="mt-2"
                    type="submit"
                >AGREGAR</Button>                    
            </div>
        </Form>      
  )
}
