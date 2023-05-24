import React,{useEffect} from "react";

const Contact = () => {

    useEffect(() => {
        const timer = setInterval(()=>console.log("Hello Bro"));
        return () => {
           clearInterval(timer);
        };
    }, []);

    return (
        <div>
            Contact us page
        </div>
    )
}

export default Contact;
