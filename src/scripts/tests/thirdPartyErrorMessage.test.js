import errorMessage from '../thirdPartyErrorMessage';

describe('ErrorMessage function', () => {
  it('should return right message for case 301', () => {
    const errorResponse = {status: 301};
    const message = 'Sorry, that url has a permanent redirect!'

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 302', () => {
    const errorResponse = {status: 302};
    const message = 'Sorry, that url has a temporary redirect!'

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 400', () => {
    const errorResponse = {status: 400};
    const message = 'Sorry, that was an invalid domain name, try again!'

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 403', () => {
    const errorResponse = {status: 403};
    const message = 'Sorry, that access was forbidden!'

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 404', () => {
    const errorResponse = {status: 404};
    const message = "Sorry, that page doesn't exist, try again!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 406', () => {
    const errorResponse = {status: 406};
    const message = "Sorry, that request wasn't accepted by their server!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 408', () => {
    const errorResponse = {status: 408};
    const message = "Sorry, that was a timeout, try again!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 421', () => {
    const errorResponse = {status: 421};
    const message = "Sorry, their server couldn't produce a response!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 429', () => {
    const errorResponse = {status: 429};
    const message = "Sorry, too many requests right now!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 495', () => {
    const errorResponse = {status: 495};
    const message = "Sorry, that SSL certificate expired, check it out!";

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for default case', () => {
    const errorResponse = ''
    const message = ''

    expect(errorMessage(errorResponse)).toEqual(message);
  })
})