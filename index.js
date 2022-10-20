const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulator, batteries)=>{
    return accumulator+ batteries;
},0);