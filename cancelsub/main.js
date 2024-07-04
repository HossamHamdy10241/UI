
let mainimg= document.querySelector('.cardd')

// the size used 
let rpw=mainimg.width

// the ratio is based on the figma design and the main picture size which of size 1248 
let spw=1248

// the position and size of the eyes in the design with the first size test testagain
let eyesxs=[739,665,584,518]
let eyeys=[302,302,321,321]
let eyesize=[12,18]

//  the position of the eyes when staring :|
let translationsX=[40,40,-37,-37]
let translationsY=[-3,-3,12,12]

let eyes = document.querySelectorAll('svg')

let i=0

// position and size the eyes relatively 

for(let eye of eyes){
   if(eye.style){
    eye.style.width=`${(12*rpw)/spw}px`
    eye.style.top=`${(eyeys[i]*rpw)/spw}px`
    eye.style.left=`${(eyesxs[i]*rpw)/spw}px`
    i++;
   }
}
// the staring effect 
function onhov(){
  let k=0
    for(let eye of eyes){
        eye.style.transform=`translate(${(translationsX[k]*rpw)/spw}px, ${(translationsY[k]*rpw)/spw}px`;

        k++;

    }

}
let img = document.querySelector('.butt')
img?.addEventListener('mouseenter', onhov)
img?.addEventListener('mouseleave',()=>{
    for(let eye of eyes){
        eye.style.transform=`translate(0px,0px)`
    }
})
