import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Home = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/companies')
            .then(res => res.json())
            .then(data => {
                console.table(data.data)
                setCompanies(data.data);
            }).catch(e => {
                console.log(e)
            })

    }, []); 
 
    return ( 
        <>
          <main>
            <h2>Pharmaceutical Companies</h2>
            <p></p>
          </main>
          <nav>
            <Link to="/medicine">Medicine</Link>
          </nav>

          <ul>
                    {companies.map(company => (
                        <li                           
                            key={company.id}>
                            {company.brandName}
                        </li>
                    ))}
                </ul>


        </>
      );
}

export default Home