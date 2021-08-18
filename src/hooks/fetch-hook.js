import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (configRequest, shapeData) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(configRequest.url, {
        method: configRequest.method ? configRequest.method : "GET",
        headers: configRequest.headers ? configRequest.headers : {},
        body: configRequest.body ? configRequest.body : null,
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = response.json();

      shapeData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return { isLoading, error, sendRequest };
};

export default useHttp;
