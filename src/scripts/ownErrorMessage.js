import {
  OWN_400,
  OWN_403,
  OWN_500_599,
  OWN_NETWORK_ERROR
} from '../data/constants'

export default function errorMessage(errorResponse) {
  let message = '';
  switch (true) {
    case errorResponse.status === 400:
      message = {
        OWN_400
      };
      break;
    case errorResponse.status === 403:
      message = {
        OWN_403
      };
      break;
    case errorResponse.status >= 500 && errorResponse.status < 600:
      message = {
        OWN_500_599
      };
      break;
    case errorResponse === 'Network Error':
      message = {
        OWN_NETWORK_ERROR
      };
      break;
    default:
      break;
  }
  return message
}