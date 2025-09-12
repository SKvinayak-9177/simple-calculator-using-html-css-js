try{
let i=0;
let moniter=document.getElementById("moniter")
let key;
let iscomputing=false;
let computed=false;
function one()
{
   if(iscomputing==false)
   moniter.innerHTML+="1";
   else if(computed==true)
   {
       moniter.innerHTML="1";
       iscomputing=false
       computed=false
   }
      
}
function tw()
{
   if(iscomputing==false)
   moniter.innerHTML+="2";
   else if(computed==true)
   {
       moniter.innerHTML="2";
       iscomputing=false
       computed=false
   }

}
function th()
{
   if(iscomputing==false) 
   moniter.innerHTML+="3";
   else if(computed==true)
   {
       moniter.innerHTML="3";
       iscomputing=false
       computed=false
   }

}
function four()
{
   if(iscomputing==false)
   moniter.innerHTML+="4";
   else if(computed==true)
   {
       moniter.innerHTML="4";
       iscomputing=false
       computed=false
   }
}
function five()
{
   if(iscomputing==false)
   moniter.innerHTML+="5";
   else if(computed==true)
   {
       moniter.innerHTML="5";
       iscomputing=false
       computed=false
   }
 
}
function six()
{
   if(iscomputing==false)
   moniter.innerHTML+="6";
   else if(computed==true)
   {
       moniter.innerHTML="6";
       iscomputing=false
       computed=false
   }

}
function sev()
{
   if(iscomputing==false)
   moniter.innerHTML+="7";
   else if(computed==true)
   {
       moniter.innerHTML="7";
       iscomputing=false
       computed=false
   }
}
function eig()
{
   if(iscomputing==false)
   moniter.innerHTML+="8";
   else if(computed==true)
   {
       moniter.innerHTML="8";
       iscomputing=false
       computed=false
   }
}
function nine()
{
   if(iscomputing==false)
   moniter.innerHTML+="9";
   else if(computed==true)
   {
       moniter.innerHTML="9";
       iscomputing=false
       computed=false
   }
}
function ze()
{
   if(iscomputing==false)
   moniter.innerHTML+="0";
   else if(computed==true)
   {
       moniter.innerHTML="0";
       iscomputing=false
       computed=false
   }
}
function dot()
{
   if(iscomputing==false)
   moniter.innerHTML+=".";
}
function add()
{
   if(iscomputing==false)
    moniter.innerHTML+=" + ";
}
function sub()
{
   if(iscomputing==false)
    moniter.innerHTML+=" - ";
}
function mul()
{
   if(iscomputing==false)
    moniter.innerHTML+=" * ";
}
function div()
{
   if(iscomputing==false)
    moniter.innerHTML+=" / ";
}
function del()
{
   if(iscomputing==false)
    moniter.innerHTML=moniter.innerHTML.slice(0,-1);
}
function ac()
{
   iscomputing=false;
   moniter.innerHTML="";
}
function eq()
{
   iscomputing=true;
   let ar=(moniter.innerHTML).split(' ')
   while(true)
   {
        if(ar.includes('/'))
        {
                i=ar.indexOf('/')
                ar.splice(i-1,3,((parseFloat(ar[i-1]))/(parseFloat(ar[i+1]))))
        }
        else if(ar.includes('*'))
        {
                i=ar.indexOf('*')
                ar.splice(i-1,3,((parseFloat(ar[i-1]))*(parseFloat(ar[i+1]))))
        }
        else if(ar.includes('+'))
        {
                i=ar.indexOf('+')
                ar.splice(i-1,3,((parseFloat(ar[i-1]))+(parseFloat(ar[i+1]))))
        }
        else if(ar.includes('-'))
        {
                i=ar.indexOf('-')
                ar.splice(i-1,3,((parseFloat(ar[i-1]))-(parseFloat(ar[i+1]))))
        }
        else{
                break;
        }
   }
   moniter.innerHTML+=" = "+ar;
   computed=true;
}
document.addEventListener('keydown',(event)=>{
   key=event.key
   if(key==='c')
   {
      ac();
      return 
   } 
   else if(iscomputing && computed==false)
      return
   else
   {
      let c={
      '1':one,'2':tw,'3':th,'4':four,'5':five,'6':six,'7':sev,'8':eig,'9':nine,'0':ze,'=':eq,'+':add,'-':sub,'*':mul,'/':div,'Enter':eq,'.':dot,'Backspace':del
      }
      let keys=Object.keys(c)
      if(keys.includes(key))
         event.preventDefault(); 
         c[key]();
   }
   
});
}
catch(e)
{
   let moniter=document.getElementById("moniter")
   moniter.innerHTML("Error");
}
