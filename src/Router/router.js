import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddGroups from "../Components/AddGroup";
import AddStudents from "../Components/AddStudent";
import Groups from "../Components/Groups";
import Students from "../Components/Students";
import DefaultHOC from "../DefaultHOC";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultHOC/>}>
                    <Route path="" element={<Groups/>}/>
                    <Route path="addgroups" element={<AddGroups/>}/>
                    <Route path="groups/:id/students" element={<Students/>}/>
                    <Route path="groups/:id/addstudents" element={<AddStudents/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router