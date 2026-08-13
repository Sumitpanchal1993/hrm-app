import { Route } from "react-router-dom";


function handleEmployeeRoutes (){
return(
    <>
    <Route path="/tasks" element={"Task"} />
    <Route path="/personal-info" element={"personal-info"}/>
    <Route path="/team" element={"team"}/>
    <Route path="/financial" element={"financial"}/>
    <Route path="/leaves-detail" element={"leaves-detail"}/>
    <Route path="/attendence" element={"attendence"}/>
    </>
)
}

export default handleEmployeeRoutes