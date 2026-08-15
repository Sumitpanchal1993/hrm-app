import { Route } from "react-router-dom";
import Tabs from "../Components/Tabs";
import Tasks from "../Pages/Tasks";

function handleEmployeeRoutes (){
return(
    <>
    <Route path="/tasks" element={<Tasks/>} />
    <Route path="/personal-info" element={<Tabs/>}/>
    <Route path="/team" element={"team"}/>
    <Route path="/financial" element={"financial"}/>
    <Route path="/leaves-detail" element={"leaves-detail"}/>
    <Route path="/attendence" element={"attendence"}/>
    </>
)
}

export default handleEmployeeRoutes