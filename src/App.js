import "./App.css";
import InputSelector from "./components/InputSelertor/InputSelector";
import React, { useEffect, useState } from "react";
import { getCountries , getCountriesById } from "./apis/apis";
import TableCountry from "./components/TableCountry/TableCountry";
import GroupCard from "./components/GroupCard/GroupCard";
import MapWord from "./components/Map/MapWord";
import {orderBy} from 'lodash';
import LineGraph from "./components/LineGraph/LineGraph";
import { Card, CardContent } from "@material-ui/core";
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("VN");
  const [countryID , setCountryID] = useState({});
  const [tableData , setTableData] = useState([]);
  const [dataMap , setDataMap] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 21, lng: 105.8});
  const [mapZoom, setMapZoom] = useState(3);
  const [casesType , setCasesType] = useState('cases');
  console.log(casesType);
  useEffect(() => {
    getCountries().then((result) => {
      setCountries(result.data);
      const oderbyTable = orderBy(result.data,'cases','desc')
      setTableData(oderbyTable);
      setDataMap(result.data);

    });
  }, []);
  const handleOnChange = (e) => {
    const country = e.target.value;
    setCountry(country);
  };
  useEffect(() => {
    getCountriesById(country).then((result) => {
       setCountryID(result.data)
       setMapCenter([result.data.countryInfo.lat, result.data.countryInfo.long]);
       setMapZoom(4);
    });
  },[country])
  return (
    <div className="App">
      <div className="left">
        <div className="menu">
          <h1>Tracker covid 19 in the world</h1>
          <InputSelector
            handleOnChange={handleOnChange}
            countries={countries}
            country={country}
          />
        </div>
       <GroupCard 
          countryID={countryID} 
          handleChange={(type)=>setCasesType(type)}
       />
       <MapWord 
            countries={dataMap}
            center={mapCenter}
            zoom={mapZoom}  
            casesType = {casesType}  
        />
      </div>
      <div className="right">
         <Card>
            <CardContent>
               <TableCountry tableData={tableData}/>
               <LineGraph casesType={casesType} country={country} />
            </CardContent>   
        </Card>
      </div>
    </div>
  );
}

export default App;
