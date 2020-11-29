function Tache(props) {

    let classes = ["tacheItem"]
    if (props.completed) classes.push("done")

    // ErrorBoundary
    if (props.title.length >= 60) {
        throw new Error("The task name is too long!")
    }

    return (
        <div className={classes.join(' ')}>
            <input type="checkbox" checked={props.completed} onChange={() => props.onCheck(props.index)}></input>
            {props.title} 
            <button onClick={props.onDel} className="delete">Supprimer!</button>
        </div>
    )
}

export default Tache;