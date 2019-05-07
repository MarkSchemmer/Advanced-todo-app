

interface ITodo {
  createdAt: Date
  value: string
  id:string
}

const genId = () => {
    var lut = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }
const  e5 = () =>  {
  var k=['x','x','x','x','-','x','x','-','4','x','-','y','x','-','x','x','x','x','x','x'];
  var u='',i=0,rb=Math.random()*0xffffffff|0;
  while(i++<20) {
    var c=k[i-1],r=rb&0xff,v=c=='x'?r:(c=='y'?(r&0x3f|0x80):(r&0xf|0x40));
    u+=(c=='-')?c:lut[v];rb=i%4==0?Math.random()*0xffffffff|0:rb>>8
  }
  return u
}
    return e5();
}

export class Todo implements ITodo {
    createdAt: Date   
    value: string 
    id: string 
    constructor(val) {
        this.value = val 
        this.id = genId()
        this.createdAt = new Date()
    }
}