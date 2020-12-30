import mapDetailDelayGraph from '../mapDetailDelayGraph';

describe('mapDetailDelayGraph function', () => {
    it('should return right response', () => {

        const response = [{
            time: "Mon Dec 21 2020 20:29:02 GMT+0100 (hora estándar de Europa central)",
            url: "https://www.amazon.com/",
            delay: 1999,
            status: 200
        }, {
            time: "Mon Dec 21 2020 20:31:02 GMT+0100 (hora estándar de Europa central)",
            url: "https://www.amazon.com/",
            delay: 2999,
            status: 200
        }]
        const id = 'amazon.com'

        const result = [
            ['x', 'amazon.com'],
            [new Date('2020-12-21T19:29:02.000Z'), 1999],
            [new Date('2020-12-21T19:31:02.000Z'), 2999]
        ]


        expect(mapDetailDelayGraph(response, id)).toEqual(result);
    })
})