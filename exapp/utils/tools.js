toSqlString = (obj) => {
    let str = ''
    for( let item in obj){
        if(!str){
            str = item + '=' + '?'
        }
    }
} 