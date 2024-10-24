fetch('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products').then((data)=>{
    
    return data.json();
}
).then((completedata=>{
    console.log(completedata[0]);
}))