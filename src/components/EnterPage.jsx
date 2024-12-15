
function EnterPage ({ onEnter }) {
    return (
      <div className="enter">
        <h1>Welcome to the 90s!</h1>
        <p>Totally rad content awaits you!</p>
        <button onClick={onEnter}>
          Click to Enter
        </button>
      </div>
    );
  };
  
  export default EnterPage;