// code your solution here
function superbowlWin(records) {
    const winningRecord = records.find(record => record.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }
  const superBowlRecords = [
    { year: 2015, result: "W" },
    { year: 2014, result: "N/A" },
    { year: 2013, result: "L" },
  ];
  
  const winningYear = superbowlWin(superBowlRecords);
  console.log(winningYear); // Output: 2013
  
  
  

