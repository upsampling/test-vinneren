import React from 'react';
import DataTable from 'react-data-table-component';
import types from './types.json';

const Tables = ({ data, type }) => {

  const column = types[type];

  const paginationOption = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
  }

  return (
      <div className='table-responsive'>
        <DataTable
          columns={column}
          data={data}
          title="Listado de Planetas"
          pagination
          paginationComponentOptions={paginationOption}
        />
      </div>
  );
}

export default Tables;
