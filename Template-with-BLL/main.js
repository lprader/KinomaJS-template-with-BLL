//@program

application.behavior = Behavior({
	onLaunch: function(application) {
		// Configure the BLLs used by this application
		Pins.configure({            sensorName: {                require: "bll",
                // Specify the pins required by this BLL                pins: {                    sensor: { pin: 61 },               	}            }		}, success => {
			if (success) {
		    	// After the BLLs have been configured, build the UI and issue single/repeated commands to the BLL
		    	application.skin = new Skin({fill: "black"});
			} else {
				trace("Failed to configure pins.\n");
			}
		});

	}
})
