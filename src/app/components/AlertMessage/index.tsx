'use client';
import { Alert } from 'antd'
import React from 'react'

function AlertMessage() {
  return (
      <Alert message="Safari is not good. Please using Chrome instead to have more great experience" type="warning" showIcon closable />
  )
}

export default AlertMessage
