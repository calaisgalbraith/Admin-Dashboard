import { ReactTabulator } from 'react-tabulator'
import 'react-tabulator/lib/styles.css';
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet
import './Table.css'

function Table({ columns, data }) {
  console.log("table")
  console.log(columns)
  return (
    // <div>
    //   <div>INVENTORY</div>
      <ReactTabulator
          data={data}
          columns={columns}
          className="tableContainer"
          // layout={"fitData"}
      />
    // </div>
  )
}

export default Table;