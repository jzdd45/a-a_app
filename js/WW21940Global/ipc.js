function GermanyIPC() {
      
  //Remove <br> tags in html and use margins instead
  //Remove this is a thing stuff
  //Fix the fix this


  //Button values
  var infantry = document.getElementById("InfantryG");
  var mechanizedInfantry = document.getElementById("MechanizedInfantryG");
  var artillery = document.getElementById("ArtilleryG");
  var tank = document.getElementById("TankG");
  var AAA = document.getElementById("AAAG");
  var fighter = document.getElementById("FighterG");
  var tacticalBomber = document.getElementById("TacticalBomberG");
  var strategicBomber = document.getElementById("StrategicBomberG");
  var battleship = document.getElementById("BattleshipG");
  var aircraftCarrier = document.getElementById("AircraftCarrierG");
  var cruiser = document.getElementById("CruiserG");
  var destroyer = document.getElementById("DestroyerG");
  var submarine = document.getElementById("SubmarineG");
  var transport = document.getElementById("TransportG");

  //National objectives


  //Purchased unit(s) counter
  var infantryCounter = 0;
  var mechanizedInfantryCounter = 0;
  var artilleryCounter = 0;
  var tankCounter = 0;
  var AAACounter = 0;
  var fighterCounter = 0;
  var tacticalBomberCounter = 0;
  var strategicBomberCounter = 0;
  var battleshipCounter = 0;
  var aircraftCarrierCounter = 0;
  var cruiserCounter = 0;
  var destroyerCounter = 0;
  var submarineCounter = 0;
  var transportCounter = 0;

  //IPC income
  var germanyIPCRefresh = 30; //income
  var germanyIPCTotal = 0; 
  var moneyTracker = 0;

  germanyIPCTotal = germanyIPCRefresh;
  GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;

  //Infantry
  infantry.addEventListener("click", function(event){
    
    var infantryValue = document.getElementById("InfantryG").value;
    germanyIPCTotal -= infantryValue;
    
    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      infantryValue = Number(infantryValue);
      germanyIPCTotal += infantryValue;
      infantryCounter --;
    }
    infantryCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    InfantryGCounter.innerHTML = "Infantry: " + infantryCounter;

  });
  
  //Mechanized infantry
  mechanizedInfantry.addEventListener("click", function(event){

    var mechanizedInfantryValue = document.getElementById("MechanizedInfantryG").value;
    germanyIPCTotal -= mechanizedInfantryValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      mechanizedInfantryValue = Number(mechanizedInfantryValue);
      germanyIPCTotal += mechanizedInfantryValue;
      mechanizedInfantryCounter --;
    }
    mechanizedInfantryCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    MechanizedInfantryGCounter.innerHTML = "Mechanized Infantry: " + mechanizedInfantryCounter;
  });
 
  //Artillery
  artillery.addEventListener("click", function(event){

    var artilleryValue = document.getElementById("ArtilleryG").value;
    germanyIPCTotal -= artilleryValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      artilleryValue = Number(artilleryValue);
      germanyIPCTotal += artilleryValue;
      ArtilleryCounter --;
    }
    artilleryCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    ArtilleryGCounter.innerHTML = "Artillery: " + artilleryCounter;
  });

 //Tank
 tank.addEventListener("click", function(event){

    var tankValue = document.getElementById("TankG").value;
    germanyIPCTotal -= tankValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      tankValue = Number(tankValue);
      germanyIPCTotal += tankValue;
      tankCounter --;
    }
    tankCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    TankGCounter.innerHTML = "Tank: " + tankCounter;
  });
    
  //AAA
  AAA.addEventListener("click", function(event){

    var AAAValue = document.getElementById("AAAG").value;
    germanyIPCTotal -= AAAValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      AAAValue = Number(AAAValue);
      germanyIPCTotal += AAAValue;
      AAACounter --;
    }
    AAACounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    AAAGCounter.innerHTML = "AAA: " + AAACounter;
  });
  
  //Fighter
  fighter.addEventListener("click", function(event){

    var fighterValue = document.getElementById("FighterG").value;
    germanyIPCTotal -= fighterValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      fighterValue = Number(fighterValue);
      germanyIPCTotal += fighterValue;
      fighterCounter --;
    }
    fighterCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    FighterGCounter.innerHTML = "Fighter: " + fighterCounter;
  });

  //Tactical bomber
  tacticalBomber.addEventListener("click", function(event){

    var tacticalBomberValue = document.getElementById("TacticalBomberG").value;
    germanyIPCTotal -= tacticalBomberValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      tacticalBomberValue = Number(tacticalBomberValue);
      germanyIPCTotal += tacticalBomberValue;
      tacticalBomberCounter --;
    }
    tacticalBomberCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    TacticalBomberGCounter.innerHTML = "Tactical Bomber: " + tacticalBomberCounter;
  });
  
  //Strategic bomber
  strategicBomber.addEventListener("click", function(event){

    var strategicBomberValue = document.getElementById("StrategicBomberG").value;
    germanyIPCTotal -= strategicBomberValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      strategicBomberValue = Number(strategicBomberValue);
      germanyIPCTotal += strategicBomberValue;
      strategicBomberCounter --;
    }
    strategicBomberCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    StrategicBomberGCounter.innerHTML = "Strategic Bomber: " + strategicBomberCounter;
  });
  
  //Battleship
  battleship.addEventListener("click", function(event){

    var battleshipValue = document.getElementById("BattleshipG").value;
    germanyIPCTotal -= battleshipValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      battleshipValue = Number(battleshipValue);
      germanyIPCTotal += battleshipValue;
      battleshipCounter --;
    }
    battleshipCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    BattleshipGCounter.innerHTML = "Battleship: " + battleshipCounter;
  });
  
  //Aircraft carrier
  aircraftCarrier.addEventListener("click", function(event){

    var aircraftCarrierValue = document.getElementById("AircraftCarrierG").value;
    germanyIPCTotal -= aircraftCarrierValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      aircraftCarrierValue = Number(aircraftCarrierValue);
      germanyIPCTotal += aircraftCarrierValue;
      aircraftCarrierCounter --;
    }
    aircraftCarrierCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    AircraftCarrierGCounter.innerHTML = "Aircraft Carrier: " + aircraftCarrierCounter;
  });
  
  //Cruiser
  cruiser.addEventListener("click", function(event){

    var cruiserValue = document.getElementById("CruiserG").value;
    germanyIPCTotal -= cruiserValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      cruiserValue = Number(cruiserValue);
      germanyIPCTotal += cruiserValue;
      cruiserCounter --;
    }
    cruiserCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    CruiserGCounter.innerHTML = "Cruiser: " + cruiserCounter;
  });
  
  //Destroyer
  destroyer.addEventListener("click", function(event){

    var destroyerValue = document.getElementById("DestroyerG").value;
    germanyIPCTotal -= destroyerValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      destroyerValue = Number(destroyerValue);
      germanyIPCTotal += destroyerValue;
      destroyerCounter --;
    }
    destroyerCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    DestroyerGCounter.innerHTML = "Destroyer: " + destroyerCounter;
  });
  
  //Submarine
  submarine.addEventListener("click", function(event){

    var submarineValue = document.getElementById("SubmarineG").value;
    germanyIPCTotal -= submarineValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      moneyTracker += 0;
      germanyIPCTotal = Number(germanyIPCTotal);
      submarineValue = Number(submarineValue);
      germanyIPCTotal += submarineValue;
      submarineCounter --;
    } else {
      //This is a thing
      submarineValue = Number(submarineValue);
      moneyTracker += submarineValue;
      submarineCounter ++;
      GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
      SubmarineGCounter.innerHTML = "Submarine: " + submarineCounter;
    }
  });
  
  //Transport
  transport.addEventListener("click", function(event){

    var transportValue = document.getElementById("TransportG").value;
    germanyIPCTotal -= transportValue;

    if (germanyIPCTotal < 0) {
      alert("Insufficient funds");
      germanyIPCTotal = Number(germanyIPCTotal);
      transportValue = Number(transportValue);
      germanyIPCTotal += transportValue;
      transportCounter --;
    }
    transportCounter ++;
    GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
    TransportGCounter.innerHTML = "Transport: " + transportCounter;
  });
  
  //Income change button
  submitG.addEventListener("click", function(event) {
      var incomeChangeValue = document.getElementById("IncomeChangeG").value;
      incomeChangeValue = Number(incomeChangeValue);
      var incomeChangeValueStored = incomeChangeValue;
      germanyIPCRefresh += incomeChangeValueStored;
      incomeAdjustG.innerHTML += "Income Adjust: " + incomeChangeValueStored + "<br>";
  });

  //End turn button
  endTurnG.addEventListener("click", function(event) {
    //Fix this!!!!!!!!!
    var endTurn;
    endTurn = confirm("Are you sure you want to end the turn?");
    if (endTurn) {
      germanyIPCTotal += germanyIPCRefresh;
      GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;

      incomeAdjustG.innerHTML = " ";
      InfantryGCounter.innerHTML = " ";
      MechanizedInfantryGCounter.innerHTML = " ";
      ArtilleryGCounter.innerHTML = " ";
      TankGCounter.innerHTML = " ";
      AAAGCounter.innerHTML = " ";
      FighterGCounter.innerHTML = " ";
      TacticalBomberGCounter.innerHTML = " ";
      StrategicBomberGCounter.innerHTML = " ";
      BattleshipGCounter.innerHTML = " ";
      AircraftCarrierGCounter.innerHTML = " ";
      CruiserGCounter.innerHTML = " ";
      DestroyerGCounter.innerHTML = " ";
      SubmarineGCounter.innerHTML = " ";
      TransportGCounter.innerHTML = " ";
      infantryCounter = 0;
      mechanizedInfantryCounter = 0;
      artilleryCounter = 0;
      tankCounter = 0;
      AAACounter = 0;
      fighterCounter = 0;
      tacticalBomberCounter = 0;
      strategicBomberCounter = 0;
      battleshipCounter = 0;
      aircraftCarrierCounter = 0;
      cruiserCounter = 0;
      destroyerCounter = 0;
      submarineCounter = 0;
      transportCounter = 0;
    }
  });

    //Reset to beginning of turn button
  resetTurnG.addEventListener("click", function(event) {
    //Fix this!!!!!!!!
    var reset;
    reset = confirm("Are you sure you want to reset your purchases?");
    if (reset) {
      germanyIPCTotal += moneyTracker;
      moneyTracker = 0;

      GOutput.innerHTML = "IPC Total: " + germanyIPCTotal;
      incomeAdjustG.innerHTML = " "; 
      InfantryGCounter.innerHTML = " ";
      MechanizedInfantryGCounter.innerHTML = " ";
      ArtilleryGCounter.innerHTML = " ";
      TankGCounter.innerHTML = " ";
      AAAGCounter.innerHTML = " ";
      FighterGCounter.innerHTML = " ";
      TacticalBomberGCounter.innerHTML = " ";
      StrategicBomberGCounter.innerHTML = " ";
      BattleshipGCounter.innerHTML = " ";
      AircraftCarrierGCounter.innerHTML = " ";
      CruiserGCounter.innerHTML = " ";
      DestroyerGCounter.innerHTML = " ";
      SubmarineGCounter.innerHTML = " ";
      TransportGCounter.innerHTML = " ";
      infantryCounter = 0;
      mechanizedInfantryCounter = 0;
      artilleryCounter = 0;
      tankCounter = 0;
      AAACounter = 0;
      fighterCounter = 0;
      tacticalBomberCounter = 0;
      strategicBomberCounter = 0;
      battleshipCounter = 0;
      aircraftCarrierCounter = 0;
      cruiserCounter = 0;
      destroyerCounter = 0;
      submarineCounter = 0;
      transportCounter = 0;
    } 
  });
}

GermanyIPC();
