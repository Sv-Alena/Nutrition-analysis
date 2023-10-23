import { useState, useEffect } from "react";

function App() {
  const [mySearch, setMySearch] = useState('');
  
  const APP_ID = '9f2ce7f8';
  const APP_KEY = 'eafe05ea80ecc55f5fa4579c1e59d5e6';
  const APP_URL = 'https://api.edamam.com/api/nutrition-details'


console.log(`${APP_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`)

const fetchData = async() => {
    const response = await fetch(`${APP_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, {
      
      method: "POST",
      headers: {
        'Accept': 'application/json',      
        'Content-Type': 'application/json',
      },
      body: JSON.stringify()
    })
  }
          

  useEffect(() => {
    
      fetchData();
  }, [])
 
// function onFormSubmit(e){
// e.priventDefault();
// setWordSubmitted()
// }
    

function myRecipeSearch(e){
  console.log(e.target.value);
  setMySearch(e.target.value)
}
  return (
    <div>
      <form>
      <input
      onChange={myRecipeSearch}
      placeholder="Введите колличество и наименование продукта"
      value={mySearch}
      />
        <button>

        </button>
      </form>
    </div>
  );
}

export default App;
