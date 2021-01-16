import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import SchoolForm from "../../components/SchoolForm/SchoolForm"

const AddSchoolPage = ()=>{
    return(
        <div>
            <NavBar/>
            <div className = "container">
                <SchoolForm/>
            </div>
        </div>
    )
}

export default AddSchoolPage;