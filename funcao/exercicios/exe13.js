/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function calendario(dia){
    if(dia > 31){
        console.log( 'Dia invalidor')
    }else{
    switch(dia){
        case 1: case 7: case 8: case 15: case 16: 
        case 22: case 23: case 29: case 30: 
            console.log('Final de semana')
        default: 
           console.log('Dia util')
    }}
}

calendario(32)

