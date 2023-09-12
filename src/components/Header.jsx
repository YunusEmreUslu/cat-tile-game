import { useEffect } from 'react';

const Header = ({ handleNewGame, wins }) => {
  // Update page title with win count
  useEffect(() => (document.title = `${wins} wins`), [wins]);

  return (
    <header className="header">
      <h4>{wins} wins</h4>
      <h3>meow meow cats</h3>
      <button onClick={handleNewGame}>New Game :3</button>
    </header>
  );
};

export default Header;