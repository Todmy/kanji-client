import React from 'react';

import { InputNumber, InputNumberValueChangeParams } from 'primereact/inputnumber';

export interface ICollectionMaxAmountProps {
  name: string;
  value: number | undefined;
  onValueChange: (e: InputNumberValueChangeParams) => void;
  addon: string;
  className?: string;
}

export const CollectionMaxAmount: React.FC<ICollectionMaxAmountProps> = (props) => {
  const { addon, className: rootClassName, ...restProps } = props;
  const isInvalid = rootClassName?.includes('p-invalid');
  return <div className="p-inputgroup">
    <InputNumber
      {...restProps}
      className={isInvalid ? 'p-invalid' : ''}
    />
    <span
      className="p-inputgroup-addon"
      style={{ minWidth: "120px" }}
    >{addon}</span>
  </div>
};
