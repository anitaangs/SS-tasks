function DNAStrings(dna) {
    return dna.replace(/A|T|G|C/g, function (match) {
        return DNAStrings.pairs[match];
    });
}

DNAStrings.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
};

console.log(DNAStrings('ATTGC'));