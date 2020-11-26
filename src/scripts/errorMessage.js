export default function errorMessage(errorResponse) {
    let message = 'a';
      switch(true) {
        case errorResponse.status === 400:
        message = 'Sorry, that was an invalid domain name, try again!';
        break;
      case errorResponse.status === 404:
        message = "Sorry, that page doesn't exist, try again!";
        break;
        case errorResponse.status === 408:
        message = "Sorry, that was a timeout, try again!";
        break;
        case errorResponse.status === 495:
        message = "Sorry, that SSL certificate expired, check it out!";
        break;
        case errorResponse.status >= 500 && errorResponse.status <600:
        message = "Sorry, our server is overloaded, please try again later!";
        break;
        case errorResponse === 'Network Error':
        message = "Sorry, our server is down now, please try later!";
        break;
      default:
        break;
    }
    return message
    }