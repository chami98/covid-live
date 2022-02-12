import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

  const [covidStat, setCovidStat] = useState({});
    useEffect(() => {
            axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical')
            .then(function (response) {
              // handle success
            console.log(response.data.data);
            setCovidStat(response.data.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        
      

      }, [])

   

    return ( 
        <div>
                <button >sefsfe</button>
                <p>Local New Cases: {covidStat.local_new_cases}</p>
                <p>Local Total Cases: {covidStat.local_total_cases}</p>
                <p>  Update date time:{covidStat.update_date_time} </p>
                <p>local total number of individuals in hospitals: {covidStat.local_total_number_of_individuals_in_hospitals}</p>
                <p>Local Deaths: {covidStat.local_deaths}</p>
        </div>
        
     );
}
 
export default Home;