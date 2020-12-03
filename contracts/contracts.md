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
without payload for the moment
on POST route: /landing-list

### Response
{numUrls: 100,
data: [{web: http://www.yavendras.com,
status: 'UP',
delay: 234,
{web: http://www.sport.es,
status: 'DOWN',
delay: 34,
{web: http://www.pepito.com,
status: 'UP',
delay: 444
}
etc
]}


(all the objects for the moment, without order)


## Detail

### Request
{url: 'http://www.google.es'}
on POST route: /detail

### Response
{url='https://www.adgrafics.eu/',
        "numTicks":4, 
          [
            {status=200, delay=126, timestamp=1},
            {status=200, delay=2076, timestamp=2},
            {status=200, delay=26, timestamp=3},
            {status=503, delay=26, timestamp=4}
            ]
        }