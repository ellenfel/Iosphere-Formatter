if(msg["Active Enegy-Im"]){   //Is it MPR63?
    msg["Active Enegy-Im"] = msg["Active Enegy-Im"];
    msg["Active Enegy-Ex"] = msg["Active Enegy-Ex"];
    msg["Active Power"] = msg["Active Power"]/1000;
    
    //Calculation of Cospi
    var temp = msg["Cos Phi"];
    var n = 0;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        n++;
    }
    msg["Cos Phi"] = msg["Cos Phi"] / Math.pow(10, n);
    msg["Cos Phi"] = msg["Cos Phi"];
    
    msg["Current L1"] = msg["Current L1"]/1000;
    msg["Current L2"] = msg["Current L2"]/1000;
    msg["Current L3"] = msg["Current L3"]/1000;
    msg.Frequency = msg.Frequency/100;
    msg["Reactive EnergyIn"] = msg["Reactive EnergyIn"]/1000;
    msg["Reactive EnergyKa"] = msg["Reactive EnergyKa"]/1000;
    msg["Reactive Power"] = msg["Reactive Power"]/1000;
    msg["Voltage L1-N"] = msg["Voltage L1-N"]/100;
    msg["Voltage L2-N"] = msg["Voltage L2-N"]/100;
    msg["Voltage L3-N"] = msg["Voltage L3-N"]/100;
    msg.Active = true;

    msg.CurrentTotal = msg["Current L1"] + msg["Current L2"]  + msg["Current L3"];
    
    msg["Active Energy"] = msg["Active Enegy-Im"];
    

    0000000000000000000000000000000
    if(msg.devName.indexOf("RTG") !== -1){
        
        
        if (msg.CurrentTotal < 2) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);

        } else if (msg.CurrentTotal >= 2 && msg.CurrentTotal < 100) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);

        } else if (msg.CurrentTotal >= 100 && msg.CurrentTotal < 150) {
            msg.maneuver = "Vira Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('000100',2);
        } else if (msg.CurrentTotal >= 150 && msg.CurrentTotal < 215) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);
        } else if (msg.CurrentTotal >= 215 && msg.CurrentTotal < 222.5) {
            msg.maneuver = "Vira Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('001100',2);
        } else if (msg.CurrentTotal >= 222.5 && msg.CurrentTotal < 250) {
            msg.maneuver = "Mayna Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010000',2);
        } else if (msg.CurrentTotal >= 250 && msg.CurrentTotal < 261) {
            msg.maneuver = "Mayna Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('010011',2);
        } else if (msg.CurrentTotal >= 261 && msg.CurrentTotal < 262) {
            msg.maneuver = "Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010100',2);
        } else if (msg.CurrentTotal >= 262 && msg.CurrentTotal < 270) {
            msg.maneuver = "Mayna Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('011000',2);
        } else if (msg.CurrentTotal >= 270 && msg.CurrentTotal < 400) {
            msg.maneuver = "Mayna Trolley Dolu Hızlı";
            msg.state = parseInt('011011',2);

            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 400 && msg.CurrentTotal < 435) {
            msg.maneuver = "Gantry Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('011111',2);
        } else if (msg.CurrentTotal >= 435 && msg.CurrentTotal < 649) {
            msg.maneuver = "Gantry Yavaş";
            msg.load = "Yüklü";
            msg.state = parseInt('011101',2);

        } else if (msg.CurrentTotal >= 649 && msg.CurrentTotal < 982) {
            msg.maneuver = "Vira Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100011',2);
        } else if (msg.CurrentTotal >= 982) {
            msg.maneuver = "Vira Trolley Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100111',2);

        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
        
    if(msg.devName.indexOf("STS") !== -1){
        
        if (msg.CurrentTotal < 2) {
            msg.maneuver = "Enerjisiz";
	        msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);

        } else if (msg.CurrentTotal >= 2 && msg.CurrentTotal < 100) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);

            
        } else if (msg.CurrentTotal >= 100 && msg.CurrentTotal < 330) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
        
    if(msg.devName.indexOf("MHC") !== -1 && msg.devName !== "A-MHC03"){
        
        if (msg.CurrentTotal < 5) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);
    
        } else if (msg.CurrentTotal >= 5 && msg.CurrentTotal < 145) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);
        } else if (msg.CurrentTotal >= 145 && msg.CurrentTotal < 155) {
            msg.maneuver = "Mayna Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010000',2);
        } else if (msg.CurrentTotal >= 155 && msg.CurrentTotal < 190) {
            msg.maneuver = "Dönüş Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 190 && msg.CurrentTotal < 210) {
            msg.maneuver = "Bom Yat Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 210 && msg.CurrentTotal < 290) {
            msg.maneuver = "Vira Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('001100',2);
        } else if (msg.CurrentTotal >= 290 && msg.CurrentTotal < 340) {
            msg.maneuver = "Bom Dik Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 340 && msg.CurrentTotal < 400) {
            msg.maneuver = "Dönüş Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 400 && msg.CurrentTotal < 500) {
            msg.maneuver = "Bom Yat Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 500 && msg.CurrentTotal < 618) {
            msg.maneuver = "Yürüyüş Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 618 && msg.CurrentTotal < 630) {
            msg.maneuver = "Mayna Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('010011',2);
        } else if (msg.CurrentTotal >= 630 && msg.CurrentTotal < 850) {
            msg.maneuver = "Yürüyüş Boş Hızlı";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 850 && msg.CurrentTotal < 1200) {
            msg.maneuver = "Bom Dik Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 1200) {
            msg.maneuver = "Vira Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100011',2);
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
    if(msg.devName == "A-MHC03"){
        
        if (msg.CurrentTotal < 5) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);
    
        } else if (msg.CurrentTotal >= 5 && msg.CurrentTotal < 145) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }

    
    return {msg: msg, metadata: metadata};
}



else if(msg["Active Enegy-CL"]){    //PM2100
    msg["Active Enegy-CL"] = msg["Active Enegy-CL"]/1000;
    msg["Active Enegy-CH"] = msg["Active Enegy-CH"]/1000;
	
	msg["Active Energy-DL"] = msg["Active Energy-DL"]/1000;
    msg["Active Energy-DH"] = msg["Active Energy-DH"]/1000;

//    let n = Math.floor(Math.log10(msg["Cos Phi"])) + 1;
//    let y =  msg["Cos Phi"] / Math.pow(10, n);
//    msg["Cos Phi"] = msg.y;

    //Calculation of Cospi
    var temp = msg["Cos Phi"];
    var n = 0;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        n++;
    }
    msg["Cos Phi"] = msg["Cos Phi"] / Math.pow(10, n);
    msg["Cos Phi"] = msg["Cos Phi"];
   
    msg["Current L1"] = msg["Current L1"]/1000;
    msg["Current L2"] = msg["Current L2"]/1000;
    msg["Current L3"] = msg["Current L3"]/1000;
    msg.Frequency = msg.Frequency/100;
    //msg["Reactive EnergyIn"] = msg["Reactive EnergyIn"]/1000;
    // msg["Reactive EnergyKa"] = msg["Reactive EnergyKa"]/1000;
    msg["Reactive Power"] = msg["Reactive Power"]/1000;
    msg["Voltage L1-N"] = msg["Voltage L1-N"]/10;
    msg["Voltage L2-N"] = msg["Voltage L2-N"]/10;
    msg["Voltage L3-N"] = msg["Voltage L3-N"]/10;
    msg.Active = true;

    msg.CurrentTotal = msg["Current L1"] + msg["Current L2"]  + msg["Current L3"];
    msg["Active Energy"] = msg["Active Enegy-CL"];
    
    
    if(msg.devName.indexOf("RTG") !== -1){
        
        if (msg.CurrentTotal < 100) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);
        } else if (msg.CurrentTotal >= 100 && msg.CurrentTotal < 150) {
            msg.maneuver = "Vira Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('000100',2);
        } else if (msg.CurrentTotal >= 150 && msg.CurrentTotal < 215) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);
        } else if (msg.CurrentTotal >= 215 && msg.CurrentTotal < 222.5) {
            msg.maneuver = "Vira Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('001100',2);
        } else if (msg.CurrentTotal >= 222.5 && msg.CurrentTotal < 250) {
            msg.maneuver = "Mayna Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010000',2);
        } else if (msg.CurrentTotal >= 250 && msg.CurrentTotal < 261) {
            msg.maneuver = "Mayna Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('010011',2);
        } else if (msg.CurrentTotal >= 261 && msg.CurrentTotal < 262) {
            msg.maneuver = "Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010100',2);

        } else if (msg.CurrentTotal >= 262 && msg.CurrentTotal < 270) {
            msg.maneuver = "Mayna Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('011000',2);

        } else if (msg.CurrentTotal >= 270 && msg.CurrentTotal < 400) {
            msg.maneuver = "Mayna Trolley Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('011011',2);

        } else if (msg.CurrentTotal >= 400 && msg.CurrentTotal < 435) {
            msg.maneuver = "Gantry Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('011111',2);
        } else if (msg.CurrentTotal >= 435 && msg.CurrentTotal < 649) {
            msg.maneuver = "Gantry Yavaş";
            msg.load = "Yüklü";
            msg.state = parseInt('011101',2);
        } else if (msg.CurrentTotal >= 649 && msg.CurrentTotal < 982) {
            msg.maneuver = "Vira Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100011',2);
        } else if (msg.CurrentTotal >= 982) {
            msg.maneuver = "Vira Trolley Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100111',2);
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
        }
    }
    
        
    if(msg.devName.indexOf("STS") !== -1){
        
        if (msg.CurrentTotal < 10) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);
        } else if (msg.CurrentTotal >= 10 && msg.CurrentTotal < 330) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);

        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
    if(msg.devName.indexOf("MHC") !== -1 && msg.devName !== "A-MHC03"){
        if (msg.CurrentTotal < 10) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);

        } else if (msg.CurrentTotal >= 10 && msg.CurrentTotal < 145) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);
        } else if (msg.CurrentTotal >= 145 && msg.CurrentTotal < 155) {
            msg.maneuver = "Mayna Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010000',2);
        } else if (msg.CurrentTotal >= 155 && msg.CurrentTotal < 190) {
            msg.maneuver = "Dönüş Boş Yavaş";
        } else if (msg.CurrentTotal >= 190 && msg.CurrentTotal < 210) {
            msg.maneuver = "Bom Yat Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 210 && msg.CurrentTotal < 290) {
            msg.maneuver = "Vira Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('001100',2);
        } else if (msg.CurrentTotal >= 290 && msg.CurrentTotal < 340) {
            msg.maneuver = "Bom Dik Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 340 && msg.CurrentTotal < 400) {
            msg.maneuver = "Dönüş Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 400 && msg.CurrentTotal < 500) {
            msg.maneuver = "Bom Yat Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 500 && msg.CurrentTotal < 618) {
            msg.maneuver = "Yürüyüş Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 618 && msg.CurrentTotal < 630) {
            msg.maneuver = "Mayna Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('010011',2);
        } else if (msg.CurrentTotal >= 630 && msg.CurrentTotal < 850) {
            msg.maneuver = "Yürüyüş Boş Hızlı";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 850 && msg.CurrentTotal < 1200) {
            msg.maneuver = "Bom Dik Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 1200) {
            msg.maneuver = "Vira Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100011',2);
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
    if(msg.devName == "A-MHC03"){

        if (msg.CurrentTotal < 10) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);

        } else if (msg.CurrentTotal >= 10 && msg.CurrentTotal < 100) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);

        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }

    
    
    return {msg: msg, metadata: metadata};
}



else if(msg["Active Energy-Import"]){  //PM2100
    //msg["Active Enegy-Im"] = msg["Active Enegy-Im"]/1000;
    //msg["Active Enegy-Ex"] = msg["Active Enegy-Ex"]/1000;
    //msg["Active Power"] = msg["Active Power"]/1000;

//    let n = Math.floor(Math.log10(msg["Cos Phi"])) + 1;
//    let y =  msg["Cos Phi"] / Math.pow(10, n);
//    msg["Cos Phi"] = msg.y;

    //Calculation of Cospi
//    var temp = msg["Cos Phi"];
//    var n = 0;
//    while (temp > 0) {
//        temp = Math.floor(temp / 10);
//        n++;
//    }
//    msg.a = 1;
//    msg["Cos Phi"] = msg["Cos Phi"];
   
    msg["Current L1"] = msg["Current L1"];
    msg["Current L2"] = msg["Current L2"];
    msg["Current L3"] = msg["Current L3"];
    msg.Frequency;
    //msg["Reactive EnergyIn"] = msg["Reactive EnergyIn"]/1000;
    // msg["Reactive EnergyKa"] = msg["Reactive EnergyKa"]/1000;
    msg["Reactive Power"] = msg["Reactive Power"];
    msg["Voltage L1-N"] = msg["Voltage L1-N"]/1000;
    msg["Voltage L2-N"] = msg["Voltage L2-N"]/1000;
    msg["Voltage L3-N"] = msg["Voltage L3-N"]/1000;
    msg.Active = true;

    msg.CurrentTotal = msg["Current L1"] + msg["Current L2"]  + msg["Current L3"];
    
    msg["Active Energy"] = msg["Active Energy-Import"];

    
    if(msg.devName.indexOf("RTG") !== -1){
        
        if (msg.CurrentTotal < 5) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);
        
        } else if (msg.CurrentTotal >= 5 && msg.CurrentTotal < 100) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);
        
        } else if (msg.CurrentTotal >= 100 && msg.CurrentTotal < 150) {
            msg.maneuver = "Vira Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('000100',2);
        } else if (msg.CurrentTotal >= 150 && msg.CurrentTotal < 215) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);
        } else if (msg.CurrentTotal >= 215 && msg.CurrentTotal < 222.5) {
            msg.maneuver = "Vira Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('001100',2);
        } else if (msg.CurrentTotal >= 222.5 && msg.CurrentTotal < 250) {
            msg.maneuver = "Mayna Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010000',2);
        } else if (msg.CurrentTotal >= 250 && msg.CurrentTotal < 261) {
            msg.maneuver = "Mayna Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('010011',2);
        } else if (msg.CurrentTotal >= 261 && msg.CurrentTotal < 262) {
            msg.maneuver = "Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010100',2);

        } else if (msg.CurrentTotal >= 262 && msg.CurrentTotal < 270) {
            msg.maneuver = "Mayna Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('011000',2);

        } else if (msg.CurrentTotal >= 270 && msg.CurrentTotal < 400) {
            msg.maneuver = "Mayna Trolley Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('011011',2);

        } else if (msg.CurrentTotal >= 400 && msg.CurrentTotal < 435) {
            msg.maneuver = "Gantry Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('011111',2);

        } else if (msg.CurrentTotal >= 435 && msg.CurrentTotal < 649) {
            msg.maneuver = "Gantry Yavaş";
            msg.load = "Yüklü";
            msg.state = parseInt('011101',2);
        } else if (msg.CurrentTotal >= 649 && msg.CurrentTotal < 982) {
            msg.maneuver = "Vira Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100011',2);
        } else if (msg.CurrentTotal >= 982) {
            msg.maneuver = "Vira Trolley Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100111',2);
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
        
    if(msg.devName.indexOf("STS") !== -1){
        
        if (msg.CurrentTotal < 5) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);
        } else if (msg.CurrentTotal >= 5 && msg.CurrentTotal < 330) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
    if(msg.devName.indexOf("MHC") !== -1 && msg.devName !== "A-MHC03"){
        if (msg.CurrentTotal < 145) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);
        } else if (msg.CurrentTotal >= 145 && msg.CurrentTotal < 155) {
            msg.maneuver = "Mayna Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010000',2);
        } else if (msg.CurrentTotal >= 155 && msg.CurrentTotal < 190) {
            msg.maneuver = "Dönüş Boş Yavaş";
        } else if (msg.CurrentTotal >= 190 && msg.CurrentTotal < 210) {
            msg.maneuver = "Bom Yat Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 210 && msg.CurrentTotal < 290) {
            msg.maneuver = "Vira Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('001100',2);
        } else if (msg.CurrentTotal >= 290 && msg.CurrentTotal < 340) {
            msg.maneuver = "Bom Dik Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 340 && msg.CurrentTotal < 400) {
            msg.maneuver = "Dönüş Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 400 && msg.CurrentTotal < 500) {
            msg.maneuver = "Bom Yat Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 500 && msg.CurrentTotal < 618) {
            msg.maneuver = "Yürüyüş Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 618 && msg.CurrentTotal < 630) {
            msg.maneuver = "Mayna Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('010011',2);
        } else if (msg.CurrentTotal >= 630 && msg.CurrentTotal < 850) {
            msg.maneuver = "Yürüyüş Boş Hızlı";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 850 && msg.CurrentTotal < 1200) {
            msg.maneuver = "Bom Dik Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 1200) {
            msg.maneuver = "Vira Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100011',2);
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
    if(msg.devName == "A-MHC03"){
        
        if (msg.CurrentTotal < 100) {
            msg.maneuver = "Beklemede";
            msg.load = "Yüksüz";
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }

    
    
    return {msg: msg, metadata: metadata};
}


else if(msg["Active Energy"]){      //UMG508
    msg["Active Energy"] = msg["Active Energy"]/1000;


//    let n = Math.floor(Math.log10(msg["Cos Phi"])) + 1;
//    let y =  msg["Cos Phi"] / Math.pow(10, n);
//    msg["Cos Phi"] = msg.y;

    //Calculation of Cospi
    var temp = msg["Cos Phi"];
    var n = 0;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        n++;
    }
    msg["Cos Phi"] = msg["Cos Phi"] / Math.pow(10, n);
    msg["Cos Phi"] = msg["Cos Phi"];
   
    msg["Current L1"] = msg["Current L1"]/1000;
    msg["Current L2"] = msg["Current L2"]/1000;
    msg["Current L3"] = msg["Current L3"]/1000;
    msg.Frequency = msg.Frequency/100;
    //msg["Reactive EnergyIn"] = msg["Reactive EnergyIn"]/1000;
    // msg["Reactive EnergyKa"] = msg["Reactive EnergyKa"]/1000;
    msg["Reactive Power"] = msg["Reactive Power"]/1000;
    msg["Voltage L1-N"] = msg["Voltage L1-N"]/10;
    msg["Voltage L2-N"] = msg["Voltage L2-N"]/10;
    msg["Voltage L3-N"] = msg["Voltage L3-N"]/10;
    msg.Active = true;

    msg.CurrentTotal = msg["Current L1"] + msg["Current L2"]  + msg["Current L3"];

    
    if(msg.devName.indexOf("RTG") !== -1){
        
        if (msg.CurrentTotal < 10) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);
        } else if (msg.CurrentTotal >= 100 && msg.CurrentTotal < 150) {
            msg.maneuver = "Vira Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('000100',2);
        } else if (msg.CurrentTotal >= 150 && msg.CurrentTotal < 215) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);
        } else if (msg.CurrentTotal >= 215 && msg.CurrentTotal < 222.5) {
            msg.maneuver = "Vira Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('001100',2);
        } else if (msg.CurrentTotal >= 222.5 && msg.CurrentTotal < 250) {
            msg.maneuver = "Mayna Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010000',2);
        } else if (msg.CurrentTotal >= 250 && msg.CurrentTotal < 261) {
            msg.maneuver = "Mayna Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('010011',2);
        } else if (msg.CurrentTotal >= 261 && msg.CurrentTotal < 262) {
            msg.maneuver = "Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010100',2);

        } else if (msg.CurrentTotal >= 262 && msg.CurrentTotal < 270) {
            msg.maneuver = "Mayna Trolley Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('011000',2);

        } else if (msg.CurrentTotal >= 270 && msg.CurrentTotal < 400) {
            msg.maneuver = "Mayna Trolley Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('011011',2);

        } else if (msg.CurrentTotal >= 400 && msg.CurrentTotal < 435) {
            msg.maneuver = "Gantry Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('011111',2);
        } else if (msg.CurrentTotal >= 435 && msg.CurrentTotal < 649) {
            msg.maneuver = "Gantry Yavaş";
            msg.load = "Yüklü";
            msg.state = parseInt('011101',2);
        } else if (msg.CurrentTotal >= 649 && msg.CurrentTotal < 982) {
            msg.maneuver = "Vira Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100011',2);
        } else if (msg.CurrentTotal >= 982) {
            msg.maneuver = "Vira Trolley Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100111',2);
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
        
    if(msg.devName.indexOf("STS") !== -1){
        
        if (msg.CurrentTotal < 5) {
            msg.maneuver = "Enerjisiz";
            msg.load = "Yüksüz";
            msg.state = parseInt('000000',2);
        } else if (msg.CurrentTotal >= 5 && msg.CurrentTotal < 330) {
            msg.maneuver = "Beklemede";
            msg.load = "Yüksüz";
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
    if(msg.devName.indexOf("MHC") !== -1 && msg.devName !== "A-MHC03"){
        if (msg.CurrentTotal < 145) {
            msg.maneuver = "Boşta Bekleme";
            msg.load = "Yüksüz";
            msg.state = parseInt('001000',2);
        } else if (msg.CurrentTotal >= 145 && msg.CurrentTotal < 155) {
            msg.maneuver = "Mayna Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('010000',2);
        } else if (msg.CurrentTotal >= 155 && msg.CurrentTotal < 190) {
            msg.maneuver = "Dönüş Boş Yavaş";
        } else if (msg.CurrentTotal >= 190 && msg.CurrentTotal < 210) {
            msg.maneuver = "Bom Yat Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 210 && msg.CurrentTotal < 290) {
            msg.maneuver = "Vira Boş Yavaş";
            msg.load = "Yüksüz";
            msg.state = parseInt('001100',2);
        } else if (msg.CurrentTotal >= 290 && msg.CurrentTotal < 340) {
            msg.maneuver = "Bom Dik Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 340 && msg.CurrentTotal < 400) {
            msg.maneuver = "Dönüş Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 400 && msg.CurrentTotal < 500) {
            msg.maneuver = "Bom Yat Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 500 && msg.CurrentTotal < 618) {
            msg.maneuver = "Yürüyüş Boş Yavaş";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 618 && msg.CurrentTotal < 630) {
            msg.maneuver = "Mayna Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('010011',2);
        } else if (msg.CurrentTotal >= 630 && msg.CurrentTotal < 850) {
            msg.maneuver = "Yürüyüş Boş Hızlı";
            msg.load = "Yüksüz";
        } else if (msg.CurrentTotal >= 850 && msg.CurrentTotal < 1200) {
            msg.maneuver = "Bom Dik Dolu Hızlı";
            msg.load = "Yüklü";
        } else if (msg.CurrentTotal >= 1200) {
            msg.maneuver = "Vira Dolu Hızlı";
            msg.load = "Yüklü";
            msg.state = parseInt('100011',2);
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }
    
    if(msg.devName == "A-MHC03"){
        
        if (msg.CurrentTotal < 100) {
            msg.maneuver = "Beklemede";
            msg.load = "Yüksüz";
        } else {
            msg.maneuver = "Contact system administrator.";
            msg.load = "No Data";
            msg.state = parseInt('111111',2);
        }
    }

    
    
    return {msg: msg, metadata: metadata};
}
