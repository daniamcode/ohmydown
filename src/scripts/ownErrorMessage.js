export default function errorMessage(errorResponse) {
    let message = '';
      switch(true) {
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