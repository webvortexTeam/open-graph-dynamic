import { InvalidPropriety } from '~/core/errors';
import { openGraphInputType } from '~/core/protocols';
import { isValidName, isValidTitle } from './validate';

export const validationOpenGraphProps = async (props: openGraphInputType): Promise<openGraphInputType> => {
  let user = {
    name: isValidName(props.user.name),
    username: isValidName(props.user.username),
    image: props.user.image,
  };

  const metadata = {
    title: isValidTitle(props.title),
    user,
  };
  console.log({ metadata });
  if (!metadata.title) {
    throw new InvalidPropriety('title');
  }
  if (metadata.user) {
    if (!metadata.user.name) {
      throw new InvalidPropriety('user:name');
    }
    // if (!metadata.user.username) {
    //   throw new InvalidPropriety('user:username');
    // }
    if (metadata.user.image.length < 5) {
      throw new InvalidPropriety('img user');
    }
  }

  return {
    ...props,
  };
};
