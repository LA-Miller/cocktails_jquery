const drinks = [
    {
        name: "Hot Toddy",
        ingredients: "honey, water, liquor, lemon juice, cloves, cinnamon stick",
        recipe: "Dissolve honey in boiling water, add liquor, lemon juice, cloves, and a cinnamon stick.",
        calories: 100,
        image: "images/hot_toddy.png"
    },
    {
        name: "Hot Buttered Rum",
        ingredients: "spiced butter, water, rum",
        recipe: "Mix spiced butter, hot water (or apple cider), and rum.",
        calories: 250,
        image: "images/hot_buttered_rum.png"
    },
    {
        name: "Peppermint White Russian",
        ingredients: "vodka, khalua, milk, peppermint, candy cane",
        recipe: "Pour vodka and Kahlua on ice, top with milk or cream and a hint of peppermint. Garnish with candy cane.",
        calories: 170,
        image: "images/peppermint_white_russian.jpg"
    },
    {
        name: "Christmas Old Fashioned",
        ingredients: "bourbon, lemon juice, orange juice, bitters, spiced syrup, orange slice",
        recipe: "Mix bourbon, lemon juice, orange juice, bitters, and spiced syrup. Garnish with an orange slice.",
        calories: 120,
        image: "images/christmas_old_fashioned.jpg"
    },
    {
        name: "Cranberry Mimosa",
        ingredients: "cranberry juice, orange liqueur, sparkling wine",
        recipe: "Mix cranberry juice and orange liqueur, top with sparkling wine.",
        calories: 150,
        image: "images/cranberry_mimosa.jpg"
    }
];

const showNameAndIngr = (index) => {
    console.log(drinks[index].name);
    $(".name").eq(index).text(drinks[index].name);

    console.log(drinks[index].ingredients);
    $(".description").eq(index).text(drinks[index].ingredients);
}

const showInformation = () => {
    setUpBoxes();

    jQuery.each($(".box"), showNameAndIngr);

    $(".box").on("mouseover", function() {
        let indexOfDrink = $(".box").index(this);

        $(this)
        .find("p.description")
        .text(
            drinks[indexOfDrink].recipe
        )
    })

    $(".box").on("mouseout", function() {
        let indexOfDrink = $(".box").index(this);

        $(this).find("p.description").text(drinks[indexOfDrink].ingredients)
    })

    $(".box").on("click", function() {
        let indexOfDrink = $(".box").index(this);

        $(this).find("p.description").text(drinks[indexOfDrink].calories + " calories")
    })
}

const setUpBoxes = ()=> {
    let wrapperRef = $('.wrapper');
    drinks.forEach((drink)=> {
        let boxMarkup = `<div class="box">
        <img class="drink_pic" src="${drink.image}" />
        <p class="name"></p>
        <p class="description"></p> </div>`;
        wrapperRef.append(boxMarkup);
    })
}

$(document).ready(showInformation);
  