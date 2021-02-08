function AlgoInput() {
  return (
    <form>
      <div>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="link" />
        <label for="problems">Problem Type:</label>
        <select id="problems" name="problems" size="1" multiple>
          <option value="problem-option">String</option>
          <option value="problem-option">Tree</option>
          <option value="problem-option">Linked List</option>
          <option value="problem-option">Array</option>
        </select>
        <input type="date" placeholder="mm/dd/yy" />
        <textarea placeholder="reflection" />
      </div>
    </form>
  );
}

export default AlgoInput;
