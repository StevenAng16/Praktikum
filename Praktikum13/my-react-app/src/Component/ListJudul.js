
import ListItem from './ListItem'

const ListJudul = (props) => {
    const {data, hapusJudul} = props

    return (
        <div>       
            {data.map((title) => <ListItem key={title.id} item ={title} hapusJudul={hapusJudul} />)}
        </div>
    )
}

export default ListJudul