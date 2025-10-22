--[[
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
]]

local function array_plus_array(arr1, arr2)
	local sum = 0
	for i = 1, #arr1 do
		sum = sum + arr1[i] + arr2[i]
	end
	return sum
end

return array_plus_array
