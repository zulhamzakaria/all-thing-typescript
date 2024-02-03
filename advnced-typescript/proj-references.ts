/*

Project to be referenced
------------------------
tsconfig.json
    1. "composite": true


Project thats referencing
-------------------------
tsconfig.json
    1. "references": [{"path":"../example-lib"}] path to project (?)
    2. import {hello} from '../../example-lib'
package.jon
    1. "build": "tsc --build ."
    2. npm run build

*/
