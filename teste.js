function teste(){

    if (1 < 2){
        let teste = 'teste'

        console.log(teste);
        var teste2 = 'teste2';

        function testeFn2(){
            console.log(teste);
            
            console.log(teste2);
        }

        testeFn2()
    }

    console.log(teste);
    console.log(teste2);
    
}

teste()