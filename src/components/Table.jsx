import { useEffect, useState } from "react"
import todoModel from "../app_write/toDo"
import DataTable from 'react-data-table-component';
const Table = ({columns = [], data = [], loader=false}) => {
    return(
        <div className="overflow-x-auto">
            <DataTable
                    title="Movie List"
                    columns={columns}
                    data={data}
                    dense
                    progressPending={loader}
                    pagination 
                />
            </div>
    )
}

export default Table