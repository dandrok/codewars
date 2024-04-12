/*
Complete the method so that it does the following:

    Removes any duplicate query string parameters from the url (the first occurence should be kept)
    Removes any query string parameters specified within the 2nd argument (optional array)

Examples:

stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'
 */
function stripUrlParams(url, paramsToStrip = []) {
  const [baseUrl, queryString] = url.split('?')
  if (!queryString) {
    return url
  }

  const params = new URLSearchParams(queryString)
  const uniqueParams = new Map()

  for (const [param, value] of params.entries()) {
    if (!uniqueParams.has(param)) {
      uniqueParams.set(param, value)
    }
  }

  paramsToStrip.forEach((param) => {
    uniqueParams.delete(param)
  })

  const updatedQueryString = Array.from(uniqueParams.entries())
    .map(([param, value]) => `${param}=${value}`)
    .join('&')

  return updatedQueryString ? `${baseUrl}?${updatedQueryString}` : baseUrl
}
