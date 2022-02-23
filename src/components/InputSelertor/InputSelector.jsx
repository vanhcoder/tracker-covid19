import { FormControl, MenuItem, Select } from '@material-ui/core';

import '../InputSelertor/input-selector.css';

function InputSelector({handleOnChange , countries , country}) {
    return (
        <div className="input-selector">
       <FormControl>
           <Select variant="outlined"
             value={country}
             onChange={handleOnChange}
           >
               {countries.map((country, i) =>(
                   <MenuItem key={i}
                     value={country.countryInfo.iso2}
                    >{country.country}
                    </MenuItem>
               ))}
           </Select>
       </FormControl>
       </div>
    );
}

export default InputSelector;