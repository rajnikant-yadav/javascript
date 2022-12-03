// Is there a formula for the Fibonacci Series?
// The Fibonacci sequence formula deals with the Fibonacci sequence, finding its missing terms. The Fibonacci formula is given as, Fn = Fn-1 + Fn-2, where n > 1.

function fibob(n){
    let first=1, second=1,next
    for(let i=0;i<n;i++){
        console.log(first)
        next=first+second
        first=second
        second=next

}
}

const N=8
fibob(N)


