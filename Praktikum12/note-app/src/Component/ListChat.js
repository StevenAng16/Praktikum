
import ListItem from './ListItem'

const ListChat = (props) => {
    const {data, hapusTitle} = props

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead color='colorful'>
                    <td>Judul</td>
                    {/* <td>Nama</td> */}
                </thead>
                <tbody>
                    {data.map((title) => <ListItem key={title.id} item ={title} hapusTitle={hapusTitle} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ListChat