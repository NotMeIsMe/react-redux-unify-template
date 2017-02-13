import memoize from 'lru-memoize';
import {createValidator, required, maxLength, email} from '../../utils/validation';

const contactValidation = createValidator({
  firstName: [required, maxLength(10)],
  lastName: [required, maxLength(10)],
  email: [required, email]
});
export default memoize(10)(contactValidation);
