const codeGenerator = ()=> {
    let code = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()';
    const length = characters.length;
    for(let i = 0; i<8;i++){
        code  += characters.charAt(Math.floor(Math.random()*length));
        // code += characters[random];
    }   
    console.log(code)
}
codeGenerator();


