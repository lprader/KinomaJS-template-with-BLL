/* ------------------------------------------------------------------------------ */
/*     You can read more about programming hardware with Kinoma Element here:     */
/*                 http://kinoma.com/develop/documentation/element-bll/           */
/* ------------------------------------------------------------------------------ */

exports.pins = {
	// Define the types of pins used by this BLL
	sensor: { type: "" } // type should be "Digital", "Analog", "PWM", etc.
}

exports.configure = function() {
	// Initialize each of the BLL objects by calling their init function
	this.sensor.init();
}

exports.close = function() {
	// Close the objects used to communicate with the pins
	this.sensor.close();
}
