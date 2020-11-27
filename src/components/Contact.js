function Contact(props) {

    let classes = ["tacheItem"]
    if (props.completed) classes.push("done")

    return (
        <div className={classes.join(' ')}>
            <input type="checkbox" checked={props.completed} onChange={() => props.onCheck(props.index)}></input>
            {props.title} 
            <button onClick={props.onDel} className="delete">Supprimer!</button>
        </div>
    )
}

export default Contact;