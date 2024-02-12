const searchİcon = document.getElementById( 'searchİcon' );
const searchEngine = document.getElementById( 'searchEngine' );

searchİcon.addEventListener( 'mouseover', () => {
    searchEngine.classList.toggle('active');
});

// Search functionality

const targets= document.querySelectorAll('.target');  // get all elements with the target class
const options = {
   threshold:0.3
}

const callBack = (entries) =>{  
    entries.forEach((entry)=>{
        if(entry.isIntersecting){

            entry.target.classList.add('active')
        }
        else{
            entry.target.classList.remove('active')
        }
    });
}

const observer = new IntersectionObserver(callBack, options);

targets.forEach ((target)=>{
    observer.observe(target)
});

