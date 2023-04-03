import React from 'react'

interface HProps {
  textArray: string[]
  separator: string
}
export const HighlightedText: React.FC<HProps> = ({ textArray, separator }) => {
  return (
    <>
      {textArray.map((item, index) => {
        const isLast = index === textArray.length - 1
        return (
          <React.Fragment key={item}>
            <span text-orange-600>{item}</span>
            {isLast ? '' : separator}
          </React.Fragment>
        )
      })}
    </>
  )
}
