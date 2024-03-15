import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // The layout of our application is shifting when an alert is shown. this is called cls, cummulative layout shift.
   // Remember that the layout shift must be minimum for your application, as this is one of the ranking factors from the SEO point of view.
   <div style={{height: '50px'}}>
   { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.mesage}
    {/* if we use close option in the dismiss alert as given below line, then we need to reload the page to enable the alert function, 
    so to avoid page reload, then we use settimeout to add remove the alert after given time */}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div> }
   </div> 
  )
}
