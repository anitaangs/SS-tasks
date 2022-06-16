function shortestWord(s){
        var s = s.split(' ');
        var x = []; var y = 0;
    
        for (var i = 0; i < s.length; ++i){
            x = s[i];
    
        if (y == 0 || x.length < y){
            y = x.length;
          };         
        };
      return y;
    };
    console.log(shortestWord('Lets all go on holiday somewhere very cold'))