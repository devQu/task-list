export default props => {

return (
    <div>
        {props.title} <button onClick={props.onDel}>Supprimer!</button>
    </div>
)
}