import errorMessage from '../ownErrorMessage';
import {OWN_400, OWN_403, OWN_500_599, OWN_NETWORK_ERROR} from '../../data/constants'

describe('ErrorMessage function', () => {
  it('should return right message for case 400', () => {
    const errorResponse = {status: 400};
    const message = {OWN_400};

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 403', () => {
    const errorResponse = {status: 403};
    const message = {OWN_403};

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 500-599', () => {
    const errorResponse = {status: 500};
    const message = {OWN_500_599};

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case Netword Error', () => {
    const errorResponse = 'Network Error'
    const message = {OWN_NETWORK_ERROR};

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for default case', () => {
    const errorResponse = ''
    const message = ''

    expect(errorMessage(errorResponse)).toEqual(message);
  })
})