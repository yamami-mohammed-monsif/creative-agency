import profilePic from "../assets/ceo-image.jpg";

function CEOQuote({ className }) {
  return (
    <div className={className}>
      <div className="ceo-quote">
        <div className="profile-info">
          <div className="profile-picture">
            <img src={profilePic} alt="CEO profile picture" />
          </div>
          <div>
            <p>Bill Adams</p>
            <span>CEO UpTech</span>
          </div>
        </div>
        <div>
          “ This team is really the best in its field,I don't regret working
          with them, and will come back again thanks “
        </div>
      </div>
    </div>
  );
}

export default CEOQuote;
