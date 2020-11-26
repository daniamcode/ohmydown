import React from "react";
import Spinner from "./Spinner";

function errorMessage(code) {
let message = '';
  switch(code) {
    case 400:
    message = 'Sorry, that was an invalid domain name, try again!';
    break;
  case 404:
    message = "Sorry, that page doesn't exist, try again!";
    break;
  default:
    break;
}
return message
}


const LoadStatusMessage = ({ show, loadStatusResponse }) => {

  return(
  <>
  {!show ? (
    <></>
  ) : loadStatusResponse.isLoading === true ? (
    <Spinner />
  ) : loadStatusResponse?.error?.response?.status === 400 ? (
    <h1>
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__up", "status__down")}
      {document.getElementById('status-message')?.classList.add("status__error")}Sorry, that was an
      invalid domain name, try again!
    </h1>
  ) : loadStatusResponse?.error?.response?.status === 404 ? (
    <h1>
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__up", "status__down")}
      {document.getElementById('status-message')?.classList.add("status__error")}Sorry, that page doesn't exist, try again!
    </h1>
  ) : loadStatusResponse?.error?.response?.status === 408 ? (
    <h1>
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__up", "status__down")}
      {document.getElementById('status-message')?.classList.add("status__error")}Sorry, that was a
      timeout, try again!
    </h1>
  ) : loadStatusResponse?.error?.response?.status === 495 ? (
    <h1>
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__up", "status__down")}
      {document.getElementById('status-message')?.classList.add("status__error")}Sorry, that
      SSL certificate expired, check it out!
    </h1>
  ) : (loadStatusResponse?.error?.response?.status >= 500 && loadStatusResponse?.error?.response?.status < 600) ? (
    <h1>
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__up", "status__down")}
      {document.getElementById('status-message')?.classList.add("status__error")}Sorry, our server is overloaded, please try again later!
    </h1>
  ) : loadStatusResponse?.error?.response === 'Network Error' ? (
    <h1>
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__up", "status__down")}
      {document.getElementById('status-message')?.classList.add("status__error")}Sorry, our server is down now, please try again later!
    </h1>
  ) : loadStatusResponse?.response?.data?.status === 'UP' ? (
    <h1>
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__error", "status__down")}
      {document.getElementById('status-message')?.classList.add("status__up")}
      {loadStatusResponse?.response?.data?.url} is {loadStatusResponse?.response?.data?.status}!
      <p className="status__delay">
        There was a delay of {loadStatusResponse?.response?.data?.delay} ms.
      </p>
    </h1>
  ) : loadStatusResponse?.response?.data?.status === 'DOWN' ? (
    <h1>
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__error", "status__up")}
      {document.getElementById('status-message')?.classList.add("status__down")}
      {loadStatusResponse?.response?.data?.url} is {loadStatusResponse?.response?.data?.status}!
    </h1>
  ) : <></>}
  
  </>
  )}


export default LoadStatusMessage