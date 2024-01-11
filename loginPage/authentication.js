export function Authentication(username){
    let pattern = /@gmail.com/
    let matchStatus = username.match(pattern);
    return matchStatus;
}