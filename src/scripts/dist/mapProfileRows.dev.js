"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mapProfileRows;

function mapProfileRows(rows) {
  var result = [];

  for (var i = 0; i < rows.length; i++) {
    result[i] = {
      id: rows[i].id.value,
      status: rows[i].healthCheckResponse[rows[i].healthCheckResponse.length - 1].status,
      delay: rows[i].healthCheckResponse[rows[i].healthCheckResponse.length - 1].delay
    };
  }

  return result;
}