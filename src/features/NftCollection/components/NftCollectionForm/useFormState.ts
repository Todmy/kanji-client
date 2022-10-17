import { useFormik } from 'formik';

import { NftCollectionDO } from '../../interfaces';

interface NftCollectionFormValues extends Partial<NftCollectionDO> {}
interface IFormHookProps {
  initialData?: NftCollectionFormValues;
  onSubmit?: (values: NftCollectionDO) => void;
}
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
      type FormikErrors = Partial<Record<keyof NftCollectionFormValues, string>>;
      let errors: FormikErrors = {};
      const fieldErrorMap: { required: FormikErrors } = {
        required: {
          blockchain: 'Blockchain is required',
          dataHost: 'Data destination is required',
          owner: 'Owner is required',
          collectionName: 'Collection name is required',
          symbol: 'Symbol is required',
          amount: 'Amount is required',
          description: 'Description is required',
        }
      };
      
      Object.entries(fieldErrorMap.required).forEach(([key, value]) => {
        const fieldData = data[key as keyof NftCollectionFormValues];
        if (!fieldData) {
          errors[key as keyof NftCollectionFormValues] = value;
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
        set: []
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