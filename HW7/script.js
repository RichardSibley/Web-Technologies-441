class ViewMasterSlide {
    constructor(title, image, description, author, year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

const slides = [
    new ViewMasterSlide(
        "Flower Thrower",
        "Images/Banksy.png",
        "The Flower Thrower, Flower Bomber, Rage, or Love is in the Air is a 2003 stencil mural in Beit Sahour in the West Bank by the graffiti artist Banksy, depicting a masked man throwing a bunch of flowers.",
        "Banksy",
        "2003"
    ),
    new ViewMasterSlide(
        "Unknown Title",
        "Images/Hyuro.png",
        "Hyuro aims to create images that make viewers question the system we live in. Having a bit of a rebellious mind set, Hyuro’s bold take on politics, art and her role as a female artist are an admirable feat. The prolific artist also uses her art to explore personal complexities like the relationship we have with ourselves.",
        "Hyuro",
        "2020"
    ),
    new ViewMasterSlide(
        "Beyond Walls",
        "Images/Saype.png",
        "Happy to share with you my latest massive ecofriendly artwork in Vilnius! Here, In 1989, the year I was born, 2 million people came together and stood united for their independence and for peace. I’m thrilled to have created this incredible project in collaboration with the @institut_francais_lituanie and @nacionalinis_muziejus.",
        "Saype",
        "2024"
    ),
    new ViewMasterSlide(
        "Axe",
        "Images/Escif.png",
        "Portrays a tree stump and the wooden axe tool used to chop the tree down is slammed into the stump, creating a haunting image of the devastating impact of human activity on the environment.",
        "Escif",
        "2011"
    ),
    new ViewMasterSlide(
        "Big Trash Animals",
        "Images/BordaloII.png",
        "Portuguese artist Bordalo II is mainly known for his large-scale sculptures of animals, which are made entirely from trash materials and plastics. His work addresses waste and environmental destruction issues and has been featured in cities worldwide. ",
        "Bordalo II",
        "2015"
    )
];

document.getElementById("year").textContent = new Date().getFullYear();

function showRandomSlide() {
    const randomIndex = Math.floor(Math.random() * slides.length);
    const slide = slides[randomIndex];
    document.getElementById("title").textContent = slide.title;
    document.getElementById("image").src = slide.image;
    document.getElementById("image").alt = slide.title;
    document.getElementById("description").textContent = slide.description;
    document.getElementById("author").textContent = slide.author;
    document.getElementById("year").textContent = slide.year;
}
