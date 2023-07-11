async function callName() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const nameList = await response.json();
  nameList.map((pilihNama)=>{
    console.log(pilihNama.name)
})
  }
 callName()