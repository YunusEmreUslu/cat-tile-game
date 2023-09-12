// Combine and shuffle two arrays
const shuffle = () => {
    const assets = [
      { image: '/assets/cat1.png' },
      { image: '/assets/cat2.png' },
      { image: '/assets/cat3.png'},
      { image: '/assets/cat4.png' },
      { image: '/assets/cat5.png' },
      { image: '/assets/cat6.png' },
      { image: '/assets/cat7.png'},
      { image: '/assets/cat8.png' },
    ];
    return [...assets, ...assets]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
  };
  
  export default shuffle;