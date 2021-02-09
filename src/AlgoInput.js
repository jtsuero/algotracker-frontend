function AlgoInput() {
  const difficulty = () => {
    return (
      <div>
        Difficulty:
        <div>
          <input type="radio" name="difficulty" id="easy" value="easy" />
          <label for="easy">Easy</label>
        </div>
        <div>
          <input type="radio" name="difficulty" id="medium" value="medium" />
          <label for="medium">Medium</label>
        </div>
        <div>
          <input type="radio" name="difficulty" id="hard" value="hard" />
          <label for="hard">Hard</label>
        </div>
      </div>
    );
  };
  return (
    <form>
      <div>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="link" />
        <input type="date" placeholder="mm/dd/yy" />
        <textarea placeholder="reflection" />
        {difficulty()}
      </div>
    </form>
  );
}

export default AlgoInput;
