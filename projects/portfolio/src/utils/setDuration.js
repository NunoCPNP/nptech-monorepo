export const setDuration = (minutes) => {
  const duration = new Date()

  duration.setTime(duration.getTime() + minutes * 60 * 1000)

  return duration
}
