import React from 'react';
import { Tooltip } from 'primereact/tooltip';

export interface DataInputWrapperProps {
  tooltip?: string;
  label: string;
  isRequired?: boolean;
  errorText?: string;
  children: React.ReactElement;
}

export const DataInputWrapper: React.FC<DataInputWrapperProps> = (props) => {
  const { tooltip, label, isRequired, errorText, children } = props;
  const labelId = label.replace(/\s/g, '-').toLowerCase();
  const tooltipClass = `${labelId}-tooltip`;

  return <div>
    <div>
      <label htmlFor={labelId}>
        {label}
        { isRequired && <span>*</span> }
      </label>
      <Tooltip target={`.${tooltipClass}`}>{tooltip}</Tooltip>
      {tooltip && <i className={`pi pi-exclamation-circle ${tooltipClass}`}></i>}
    </div>
    <children.type 
      {...children.props}
      id={labelId}
      className={errorText ? 'p-invalid' : ''}
    />
    {errorText && <div className="p-error">{errorText}</div>}
  </div>;
};