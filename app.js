function greet(){
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$^-~"
let pass = ""
for(let i = 0 ; i <8; i++){
    pass += str.charAt(Math.floor(Math.random()*str.length ))
}
alert(pass)
}
// greet()
// console.log(pass);