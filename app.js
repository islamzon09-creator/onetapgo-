const defaults={
  language:'ar',names:'ليان & آدم',since:'2024-02-14',unlock:'2027-02-14T00:00:00+03:00',
  songTitle:'كل ما أسمعها… أرجع لك',songSubtitle:'الأغنية التي تحمل صوت حكايتنا',audio:'assets/our-song.mp3',
  moments:[
    {date:'14.02.2024',title:'أول لقاء',text:'لحظة صغيرة غيّرت كل شيء بعدها.'},
    {date:'03.06.2024',title:'أول مغامرة لنا',text:'هناك عرفنا أن الطريق أجمل عندما نمشيه معًا.'},
    {date:'01.01.2025',title:'وعدنا',text:'اخترنا بعضنا، اليوم وكل يوم.'},
    {date:'TODAY',title:'وما زالت الحكاية مستمرة',text:'هذا ليس آخر فصل… بل أجمل بداية.'}
  ],
  photos:[
    {src:'assets/seaside.jpg',caption:'غروبنا الأول معًا'},
    {src:'assets/cafe.jpg',caption:'الضحكة التي لا أنساها'},
    {src:'assets/courtyard.jpg',caption:'ليلة تمنّيت ألا تنتهي'}
  ]
};
const i18n={
 ar:{since:'منذ 14 فبراير 2024',story:'حكايتنا',intro:'ليست مجرد صور… هذه تفاصيل العمر الذي بدأ يوم التقينا.',open:'افتح ذكرياتنا',letter:'إذا مرّ يوم ونسيت كم أنت غالٍ عليّ، ارجع إلى هنا. كل صورة تحفظ ضحكة، وكل لحظة تروي فصلًا من حكايتنا. وما زالت أجمل فصولنا لم تُكتب بعد.',journeyKicker:'رحلتنا',journeyTitle:'من أول لقاء… إلى اليوم',memoriesKicker:'لحظاتنا',memoriesTitle:'ذكريات أحبها معك',ourSong:'أغنيتنا',futureKicker:'رسالة للمستقبل',futureTitle:'شيء جميل ينتظرك',futureText:'كتبت لك رسالة ستفتح في موعدها فقط.',days:'يوم',hours:'ساعة',minutes:'دقيقة',footer:'كل ذكرياتنا تعيش هنا'},
 he:{since:'מאז 14 בפברואר 2024',story:'הסיפור שלנו',intro:'אלה לא רק תמונות… אלה הרגעים שמהם נבנה הסיפור שלנו.',open:'לפתוח את הזיכרונות',letter:'אם יום אחד תשכח כמה אתה יקר לי, תחזור לכאן. בכל תמונה נשמר חיוך, וכל רגע מספר פרק בסיפור שלנו. והפרקים היפים ביותר עדיין מחכים לנו.',journeyKicker:'המסע שלנו',journeyTitle:'מהפגישה הראשונה… עד היום',memoriesKicker:'הרגעים שלנו',memoriesTitle:'זיכרונות שאני אוהב איתך',ourSong:'השיר שלנו',futureKicker:'מכתב לעתיד',futureTitle:'משהו יפה מחכה לך',futureText:'כתבתי לך הודעה שתיפתח רק ברגע הנכון.',days:'ימים',hours:'שעות',minutes:'דקות',footer:'כל הזיכרונות שלנו חיים כאן'}
};
let data={...defaults,...JSON.parse(localStorage.getItem('onetapgo-memory')||'{}')};
const memorySlug=new URLSearchParams(location.search).get('memory');
const fallback=['linear-gradient(145deg,#e9f7ff,#fff1f5)','linear-gradient(145deg,#f7fbff,#ffeef3)','linear-gradient(145deg,#eefaff,#fff7fa)','linear-gradient(145deg,#f1f9ff,#ffe9ef)','linear-gradient(145deg,#edf8ff,#fff3f6)'];
const hasOwn=(obj,key)=>Object.prototype.hasOwnProperty.call(obj,key);
function formatDate(value){if(!value)return'';const d=new Date(value);if(Number.isNaN(d.getTime()))return value;return d.toLocaleDateString(data.language==='he'?'he-IL':'ar-IL',{year:'numeric',month:'long',day:'numeric'})}
function formatDuration(seconds){if(!Number.isFinite(seconds))return'';const m=Math.floor(seconds/60),s=Math.floor(seconds%60);return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
function render(){
 document.documentElement.lang=data.language||'ar'; document.documentElement.dir='rtl';
 const t=i18n[data.language]||i18n.ar;
 document.querySelectorAll('[data-i18n]').forEach(el=>{if(t[el.dataset.i18n])el.textContent=t[el.dataset.i18n]});
 document.querySelector('.hero h1 em').textContent=data.names||[data.name1,data.name2].filter(Boolean).join(' & ')||'حكايتنا';
 document.querySelector('.since').textContent=data.since?formatDate(data.since):t.since;
 document.querySelector('.letter-card>p:nth-of-type(2)').textContent=data.letter||t.letter;
 document.getElementById('songTitle').textContent=data.songTitle||t.ourSong;
 document.getElementById('songSubtitle').textContent=data.songSubtitle||'';
 const audio=document.getElementById('audio');audio.removeAttribute('src');if(data.audio)audio.src=data.audio;
 const moments=Array.isArray(data.moments)?data.moments:[];
 document.getElementById('timeline').innerHTML=moments.map(m=>`<article class="moment"><time>${m.date||''}</time><h3>${m.title||''}</h3><p>${m.text||''}</p></article>`).join('');
 const photos=Array.isArray(data.photos)&&data.photos.length?data.photos:[];
 document.getElementById('gallery').innerHTML=photos.map((p,i)=>`<button class="memory" style="${p.src?'':`background:${fallback[i%fallback.length]}`}">${p.src?`<img src="${p.src}" style="object-position:${p.position||'center'}" alt="${p.caption||''}">`:`<span style="inset:0;display:grid;place-items:center;text-align:center;font:italic 22px 'Cormorant Garamond'">Our memory ♡</span>`}<span>${p.caption||''}</span></button>`).join('');
 document.querySelectorAll('.memory').forEach((el,i)=>el.onclick=()=>{if(!photos[i]?.src)return;const d=document.getElementById('lightbox');d.querySelector('img').src=photos[i].src;d.querySelector('p').textContent=photos[i].caption||'';d.showModal()});
 document.querySelector('.memories').style.display=photos.length?'':'none';
 document.querySelector('.journey').style.display=moments.length?'':'none';
 document.querySelector('.song-card').style.display=data.audio?'':'none';
 document.querySelector('.voice-card').style.display=data.voice?'':'none';
 if(data.unlock){document.getElementById('unlockDate').textContent=formatDate(data.unlock)}else{document.getElementById('future').style.display='none'}
 document.querySelectorAll('.language button').forEach(b=>b.classList.toggle('active',b.dataset.lang===data.language));
}
document.querySelectorAll('.language button').forEach(b=>b.onclick=()=>{data.language=b.dataset.lang;render()});
const play=document.getElementById('playSong'),audio=document.getElementById('audio');play.onclick=()=>{if(!data.audio)return;if(audio.paused){audio.play();play.textContent='❚❚';play.closest('.song-card').classList.add('playing')}else{audio.pause();play.textContent='▶';play.closest('.song-card').classList.remove('playing')}};
document.getElementById('closeLightbox').onclick=()=>document.getElementById('lightbox').close();
const voiceButton=document.getElementById('playVoice');let voiceAudio;voiceButton.onclick=()=>{const card=voiceButton.closest('.voice-card');if(!data.voice)return;voiceAudio=voiceAudio||new Audio(data.voice);if(voiceAudio.paused){voiceAudio.play();voiceButton.textContent='■';card.classList.add('playing');voiceAudio.onended=()=>{voiceButton.textContent='▶';card.classList.remove('playing')}}else{voiceAudio.pause();voiceButton.textContent='▶';card.classList.remove('playing')}};
function setupVoice(){if(!data.voice)return;voiceAudio=new Audio(data.voice);voiceAudio.preload='metadata';voiceAudio.addEventListener('loadedmetadata',()=>{const span=document.querySelector('.voice-card span');if(span)span.textContent=formatDuration(voiceAudio.duration)},{once:true})}
function tick(){if(!data.unlock)return;let diff=new Date(data.unlock)-new Date();if(diff<=0){const msg=data.futureMessage||((i18n[data.language]||i18n.ar).futureText);document.getElementById('future').innerHTML=`<div class="lock-ring">♡</div><span>${(i18n[data.language]||i18n.ar).futureKicker}</span><h2>${data.language==='he'?'המכתב נפתח ♡':'الرسالة أصبحت جاهزة ♡'}</h2><p>${msg}</p>`;return}const d=Math.floor(diff/864e5);diff%=864e5;const h=Math.floor(diff/36e5);diff%=36e5;const m=Math.floor(diff/6e4);days.textContent=d;hours.textContent=String(h).padStart(2,'0');minutes.textContent=String(m).padStart(2,'0')}
const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const giftIntro=document.getElementById('giftIntro'),openGift=document.getElementById('openGift');
openGift.addEventListener('click',()=>{giftIntro.classList.add('opening');if(navigator.vibrate)navigator.vibrate([45,35,70]);setTimeout(()=>{giftIntro.classList.add('done');document.body.classList.remove('gift-locked');document.querySelector('.hero').classList.add('visible')},1250)},{once:true});
async function init(){
 if(memorySlug){
  const client=supabase.createClient(OTG.url,OTG.key);const {data:row,error}=await client.rpc('get_memory',{p_slug:memorySlug});
  if(error||!row){document.body.innerHTML='<main style="padding:50px;text-align:center"><h1>هذه الذكرى غير موجودة</h1></main>';return}
  const c=row.content||{};data={...defaults,...c};
  if(!hasOwn(c,'audio'))data.audio='';if(!hasOwn(c,'voice'))data.voice='';if(!hasOwn(c,'photos'))data.photos=[];if(!hasOwn(c,'moments'))data.moments=[];
  document.title=`${data.names||'حكايتنا'} — OneTapGo`;
 }
 render();setupVoice();tick();setInterval(tick,30000)
}
init();
