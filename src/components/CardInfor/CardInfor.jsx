import { Card, CardContent, Typography } from '@material-ui/core';
import numeral  from 'numeral';
import React from 'react';
import '../CardInfor/card-infor.css';
function CardInfor({total , title , className , cases  , handleOnChange ,scaseType }) {
    console.log(className , scaseType);
    return (
        <Card className={`card ${className} ${scaseType === className && "infoBox--selected"}` }
             onClick={()=>handleOnChange()} >
            <CardContent className="card__content">
               <Typography className="card__tittle">{title}</Typography>
               <Typography variant="h5" className="card__case">+{numeral(cases).format('0.0a')}</Typography>
               <Typography className="card__total">{numeral(total).format('0.0a')} Total</Typography>
            </CardContent>
        </Card>
    );
}

export default CardInfor;