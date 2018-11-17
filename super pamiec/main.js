
class Pars 
{
   constructor(taba)
    {
        let tab=taba  
        this.getElements=function()
        {    
            console.log(this);
            this.element=this;
              if(tab.length===0)
              { 
               if(this.element===tab[0])return; 
                tab.push(this.element);
                if(tab.length===1)
                {  
                    tab.forEach(ta=>
                     {
                         ta.classList.remove('hidden');
                         ta.classList.add('rotate');
            
                     })
                }
            }
                else if(tab.length===1)
                {
                    
                    if(this.element===tab[0])return; 
                     tab.push(this.element);
                     startIt.go.getDone();
                     return tab;
                    
                }
                return tab;      
        }          
    }   
}     
class wyniku
{
   static winResult(tab=[])
    {  
        if(tab.length===2)
             { 
                 tab.forEach(ta=>
                 {  
                      ta.classList.remove('hidden');
                      ta.classList.add('rotate');
         
                  }) 
                }     

         if(tab.length===2)
         {
         if(tab[0].className===tab[1].className)
         { 
             tab.forEach(ta=>
                 {  
                    startIt.go.stats.getStats(ta);
                    setTimeout(()=>
                    {
                     ta.classList.add('active');
                    },1000);
                 })
         }
         else
         {
             setTimeout(()=>
             {
                tab.forEach(ta=>
                    {
                        ta.classList.add('hidden');   
                        ta.classList.remove('rotate');      
                    })
             },1000)
        }
    }     
 }         
}
class ClearTab
{
    constructor()
    {
        this.tab=[]

       this.clearIT=function()
       {
       if(this.tab.length===2)
        {
            setTimeout(()=>
            {
                this.tab.splice(0,2);
            },1000)
          
        }
         return this.tab;
       }
    }
}
class data
{
       static Start()
       {
        return new Date().getTime();
       }
       static Stop()
       {
       return new Date().getTime();
       }   
 }   
   //okreslenie czy win padl;
   class Stats 
   {  
       constructor()
       {
          this.tab=[]
   
       }
        getStats(tabi)
       {
         this.tab.push(tabi)
         if(this.tab.length===18)
         {
            let stp=data.Stop()
            startIt.nick.timeResult(stp);
            this.tab.splice(0,this.tab.length);
         }
       }
   }

class Game
{
    constructor(divtable)
    {      this.divs=document.querySelectorAll('.divs');
         this.divs=[...this.divs];
        this.ResetDiv=new ResetDivs(this.divs);
        this.cardsTab=divtable()
        this.getCard=function()
        {
              return this.cardsTab=divtable();
        }
        console.log(this.cardsTab);
        console.log(this.getCard);
        this.randomPos();
        this.tabC=new ClearTab()
        this.tab=this.tabC.clearIT()
        this.Para=new Pars(this.tab,this.divs)
        this.stats=new Stats()
        this.divs.forEach(card=>
            {  
                card.addEventListener('click',this.Para.getElements);
            })
    }
    randomPos()
    {
        this.divs.forEach(card=>
            {
              const rand=Math.floor(Math.random()*this.cardsTab.length);
              card.classList.add(this.cardsTab[rand]);
              this.cardsTab.splice(rand,1);
              setTimeout(()=>
              {
                card.classList.add('hidden');
              },2000)
            })
        }
     getDone()
    {
      wyniku.winResult(this.Para.getElements());
      this.tabC.clearIT();
    }
}
class ResetDivs
{
    constructor(divs)
    {
        this.div=divs;
        this.resetThis=function() 
            {
                 startIt.go.tabC.clearIT();
                this.div.forEach(function(di)
                {
                   di.className='';   
                })
                startIt.go.getCard();
                startIt.go.randomPos();
    
            }
    }

}
class Listed
{
    constructor(input='Uzytkownik')
    {
       this.elements=[];
       this.inp=input;
        this.createNick=(e)=>
        {  
            e.preventDefault() 
            this.nick=this.inp.value; 
            this.inp.value=''; 
        }

    }
    getTime(timeStart)
    {
        this.timer=timeStart;
        document.querySelector('.bcg').classList.remove('active');
        }
   timeResult(timeClose)
        {
            this.timeEnd=timeClose;
            this.playTime=Math.floor((this.timeEnd-this.timer)/1000)
            let tabEl;
            // console.log(this.timer);
            if(this.timeEnd>0)
            {
                 tabEl=
                {
                    nick:this.nick,
                    time:this.playTime,
                }
    
                this.elements.push(tabEl);
                startIt.Lista.createdList(this.elements); 
               return this.elements;
        }  
    }  
}
class ListaUl
{
    constructor()
    {   
        this.createdList=function(arr=[''])
        {  
            let createUl=document.createElement('li');
            let ul=document.querySelector('ul');
            this.tab=arr
            this.tab.forEach(function(element)
            {
               createUl.textContent=`${element.nick} twoj czas to ${element.time}s`;
               console.log(createUl);
            })
            

            document.querySelector('.bcg').classList.add('active');
            startIt.list.classList.add('active');

            setTimeout(()=>
            {
                startIt.list.classList.remove('active');
                 startIt.go.ResetDiv.resetThis();
            },4000);
            ul.appendChild(createUl);         
        }
    }
   
}
class Operate
{
    constructor()
    {  this.list=document.querySelector('.list');
       this.butList=document.querySelector('.tabela');
       this.input=document.querySelector('input');
       this.Start=document.querySelector('.Start');
       this.nick=new Listed(this.input)
       this.Lista=new ListaUl();
        document.querySelector('.nick').addEventListener('click',this.nick.createNick)
        this.butList.addEventListener('click',this.showTable.bind(this));
        this.Start.addEventListener('click',this.startGame.bind(this));
        this.Start.addEventListener('click',this.divTable());
        this.go=new Game(this.divTable);
       
    }
    startGame()
    {
        this.nick.getTime(data.Start());  

    }
    divTable()
{ 
       return ['red','red','blue','blue','green','green','yellow','yellow','violet','violet','pink','pink','beziq','beziq','orange','orange','grey','grey']

}
showTable()
{
  this.list.classList.add('active');
  setTimeout(()=>
  {
    this.list.classList.remove('active')
  },4000)
                
}
}
const startIt=new Operate();


