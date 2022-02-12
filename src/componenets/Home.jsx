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
                <div className="container">
                <h2 style={{textAlign:"center"}}>COVID-19 Situation Report</h2>
                <p style={{textAlign:"center"}}>{covidStat.update_date_time} </p>
                <p>Local New Cases: {covidStat.local_new_cases }</p>
                <p>Local Total Cases: {covidStat.local_total_cases}</p>
                <p>local total number of individuals in hospitals: {covidStat.local_total_number_of_individuals_in_hospitals}</p>
                <p>LocalNew Deaths: {covidStat.local_deaths}</p>           
                <p>local_recovered: {covidStat.local_recovered}</p>
                <p>local_active_cases: {covidStat.local_active_cases}</p>
                <p>global_new_cases: {covidStat.global_new_cases}</p>
                <p>global_deaths {covidStat.global_deaths}</p>
                <p>global_new_deaths: {covidStat.global_new_deaths}</p>
                <p>global_recovered: {covidStat.global_recovered}</p>
                <p>global_total_cases: {covidStat.global_total_cases}</p>
                <p>total_pcr_testing_count: {covidStat.total_pcr_testing_count}</p>
                </div>
               
        </div>
        
     );
}
 
export default Home;