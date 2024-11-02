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
        <img
          className="front"
          src={import.meta.env.BASE_URL + card.src}
          alt="card front"
        />
        <img
          className="back"
          src={import.meta.env.BASE_URL + "/assets/cover.png"}
          alt="card back"
          onClick={handleChoice}
        />
      </div>
    </div>
  );
}
