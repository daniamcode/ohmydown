export default function errorMessage(errorResponse) {
    let message = '';
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
      default:
        break;
    }
    return message
    }