import { useState, useEffect } from 'react';
import axios from 'axios';
// import { APP_CONST } from '../app-constants';

const useCURDOps = ({
  url = '',
  method = '',
  body = null,
  headers = null,
}) => {
  const [resp, setResp] = useState(null);
  const [error, setError] = useState('');
  const [spinner, setSpinner] = useState(true);

  // eslint-disable-next-line consistent-return
  const fetchData = () => {
    // const head = headers ? JSON.parse(headers) : APP_CONST.REQUEST_HEADER;
    // const bod = body || null;
    // let axFormation;
    if (!url) { return false; }
    /* if (bod) {
      axFormation = axios[method](url, JSON.parse(head), JSON.parse(bod));
    } else {
      axFormation = axios[method](url);
    } */
    axios[method](url).then((res) => {
      setResp(res.data);
    })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setSpinner(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { resp, error, spinner };
};

export default useCURDOps;
