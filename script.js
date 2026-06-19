function GETElemntUsingID(ID)
{
    return document.getElementById(ID);
}
const massBox = GETElemntUsingID("Mass");
const calculateBtn = GETElemntUsingID("Calculate");
const PlanetsList =GETElemntUsingID("Planets");
let Mass=0;
let Gravity =0;
let PlanetName="None";
let isActivated = false;

function getGravity(){
    const gravity = {
        None:0,
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

function getMass(){
    return Number( GETElemntUsingID("Mass").value);
}

function CalculateWidth()
{
    const Widthresult =GETElemntUsingID("result");

    Widthresult.textContent = (Mass * Gravity) + " N";
}

function updatePlanet()
{
    const plImage =GETElemntUsingID("planetImage");
    const PlName =GETElemntUsingID("planetName");

    plImage.src = `image/${PlanetName.toLowerCase()}.png`;
    PlName.textContent = PlanetName;
}

function result()
{
    const OutA = GETElemntUsingID("OutputA");
    const OutB = GETElemntUsingID("OutputB");

    OutA.style.display="none";
    OutB.style.display="flex";
    
    CalculateWidth();
    updatePlanet();


}

function Main(FirstTime=true){

 PlanetName = PlanetsList.value;
 Mass=getMass();
 Gravity =getGravity();
   
 if(isActivated)
   { 
    if((Mass ===0) && (Gravity===0) )
    {
        GETElemntUsingID("ReqText").textContent="the Mass and the Planet are Required";
        console.error("the user don't enter the Mass and Gravity");
        return;
    }
    else if(Mass===0)
    {
        GETElemntUsingID("ReqText").textContent="the Mass is Required";
        console.error("the user don't enter the Mass");
        return;
    }
    else if(Gravity===0)
    {
        GETElemntUsingID("ReqText").textContent="the Planet is Required";
        console.error("the user don't enter the Planet");
        return;
    }
    else
    {
        result();
    }
   }
}

calculateBtn.addEventListener("click",() => {
    isActivated = true;
    Main();
});
PlanetsList.addEventListener("change",Main);
massBox.addEventListener("change",Main);