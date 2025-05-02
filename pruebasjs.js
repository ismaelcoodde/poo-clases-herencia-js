// Aqui lo que hago es en un ciclo for usar un break para que a la primera que se cumpla se rompa

for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        console.log(contador)
        break;
    }
}