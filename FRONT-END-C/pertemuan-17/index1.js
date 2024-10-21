// 1.promise
//a.
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!"); 
      }, 2000); 
    });
  }
  
  // b.
  async function messages() {
    const msg = await helloWorld(); 
    console.log(msg); 
  }
  // c.
  messages(); 
  
  // 2. fetch 
  function ambilDataUser(){
      Fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
    
  function ambilDataUser() {
      fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(data => {
          data.data.forEach(user => {
            console.log(user.email);
          });
        })
        .catch(error => {
          console.error("Terjadi kesalahan:", error);
        });
    }
    
    ambilDataUser();
  
  //   3. async await
  async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
  
      data.data.forEach(user => {
        console.log(user.email);
      });
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  }
  
  // 4.axios
  
  axios
    .get("https://reqres.in/api/users")
    .then((result) => console.log(result.data));
  
  const ambilDataUserAxios = async () => {
    let result = await axios.get("https://reqres.in/api/users");
    result.data.data.forEach((user) => console.log(user.email));
  };