import React, { useState } from 'react'

const Search = () => {
    const [state, setState] = useState('');
    const handleOnChange = (e) => {
        setState(e);
    }
    return (
        <form target="_blank" className="search" action={`https://www.tax.service.gov.uk/eat-out-to-help-out/find-a-restaurant/results?postcode=${state}`}>
            <label for="postcode">Look for restaurants around your area</label>
            <div>
                <input type="text" id="postcode" name="postcode" placeholder="Type your postcode" onChange={(e) => handleOnChange(e)}/>
                <button type="submit">Search</button>
            </div>
        </form>
    )
}

export default Search;