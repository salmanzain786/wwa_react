import InputText from "../../components/InputText";
import SelectBox from "../../components/SelectBox";
import { useState } from "react";
import todoModel from "../../app_write/toDo";

function ServiceForm({setPending}) {
    const selectItem = [{value : 1,name : 'Active'},{value : 0,name : 'Inactive'}]
    const [formvalue, setformvalue] = useState({name : '', status : '1'})
    const changeHandler = (event) => {
        setformvalue({...formvalue,[event.target.name]:event.target.value})
        console.log(formvalue)
    }
    const submitHandler = async(e) => {
        e.preventDefault();
        setPending(true)
        formvalue.status = (formvalue.status == 1) ? true : false;
        const response = await todoModel.createService(formvalue)
        console.log(response)
        document.getElementById('my_modal_1').close()
        setPending(false)
        setformvalue({name : "", status :"1"});
    }
    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form action="" className="mt-10 p-0" onSubmit={submitHandler}>
                    <h3 className="font-bold text-lg">Create Service</h3>
                        <InputText className='' label_text='Service Name' placeholder='Please Enter Your Service Name' textBoxClass='' name="name" onChange={changeHandler}/>
                        <br/>
                        <SelectBox className='' label_text='Status' selectBoxClass='' items={selectItem} selected_value="1" name='status' onChange={changeHandler} />
                    <div className="modal-action">
                        <button className="btn bg-gray-800 text-white">Submit</button>
                    </div>
                    </form>
                </div>
            </dialog>
        </>);
}

export default ServiceForm;