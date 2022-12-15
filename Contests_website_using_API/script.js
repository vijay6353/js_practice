let slides = document.querySelectorAll(".slide")
let counter = 0;
// console.log(slides);

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});


const goprev = ()=>{
    counter--;
    slideimages();
}
const gonext = ()=>{
    counter++;
   
    slideimages();
}


const slideimages = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = ` translatex(-${counter * 100}%)`
    })
    
    // console.log(index, counter);
    // console.log(count);
}



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e226ae8492mshf05e9e8741a1c12p165f6cjsn40f680c403b3',
        'X-RapidAPI-Host': 'contests7.p.rapidapi.com'
    }
};

fetch('https://contests7.p.rapidapi.com/contests', options)
    .then(response => response.json())
    .then((contests) => {

        ihtml = ""
        for (const item in contests) {
            console.log(contests[item]);
            ihtml +=  `
                    <div class="card" style="width: 22rem;">
                        <img src="https://teachyourkidscode.com/wp-content/uploads/2018/12/Teach-Your-Kids-Code-Front-Page-Image-1.jpg" class="card-img-top" alt="...">
                       <div class="card-body">
                          <h5 class="card-title">${contests[item].name}</h5>
                          <p class="card-text">status : ${contests[item].status}</p>
                          <p class="card-text">Duration : ${contests[item].duration}</p>
                          <p class="card-text">Site is : ${contests[item].site}</p>
                          <p class="card-text">In 24 hours? ${contests[item].in_24_hours}</p>
                          <p class="card-text">Start-Time :${contests[item].start_time}</p>
                          <p class="card-text">End-Time : ${contests[item].end_time}</p>
                          <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
                     </div>
                    </div>
                 `
        }
        cardcontainer.innerHTML = ihtml;
    })
    .catch(err => console.error(err));



