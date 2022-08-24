import fs from 'fs';
import { a } from './input/a.mjs'
import { b } from './input/b.mjs'
import * as jsondiffpatch from 'jsondiffpatch';

const instance = jsondiffpatch.create({
    arrays: {
        detectMove: false,
    },
});

const diff = instance.diff(a, b);
fs.writeFileSync("output/diff_output.json", JSON.stringify(diff, null, 2))
console.log('Diff output successfully generated.');