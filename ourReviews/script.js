const reviews = [
    {
        name:"Susan Smith",
        job:"Web Developer",
        image:"https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
        text: "I'm baby meggins teww health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
    },
    {
        name:"Anna Johson",
        job:"Web Designer",
        image:"https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
        text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen",
    },
    {
        name:"Peter Jones",
        job:"Intern",
        image:"https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
        text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
    },
    {
        name:"Bill Anderson",
        job:"The Boss",
        image:"https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
        text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.",
    },
];

let i = 0

function ToRight(){
    i++
    if(i==4){
        i=0
        ToRight(i)
    }
    document.getElementById("author").innerHTML = reviews[i].name
    document.getElementById("job").innerHTML = reviews[i].job
    document.getElementById("text").innerHTML = reviews[i].text
    document.getElementById("img").setAttribute("src", reviews[i].image)
}

function ToLeft(){
    i--
    if(i==4){
        i=0
        ToLeft(i)
    }
    document.getElementById("author").innerHTML = reviews[i].name
    document.getElementById("job").innerHTML = reviews[i].job
    document.getElementById("text").innerHTML = reviews[i].text
    document.getElementById("img").setAttribute("src", reviews[i].image)
}

