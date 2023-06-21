export default ({type, label, placeholder, fieldRef, hasError}) => {

    const classes = "";

    return (
     <div className="form-group mb-4 text-center">
        <label className="block text-primary text-[18px] font-medium mb-2">{label}</label>
        {type === 'textarea' ? (
        <textarea className={classes} rows="3" placeholder={placeholder} {...fieldRef} />
        ) : (
            <input className={classes} type={type} placeholder={placeholder} {...fieldRef} />
        )}
        {hasError && <p className="text-primary text-xs italic">`{label} es requerido`</p>}
     </div>
 );
};