import './Table.css'
import columnData from './data/columnData.json'
import tableData from './data/tableData.json'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component

function Table({ type }) {
  function getColumns (type) {
    return columnData.find(obj => obj.value === type).data
  }

  function getData (type) {
    return tableData.find(obj => obj.value === type).data
  }
  const defaultColDef = {
    flex: 1,
  }

  const autoSizeStrategy={
    type: "fitGridWidth",
  }

  return (
    <>
      <div
        className="ag-theme-quartz"
        style={{ height: '100%', width: '100%' }}
      >
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