import bruschettaImage from './assets/Bruschetta.jpg';

function Main() {
    return (
      <main className="specials section">
        <h2>Weekly Specials</h2>
        <p>Enjoy our chef's favorites delivered fresh from the kitchen.</p>
        <img src={bruschettaImage} alt="Bruschetta appetizer" />
      </main>
    );
  }
  
  export default Main;
  