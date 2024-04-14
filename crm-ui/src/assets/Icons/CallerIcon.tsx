import React, { useState, useEffect } from 'react'
import './CallerIcon.scss'
const CallerIcon: React.FC = () => {
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(59)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          // Timer reaches 0:00
          return
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1)
          setSeconds(59)
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [minutes, seconds])

  return (
    <div className="timer-container">
      <img src="src/assets/images/callpopup.png" alt="Call Popup Icon" id="img" />
      <span id="timer">{`${minutes}m: ${seconds < 10 ? '0' : ''}${seconds}s`}</span>
    </div>
  )
}

export default CallerIcon
