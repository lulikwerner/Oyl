import React, { useEffect, useState } from 'react';
import OptionList from '../OptionList/OptionList';
import { gFetch2 } from '../../utils/gFetch';

const FAQSListContainer = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    gFetch2()
    .then(resp => {
      setOptions(resp);
      console.log(resp); // Log the options array
    })
      .catch(err => console.log(err))
      .finally(() => console.log('at the end'));
  }, []);

  return (
    <div className="containerPF">
      <OptionList className="" options={options} />
    </div>
  );
};

export default FAQSListContainer;