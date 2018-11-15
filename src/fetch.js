
const formatCardsData = (data) => {
  let cards = data.blackCards.map(card => ({ ...card }))
  data.whiteCards.map(card => cards.push({text: card }))
  return cards;
}

export const fetchData = async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/gelstudios/dankBot/master/cah.json');
    const data = await response.json();
    return formatCardsData(data);
  } catch (e) {
    console.log(e);
  }
}
