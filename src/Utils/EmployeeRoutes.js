import { Route } from "react-router-dom";
import Tasks from "../Pages/Tasks";
import Event from "../Pages/Event";
import PersonalInfo from "../Pages/PersonalInfo";
import Team from "../Pages/Team"
import Financial from "../Pages/Financial"
import LeaveDetail from "../Pages/LeaveDetail";
import Attendance from "../Pages/Attendance";

function handleEmployeeRoutes (){
return(
    <>
    <Route path="/tasks" element={<Tasks/>} />
    <Route path="/personal-info" element={<PersonalInfo/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/financial" element={<Financial/>}/>
    <Route path="/leaves-detail" element={<LeaveDetail/>}/>
    <Route path="/attendence" element={<Attendance/>}/>
    <Route path="/event" element={<Event/>}/>
    </>
)
}

export default handleEmployeeRoutes