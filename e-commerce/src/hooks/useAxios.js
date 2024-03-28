import { useState } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

export const useAxios = ({
  reqType,
  endpoint,
  payload,
  config,
  initialValue,
}) => {
  const [data, setData] = useState(initialValue);
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  const doRequest = () => {
    setLoading(true);
    return axiosWithAuth()
      [reqType](endpoint, payload, config)
      .then((res) => {
        setData(res.data);
        return res.data;
      })
      .catch((err) => {
        setErr(err);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  return [doRequest, data, loading, err];
};
