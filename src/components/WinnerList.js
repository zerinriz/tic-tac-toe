const WinnerList = ({ game }) => {
  return (
    <div>
      <hr />
      {game.map((item) => (
        <div className="neonText">
          {item.time} {item.nameOne} VS {item.nameTwo} {item.result}
        </div>
      ))}
    </div>
  );
};
export default WinnerList;
