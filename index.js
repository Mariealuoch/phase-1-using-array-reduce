const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteries = [
    { type: 'AA', count: 10 },
    { type: 'AAA', count: 6 },
    { type: '9V', count: 15 }
  ];
  
  const totalBatteries = batteries.reduce(function(total, battery) {
    return total + battery.count;
  }, 0);
  
  console.log(totalBatteries); 
  