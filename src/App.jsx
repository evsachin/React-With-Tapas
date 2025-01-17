

function App() {

  const topic = "JSX"
  const age = 25
  const likes = ['JSX', ' react ',' Redux']
  return (
    <>
      <h1>{topic} Is Awesome !!</h1>
      <h2>age = {age}</h2>
      <h2>{String(true)}</h2>
      <h1>List of like topics</h1>
      {
        likes.map((like,index) => (
          <>
              <ul>
                <li key={like}>{like}</li>
              </ul>
          </>
         
        ))
      }
     
    </>
  );
}

export default App;
