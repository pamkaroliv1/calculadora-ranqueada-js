function calcular(vitorias, derrotas){
    const saldoDevitorias = vitorias - derrotas;
    let nivel;
     
    if (vitorias < 10){
        nivel = "ferro";
    }else if( vitorias >= 11 && vitorias <= 20 ){
        nivel = "bronze";
    }
    else if( vitorias>= 21 && vitorias <= 50 ){
        nivel = "prata"; }
    else if( vitorias>= 51 && vitorias <= 80){
         nivel = "ouro";}
    else if( vitorias>= 81 && vitorias <= 90 ){
        nivel = "diamante"; }
    else if( vitorias>= 91 && vitorias <=100 ){
        nivel = "lendario";}
        else {
            nivel= "imortal";
        }

        return {saldoDevitorias, nivel};
    }

        const vitorias = 105;
        const derrotas= 40;
        const{ saldoDevitorias, nivel} = calcular(vitorias, derrotas);   
    console.log(`O heroi tem saldo de ${saldoDevitorias} e esta no nivel de ${nivel}`);
