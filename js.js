let g=`d:${[3,4]}`.split(":")
        let g1=[]
        for(let i=0;i<g[1].length;i+=2)
       {
        {
        g1.push(parseInt(g[1][i]))
        }
       }
       console.log(g1)