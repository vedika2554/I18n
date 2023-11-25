import React from "react";
import I18n from "./../../utils/i18n"
function Home (){
    const usersCount = 65;
    return(
      
    <div>
        <h1>{I18n("welcomeMessage")}</h1>
        <h3>{I18n("normalMessage")}</h3>
        <p>{I18n("greetingMessage")}</p>
        <p>{I18n("endMessage")}</p>
        <select defaultValue={localStorage.getItem("lang")}
        onChange={(e)=>{
            localStorage.setItem("lang",e.target.value);
            window.location.reload();
        }}>
            <option value="mr">Marathi</option>
            <option value="hi">Hindi</option>
            <option value="en">English</option>
        </select>
        <p>
           {I18n("usersStatMessage","<studentCount>",usersCount)}
        </p>
    </div>
    )
}
export default Home