import React from "react";
import Spinner from "./Spinner";
import ownErrorMessage from "../../scripts/ownErrorMessage"
import thirdPartyErrorMessage from "../../scripts/thirdPartyErrorMessage"

const LoadStatusMessage = ({ show, loadStatusResponse }) => {

  return(
  <>
  {!show ? (
    <></>
  ) : loadStatusResponse.isLoading === true ? (
    <div className="spinner-active">
    <Spinner />
    </div>
  ) : loadStatusResponse.error?.response ? (
    <h1 className="error-case">
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__up", "status__down")}
      {document.getElementById('status-message')?.classList.add("status__error")}
      {ownErrorMessage(loadStatusResponse.error.response)}
    </h1>
  ) : (loadStatusResponse?.response?.data?.status !== 200 && (loadStatusResponse?.response?.data?.status < 500 || loadStatusResponse?.response?.data?.status >= 600)) ? (
    <h1 className="error-case">
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__up", "status__down")}
      {document.getElementById('status-message')?.classList.add("status__error")}
      {thirdPartyErrorMessage(loadStatusResponse.response.data)}
    </h1>
  ) : loadStatusResponse?.response?.data?.status === 200 ? (
    <h1 className="up-case">
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__error", "status__down")}
      {document.getElementById('status-message')?.classList.add("status__up")}
      {loadStatusResponse?.response?.data?.url} is UP!
      <p className="status__delay">
        There was a delay of {loadStatusResponse?.response?.data?.delay} ms.
      </p>
    </h1>
  ) : (loadStatusResponse?.response?.data?.status >= 500 && loadStatusResponse?.response?.data?.status < 600) ? (
    <h1 className="down-case">
      {document.getElementById('status-message')?.classList.remove("status__initial", "status__error", "status__up")}
      {document.getElementById('status-message')?.classList.add("status__down")}
      {loadStatusResponse?.response?.data?.url} is DOWN!
    </h1>
  
  ) : <div className="default-case"></div>}
  
  </>
  )}


export default LoadStatusMessage