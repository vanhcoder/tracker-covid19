import React , {useState} from 'react';
import CardInfor from '../CardInfor/CardInfor';
import '../GroupCard/group-card.css';

function Card({recovered , cases , deaths , 
    todayDeaths ,todayRecovered, todayCases ,
    
}){
    return [
        {
            title:'Coronavirus Cases',
            total: cases,
            className: 'cases',
            cases :todayCases
        },
        {
            title:'Recovered',
            total: recovered,
            className: 'recovered',
            cases :todayRecovered
        },
        {
            title:'Deaths',
            total: deaths,
            className: 'deaths',
            cases :todayDeaths
        }
    ]
} 
function GroupCard({countryID , handleChange }) {
    const [scaseType, setScaseType] = useState('');
    const handleOnChange=(scaseType)=>{
        setScaseType(scaseType);
        handleChange(scaseType);
    }
    return (
        <div className="card-container">
            {Card(countryID).map((card , i)=>(
                 <CardInfor 
                   handleOnChange={()=>handleOnChange(card.className)}
                   key ={i}
                   total ={card.total} 
                   title ={card.title}
                   cases = {card.cases}
                   className ={card.className}
                   scaseType={scaseType}
                />
            ))}
        </div>
    );
}

export default GroupCard;