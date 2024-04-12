/* 
Make your strings more nerdy:
Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
 */

export function nerdify(txt: string): string {
  txt = txt.replace(/a/gi, '4')
  txt = txt.replace(/A/gi, '4')
  txt = txt.replace(/e/gi, '3')
  txt = txt.replace(/E/gi, '3')
  txt = txt.replace(/l/g, '1')

  return txt
}

// Better:

let letter: { [key: string]: string } = {
  a: '4',
  e: '3',
  l: '1',
  A: '4',
  E: '3',
}
export const nerdify_TWO = (txt: string): string =>
  txt.replace(/[aelAE]/g, (l) => letter[l])
