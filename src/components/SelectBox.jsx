function SelectBox({className = '', label_text = '', selectBoxClass = '', name= '', items = [], selected_value='', onChange}) {
    const concatFormclassName = `form-control ${className}`
    const concatselectBoxClass = `select select-bordered w-full  ${selectBoxClass}`
    const handleChange = (event) => {
        onChange(event);
    };
    return ( <>
    <label className={concatFormclassName}>
        <div className="label">
            <span className="label-text">{label_text}</span>
        </div>
        <select name={name} className={concatselectBoxClass} onChange={handleChange}>
            {items.map((item, index) => <option key={index} defaultValue={selected_value} value={item.value}>{item.name}</option> )}
        </select>
    </label>
   
    </> );
}

export default SelectBox;