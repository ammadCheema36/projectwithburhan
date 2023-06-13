function utopianTree(n) {
    // Write your code here
    let height = 0;
    for(let i = 0; i <= n.length; i++) {
        if(i == 0) {
            height = height + 1;
            console.log(height)
        } else if(i % 2 != 0) {
            height = height + 1;
            console.log(height)
        } else if(i % 2 == 0) {
            height = height * 2;
            console.log(height)
        }   
    }
    return console.log(height);
}

utopianTree(5)