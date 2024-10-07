import './Table.css'
import columnData from './data/columnData.json'
import tableData from './data/tableData.json'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component

function Table({ type }) {
  function getColumns (type) { // get colums for table
    return columnData.find(obj => obj.value === type).data
  }

  function getData (type) { // get data for table
    return tableData.find(obj => obj.value === type).data
  }

  // Table settings
  const defaultColDef = {
    flex: 1,
  }

  const autoSizeStrategy={
    type: "fitGridWidth",
  }

  return (
    <>
      <div className="tableTitle">{type}</div>
      <div className="ag-theme-quartz" style={{ height: '85% ', width: '95%' }}>
        <AgGridReact
          rowData={getData(type)}
          columnDefs={getColumns(type)}
          defaultColDef={defaultColDef}
          autoSizeStrategy={autoSizeStrategy}
        />
      </div>
    </>
  )
}

export default Table;