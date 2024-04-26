function InputText({FormclassName = '', label_text = '', placeholder = '', textBoxClass = '', name= '', onChange}) {
    
    const concatFormclassName = `form-control ${FormclassName}`
    const concattextBoxClass = `input input-bordered w-full  ${textBoxClass}`
    
    const handleChange = (event) => {
        onChange(event);
    };
    return ( <>
    <label className={concatFormclassName}>
        <div className="label">
            <span className="label-text">{label_text}</span>
        </div>
        <input type="text" name={name} placeholder={placeholder} className={concattextBoxClass} onChange={handleChange}/>
    </label>
    </> );
}

export default InputText;