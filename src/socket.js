const socket = new WebSocket(link);


socket.addEventListener('open',(event) => {
    console.log("Conection Established");

    socket.send()
})

let value = {
    "N":[],
    "P":[],
    "K":[],
    "Yeild":[]
}

function pick(key){
    return value[key];
}

function push(arr,value){
    if(length(arr)>10){
        arr.shift();
    }
    arr.push(value)
}

for (let key in value){
    socket.addEventListener(key,(event) => {
        const NumericValue = event.data;
        push(value[key],NumericValue);
    })
}

socket.addEventListener('close',(event) => {
    console.log("Connection Deminished")
})