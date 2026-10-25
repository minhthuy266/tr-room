import {readFileSync} from 'node:fs';
const codes=[...Array.from({length:22},(_,i)=>'ar'+String(i).padStart(2,'0')),...['wa','cu','sw','pe'].flatMap(s=>['ac',...Array.from({length:9},(_,i)=>String(i+2).padStart(2,'0')),'pa','kn','qu','ki'].map(n=>s+n))];
if(codes.length!==78||new Set(codes).size!==78)throw Error('Expected 78 unique card codes');
for(const code of codes){const bytes=readFileSync('public/cards/'+code+'.jpg');if(bytes.length<2000||bytes[0]!==0xff||bytes[1]!==0xd8)throw Error('Missing or invalid JPEG '+code)}
console.log('PASS: all 78 local card JPG files exist and contain JPEG data.');
