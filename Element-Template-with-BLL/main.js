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

/* ------------------------------------------------------------------------------ */
/*     You can read more about programming hardware with Kinoma Element here:     */
/*           http://kinoma.com/develop/documentation/element-pins-module/         */
/* ------------------------------------------------------------------------------ */
import Pins from 'pins';var main = {	onLaunch(){
		// Configure the BLLs used by this application
		Pins.configure({
            sensorName: {
                require: "bll",
                // Specify the pins required by this BLL				pins: { 					sensor: { pin: 1 }				}			}		}, success => {			if (success) {
		    	// After the BLLs have been configured, issue single/repeated commands to the BLL			} else {				trace("Failed to configure pins.\n");			}		});	},};export default main;