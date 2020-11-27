import errorMessage from '../errorMessage';

describe('ErrorMessage function', () => {
  it('should return right message for case 400', () => {
    const errorResponse = {status: 400};
    const message = 'Sorry, that was an invalid domain name, try again!'

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 404', () => {
    const errorResponse = {status: 404};
    const message = "Sorry, that page doesn't exist, try again!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 408', () => {
    const errorResponse = {status: 408};
    const message = "Sorry, that was a timeout, try again!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 495', () => {
    const errorResponse = {status: 495};
    const message = "Sorry, that SSL certificate expired, check it out!";

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