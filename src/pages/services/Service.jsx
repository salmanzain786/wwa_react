import Table from "../../components/Table";
import todoModel from "../../app_write/toDo";
import { useState, useEffect } from "react";
import ServiceForm from './SeviceForm';

function Service() {
    
    const [pending, setPending] = useState(true);
    const [data,setData] = useState([])
    
    const columns = [
        {name: 'Name',selector: row => row.name,sortable: true,},
        {name: 'Action', cell: (row) => {
            return (<><button className='btn bg-gray-400 btn-xs'>Edit</button><button className='btn bg-red-400 btn-xs' onClick={() => {deleteHandler(row.$id)}}>Delete</button></>);
        },sortable: true,},
    ];

    useEffect(() => {
        const loadData = async() => {
            const list = await todoModel.getList();
            console.log(list.documents)
            setData(list.documents)
            setPending(false)
        }
        loadData();
    },[pending])

    const deleteHandler = async(id) => {
        setPending(true)
        console.log(id);
        const reponse = await todoModel.deleteService(id);
        console.log(reponse);
        setPending(false)
    }

    
    return ( 
        <>
            <ServiceForm pending={pending} setPending={setPending}/>
            <div className="container mx-auto">
                <div className="my-10">
                    <div className='border-solid border-2 p-10'>
                        <div className='text-right'>
                            <button className='btn bg-gray-800 text-white' onClick={()=>document.getElementById('my_modal_1').showModal()}>Create New</button>
                        </div>
                        <Table columns={columns} data={data} loader={pending}/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Service;