import React from 'react';
import { Card } from 'react-bootstrap';
import Option from '../Option/Option';
import '../OptionList/OptionList.css';

const OptionList = ({ options }) => {
  return (
    <div className="Opt-list">
      {options.map((opt) => (
        <Card key={opt.id} className="cardsPF">
          <Option opt={opt} />
        </Card>
      ))}
    </div>
  );
};

export default OptionList;
