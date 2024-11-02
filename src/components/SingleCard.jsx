import "./SingleCard.css";

export default function SingleCard({
  card,
  handleChoiceCard,
  flipped,
  disabled,
}) {
  const handleChoice = () => {
    if (!disabled) {
      handleChoiceCard(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/src/assets/cover.png"
          alt="card back"
          onClick={handleChoice}
        />
      </div>
    </div>
  );
}
