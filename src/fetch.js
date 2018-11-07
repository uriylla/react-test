export const fetchData = async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/gelstudios/dankBot/master/cah.json');
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}