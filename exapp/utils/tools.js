toSqlString = (obj) => {
    let str = ''
    for( let item in obj){
        if(!str){
            str = '`'+item+'`' + '=' + '"'+obj[item]+ '"'
        }else{
            str += ',' +'`'+item+'`' + '=' +'"'+obj[item]+ '"'
        }
    }
    return str
} 

module.exports = {
    toSqlString
}