let stars=document.querySelectorAll('.fa-star')
let emoji=[...document.getElementsByClassName('fa-regular')] //converts collections into array
let colors=['red','maroon','purple','blue','green']
console.log(stars)
// updateRating(0);
const updateRating=(index)=>{
    stars.forEach((element,pos)=>{
        if(pos<=index){
            element.classList.add('active')
        }
        else{
            element.classList.remove('active')
        }
        
    })
    
}
// updateRating(0);
stars.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        updateRating(index)
        updateEmoji(index)
    })
})


const updateEmoji=(index)=>{
    // emoji[0].style.transform=`translateX(${(-index)*50}px)`;
    emoji.forEach((ele)=>{
        ele.style.transform=`translateX(${(-index)*50}px)`;
        emoji[index].style.color=`${colors[index]}`
    })
   
}