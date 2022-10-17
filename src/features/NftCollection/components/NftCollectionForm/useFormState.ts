import { useFormik } from 'formik';
import Web3 from 'web3';

import { NftCollectionDO } from '../../interfaces';

interface NftCollectionFormValues extends Partial<NftCollectionDO> {}
interface IFormHookProps {
  initialData?: NftCollectionFormValues;
  onSubmit?: (values: NftCollectionDO) => void;
}

type AllFieldsTypes = NftCollectionFormValues[keyof NftCollectionFormValues];
type FieldValidator = (value: AllFieldsTypes) => string | undefined;
type FormikValidators = Partial<Record<keyof NftCollectionFormValues, FieldValidator>>;
type FormikErrors = Partial<Record<keyof NftCollectionFormValues, string>>;

const fieldErrorMap: FormikValidators = {
  blockchain: (value) => (!value ? 'Blockchain is required' : undefined),
  dataHost: (value) => (!value ? 'Data host is required' : undefined),
  owner: (value) => {
    const typedValue = value as string;
    if (!typedValue) return 'Owner is required';
    if (!Web3.utils.isAddress(typedValue)) return 'Invalid Eth address';
    return undefined;
  },
  collectionName: (value) => {
    const typedValue = value as string;
    if (!typedValue) return 'Collection name is required';
    if (typedValue.length < 3 || typedValue.length > 128) return 'Collection name should contain 3-128 characters';
    return undefined;
  },
  symbol: (value) => {
    const typedValue = value as string;
    if (!typedValue) return 'Symbol is required';
    if (typedValue.length < 1 || typedValue.length > 64) return 'Symbol should contain 1-64 characters';
    return undefined;
  },
  amount: (value) => {
    const typedValue = value as number;
    if (!typedValue) return 'Amount is required';
    if (typedValue > 10000) return 'Amount should be less than 10000';
    return undefined;
  },
  description: (value) => {
    const typedValue = value as string;
    if (!typedValue) return 'Description is required';
    if (typedValue.length < 16 || typedValue.length > 1024) return 'Description should contain 16-1024 characters';
    return undefined; 
  },
};

export const useFormState = (props: IFormHookProps = {}) => {
  const { initialData, onSubmit = () => {} } = props;
  const initialValues: NftCollectionFormValues = initialData || {
    blockchain: undefined,
    dataHost: undefined,
    owner: '',
    collectionName: '',
    symbol: '',
    amount: 0,
    description: '',
  }

  const formik = useFormik<NftCollectionFormValues>({
    initialValues,
    validate: (data) => {
      let errors: FormikErrors = {};
      
      Object.entries(fieldErrorMap).forEach(([key, validator]) => {
        const fieldData = data[key as keyof NftCollectionFormValues];
        const error = validator(fieldData);
        if (error) {
          errors[key as keyof NftCollectionFormValues] = error;
        }
      });

      return errors;
    },
    onSubmit: (data) => {
      const nftCollection: NftCollectionDO = {
        picture: data.picture,
        blockchain: data.blockchain!,
        dataHost: data.dataHost!,
        owner: data.owner!,
        collectionName: data.collectionName!,
        symbol: data.symbol!,
        amount: data.amount!,
        description: data.description!,
      };
      onSubmit(nftCollection);
    },
  });

  const getFormErrorMessage = (field: keyof NftCollectionFormValues) => {
    return formik.touched[field] && formik.errors[field] ? formik.errors[field] : undefined;
  };

  return {
    formik,
    getFormErrorMessage,
  };
}