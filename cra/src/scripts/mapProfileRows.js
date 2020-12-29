export default function mapProfileRows(rows) {
  let result = []
  console.log(rows)
  for (let i = 0; i < rows?.length; i++) {
    result[i] = {
      id: rows[i]?.endpoint.id,
      status: rows[i]?.healthCheckResponse[
        rows[i]?.healthCheckResponse.length - 1
      ].status,
      delay: rows[i]?.healthCheckResponse[
        rows[i].healthCheckResponse.length - 1
      ].delay
    }
  }
  return result
}