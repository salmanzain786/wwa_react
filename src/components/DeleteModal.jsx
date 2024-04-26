function DeleteModal({title, description, collectionId = '', document_id = ''}) {
    return (<>
        <dialog id="delete_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{description}</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog></>);
}

export default DeleteModal;