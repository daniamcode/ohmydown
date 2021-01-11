export default function mapProfileRows(rows) {
  let result = []
  console.log(rows)
  for (let i = 0; i < rows?.length; i++) {
    result[i] = {
      id: rows[i]?.endpoint.id,
      url: rows[i]?.endpoint.url,
      status: rows[i]?.healthCheckResponse[
        rows[i]?.healthCheckResponse.length - 1
      ]?.status,
      delay: rows[i]?.healthCheckResponse[
        rows[i].healthCheckResponse.length - 1
      ]?.delay,
      average: rows[i]?.average,
      uptime: rows[i]?.uptime,
    }
  }
  return result
}