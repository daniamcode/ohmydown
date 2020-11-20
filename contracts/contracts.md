# Contracts

## Landing page: check status

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
data: [{web: yavendras.com,
status: 'UP',
delay: 234,
{web: sport.es,
status: 'DOWN',
delay: 34,
{web: pepito.com,
status: 'UP',
delay: 444}]}

(10 objects in total)