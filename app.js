
const i18n = {
  fi:{
    nav_home:"Koti", nav_services:"Palvelut", nav_pricing:"Hinnat", nav_about:"Meistä", nav_contact:"Yhteys",
    hero_title:"Tietokonehuolto, verkkosivut & custom PC – nouto ja palautus Laitilassa",
    hero_sub:"Paikallinen IT‑kumppanisi. Nopea, selkeä hinnoittelu ja mobiiliystävälliset sivut.",
    b1:"Nouto Laitilassa 0 €", b2:"Kilpailukykyiset hinnat", b3:"Nopea toimitus", b4:"Paikallinen tuki",
    cta_call:"Soita nyt", cta_book:"Varaa nouto",
    s_title:"Palvelut", s_sub:"Huolto, PC‑rakennus, kotisivut ja yritystuki – kaikki samasta paikasta.",
    s1:"Tietokonehuolto", s1d:"Puhdistus, lämpötahna, viruspoisto, Windows/Linux‑asennukset, päivitykset.",
    s2:"Custom PC -rakennus", s2d:"Komponenttien valinta, asennus, BIOS, stressitestit. Kaapelinhallinta lisäpalveluna.",
    s3:"Kotisivut", s3d:"One‑page tai pienet sivustot, FI/EN, responsiivinen, perus SEO.",
    s4:"IT‑tuki", s4d:"Etätuki, kiirekäynnit, NAS/verkko, WiFi ja tulostimet.",
    p_title:"Kotisivut – hinnasto (alk.)",
    p1:"One‑page (.fi + hosting 1v)", p2:"3–4 sivua + lomake + galleria", p3:"Laajempi sivusto / integraatiot",
    pr1:"€449", pr2:"€750", pr3:"€1 100+",
    a_title:"Meistä", a_body:"Paikallinen ja luotettava IT‑palvelu. Nouto Laitilassa 0 €, lähialueet edullisesti.",
    t_title:"Asiakaspalautteet",
    t1:"Nopea palvelu ja selkeä hinta. Suosittelen!", t2:"Sain koneen kuntoon samana päivänä.", t3:"Kotisivut näyttävät ammattilaisilta.",
    c_title:"Yhteys", c_phone:"Puhelin", c_email:"Sähköposti", c_area:"Palvelualue", c_area_txt:"Laitila + 25 km (Uusikaupunki, Rauma, Pyhäranta)",
    send:"Lähetä"
  },
  en:{
    nav_home:"Home", nav_services:"Services", nav_pricing:"Pricing", nav_about:"About", nav_contact:"Contact",
    hero_title:"Computer repair, websites & custom PCs – pickup & delivery in Laitila",
    hero_sub:"Your local IT partner. Fast turnaround, clear pricing & mobile‑friendly sites.",
    b1:"Free pickup in Laitila", b2:"Competitive pricing", b3:"Fast turnaround", b4:"Local support",
    cta_call:"Call now", cta_book:"Book pickup",
    s_title:"Services", s_sub:"Repair, PC builds, websites and business IT — all locally.",
    s1:"Computer repair", s1d:"Cleaning, thermal paste, virus removal, Windows/Linux installs, upgrades.",
    s2:"Custom PC builds", s2d:"Component selection, assembly, BIOS, stress tests. Cable management optional.",
    s3:"Websites", s3d:"One‑page or small sites, FI/EN, responsive, basic SEO.",
    s4:"IT support", s4d:"Remote support, urgent visits, NAS/network, WiFi & printers.",
    p_title:"Websites – pricing (from)",
    p1:"One‑page (.fi + 1y hosting)", p2:"3–4 pages + form + gallery", p3:"Larger site / integrations",
    pr1:"€449", pr2:"€750", pr3:"€1,100+",
    a_title:"About", a_body:"Trusted local IT service. Pickup in Laitila is free; nearby areas affordable.",
    t_title:"Testimonials",
    t1:"Fast service and clear pricing. Recommended!", t2:"Got my PC fixed the same day.", t3:"Our website looks professional.",
    c_title:"Get in touch", c_phone:"Phone", c_email:"Email", c_area:"Service area", c_area_txt:"Laitila + 25 km (Uusikaupunki, Rauma, Pyhäranta)",
    send:"Send"
  }
};

const $ = s => document.querySelector(s);
function setLang(lang){
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
}
window.addEventListener("DOMContentLoaded", ()=>{
  // mobile menu
  const hamb = document.querySelector('.hamb');
  const menu = document.querySelector('.menu');
  if(hamb) hamb.addEventListener('click', ()=> menu.classList.toggle('open'));
  // language
  setLang("en");
  document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click", ()=>setLang(b.dataset.lang)));
  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const id=a.getAttribute('href'); if(id.length>1){ e.preventDefault(); document.querySelector(id).scrollIntoView({behavior:'smooth'}); }
  }));
  // booking mock
  const form = document.querySelector("form.booking");
  if(form){ form.addEventListener("submit", e=>{ e.preventDefault(); alert("Request sent (mock). Wire with EmailJS for production."); form.reset(); }); }
});
