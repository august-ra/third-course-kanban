import { useState } from "react"


export function useFormData(data) {
  const [formData, setFormData] = useState(data)

  function updateFormData(name, value) {
    if (typeof(value) === "string")
      value = value.trim()

    const additional = `${name}Empty`
    const data = {
      ...formData,
      [name]:       value,
      [additional]: !value,
      activity:     true,
      isModified:   true,
    }

    setFormData(data)
  }

  return { formData, setFormData, updateFormData }
}
