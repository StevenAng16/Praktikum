import {Outlet} from "react-router-dom";
import Header from "../Pages/Header";


export default function Navbar () {
    return (
        <>
            <Header text = "To Do App"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            <ul >
            <p class="badge rounded-pill bg-dark"><span ><s>Membuat Komponen</s></span></p><br/>
            <p class="badge rounded-pill bg-dark"><span >Unit Testing</span></p><br/>
            <p class="badge rounded-pill bg-dark"><span ><s>Setup Development Enviroment</s></span></p><br/>
            <p class="badge rounded-pill bg-dark"><span >Deploy ke server</span></p><br/>
            </ul>
            <Outlet/>
        </>
    )
}
