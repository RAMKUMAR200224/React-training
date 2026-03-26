function Day01() {

  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div>
      <h1>Ramkumar React Learn</h1>
      <p>Lets {handleNameChange()} Money</p>
    </div>
  );
}

export default Day01;