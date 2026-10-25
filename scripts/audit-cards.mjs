// Audit the published Rider–Waite–Smith artwork manifest before a release.
// Run: npm run audit:cards
const source='https://petaloverflow.github.io/tarot-api/cards.json';
const majors=['The Fool','The Magician','The High Priestess','The Empress','The Emperor','The Hierophant','The Lovers','The Chariot','Strength','The Hermit','Wheel of Fortune','Justice','The Hanged Man','Death','Temperance','The Devil','The Tower','The Star','The Moon','The Sun','Judgement','The World'];
const suits=['Wands','Cups','Swords','Pentacles'];
const ranks=['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Page','Knight','Queen','King'];
const expected=[...majors,...suits.flatMap(s=>ranks.map(r=>r+' of '+s))];
const res=await fetch(source);
if(!res.ok)throw Error('Cannot read canonical card manifest: HTTP '+res.status);
const cards=await res.json();
if(!Array.isArray(cards)||cards.length!==78)throw Error('Expected 78 cards, received '+cards.length);
const byName=new Map(cards.map(card=>[card.name,card.image]));
const errors=[];
for(const name of expected){
 const image=byName.get(name);
 if(!image)errors.push('Missing: '+name);
 else if(!/^https:\/\/.+\.(jpg|jpeg|png)$/i.test(image))errors.push('Invalid image URL for '+name+': '+image);
}
if(byName.size!==78)errors.push('Duplicate names in manifest');
const urls=cards.map(c=>c.image);
if(new Set(urls).size!==78)errors.push('Duplicate image URL in manifest');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}else console.log('PASS: 78 unique names and 78 unique image URLs agree with canonical manifest.');
