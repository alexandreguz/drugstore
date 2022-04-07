import AddMedicine from "./AddMedicine"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Medicine = () => {
    const [medicines, setMedicines] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/medicine')
            .then(res => res.json())
            .then(data => {
                console.table(data.data)
                setMedicines(data.data);
            }).catch(e => {
                console.log(e)
            })
    }
        , [])



    return (
        <>
            <main>
                <h2>Pharmaceutical Companies</h2>
                <p></p>
            </main>

            <nav>
                <Link to="/addmedicine">Add Medicine</Link>
            </nav>


            <ul>
                {medicines.map(medicine => (
                    <li
                        key={medicine.id}>
                        {medicine.medicineName}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Medicine