export const getCurrentTime = () => {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    if(hour < 10) hour = `0${hour}`
    if(minute < 10) minute = `0${minute}`
    if(second < 10) second = `0${second}`
    return `${hour}:${minute}:${second}`
}
