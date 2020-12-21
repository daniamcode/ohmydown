import errorMessage from '../ownErrorMessage';

describe('ErrorMessage function', () => {
  it('should return right message for case 400', () => {
    const errorResponse = {status: 400};
    const message = "Sorry, that page doesn't exist, try again!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 403', () => {
    const errorResponse = {status: 403};
    const message = "Please, sign in again!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 500-599', () => {
    const errorResponse = {status: 500};
    const message = "Sorry, our server is overloaded, please try again later!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case Netword Error', () => {
    const errorResponse = 'Network Error'
    const message = "Sorry, our server is down now, please try later!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for default case', () => {
    const errorResponse = ''
    const message = ''

    expect(errorMessage(errorResponse)).toEqual(message);
  })
})