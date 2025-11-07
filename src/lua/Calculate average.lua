-- Write a function which calculates the average of the numbers in a given array.

-- Note: Empty arrays should return 0.
local function find_average(numbers)
	local total = 0
	local length = #numbers
	for i = 1, length do
		total = total + numbers[i]
	end
	return length > 0 and (total / length) or 0
end

return find_average
