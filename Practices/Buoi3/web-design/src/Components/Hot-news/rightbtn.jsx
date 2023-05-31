export default function RightButtons() {
  let handleClick = () => {
    alert("Bạn đã click");
  };
  let Buttonlist = [
      { text: 'BizInsider' },
      { text: 'BusinessWeek' },
      { text: 'BizGreen' },
      { text: 'BizINSPIRE' },
      { text: 'CafeTrip' },
  ]; 
  return (
    <div className="right-btn">
      {Buttonlist.map((element) =>
          <button onClick={handleClick}> 
              {element.text}
          </button>
      )}
    </div>
  );
}