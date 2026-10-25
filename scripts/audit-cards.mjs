// Validate all 78 expected image files in the actual source used by TR ROOM.
// Run: npm run audit:cards (requires network access to raw.githubusercontent.com).
const base='https://raw.githubusercontent.com/seven102161/elaine-tarot-cards/main/cards/';
const codes=Array.from({length:22},(_,i)=>'ar'+String(i).padStart(2,'0'));
for(const suit of ['wa','cu','sw','pe']) {
  codes.push(...['ac',...Array.from({length:9},(_,i)=>String(i+2).padStart(2,'0')),'pa','kn','qu','ki'].map(rank=>suit+rank));
}
if(codes.length!==78||new Set(codes).size!==78)throw Error('Expected 78 distinct card codes');
let failed=[];
for(let i=0;i<codes.length;i+=8) {
  await Promise.all(codes.slice(i,i+8).map(async code=>{
    try {
      const response=await fetch(base+code+'.jpg',{method:'GET'});
      if(!response.ok||!response.headers.get('content-type')?.includes('image/'))failed.push(code+': HTTP '+response.status);
      else await response.arrayBuffer();
    }catch(err){failed.push(code+': '+err.message)}
  }));
}
if(failed.length){console.error('FAILED '+failed.length+'/78 images:\n'+failed.join('\n'));process.exitCode=1;}
else console.log('PASS: all 78 URLs return image content.');
