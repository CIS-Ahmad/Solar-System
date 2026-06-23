const PlanetsName = [
    "None",
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Moon",
    "Pluto"
];

function GETElemntUsingID(ID) {
    return document.getElementById(ID);
}
const massBox = GETElemntUsingID("Mass");
const calculateBtn = GETElemntUsingID("Calculate");
const PlanetsList = GETElemntUsingID("Planets");
let Mass = 0;
let Gravity = 0;
let PlanetName = "None";
let isActivated = false;

function CreateElement(name, className, id = null, textContent = "", father = null) {

    const element = document.createElement(name);
    element.classList.add(className);

    if (textContent !== "") {
        element.textContent = textContent;
    }

    if (id) {
        element.id = id;
    }

    if (father) {
        const parent = GETElemntUsingID(father);
        parent.appendChild(element);
    }
    else {
        document.body.appendChild(element);
    }

    return element;
}

function getGravity() {
    const gravity = {
        None: 0,
        Mercury: 3.7,
        Venus: 8.87,
        Earth: 9.81,
        Mars: 3.71,
        Jupiter: 24.79,
        Saturn: 10.44,
        Uranus: 8.69,
        Neptune: 11.15,
        Moon: 1.62,
        Pluto: 0.62
    };
    return gravity[PlanetName]
}

function getMass() {
    return Number(GETElemntUsingID("Mass").value);
}

function CalculateWidth() {
    const Widthresult = GETElemntUsingID("result");

    Widthresult.textContent = (Mass * Gravity).toFixed(2) + " N";
}

function updatePlanet() {
    const plImage = GETElemntUsingID("planetImage");
    const PlName = GETElemntUsingID("planetName");

    plImage.src = `image/${PlanetName.toLowerCase()}.png`;
    PlName.textContent = PlanetName;
}

function result() {
    const OutA = GETElemntUsingID("OutputA");
    const OutB = GETElemntUsingID("OutputB");

    OutA.style.display = "none";
    OutB.style.display = "flex";

    CalculateWidth();
    updatePlanet();


}

function Main(FirstTime = true) {

    PlanetName = PlanetsList.value;
    Mass = getMass();
    Gravity = getGravity();

    if (isActivated) {
        if ((Mass === 0) && (Gravity === 0)) {
            GETElemntUsingID("ReqText").textContent = "the Mass and the Planet are Required";
            console.error("the user don't enter the Mass and Gravity");
            return;
        }
        else if (Mass === 0) {
            GETElemntUsingID("ReqText").textContent = "the Mass is Required";
            console.error("the user don't enter the Mass");
            return;
        }
        else if (Gravity === 0) {
            GETElemntUsingID("ReqText").textContent = "the Planet is Required";
            console.error("the user don't enter the Planet");
            return;
        }
        else {
            result();
        }
    }
}

function CreateOpstion() {

    for (let i = 0; i < PlanetsName.length; i++) {
        let Ops = CreateElement("option", null, `${PlanetsName[i]}`, null, `Planets`);
        Ops.value = PlanetsName[i];
        Ops.textContent = ` ${PlanetsName[i]}`;
    }

}

calculateBtn.addEventListener("click", () => {
    isActivated = true;
    Main();
});

PlanetsList.addEventListener("input", () => {

    if (PlanetsList.value !== 'None') {
        GETElemntUsingID("None").disabled = true;
    }
    Main();

});


massBox.addEventListener("input", () => {

    if (massBox.textContent) // 0 or empty
        Mass = 0;
    Main();

});

document.addEventListener("DOMContentLoaded", () => {

    CreateOpstion();

});