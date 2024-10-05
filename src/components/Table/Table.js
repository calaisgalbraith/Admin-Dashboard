import './Table.css'
import columnData from './data/columnData.json'
import tableData from './data/tableData.json'

function Table({ type }) {
  function getColumns (type) {
    return columnData.find(obj => obj.value === type).data
  }

  function getData (type) {
    return tableData.find(obj => obj.value === type).data
  }
  return (
    <>
    {type}
    </>
  )
}

export default Table;