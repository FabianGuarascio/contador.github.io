var numero=parseInt(contador.textContent)

mas.addEventListener('click',()=>{
   numero++
   contador.textContent = numero
   
})
mas10.addEventListener('click',()=>{
    numero+=10
    contador.textContent=numero
})
menos.addEventListener('click',()=>{
    numero-=1
    contador.textContent = numero
})

menos10.addEventListener('click',()=>{
    numero-=10
    contador.textContent= numero;
})

doble.addEventListener('click',()=>{
    numero*=2
    contador.textContent= numero;
})

mitad.addEventListener('click',()=>{
    numero/=2
    contador.textContent= numero;
})

potencia.addEventListener('click',()=>{
    numero= Math.pow(numero,2)
    contador.textContent= numero;
})

raiz.addEventListener('click',()=>{
    numero= Math.sqrt(numero)
    contador.textContent= numero;
})
clear.addEventListener('click',()=>{
    numero= 0
    contador.textContent= numero;
})
