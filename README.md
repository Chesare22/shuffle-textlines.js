# Shuffle text lines

Really small project. It shuffles the lines of a file and saves it in another file.

## Syntax
```
node shuffle-textlines.js [<input> [<output>]]
```
The default input file is _input.txt_, and the default output is _output.txt_

## Example
### Command
```
node shuffle-textlines.js albums.txt
```

### Input file: _albums.txt_
```
Modern Life is Rubbish — Blur
Brothers — The Black Keys
Songs From the Big Chair — Tears for Fears
Permanent Waves — Rush
Entre el Cielo y el Suelo — Mecano
Fragile — Yes
Selling England by the Pound — Genesis
A Farewell to Kings — Rush
Ammonia Avenue — The Alan Parsons Project
Atom Heart Mother — Pink Floyd
A Hard Day's Night — The Beatles
Turn on the Bright Lights — Interpol
Mirage — Camel
Business as Usual — Men At Work
Crime of the Century — Supertramp
```

### Output file: _output.txt_
```
A Farewell to Kings — Rush
Mirage — Camel
Business as Usual — Men At Work
Entre el Cielo y el Suelo — Mecano
Atom Heart Mother — Pink Floyd
Fragile — Yes
Selling England by the Pound — Genesis
Brothers — The Black Keys
A Hard Day's Night — The Beatles
Turn on the Bright Lights — Interpol
Permanent Waves — Rush
Songs From the Big Chair — Tears for Fears
Ammonia Avenue — The Alan Parsons Project
Crime of the Century — Supertramp
Modern Life is Rubbish — Blur
```