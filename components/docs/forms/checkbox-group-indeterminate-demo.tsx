"use client"

import React from "react"

import { Checkbox, CheckboxGroup } from "ui"

export default function CheckboxGroupIndeterminateDemo() {
  return (
    <CheckboxGroup defaultValue={["encryption"]} className="ml-6">
      <Checkbox isIndeterminate value="encryption" description="Enable encryption." isReadOnly>
        Encryption
      </Checkbox>
      <Checkbox value="firewall" description="Enable firewall protection.">
        Firewall
      </Checkbox>
      <Checkbox value="backup" description="Enable automatic backups.">
        Backup
      </Checkbox>
      <Checkbox isIndeterminate value="anomalyDetection" description="Enable anomaly detection.">
        Anomaly Detection
      </Checkbox>
    </CheckboxGroup>
  )
}