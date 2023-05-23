import React from 'react'
interface TypographyProps {
    fontSize: string
    text: string
}
const Typography = ({fontSize,text}:TypographyProps) => {
  return (
    <p style={{fontSize:fontSize}}>
        {text}
    </p>
  )
}

export default Typography