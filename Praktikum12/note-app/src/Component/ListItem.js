const ListItem = ({item, hapusJudul}) => {
    return (
        <tr>
            <td>{item.title}</td>
            <td>
                <button onClick={() => {hapusJudul(item.id)}}>Delete</button>
            </td>
        </tr>
    )
}

export default ListItem
