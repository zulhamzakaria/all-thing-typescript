// template of string with prefix of sample
let templateLiteral : `sample: ${string}`

templateLiteral = 'sample: hello'
templateLiteral = 'sample: samsam'

type CSSVal = |`${number}px` |string

type Size = 'small' | 'medium' | 'large'
type Color = 'primary' | 'secondary'
type Style = `${Size}-${Color}`
