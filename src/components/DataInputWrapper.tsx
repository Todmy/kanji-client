import React from 'react';
import { Tooltip } from 'primereact/tooltip';

export interface DataInputWrapperProps {
  tooltip?: string;
  label: string;
  isRequired?: boolean;
  errorText?: string;
  children: React.ReactElement;
  className?: string;
}

export const DataInputWrapper: React.FC<DataInputWrapperProps> = (props) => {
  const { tooltip, label, isRequired, errorText, children, className } = props;
  const labelId = label.replace(/\s/g, '-').toLowerCase();
  const tooltipClass = `${labelId}-tooltip`;

  return <div className={className}>
    <div 
      style={{
        marginBottom: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <label htmlFor={labelId}>
        <span>{label}</span>
        { isRequired && <span style={{ color: "#e24c4c" }}> *</span> }
      </label>
      <Tooltip target={`.${tooltipClass}`}>{tooltip}</Tooltip>
      {tooltip && <i className={`pi pi-exclamation-circle ${tooltipClass}`}></i>}
    </div>
    <children.type 
      {...children.props}
      id={labelId}
      style={{ width: "100%" }}
      className={errorText ? 'p-invalid' : ''}
    />
    {errorText && <div className="p-error">{errorText}</div>}
  </div>;
};