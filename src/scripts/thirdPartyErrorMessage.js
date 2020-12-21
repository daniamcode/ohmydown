import {
  THIRD_PARTY_301,
  THIRD_PARTY_302,
  THIRD_PARTY_400,
  THIRD_PARTY_403,
  THIRD_PARTY_404,
  THIRD_PARTY_406,
  THIRD_PARTY_408,
  THIRD_PARTY_421,
  THIRD_PARTY_429,
  THIRD_PARTY_495
} from '../data/constants'

export default function errorMessage(errorResponse) {
  let message = '';
  switch (true) {
    case errorResponse.status === 301:
      message = {THIRD_PARTY_301};
      break;
    case errorResponse.status === 302:
      message = {THIRD_PARTY_302};
      break;
    case errorResponse.status === 400:
      message = {THIRD_PARTY_400};
      break;
    case errorResponse.status === 403:
      message = {THIRD_PARTY_403};
      break;
    case errorResponse.status === 404:
      message = {THIRD_PARTY_404};
      break;
    case errorResponse.status === 406:
      message = {THIRD_PARTY_406};
      break;
    case errorResponse.status === 408:
      message = {THIRD_PARTY_408};
      break;
    case errorResponse.status === 421:
      message = {THIRD_PARTY_421};
      break;
    case errorResponse.status === 429:
      message = {THIRD_PARTY_429};
      break;
    case errorResponse.status === 495:
      message = {THIRD_PARTY_495};
      break;
    default:
      break;
  }
  return message
}