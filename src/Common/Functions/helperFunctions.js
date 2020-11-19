export const daysAgoCalculator = (date) => {
    const secsInDay = 86400000
    let currentDate = new Date()
    const remainingSecs = currentDate - date
    const days = remainingSecs / secsInDay
    return Math.floor(days)
}

export const postMessage = (createdAt) => {
    const date = new Date(createdAt)
    const days = daysAgoCalculator(date)
    if (days === 1) {
        return 'Yesterday'
    } else if (days === 0) {
        return 'Today'
    } else {
        return `${days} days ago`
    }
}