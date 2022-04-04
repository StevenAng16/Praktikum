import { hapusJudul } from '../app/JudulSlice'
import ListItem from './ListItem'
import './list.css'
import { useSelector, useDispatch } from 'react-redux'

const ListJudul = (props) => {
    const Judul = useSelector((state) => state.judul.Judul)
    const dispatch = useDispatch()

    return (
        <>
            {/* <!-- CSS only --> */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            {/* <!-- JavaScript Bundle with Popper --> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead>
                    <td></td>
                    {/* <td>Nama</td> */}
                </thead>
                {Judul.map((item) => (
                    <ListItem
                    key={item.id}
                    data={item}
                    hapusJudul={() => {
                        dispatch(hapusJudul(item.id))
                    }}
                    />
                ))}
            </table>
        </>
    )
}

export default ListJudul