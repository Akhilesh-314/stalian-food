import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loading spinner will stop after 3 seconds

    return () => clearTimeout(loadingTimeout); // Cleanup timeout
  }, []);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/"); // Redirect to homepage after 5 seconds
    }, 10000);

    return () => clearTimeout(redirectTimeout); // Cleanup timeout
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p className="text-center">Your order has been successfully placed.</p>

          <h5 className="text-blue-300 flex items-center justify-center">You will redirect to home page </h5>
        </div>
      )}
    </div>
  );
};

export default Success;
