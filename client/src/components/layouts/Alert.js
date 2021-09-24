import React, { useContext } from 'react'
import alertContext from '../context/alert/alertContext'

const Alert = () => {
  const context = useContext(alertContext)

  const { alerts } = context

  return alerts.length > 0 && alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle"/> {alert.message}
      </div>
  ))  
}

export default Alert
