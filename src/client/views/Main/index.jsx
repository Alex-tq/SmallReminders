import React, { useState, useEffect } from 'react';
import PrinciplesList from './PrinciplesList';
import Description from './Description';
import axios from 'axios';
import { getServerURL } from '../../config/urls';
import './Main.scss';

function Main () {
  const [data, setData] = useState(false);

  useEffect(() => {
    axios.get(getServerURL())
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
        setData(false);
      });
  }, []);

  return (
    <div className='container'>
      <Description />
      <PrinciplesList data={data} />
    </div>
  );
}

export default Main;