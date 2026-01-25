import React from 'react'

const ScoreBadge = ({score} : {score:number}) => {

   const textColor = score > 70 ? 'text-green-600 bg-green-600/10'
    : score > 49  ? 'text-yellow-600 bg-yellow-600/10'
    : 'text-red-600 bg-red-600/10'

    const text = score > 70 ? 'Strong'
    : score > 49  ? 'Good Start'
    : 'Needs work'


  return (
    <div className={`px-3 py-1 rounded-lg ${textColor} text-sm font-medium`}>{text}</div>
  )
}

export default ScoreBadge