# Contracts

## Landing page: Check status

### Request
{url: 'http://www.google.es'}
on POST route: /status

### Response

{stauts: 'UP',
url: 'http://www.google.es',
delay: 831}

## Landing page: List websites

### Request
{page: 3}
on POST route: /landing-list

(10 results by page)

### Response
{numUrls: 10214,
data: [{web: http://www.yavendras.com,
status: 'UP',
delay: 234,
{web: http://www.sport.es,
status: 'DOWN',
delay: 34,
{web: http://www.pepito.com,
status: 'UP',
delay: 444}]}

(10 objects in total)