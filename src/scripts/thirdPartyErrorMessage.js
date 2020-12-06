export default function errorMessage(errorResponse) {
    let message = '';
      switch(true) {
        case errorResponse.status === 301:
        message = 'Sorry, that url has a permanent redirect!';
        break;
        case errorResponse.status === 302:
        message = 'Sorry, that url has a temporary redirect!';
        break;
        case errorResponse.status === 400:
        message = 'Sorry, that was an invalid domain name, try again!';
        break;
        case errorResponse.status === 403:
        message = "Sorry, that access was forbidden!";
        break;
        case errorResponse.status === 404:
        message = "Sorry, that page doesn't exist, try again!";
        break;
        case errorResponse.status === 406:
        message = "Sorry, that request wasn't accepted by their server!";
        break;
        case errorResponse.status === 408:
        message = "Sorry, that was a timeout, try again!";
        break;
        case errorResponse.status === 421:
        message = "Sorry, their server couldn't produce a response!";
        break;
        case errorResponse.status === 429:
        message = "Sorry, too many requests right now!";
        break;
        case errorResponse.status === 495:
        message = "Sorry, that SSL certificate expired, check it out!";
        break;
      default:
        break;
    }
    return message
    }