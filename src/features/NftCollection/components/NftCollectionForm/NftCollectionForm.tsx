import React from 'react';

import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';

import { DataInputWrapper } from 'components';
import { useAppDispatch, useAppSelector } from 'app/reduxHooks';

import { createNftCollection, updateNftCollection, getLoadingState, getCollectionById } from '../../store';
import { CollectionMaxAmount } from './CollectionMaxAmount';
import { useFormState } from './useFormState';
import styles from './NftCollectionForm.module.css';
import { NftCollectionBlockchain, NftCollectionDataHost } from '../../enums';
import { NftCollectionDO } from '../../interfaces';

export interface INftCollectionFormProps {
  collectionId?: string;
  className?: string;
  onSuccessfulSubmit: () => void;
}

const blockchainList = [
  { label: 'Ethereum', value: NftCollectionBlockchain.ETHEREUM },
  { label: 'Polygon', value: NftCollectionBlockchain.POLYGON },
];

const dataHostList = [
  { label: 'IPFS', value: NftCollectionDataHost.IPFS },
  { label: 'Arweave', value: NftCollectionDataHost.ARWEAVE },
];

const getProperPicture = async (picture: string | undefined | File) => {
  return new Promise<string | undefined>((resolve, reject) => {
    if (!picture) {
      resolve(undefined);
      return;
    }
    
    if (typeof picture === 'string') {
      resolve(picture);
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target?.result as string);
    }
    reader.readAsDataURL(picture);
  });
}

export const NftCollectionForm: React.FC<INftCollectionFormProps> = (props) => {
  const [collectionPicture, setCollectionPicture] = React.useState<string | undefined>(undefined);
  const dispatch = useAppDispatch()
  const isLoading: boolean = useAppSelector(getLoadingState);
  // optional activeCollection
  const activeCollection: NftCollectionDO | undefined = useAppSelector(getCollectionById(props.collectionId));

  const {
    formik,
    getFormErrorMessage,
  } = useFormState({
    initialData: activeCollection,
    onSubmit: async (data) => {
      try {
        if (props.collectionId) {
          var a = await dispatch(updateNftCollection(props.collectionId, data));
          console.log(a);
        } else {
          await dispatch(createNftCollection(data));
        }
        props.onSuccessfulSubmit();
      } catch (error) {
        console.log(error);
      }
    }
  });

  React.useEffect(() => {
    getProperPicture(formik.values.picture).then(setCollectionPicture);
  }, [formik.values.picture]);

  const onFileSelect = (event: any) => {
    formik.setFieldValue('picture', event.files[0]);
  };

  return <form 
    className={`${props.className} ${styles.form}`}
    onSubmit={formik.handleSubmit}
  >
    <div className={styles.pictureBlock}>
      <div className={styles.pictureWrapper}>
        { 
          formik.values.picture
          ? <img
            src={collectionPicture}
            className={styles.picture}
            alt={formik.values.collectionName}
          />
          : <i className={`pi pi-cloud-upload ${styles.pictureIcon}`}/>
        }
      </div>
      <div className={styles.pictureUpload}>
        <label htmlFor="uploadBtn">Collection Picture</label>
        <FileUpload
          id="uploadBtn"
          mode="basic"
          chooseOptions={{ 
            label: 'Upload',
            className: `p-button p-button-outlined p-button-secondary ${styles.uploadBtn}`,
            icon: styles.uploadBtnIcon
          }}
          name="demo"
          accept="image/*"
          maxFileSize={10000}
          customUpload
          onSelect={onFileSelect}
        />
      </div>
    </div>

    <DataInputWrapper
      className={styles.blockchain}
      label="Blockchain"
      tooltip="Information about the blockchain"
      isRequired
      errorText={getFormErrorMessage('blockchain')}
    >
      <Dropdown
        name="blockchain"
        value={formik.values.blockchain} 
        onChange={formik.handleChange} 
        options={blockchainList} 
        placeholder="-- Select --" 
        autoFocus
      />
    </DataInputWrapper>

    <DataInputWrapper
      className={styles.dataHost}
      label="Save my data on"
      tooltip="Information about the data destination"
      isRequired
      errorText={getFormErrorMessage('dataHost')}
    >
      <Dropdown
        name="dataHost"
        value={formik.values.dataHost} 
        onChange={formik.handleChange} 
        options={dataHostList} 
        placeholder="-- Select --" 
      />
    </DataInputWrapper>

    <DataInputWrapper
      className={styles.collectionName}
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
      className={styles.symbol}
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
      className={styles.amount}
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

    <DataInputWrapper
      className={styles.owner}
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

    <div className={styles.ownerDetails}>
      <Button
        className={`more-options p-button-text p-button-plain ${styles.moreOptions}`}
        type="button"
        label="More Options"
        tooltip="Some extra information..."
      />
    </div>

    <DataInputWrapper
      className={styles.description}
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

    <div className={styles.footer}>
      <Button
        label="Continue"
        type="submit"
        loading={isLoading}
        disabled={!formik.isValid}
      />
    </div>
  </form>;
};
