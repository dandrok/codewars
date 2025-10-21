function countPositivesSumNegatives(arr)
	if not arr or #arr == 0 then
		return {}
	end

	local positiveCount = 0
	local negativeSum = 0

	for i = 1, #arr do
		if arr[i] > 0 then
			positiveCount = positiveCount + 1
		elseif arr[i] < 0 then
			negativeSum = negativeSum + arr[i]
		end
	end

	return { positiveCount, negativeSum }
end

return countPositivesSumNegatives
