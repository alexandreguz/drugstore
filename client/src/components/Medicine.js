import AddMedicine from "./AddMedicine"
import { Link } from "react-router-dom";


const Medicine = () => {
    return(
        <div>
            medicine
            <nav>
            <Link to="/addmedicine">Add Medicine</Link>
          </nav>
        </div>
    )
}

export default Medicine