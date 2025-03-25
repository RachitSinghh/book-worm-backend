import cron from "cron"
import https from "https"; 
import "dotenv/config";


const job = new cron.CronJob("*/14 * * * *", function() {
  https
    .get(process.env.API_URL, (res) =>{
      if(res.statusCode === 200) console.log("GET request sent successfully"); 
      else console.log("GET request failed", res.statusCode);
    })
    .on("error", (e) => console.log("Error while sending request", e));
})

export default job; 

// CRON jobs are scheduled to task that run periodically at fixed intervals 
// we want to sent 1 GET request for every 14 minutes 

// how to define a "Schedule"?
// You  define a schedule using a cron expression, which consists of fileds representin:  

// ! MINUTE, HOUR, DAY OF THE MONTH, MONTH, DAY OF THE WEEK

//? EXAMPLES && EXPLANATINO: 
// * 14 * * * * - EVERY 14 MINUTS
// * 0 0 * * 0 = AT MIDNIGHT ON EVERY SUNDAY 
// * 30 3 15 * * - aT 3:30 AM ON THE 15TH OF EVERY MONTH
// * 0 0 1 1 * = AT MIDNIGHT, ON JANURAY 1S
// * 0 * * * * - EVERY HOUR