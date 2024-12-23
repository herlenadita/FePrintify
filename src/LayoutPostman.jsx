import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Request from './components/Workspace/Request/RequestPanel';
import Response from './components/Workspace/Response/ResponsePanel';
import { useNavigate } from "react-router-dom";

const LayoutPostman = () => {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate session check
        const username = localStorage.getItem("username"); // Retrieve token from localStorage

        if (!username) {
            // If no token, update state
            navigate("/login");
            
        }
    }, [response]); // Empty array means this runs only once

    return (
        <>
            <Layout>
                <Request setResponse={setResponse} setLoading={setLoading} />
                <Response response={response} loading={loading} />
            </Layout>  
        </>
    )
}
export default LayoutPostman;