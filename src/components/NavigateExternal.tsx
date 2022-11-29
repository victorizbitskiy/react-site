import { useEffect } from "react"

const NavigateExternal = ({ to }: { to: string }) => {
  // useEffect(() => { window.location.href = to })
  useEffect(() => { window.open(to, '_blank')  })
  return <div style={{textAlign: 'center'  }}>Redirecting...</div>;
}

export default NavigateExternal