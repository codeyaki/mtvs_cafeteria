
function Button(props){
    const {className, label, onClick, disabled, children} = props;
    return (
        <div className="buttonBox">
            <button className="{className}" onClick={onClick} disabled={disabled}>{children}</button>
        </div>
    );
}

export default Button;