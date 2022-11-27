import { env } from '../shared/env';
import { validationOpenGraphProps } from '../shared/validators';
import { openGraphInputType, openGraphOutputType } from './protocols';
import queryString from 'query-string';

export const openGraph = async (props: openGraphInputType): Promise<openGraphOutputType> => {
  try {
    const isValid = await validationOpenGraphProps(props);
    const data: queryString.StringifiableRecord = {
      ...isValid,
      ...isValid.user,
      user: '',
    };

    const source = queryString.stringifyUrl(
      {
        url: `${env.baseUrl}`,
        query: { ...data },
      },
      {
        skipEmptyString: true,
      },
    );

    return { source };
  } catch (error) {
    throw error;
  }
};
