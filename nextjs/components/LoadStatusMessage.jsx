import React from "react";
import Spinner from "./Spinner";
import ownErrorMessage from "../scripts/ownErrorMessage"
import thirdPartyErrorMessage from "../scripts/thirdPartyErrorMessage"
import styles from "../styles/LoadStatusMessage.module.css";

const LoadStatusMessage = ({ show, loadStatusResponse }) => {

  return(
  <>
  {!show ? (
    <></>
  ) : loadStatusResponse.isLoading === true ? (
    <div className={styles.spinner_active}>
    <Spinner />
    </div>
  ) : loadStatusResponse.error?.response ? (
    <h1 className={styles.error_case}>
      {document.getElementById('status__message')?.classList.remove("status__initial", "status__up", "status__down")}
      {document.getElementById('status__message')?.classList.add("status__error")}
      {ownErrorMessage(loadStatusResponse.error.response)}
    </h1>
  ) : (loadStatusResponse?.response?.data?.status !== 200 && (loadStatusResponse?.response?.data?.status < 500 || loadStatusResponse?.response?.data?.status >= 600)) ? (
    <h1 className={styles.error_case}>
      {document.getElementById('status__message')?.classList.remove("status__initial", "status__up", "status__down")}
      {document.getElementById('status__message')?.classList.add("status__error")}
      {thirdPartyErrorMessage(loadStatusResponse.response.data)}
    </h1>
  ) : loadStatusResponse?.response?.data?.status === 200 ? (
    <h1 className={styles.up_case}>
      {document.getElementById('status__message')?.classList.remove("status__initial", "status__error", "status__down")}
      {document.getElementById('status__message')?.classList.add("status__up")}
      {loadStatusResponse?.response?.data?.url} is UP!
      <p className={styles.status__delay}>
        There was a delay of {loadStatusResponse?.response?.data?.delay} ms.
      </p>
    </h1>
  ) : (loadStatusResponse?.response?.data?.status >= 500 && loadStatusResponse?.response?.data?.status < 600) ? (
    <h1 className={styles.down_case}>
      {document.getElementById('status__message')?.classList.remove("status__initial", "status__error", "status__up")}
      {document.getElementById('status__message')?.classList.add("status__down")}
      {loadStatusResponse?.response?.data?.url} is DOWN!
    </h1>
  
  ) : <div className={styles.default_case}></div>}
  
  </>
  )}


export default LoadStatusMessage