# Important

Backend can be found at my mate's https://github.com/alexmoleiro/sitechecker

# Notes
This project was started using Create React App —you can find it in the cra folder—, and then migrated to Next.js, that can be found in the nextjs folder. This is the up-to-date version, and inside that folder you will find another README file with the instructions to launch the App.

## Status codes and messages
### Own errors

500-599: Sorry, our server is overloaded, please try again later!\
Network Error: Sorry, our server is down now, please try again later!

### Third party UP, DOWN and ISSUE
200: {url} is UP! There was a delay of x ms.\
400: Sorry, that was an invalid domain name, try again!\
403: Sorry, that access was forbidden\
404: Sorry, that page doesn't exist, try again!\
408: Sorry, that was a timeout, try again!\
429: Sorry, too many requests right now\ 
495: Sorry, that SSL certificate expired, check it out!\
500-599: {url} is DOWN!