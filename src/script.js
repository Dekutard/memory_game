function shuffle(a) {
    
    for (let i = a.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    
    return a;
}