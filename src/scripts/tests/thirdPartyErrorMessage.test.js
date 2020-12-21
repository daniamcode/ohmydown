import errorMessage from '../thirdPartyErrorMessage';
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
} from '../../data/constants'

describe('ErrorMessage function', () => {
  it('should return right message for case 301', () => {
    const errorResponse = {status: 301};
    const message = {THIRD_PARTY_301}

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 302', () => {
    const errorResponse = {status: 302};
    const message = {THIRD_PARTY_302}

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 400', () => {
    const errorResponse = {status: 400};
    const message = {THIRD_PARTY_400}

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 403', () => {
    const errorResponse = {status: 403};
    const message = {THIRD_PARTY_403}

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 404', () => {
    const errorResponse = {status: 404};
    const message = {THIRD_PARTY_404}

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 406', () => {
    const errorResponse = {status: 406};
    const message = {THIRD_PARTY_406}

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 408', () => {
    const errorResponse = {status: 408};
    const message = {THIRD_PARTY_408}

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 421', () => {
    const errorResponse = {status: 421};
    const message = {THIRD_PARTY_421}

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 429', () => {
    const errorResponse = {status: 429};
    const message = {THIRD_PARTY_429}

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for case 495', () => {
    const errorResponse = {status: 495};
    const message = {THIRD_PARTY_495}

    expect(errorMessage(errorResponse)).toEqual(message);
  })
  it('should return right message for default case', () => {
    const errorResponse = ''
    const message = ''

    expect(errorMessage(errorResponse)).toEqual(message);
  })
})