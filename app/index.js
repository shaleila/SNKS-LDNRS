let document = require("document");
import { HeartRateSensor } from "heart-rate";

var options = Array("Delays!", "Express!", "Rain!", "Crowd!", 
                    "Concert!","Clear!", "Clear!", "Clear!");

// Fetch UI elements we will need to change
let numLabel = document.getElementById("num");
let hrLabel = document.getElementById("hrn");
let situationLabel = document.getElementById("situation");

// Initialize the UI with some values
numLabel.text = "?";
hrLabel.text = "--";
situationLabel.text = "...";

// Create a new instance of the HeartRateSensor object
var hrm = new HeartRateSensor();

// Determine dice roll number

// Declare an event handler that will be called every time a new HR value is received.
hrm.onreading = function() {
  // Peek the current sensor values
  console.log("Current heart rate: " + hrm.heartRate);
  hrLabel.text = "HR: " + hrm.heartRate;
  
  if (hrm.heartRate < 60) {
    numLabel.text = "Roll 1";
    } 
  else if (hrm.heartRate > 60 && hrm.heartRate <= 67) {
    numLabel.text = "Roll 2";
    } 
  else if (hrm.heartRate > 67 && hrm.heartRate <= 73) {
    numLabel.text = "Roll 3";
    } 
  else if (hrm.heartRate > 73 && hrm.heartRate <= 79) {
    numLabel.text = "Roll 4";
    } 
  else if (hrm.heartRate > 79 && hrm.heartRate <= 89) {
    numLabel.text = "Roll 5";
    } 
  else {
    numLabel.text = "Roll 6";
    }
}

// Choose random situation
var choice = options[Math.floor(Math.random()*options.length)];;
situationLabel.text = choice

// Begin monitoring the sensor
hrm.start();