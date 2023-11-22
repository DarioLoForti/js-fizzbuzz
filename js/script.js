// 1 - eseguo ciclo FOR per stamapre numeri da 1 a 100

for(i=1; i<=100; i++){

    // 2 - inserisco condizione per far si che i multipli sia di 3 che di 5 stampino in console "FizzBuzz"

    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    }

    // 3 - inserisco condizione per far si che i multipli di 3 stampino in console "Fizz"

    else if(i%3 == 0){
        console.log("Fizz");
    }

    // 4 - inserisco condizione per far si che i multipli di 5 stampino in console "Buzz" 

    else if(i%5 == 0){
        console.log("Buzz");
    }
    
    else{
        console.log(i);
    }
}