function Toast(text= '',type='info') {
    const elert_class = `alert alert-${type}`;
    return ( <><div className="toast">
    <div className={elert_class}>
      <span>{text}</span>
    </div>
  </div></> );
}
export default Toast;