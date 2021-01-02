# Important

Backend can be found at my mate's https://github.com/alexmoleiro/sitechecker

# Notes
This project was started using Create React App —you can find it in the cra folder—, and then migrated to Next.js, that can be found in the nextjs folder. This is the up-to-date version, and inside that folder you will find another README file with the instructions to launch the App.

## Status codes and messages
### Own errors

OWN_400 = "Sorry, that page doesn't exist, try again!";
OWN_403 = "Please, sign in again!";
OWN_500_599 = "Sorry, our server is overloaded, please try again later!";
OWN_NETWORK_ERROR = "Sorry, our server is down now, please try later!";

### Third party UP, DOWN and ISSUE
THIRD_PARTY_200: {url} is UP! There was a delay of x ms.\
THIRD_PARTY_301 = "Sorry, that url has a permanent redirect!";
THIRD_PARTY_302 = "Sorry, that url has a temporary redirect!";
THIRD_PARTY_400 = "Sorry, that was an invalid domain name, try again!";
THIRD_PARTY_403 = "Sorry, that access was forbidden!";
THIRD_PARTY_404 = "Sorry, that page doesn't exist, try again!";
THIRD_PARTY_406 = "Sorry, that request wasn't accepted by their server!";
THIRD_PARTY_408 = "Sorry, that was a timeout, try again!";
THIRD_PARTY_421 = "Sorry, their server couldn't produce a response!";
THIRD_PARTY_429 = "Sorry, too many requests right now!";
THIRD_PARTY_495 = "Sorry, that SSL certificate expired, check it out!";
THIRD_PARTY_500_599: {url} is DOWN!