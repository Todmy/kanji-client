import { useFormik } from 'formik';

import { NftCollection } from '../../dto';

interface NftCollectionFormValues extends Partial<NftCollection> {}

export const useFormState = (initialData?: NftCollectionFormValues) => {
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
      console.log(data);
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