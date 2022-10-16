import React from 'react';

import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';
import { InputTextarea } from 'primereact/inputtextarea';

import { DataInputWrapper } from 'components';
import { CollectionMaxAmount } from './CollectionMaxAmount';
import { useFormState } from './useFormState';

export interface INftCollectionFormProps {}
export const NftCollectionForm: React.FC<INftCollectionFormProps> = (props) => {
  const {
    formik,
    getFormErrorMessage,
  } = useFormState();

  return <form onSubmit={formik.handleSubmit} className="p-col-4">
    <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
    <div className="p-col-8">
      Collection Picture <span>*</span>
      <Button label="Upload" />
    </div>

    <div className="p-col-8">
      <DataInputWrapper
        label="Blockchain"
        tooltip="Information about the blockchain"
        isRequired
        errorText={getFormErrorMessage('blockchain')}
      >
        <Dropdown
          name="blockchain"
          value={formik.values.blockchain} 
          onChange={formik.handleChange} 
          options={[]} 
          placeholder="-- Select --" 
          autoFocus
        />
      </DataInputWrapper>

      <DataInputWrapper
        label="Save my data on"
        tooltip="Information about the data destination"
        isRequired
        errorText={getFormErrorMessage('dataHost')}
      >
        <Dropdown
          name="dataHost"
          value={formik.values.dataHost} 
          onChange={formik.handleChange} 
          options={[]} 
          placeholder="-- Select --" 
        />
      </DataInputWrapper>
    </div>

    <div className="p-col-8">
      <DataInputWrapper
        label="Collection Name"
        isRequired
        errorText={getFormErrorMessage('collectionName')}
      >
        <InputText
          name="collectionName" 
          value={formik.values.collectionName}
          onChange={formik.handleChange} 
        />
      </DataInputWrapper>

      <DataInputWrapper
        label="Symbol of the collection"
        isRequired
        errorText={getFormErrorMessage('symbol')}
      >
        <InputText
          name="symbol"
          value={formik.values.symbol}
          onChange={formik.handleChange} 
        />
      </DataInputWrapper>

      <DataInputWrapper
        label="Amount of NFTs in the collection"
        isRequired
        errorText={getFormErrorMessage('amount')}
      >
        <CollectionMaxAmount
          name="amount"
          value={formik.values.amount}
          onValueChange={formik.handleChange} 
          addon="Max: 10 000"
        />
      </DataInputWrapper>
    </div>

    <div className="p-col-8">

      <DataInputWrapper
        label="Owner"
        tooltip="Information about the owner"
        isRequired
        errorText={getFormErrorMessage('owner')}
      >
        <InputText
          name="owner"
          value={formik.values.owner}
          onChange={formik.handleChange} 
        />
      </DataInputWrapper>

      <div>
        <Tooltip target=".more-options" position="top">Some extra information...</Tooltip>
        <Button className="more-options p-button-text p-button-plain" label="More Options"/>
      </div>
    </div>

    <div className="p-col-8">

      <DataInputWrapper
        label="Description"
        tooltip="Explanation why description is needed"
        isRequired
        errorText={getFormErrorMessage('description')}
      >
        <InputTextarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          rows={5}
          cols={30}
          autoResize
        />
      </DataInputWrapper>
    </div>

    <div className="p-col-8">
      <Button label="Continue" type="submit" />
    </div>
  </form>;
};
