import { Route } from "react-router-dom";
import Tabs from "../Components/Tabs";
import Tasks from "../Pages/Tasks";
import Event from "../Pages/Event";

function handleEmployeeRoutes (){
return(
    <>
    <Route path="/tasks" element={<Tasks/>} />
    <Route path="/personal-info" element={<Tabs/>}/>
    <Route path="/team" element={"team"}/>
    <Route path="/financial" element={"financial"}/>
    <Route path="/leaves-detail" element={"leaves-detail"}/>
    <Route path="/attendence" element={"attendence"}/>
    <Route path="/event" element={<Event/>}/>
    </>
)
}

export default handleEmployeeRoutes