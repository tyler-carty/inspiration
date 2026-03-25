export const round1 = {
  title: 'Round 1',
  cards: [
    {
      merchant: 'Tesco',
      amount: '£4.50',
      date: 'Saturday, 10:30am',
      location: 'Birmingham',
      isFraud: false,
    },
    {
      merchant: 'Jewellery Store',
      amount: '£2,000.00',
      date: 'Tuesday, 3:00am',
      location: 'Online',
      isFraud: true,
    },
    {
      merchant: 'Pizza Hut',
      amount: '£12.00',
      date: 'Friday, 6:15pm',
      location: 'Birmingham',
      isFraud: false,
    },
  ],
  explanation: "Who buys £2,000 of jewellery at 3am? That's suspicious!",
}

export const round2 = {
  title: 'Round 2',
  cards: [
    {
      merchant: 'Costa',
      amount: '£4.20',
      date: 'Monday, 10:15am',
      location: 'Manchester',
      isFraud: false,
    },
    {
      merchant: 'Online Check',
      amount: '£0.01',
      date: 'Monday, 10:17am',
      location: 'Online',
      isFraud: true,
    },
    {
      merchant: 'Electronics Store',
      amount: '£899.00',
      date: 'Monday, 10:18am',
      location: 'Online',
      isFraud: true,
    },
  ],
  explanation: "Fraudsters test stolen cards with a tiny 1p payment first — then spend big straight away!",
}

export const round3 = {
  title: 'Round 3',
  cards: [
    {
      merchant: 'Currys',
      amount: '£500.00',
      date: '2:00pm',
      location: 'Leeds',
      isFraud: false,
    },
    {
      merchant: 'Café',
      amount: '£30.00',
      date: '2:20pm',
      location: 'Paris, France 🇫🇷',
      isFraud: true,
    },
    {
      merchant: 'Greggs',
      amount: '£6.00',
      date: '2:45pm',
      location: 'Leeds',
      isFraud: false,
    },
  ],
  explanation: "You can't get from Leeds to Paris in 20 minutes! The computer checks this too.",
}
