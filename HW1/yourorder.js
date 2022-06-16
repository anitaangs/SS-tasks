function yourOrder(words){
    let arr = words.split(' ')
    let ordered = []
  
    arr.forEach(word=>{
      let x = word.split('')
      let num = x.find(el=>parseInt(el))
      ordered.push([word,parseInt(num)]) 
    })
  
    ordered.sort((a,b)=>a[1]-b[1]).map(x=> x.splice(1,1))
    return ordered.join(' ')
  }
  console.log(yourOrder("4of Fo1r pe6ople g3ood th5e the2"));