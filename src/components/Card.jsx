function Card({heading, children }) {
    return ( 
        <>
            <div className="card w-100 bg-gray-800 text-primary-content my-10">
                <div className="card-header">
                    <h2 className="card-title p-5 text-white rounded-t-lg">{heading}</h2>
                </div>
                <div className="card-body bg-slate-100 rounded-b-lg">
                    { children }
                </div>
            </div>
        </>
     );
}

export default Card;