import { useState } from 'react'

function Search({onInputChange}) {
    const buttonStyle = {background: "#fadf46ff", borderRadius: 5, width: 100};
    const flexStyle = {height: 50, display: "grid", gridTemplateColumns: "1fr 100px", gap: 5, paddingLeft: 5, marginTop: 15}

    const inputChange = (e) => {
       onInputChange(e.target.value);
    }
    return ( <span style={flexStyle}><input onChange={inputChange} /> <button style={buttonStyle}>Submit</button></span> )
}

export default Search;