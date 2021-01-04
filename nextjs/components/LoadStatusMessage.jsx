import React from "react";
import Spinner from "./Spinner";
import ownErrorMessage from "../scripts/ownErrorMessage"
import thirdPartyErrorMessage from "../scripts/thirdPartyErrorMessage"
import loadStatusMessageStyles from "../styles/LoadStatusMessage.module.css";
import landingPageStyles from "../styles/LandingPage.module.css";

const LoadStatusMessage = ({ show, loadStatusResponse }) => {

  return(
  <>
  {!show ? (
    <></>
  ) : loadStatusResponse.isLoading === true ? (
    <div className={loadStatusMessageStyles.spinner_active}>
    <Spinner />
    </div>
  ) : loadStatusResponse.error?.response ? (
    <h1 className={loadStatusMessageStyles.error_case}>
      {document.getElementById(landingPageStyles.status__message)?.classList.remove(loadStatusMessageStyles.status__initial, loadStatusMessageStyles.status__up, loadStatusMessageStyles.status__down)}
      {document.getElementById(landingPageStyles.status__message)?.classList.add(loadStatusMessageStyles.status__error)}
      {ownErrorMessage(loadStatusResponse.error.response)}
    </h1>
  ) : (loadStatusResponse?.response?.data?.status !== 200 && (loadStatusResponse?.response?.data?.status < 500 || loadStatusResponse?.response?.data?.status >= 600)) ? (
    <h1 className={loadStatusMessageStyles.error_case}>
      {document.getElementById(landingPageStyles.status__message)?.classList.remove(loadStatusMessageStyles.status__initial, loadStatusMessageStyles.status__up, loadStatusMessageStyles.status__down)}
      {document.getElementById(landingPageStyles.status__message)?.classList.add(loadStatusMessageStyles.status__error)}
      {thirdPartyErrorMessage(loadStatusResponse.response.data)}
    </h1>
  ) : loadStatusResponse?.response?.data?.status === 200 ? (
    <h1 className={loadStatusMessageStyles.up_case}>
      {document.getElementById(landingPageStyles.status__message)?.classList.remove(loadStatusMessageStyles.status__initial, loadStatusMessageStyles.status__error, loadStatusMessageStyles.status__down)}
      {document.getElementById(landingPageStyles.status__message)?.classList.add(loadStatusMessageStyles.status__up)}
      {loadStatusResponse?.response?.data?.url} is UP!
      <p className={loadStatusMessageStyles.status__delay}>
        There was a delay of {loadStatusResponse?.response?.data?.delay} ms.
      </p>
    </h1>
  ) : (loadStatusResponse?.response?.data?.status >= 500 && loadStatusResponse?.response?.data?.status < 600) ? (
    <h1 className={loadStatusMessageStyles.down_case}>
      {document.getElementById(landingPageStyles.status__message)?.classList.remove(loadStatusMessageStyles.status__initial, loadStatusMessageStyles.status__error, loadStatusMessageStyles.status__up)}
      {document.getElementById(landingPageStyles.status__message)?.classList.add(loadStatusMessageStyles.status__down)}
      {loadStatusResponse?.response?.data?.url} is DOWN!
    </h1>
  
  ) : <div className={loadStatusMessageStyles.default_case}></div>}
  
  </>
  )}


export default LoadStatusMessage