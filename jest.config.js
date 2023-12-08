function timeToWords(time) {
    const hours = parseInt(time.substring(0, 2));
    const minutes = parseInt(time.substring(3));
  
    const ampm = hours < 12 ? 'am' : 'pm';
    const isNoonMidnight = hours === 0 || hours === 12;
  
    let result = '';
  
    if (isNoonMidnight) {
      result = hours === 0 ? 'midnight' : 'noon';
    } else {
      const hourText = hours <= 12 ? convertToWords(hours) : convertToWords(hours - 12);
      const minuteText = minutes === 0 ? '' : convertToWords(minutes);
  
      result = `${hourText} ${minuteText} ${ampm}`;
    }
  
    return result.trim();
  }
  
  function convertToWords(num) {
    const words = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
  
    if (num < 20) {
      return words[num];
    }
  
    const tens = ['twenty', 'thirty', 'forty', 'fifty'];
    const tenDigit = Math.floor(num / 10);
    const unitDigit = num % 10;
  
    return `${tens[tenDigit - 2]} ${words[unitDigit]}`;
  }
  
  // Uncomment the next line to run the tests
  // testTimeToWords();