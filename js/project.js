const projects = [
    {
        id: 1,
        title: "HungerBites",
        img_url: "./images/hunger.png",
        about: "This is a Food Delivery Website where the customer has facilities to buy food and moreover it has a admin interface when the admin can control all functionalities of the website and have all the data",
        tools: "React , Express , MongoDb , Jsonwebtokens , Stripe",
        source:"https://github.com/HIITSMANU/Food",
        live:"https://foodmanu.netlify.app/",
    },
    {
        id: 2,
        title: "BharatCares",
        img_url: "./images/hospital.png",
        about: "भारत Cares , an e-medical website , providing both doctor and patient interfaces, with the ease of Booking doctor appointments and tracking them",
        tools: "Html , Css , Js , Json-server",
        source:"https://github.com/GartiaLoria/hospital",
        live:"https://funny-treacle-14b785.netlify.app/",
    },
    {
        id: 3,
        title: "PicDraw",
        img_url: "./images/draw.jpeg",
        about: "This is a simple drawing website which is build using html 5 canvas , here the user can apply the drawing pen to the font of his choice also he can save the images he have drawn",
        tools: "Html , Css , Javascript , Jquery , Jquery ui , Html5 Canvas",
        source:"https://github.com/HIITSMANU/DrawingApp",
        live:"https://lnkd.in/gC-5yn3j",
    },
    {
        id: 4,
        title: "TicToc",
        img_url: "./images/watch.png",
        about: "This is a beginner level responsive stopwatch website same as which we see in mobiles etc . ",
        tools: "Html , Css , Javascript",
        source:"https://github.com/HIITSMANU/Stopwatch-App",
        live:"https://ticantoc.netlify.app/",
    },
    {
        id: 5,
        title: "7Flowers",
        img_url: "./images/flower.png",
        about: "This is a simple static landing page for flower website where i learnt to use bootstrap and other css properties",
        tools: "Html , Css , Javascript , Bootstrap",
        source:"https://github.com/HIITSMANU/fruits",
        live:"https://7flowers.netlify.app/",
    },
    {
        id: 6,
        title: "GoHost",
        img_url: "./images/host.png",
        about: "This is a simple static landing page for hosting website where i learnt to use bootstrap and other css properties. 🚫Caution- Please open in the desktop mode . Responsiveness in under progress 🚧",
        tools: "Html , Css , Javascript , Bootstrap",
        source:"https://github.com/HIITSMANU/GoHost",
        live:"https://manuhost.netlify.app/",
    },
    
]


let project_html = "";
for(let i=0; i<=projects.length-1; i++){
    project_html += card(projects[i]);
}
document.getElementById("projects").innerHTML = project_html;

function card(project){
    let cards = `<div class="col-lg-4">
    <div class="card mb-3">
      <div class="product_image">
        <img class="img-fluid" src="${project.img_url}" alt="${project.title}">
      </div>
      <div class="card-body">
        <div class="card-title text-center">
          <h5 class="project_title">${project.title}</h5>
        </div>
        <p class="card-text">
          <i class="fas fa-info-circle"></i> ${project.about}
        </p>
        <i class="fas fa-cog"></i> <i>${project.tools}</i>
        <br />
        <br />
       <div class="live">
        <button><a href="${project.source}"><i class="fa-solid fa-link"></i>Source code</a></button>
        <button><a href="${project.live}"><i class="fa-solid fa-eye"></i>Live preview</a></button>
       </div> 
        <br />
      </div>
    </div>
  </div>`;

  return cards;
}