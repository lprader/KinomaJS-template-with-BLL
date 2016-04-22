//@module

/* ------------------------------------------------------------------------------------------------------------------------ */
/*                     This is the BLL that will be used when the application is run on an actual device                    */
/*                                    You can read more about programming hardware here:                                    */
/*  http://kinoma.com/develop/documentation/kinomajs-tutorials/pins-module/#using-the-pins-module-to-interact-with-sensors  */
/* ------------------------------------------------------------------------------------------------------------------------ */


exports.pins = {
	// Define the types of pins used by this BLL
	sensor: {type: ""} // type should be "Digital", "Analog", "PWM", etc.
}

exports.configure = function() {
	// Initialize each of the BLL objects by calling their init function
	this.sensor.init();
}

exports.close = function() {
	// Close the objects used to communicate with the pins
	this.sensor.close();
}
