-- Variable to check if native has already been run
local Ran = false

-- Wait until client is loaded into the map
AddEventHandler("playerSpawned", function ()
	-- If not already ran
	if not Ran then
		-- Trigger JavaScript function on the loading screen
		SendNUIMessage({ type = "runEffect" })
		
		-- Wait for a short period of time to allow the effect to play
		Citizen.Wait(5000) -- adjust the delay as needed
		
		-- Close loading screen resource
		ShutdownLoadingScreenNui()
		
		-- Set as ran
		Ran = true
	end
end)
