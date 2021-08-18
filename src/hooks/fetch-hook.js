import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (configRequest, shapeData) => {
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
      const data = await response.json();

      shapeData(data);
    } catch (error) {
      setError(`Sending post request error: ${error.message}`);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
