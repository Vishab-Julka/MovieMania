import React from "react";
import Navbar from "../Components/Navbar/Navbar.component";

const DefaultLayout = (props) => {
    return (
        <>
            <div> <Navbar /> </div>
            {props.children}
            <div>Footer</div>
        </>
    );

};

export default DefaultLayout;