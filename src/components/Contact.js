function Contact(props) {

    return (
        <div>
            <input type="checkbox" checked={props.completed} onChange={() => props.onCheck(props.index)}></input>
            {props.title} 
            <button onClick={props.onDel}>Supprimer!</button>
        </div>
    )
    }

export default Contact;