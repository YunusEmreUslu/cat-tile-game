// Combine and shuffle two arrays
const shuffle = () => {
    const assets = [
      { image: '/assets/css.png' },
      { image: '/assets/dart.png' },
      { image: '/assets/firebase.png'},
      { image: '/assets/fireship.png' },
      { image: '/assets/flutter.png' },
      { image: '/assets/go.png' },
      { image: '/assets/html5.png'},
      { image: '/assets/jquery.png' },
    ];
    return [...assets, ...assets]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
  };
  
  export default shuffle;