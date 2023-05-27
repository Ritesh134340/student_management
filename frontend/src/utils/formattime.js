


export const formatTime = (inputTime) => {
  
    const [hours, minutes] = inputTime.split(':');

    const currentTime = new Date();
    currentTime.setHours(hours);
    currentTime.setMinutes(minutes);

    const formattedTime = currentTime.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    return formattedTime
  };