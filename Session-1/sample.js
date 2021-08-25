function sample()
{
    for( count=0;count<=10;count++){

        setTimeout(
            ()=>{console.log(count)}
            ,2000);
        
    }
}

sample();