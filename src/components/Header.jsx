/* eslint-disable react/prop-types */

import { useEffect } from "react";

const Header = (props) => {

    useEffect(() => {
        document.title = props.titel || 'Heme Page';
      }, [props.titel]);
    // return (
        
    //     <div>
    //      <h1>{props.titel}</h1>
    //     </div>
    // );
};

export default Header;