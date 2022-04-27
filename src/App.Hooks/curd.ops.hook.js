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
  var [isRan, setIsRan] = useState(false);

  // eslint-disable-next-line consistent-return
  const fetchData = () => {
    if (!url) { return false; }
    const slashCount = (url.match(/\//g) || []).length;
    if (method && slashCount >= 3) {
      axios[method](url).then((res) => {
        setResp(res.data);
      })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setSpinner(false);
        });
    }
  };

  useEffect(() => {
    const fetchRan = fetchData();
    if (url) {
      setIsRan(true);
    } else {
      setIsRan(false);
    }
  }, [method, url, body, headers]);
  return {
    resp,
    error,
    spinner,
    isRan
  };
};

export default useCURDOps;
