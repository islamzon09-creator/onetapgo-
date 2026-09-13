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
const fallback=['linear-gradient(145deg,#8e4c59,#d9a7a7)','linear-gradient(145deg,#916f60,#ead2c3)','linear-gradient(145deg,#53646a,#c7b8ad)','linear-gradient(145deg,#7f596f,#e1b6bd)','linear-gradient(145deg,#9a7460,#e5c2a5)'];
function render(){
 document.documentElement.lang=data.language; document.documentElement.dir='rtl';
 document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=i18n[data.language][el.dataset.i18n]);
 document.querySelector('.hero h1 em').textContent=data.names;
 document.querySelector('.since').textContent=data.since?new Date(data.since).toLocaleDateString(data.language==='he'?'he-IL':'ar-IL',{year:'numeric',month:'long',day:'numeric'}):i18n[data.language].since;
 document.querySelector('.letter-card>p:nth-of-type(2)').textContent=data.letter||i18n[data.language].letter;
 document.getElementById('songTitle').textContent=data.songTitle;document.getElementById('songSubtitle').textContent=data.songSubtitle;
 const audio=document.getElementById('audio');if(data.audio)audio.src=data.audio;
 document.getElementById('timeline').innerHTML=data.moments.map(m=>`<article class="moment"><time>${m.date}</time><h3>${m.title}</h3><p>${m.text}</p></article>`).join('');
 const photos=data.photos.length?data.photos:Array.from({length:5},(_,i)=>({src:'',caption:data.language==='he'?`הזיכרון שלנו ${i+1}`:`ذكرياتنا ${i+1}`}));
 document.getElementById('gallery').innerHTML=photos.map((p,i)=>`<button class="memory" style="${p.src?'':`background:${fallback[i%fallback.length]}`}">${p.src?`<img src="${p.src}" style="object-position:${p.position||'center'}" alt="${p.caption||''}">`:`<span style="inset:0;display:grid;place-items:center;text-align:center;font:italic 22px 'Cormorant Garamond'">Our memory ♡</span>`}<span>${p.caption||''}</span></button>`).join('');
 document.querySelectorAll('.memory').forEach((el,i)=>el.onclick=()=>{if(!photos[i].src)return;const d=document.getElementById('lightbox');d.querySelector('img').src=photos[i].src;d.querySelector('p').textContent=photos[i].caption||'';d.showModal()});
 document.querySelectorAll('.language button').forEach(b=>b.classList.toggle('active',b.dataset.lang===data.language));
}
document.querySelectorAll('.language button').forEach(b=>b.onclick=()=>{data.language=b.dataset.lang;render()});
const play=document.getElementById('playSong'),audio=document.getElementById('audio');play.onclick=()=>{if(!audio.src)return;if(audio.paused){audio.play();play.textContent='❚❚';play.closest('.song-card').classList.add('playing')}else{audio.pause();play.textContent='▶';play.closest('.song-card').classList.remove('playing')}};
document.getElementById('closeLightbox').onclick=()=>document.getElementById('lightbox').close();
const voiceButton=document.getElementById('playVoice');let voiceAudio;voiceButton.onclick=()=>{const card=voiceButton.closest('.voice-card');if(data.voice){voiceAudio=voiceAudio||new Audio(data.voice);if(voiceAudio.paused){voiceAudio.play();voiceButton.textContent='■';card.classList.add('playing');voiceAudio.onended=()=>{voiceButton.textContent='▶';card.classList.remove('playing')}}else{voiceAudio.pause();voiceButton.textContent='▶';card.classList.remove('playing')}return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance('لو كنت تسمع هذه الرسالة، فأنا فقط أريد أن أذكرك أنك أجمل شيء حدث في حياتي، وأن حكايتنا ستبقى أجمل حكاياتي. أحبك، اليوم وكل يوم.');u.lang='ar-SA';u.rate=.82;u.pitch=.9;u.onstart=()=>{voiceButton.textContent='■';card.classList.add('playing')};u.onend=u.onerror=()=>{voiceButton.textContent='▶';card.classList.remove('playing')};speechSynthesis.speak(u)};
function tick(){let diff=new Date(data.unlock)-new Date();if(diff<=0){document.getElementById('future').innerHTML='<div class="lock-ring">♡</div><h2>الرسالة أصبحت جاهزة</h2><p>هذه لحظتكما… افتحاها معًا.</p>';return}const d=Math.floor(diff/864e5);diff%=864e5;const h=Math.floor(diff/36e5);diff%=36e5;const m=Math.floor(diff/6e4);days.textContent=d;hours.textContent=String(h).padStart(2,'0');minutes.textContent=String(m).padStart(2,'0')}
const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
async function init(){if(memorySlug){const client=supabase.createClient(OTG.url,OTG.key);const {data:row,error}=await client.rpc('get_memory',{p_slug:memorySlug});if(error||!row){document.body.innerHTML='<main style="padding:50px;text-align:center"><h1>هذه الذكرى غير موجودة</h1></main>';return}data={...defaults,...row.content};document.title=`${data.names||'حكايتنا'} — OneTapGo`}render();tick();setInterval(tick,30000)}init();
