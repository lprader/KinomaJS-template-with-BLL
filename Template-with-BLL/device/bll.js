//@module
/*
  Copyright 2011-2016 Marvell Semiconductor, Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

/* ------------------------------------------------------------------------------------------ */
/*    This is the BLL that will be used when the application is run on an actual device       */
/*                      You can read more about creating BLLs here:                           */
/*       http://kinoma.com/develop/documentation/kinomajs-tutorials/building-a-bll/           */
/* ------------------------------------------------------------------------------------------ */
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
