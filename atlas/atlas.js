(() => {
  // data/people_portraits.json
  var people_portraits_default = {
    Q1009: {
      wikidata: "Q809046",
      url: "https://linkedjazz.org/image/square/Barry_Harris.png",
      local: "atlas/portraits/Q1009.webp"
    },
    Q102: {
      wikidata: "Q465943",
      url: "https://linkedjazz.org/image/square/Betty_Carter.png",
      local: "atlas/portraits/Q102.webp"
    },
    Q1090: {
      wikidata: "Q504915",
      url: "https://linkedjazz.org/image/square/J.J._Johnson.png",
      local: "atlas/portraits/Q1090.webp"
    },
    Q1098: {
      wikidata: "Q536415",
      url: "https://linkedjazz.org/image/square/Wynton_Kelly.png",
      local: "atlas/portraits/Q1098.webp"
    },
    Q1193: {
      wikidata: "Q861928",
      url: "https://linkedjazz.org/image/square/Bill_Barron_(musician).png",
      local: "atlas/portraits/Q1193.webp"
    },
    Q1198: {
      wikidata: "Q1077846",
      url: "https://linkedjazz.org/image/square/Chris_White_(bassist).png"
    },
    Q1203: {
      wikidata: "Q111788899"
    },
    Q13: {
      wikidata: "Q103767",
      url: "https://linkedjazz.org/image/square/Charlie_Parker.png",
      local: "atlas/portraits/Q13.webp"
    },
    Q136: {
      wikidata: "Q315780",
      url: "https://linkedjazz.org/image/square/Stan_Kenton.png",
      local: "atlas/portraits/Q136.webp"
    },
    Q1365: {
      wikidata: "Q246462",
      url: "https://linkedjazz.org/image/square/Cedar_Walton.png",
      local: "atlas/portraits/Q1365.webp"
    },
    Q1403: {
      wikidata: "Q780037",
      url: "https://linkedjazz.org/image/square/Reggie_Workman.png",
      local: "atlas/portraits/Q1403.webp"
    },
    Q1425: {
      wikidata: "Q2166025",
      url: "https://linkedjazz.org/image/square/Ronnie_Mathews.png",
      local: "atlas/portraits/Q1425.webp"
    },
    Q1467: {
      wikidata: "Q1370431",
      url: "https://linkedjazz.org/image/square/Albert_Heath.png",
      local: "atlas/portraits/Q1467.webp"
    },
    Q1580: {
      wikidata: "Q326810",
      url: "https://linkedjazz.org/image/square/Bill_Doggett.png",
      local: "atlas/portraits/Q1580.webp"
    },
    Q16: {
      wikidata: "Q545464",
      url: "https://linkedjazz.org/image/square/Billy_Eckstine.png",
      local: "atlas/portraits/Q16.webp"
    },
    Q1658: {
      wikidata: "Q295919",
      url: "https://linkedjazz.org/image/square/Sam_Cooke.png",
      local: "atlas/portraits/Q1658.webp"
    },
    Q1747: {
      wikidata: "Q2073237",
      url: "https://linkedjazz.org/image/square/Pete_Brown_(jazz_musician).png",
      local: "atlas/portraits/Q1747.webp"
    },
    Q1756: {
      wikidata: "Q231484",
      url: "https://linkedjazz.org/image/square/Roberta_Flack.png",
      local: "atlas/portraits/Q1756.webp"
    },
    Q1759: {
      wikidata: "Q275250"
    },
    Q1764: {
      wikidata: "Q944779",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Russel%20Malone.jpg?width=300",
      commonsFile: "Russel Malone.jpg",
      local: "atlas/portraits/Q1764.webp"
    },
    Q18: {
      wikidata: "Q312692",
      url: "https://linkedjazz.org/image/square/Bud_Powell.png",
      local: "atlas/portraits/Q18.webp"
    },
    Q1834: {
      wikidata: "Q273210",
      url: "https://linkedjazz.org/image/square/James_Baldwin.png",
      local: "atlas/portraits/Q1834.webp"
    },
    Q1846: {
      wikidata: "Q3073760",
      url: "https://semlab.s3.amazonaws.com/images/Q1846.jpg",
      local: "atlas/portraits/Q1846.webp"
    },
    Q18811: {
      wikidata: "Q69104747"
    },
    Q18812: {
      wikidata: "Q69104753"
    },
    Q18818: {
      wikidata: "Q2745611"
    },
    Q18824: {
      wikidata: "Q4894765"
    },
    Q18913: {
      wikidata: "Q401094"
    },
    Q18915: {
      wikidata: "Q61041693"
    },
    Q18920: {
      wikidata: "Q69925736"
    },
    Q18922: {
      wikidata: "Q887872"
    },
    Q18923: {
      wikidata: "Q65548832"
    },
    Q18926: {
      wikidata: "Q61812707"
    },
    Q18929: {
      wikidata: "Q212339",
      url: "https://semlab.s3.amazonaws.com/images/Q18929.jpg",
      local: "atlas/portraits/Q18929.webp"
    },
    Q18931: {
      wikidata: "Q485927",
      url: "https://semlab.s3.amazonaws.com/images/Q18931.jpg",
      local: "atlas/portraits/Q18931.webp"
    },
    Q18935: {
      wikidata: "Q65554916"
    },
    Q18936: {
      wikidata: "Q65554926"
    },
    Q18937: {
      wikidata: "Q2787266"
    },
    Q18939: {
      wikidata: "Q5336042",
      url: "https://semlab.s3.amazonaws.com/images/Q18939.jpg"
    },
    Q18941: {
      wikidata: "Q65554906"
    },
    Q18943: {
      wikidata: "Q1356914",
      url: "https://semlab.s3.amazonaws.com/images/Q18943.jpg",
      local: "atlas/portraits/Q18943.webp"
    },
    Q18944: {
      wikidata: "Q463113",
      url: "https://semlab.s3.amazonaws.com/images/Q18944.jpg",
      local: "atlas/portraits/Q18944.webp"
    },
    Q18947: {
      wikidata: "Q65554917"
    },
    Q18949: {
      wikidata: "Q1494823",
      url: "https://semlab.s3.amazonaws.com/images/Q18949.jpg",
      local: "atlas/portraits/Q18949.webp"
    },
    Q1895: {
      wikidata: "Q275455",
      url: "https://linkedjazz.org/image/square/Irene_Reid.png",
      local: "atlas/portraits/Q1895.webp"
    },
    Q18950: {
      wikidata: "Q1523803"
    },
    Q18953: {
      wikidata: "Q69103316"
    },
    Q18954: {
      wikidata: "Q323490",
      url: "https://semlab.s3.amazonaws.com/images/Q18954.jpg",
      local: "atlas/portraits/Q18954.webp"
    },
    Q18955: {
      wikidata: "Q65554903"
    },
    Q18957: {
      wikidata: "Q1681118",
      url: "https://semlab.s3.amazonaws.com/images/Q18957.jpg",
      local: "atlas/portraits/Q18957.webp"
    },
    Q18960: {
      wikidata: "Q6170374",
      url: "https://semlab.s3.amazonaws.com/images/Q18960.jpg",
      local: "atlas/portraits/Q18960.webp"
    },
    Q18965: {
      wikidata: "Q65554918"
    },
    Q18966: {
      wikidata: "Q65554908"
    },
    Q18967: {
      wikidata: "Q55418244"
    },
    Q18968: {
      wikidata: "Q65548169"
    },
    Q18969: {
      wikidata: "Q916929",
      url: "https://semlab.s3.amazonaws.com/images/Q18969.jpg",
      local: "atlas/portraits/Q18969.webp"
    },
    Q18970: {
      wikidata: "Q55820361"
    },
    Q18971: {
      wikidata: "Q3433512"
    },
    Q18972: {
      wikidata: "Q727254"
    },
    Q18973: {
      wikidata: "Q69103541"
    },
    Q18976: {
      wikidata: "Q65554904",
      url: "https://semlab.s3.amazonaws.com/images/Q18976.jpg"
    },
    Q18978: {
      wikidata: "Q61742206",
      url: "https://semlab.s3.amazonaws.com/images/Q18978.jpg",
      local: "atlas/portraits/Q18978.webp"
    },
    Q18979: {
      wikidata: "Q822606"
    },
    Q18980: {
      wikidata: "Q65554902"
    },
    Q18981: {
      wikidata: "Q1724922"
    },
    Q18983: {
      wikidata: "Q1497852"
    },
    Q18984: {
      wikidata: "Q6525364"
    },
    Q18985: {
      wikidata: "Q65554925"
    },
    Q18986: {
      wikidata: "Q330240",
      url: "https://semlab.s3.amazonaws.com/images/Q18986.jpg",
      local: "atlas/portraits/Q18986.webp"
    },
    Q18987: {
      wikidata: "Q65554915",
      url: "https://semlab.s3.amazonaws.com/images/Q18987.jpg"
    },
    Q18990: {
      wikidata: "Q18358111",
      url: "https://semlab.s3.amazonaws.com/images/Q18990.jpg"
    },
    Q18994: {
      wikidata: "Q1283540"
    },
    Q18996: {
      wikidata: "Q65967248"
    },
    Q19002: {
      wikidata: "Q65554920"
    },
    Q19003: {
      wikidata: "Q217839",
      url: "https://semlab.s3.amazonaws.com/images/Q19003.jpg",
      local: "atlas/portraits/Q19003.webp"
    },
    Q19012: {
      wikidata: "Q29110343"
    },
    Q19013: {
      wikidata: "Q65554907"
    },
    Q19016: {
      wikidata: "Q65554900"
    },
    Q19017: {
      wikidata: "Q2162653"
    },
    Q19020: {
      wikidata: "Q65554924"
    },
    Q19021: {
      wikidata: "Q65554905"
    },
    Q19022: {
      wikidata: "Q1022567"
    },
    Q19026: {
      wikidata: "Q1488293"
    },
    Q19029: {
      wikidata: "Q7852105",
      url: "https://semlab.s3.amazonaws.com/images/Q19029.jpg"
    },
    Q19031: {
      wikidata: "Q2510230",
      url: "https://semlab.s3.amazonaws.com/images/Q19031.jpg",
      local: "atlas/portraits/Q19031.webp"
    },
    Q19032: {
      wikidata: "Q65554901"
    },
    Q19034: {
      wikidata: "Q15441507"
    },
    Q19036: {
      wikidata: "Q355582",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Walter%20Perkins%2C%201963.jpg?width=300",
      commonsFile: "Walter Perkins, 1963.jpg",
      local: "atlas/portraits/Q19036.webp"
    },
    Q19038: {
      wikidata: "Q15449804"
    },
    Q19039: {
      wikidata: "Q2581448"
    },
    Q1909: {
      wikidata: "Q553921",
      url: "https://semlab.s3.amazonaws.com/images/Q1909.jpg",
      local: "atlas/portraits/Q1909.webp"
    },
    Q19100: {
      wikidata: "Q65554919"
    },
    Q1953: {
      wikidata: "Q892998",
      url: "https://linkedjazz.org/image/square/Booker_Ervin.png",
      local: "atlas/portraits/Q1953.webp"
    },
    Q20: {
      wikidata: "Q453604",
      url: "https://linkedjazz.org/image/square/Tony_Williams_(drummer).png",
      local: "atlas/portraits/Q20.webp"
    },
    Q200: {
      wikidata: "Q318619",
      url: "https://linkedjazz.org/image/square/McCoy_Tyner.png",
      local: "atlas/portraits/Q200.webp"
    },
    Q202: {
      wikidata: "Q1026123",
      url: "https://linkedjazz.org/image/square/Cal_Massey.png",
      local: "atlas/portraits/Q202.webp"
    },
    Q2020: {
      wikidata: "Q7984120",
      url: "https://semlab.s3.amazonaws.com/images/Q2020.jpg"
    },
    Q204: {
      wikidata: "Q324522",
      url: "https://linkedjazz.org/image/square/Billy_Higgins.png",
      local: "atlas/portraits/Q204.webp"
    },
    Q20533: {
      wikidata: "Q110307226"
    },
    Q21684: {
      wikidata: "Q69917027"
    },
    Q22233: {
      wikidata: "Q69177758"
    },
    Q22234: {
      wikidata: "Q541634",
      url: "https://semlab.s3.amazonaws.com/images/Q22234.jpg",
      local: "atlas/portraits/Q22234.webp"
    },
    Q22236: {
      wikidata: "Q205876",
      url: "https://semlab.s3.amazonaws.com/images/Q22236.jpg"
    },
    Q22238: {
      wikidata: "Q267572",
      url: "https://semlab.s3.amazonaws.com/images/Q22238.jpg",
      local: "atlas/portraits/Q22238.webp"
    },
    Q22241: {
      wikidata: "Q107637949"
    },
    Q22242: {
      wikidata: "Q65472830"
    },
    Q22250: {
      wikidata: "Q106219119"
    },
    Q22254: {
      wikidata: "Q860283",
      url: "https://semlab.s3.amazonaws.com/images/Q22254.jpg",
      local: "atlas/portraits/Q22254.webp"
    },
    Q22259: {
      wikidata: "Q1370642",
      url: "https://semlab.s3.amazonaws.com/images/Q22259.jpg",
      local: "atlas/portraits/Q22259.webp"
    },
    Q22260: {
      wikidata: "Q60330364"
    },
    Q22261: {
      wikidata: "Q711204",
      url: "https://semlab.s3.amazonaws.com/images/Q22261.jpg",
      local: "atlas/portraits/Q22261.webp"
    },
    Q22263: {
      wikidata: "Q538079"
    },
    Q22266: {
      wikidata: "Q286022",
      url: "https://semlab.s3.amazonaws.com/images/Q22266.jpg",
      local: "atlas/portraits/Q22266.webp"
    },
    Q22269: {
      wikidata: "Q99706043"
    },
    Q22270: {
      wikidata: "Q1894385",
      url: "https://semlab.s3.amazonaws.com/images/Q22270.jpg",
      local: "atlas/portraits/Q22270.webp"
    },
    Q22271: {
      wikidata: "Q18620640",
      url: "https://semlab.s3.amazonaws.com/images/Q22271.jpg"
    },
    Q22275: {
      wikidata: "Q574163"
    },
    Q22276: {
      wikidata: "Q1242049",
      url: "https://semlab.s3.amazonaws.com/images/Q22276.jpg",
      local: "atlas/portraits/Q22276.webp"
    },
    Q22285: {
      wikidata: "Q1286018"
    },
    Q22286: {
      wikidata: "Q990708"
    },
    Q22302: {
      wikidata: "Q382262",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arthur%20Prysock%20%28c.1950%29.jpg?width=300",
      commonsFile: "Arthur Prysock (c.1950).jpg",
      local: "atlas/portraits/Q22302.webp"
    },
    Q22311: {
      wikidata: "Q4711378"
    },
    Q22312: {
      wikidata: "Q1164703"
    },
    Q22428: {
      wikidata: "Q98609608"
    },
    Q22429: {
      wikidata: "Q107641780"
    },
    Q22452: {
      wikidata: "Q933192",
      url: "https://semlab.s3.amazonaws.com/images/Q22452.jpg",
      local: "atlas/portraits/Q22452.webp"
    },
    Q22486: {
      wikidata: "Q1138552",
      url: "https://semlab.s3.amazonaws.com/images/Q22486.jpg"
    },
    Q22492: {
      wikidata: "Q7156518",
      url: "https://semlab.s3.amazonaws.com/images/Q22492.jpg"
    },
    Q22493: {
      url: "https://semlab.s3.amazonaws.com/images/Q22493.jpg"
    },
    Q22500: {
      wikidata: "Q65548768"
    },
    Q22512: {
      wikidata: "Q1351578",
      url: "https://semlab.s3.amazonaws.com/images/Q22512.jpg",
      local: "atlas/portraits/Q22512.webp"
    },
    Q22514: {
      wikidata: "Q115861710"
    },
    Q22518: {
      wikidata: "Q2066063"
    },
    Q22519: {
      wikidata: "Q114082679"
    },
    Q22534: {
      wikidata: "Q1953865",
      url: "https://semlab.s3.amazonaws.com/images/Q22534.jpg",
      local: "atlas/portraits/Q22534.webp"
    },
    Q22540: {
      wikidata: "Q69176272"
    },
    Q22542: {
      wikidata: "Q2174545"
    },
    Q22548: {
      wikidata: "Q1333051",
      url: "https://semlab.s3.amazonaws.com/images/Q22548.jpg",
      local: "atlas/portraits/Q22548.webp"
    },
    Q22549: {
      wikidata: "Q64697872"
    },
    Q22554: {
      wikidata: "Q830379"
    },
    Q22577: {
      wikidata: "Q106615349"
    },
    Q22578: {
      wikidata: "Q1638199",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kim%20Clarke%20Defunkt%20Unterfahrt%202012-02-21-004.jpg?width=300",
      commonsFile: "Kim Clarke Defunkt Unterfahrt 2012-02-21-004.jpg"
    },
    Q22585: {
      wikidata: "Q69104769"
    },
    Q22590: {
      wikidata: "Q106618369"
    },
    Q22593: {
      wikidata: "Q106618317"
    },
    Q22600: {
      wikidata: "Q16841978"
    },
    Q22606: {
      wikidata: "Q69924263"
    },
    Q22613: {
      wikidata: "Q23008611"
    },
    Q22619: {
      wikidata: "Q54562789"
    },
    Q22620: {
      wikidata: "Q962378",
      url: "https://semlab.s3.amazonaws.com/images/Q22620.jpg"
    },
    Q22622: {
      wikidata: "Q62766",
      url: "https://semlab.s3.amazonaws.com/images/Q22622.jpg",
      local: "atlas/portraits/Q22622.webp"
    },
    Q22625: {
      wikidata: "Q742642",
      url: "https://semlab.s3.amazonaws.com/images/Q22625.jpg"
    },
    Q22626: {
      wikidata: "Q179157",
      url: "https://semlab.s3.amazonaws.com/images/Q22626.jpg"
    },
    Q22694: {
      wikidata: "Q858535",
      url: "https://semlab.s3.amazonaws.com/images/Q22694.jpg"
    },
    Q22697: {
      wikidata: "Q72883617"
    },
    Q22774: {
      wikidata: "Q1327953"
    },
    Q22775: {
      wikidata: "Q1364479"
    },
    Q22931: {
      wikidata: "Q1869869"
    },
    Q22938: {
      wikidata: "Q108099403"
    },
    Q22952: {
      wikidata: "Q57832127"
    },
    Q22962: {
      wikidata: "Q862431",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bill%20Saxton%202017.jpg?width=300",
      commonsFile: "Bill Saxton 2017.jpg",
      local: "atlas/portraits/Q22962.webp"
    },
    Q22963: {
      wikidata: "Q529243"
    },
    Q22964: {
      wikidata: "Q588551",
      url: "https://semlab.s3.amazonaws.com/images/Q22964.jpg",
      local: "atlas/portraits/Q22964.webp"
    },
    Q22973: {
      wikidata: "Q1573406",
      url: "https://semlab.s3.amazonaws.com/images/Q22973.jpg",
      local: "atlas/portraits/Q22973.webp"
    },
    Q23162: {
      wikidata: "Q1902158"
    },
    Q23163: {
      wikidata: "Q285629",
      url: "https://semlab.s3.amazonaws.com/images/Q23163.jpg",
      local: "atlas/portraits/Q23163.webp"
    },
    Q23164: {
      wikidata: "Q3475967",
      url: "https://semlab.s3.amazonaws.com/images/Q23164.jpg",
      local: "atlas/portraits/Q23164.webp"
    },
    Q23165: {
      wikidata: "Q353123",
      url: "https://semlab.s3.amazonaws.com/images/Q23165.jpg",
      local: "atlas/portraits/Q23165.webp"
    },
    Q23166: {
      wikidata: "Q442477",
      url: "https://semlab.s3.amazonaws.com/images/Q23166.jpg",
      local: "atlas/portraits/Q23166.webp"
    },
    Q23167: {
      wikidata: "Q453956",
      url: "https://semlab.s3.amazonaws.com/images/Q23167.jpg",
      local: "atlas/portraits/Q23167.webp"
    },
    Q23168: {
      wikidata: "Q5132763"
    },
    Q23171: {
      wikidata: "Q69932253"
    },
    Q23356: {
      wikidata: "Q5522586",
      url: "https://semlab.s3.amazonaws.com/images/Q23356.jpg"
    },
    Q23358: {
      wikidata: "Q563291",
      url: "https://semlab.s3.amazonaws.com/images/Q23358.jpg",
      local: "atlas/portraits/Q23358.webp"
    },
    Q23457: {
      wikidata: "Q863114",
      url: "https://semlab.s3.amazonaws.com/images/Q23457.jpg",
      local: "atlas/portraits/Q23457.webp"
    },
    Q24: {
      wikidata: "Q217812",
      url: "https://linkedjazz.org/image/square/Coleman_Hawkins.png",
      local: "atlas/portraits/Q24.webp"
    },
    Q248: {
      wikidata: "Q497183",
      url: "https://linkedjazz.org/image/square/Oscar_Pettiford.png",
      local: "atlas/portraits/Q248.webp"
    },
    Q26321: {
      wikidata: "Q121841177"
    },
    Q278: {
      wikidata: "Q494976",
      url: "https://linkedjazz.org/image/square/Kai_Winding.png",
      local: "atlas/portraits/Q278.webp"
    },
    Q281: {
      wikidata: "Q311715",
      url: "https://linkedjazz.org/image/square/Art_Blakey.png",
      local: "atlas/portraits/Q281.webp"
    },
    Q30: {
      wikidata: "Q1346401",
      url: "https://linkedjazz.org/image/square/Jaki_Byard.png",
      local: "atlas/portraits/Q30.webp"
    },
    Q304: {
      wikidata: "Q526442",
      url: "https://linkedjazz.org/image/square/Andy_Kirk_(musician).png",
      local: "atlas/portraits/Q304.webp"
    },
    Q325: {
      wikidata: "Q1345099",
      url: "https://linkedjazz.org/image/square/King_Curtis.png",
      local: "atlas/portraits/Q325.webp"
    },
    Q33: {
      wikidata: "Q7346",
      url: "https://linkedjazz.org/image/square/John_Coltrane.png",
      local: "atlas/portraits/Q33.webp"
    },
    Q331: {
      wikidata: "Q365560",
      url: "https://linkedjazz.org/image/square/Horace_Silver.png",
      local: "atlas/portraits/Q331.webp"
    },
    Q34: {
      wikidata: "Q273076",
      url: "https://linkedjazz.org/image/square/Wynton_Marsalis.png",
      local: "atlas/portraits/Q34.webp"
    },
    Q347: {
      wikidata: "Q919632",
      url: "https://linkedjazz.org/image/square/Eubie_Blake.png",
      local: "atlas/portraits/Q347.webp"
    },
    Q35: {
      wikidata: "Q49575",
      url: "https://linkedjazz.org/image/square/Dizzy_Gillespie.png",
      local: "atlas/portraits/Q35.webp"
    },
    Q353: {
      wikidata: "Q489245",
      url: "https://linkedjazz.org/image/square/Frank_Foster_(musician).png",
      local: "atlas/portraits/Q353.webp"
    },
    Q365: {
      wikidata: "Q920490",
      url: "https://linkedjazz.org/image/square/Jackie_McLean.png",
      local: "atlas/portraits/Q365.webp"
    },
    Q41: {
      wikidata: "Q93341",
      url: "https://linkedjazz.org/image/square/Miles_Davis.png",
      local: "atlas/portraits/Q41.webp"
    },
    Q410: {
      wikidata: "Q317161",
      url: "https://linkedjazz.org/image/square/Wayne_Shorter.png",
      local: "atlas/portraits/Q410.webp"
    },
    Q448: {
      wikidata: "Q502311",
      url: "https://linkedjazz.org/image/square/Sonny_Stitt.png",
      local: "atlas/portraits/Q448.webp"
    },
    Q45: {
      wikidata: "Q434593",
      url: "https://linkedjazz.org/image/square/Ron_Carter.png",
      local: "atlas/portraits/Q45.webp"
    },
    Q457: {
      wikidata: "Q326659",
      url: "https://linkedjazz.org/image/square/Howard_McGhee.png",
      local: "atlas/portraits/Q457.webp"
    },
    Q46: {
      wikidata: "Q1691660",
      url: "https://linkedjazz.org/image/square/Joe_Williams_(jazz_singer).png",
      local: "atlas/portraits/Q46.webp"
    },
    Q469: {
      wikidata: "Q1239006",
      url: "https://linkedjazz.org/image/square/Don_Byas.png",
      local: "atlas/portraits/Q469.webp"
    },
    Q47: {
      wikidata: "Q299208",
      url: "https://linkedjazz.org/image/square/Sonny_Rollins.png",
      local: "atlas/portraits/Q47.webp"
    },
    Q471: {
      wikidata: "Q504337",
      url: "https://linkedjazz.org/image/square/Andrew_Cyrille.png",
      local: "atlas/portraits/Q471.webp"
    },
    Q493: {
      wikidata: "Q105875",
      url: "https://linkedjazz.org/image/square/Herbie_Hancock.png",
      local: "atlas/portraits/Q493.webp"
    },
    Q52: {
      wikidata: "Q354508",
      url: "https://linkedjazz.org/image/square/Sun_Ra.png",
      local: "atlas/portraits/Q52.webp"
    },
    Q55: {
      wikidata: "Q498729",
      url: "https://linkedjazz.org/image/square/Kenny_Dorham.png",
      local: "atlas/portraits/Q55.webp"
    },
    Q566: {
      wikidata: "Q240371",
      url: "https://linkedjazz.org/image/square/Carmen_McRae.png",
      local: "atlas/portraits/Q566.webp"
    },
    Q606: {
      wikidata: "Q15454366",
      url: "https://linkedjazz.org/image/square/Peg_Leg_Bates.png"
    },
    Q61: {
      wikidata: "Q229322",
      url: "https://linkedjazz.org/image/square/Dinah_Washington.png",
      local: "atlas/portraits/Q61.webp"
    },
    Q63: {
      wikidata: "Q1101297",
      url: "https://linkedjazz.org/image/square/Clifford_Jordan.png",
      local: "atlas/portraits/Q63.webp"
    },
    Q656: {
      wikidata: "Q274181",
      url: "https://linkedjazz.org/image/square/Mamie_Smith.png",
      local: "atlas/portraits/Q656.webp"
    },
    Q657: {
      wikidata: "Q1371187",
      url: "https://linkedjazz.org/image/square/Randy_Weston.png",
      local: "atlas/portraits/Q657.webp"
    },
    Q66: {
      wikidata: "Q175899",
      url: "https://linkedjazz.org/image/square/Max_Roach.png",
      local: "atlas/portraits/Q66.webp"
    },
    Q660: {
      wikidata: "Q706697",
      url: "https://linkedjazz.org/image/square/Red_Garland.png",
      local: "atlas/portraits/Q660.webp"
    },
    Q661: {
      wikidata: "Q500464",
      url: "https://linkedjazz.org/image/square/Art_Farmer.png",
      local: "atlas/portraits/Q661.webp"
    },
    Q696: {
      wikidata: "Q2526615",
      url: "https://linkedjazz.org/image/square/Vincent_Herring.png",
      local: "atlas/portraits/Q696.webp"
    },
    Q71: {
      wikidata: "Q109612",
      url: "https://linkedjazz.org/image/square/Thelonious_Monk.png",
      local: "atlas/portraits/Q71.webp"
    },
    Q731: {
      wikidata: "Q735795",
      url: "https://linkedjazz.org/image/square/Roy_Campanella.png",
      local: "atlas/portraits/Q731.webp"
    },
    Q736: {
      wikidata: "Q716851",
      url: "https://linkedjazz.org/image/square/Richard_Davis_(double_bassist).png",
      local: "atlas/portraits/Q736.webp"
    },
    Q738: {
      wikidata: "Q2570294",
      url: "https://linkedjazz.org/image/square/Wild_Bill_Davis.png",
      local: "atlas/portraits/Q738.webp"
    },
    Q74: {
      wikidata: "Q1064070",
      url: "https://linkedjazz.org/image/square/Charles_Davis_(saxophonist).png",
      local: "atlas/portraits/Q74.webp"
    },
    Q745: {
      wikidata: "Q221048",
      url: "https://linkedjazz.org/image/square/Jackie_Robinson.png",
      local: "atlas/portraits/Q745.webp"
    },
    Q746: {
      wikidata: "Q273206",
      url: "https://linkedjazz.org/image/square/Joe_Louis.png",
      local: "atlas/portraits/Q746.webp"
    },
    Q777: {
      wikidata: "Q110477",
      url: "https://linkedjazz.org/image/square/Cannonball_Adderley.png",
      local: "atlas/portraits/Q777.webp"
    },
    Q789: {
      wikidata: "Q340063",
      url: "https://linkedjazz.org/image/square/Wilbur_Ware.png",
      local: "atlas/portraits/Q789.webp"
    },
    Q8: {
      wikidata: "Q470617",
      url: "https://linkedjazz.org/image/square/Pharoah_Sanders.png",
      local: "atlas/portraits/Q8.webp"
    },
    Q81: {
      wikidata: "Q20858255",
      url: "https://linkedjazz.org/image/square/Teddy_Reig.png",
      local: "atlas/portraits/Q81.webp"
    },
    Q873: {
      wikidata: "Q448896",
      url: "https://linkedjazz.org/image/square/Joanne_Brackeen.png",
      local: "atlas/portraits/Q873.webp"
    },
    Q9: {
      wikidata: "Q563275",
      url: "https://linkedjazz.org/image/square/Gigi_Gryce.png",
      local: "atlas/portraits/Q9.webp"
    },
    Q90: {
      wikidata: "Q107432",
      url: "https://linkedjazz.org/image/square/Charles_Mingus.png",
      local: "atlas/portraits/Q90.webp"
    },
    Q918: {
      wikidata: "Q1689415",
      url: "https://linkedjazz.org/image/square/Jimmy_Owens_(musician).png",
      local: "atlas/portraits/Q918.webp"
    },
    Q921: {
      wikidata: "Q541659",
      url: "https://linkedjazz.org/image/square/Paul_Chambers.png",
      local: "atlas/portraits/Q921.webp"
    },
    Q924: {
      wikidata: "Q499491",
      url: "https://linkedjazz.org/image/square/Jimmy_Cobb.png",
      local: "atlas/portraits/Q924.webp"
    },
    Q934: {
      wikidata: "Q346762",
      url: "https://linkedjazz.org/image/square/Freddie_Hubbard.png",
      local: "atlas/portraits/Q934.webp"
    },
    Q935: {
      wikidata: "Q2390289",
      url: "https://linkedjazz.org/image/square/Talib_Kibwe.png",
      local: "atlas/portraits/Q935.webp"
    },
    Q944: {
      wikidata: "Q534842",
      url: "https://linkedjazz.org/image/square/Hank_Mobley.png",
      local: "atlas/portraits/Q944.webp"
    },
    Q95: {
      wikidata: "Q276609",
      url: "https://linkedjazz.org/image/square/Big_Maybelle.png",
      local: "atlas/portraits/Q95.webp"
    },
    Q954: {
      wikidata: "Q489233",
      url: "https://linkedjazz.org/image/square/Kenny_Barron.png",
      local: "atlas/portraits/Q954.webp"
    },
    Q959: {
      wikidata: "Q362564",
      url: "https://linkedjazz.org/image/square/Lee_Morgan.png",
      local: "atlas/portraits/Q959.webp"
    },
    Q968: {
      wikidata: "Q582740",
      url: "https://linkedjazz.org/image/square/Houston_Person.png",
      local: "atlas/portraits/Q968.webp"
    }
  };

  // atlas/portraits.js
  var lookups = /* @__PURE__ */ new Map();
  function commonsImage(filename) {
    return {
      commonsFile: filename,
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(filename) + "?width=300"
    };
  }
  function lookupMissing(ids) {
    const pending = [...new Set(ids)].filter(
      (id) => /^Q[1-9]\d*$/.test(id) && !lookups.has(id)
    );
    if (!pending.length) return;
    const url = new URL("https://www.wikidata.org/w/api.php");
    url.search = new URLSearchParams({
      action: "wbgetentities",
      props: "claims",
      ids: pending.join("|"),
      format: "json",
      origin: "*"
    });
    const query = fetch(url, {
      headers: {
        "Api-User-Agent": "BrooklynJazzAtlas/1.0 (Linking Lost Jazz Shrines)"
      }
    }).then((r) => {
      if (!r.ok) throw Error("Portrait lookup unavailable");
      return r.json();
    });
    for (const id of pending) {
      lookups.set(
        id,
        query.then((data) => {
          const names = (data.entities?.[id]?.claims?.P18 || []).filter((c) => c.rank !== "deprecated").sort(
            (a, b) => Number(b.rank === "preferred") - Number(a.rank === "preferred")
          ).map((c) => c.mainsnak?.datavalue?.value).filter((x) => typeof x === "string");
          return names.length ? commonsImage(names[0]) : null;
        }).catch(() => {
          lookups.delete(id);
          return null;
        })
      );
    }
  }
  function attach(row, photo, qid) {
    if (!photo?.url || !row.isConnected) return;
    const image = document.createElement("img");
    image.className = "portrait";
    image.loading = "lazy";
    image.decoding = "async";
    image.alt = "";
    const credit = document.createElement("a");
    credit.className = "photo-credit";
    credit.target = "_blank";
    credit.rel = "noreferrer";
    if (photo.commonsFile) {
      credit.href = "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(photo.commonsFile);
      credit.title = photo.commonsFile + " \u2014 author and license on Wikimedia Commons";
      credit.textContent = "Commons photo credit";
    } else {
      credit.href = "https://base.semlab.io/wiki/Item:" + qid;
      credit.title = "Semantic Lab image record";
      credit.textContent = "Semantic Lab photo";
    }
    image.onerror = () => {
      if (photo.local && image.getAttribute("src") === photo.local) {
        image.src = photo.url;
        return;
      }
      image.remove();
      credit.remove();
      if (photo.wikidata && !photo.commonsFile) {
        lookupMissing([photo.wikidata]);
        lookups.get(photo.wikidata)?.then((next) => attach(row, next, qid));
      }
    };
    row.prepend(image);
    row.lastElementChild.append(credit);
    image.src = photo.local || photo.url;
  }
  function populatePortraits(list) {
    const rows = [...list.querySelectorAll("[data-person]")];
    const pending = rows.map((r) => people_portraits_default[r.dataset.person]).filter((p) => p?.wikidata && !p.url);
    lookupMissing(pending.map((p) => p.wikidata));
    for (const row of rows) {
      const qid = row.dataset.person, p = people_portraits_default[qid];
      if (p?.url) attach(row, p, qid);
      else if (p?.wikidata)
        lookups.get(p.wikidata)?.then((photo) => attach(row, photo, qid));
    }
  }

  // atlas/marker-renderer.js
  var maxPitch = Math.acos(1 / Math.sqrt(3));
  var bearing = -Math.PI / 5;
  var srgb = (c) => 255 * (c <= 31308e-7 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);
  function solid(sides, height, pointed, quiet, vivid) {
    const vertices = [], faces = [];
    for (let i = 0; i < sides; i++) {
      const angle = i * 2 * Math.PI / sides + Math.PI / 4;
      vertices.push(Math.cos(angle), 0, Math.sin(angle));
    }
    if (pointed) vertices.push(0, height, 0);
    else
      for (let i = 0; i < sides; i++)
        vertices.push(vertices[i * 3], height, vertices[i * 3 + 2]);
    for (let i = 0; i < sides; i++) {
      const next = (i + 1) % sides;
      if (pointed) faces.push(i, next, sides, 0);
      else faces.push(i, next, sides + i, 0, next, sides + next, sides + i, 0);
    }
    for (let i = 1; i < sides - 1; i++) {
      faces.push(0, i, i + 1, 0);
      if (!pointed) faces.push(sides, sides + i + 1, sides + i, 0);
    }
    return { vertices, faces, quiet, vivid };
  }
  var shapeKeys = { shrine: "cylinder", org: "cube", inst: "pyramid" };
  var shapes = {
    cylinder: solid(24, 1.1, false, [204, 116, 100], [207, 102, 87]),
    cube: solid(4, Math.SQRT2, false, [65, 93, 119], [61, 103, 143]),
    pyramid: solid(3, 1.55, true, [99, 84, 119], [116, 90, 145])
  };
  function rasterizeMarker(key, pitch, yaw, resolution = 164, tone = 1) {
    const mesh = shapes[key];
    const { vertices, faces } = mesh;
    const color = mesh.quiet.map((value, i) => {
      const ch = (value + (mesh.vivid[i] - value) * tone) / 255;
      return ((ch + 0.055) / 1.055) ** 2.4;
    });
    const modelAngle = yaw + Math.PI / 3, c = Math.cos(modelAngle), s = Math.sin(modelAngle);
    const p = Math.cos(pitch), q = Math.sin(pitch), projected = new Float64Array(vertices.length);
    let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i], y = vertices[i + 1], z = vertices[i + 2], forward = s * x + c * z;
      const u = c * x - s * z, v = p * forward - q * y;
      projected[i] = u;
      projected[i + 1] = v;
      projected[i + 2] = q * forward + p * y;
      left = Math.min(left, u);
      right = Math.max(right, u);
      top = Math.min(top, v);
      bottom = Math.max(bottom, v);
    }
    const scale = (resolution - 2) / Math.max(right - left, bottom - top);
    const width = Math.ceil((right - left) * scale) + 2, height = Math.ceil((bottom - top) * scale) + 2;
    for (let i = 0; i < projected.length; i += 3) {
      projected[i] = (projected[i] - left) * scale + 1;
      projected[i + 1] = (projected[i + 1] - top) * scale + 1;
    }
    const pixels = new Uint8ClampedArray(width * height * 4), depths = new Float32Array(width * height).fill(-Infinity);
    for (let face = 0; face < faces.length; face += 4) {
      const a = faces[face] * 3, b = faces[face + 1] * 3, d = faces[face + 2] * 3;
      const x = projected[a], y = projected[a + 1], abx = projected[b] - x, aby = projected[b + 1] - y, acx = projected[d] - x, acy = projected[d + 1] - y, area = abx * acy - aby * acx;
      if (Math.abs(area) < 1e-5) continue;
      const nx1 = vertices[b] - vertices[a], ny1 = vertices[b + 1] - vertices[a + 1], nz1 = vertices[b + 2] - vertices[a + 2], nx2 = vertices[d] - vertices[a], ny2 = vertices[d + 1] - vertices[a + 1], nz2 = vertices[d + 2] - vertices[a + 2];
      const nx = ny1 * nz2 - nz1 * ny2, ny = nz1 * nx2 - nx1 * nz2, nz = nx1 * ny2 - ny1 * nx2;
      const normalScale = (area < 0 ? 1 : -1) / Math.hypot(nx, ny, nz);
      const light = 0.57 + 0.48 * Math.max(0, (-0.4 * nx + 0.81 * ny + 0.42 * nz) * normalScale);
      const [r, g, blue] = color.map((ch) => srgb(ch * light));
      const maxX = Math.ceil(Math.max(x, x + abx, x + acx)), maxY = Math.ceil(Math.max(y, y + aby, y + acy));
      for (let iy = Math.floor(Math.min(y, y + aby, y + acy)); iy < maxY; iy++) {
        for (let ix = Math.floor(Math.min(x, x + abx, x + acx)); ix < maxX; ix++) {
          const dx = ix + 0.5 - x, dy = iy + 0.5 - y, u = (dx * acy - dy * acx) / area, v = (abx * dy - aby * dx) / area;
          if (u < 0 || v < 0 || u + v > 1) continue;
          const depth = projected[a + 2] + u * (projected[b + 2] - projected[a + 2]) + v * (projected[d + 2] - projected[a + 2]);
          const j = iy * width + ix;
          if (depth < depths[j]) continue;
          depths[j] = depth;
          pixels[4 * j] = r;
          pixels[4 * j + 1] = g;
          pixels[4 * j + 2] = blue;
          pixels[4 * j + 3] = 255;
        }
      }
    }
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const j = y * width + x;
        if (!Number.isFinite(depths[j])) continue;
        if (x < 2 || x >= width - 2 || y < 2 || y >= height - 2 || depths[j - 2] === -Infinity || depths[j + 2] === -Infinity || depths[j - 2 * width] === -Infinity || depths[j + 2 * width] === -Infinity) {
          pixels[4 * j] = 255;
          pixels[4 * j + 1] = 250;
          pixels[4 * j + 2] = 235;
        }
      }
    }
    return {
      width,
      height,
      pixels,
      anchorX: 1 - left * scale,
      anchorY: 1 - top * scale
    };
  }
  var stamps = /* @__PURE__ */ new Map();
  function markerStamp(key, pitch, tone = 1) {
    const step = Math.round(pitch / maxPitch * 36), toneStep = Math.round(tone * 12), cacheKey = key + "/" + step + "/" + toneStep;
    if (!stamps.has(cacheKey)) {
      const result = rasterizeMarker(
        key,
        maxPitch * step / 36,
        bearing * step / 36,
        112,
        toneStep / 12
      );
      const canvas = document.createElement("canvas");
      canvas.width = result.width;
      canvas.height = result.height;
      const ctx = canvas.getContext("2d"), data = ctx.createImageData(result.width, result.height);
      data.data.set(result.pixels);
      ctx.putImageData(data, 0, 0);
      stamps.set(cacheKey, { ...result, canvas });
      if (stamps.size > 32) stamps.delete(stamps.keys().next().value);
    }
    return stamps.get(cacheKey);
  }
  var thumbnails = /* @__PURE__ */ new Map();
  function markerIconUrl(key) {
    if (!thumbnails.has(key))
      thumbnails.set(
        key,
        markerStamp(key, maxPitch).canvas.toDataURL("image/png")
      );
    return thumbnails.get(key);
  }

  // atlas/music-notes.js
  var scoreBands = [
    { minimum: 0, label: "Under 35", notes: "\u266A" },
    { minimum: 35, label: "35 to <65", notes: "\u266A\u266A" },
    { minimum: 65, label: "65\u2013100", notes: "\u266A\u266A\u266A" }
  ];
  function scoreNotes(score) {
    return scoreBands.reduce(
      (glyphs, band) => score >= band.minimum ? band.notes : glyphs,
      "\u266A"
    );
  }
  var MusicNotes = class {
    constructor(layer) {
      this.layer = layer;
      this.points = [];
      this.active = /* @__PURE__ */ new Map();
      this.first = true;
      this.motion = matchMedia("(prefers-reduced-motion: reduce)");
      this.motion.addEventListener?.("change", () => this.schedule());
      document.addEventListener("visibilitychange", () => this.schedule());
      layer.addEventListener("animationend", ({ target }) => {
        if (this.active.has(target)) this.remove(target);
      });
    }
    remove(note) {
      note.remove();
      this.active.delete(note);
    }
    update(points, { w, h }, zoom) {
      this.overview = zoom < 1;
      this.limit = this.overview ? 1 : 2;
      this.points = points.filter(
        ({ tip }) => tip.x > 6 && tip.x < w - 12 && tip.y > 24 && tip.y < h
      );
      for (const [note, source] of this.active) {
        const point = this.points.find(
          (p) => p.site === source.site && p.location === source.location
        );
        if (point && this.active.size <= this.limit) this.position(note, point);
        else this.remove(note);
      }
      this.schedule();
    }
    position(note, point) {
      note.style.left = point.tip.x + "px";
      note.style.top = point.tip.y + "px";
      note.classList.toggle("distant", this.overview);
    }
    play(point) {
      if (!point || this.motion.matches || document.hidden) return;
      const phrase = document.createElement("span");
      phrase.textContent = scoreNotes(point.site.connectedness.score);
      this.position(phrase, point);
      this.active.set(phrase, point);
      this.layer.append(phrase);
    }
    inspect(point) {
      if (point?.site === this.inspected?.site && point?.location === this.inspected?.location)
        return;
      this.inspected = point;
      if (!point) return;
      for (const phrase of this.active.keys()) this.remove(phrase);
      this.play(point);
    }
    schedule() {
      if (document.hidden || this.motion.matches || !this.points.length) {
        clearTimeout(this.timer);
        this.timer = null;
        for (const note of this.active.keys()) this.remove(note);
        this.first = true;
        return;
      }
      if (this.timer) return;
      const delay = this.first ? 650 : (1150 + Math.random() * 900) * (this.overview ? 1.5 : 1);
      this.timer = setTimeout(() => {
        this.timer = null;
        if (!document.hidden && !this.motion.matches) {
          this.emit();
          this.first = false;
        }
        this.schedule();
      }, delay);
    }
    emit() {
      if (this.active.size >= this.limit) return;
      const singing = new Set(Array.from(this.active.values(), (p) => p.site));
      if (singing.has(this.inspected?.site)) return;
      const weights = this.points.map(
        ({ site }) => singing.has(site) ? 0 : 0.015 + 0.75 * (site.connectedness.score / 100) ** 2.5
      );
      const total = weights.reduce((sum, weight) => sum + weight, 0);
      let draw = Math.random() * (this.first ? total : Math.max(1, total));
      for (let i = 0; i < weights.length; i++) {
        draw -= weights[i];
        if (draw >= 0) continue;
        this.play(this.points[i]);
        return;
      }
    }
  };

  // data/brooklyn_jazz_sites.json
  var brooklyn_jazz_sites_default = {
    title: "Brooklyn jazz sites in the Linking Lost Jazz Shrines interviews",
    about: "One entry per place on the Semantic Lab wikibase that is in the Linking Lost Jazz Shrines project and located in Brooklyn. Summaries, people and active dates were written by a model reading only the project's interview passages and wikibase statements for that place; they are a reading of the oral histories, not checked against outside sources. Every person and place carries its wikibase QID. address, latitude and longitude give the place's first location; locations lists them all where a place has more than one. Coordinates are decimal degrees (WGS84).",
    connectedness: "How connected a place is inside the project's data, as a rough measure of importance. score runs 0 to 100 and rank 1 is the most connected. Half the score comes from linked_entities (distinct people, groups, organizations and places joined to it by a statement, in either direction), a quarter from interviews (how many different interviews mention it) and a quarter from mentions (how many transcript blocks tag it). Each part is on a log scale against the largest value among these places. linked_people counts the people and music groups among the linked entities; statements counts the linking statements. Only links inside the Lost Jazz Shrines project are counted.",
    generated: "2026-11-24",
    project: "Q18807",
    count: 118,
    sites: [
      {
        qid: "Q18827",
        name: "78 Club",
        url: "https://base.semlab.io/wiki/Item:Q18827",
        address: "78 Herkimer Place, Brooklyn, NY",
        latitude: 40.678843,
        longitude: -73.94983,
        locations: [
          {
            address: "78 Herkimer Place, Brooklyn, NY",
            latitude: 40.678843,
            longitude: -73.94983,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Club 78"
        ],
        connectedness: {
          score: 51.6,
          rank: 30,
          linked_entities: 10,
          linked_people: 10,
          statements: 14,
          interviews: 2,
          mentions: 18
        },
        summary: "Club 78 was a small upstairs club at 78 Herkimer Place, owned by a man the speakers know only as Scottie, who as far as Randy Weston recalls also brought in the talent. Weston describes an intimate room with a stage, reached by a flight of stairs, and a lot of good music; he went there to hear Cecil Payne while still working in the restaurant business, before he imagined becoming a musician, and says he played there himself. The story both of his tellings return to is the night Charlie Parker was due to play: Teddy Reig brought him in too intoxicated to perform, and a circle of neighborhood elders, including the sculptor Jimmy Gittens and Fred Braithwaite Sr., with Max Roach also furious, threatened to throw Reig down the stairs. Reggie Workman confirms the address, and Ed Stoute notes the building is now a church. The interviewers rank it among Brooklyn's top jazz rooms.",
        people: [
          {
            qid: "Q22961",
            name: "Scottie",
            role: "owner and booker"
          },
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "listener, later performed there"
          },
          {
            qid: "Q18931",
            name: "Cecil Payne",
            role: "performed there"
          },
          {
            qid: "Q13",
            name: "Charlie Parker",
            role: "booked to play one night"
          },
          {
            qid: "Q66",
            name: "Max Roach",
            role: "present the night Parker came"
          },
          {
            qid: "Q81",
            name: "Teddy Reig",
            role: "brought Parker to the club"
          },
          {
            qid: "Q18965",
            name: "Jimmy Gittins",
            role: "elder who arranged Parker's appearance"
          },
          {
            qid: "Q18947",
            name: "Fred Braithwaite, Sr.",
            role: "elder who arranged Parker's appearance"
          }
        ],
        active: {
          from: "1947",
          to: "1953",
          basis: "Wikibase years 1947 to 1953, also on Weston's and Roach's statements; the passages answering the interviewer's question about its years are not in the dossier.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1947"
          ],
          end_year: [
            "1953"
          ],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 18,
          interviews: 2,
          statements_with_people: 14
        }
      },
      {
        qid: "Q22772",
        name: "Amsterdam News",
        url: "https://base.semlab.io/wiki/Item:Q22772",
        address: "Marcus Garvey Boulevard & Fulton Street, Brooklyn, NY",
        latitude: 40.679734,
        longitude: -73.937412,
        locations: [
          {
            address: "Marcus Garvey Boulevard & Fulton Street, Brooklyn, NY",
            latitude: 40.679734,
            longitude: -73.937412,
            coordinates_from: "geocoded from the address"
          },
          {
            address: "2340 Frederick Douglass Boulevard, New York, NY 10027",
            latitude: 40.810501,
            longitude: -73.950546,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [
          "NY Amsterdam News",
          "The Amsterdam News"
        ],
        connectedness: {
          score: 42.9,
          rank: 43,
          linked_entities: 5,
          linked_people: 5,
          statements: 6,
          interviews: 3,
          mentions: 8
        },
        summary: "The Amsterdam News was a newspaper, and the interviews treat its Brooklyn side as part of the neighborhood's music life. Randy Weston says the Brooklyn Amsterdam News sat in the Holland Studio building at what is now Marcus Garvey Boulevard and Fulton Street, a building full of studios where kids came for lessons; his second piano teacher, Professor Atwell, worked there. He uses it to make a larger point: Brooklyn families had little money, yet nearly every home had a piano and every child studied some art. Weston names Tommy Watkins as the paper's editor. Willard Jenkins asks whether the clubs showed up in its nightlife columns and whether readers could learn who was playing from it, and Weston agrees they could. Harold Valle mentions something that came out of the paper in 1949.",
        people: [
          {
            qid: "Q23161",
            name: "Tommy Watkins",
            role: "editor"
          }
        ],
        active: {
          from: "1909",
          to: null,
          basis: "Wikibase start year 1909 and no end year; Valle cites the paper in 1949, and Weston recalls its Brooklyn office from his youth.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1909"
          ],
          end_year: [],
          wikidata: [
            "Q1140177"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 8,
          interviews: 3,
          statements_with_people: 6
        }
      },
      {
        qid: "Q18828",
        name: "Arlington Inn",
        url: "https://base.semlab.io/wiki/Item:Q18828",
        address: "Fulton Street & Arlington Place, Brooklyn, NY",
        latitude: 40.680487,
        longitude: -73.951206,
        locations: [
          {
            address: "Fulton Street & Arlington Place, Brooklyn, NY",
            latitude: 40.680487,
            longitude: -73.951206,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 64.2,
          rank: 16,
          linked_entities: 14,
          linked_people: 14,
          statements: 20,
          interviews: 9,
          mentions: 17
        },
        summary: "The Arlington Inn was a bar with live music at the corner of Fulton Street and Arlington Place, one of a cluster of clubs on Fulton that people could walk between. Dickie Habersham-Bey counts it among five or six bars on one block, around the corner from the Baby Grand. Alma Carroll spent a great deal of time there as a young woman, at hours her mother would not have approved of, and remembers organist Wild Bill Davis playing where passers-by could see him through the window. Jo Ann Cheatham saw Thelonious Monk there in her late teens and says he earned his living in Brooklyn after losing his Manhattan cabaret card. Others rate it lower: Jimmy Morton says it had good local players but no big names, Ed Stoute calls it King Curtis's hangout, and Sam Pinn grades it a C. The site is now a laundromat.",
        people: [
          {
            qid: "Q738",
            name: "Wild Bill Davis",
            role: "played organ there, 1954"
          },
          {
            qid: "Q71",
            name: "Thelonious Monk",
            role: "performed there"
          },
          {
            qid: "Q325",
            name: "King Curtis",
            role: "regular; his hangout"
          },
          {
            qid: "Q18915",
            name: "Alma Carroll",
            role: "regular as a young woman, from 1954"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "saw Monk there in late teens"
          },
          {
            qid: "Q18955",
            name: "Harold Valle",
            role: "frequented it"
          },
          {
            qid: "Q18966",
            name: "Jimmy Morton",
            role: "attended performances"
          },
          {
            qid: "Q18980",
            name: "Kwesi Mensah Wali",
            role: "went there as a teenager"
          }
        ],
        active: {
          from: "1950s",
          to: "1960s",
          basis: "No wikibase years; Carroll's visits are dated 1954, and Mensah Wali says it was still active when he finished high school around 1959-60.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548903"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 17,
          interviews: 9,
          statements_with_people: 20
        }
      },
      {
        qid: "Q18829",
        name: "Art Theater",
        url: "https://base.semlab.io/wiki/Item:Q18829",
        address: "956-958 Marcy Avenue, Brooklyn, NY 11216",
        latitude: 40.680612,
        longitude: -73.946299,
        locations: [
          {
            address: "956-958 Marcy Avenue, Brooklyn, NY 11216",
            latitude: 40.680612,
            longitude: -73.946299,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "The Art"
        ],
        connectedness: {
          score: 36.5,
          rank: 51,
          linked_entities: 4,
          linked_people: 4,
          statements: 6,
          interviews: 2,
          mentions: 5
        },
        summary: "The Art Theater, which Randy Weston places on Marcy Avenue at Fulton Street, was one of the black theaters Weston lists alongside the Regent on Gates Avenue. Musicians played there, often at benefits, though Weston notes a theater left little stage space and the house kept only an upright piano. His sharpest memory is of a benefit he played after inviting his mother and father: a man named Arif, of a group called the Jolly Stompers, jumped up mid-show, bottles began flying at the stage, and Weston had to leap down from the piano and lead his parents out the exit. He says gangs met there and that fights at dances were routine, so players learned to look for the exits first. Jimmy Morton adds that the building is now a church.",
        people: [
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "played piano there at benefits"
          },
          {
            qid: "Q22242",
            name: "Frank Edward Weston",
            role: "attended his son's performance"
          },
          {
            qid: "Q23210",
            name: "Arif",
            role: "Jolly Stompers member; started a fight there"
          }
        ],
        active: {
          from: "1940s",
          to: "1940s",
          basis: "No years given; Weston tells it among memories of his early big-band and dance years, and Morton says it is now a church.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q45032067"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 5,
          interviews: 2,
          statements_with_people: 6
        }
      },
      {
        qid: "Q18830",
        name: "Baby Grand Brooklyn",
        url: "https://base.semlab.io/wiki/Item:Q18830",
        address: "1274 Fulton Street, Brooklyn, NY 11216",
        latitude: 40.68021,
        longitude: -73.949864,
        locations: [
          {
            address: "1274 Fulton Street, Brooklyn, NY 11216",
            latitude: 40.68021,
            longitude: -73.949864,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Brooklyn Baby Grand",
          "Club Baby Grand",
          "Club Baby Grand Brooklyn"
        ],
        connectedness: {
          score: 81,
          rank: 5,
          linked_entities: 27,
          linked_people: 26,
          statements: 40,
          interviews: 17,
          mentions: 46
        },
        summary: "The Brooklyn Baby Grand stood on Fulton Street at Nostrand Avenue, on the same side as the Blue Coronet but further along, and Ed Stoute says it had the same owners as the Harlem Baby Grand and Town Hill. Stoute, hired around 1960 after leaving the Army, describes a front bar and a back room with three shows a night: a comic MC, a shake dancer, a rock or blues singer and a jazz singer, backed by his trio; having to learn each new show's tunes is where he says he really developed. Randy Weston and Lem Davis, the alto player who was also the musicians' barber, ran Sunday concerts there from 1954 as Jazz At Its Best, including a one-dollar show with Max Roach and Betty Carter. Alma Carroll remembers Big Maybelle, Joe Carroll and a brief go-go period, and Donald Sangster calls King Curtis a regular. Stoute says top groups drew limousines until the 1960s riot left it dead.",
        people: [
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "co-presented Sunday concerts from 1954"
          },
          {
            qid: "Q22775",
            name: "Lem Davis",
            role: "co-presented Jazz At Its Best concerts"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "pianist for the shows around 1960"
          },
          {
            qid: "Q66",
            name: "Max Roach",
            role: "performed at a 1954 concert"
          },
          {
            qid: "Q102",
            name: "Betty Carter",
            role: "performed at a 1954 concert"
          },
          {
            qid: "Q95",
            name: "Big Maybelle",
            role: "performed there"
          },
          {
            qid: "Q325",
            name: "King Curtis",
            role: "regular"
          },
          {
            qid: "Q18969",
            name: "Joe Carroll",
            role: "performed there"
          },
          {
            qid: "Q22448",
            name: "Jimmy Chisholm",
            role: "performed there around 1960"
          },
          {
            qid: "Q18915",
            name: "Alma Carroll",
            role: "regular at the bar"
          },
          {
            qid: "Q22590",
            name: "Dayton Selby",
            role: "regular"
          },
          {
            qid: "Q18955",
            name: "Harold Valle",
            role: "went there for jazz"
          },
          {
            qid: "Q19032",
            name: "Viola Plummer",
            role: "regular"
          },
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "regular"
          },
          {
            qid: "Q19021",
            name: "Sam Pinn",
            role: "went there"
          }
        ],
        active: {
          from: "1954",
          to: "1960s",
          basis: "Weston dates his concerts there from 1954 and cannot recall an end; Stoute played there around 1960 and says the 1960s riot killed it.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1954"
          ],
          end_year: [],
          wikidata: [
            "Q65548908"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 46,
          interviews: 17,
          statements_with_people: 38
        }
      },
      {
        qid: "Q18832",
        name: "Ben's",
        url: "https://base.semlab.io/wiki/Item:Q18832",
        address: "Lexington Avenue & Sumner Avenue, Brooklyn, NY",
        latitude: 40.689037,
        longitude: -73.939257,
        locations: [
          {
            address: "Lexington Avenue & Sumner Avenue, Brooklyn, NY",
            latitude: 40.689037,
            longitude: -73.939257,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 31.8,
          rank: 65,
          linked_entities: 3,
          linked_people: 3,
          statements: 4,
          interviews: 2,
          mentions: 3
        },
        summary: "Ben's was a bar at Lexington and Sumner Avenue (now Marcus Garvey Boulevard) that Ed Stoute remembers from gigs with the baritone saxophonist Harold Cumberbatch, who hired him for jobs around this part of Brooklyn. Stoute calls it a joint, and what he recalls most is its battered upright piano, so far gone that many keys were missing. He mentions it in the same breath as Paul's on DeKalb, which he thought the nicer room. Willard Jenkins raised it in a group interview, and Stoute was the only one to answer; nobody else describes the music or the crowd.",
        people: [
          {
            qid: "Q18953",
            name: "Harold Cumberbatch",
            role: "led gigs there"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "played there with Cumberbatch"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "Neither the wikibase nor Stoute gives any year or period for Ben's.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68931953"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 3,
          interviews: 2,
          statements_with_people: 4
        }
      },
      {
        qid: "Q21366",
        name: "Berry Brothers (music venue)",
        url: "https://base.semlab.io/wiki/Item:Q21366",
        address: "Fulton Street, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Fulton Street, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Berry Brothers"
        ],
        connectedness: {
          score: 54.7,
          rank: 26,
          linked_entities: 9,
          linked_people: 9,
          statements: 10,
          interviews: 6,
          mentions: 11
        },
        summary: "The Berry Brothers was a club on Fulton Street, which Ed Stoute and Jimmy Morton place across from where Boys & Girls High School now stands. Alma Carroll ties it to the Berry Brothers act, calling it their club and saying it closed just before she arrived in Brooklyn. Stoute remembers it as a place that had music off and on, part of a Fulton and Nostrand scene that also took in the Tip Top, the Continental and the Moulin Rouge. Bob Myers recalls passing the Berry Brothers' couple of bars on his walk down Nostrand toward Fulton, and Jitu Weusi, speaking of the early 1960s, lists it among the neighborhood bars that only occasionally booked a player and were later ruined by the drug trade. Asked who played there, Reggie Workman answered only that some of everybody did. Speakers disagree on whether it had already closed.",
        people: [
          {
            qid: "Q18824",
            name: "Berry Brothers (music group)",
            role: "the act whose club it was"
          }
        ],
        active: {
          from: null,
          to: "1960s",
          basis: "Wikibase gives an end year of 1954 and Carroll says it closed, but Weusi and Myers describe it still operating as a bar around the early 1960s.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [
            "1954"
          ],
          wikidata: [
            "Q69086592"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 11,
          interviews: 6,
          statements_with_people: 10
        }
      },
      {
        qid: "Q22253",
        name: "Bickford's Restaurant",
        url: "https://base.semlab.io/wiki/Item:Q22253",
        address: "Fulton Street & Nostrand Avenue, Brooklyn, NY",
        latitude: 40.680397,
        longitude: -73.949543,
        locations: [
          {
            address: "Fulton Street & Nostrand Avenue, Brooklyn, NY",
            latitude: 40.680397,
            longitude: -73.949543,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Bickford's",
          "Bicksford Luncheonette",
          "Bicksford's Luncheonette"
        ],
        connectedness: {
          score: 35,
          rank: 54,
          linked_entities: 5,
          linked_people: 5,
          statements: 5,
          interviews: 2,
          mentions: 2
        },
        summary: "Bickford's was a small luncheonette near the corner of Fulton Street and Nostrand Avenue, the kind of place Joe Long compared to Chock Full O' Nuts. It mattered as an after-hours meeting point: Bob Myers remembers that musicians went there once their gigs ended to talk about the music, and that as a youngster he wanted to be part of that talk. He ties the corner to the 1962 Freddie Hubbard record named for Fulton and Nostrand, though he is only fairly sure the luncheonette was Bickford's. Joe Long places it two doors from Birdel's record shop on Fulton Street. In the mid-1950s he and Wally Roker, bass singer of the Heartbeats, met there for coffee and tea, and Roker urged him to ask Birdel's for a job, which became Long's start in the music business. The two speakers place it slightly differently.",
        people: [
          {
            qid: "Q22613",
            name: "Wally Roker",
            role: "regular, met Joe Long there 1956-57"
          },
          {
            qid: "Q18971",
            name: "Joe Long",
            role: "regular in the mid-1950s"
          },
          {
            qid: "Q934",
            name: "Freddie Hubbard",
            role: "musician who gathered there after gigs"
          },
          {
            qid: "Q1365",
            name: "Cedar Walton",
            role: "musician tied to the corner's 1962 record"
          }
        ],
        active: {
          from: "1950s",
          to: "1960s",
          basis: "No wikibase years; Joe Long's visits are dated 1956-57 on the wikibase, and Bob Myers links the corner to a 1962 record.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548900"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 5
        }
      },
      {
        qid: "Q22587",
        name: "Billie Holiday Theatre",
        url: "https://base.semlab.io/wiki/Item:Q22587",
        address: "1368 Fulton Street Brooklyn, NY 11216",
        latitude: 40.680034,
        longitude: -73.945642,
        locations: [
          {
            address: "1368 Fulton Street Brooklyn, NY 11216",
            latitude: 40.680034,
            longitude: -73.945642,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 99,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "The Billie Holiday Theatre, at 1368 Fulton Street, appears only once: Alma Carroll laments that people standing outside Sista's Place could not even say where it was.",
        people: [],
        active: {
          from: "1972",
          to: null,
          basis: "Wikibase start year only; the single passage gives no dates.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1972"
          ],
          end_year: [],
          wikidata: [
            "Q20880563"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q22601",
        name: "Birdel's Records",
        url: "https://base.semlab.io/wiki/Item:Q22601",
        address: "Fulton Street & Throop Avenue, Brooklyn, NY",
        latitude: 40.679895,
        longitude: -73.940326,
        locations: [
          {
            address: "Fulton Street & Throop Avenue, Brooklyn, NY",
            latitude: 40.679895,
            longitude: -73.940326,
            coordinates_from: "geocoded from the address"
          },
          {
            address: "Fulton Street & Nostrand Avenue, Brooklyn, NY",
            latitude: 40.680397,
            longitude: -73.949543,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [
          "Birdel's"
        ],
        connectedness: {
          score: 56.5,
          rank: 25,
          linked_entities: 17,
          linked_people: 15,
          statements: 32,
          interviews: 1,
          mentions: 29
        },
        summary: "Birdel's was a record shop, and Joe Long tells its whole history in his interview. He first bought 78s at its location on Fulton Street and Throop, next to the Brooklyn Apollo. Later it moved to Fulton and Nostrand, where vocal groups making records would drop by. Wally Roker of the Heartbeats talked Long into asking owners Benjamin and Bertie Steiner for work. Long started part time around 1956-57. After riots and pressure from activists, the Steiners sold the store to Long in 1968. He grew it to three stores and later built an international vinyl trade, known for the saying that if Birdel's lacked a record, no one had it. Jazz musicians such as Miles Davis, Wilbur Ware and Randy Weston came in while playing the Blue Coronet. Later Biggie dug through old 45s in its basement. Long marked 50 years in 2007 before closing.",
        people: [
          {
            qid: "Q18971",
            name: "Joe Long",
            role: "clerk from 1956, owner from 1968"
          },
          {
            qid: "Q22606",
            name: "Benjamin Steiner",
            role: "owner until selling in 1968"
          },
          {
            qid: "Q22607",
            name: "Bertie Steiner",
            role: "co-ran the store with her husband"
          },
          {
            qid: "Q22613",
            name: "Wally Roker",
            role: "customer who got Long hired"
          },
          {
            qid: "Q22600",
            name: "The Heartbeats",
            role: "vocal group who visited the store"
          },
          {
            qid: "Q41",
            name: "Miles Davis",
            role: "customer while playing the Coronet"
          },
          {
            qid: "Q789",
            name: "Wilbur Ware",
            role: "customer"
          },
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "customer"
          },
          {
            qid: "Q18931",
            name: "Cecil Payne",
            role: "customer"
          },
          {
            qid: "Q921",
            name: "Paul Chambers",
            role: "customer"
          },
          {
            qid: "Q22626",
            name: "Notorious B.I.G.",
            role: "customer; listened to 45s in basement"
          },
          {
            qid: "Q22622",
            name: "Jay-Z",
            role: "customer"
          },
          {
            qid: "Q22625",
            name: "Joseph Simmons",
            role: "customer"
          },
          {
            qid: "Q22620",
            name: "Russell Simmons",
            role: "customer"
          },
          {
            qid: "Q22619",
            name: "Rob Base",
            role: "customer"
          }
        ],
        active: {
          from: "1944",
          to: "2011",
          basis: "Wikibase 1944-2011; Long dates his start to 1956-57 and his purchase to 1968, and he marked 50 years in 2007 before closing.",
          confidence: "high"
        },
        wikibase: {
          start_year: [
            "1944"
          ],
          end_year: [
            "2011"
          ],
          wikidata: [
            "Q68944832"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 29,
          interviews: 1,
          statements_with_people: 28
        }
      },
      {
        qid: "Q23435",
        name: "Bishop Loughlin Memorial High School",
        url: "https://base.semlab.io/wiki/Item:Q23435",
        address: null,
        latitude: 40.6869,
        longitude: -73.9692,
        locations: [
          {
            address: null,
            latitude: 40.6869,
            longitude: -73.9692,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "organization",
          "school"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 100,
          linked_entities: 1,
          linked_people: 1,
          statements: 2,
          interviews: 1,
          mentions: 1
        },
        summary: "Bishop Loughlin Memorial High School was a Catholic school in Brooklyn where the singer Vanessa Rubin taught for one year under the Catholic Board. She took the job to pay the rent while music did not, before moving into the public school system. Nothing in the dossier ties the school to jazz performance.",
        people: [
          {
            qid: "Q19031",
            name: "Vanessa Rubin",
            role: "taught there for one year"
          }
        ],
        active: {
          from: "1851",
          to: null,
          basis: "Wikibase start year of 1851; the interview gives no years and no end date.",
          confidence: "low"
        },
        wikibase: {
          start_year: [
            "1851"
          ],
          end_year: [],
          wikidata: [
            "Q4917627"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 2
        }
      },
      {
        qid: "Q21585",
        name: "Black musicians club",
        url: "https://base.semlab.io/wiki/Item:Q21585",
        address: "Schenectady Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Schenectady Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [
          "Black musicians club (Schenectady Ave)",
          "Black union"
        ],
        connectedness: {
          score: 25.3,
          rank: 83,
          linked_entities: 2,
          linked_people: 2,
          statements: 3,
          interviews: 1,
          mentions: 3
        },
        summary: "Randy Weston recalls an upstairs musicians' club on Schenectady Avenue which he agrees was the black union, before Local 802. He says it mattered because young players met older musicians there, and touring big bands spent days off there playing cards. He admits he knows little of its history.",
        people: [
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "went there as a young musician"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No years given; Weston places it only before Local 802 and in his youth.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68943488"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 3,
          interviews: 1,
          statements_with_people: 3
        }
      },
      {
        qid: "Q18837",
        name: "Brooklyn Academy of Music",
        url: "https://base.semlab.io/wiki/Item:Q18837",
        address: "30 Lafayette Avenue",
        latitude: 40.68664,
        longitude: -73.97751,
        locations: [
          {
            address: "30 Lafayette Avenue",
            latitude: 40.68664,
            longitude: -73.97751,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine",
          "venue"
        ],
        also_called: [
          "BAM"
        ],
        connectedness: {
          score: 58.7,
          rank: 21,
          linked_entities: 16,
          linked_people: 14,
          statements: 26,
          interviews: 5,
          mentions: 9
        },
        summary: "The Brooklyn Academy of Music (BAM), on Lafayette Avenue, is remembered in the interviews as a major performing-arts house rather than a club. Alma Carroll did consulting there for Mikki Shepard and, in return, got her husband Joe Carroll booked; she then handed Dizzy Gillespie a contract backstage at the Monterey Jazz Festival, and he headlined a BAM show called Steps in Time with the Copacetics and Peg Leg Bates. At a later BAM show Shepard had the Carrolls reseated so that Eubie Blake sat between them. Bob Myers presented his yearly New Cookers showcase at the BAM Caf\xE9, with the Strickland brothers, Robert Glasper and Kenyatta Beasley. Ed Stoute treats a Sunday evening at BAM as a gig that calls for a suit, and Jo Ann Cheatham saw Maurice Brown there.",
        people: [
          {
            qid: "Q22593",
            name: "Mikki Shepard",
            role: "programmer who booked the Steps in Time show"
          },
          {
            qid: "Q18915",
            name: "Alma Carroll",
            role: "consultant to Mikki Shepard in the 1980s"
          },
          {
            qid: "Q18969",
            name: "Joe Carroll",
            role: "performed in Steps in Time"
          },
          {
            qid: "Q35",
            name: "Dizzy Gillespie",
            role: "headlined Steps in Time"
          },
          {
            qid: "Q22585",
            name: "The Copacetics",
            role: "performed in Steps in Time"
          },
          {
            qid: "Q606",
            name: "Peg Leg Bates",
            role: "performed in Steps in Time"
          },
          {
            qid: "Q18923",
            name: "Bob Myers",
            role: "presented the New Cookers at BAM Caf\xE9"
          },
          {
            qid: "Q22270",
            name: "Marcus Strickland",
            role: "played the New Cookers showcase"
          },
          {
            qid: "Q22271",
            name: "E.J. Strickland",
            role: "played the New Cookers showcase"
          },
          {
            qid: "Q22259",
            name: "Robert Glasper",
            role: "played the New Cookers showcase"
          },
          {
            qid: "Q18978",
            name: "Kenyatta Beasley",
            role: "played the New Cookers showcase"
          },
          {
            qid: "Q347",
            name: "Eubie Blake",
            role: "attended a show there"
          },
          {
            qid: "Q18990",
            name: "Maurice Brown",
            role: "performed there"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "performed there"
          }
        ],
        active: {
          from: "1908",
          to: "present",
          basis: "Wikibase start year 1908 with no end; Carroll's shows fall in the 1980s and Myers describes his BAM showcases as current around 2010.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1908"
          ],
          end_year: [],
          wikidata: [
            "Q72912"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 9,
          interviews: 5,
          statements_with_people: 24
        }
      },
      {
        qid: "Q18838",
        name: "Brooklyn Apollo",
        url: "https://base.semlab.io/wiki/Item:Q18838",
        address: "1531 Fulton Street, Brooklyn, NY 11216",
        latitude: 40.679873,
        longitude: -73.9398,
        locations: [
          {
            address: "1531 Fulton Street, Brooklyn, NY 11216",
            latitude: 40.679873,
            longitude: -73.9398,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Brooklyn Apollo Theater"
        ],
        connectedness: {
          score: 53,
          rank: 27,
          linked_entities: 9,
          linked_people: 9,
          statements: 10,
          interviews: 5,
          mentions: 10
        },
        summary: "The Brooklyn Apollo was a theater on Fulton Street that mixed films with live acts. Randy Weston recalls cowboy pictures alongside Bessie Smith and Duke Ellington shorts and an amateur night, and saw it as a sign of a strong black community. Jitu Weusi describes its bills as a step below the Manhattan Apollo, with southern blues acts such as Bobby Bland especially popular, and remembers Mighty Sparrow there when he was a kid. Joe Long bought records at Birdel's, which stood next door around 1956-57. Speakers place it at Throop and Fulton; Jo Ann Cheatham corrects Tulivu-Donna Cumberbatch, who wondered whether a theater at Bedford and Arlington Place, where her father took her to afternoon jazz shows, had been the Apollo.",
        people: [
          {
            qid: "Q22234",
            name: "Bobby Bland",
            role: "performed there"
          },
          {
            qid: "Q22236",
            name: "Mighty Sparrow",
            role: "performed there"
          },
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "attended shows as a teenager"
          },
          {
            qid: "Q18971",
            name: "Joe Long",
            role: "frequented; shopped at record store next door"
          }
        ],
        active: {
          from: "1950s",
          to: "1950s",
          basis: "No wikibase years; only Joe Long's 1956-57 mention of Birdel's beside it fixes a time, and others place it in their childhoods.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q45032061"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 10,
          interviews: 5,
          statements_with_people: 10
        }
      },
      {
        qid: "Q22559",
        name: "Brooklyn Children's Museum",
        url: "https://base.semlab.io/wiki/Item:Q22559",
        address: "Bedford Avenue & Eastern Parkway, Brooklyn, NY",
        latitude: 40.67017,
        longitude: -73.955255,
        locations: [
          {
            address: "Bedford Avenue & Eastern Parkway, Brooklyn, NY",
            latitude: 40.67017,
            longitude: -73.955255,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 27,
          rank: 81,
          linked_entities: 2,
          linked_people: 1,
          statements: 2,
          interviews: 2,
          mentions: 2
        },
        summary: "The Brooklyn Children's Museum enters the interviews through the building at Bedford Avenue and Eastern Parkway. Reggie Workman says the museum used a former auto showroom there as a temporary home while its own building was rebuilt, that musicians gradually became involved with it, and that once the museum moved out the vacated showroom became an African American cultural center, The Muse, keeping the museum's menagerie and a planetarium. He credits Bill Barron, Chris White and Rudy Collins with proposing its music program. Bob Myers describes it slightly differently, calling The Muse itself the museum's temporary home from 1968 to 1977, with jazz taught as part of children's workshops and Workman among the instructors.",
        people: [
          {
            qid: "Q1403",
            name: "Reggie Workman",
            role: "musician involved with its programs"
          }
        ],
        active: {
          from: "1899",
          to: "present",
          basis: "Wikibase start year 1899; Workman says the museum has been rebuilt and still exists; Myers dates the Muse arrangement 1968 to 1977.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1899"
          ],
          end_year: [],
          wikidata: [
            "Q4974780"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 1
        }
      },
      {
        qid: "Q22323",
        name: "Brooklyn College",
        url: "https://base.semlab.io/wiki/Item:Q22323",
        address: "2900 Bedford Ave, Brooklyn, NY, 11210",
        latitude: 40.631111,
        longitude: -73.9525,
        locations: [
          {
            address: "2900 Bedford Ave, Brooklyn, NY, 11210",
            latitude: 40.631111,
            longitude: -73.9525,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine",
          "institution"
        ],
        also_called: [
          "Brooklyn College of City University of New York"
        ],
        connectedness: {
          score: 17,
          rank: 101,
          linked_entities: 1,
          linked_people: 0,
          statements: 2,
          interviews: 1,
          mentions: 1
        },
        summary: "Brooklyn College appears in the interviews only once: Bob Myers mentions a free concert there celebrating the music of Cal Massey, sponsored by the Hitchcock Institute for Studies in American Music, as part of the Black Brooklyn Renaissance and the Brooklyn Jazz Festival. The wikibase also records people educated at or employed by the college.",
        people: [
          {
            qid: "Q28298",
            name: "Bernard Kahn",
            role: "educated there"
          },
          {
            qid: "Q35756",
            name: "Frances Alenikoff",
            role: "educated there"
          },
          {
            qid: "Q30067",
            name: "Alan M. Zamore",
            role: "employed there"
          },
          {
            qid: "Q31523",
            name: "Robert Fanelli",
            role: "employed there"
          }
        ],
        active: {
          from: "1930",
          to: "present",
          basis: "Wikibase start year of 1930; Myers speaks of an upcoming event there, so it was still active at the interview.",
          confidence: "high"
        },
        wikibase: {
          start_year: [
            "1930"
          ],
          end_year: [],
          wikidata: [
            "Q371625"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 4
        }
      },
      {
        qid: "Q22274",
        name: "Brooklyn Conservatory of Music",
        url: "https://base.semlab.io/wiki/Item:Q22274",
        address: null,
        latitude: 40.6758,
        longitude: -73.9747,
        locations: [
          {
            address: null,
            latitude: 40.6758,
            longitude: -73.9747,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 30.3,
          rank: 70,
          linked_entities: 3,
          linked_people: 3,
          statements: 5,
          interviews: 2,
          mentions: 2
        },
        summary: "The Brooklyn Conservatory of Music was a music school. Two people interviewed taught there. Bob Myers says Enos Payne had run its jazz department, and that after Payne left he needed a place to give piano and vocal lessons. That led Myers and Payne to start a Tuesday vocal jam session at Myers's club. Wade Barnes taught at the Conservatory in the early 1980s. He says he and faculty members first took a band into the schools from there, the start of the school program he later ran with Cecil Payne.",
        people: [
          {
            qid: "Q18935",
            name: "Enos Payne",
            role: "ran the jazz department"
          },
          {
            qid: "Q19034",
            name: "Wade E. Barnes",
            role: "instructor, 1980-1983"
          }
        ],
        active: {
          from: "1897",
          to: null,
          basis: "Wikibase start year 1897 and no end year; Barnes taught there in the early 1980s.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1897"
          ],
          end_year: [],
          wikidata: [
            "Q4974733"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 5
        }
      },
      {
        qid: "Q1109",
        name: "Brooklyn Historical Society",
        url: "https://base.semlab.io/wiki/Item:Q1109",
        address: null,
        latitude: 40.694761,
        longitude: -73.992794,
        locations: [
          {
            address: null,
            latitude: 40.694761,
            longitude: -73.992794,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 30.3,
          rank: 71,
          linked_entities: 3,
          linked_people: 2,
          statements: 4,
          interviews: 2,
          mentions: 2
        },
        summary: "The Brooklyn Historical Society appears only as a host for jazz events. Bob Myers says the Brooklyn Jazz Hall of Fame induction, honoring Ulysses Slaughter and Kenny Barron, was to be held there as part of the Black Brooklyn Renaissance program, and Randy Weston recalls hoping it would set up a permanent jazz exhibition.",
        people: [
          {
            qid: "Q22325",
            name: "Ulysses Slaughter",
            role: "Hall of Fame inductee honored there"
          },
          {
            qid: "Q954",
            name: "Kenny Barron",
            role: "Hall of Fame inductee honored there"
          },
          {
            qid: "Q18923",
            name: "Bob Myers",
            role: "organized the induction ceremony there"
          }
        ],
        active: {
          from: "1863",
          to: "present",
          basis: "Wikibase start year 1863 with no end year; Myers describes the induction ceremony as upcoming around 2010.",
          confidence: "low"
        },
        wikibase: {
          start_year: [
            "1863"
          ],
          end_year: [],
          wikidata: [
            "Q4974851"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 2
        }
      },
      {
        qid: "Q19188",
        name: "Brooklyn Museum",
        url: "https://base.semlab.io/wiki/Item:Q19188",
        address: "200 Eastern Parkway, Brooklyn, NY 11238",
        latitude: 40.671306,
        longitude: -73.96375,
        locations: [
          {
            address: "200 Eastern Parkway, Brooklyn, NY 11238",
            latitude: 40.671306,
            longitude: -73.96375,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine",
          "museum",
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 102,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "The Brooklyn Museum appears in the interviews only once. Harold Valle lists its First Saturdays jazz programs among current jazz in Brooklyn. Its wikibase statements are about visual artists who exhibited there, not about music.",
        people: [
          {
            qid: "Q28395",
            name: "Harriet  Casdin-Silver",
            role: "exhibited work there, 1968"
          },
          {
            qid: "Q28266",
            name: "Gary  Rieveschl",
            role: "exhibited work there"
          },
          {
            qid: "Q28185",
            name: "Gertrude  Barnstone",
            role: "exhibited work there"
          },
          {
            qid: "Q30733",
            name: "Leah Nolan",
            role: "exhibited work there"
          },
          {
            qid: "Q28202",
            name: "Sheila Berkley",
            role: "exhibited work there"
          },
          {
            qid: "Q28225",
            name: "Sheldon Cohen",
            role: "exhibited work there"
          },
          {
            qid: "Q36010",
            name: "Lynda Benglis",
            role: "educated there"
          }
        ],
        active: {
          from: "1897",
          to: "present",
          basis: "Wikibase start year 1897 with no end; Valle speaks of its First Saturdays in the present tense.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1897"
          ],
          end_year: [],
          wikidata: [
            "Q632682"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 8
        }
      },
      {
        qid: "Q18839",
        name: "Brooklyn Palace",
        url: "https://base.semlab.io/wiki/Item:Q18839",
        address: "Atlantic Avenue & Bedford Avenue, Brooklyn, NY",
        latitude: 40.678624,
        longitude: -73.952964,
        locations: [
          {
            address: "Atlantic Avenue & Bedford Avenue, Brooklyn, NY",
            latitude: 40.678624,
            longitude: -73.952964,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "The Brooklyn Palace"
        ],
        connectedness: {
          score: 37.3,
          rank: 50,
          linked_entities: 4,
          linked_people: 4,
          statements: 4,
          interviews: 2,
          mentions: 6
        },
        summary: "The Brooklyn Palace was a dance hall on Atlantic Avenue that Randy Weston pairs with the Sonya Ballroom as one of the two places people went to dance. Donald Sangster says the big bands played there a lot, and he owns a flier, given to him by Leonard Gaskin, from when Andy Kirk played there in 1937-38. The speakers disagree on the corner: Sangster puts it at Atlantic and Bedford, while Ed Stoute says Atlantic and St. Marks. When the interviewer asks what happened there, the dossier gives no answer.",
        people: [
          {
            qid: "Q304",
            name: "Andy Kirk",
            role: "played there with his band, 1937-38"
          }
        ],
        active: {
          from: "1930s",
          to: null,
          basis: "No wikibase years; only Sangster's flier dating Andy Kirk's engagement to 1937-38.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 6,
          interviews: 2,
          statements_with_people: 4
        }
      },
      {
        qid: "Q22479",
        name: "Brooklyn Paramount Theater",
        url: "https://base.semlab.io/wiki/Item:Q22479",
        address: "385 Flatbush Avenue Extension, Brooklyn, NY 11201",
        latitude: 40.6903,
        longitude: -73.9809,
        locations: [
          {
            address: "385 Flatbush Avenue Extension, Brooklyn, NY 11201",
            latitude: 40.6903,
            longitude: -73.9809,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Brooklyn Paramount Theater, LIU Brooklyn"
        ],
        connectedness: {
          score: 38.3,
          rank: 49,
          linked_entities: 6,
          linked_people: 6,
          statements: 6,
          interviews: 2,
          mentions: 3
        },
        summary: "The Brooklyn Paramount was a downtown theater, now part of Long Island University, that presented jazz concerts and revues alongside the dances and big bands Randy Weston recalls. Harold Valle saw Dinah Washington there in a blond wig and remembers her joke about crossing an open manhole on Flatbush Avenue; he locates the theater on DeKalb Avenue, while the wikibase gives the Flatbush Avenue Extension. Donald Sangster first heard Charlie Parker there, on a bill with Stan Kenton's band. For these listeners it was where big-name touring acts could be seen in Brooklyn.",
        people: [
          {
            qid: "Q13",
            name: "Charlie Parker",
            role: "performed there"
          },
          {
            qid: "Q136",
            name: "Stan Kenton",
            role: "his band performed there"
          },
          {
            qid: "Q61",
            name: "Dinah Washington",
            role: "performed in a revue there"
          },
          {
            qid: "Q18936",
            name: "Donald Sangster",
            role: "attended; first heard Parker there"
          },
          {
            qid: "Q18955",
            name: "Harold Valle",
            role: "attended jazz concerts there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "Neither the wikibase nor the speakers give years for the concerts described.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q7135369"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 3,
          interviews: 2,
          statements_with_people: 6
        }
      },
      {
        qid: "Q22273",
        name: "Brooklyn Public Library",
        url: "https://base.semlab.io/wiki/Item:Q22273",
        address: "10 Grand Army Plaza, Brooklyn, NY 11238",
        latitude: 40.6725,
        longitude: -73.968333,
        locations: [
          {
            address: "10 Grand Army Plaza, Brooklyn, NY 11238",
            latitude: 40.6725,
            longitude: -73.968333,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "BPL"
        ],
        connectedness: {
          score: 32.9,
          rank: 60,
          linked_entities: 4,
          linked_people: 3,
          statements: 5,
          interviews: 2,
          mentions: 2
        },
        summary: "In the interviews, the Brooklyn Public Library's Grand Army Plaza branch is a concert venue for present-day jazz. Bob Myers says it has hosted a good Latin-jazz presentation for the past three years as part of the Central Brooklyn Jazz Consortium calendar. Wade Barnes says his Brooklyn Repertory Ensemble big band plays a concert there once a year.",
        people: [
          {
            qid: "Q18812",
            name: "Brooklyn Repertory Ensemble",
            role: "big band giving yearly concerts"
          },
          {
            qid: "Q19034",
            name: "Wade E. Barnes",
            role: "leads band that performs there"
          }
        ],
        active: {
          from: "1896",
          to: "present",
          basis: "Wikibase start year 1896 with no end; Myers and Barnes describe its concerts as ongoing.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1896"
          ],
          end_year: [],
          wikidata: [
            "Q1198796"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 3
        }
      },
      {
        qid: "Q22536",
        name: "Brooklyn Technical High School",
        url: "https://base.semlab.io/wiki/Item:Q22536",
        address: null,
        latitude: 40.688889,
        longitude: -73.976944,
        locations: [
          {
            address: null,
            latitude: 40.688889,
            longitude: -73.976944,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "organization",
          "school"
        ],
        also_called: [
          "Brooklyn Tech"
        ],
        connectedness: {
          score: 17,
          rank: 103,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "Brooklyn Tech is a high school; singer Keisha St. Joan recalls singing spirituals there for a Harriet Tubman tribute, the one Brooklyn school she remembers performing at.",
        people: [
          {
            qid: "Q18976",
            name: "Keisha St. Joan",
            role: "sang spirituals at a tribute"
          }
        ],
        active: {
          from: "1922",
          to: "present",
          basis: "Wikibase start year 1922 and no end year; the interview gives no date for St. Joan's performance.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1922"
          ],
          end_year: [],
          wikidata: [
            "Q2737843"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q18840",
        name: "Brownies",
        url: "https://base.semlab.io/wiki/Item:Q18840",
        address: "St. Marks Avenue between Nostrand Avenue and New York Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "St. Marks Avenue between Nostrand Avenue and New York Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          },
          {
            address: "Bergen Street, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          },
          {
            address: "Nostrand Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Brownie's"
        ],
        connectedness: {
          score: 48.9,
          rank: 36,
          linked_entities: 6,
          linked_people: 6,
          statements: 8,
          interviews: 5,
          mentions: 10
        },
        summary: "Brownies was a neighborhood bar with music in Crown Heights or Bed-Stuy, remembered mostly as a name in lists of the many clubs within walking distance. Speakers cannot agree on where it stood: Ed Stoute puts it on St. Marks Avenue between Nostrand and New York Avenues, Jo Ann Cheatham says Nostrand in one interview and a little side corner of Bergen Street in another, adding that a bar may still be there. Kwesi Mensah Wali counts it among the clubs of his teenage neighborhood, and Sam Pinn names it among the places where his interest in jazz grew. Cheatham went there in the mid-1990s with the drummer and dancer Scoby Stroman, as part of her own entrance into the jazz scene. Tulivu-Donna Cumberbatch had only heard of it. No one describes the room or who played there.",
        people: [
          {
            qid: "Q19021",
            name: "Sam Pinn",
            role: "frequented it"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "visited in the 1990s"
          },
          {
            qid: "Q19022",
            name: "Scoby Stroman",
            role: "took Cheatham there"
          },
          {
            qid: "Q18980",
            name: "Kwesi Mensah Wali",
            role: "knew it as a teenager"
          }
        ],
        active: {
          from: null,
          to: "1990s",
          basis: "No wikibase years; Cheatham went there with Stroman in the mid-1990s, and Mensah Wali and Pinn place it in their youth without years.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548909"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 10,
          interviews: 5,
          statements_with_people: 8
        }
      },
      {
        qid: "Q22614",
        name: "Browning's Hide Away",
        url: "https://base.semlab.io/wiki/Item:Q22614",
        address: "St. Marks Avenue & Nostrand Avenue, Brooklyn, NY",
        latitude: 40.6752,
        longitude: -73.950015,
        locations: [
          {
            address: "St. Marks Avenue & Nostrand Avenue, Brooklyn, NY",
            latitude: 40.6752,
            longitude: -73.950015,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 104,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "Browning's Hide Away was a spot at St. Marks and Nostrand Avenue. Joe Long names it next to the Blue Coronet as a place where jazz musicians hung out and played, but gives no further detail.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and no date in the single passage.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q18842",
        name: "Carroll Bar",
        url: "https://base.semlab.io/wiki/Item:Q18842",
        address: "Fulton Street between Verona Place and Nostrand Avenue, Brooklyn, NY",
        latitude: 40.680349,
        longitude: -73.948638,
        locations: [
          {
            address: "Fulton Street between Verona Place and Nostrand Avenue, Brooklyn, NY",
            latitude: 40.680349,
            longitude: -73.948638,
            coordinates_from: "midpoint of two geocoded corners"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 34.4,
          rank: 56,
          linked_entities: 4,
          linked_people: 4,
          statements: 5,
          interviews: 2,
          mentions: 3
        },
        summary: "The Carroll Bar was a small joint on Fulton Street between Verona Place and Nostrand Avenue, a little before the Verona Cafe, where Ed Stoute went to hear tenor saxophonist Lucky Emmett and pianist James Sykes. He calls them heavy drinkers but formidable players. What made the room memorable was their trap for visiting horn players: they invited guests to sit in, called a tune like Cherokee, and took it very fast in an unexpected key, B-natural instead of B-flat in one telling, D in another, so the newcomer scuffled through the melody and then sat down. Stoute tells the story in two interviews, and his details on the key differ.",
        people: [
          {
            qid: "Q18988",
            name: "Lucky Emmett",
            role: "tenor saxophonist who played there"
          },
          {
            qid: "Q18958",
            name: "James Sykes",
            role: "pianist who played with Emmett"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "listened there as a young man"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No year is given anywhere; Stoute recalls it only from the time he and his friends were old enough to go to clubs.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68931954"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 3,
          interviews: 2,
          statements_with_people: 5
        }
      },
      {
        qid: "Q22635",
        name: "Carver Theatre",
        url: "https://base.semlab.io/wiki/Item:Q22635",
        address: "1927 Fulton Street, Brooklyn, NY 11233",
        latitude: 40.678835,
        longitude: -73.918878,
        locations: [
          {
            address: "1927 Fulton Street, Brooklyn, NY 11233",
            latitude: 40.678835,
            longitude: -73.918878,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 105,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "The Carver Theatre on Fulton Street comes up only once, when Joe Long names it with the Brevoort as buildings he says the community let slip away for lack of unity.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and no dates in the single passage.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q45032091"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q19684",
        name: "City Lights",
        url: "https://base.semlab.io/wiki/Item:Q19684",
        address: "Seventh Avenue & First Street, Brooklyn, NY",
        latitude: 40.671747,
        longitude: -73.977606,
        locations: [
          {
            address: "Seventh Avenue & First Street, Brooklyn, NY",
            latitude: 40.671747,
            longitude: -73.977606,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 21.7,
          rank: 89,
          linked_entities: 2,
          linked_people: 2,
          statements: 2,
          interviews: 1,
          mentions: 1
        },
        summary: "City Lights was a spot on First Street and Seventh Avenue in Park Slope. Wade Barnes, listing neighborhood venues, recalls that T.K. Blue (Talib Kibwe) used to play there; nothing more is said about it.",
        people: [
          {
            qid: "Q935",
            name: "Talib Kibwe",
            role: "performed there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and the single passage gives no date.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 2
        }
      },
      {
        qid: "Q18844",
        name: "Club 243",
        url: "https://base.semlab.io/wiki/Item:Q18844",
        address: "Flatbush Avenue Extension, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Flatbush Avenue Extension, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 44.1,
          rank: 41,
          linked_entities: 7,
          linked_people: 7,
          statements: 9,
          interviews: 3,
          mentions: 5
        },
        summary: "Club 243 was a jazz club and dance hall on Flatbush Avenue Extension, just before Myrtle Avenue, upstairs over a car dealership. Ed Stoute says Metrotech later bought out the whole property. In his memory it mixed Brooklyn musicians with players from everywhere. He uses it as an example that no Brooklyn venue was ever for local players only. Joe Knight, a small bass player named Eddie Hamilton and Stoute himself all played there. Tulivu-Donna Cumberbatch played there near the end of its run with the Baritone Saxophonists, a group started by John Stevenson and her father, Harold Cumberbatch. She remembers a huge floor that was good for dancing and a good stage. Harold Valle only names it in a list of clubs.",
        people: [
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "performed there"
          },
          {
            qid: "Q18970",
            name: "Joe Knight",
            role: "performed there"
          },
          {
            qid: "Q18940",
            name: "Eddie Hamilton",
            role: "bass player who performed there"
          },
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "performed there near the end"
          },
          {
            qid: "Q18811",
            name: "Baritone Saxophonists",
            role: "group that performed there"
          },
          {
            qid: "Q18953",
            name: "Harold Cumberbatch",
            role: "co-founded Baritone Saxophonists, who played there"
          },
          {
            qid: "Q18973",
            name: "John Stevenson",
            role: "co-founded Baritone Saxophonists, who played there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years, and no speaker dates the club; Valle's mention of the 1980s refers to a different place.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 5,
          interviews: 3,
          statements_with_people: 9
        }
      },
      {
        qid: "Q18847",
        name: "Club La Marchal",
        url: "https://base.semlab.io/wiki/Item:Q18847",
        address: "President Street & Nostrand Avenue, Brooklyn, NY",
        latitude: 40.66808,
        longitude: -73.950674,
        locations: [
          {
            address: "President Street & Nostrand Avenue, Brooklyn, NY",
            latitude: 40.66808,
            longitude: -73.950674,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "La Marchal"
        ],
        connectedness: {
          score: 65.4,
          rank: 14,
          linked_entities: 16,
          linked_people: 15,
          statements: 29,
          interviews: 7,
          mentions: 23
        },
        summary: "Club La Marchal was a small corner club at President Street and Nostrand Avenue. Harold Mabern says a hundred people packed it. It is remembered almost entirely for one event, the live recording known as The Night of the Cookers. Larry Ridley explains that the Club Jest Us, a group of musicians' wives that included Estelle Timmons, Brenda Hubbard and Cedar Walton's wife, rented the room to promote their husbands. Freddie Hubbard put the band together with Lee Morgan, James Spaulding, Mabern, Ridley and Big Black, and Orville O'Brien taped two crowded nights; Rudy Van Gelder later remastered the tapes. Otherwise speakers call it a weekend spot or a supper club with no steady jazz policy; Ed Stoute brought bands in and rated it B-list. Jitu Weusi thought it had come and gone by the early 1960s, though Spaulding dates the recording to 1965. The building is now apartments.",
        people: [
          {
            qid: "Q934",
            name: "Freddie Hubbard",
            role: "led and recorded Night of the Cookers"
          },
          {
            qid: "Q959",
            name: "Lee Morgan",
            role: "performed on the recording"
          },
          {
            qid: "Q18957",
            name: "James Spaulding",
            role: "performed on the recording"
          },
          {
            qid: "Q18954",
            name: "Harold Mabern",
            role: "performed on the recording"
          },
          {
            qid: "Q18981",
            name: "Larry Ridley",
            role: "performed on the recording"
          },
          {
            qid: "Q22694",
            name: 'Daniel "Big Black" Rey',
            role: "performed on the recording"
          },
          {
            qid: "Q19002",
            name: "Orville O'Brien",
            role: "sound engineer who taped the recording"
          },
          {
            qid: "Q22698",
            name: "Estelle Timmons",
            role: "Club Jest Us organizer of the event"
          },
          {
            qid: "Q22697",
            name: "Brenda Hubbard",
            role: "Club Jest Us organizer of the event"
          },
          {
            qid: "Q23430",
            name: "Cedar Walton's wife",
            role: "Club Jest Us organizer of the event"
          },
          {
            qid: "Q23429",
            name: "Lori Samet Davis",
            role: "possibly involved in Club Jest Us"
          },
          {
            qid: "Q19020",
            name: "Rosalind Blair",
            role: "Club Jest Us member behind the concert"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "brought bands in; frequented it"
          },
          {
            qid: "Q18980",
            name: "Kwesi Mensah Wali",
            role: "went there as a young man"
          }
        ],
        active: {
          from: "1950s",
          to: "1960s",
          basis: "No wikibase years; Mensah Wali says it was active around 1959-60, Spaulding dates the recording to 1965, and Weusi thought it gone by the early 1960s.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548894"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 23,
          interviews: 7,
          statements_with_people: 27
        }
      },
      {
        qid: "Q26312",
        name: "Club Monterey",
        url: "https://base.semlab.io/wiki/Item:Q26312",
        address: "Fulton Street & Troy Avenue, Brooklyn, NY",
        latitude: 40.679597,
        longitude: -73.934856,
        locations: [
          {
            address: "Fulton Street & Troy Avenue, Brooklyn, NY",
            latitude: 40.679597,
            longitude: -73.934856,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 26.5,
          rank: 82,
          linked_entities: 2,
          linked_people: 2,
          statements: 4,
          interviews: 1,
          mentions: 4
        },
        summary: "Club Monterey was a bar at Fulton Street and Troy Avenue, across from a housing project and a park, remembered only by Michael Howard. He lists it with the Tip Top, the Blue Coronet and the Gaslight as rooms that had music, as opposed to the marquee rooms such as the Baby Grand on Nostrand and Fulton. He lived not far from it and would drop in for drinks, and his clearest memory is of Arthur Prysock singing there. He cannot recall whether there was a cover charge, saying it varied with the act.",
        people: [
          {
            qid: "Q22302",
            name: "Arthur Prysock",
            role: "sang there"
          },
          {
            qid: "Q18996",
            name: "Michael Howard",
            role: "neighborhood patron, dropped in for drinks"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and Howard gives no dates.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 4,
          interviews: 1,
          statements_with_people: 4
        }
      },
      {
        qid: "Q22272",
        name: "Concord Baptist Church",
        url: "https://base.semlab.io/wiki/Item:Q22272",
        address: "833 Gardner C. Taylor Boulevard, (Formerly Marcy Avenue), Brooklyn, NY 11216",
        latitude: 40.684545,
        longitude: -73.946804,
        locations: [
          {
            address: "833 Gardner C. Taylor Boulevard, (Formerly Marcy Avenue), Brooklyn, NY 11216",
            latitude: 40.684545,
            longitude: -73.946804,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine",
          "organization"
        ],
        also_called: [
          "The Concord Baptist Church of Christ"
        ],
        connectedness: {
          score: 42.6,
          rank: 44,
          linked_entities: 6,
          linked_people: 5,
          statements: 12,
          interviews: 3,
          mentions: 5
        },
        summary: "Concord Baptist Church, on what is now Gardner C. Taylor Boulevard, comes up in the interviews as one of the Black churches that opened its doors to jazz. Bob Myers names it among the congregations in the ecumenical wing of the Central Brooklyn Jazz Consortium, and says the committee approached it first because the music was held in esteem there: its pastor, Rev. Gardner Taylor, saw the Black church as the keeper of the culture and jazz and gospel as branches of one tree. Tulivu-Donna Cumberbatch lists it with St. Phillips, the House of the Lord and Siloam as churches that have hosted jazz presentations. Jimmy Morton adds an older tie: he knew Max Roach from the time Roach played in the band at Concord, early in his Brooklyn start. The interviews describe its role rather than any particular concert.",
        people: [
          {
            qid: "Q23356",
            name: "Reverend Gardner Taylor",
            role: "pastor; supported jazz at the church"
          },
          {
            qid: "Q66",
            name: "Max Roach",
            role: "played in the church band early on"
          }
        ],
        active: {
          from: null,
          to: "present",
          basis: "No founding years given; Myers and Cumberbatch describe it as a current Consortium member and jazz host at interview time.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q106359438"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 5,
          interviews: 3,
          statements_with_people: 7
        }
      },
      {
        qid: "Q18849",
        name: "Crescent Lounge",
        url: "https://base.semlab.io/wiki/Item:Q18849",
        address: "Fulton Street & Reid Avenue, Brooklyn, NY",
        latitude: 40.679284,
        longitude: -73.929067,
        locations: [
          {
            address: "Fulton Street & Reid Avenue, Brooklyn, NY",
            latitude: 40.679284,
            longitude: -73.929067,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 36.1,
          rank: 52,
          linked_entities: 3,
          linked_people: 3,
          statements: 3,
          interviews: 3,
          mentions: 5
        },
        summary: "The Crescent Lounge, at Reid Avenue and Fulton Street, is barely remembered: only Jimmy Morton places it in a list of spots, Randy Weston knows the name but nothing more, and others asked recall nothing.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No dates on the wikibase or in any passage.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 5,
          interviews: 3,
          statements_with_people: 3
        }
      },
      {
        qid: "Q26012",
        name: "Erasmus Hall High School",
        url: "https://base.semlab.io/wiki/Item:Q26012",
        address: null,
        latitude: 40.649444,
        longitude: -73.957778,
        locations: [
          {
            address: null,
            latitude: 40.649444,
            longitude: -73.957778,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "school"
        ],
        also_called: [
          "Erasmus",
          "Erasmus High School"
        ],
        connectedness: {
          score: 30.3,
          rank: 72,
          linked_entities: 3,
          linked_people: 3,
          statements: 4,
          interviews: 2,
          mentions: 2
        },
        summary: "Erasmus Hall High School is remembered as a school with one of the best music programs in the city. Tulivu-Donna Cumberbatch sang there and says it had four choruses, a boys glee club and a girls cantata; Sam Pinn also went there. The wikibase lists vocal coach John Motley as an instructor, though Cumberbatch ties him to the All-City Chorus.",
        people: [
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "student; sang in its choruses"
          },
          {
            qid: "Q19021",
            name: "Sam Pinn",
            role: "student"
          },
          {
            qid: "Q22250",
            name: "John Motley",
            role: "instructor per the wikibase"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "The dossier gives no years for the school.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q5384959"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 4
        }
      },
      {
        qid: "Q18853",
        name: "Flamingo Lounge",
        url: "https://base.semlab.io/wiki/Item:Q18853",
        address: "Kingston Avenue between Lincoln Place and St. John's Place, Brooklyn, NY",
        latitude: 40.670785,
        longitude: -73.942072,
        locations: [
          {
            address: "Kingston Avenue between Lincoln Place and St. John's Place, Brooklyn, NY",
            latitude: 40.670785,
            longitude: -73.942072,
            coordinates_from: "midpoint of two geocoded corners"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Flamingo Club"
        ],
        connectedness: {
          score: 69.4,
          rank: 12,
          linked_entities: 19,
          linked_people: 19,
          statements: 29,
          interviews: 8,
          mentions: 29
        },
        summary: "The Flamingo Lounge, also called the Flamingo Club, was a bar on Kingston Avenue between Lincoln Place and St. John's Place that Vanessa Rubin calls an organ joint where everybody played. Jitu Weusi puts its high point around 1963 to 1965, with crowds every Friday, Saturday and Sunday. Michael Howard remembers it as an after-hours room where musicians came after other gigs and jammed until 2 or 3 in the morning, especially when Levi ran it and served food; he says the owners drove a Cadillac and were well known. Both Ed Stoute and Jo Ann Cheatham complain about the men's room, which could be smelled from the bar, yet Cheatham says it had the best musicians and that it lasted for ages. Keisha St. Joan sang there often, with Harold Vick, her cousin Percy France and a young Eric Reed. Stoute ranked it B-list.",
        people: [
          {
            qid: "Q26314",
            name: "Levi",
            role: "proprietor who ran it, to 1999"
          },
          {
            qid: "Q1203",
            name: "Joel Leach",
            role: "proprietor"
          },
          {
            qid: "Q18976",
            name: "Keisha St. Joan",
            role: "sang there regularly"
          },
          {
            qid: "Q22238",
            name: "Harold Vick",
            role: "worked there with St. Joan"
          },
          {
            qid: "Q22519",
            name: "Percy France",
            role: "worked there with St. Joan"
          },
          {
            qid: "Q22512",
            name: "Eric Ree",
            role: "played for St. Joan there"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "played there"
          },
          {
            qid: "Q18979",
            name: "Kiane Zawadi",
            role: "played there"
          },
          {
            qid: "Q18937",
            name: "Doug Carn",
            role: "played organ there"
          },
          {
            qid: "Q22285",
            name: "Greg Bandy",
            role: "played there a lot"
          },
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "performed there with John Orr"
          },
          {
            qid: "Q18972",
            name: "John Orr",
            role: "performed there"
          },
          {
            qid: "Q19028",
            name: "Torrie McCartney",
            role: "sang there"
          },
          {
            qid: "Q19022",
            name: "Scoby Stroman",
            role: "regular; brought Cheatham there"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "regular in the 1990s"
          },
          {
            qid: "Q18996",
            name: "Michael Howard",
            role: "regular at after-hours sessions"
          },
          {
            qid: "Q18955",
            name: "Harold Valle",
            role: "went there"
          }
        ],
        active: {
          from: "1963",
          to: "1990s",
          basis: "Wikibase gives 1963-1965, matching Weusi's high point; but Cheatham went there in the mid-1990s and Levi's tie ends in 1999.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1963"
          ],
          end_year: [
            "1965"
          ],
          wikidata: [
            "Q65548910"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 29,
          interviews: 8,
          statements_with_people: 31
        }
      },
      {
        qid: "Q23455",
        name: "Fort Greene Senior Center",
        url: "https://base.semlab.io/wiki/Item:Q23455",
        address: "966 Fulton Street, Brooklyn, NY",
        latitude: 40.682285,
        longitude: -73.962198,
        locations: [
          {
            address: "966 Fulton Street, Brooklyn, NY",
            latitude: 40.682285,
            longitude: -73.962198,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 38.7,
          rank: 48,
          linked_entities: 5,
          linked_people: 3,
          statements: 8,
          interviews: 3,
          mentions: 3
        },
        summary: "The Fort Greene Senior Center, at 966 Fulton Street near Grand Avenue, is the senior citizens' center that housed the Jazz 966 series. Sam Pinn says Brooklyn CORE, which he chaired in the early 1970s, became its sponsor, and that he long wanted to use its space for jazz the way The East had. Jitu Weusi says Torrie McCartney persuaded Pinn to start Friday shows there in the early 1990s. Michael Howard mentions it only as the site of that series.",
        people: [
          {
            qid: "Q19021",
            name: "Sam Pinn",
            role: "CORE chairman; started jazz there"
          },
          {
            qid: "Q19028",
            name: "Torrie McCartney",
            role: "artistic director of the jazz series"
          }
        ],
        active: {
          from: "1970s",
          to: "present",
          basis: "No wikibase years; Pinn ties CORE's sponsorship to the early 1970s, and the Jazz 966 series held there is described as ongoing.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 3,
          interviews: 3,
          statements_with_people: 3
        }
      },
      {
        qid: "Q22463",
        name: "Fox Theatre",
        url: "https://base.semlab.io/wiki/Item:Q22463",
        address: "20 Flatbush Avenue, Brooklyn, NY 11217",
        latitude: 40.68823,
        longitude: -73.980826,
        locations: [
          {
            address: "20 Flatbush Avenue, Brooklyn, NY 11217",
            latitude: 40.68823,
            longitude: -73.980826,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 33.3,
          rank: 58,
          linked_entities: 4,
          linked_people: 4,
          statements: 5,
          interviews: 1,
          mentions: 5
        },
        summary: "The Fox Theatre on Flatbush Avenue surfaces only briefly, in Randy Weston and Donald Sangster's joint interview, as one of the big downtown theaters where touring bands played. Weston names it in a run of places, and the dossier attaches to it Sangster's memory of first hearing Charlie Parker on a bill with Stan Kenton's band and Weston's note that Alan Freed was there, though it is not certain every remark refers to the Fox. Weston sets these white-run theaters against Brooklyn's own Black theaters, the Regent and the Art, and says Wynton Kelly played at all these places.",
        people: [
          {
            qid: "Q23167",
            name: "Alan Freed",
            role: "presented shows there in the 1950s"
          },
          {
            qid: "Q1098",
            name: "Wynton Kelly",
            role: "performed there"
          }
        ],
        active: {
          from: "1950",
          to: "1970",
          basis: "Wikibase years 1950 to 1970; Alan Freed's statements are dated 1950 to 1959; the passages give no years.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1950"
          ],
          end_year: [
            "1970"
          ],
          wikidata: [
            "Q45032393"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 5,
          interviews: 1,
          statements_with_people: 5
        }
      },
      {
        qid: "Q22464",
        name: "Frankies",
        url: "https://base.semlab.io/wiki/Item:Q22464",
        address: "Fulton Street & Lafayette Avenue, Brooklyn, NY",
        latitude: 40.687035,
        longitude: -73.976245,
        locations: [
          {
            address: "Fulton Street & Lafayette Avenue, Brooklyn, NY",
            latitude: 40.687035,
            longitude: -73.976245,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 25,
          rank: 85,
          linked_entities: 3,
          linked_people: 2,
          statements: 4,
          interviews: 1,
          mentions: 1
        },
        summary: "Frankies was a club at Fulton Street and Lafayette Avenue that Donald Sangster half-remembers (Franks or Frankies). Run by Cain Young's son and then his grandson, it was where Cliff Smalls once took him.",
        people: [],
        active: {
          from: null,
          to: "present",
          basis: "Sangster speaks of the grandson running it now; no start date is given.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 2
        }
      },
      {
        qid: "Q23431",
        name: "Franks",
        url: "https://base.semlab.io/wiki/Item:Q23431",
        address: "346 Sumner Avenue (at Putnam Avenue), Brooklyn, NY",
        latitude: 40.685165,
        longitude: -73.938701,
        locations: [
          {
            address: "346 Sumner Avenue (at Putnam Avenue), Brooklyn, NY",
            latitude: 40.685165,
            longitude: -73.938701,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Frank's"
        ],
        connectedness: {
          score: 32.9,
          rank: 61,
          linked_entities: 4,
          linked_people: 2,
          statements: 9,
          interviews: 2,
          mentions: 2
        },
        summary: "Frank's was Frank Edward Weston's storefront place on Sumner Avenue; Randy Weston gives the number as 346 or 246. It began with a grill in the window for hot dogs and hamburgers and sold everything from pickled pigs feet to sour sop, with Mildred Campbell cooking. Randy, then a supply sergeant, drove his father's car to Brooklyn on weekends loaded with cigarettes, gum and gasoline to keep it going. It grew a counter and tables, and sold ice cream and newspapers. After his father bought 330 Lafayette Avenue in 1946 and opened a restaurant there, Randy took over Sumner Avenue, renamed it Trios and put in a jukebox. Vanessa Rubin sang in a duo with Kim Clarke and Franklin Gordon at a spot right across from a Frank's, which may or may not be this one.",
        people: [
          {
            qid: "Q22242",
            name: "Frank Edward Weston",
            role: "founder and proprietor"
          },
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "helped run it; renamed it Trios"
          }
        ],
        active: {
          from: "1940",
          to: "1946",
          basis: "Wikibase founding dates 1940 to 1949; Randy Weston says it became Trios after his father's 1946 move, matching the proprietor end date 1946.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 5
        }
      },
      {
        qid: "Q23212",
        name: "Holland Studio",
        url: "https://base.semlab.io/wiki/Item:Q23212",
        address: "Marcus Garvey Boulevard & Fulton Street, Brooklyn, NY",
        latitude: 40.679734,
        longitude: -73.937412,
        locations: [
          {
            address: "Marcus Garvey Boulevard & Fulton Street, Brooklyn, NY",
            latitude: 40.679734,
            longitude: -73.937412,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 19.1,
          rank: 95,
          linked_entities: 1,
          linked_people: 1,
          statements: 2,
          interviews: 1,
          mentions: 2
        },
        summary: "Randy Weston calls the Holland Studio, at what is now Marcus Garvey Boulevard and Fulton Street, one of the key places of his youth: a building that housed the Brooklyn Amsterdam News and many studios, including that of his second piano teacher, Professor Atwell, where neighborhood kids came for lessons. He ties it to a Brooklyn where families had little money but every child studied some art.",
        people: [
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "studied piano there as a child"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years; Weston places it in his childhood but gives no year.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 1,
          statements_with_people: 2
        }
      },
      {
        qid: "Q23420",
        name: "House of the Lord Pentecostal",
        url: "https://base.semlab.io/wiki/Item:Q23420",
        address: "415 Atlantic Ave, New York, NY, United States, New York",
        latitude: 40.686773,
        longitude: -73.984277,
        locations: [
          {
            address: "415 Atlantic Ave, New York, NY, United States, New York",
            latitude: 40.686773,
            longitude: -73.984277,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine",
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 106,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "House of the Lord Pentecostal is named by Tulivu-Donna Cumberbatch as one of the Brooklyn churches that have opened their doors to jazz presentations, alongside St. Phillips, Concord Baptist and Siloam Presbyterian. No further detail is given.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years; Cumberbatch speaks of it in the present tense but gives no dates.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q131281921"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q22465",
        name: "It Club",
        url: "https://base.semlab.io/wiki/Item:Q22465",
        address: "Utica Avenue & East New York Avenue, Brooklyn, NY",
        latitude: 40.662758,
        longitude: -73.931644,
        locations: [
          {
            address: "Utica Avenue & East New York Avenue, Brooklyn, NY",
            latitude: 40.662758,
            longitude: -73.931644,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "The It Club"
        ],
        connectedness: {
          score: 31.8,
          rank: 63,
          linked_entities: 5,
          linked_people: 5,
          statements: 6,
          interviews: 1,
          mentions: 2
        },
        summary: "The It Club was a jazz club at East New York Avenue and Utica Avenue, where Donald Sangster says a church now stands. He places it after the late-1940s and early-1950s clubs Randy Weston had been describing. What he remembers most is the smorgasbord, with all kinds of food laid out for patrons. He also remembers that everyone played there, naming saxophonist Hank Mobley, pianist Cedar Walton, drummer Louis Hayes and trumpeter Freddie Hubbard. That one passage is all the interviews say about it.",
        people: [
          {
            qid: "Q944",
            name: "Hank Mobley",
            role: "performed there"
          },
          {
            qid: "Q1365",
            name: "Cedar Walton",
            role: "performed there"
          },
          {
            qid: "Q18986",
            name: "Louis Hayes",
            role: "performed there"
          },
          {
            qid: "Q934",
            name: "Freddie Hubbard",
            role: "performed there"
          },
          {
            qid: "Q18936",
            name: "Donald Sangster",
            role: "went there"
          }
        ],
        active: {
          from: "1954",
          to: "1956",
          basis: "Dated qualifiers on the wikibase statements give 1954-1956; Sangster only says it came later than the late-1940s and early-1950s clubs.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 2,
          interviews: 1,
          statements_with_people: 6
        }
      },
      {
        qid: "Q18857",
        name: "Jazz 966",
        url: "https://base.semlab.io/wiki/Item:Q18857",
        address: "966 Fulton Street, Brooklyn NY 11238",
        latitude: 40.682285,
        longitude: -73.962198,
        locations: [
          {
            address: "966 Fulton Street, Brooklyn NY 11238",
            latitude: 40.682285,
            longitude: -73.962198,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 82.9,
          rank: 4,
          linked_entities: 43,
          linked_people: 36,
          statements: 73,
          interviews: 11,
          mentions: 44
        },
        summary: "Jazz 966 is a Friday-night jazz series run by a committee at the senior center at 966 Fulton Street. Sam Pinn had wanted to bring jazz there in the spirit of The East, and singer Torrie McCartney became his artistic director and brought in the musicians; Bob Cunningham, Bross Townsend and Greg Bandy played the first show. Speakers stress the audience: they dance, first on the top floor and later in the basement, which surprised musicians who thought nobody danced to their music anymore; Etta Jones loved that the crowd sang her lyrics along with her, and Wynton Marsalis packed the room. Harold Valle went from doorman to announcer and recites poems about the artists, and Jo Ann Cheatham was its photographer for years. Later it agreed to keep Fridays while Sista's Place took Saturdays, a step toward the Central Brooklyn Jazz Consortium.",
        people: [
          {
            qid: "Q19021",
            name: "Sam Pinn",
            role: "founder and proprietor"
          },
          {
            qid: "Q19028",
            name: "Torrie McCartney",
            role: "co-founder, artistic director, singer"
          },
          {
            qid: "Q19032",
            name: "Viola Plummer",
            role: "listed as founder; coordinated with Sista's Place"
          },
          {
            qid: "Q18955",
            name: "Harold Valle",
            role: "doorman, then announcer and poet"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "official photographer for several years"
          },
          {
            qid: "Q19022",
            name: "Scoby Stroman",
            role: "regular who brought Cheatham there"
          },
          {
            qid: "Q18922",
            name: "Bob Cunningham",
            role: "played the opening show"
          },
          {
            qid: "Q22286",
            name: "Bross Townsend",
            role: "played the opening show"
          },
          {
            qid: "Q22285",
            name: "Greg Bandy",
            role: "played the opening show"
          },
          {
            qid: "Q18944",
            name: "Etta Jones",
            role: "performed there, a favorite room"
          },
          {
            qid: "Q34",
            name: "Wynton Marsalis",
            role: "performed there to a packed house"
          },
          {
            qid: "Q968",
            name: "Houston Person",
            role: "most frequent big-name performer"
          },
          {
            qid: "Q18976",
            name: "Keisha St. Joan",
            role: "singer who performed there regularly"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "plays there about once a year"
          },
          {
            qid: "Q22455",
            name: "Ed Stoute Jazz Quintet",
            role: "performed there from 2005"
          },
          {
            qid: "Q22962",
            name: "Bill Saxton",
            role: "played in McCartney's group there"
          },
          {
            qid: "Q18931",
            name: "Cecil Payne",
            role: "early performer"
          },
          {
            qid: "Q1580",
            name: "Bill Doggett",
            role: "performed there"
          },
          {
            qid: "Q22938",
            name: "Cliff Lee",
            role: "performed there"
          },
          {
            qid: "Q18979",
            name: "Kiane Zawadi",
            role: "performed there"
          },
          {
            qid: "Q22518",
            name: "Peck Morrison",
            role: "played there with St. Joan"
          },
          {
            qid: "Q22522",
            name: "Stan Whole",
            role: "played there with St. Joan"
          },
          {
            qid: "Q19036",
            name: 'Walter "Baby Sweets" Perkins',
            role: "played there with St. Joan"
          }
        ],
        active: {
          from: "1990",
          to: "present",
          basis: "No wikibase years; Pinn says around 1990 and twenty years running, Weusi says shows began '92-'93, and Jenkins says it still exists.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548897"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 44,
          interviews: 11,
          statements_with_people: 62
        }
      },
      {
        qid: "Q18859",
        name: "K & C Lounge",
        url: "https://base.semlab.io/wiki/Item:Q18859",
        address: "Gates Avenue & Throop Avenue, Brooklyn, NY",
        latitude: 40.687237,
        longitude: -73.941776,
        locations: [
          {
            address: "Gates Avenue & Throop Avenue, Brooklyn, NY",
            latitude: 40.687237,
            longitude: -73.941776,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "KC Lounge"
        ],
        connectedness: {
          score: 40.8,
          rank: 47,
          linked_entities: 4,
          linked_people: 4,
          statements: 6,
          interviews: 3,
          mentions: 8
        },
        summary: "The K & C Lounge, also called the KC Lounge, stood at Gates and Throop Avenues. Ed Stoute describes it as an organ room, one of a set of Brooklyn rooms given over to organ trios, blues and related music, in contrast to clubs he calls strictly jazz such as the Continental and the Moulin Rouge. Randy Weston, raising the name himself in a group interview, says he played there with small groups. Donald Sangster seems to recall the same place as a joint over by Gates Avenue near the police precinct. The speakers offer little beyond this: no owners, no particular nights and no other performers are named.",
        people: [
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "played there with small groups"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "knew it as an organ room"
          }
        ],
        active: {
          from: "1960s",
          to: null,
          basis: "No years given; Stoute mentions it alongside his start at the Baby Grand around 1960, a loose inference only.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 8,
          interviews: 3,
          statements_with_people: 6
        }
      },
      {
        qid: "Q18860",
        name: "Kingston Lounge",
        url: "https://base.semlab.io/wiki/Item:Q18860",
        address: "Kingston Avenue & Bergen Street, Brooklyn, NY",
        latitude: 40.675649,
        longitude: -73.941613,
        locations: [
          {
            address: "Kingston Avenue & Bergen Street, Brooklyn, NY",
            latitude: 40.675649,
            longitude: -73.941613,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 76.1,
          rank: 7,
          linked_entities: 24,
          linked_people: 24,
          statements: 44,
          interviews: 11,
          mentions: 42
        },
        summary: "The Kingston Lounge stood at Kingston Avenue and Bergen Street (Tulivu-Donna Cumberbatch puts it at Kingston and Lincoln Place). Donald Sangster says Cain Young, a real estate man, opened it for the black Dodgers, Jackie Robinson, Roy Campanella and Don Newcombe, who had no club of their own, and that Young's brother-in-law Cliff Smalls was its pianist, backing Billy Eckstine; Carmen McRae sang there often. Jimmy Morton instead calls it Rector Bailey's spot, a class act with class shows. Witnesses recall a bar in the middle of the room and a stage at the back. Randy Weston says everybody played there, himself included with Ernie Henry and Harold Cumberbatch, and that Thelonious Monk, led in through the back door one empty night, first played him Trinkle Tinkle there; he also wrote Salsa Eyes there for a barmaid. Yet Weston also says that by the time he was old enough it was just a bar. Its sign still survived when Weeksville took an interest.",
        people: [
          {
            qid: "Q23171",
            name: "Cain Young",
            role: "owner and founder"
          },
          {
            qid: "Q19012",
            name: "Rector Bailey",
            role: "ran it, per Jimmy Morton"
          },
          {
            qid: "Q23168",
            name: "Cliff Smalls",
            role: "house pianist"
          },
          {
            qid: "Q16",
            name: "Billy Eckstine",
            role: "performed there"
          },
          {
            qid: "Q566",
            name: "Carmen McRae",
            role: "sang there often"
          },
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "played there often; wrote Salsa Eyes there"
          },
          {
            qid: "Q71",
            name: "Thelonious Monk",
            role: "brought there by Weston, played informally"
          },
          {
            qid: "Q18943",
            name: "Ernie Henry",
            role: "played there with Weston"
          },
          {
            qid: "Q18953",
            name: "Harold Cumberbatch",
            role: "played there with Weston"
          },
          {
            qid: "Q22241",
            name: "Sam Gill",
            role: "played there with Weston"
          },
          {
            qid: "Q18",
            name: "Bud Powell",
            role: "performed there"
          },
          {
            qid: "Q745",
            name: "Jackie Robinson",
            role: "regular; club opened for him"
          },
          {
            qid: "Q731",
            name: "Roy Campanella",
            role: "regular"
          },
          {
            qid: "Q23163",
            name: "Don Newcombe",
            role: "regular"
          },
          {
            qid: "Q18966",
            name: "Jimmy Morton",
            role: "audience member"
          },
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "went there"
          },
          {
            qid: "Q19021",
            name: "Sam Pinn",
            role: "saw Bud Powell there"
          }
        ],
        active: {
          from: "1944",
          to: "1953",
          basis: "Wikibase gives 1944 to 1953, but its own statements use 1947 to 1953; Sangster ties the opening to Jackie Robinson; later visits suggest it continued as a bar.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1944"
          ],
          end_year: [
            "1953"
          ],
          wikidata: [
            "Q65548659"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 42,
          interviews: 11,
          statements_with_people: 44
        }
      },
      {
        qid: "Q22240",
        name: "Lincoln Club",
        url: "https://base.semlab.io/wiki/Item:Q22240",
        address: "65 Putnam Avenue",
        latitude: 40.683195,
        longitude: -73.959356,
        locations: [
          {
            address: "65 Putnam Avenue",
            latitude: 40.683195,
            longitude: -73.959356,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Independent Order of Mechanics of the Western Hemisphere",
          "Independent United Order of Mechanics",
          "Mechanics Temple, Independent Order of Mechanics of the Western Hemisphere"
        ],
        connectedness: {
          score: 33.3,
          rank: 59,
          linked_entities: 4,
          linked_people: 4,
          statements: 5,
          interviews: 1,
          mentions: 5
        },
        summary: "The Lincoln Club, at 65 Putnam Avenue and also known by the name of the Independent Order of Mechanics, comes up during Randy Weston's driving tour with Maxine Gordon. Weston says Max Roach had a studio there and that Monk played there, and Jitu Weusi adds that everybody used to be there. Gordon asks whether it was an Elks lodge, and no answer is recorded.",
        people: [
          {
            qid: "Q66",
            name: "Max Roach",
            role: "had a studio there"
          },
          {
            qid: "Q71",
            name: "Thelonious Monk",
            role: "performed there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and the tour passages give no dates.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q14706788"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 5,
          interviews: 1,
          statements_with_people: 5
        }
      },
      {
        qid: "Q18862",
        name: "Loew's Brevoort Theatre",
        url: "https://base.semlab.io/wiki/Item:Q18862",
        address: "1272 Bedford Avenue, Brooklyn, NY 11216",
        latitude: 40.680252,
        longitude: -73.953316,
        locations: [
          {
            address: "1272 Bedford Avenue, Brooklyn, NY 11216",
            latitude: 40.680252,
            longitude: -73.953316,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Brevoort Theater",
          "The Brevoort Theatre"
        ],
        connectedness: {
          score: 56.7,
          rank: 24,
          linked_entities: 14,
          linked_people: 13,
          statements: 18,
          interviews: 4,
          mentions: 11
        },
        summary: "The Brevoort was a theater on Bedford Avenue at Brevoort Place. Ed Stoute says it presented jazz from time to time, mostly small groups, and he played there himself. The booking people remember is a full weekend by Miles Davis's group with John Coltrane, Cannonball Adderley and Wynton Kelly. Stoute recalls no film being shown that time, because Davis was expensive. Jimmy Morton says it also put on rock and roll shows, and he admits slipping in to see Otis Redding. Harold Valle says James Baldwin's play Blues for Mr. Charlie was staged there, and he brought a flier to prove it. Speakers disagree about what became of the building. Stoute says it is a welfare center now, and Tulivu-Donna Cumberbatch says it was the former name of the Slave Theater. Joe Long, however, speaks of the Brevoort and the Slave Theater as separate buildings.",
        people: [
          {
            qid: "Q41",
            name: "Miles Davis",
            role: "performed there a full weekend"
          },
          {
            qid: "Q22428",
            name: "Miles Davis Sextet",
            role: "performed there"
          },
          {
            qid: "Q33",
            name: "John Coltrane",
            role: "performed there with Davis"
          },
          {
            qid: "Q777",
            name: "Cannonball Adderley",
            role: "performed there with Davis"
          },
          {
            qid: "Q1098",
            name: "Wynton Kelly",
            role: "performed there with Davis"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "performed there; saw Davis there"
          },
          {
            qid: "Q19003",
            name: "Otis Redding",
            role: "performed in a rock and roll show"
          },
          {
            qid: "Q18966",
            name: "Jimmy Morton",
            role: "attended shows"
          },
          {
            qid: "Q1834",
            name: "James Baldwin",
            role: "his play was staged there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years, and no speaker gives a year for its jazz or theater use.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q45033588"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 11,
          interviews: 4,
          statements_with_people: 16
        }
      },
      {
        qid: "Q23443",
        name: "Long Island University",
        url: "https://base.semlab.io/wiki/Item:Q23443",
        address: null,
        latitude: 40.697267,
        longitude: -73.981908,
        locations: [
          {
            address: null,
            latitude: 40.697267,
            longitude: -73.981908,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "organization",
          "school"
        ],
        also_called: [
          "LIU"
        ],
        connectedness: {
          score: 28.4,
          rank: 78,
          linked_entities: 2,
          linked_people: 1,
          statements: 5,
          interviews: 2,
          mentions: 3
        },
        summary: "Long Island University, in Brooklyn, figures in the interviews as a school and as a friendly stage. Jitu Weusi studied there, spending the summer of 1961 in summer school to graduate on time and qualify to teach, and graduated in June 1962 before starting as a teacher that September; the wikibase also records him as an instructor there. Ahmed Abdullah recalls that the Collective Black Artists, a coalition of musicians that met at Warren Smith's Manhattan loft and that Jimmy Owens and Reggie Workman drove, had a relationship with LIU and gave performances there, alongside their ties to The East.",
        people: [
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "student, graduated 1962; later instructor"
          },
          {
            qid: "Q18913",
            name: "Ahmed Abdullah",
            role: "performed there with Collective Black Artists"
          }
        ],
        active: {
          from: "1926",
          to: "present",
          basis: "Wikibase start year of 1926; Weusi studied there through 1962 and Abdullah's performances came later; no end is given.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1926"
          ],
          end_year: [],
          wikidata: [
            "Q1783603"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 3,
          interviews: 2,
          statements_with_people: 3
        }
      },
      {
        qid: "Q18863",
        name: "Lucky Spot",
        url: "https://base.semlab.io/wiki/Item:Q18863",
        address: "307 Grand Avenue, Brooklyn, NY",
        latitude: 40.686856,
        longitude: -73.962296,
        locations: [
          {
            address: "307 Grand Avenue, Brooklyn, NY",
            latitude: 40.686856,
            longitude: -73.962296,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 107,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "The Lucky Spot comes up only once, when Willard Jenkins asks about it at 307 Grand Avenue, under the subway tracks; no one in the interviews answers.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "The dossier gives no dates and no speaker describes the place.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q18864",
        name: "Medgar Evers College",
        url: "https://base.semlab.io/wiki/Item:Q18864",
        address: "1650 Bedford Ave, Brooklyn, NY, 11225",
        latitude: 40.666308,
        longitude: -73.956647,
        locations: [
          {
            address: "1650 Bedford Ave, Brooklyn, NY, 11225",
            latitude: 40.666308,
            longitude: -73.956647,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine",
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 59.4,
          rank: 20,
          linked_entities: 16,
          linked_people: 13,
          statements: 30,
          interviews: 4,
          mentions: 14
        },
        summary: "Medgar Evers College, at 1650 Bedford Avenue, matters in these interviews as the home of a summer jazz series. Michael Howard says it was started in 1996 by professor Mary Umalu and activist Torrie McCartney, then his wife, with money from the college president. Concerts were held outdoors on the college plaza, right on the sidewalk, and drew two or three hundred people. The series booked ten to twelve dates a summer, beginning with Irene Reid, Jimmy Owens, Hamiet Bluiett and Billy Harper. Artists accepted checks months late because it was a school. Alma Carroll went every Friday night. By 2010 Howard describes budget pressure and a new president who disowned the series. Jimmy Morton recalls meetings there about a Brooklyn jazz archive, to be named for Willie Jones and to hold Ray Abrams's papers. It never happened. Jo Ann Cheatham's SOFOCUS group presented Barry Harris there.",
        people: [
          {
            qid: "Q26317",
            name: "Mary Umalu",
            role: "professor; co-founded the jazz series"
          },
          {
            qid: "Q19028",
            name: "Torrie McCartney",
            role: "co-founded the jazz series"
          },
          {
            qid: "Q18996",
            name: "Michael Howard",
            role: "helped start and run the series"
          },
          {
            qid: "Q1895",
            name: "Irene Reid",
            role: "performed, 1996-97"
          },
          {
            qid: "Q918",
            name: "Jimmy Owens",
            role: "performed, 1996-97"
          },
          {
            qid: "Q22973",
            name: "Hamiet Bluiett",
            role: "performed, 1996-97"
          },
          {
            qid: "Q23457",
            name: "Billy Harper",
            role: "performed, 1996-97"
          },
          {
            qid: "Q1009",
            name: "Barry Harris",
            role: "performed, presented by SOFOCUS"
          },
          {
            qid: "Q18915",
            name: "Alma Carroll",
            role: "attended the series every Friday"
          },
          {
            qid: "Q18966",
            name: "Jimmy Morton",
            role: "pushed for a jazz archive there"
          },
          {
            qid: "Q19039",
            name: "Willie Jones",
            role: "heavily involved with the college"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "presented Barry Harris there with SOFOCUS"
          }
        ],
        active: {
          from: "1970",
          to: "present",
          basis: "Wikibase start year 1970 with no end; Howard dates the series to 1996 and describes it as still running in 2010.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1970"
          ],
          end_year: [],
          wikidata: [
            "Q6805332"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 14,
          interviews: 4,
          statements_with_people: 23
        }
      },
      {
        qid: "Q26039",
        name: "Metropolitan High School",
        url: "https://base.semlab.io/wiki/Item:Q26039",
        address: "985 Rockaway Avenue, Brooklyn, NY, 11212",
        latitude: 40.655827,
        longitude: -73.906634,
        locations: [
          {
            address: "985 Rockaway Avenue, Brooklyn, NY, 11212",
            latitude: 40.655827,
            longitude: -73.906634,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "school"
        ],
        also_called: [
          "Metropolitan Diploma Plus High School"
        ],
        connectedness: {
          score: 17,
          rank: 108,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "Metropolitan High School is remembered by Tulivu-Donna Cumberbatch as the school where her father, saxophonist Harold Cumberbatch, studied in a very intense music program that ran all day; he started on viola there, and she says Coleman Hawkins was a classmate.",
        people: [
          {
            qid: "Q18953",
            name: "Harold Cumberbatch",
            role: "studied music there"
          },
          {
            qid: "Q24",
            name: "Coleman Hawkins",
            role: "classmate of Harold Cumberbatch"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and the passage gives no dates for his schooling.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q105842424"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q22564",
        name: "Michelle's",
        url: "https://base.semlab.io/wiki/Item:Q22564",
        address: "Bedford Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Bedford Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 109,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "Michelle's was a little bar on Bedford Avenue just past Sears; Vanessa Rubin recalls that it had music, but gives no names or dates.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and no dates in Rubin's passing mention.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68931960"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q18866",
        name: "Moulin Rouge",
        url: "https://base.semlab.io/wiki/Item:Q18866",
        address: "Putnam Avenue & Sumner Avenue, Brooklyn, NY",
        latitude: 40.685365,
        longitude: -73.938517,
        locations: [
          {
            address: "Putnam Avenue & Sumner Avenue, Brooklyn, NY",
            latitude: 40.685365,
            longitude: -73.938517,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 49.2,
          rank: 35,
          linked_entities: 8,
          linked_people: 8,
          statements: 12,
          interviews: 2,
          mentions: 18
        },
        summary: "The Moulin Rouge, at Putnam and Sumner Avenue (now Marcus Garvey Boulevard), is known almost entirely through Ed Stoute, who calls it one of the big clubs and strictly a jazz room. He describes a long bar with a long bandstand behind it and a white grand piano, good jazz groups every week, and no cover charge, so a young listener could nurse one beer all night; he also remembers water running across the floor at the back. He saw Miles Davis there with Red Garland, recalls Walter Bishop, and says Scoby Stroman and Tommy Williams played there. Stoute played there himself, sometimes leading, sometimes with baritone player Harold Cumberbatch, before he was drafted. The building still stands but houses something else.",
        people: [
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "played there, led a band"
          },
          {
            qid: "Q41",
            name: "Miles Davis",
            role: "performed there"
          },
          {
            qid: "Q660",
            name: "Red Garland",
            role: "performed there with Miles Davis"
          },
          {
            qid: "Q22452",
            name: "Walter Bishop",
            role: "performed there"
          },
          {
            qid: "Q18953",
            name: "Harold Cumberbatch",
            role: "performed there"
          },
          {
            qid: "Q19022",
            name: "Scoby Stroman",
            role: "performed there"
          },
          {
            qid: "Q19026",
            name: "Tommy Williams",
            role: "performed there"
          }
        ],
        active: {
          from: "1950s",
          to: "1950s",
          basis: "No wikibase years; Stoute played there before his Army service, which ended shortly before his Baby Grand job around 1960.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 18,
          interviews: 2,
          statements_with_people: 12
        }
      },
      {
        qid: "Q22504",
        name: "New Directions Day Care Center",
        url: "https://base.semlab.io/wiki/Item:Q22504",
        address: "1310 Atlantic Avenue, Brooklyn, NY",
        latitude: 40.678135,
        longitude: -73.949075,
        locations: [
          {
            address: "1310 Atlantic Avenue, Brooklyn, NY",
            latitude: 40.678135,
            longitude: -73.949075,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 28.6,
          rank: 77,
          linked_entities: 3,
          linked_people: 2,
          statements: 6,
          interviews: 1,
          mentions: 3
        },
        summary: "New Directions Day Care Center, also called 1310 New Directions, was a day care center at 1310 Atlantic Avenue between Nostrand and New York Avenues. Ahmed Abdullah worked there while commuting from the South Bronx, which pushed him to move to Crown Street. He says it ran a head start program for young Black children aimed at early cultural awareness, and it worked with The East a few blocks away. Abdullah brought his teacher Cal Massey in, and Massey staged benefits. One was for the Black Panther Party in 1969, after which a donor pulled funding, so Massey did a second one for the center itself. The account is unclear about where they took place: Abdullah says the Panther benefit was at the center, but also says both events were in Staten Island.",
        people: [
          {
            qid: "Q18913",
            name: "Ahmed Abdullah",
            role: "worked there"
          },
          {
            qid: "Q202",
            name: "Cal Massey",
            role: "staged benefits for the center"
          }
        ],
        active: {
          from: "1960s",
          to: "1970s",
          basis: "No wikibase years; Abdullah dates the Panther benefit to 1969 and places his work there around 1970, when The East arose.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 3,
          interviews: 1,
          statements_with_people: 4
        }
      },
      {
        qid: "Q22544",
        name: "New Muse",
        url: "https://base.semlab.io/wiki/Item:Q22544",
        address: "1530 Bedford Avenue Brooklyn NY 11216",
        latitude: 40.67089,
        longitude: -73.955338,
        locations: [
          {
            address: "1530 Bedford Avenue Brooklyn NY 11216",
            latitude: 40.67089,
            longitude: -73.955338,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "New Muse Community Museum"
        ],
        connectedness: {
          score: 44.5,
          rank: 40,
          linked_entities: 7,
          linked_people: 3,
          statements: 12,
          interviews: 1,
          mentions: 17
        },
        summary: "The New Muse Community Museum, at 1530 Bedford Avenue, was an African American cultural center set up in a former auto showroom that the Brooklyn Children's Museum left when its new building was finished; it kept the planetarium and its young operator. Reggie Workman says Bill Barron, Chris White and Rudy Collins went to the board to start a music program; Workman first taught bass and subbed for White, then became music director after Barron died. Students ran from 7 to 70, classes ran from 3:30 to about 9:30, and prices were kept low; Alex Etienne brought in Haitian youngsters. Modeled on The East, it launched the Crow's Hill Festival, which grew from a block party at Bedford and Lincoln Place to Franklin and lasted about ten years. Around 1983-84, while Workman toured with Max Roach, the building was broken into and wrecked.",
        people: [
          {
            qid: "Q1403",
            name: "Reggie Workman",
            role: "bass teacher, then music director"
          },
          {
            qid: "Q1193",
            name: "Bill Barron",
            role: "executive director; started music program"
          },
          {
            qid: "Q1198",
            name: "Chris White",
            role: "instructor; started music program"
          },
          {
            qid: "Q22542",
            name: "Rudy Collins",
            role: "helped start the music program"
          },
          {
            qid: "Q22540",
            name: "Alex Etienne",
            role: "brought Haitian youth into the program"
          }
        ],
        active: {
          from: "1970s",
          to: "1984",
          basis: "Workman says it was destroyed around 1983-84 and he left about 1984; the festival lasted about ten years, putting the start in the 1970s.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q106588547"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 17,
          interviews: 1,
          statements_with_people: 6
        }
      },
      {
        qid: "Q22307",
        name: "New World",
        url: "https://base.semlab.io/wiki/Item:Q22307",
        address: "Flatbush Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Flatbush Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 110,
          linked_entities: 1,
          linked_people: 1,
          statements: 2,
          interviews: 1,
          mentions: 1
        },
        summary: "The New World was a bar on Flatbush Avenue owned by Dickie Habersham-Bey. Around 1985 it was one of several Brooklyn bars he ran, along with Dickie's Monterey and the Uptown Lounge, and his brother worked with him.",
        people: [
          {
            qid: "Q19013",
            name: 'Richard "Dickie" Habersham-Bey',
            role: "owner"
          },
          {
            qid: "Q22233",
            name: "Alfred Habersham-Bey",
            role: "worked in his brother's bars"
          }
        ],
        active: {
          from: "1980s",
          to: null,
          basis: "No wikibase years; Habersham-Bey's passage mentions 1985 when listing the bars he had at the time.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68931963"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 2
        }
      },
      {
        qid: "Q22268",
        name: "New York Aquarium",
        url: "https://base.semlab.io/wiki/Item:Q22268",
        address: null,
        latitude: 40.5743,
        longitude: -73.9751,
        locations: [
          {
            address: null,
            latitude: 40.5743,
            longitude: -73.9751,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 31.8,
          rank: 64,
          linked_entities: 5,
          linked_people: 4,
          statements: 7,
          interviews: 1,
          mentions: 2
        },
        summary: "Bob Myers calls the New York Aquarium one of the newest cultural institutions to join the Central Brooklyn Jazz Consortium's calendar. He was presenting a free April 25 show there with the Neil Clarke Trio Plus, featuring Neil Clarke and Alex Blake.",
        people: [
          {
            qid: "Q18923",
            name: "Bob Myers",
            role: "presented the 2010 show"
          },
          {
            qid: "Q22278",
            name: "Neil Clarke Trio Plus",
            role: "performed there, 2010"
          },
          {
            qid: "Q22269",
            name: "Neil Clarke",
            role: "performed there, 2010"
          },
          {
            qid: "Q22276",
            name: "Alex Blake",
            role: "performed there, 2010"
          }
        ],
        active: {
          from: "1896",
          to: "present",
          basis: "Wikibase start year 1896 with no end; Myers's 2010 concert is the only jazz event recorded there.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1896"
          ],
          end_year: [],
          wikidata: [
            "Q1060884"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 1,
          statements_with_people: 5
        }
      },
      {
        qid: "Q22267",
        name: "Our Lady of Victory",
        url: "https://base.semlab.io/wiki/Item:Q22267",
        address: "583 Throop Avenue, Brooklyn, NY 11216",
        latitude: 40.68136,
        longitude: -73.94028,
        locations: [
          {
            address: "583 Throop Avenue, Brooklyn, NY 11216",
            latitude: 40.68136,
            longitude: -73.94028,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [
          "Our Lady of Victory Church",
          "Our Lady of Victory Roman Catholic Church"
        ],
        connectedness: {
          score: 31.8,
          rank: 66,
          linked_entities: 3,
          linked_people: 2,
          statements: 6,
          interviews: 2,
          mentions: 3
        },
        summary: "Our Lady of Victory is a Roman Catholic church on Throop Avenue in Bedford-Stuyvesant with a parish school. Tulivu-Donna Cumberbatch began piano lessons there with the nuns, sang in church programs, and recalls an excellent music program in which the elementary pupils staged full Broadway shows in costume under strong choir directors. Bob Myers names it, with Concord Baptist and James United Methodist, among the black churches that joined the Central Brooklyn Jazz Consortium's ecumenical committee and help fund its events, part of his argument that the black church held the culture together and recognizes jazz as a branch of the same tree.",
        people: [
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "student; took piano and sang there"
          }
        ],
        active: {
          from: "1895",
          to: "present",
          basis: "Wikibase start year 1895; Myers speaks of it as a current consortium member, so still going at interview time.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1895"
          ],
          end_year: [],
          wikidata: [
            "Q7110991"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 3,
          interviews: 2,
          statements_with_people: 3
        }
      },
      {
        qid: "Q22562",
        name: "Parlor Jazz",
        url: "https://base.semlab.io/wiki/Item:Q22562",
        address: "Vanderbilt Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Vanderbilt Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 19.1,
          rank: 96,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 2
        },
        summary: "Parlor Jazz is a house concert series on Vanderbilt Avenue: two men opened the ground floor of their brownstone and present jazz there regularly, sometimes every weekend. Vanessa Rubin believes she played a gig there a couple of years before her interview, after moving back and forth between Cleveland and Brooklyn. She calls it very nice and says the list of people who have played there would surprise you. She also says the hosts had bought a bigger house beyond Yonkers and planned to present music there too. Hers is the only account.",
        people: [
          {
            qid: "Q19031",
            name: "Vanessa Rubin",
            role: "performed there"
          }
        ],
        active: {
          from: null,
          to: "present",
          basis: "No wikibase years; Rubin describes it as running at the time of her interview, and gives no start date.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q18868",
        name: "Paul's",
        url: "https://base.semlab.io/wiki/Item:Q18868",
        address: "DeKalb Avenue & Sumner Avenue, Brooklyn, NY",
        latitude: 40.692703,
        longitude: -73.939986,
        locations: [
          {
            address: "DeKalb Avenue & Sumner Avenue, Brooklyn, NY",
            latitude: 40.692703,
            longitude: -73.939986,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 31.8,
          rank: 67,
          linked_entities: 3,
          linked_people: 3,
          statements: 5,
          interviews: 2,
          mentions: 3
        },
        summary: "Paul's was a bar at DeKalb and Sumner Avenue that also put on little shows. Ed Stoute played a couple of gigs there with baritone saxophonist Harold Cumberbatch and remembers it as a nice place, nicer than Ben's nearby.",
        people: [
          {
            qid: "Q18953",
            name: "Harold Cumberbatch",
            role: "led gigs there"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "played gigs there with Cumberbatch"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "Neither the wikibase nor Stoute gives any year or period.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68931964"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 3,
          interviews: 2,
          statements_with_people: 5
        }
      },
      {
        qid: "Q18869",
        name: "Pookie\u2019s",
        url: "https://base.semlab.io/wiki/Item:Q18869",
        address: "Bedford Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Bedford Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 111,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "Pookie's was a place on Bedford Avenue that Jo Ann Cheatham names, with Sista's Place and Jazz 966, as one of the only two or three jazz spots then left in Brooklyn.",
        people: [],
        active: {
          from: null,
          to: "present",
          basis: "No wikibase years; Cheatham speaks of it as operating when she was interviewed.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q19101",
        name: "Pratt Institute",
        url: "https://base.semlab.io/wiki/Item:Q19101",
        address: "200 Willoughby Ave, Brooklyn, NY, 11205",
        latitude: 40.691111,
        longitude: -73.963889,
        locations: [
          {
            address: "200 Willoughby Ave, Brooklyn, NY, 11205",
            latitude: 40.691111,
            longitude: -73.963889,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 30.3,
          rank: 73,
          linked_entities: 3,
          linked_people: 3,
          statements: 5,
          interviews: 2,
          mentions: 2
        },
        summary: "Pratt Institute is a college on Willoughby Avenue. Jo Ann Cheatham remembers it as a concert venue, with frequent shows, often in the summer, held inside one of its buildings, where Betty Carter and many others played. It figures differently in Jitu Weusi's story: in 1969 Pratt's president banned him from campus and a planned program there was blocked, and the young people he advised then decided to found their own cultural center, which became The East at 10 Claver Place. The wikibase also lists people who studied or exhibited there.",
        people: [
          {
            qid: "Q102",
            name: "Betty Carter",
            role: "performed there"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "attended concerts there"
          },
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "banned from campus in 1969"
          },
          {
            qid: "Q36471",
            name: "Leander Fornas",
            role: "studied there"
          },
          {
            qid: "Q37851",
            name: "Tom Patti",
            role: "studied there"
          },
          {
            qid: "Q38299",
            name: "Carolyn Woodfin Wood",
            role: "exhibited work there"
          }
        ],
        active: {
          from: "1887",
          to: null,
          basis: "Wikibase start year 1887; Weusi's ban is dated 1969; no end is given and Cheatham's concerts are undated.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1887"
          ],
          end_year: [],
          wikidata: [
            "Q1204714"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 8
        }
      },
      {
        qid: "Q23437",
        name: "Prospect Heights High School",
        url: "https://base.semlab.io/wiki/Item:Q23437",
        address: "883 Classon Avenue, Brooklyn, NY",
        latitude: 40.67,
        longitude: -73.9614,
        locations: [
          {
            address: "883 Classon Avenue, Brooklyn, NY",
            latitude: 40.67,
            longitude: -73.9614,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "organization",
          "school"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 112,
          linked_entities: 1,
          linked_people: 1,
          statements: 2,
          interviews: 1,
          mentions: 1
        },
        summary: "Prospect Heights High School appears only as an employer: singer Vanessa Rubin says she taught English there and served as a dean of students for about ten years, taking teaching work because music did not pay the rent.",
        people: [
          {
            qid: "Q19031",
            name: "Vanessa Rubin",
            role: "English teacher and dean, about ten years"
          }
        ],
        active: {
          from: null,
          to: "2006",
          basis: "Wikibase end year 2006 only; Rubin gives no years for her time there.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [
            "2006"
          ],
          wikidata: [
            "Q7250744"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 2
        }
      },
      {
        qid: "Q18870",
        name: "Pumpkin's",
        url: "https://base.semlab.io/wiki/Item:Q18870",
        address: "Flatbush Avenue & Church Avenue, Brooklyn, NY",
        latitude: 40.650368,
        longitude: -73.958774,
        locations: [
          {
            address: "Flatbush Avenue & Church Avenue, Brooklyn, NY",
            latitude: 40.650368,
            longitude: -73.958774,
            coordinates_from: "geocoded from the address"
          },
          {
            address: "Nostrand Avenue & Church Avenue, Brooklyn, NY",
            latitude: 40.650812,
            longitude: -73.949585,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 51.6,
          rank: 32,
          linked_entities: 9,
          linked_people: 9,
          statements: 11,
          interviews: 4,
          mentions: 10
        },
        summary: "Pumpkin's was a small, long and narrow jazz club near Church Avenue, with the bar on the left as you came in and the music in the back. Speakers place it differently: Tulivu-Donna Cumberbatch says Flatbush and Church, Vanessa Rubin says Nostrand and Church. Its owner was Bill Rutherford. Ed Stoute played there in the 1980s and 90s and recalls big crowds at first, but says the owner would throw out anyone who rubbed him the wrong way and so ran himself out of business. Rubin remembers it as a room that often hired singers, Irene Reid among them, and Keisha St. Joan says she was in and out of Pumpkin's and the Flamingo Lounge constantly.",
        people: [
          {
            qid: "Q18920",
            name: "Bill Rutherford",
            role: "owner"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "performed there in the 1980s-90s"
          },
          {
            qid: "Q1895",
            name: "Irene Reid",
            role: "sang there"
          },
          {
            qid: "Q18976",
            name: "Keisha St. Joan",
            role: "performed there often"
          },
          {
            qid: "Q19031",
            name: "Vanessa Rubin",
            role: "frequented it, rarely worked there"
          }
        ],
        active: {
          from: "1980",
          to: "2000",
          basis: "Wikibase 1980-2000; Stoute puts it in the 80s and 90s, while Cheatham says it lasted into the 2000s.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1980"
          ],
          end_year: [
            "2000"
          ],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 10,
          interviews: 4,
          statements_with_people: 11
        }
      },
      {
        qid: "Q18871",
        name: "Putnam Central",
        url: "https://base.semlab.io/wiki/Item:Q18871",
        address: "65 Putnam Ave, Brooklyn, NY 11238",
        latitude: 40.683195,
        longitude: -73.959356,
        locations: [
          {
            address: "65 Putnam Ave, Brooklyn, NY 11238",
            latitude: 40.683195,
            longitude: -73.959356,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "PCC",
          "Putnam Central Club"
        ],
        connectedness: {
          score: 70.5,
          rank: 11,
          linked_entities: 23,
          linked_people: 23,
          statements: 32,
          interviews: 9,
          mentions: 20
        },
        summary: "Putnam Central, or the PCC, on Putnam Avenue, is among what the group interviews call the A-level Brooklyn places, remembered as a premier venue for dances. Jo Ann Cheatham describes a smaller front room opening onto a big room with a tiny stage; the hall is still rented out for parties and weddings, and she thinks it should be a landmark. Max Roach taught there, and he and Charles Mingus had a studio upstairs where they produced their own records; Jimmy Morton says a union owned the building, while Randy Weston calls it a Masonic temple. Monk and the young Weston played there, Harold Cumberbatch played with the Ray Abrams band, and Leroy and Elaine Applin and Wilson Hayes danced there. Jitu Weusi heard about it at 13 but was too young to get in; by the early 1960s it had closed.",
        people: [
          {
            qid: "Q66",
            name: "Max Roach",
            role: "taught there; ran an upstairs studio"
          },
          {
            qid: "Q90",
            name: "Charles Mingus",
            role: "recorded in the upstairs studio"
          },
          {
            qid: "Q71",
            name: "Thelonious Monk",
            role: "performed there"
          },
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "performed there when young"
          },
          {
            qid: "Q18953",
            name: "Harold Cumberbatch",
            role: "played there many times"
          },
          {
            qid: "Q18819",
            name: "Ray Abrams Big Band",
            role: "performed there"
          },
          {
            qid: "Q18985",
            name: "Leroy Applin",
            role: "dancer there"
          },
          {
            qid: "Q18942",
            name: "Elaine Applin",
            role: "danced there almost weekly"
          },
          {
            qid: "Q19041",
            name: "Wilson Hayes",
            role: "dancer there"
          },
          {
            qid: "Q18926",
            name: "Burt Keyes",
            role: "performed there"
          },
          {
            qid: "Q22931",
            name: "Ervin Burgee",
            role: "performed there"
          },
          {
            qid: "Q19039",
            name: "Willie Jones",
            role: "went to hear music there"
          }
        ],
        active: {
          from: "1950s",
          to: "1950s",
          basis: "No wikibase years; Weusi says it was hot when he was 13 (he was 21 around 1960) and closed by the early 60s.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548664"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 20,
          interviews: 9,
          statements_with_people: 32
        }
      },
      {
        qid: "Q18872",
        name: "Putnam Theater",
        url: "https://base.semlab.io/wiki/Item:Q18872",
        address: "970 Fulton Street, Brooklyn, NY 11238",
        latitude: 40.682465,
        longitude: -73.962029,
        locations: [
          {
            address: "970 Fulton Street, Brooklyn, NY 11238",
            latitude: 40.682465,
            longitude: -73.962029,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 21.7,
          rank: 90,
          linked_entities: 2,
          linked_people: 2,
          statements: 2,
          interviews: 1,
          mentions: 1
        },
        summary: "Harold Valle recalls a theater on the corner of Putnam Avenue near Fulton Street, the Putnam Theater, active in the 1920s, where Mamie Smith played; he thinks he still has a copy of the flier.",
        people: [
          {
            qid: "Q656",
            name: "Mamie Smith",
            role: "performed there in the 1920s"
          }
        ],
        active: {
          from: "1920",
          to: "1929",
          basis: "Wikibase years 1920 to 1929, matching Valle's statement that the theater was there during the 1920s.",
          confidence: "high"
        },
        wikibase: {
          start_year: [
            "1920"
          ],
          end_year: [
            "1929"
          ],
          wikidata: [
            "Q45033560"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 2
        }
      },
      {
        qid: "Q19683",
        name: "Raintrees",
        url: "https://base.semlab.io/wiki/Item:Q19683",
        address: "Prospect Park West & Ninth Street, Brooklyn, NY",
        latitude: 40.664635,
        longitude: -73.976839,
        locations: [
          {
            address: "Prospect Park West & Ninth Street, Brooklyn, NY",
            latitude: 40.664635,
            longitude: -73.976839,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 19.1,
          rank: 97,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 2
        },
        summary: "Raintrees was a club at Prospect Park West and Ninth Street in Park Slope. Wade Barnes calls it a nice club that lasted a while, played there a couple of times, and could not recall its first name.",
        people: [
          {
            qid: "Q19034",
            name: "Wade E. Barnes",
            role: "performed there a couple of times"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "Barnes gives no years.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q22533",
        name: "RKO Bushwick Theatre",
        url: "https://base.semlab.io/wiki/Item:Q22533",
        address: "1396 Broadway, Brooklyn, NY 11221",
        latitude: 40.688391,
        longitude: -73.920614,
        locations: [
          {
            address: "1396 Broadway, Brooklyn, NY 11221",
            latitude: 40.688391,
            longitude: -73.920614,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "RKO Theatre"
        ],
        connectedness: {
          score: 21.7,
          rank: 91,
          linked_entities: 2,
          linked_people: 2,
          statements: 2,
          interviews: 1,
          mentions: 1
        },
        summary: "The RKO Theater in Bushwick is recalled by Bob Myers, who grew up near it, as a place that put on great R&B shows presented by Murray the K and others.",
        people: [
          {
            qid: "Q22534",
            name: "Murray the K",
            role: "presented R&B shows there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years; Myers places it in his early years in Bushwick without a date.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q45032903"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 2
        }
      },
      {
        qid: "Q23359",
        name: "Sam the Record Man (Franklin Ave/Fulton St)",
        url: "https://base.semlab.io/wiki/Item:Q23359",
        address: "Fulton Street & Franklin Avenue, Brooklyn, NY",
        latitude: 40.681137,
        longitude: -73.95566,
        locations: [
          {
            address: "Fulton Street & Franklin Avenue, Brooklyn, NY",
            latitude: 40.681137,
            longitude: -73.95566,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 113,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "Sam the Record Man was a record store on the southeast corner of Fulton Street and Franklin Avenue, a busy junction where people changed trains for Ebbets Field and Coney Island. Jitu Weusi worked Saturdays as a boy of about twelve at his cousin Charles Morris's newsstand across the street, and the store's loud outdoor sound system, playing records all day, gave him his first exposure to rhythm and blues singers such as Ruth Brown and Fats Domino and to jazz by Charlie Parker, King Pleasure, Billie Holiday and Ella Fitzgerald. Listening there, he learned who was who and which tunes were theirs. It mattered as an accidental music education on a street corner.",
        people: [],
        active: {
          from: "1950s",
          to: null,
          basis: "Weusi heard it at about age twelve; elsewhere he puts himself at 21 around 1960, implying the early 1950s.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q18874",
        name: "Sankofa",
        url: "https://base.semlab.io/wiki/Item:Q18874",
        address: "Macon Street & Verona Place, Brooklyn, NY",
        latitude: 40.681308,
        longitude: -73.947642,
        locations: [
          {
            address: "Macon Street & Verona Place, Brooklyn, NY",
            latitude: 40.681308,
            longitude: -73.947642,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 114,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "Sankofa is a brownstone at Macon Street and Verona Place where the host opens her living room for jazz every Friday at 9:00. Tulivu-Donna Cumberbatch calls it one of the new Friday-night spots.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years; the one passage calls it new but gives no year.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q66930935"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q23432",
        name: "Scopello's",
        url: "https://base.semlab.io/wiki/Item:Q23432",
        address: "63 Lafayette Ave Brooklyn, NY 11217",
        latitude: 40.687475,
        longitude: -73.97601,
        locations: [
          {
            address: "63 Lafayette Ave Brooklyn, NY 11217",
            latitude: 40.687475,
            longitude: -73.97601,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [
          "Scopello's Italian Restaurant"
        ],
        connectedness: {
          score: 23.8,
          rank: 86,
          linked_entities: 2,
          linked_people: 1,
          statements: 3,
          interviews: 1,
          mentions: 2
        },
        summary: "Scopello's is an Italian restaurant in Fort Greene, near where Fulton and Greene meet. Vanessa Rubin mentions it only because it now occupies the site of the ValHal jazz pub, where she used to work a lot.",
        people: [],
        active: {
          from: null,
          to: "present",
          basis: "No wikibase years; Rubin speaks of it as the current occupant of the ValHal site.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68947000"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q23419",
        name: "Siloam Presbyterian Church",
        url: "https://base.semlab.io/wiki/Item:Q23419",
        address: "260 Jefferson Ave, Brooklyn, NY 11216",
        latitude: 40.683479,
        longitude: -73.947142,
        locations: [
          {
            address: "260 Jefferson Ave, Brooklyn, NY 11216",
            latitude: 40.683479,
            longitude: -73.947142,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine",
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 115,
          linked_entities: 1,
          linked_people: 1,
          statements: 3,
          interviews: 1,
          mentions: 1
        },
        summary: "Siloam Presbyterian Church is one of several Brooklyn churches Tulivu-Donna Cumberbatch names as opening their doors to jazz; at the time of her interview she was running a jazz program there every other month to benefit Haiti.",
        people: [
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "runs a bimonthly jazz benefit program"
          }
        ],
        active: {
          from: null,
          to: "present",
          basis: "Cumberbatch speaks of her jazz program there as ongoing at the time of the interview; no start date is given.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68933954"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 3
        }
      },
      {
        qid: "Q18876",
        name: "Sista's Place",
        url: "https://base.semlab.io/wiki/Item:Q18876",
        address: "456 Nostrand Avenue, Brooklyn, NY 11216",
        latitude: 40.683387,
        longitude: -73.95048,
        locations: [
          {
            address: "456 Nostrand Avenue, Brooklyn, NY 11216",
            latitude: 40.683387,
            longitude: -73.95048,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine",
          "organization"
        ],
        also_called: [
          "Sistas Place"
        ],
        connectedness: {
          score: 79.9,
          rank: 6,
          linked_entities: 28,
          linked_people: 22,
          statements: 60,
          interviews: 12,
          mentions: 56
        },
        summary: "Sista's Place is a small, volunteer-run cultural center on Nostrand Avenue in Bedford-Stuyvesant, founded by Viola Plummer, Roger Wareham and their comrades, who had been tried as the New York 8, with a market beside it. Wareham says it opened on John Coltrane's birthday in 1995 under the slogan that culture is a weapon; its season runs from late September to June. Carlos Garnett was the first music director and Ahmed Abdullah took over in 1998, moving from jazz every two weeks to every week and adding artist conversations, poetry and workshops. Speakers stress the room's size, perhaps 50 or 60 people, and an audience that talks back and treats artists like royalty. Spaulding, Rubin, Cumberbatch and Wareham all compare it to The East, a few blocks away. It helped seed the Central Brooklyn Jazz Consortium. Wareham notes a landlord dispute forced a move from its first corner.",
        people: [
          {
            qid: "Q19032",
            name: "Viola Plummer",
            role: "founder and leader"
          },
          {
            qid: "Q19016",
            name: "Roger Wareham",
            role: "founder and volunteer"
          },
          {
            qid: "Q18913",
            name: "Ahmed Abdullah",
            role: "music director from 1998"
          },
          {
            qid: "Q18929",
            name: "Carlos Garnett",
            role: "first music director"
          },
          {
            qid: "Q18915",
            name: "Alma Carroll",
            role: "founder"
          },
          {
            qid: "Q19028",
            name: "Torrie McCartney",
            role: "founder; linked it with Jazz 966"
          },
          {
            qid: "Q22493",
            name: "Coltrane Chimurenga",
            role: "one of the people running it"
          },
          {
            qid: "Q22495",
            name: "Latifah Carter",
            role: "one of the people running it"
          },
          {
            qid: "Q18987",
            name: "Louis Reyes Rivera",
            role: "ran jazzoetry and writing workshops"
          },
          {
            qid: "Q18983",
            name: "Leon Thomas",
            role: "performed at the 1995 opening"
          },
          {
            qid: "Q18957",
            name: "James Spaulding",
            role: "performed there often"
          },
          {
            qid: "Q19031",
            name: "Vanessa Rubin",
            role: "performed there with her trio"
          },
          {
            qid: "Q471",
            name: "Andrew Cyrille",
            role: "performed there with Haitian Fascination"
          },
          {
            qid: "Q22501",
            name: "Haitian Fascination",
            role: "performed there"
          },
          {
            qid: "Q1403",
            name: "Reggie Workman",
            role: "performed there"
          },
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "performed there"
          },
          {
            qid: "Q22500",
            name: "One for Trane",
            role: "group put together there"
          },
          {
            qid: "Q22540",
            name: "Alex Etienne",
            role: "regular in the audience"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "regular in the audience"
          },
          {
            qid: "Q22492",
            name: "Paxton Baker",
            role: "arranged an eight-year BET stipend"
          },
          {
            qid: "Q19019",
            name: "Ron Washington",
            role: "collaborator; copied the model at Cecil's"
          }
        ],
        active: {
          from: "1995",
          to: "present",
          basis: "Wikibase start year 1995; Wareham gives the opening as September 23, 1995, though Plummer places the naming in 1994; still running around 2010.",
          confidence: "high"
        },
        wikibase: {
          start_year: [
            "1995"
          ],
          end_year: [],
          wikidata: [
            "Q65548899"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 56,
          interviews: 12,
          statements_with_people: 49
        }
      },
      {
        qid: "Q18877",
        name: "Slave Theater",
        url: "https://base.semlab.io/wiki/Item:Q18877",
        address: "1215 Fulton Street, Brooklyn, NY 11216",
        latitude: 40.680835,
        longitude: -73.952898,
        locations: [
          {
            address: "1215 Fulton Street, Brooklyn, NY 11216",
            latitude: 40.680835,
            longitude: -73.952898,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 57.2,
          rank: 23,
          linked_entities: 14,
          linked_people: 11,
          statements: 19,
          interviews: 4,
          mentions: 12
        },
        summary: "The Slave Theater, on Fulton Street across from where the Blue Coronet stood, was an older movie house that a Black judge, John Phillips, renamed. Speakers cannot agree on its earlier name: Jo Ann Cheatham guesses the Bango, Tulivu-Donna Cumberbatch first thinks the Brooklyn Apollo and later says the Brevoort, and Jitu Weusi says the Regent. Cumberbatch's father took her there as a child to afternoon jazz shows, and backstage Big Maybelle hugged her so hard she disappeared into the singer's dress. Later speakers talk about saving it: Weusi says Phillips has died and the building is tied up in litigation, Wade Barnes has talked of using it for events, and Joe Long faults the community for letting it go.",
        people: [
          {
            qid: "Q22235",
            name: "John Phillips",
            role: "proprietor who named it the Slave"
          },
          {
            qid: "Q95",
            name: "Big Maybelle",
            role: "sang at afternoon jazz shows"
          },
          {
            qid: "Q18953",
            name: "Harold Cumberbatch",
            role: "took his daughter to shows there"
          },
          {
            qid: "Q19034",
            name: "Wade E. Barnes",
            role: "proposed using it for events"
          }
        ],
        active: {
          from: "1984",
          to: "1998",
          basis: "Wikibase 1984-1998 for the Slave; Cumberbatch's childhood jazz shows were under an earlier theater name and are undated.",
          confidence: "low"
        },
        wikibase: {
          start_year: [
            "1984"
          ],
          end_year: [
            "1998"
          ],
          wikidata: [
            "Q65548896"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 12,
          interviews: 4,
          statements_with_people: 13
        }
      },
      {
        qid: "Q18879",
        name: "Smuckers",
        url: "https://base.semlab.io/wiki/Item:Q18879",
        address: "Schermerhorn Street & Flatbush Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Schermerhorn Street & Flatbush Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 50.3,
          rank: 34,
          linked_entities: 9,
          linked_people: 9,
          statements: 10,
          interviews: 3,
          mentions: 11
        },
        summary: "Smuckers was a very large club at Schermerhorn Street and Flatbush Avenue, across from BAM, remembered mainly by Harold Valle. He describes a gigantic venue with a dance space and a roller-skating rink in the basement, and says he saw Sun Ra, McCoy Tyner and Roy Ayers there and still keeps a flier; Willard Jenkins notes billings for Roberta Flack and Bobby Humphrey. Valle puts it in the 1980s and says it faded and that few people now have heard of it; the site is a pawnshop and check-cashing place. Jenkins remarks that Valle was the first to mention it. Reggie Workman, asked about it, says the name rings a bell but ties it to the era of Club La Marchal and the Club Just Us wives, which sits awkwardly with Valle's dating.",
        people: [
          {
            qid: "Q52",
            name: "Sun Ra",
            role: "performed there"
          },
          {
            qid: "Q200",
            name: "McCoy Tyner",
            role: "performed there"
          },
          {
            qid: "Q22964",
            name: "Roy Ayers",
            role: "performed there"
          },
          {
            qid: "Q1756",
            name: "Roberta Flack",
            role: "performed there"
          },
          {
            qid: "Q22963",
            name: "Bobby Humphrey",
            role: "performed there"
          },
          {
            qid: "Q18955",
            name: "Harold Valle",
            role: "attended shows there"
          }
        ],
        active: {
          from: "1977",
          to: "1980s",
          basis: "Wikibase start year 1977; Valle places it in the 1980s. Workman links it to the much earlier La Marchal era.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1977"
          ],
          end_year: [],
          wikidata: [
            "Q68924470"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 11,
          interviews: 3,
          statements_with_people: 10
        }
      },
      {
        qid: "Q18880",
        name: "Solomon\u2019s Porch",
        url: "https://base.semlab.io/wiki/Item:Q18880",
        address: "Halsey Street & Stuyvesant Avenue, Brooklyn, NY",
        latitude: 40.683839,
        longitude: -73.93224,
        locations: [
          {
            address: "Halsey Street & Stuyvesant Avenue, Brooklyn, NY",
            latitude: 40.683839,
            longitude: -73.93224,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 35,
          rank: 55,
          linked_entities: 5,
          linked_people: 5,
          statements: 7,
          interviews: 2,
          mentions: 2
        },
        summary: "Solomon's Porch was a small venue near Halsey Street and Stuyvesant Avenue that is now gone. Vanessa Rubin says the owner struggled to keep it going, and that tenor player Jeff King made it his band's regular spot and brought in guests; she sang a night or two there, and Craig Harris also worked with the band. Jo Ann Cheatham saw Maurice Brown there. Rubin counts it among the Brooklyn places that kept the music alive.",
        people: [
          {
            qid: "Q22577",
            name: "Jeff King",
            role: "band's regular spot; booked guest artists"
          },
          {
            qid: "Q19031",
            name: "Vanessa Rubin",
            role: "sang there a couple of nights"
          },
          {
            qid: "Q22486",
            name: "Craig Harris",
            role: "worked there with King's band"
          },
          {
            qid: "Q18990",
            name: "Maurice Brown",
            role: "performed there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years; Cheatham calls her visit recent and Rubin says it is gone, but neither gives a year.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 7
        }
      },
      {
        qid: "Q18881",
        name: "Sonya Ballroom",
        url: "https://base.semlab.io/wiki/Item:Q18881",
        address: "Fulton Street & Bedford Avenue, Brooklyn, NY",
        latitude: 40.680647,
        longitude: -73.953376,
        locations: [
          {
            address: "Fulton Street & Bedford Avenue, Brooklyn, NY",
            latitude: 40.680647,
            longitude: -73.953376,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Akbar Hall",
          "Sonia Ballroom"
        ],
        connectedness: {
          score: 53,
          rank: 28,
          linked_entities: 9,
          linked_people: 9,
          statements: 10,
          interviews: 5,
          mentions: 10
        },
        summary: "The Sonya Ballroom, also spelled Sonia and later known as Akbar Hall, was a dance hall at Fulton Street and Bedford Avenue. Randy Weston remembers social clubs hiring bands to play dances there, and says it was where the bandleaders Buddy Brown and Buddy Riser played, with Weston himself in their bands; Ed Stoute also played dances there. Weston's lasting memory is of the fights that broke out around midnight, so that on arrival you always checked where the exits were. Jo Ann Cheatham lists it with the Blue Coronet and Arlington Inn among the Fulton Street clubs of her youth, and Tulivu-Donna Cumberbatch recalls Ray Abrams pointing it out. Weston names it alongside the Brooklyn Palace as one of two dance places.",
        people: [
          {
            qid: "Q22782",
            name: "Buddy Brown",
            role: "bandleader who played there"
          },
          {
            qid: "Q22783",
            name: "Buddy Riser",
            role: "bandleader who played there"
          },
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "played dances there in local bands"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "played dances there"
          },
          {
            qid: "Q1098",
            name: "Wynton Kelly",
            role: "performed there"
          },
          {
            qid: "Q18953",
            name: "Harold Cumberbatch",
            role: "performed there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years, and speakers give no dates; it belongs to Weston's and Stoute's early dance-band days.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548662"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 10,
          interviews: 5,
          statements_with_people: 10
        }
      },
      {
        qid: "Q18883",
        name: "Sugar Hill",
        url: "https://base.semlab.io/wiki/Item:Q18883",
        address: "Nostrand Avenue & DeKalb Avenue, Brooklyn, NY",
        latitude: 40.691335,
        longitude: -73.951759,
        locations: [
          {
            address: "Nostrand Avenue & DeKalb Avenue, Brooklyn, NY",
            latitude: 40.691335,
            longitude: -73.951759,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Sugar Hill Restaurant"
        ],
        connectedness: {
          score: 42.6,
          rank: 45,
          linked_entities: 6,
          linked_people: 6,
          statements: 10,
          interviews: 3,
          mentions: 5
        },
        summary: "Sugar Hill is Eddie Freeman's restaurant at Nostrand and DeKalb. Harold Valle calls it one of the oldest continuing black-owned businesses in central Brooklyn, in place for over 30 years, with shows upstairs and an annual event by Alma Carroll that includes jazz. Its place in the story is as a meeting room: in October 1999 Alma Carroll called Jitu Weusi to a meeting there with Torrie McCartney and others, where they proposed founding the Central Brooklyn Jazz Consortium and an April festival, which first ran in 2000. Weusi later lists Sugar Hill among the consortium's member venues.",
        people: [
          {
            qid: "Q18939",
            name: "Eddie Freeman",
            role: "proprietor"
          },
          {
            qid: "Q18915",
            name: "Alma Carroll",
            role: "held events and the 1999 meeting"
          },
          {
            qid: "Q19028",
            name: "Torrie McCartney",
            role: "at the 1999 founding meeting"
          },
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "at the 1999 founding meeting"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "at the 1999 founding meeting"
          }
        ],
        active: {
          from: null,
          to: "present",
          basis: "No wikibase years; Valle says over 30 years, undated; the consortium meeting is October 1999, and Weusi lists it as a current venue.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 5,
          interviews: 3,
          statements_with_people: 10
        }
      },
      {
        qid: "Q18834",
        name: "The Blue Coronet",
        url: "https://base.semlab.io/wiki/Item:Q18834",
        address: "1224 Fulton St, Brooklyn, NY 11216",
        latitude: 40.680244,
        longitude: -73.951614,
        locations: [
          {
            address: "1224 Fulton St, Brooklyn, NY 11216",
            latitude: 40.680244,
            longitude: -73.951614,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Blue Coronet"
        ],
        connectedness: {
          score: 98.3,
          rank: 1,
          linked_entities: 74,
          linked_people: 73,
          statements: 103,
          interviews: 24,
          mentions: 88
        },
        summary: "The Blue Coronet, on Fulton Street across from the Slave Theater, is remembered as the top Brooklyn jazz club. Dickie Habersham-Bey says a white-owned club called the Coronet closed in 1965 and that he bought it around 1966 and reopened it as the Blue Coronet, starting with Wynton Kelly, Jimmy Cobb and Paul Chambers; Jitu Weusi says he and his brother Alfred pooled construction earnings to open it. Habersham-Bey gave locals a chance, advertised every week, paid Sonny Stitt and Miles Davis well, and recorded nothing except the Mighty Sparrow's album there. Speakers recall a long bar full of numbers runners who told Booker Ervin to play well, Stitt inviting young players up, James Spaulding on the stand the night Dr. King was killed, and Miles's car being shot up after an engagement. Weusi and Mensah Wali place visits around 1960 to 1962, before the date Habersham-Bey gives.",
        people: [
          {
            qid: "Q19013",
            name: 'Richard "Dickie" Habersham-Bey',
            role: "owner for about 25 years"
          },
          {
            qid: "Q22233",
            name: "Alfred Habersham-Bey",
            role: "co-founder with his brother"
          },
          {
            qid: "Q1098",
            name: "Wynton Kelly",
            role: "opening-night pianist"
          },
          {
            qid: "Q924",
            name: "Jimmy Cobb",
            role: "opening-night drummer"
          },
          {
            qid: "Q921",
            name: "Paul Chambers",
            role: "opening-night bassist"
          },
          {
            qid: "Q41",
            name: "Miles Davis",
            role: "played engagements; car shot up after one"
          },
          {
            qid: "Q448",
            name: "Sonny Stitt",
            role: "regular headliner; let young players sit in"
          },
          {
            qid: "Q493",
            name: "Herbie Hancock",
            role: "played there in Miles Davis's band"
          },
          {
            qid: "Q45",
            name: "Ron Carter",
            role: "played there in Miles Davis's band"
          },
          {
            qid: "Q410",
            name: "Wayne Shorter",
            role: "played there in Miles Davis's band"
          },
          {
            qid: "Q20",
            name: "Tony Williams",
            role: "played there with Miles and McLean"
          },
          {
            qid: "Q22236",
            name: "Mighty Sparrow",
            role: "recorded an album there; played many weeks"
          },
          {
            qid: "Q1953",
            name: "Booker Ervin",
            role: "played there"
          },
          {
            qid: "Q457",
            name: "Howard McGhee",
            role: "performed there"
          },
          {
            qid: "Q22302",
            name: "Arthur Prysock",
            role: "performed there"
          },
          {
            qid: "Q18957",
            name: "James Spaulding",
            role: "played with Stitt and Hubbard's band"
          },
          {
            qid: "Q934",
            name: "Freddie Hubbard",
            role: "led a band there in 1968"
          },
          {
            qid: "Q365",
            name: "Jackie McLean",
            role: "performed there"
          },
          {
            qid: "Q18981",
            name: "Larry Ridley",
            role: "worked there with McLean"
          },
          {
            qid: "Q18954",
            name: "Harold Mabern",
            role: "sat in there several times"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "played there with own group"
          },
          {
            qid: "Q18929",
            name: "Carlos Garnett",
            role: "performed there"
          },
          {
            qid: "Q18913",
            name: "Ahmed Abdullah",
            role: "played there as a young man"
          },
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "frequent visitor in the early 1960s"
          },
          {
            qid: "Q18980",
            name: "Kwesi Mensah Wali",
            role: "his most-visited Brooklyn club"
          }
        ],
        active: {
          from: "1966",
          to: "1990s",
          basis: "Habersham-Bey: bought about 1966, ran it 25 years. Wikibase says 1967; Weston says late 60s; Weusi and Mensah Wali recall visits around 1960.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1967"
          ],
          end_year: [],
          wikidata: [
            "Q65548661"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 88,
          interviews: 24,
          statements_with_people: 101
        }
      },
      {
        qid: "Q22435",
        name: "The Centaur",
        url: "https://base.semlab.io/wiki/Item:Q22435",
        address: "Franklin Avenue between Prospect Place and Park Place, Brooklyn, NY",
        latitude: 40.674623,
        longitude: -73.956546,
        locations: [
          {
            address: "Franklin Avenue between Prospect Place and Park Place, Brooklyn, NY",
            latitude: 40.674623,
            longitude: -73.956546,
            coordinates_from: "midpoint of two geocoded corners"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 29.7,
          rank: 76,
          linked_entities: 5,
          linked_people: 5,
          statements: 6,
          interviews: 1,
          mentions: 1
        },
        summary: "The Centaur was a bar on Franklin Avenue between Prospect Place and Park Place that Ed Stoute says many people have forgotten. Wynton Kelly lived almost around the corner, and whenever his trio was not out with Miles Davis you could hear Kelly, Paul Chambers and Jimmy Cobb there every weekend. A grand piano stood up behind the bar. Stoute calls it one of the most dynamic trios he ever heard: it swung from the first note and climbed to another level each chorus until your chest tightened, and he regrets that nobody recorded what Kelly played there. Stoute is the only speaker to describe it.",
        people: [
          {
            qid: "Q22429",
            name: "Wynton Kelly Trio",
            role: "played there every weekend"
          },
          {
            qid: "Q1098",
            name: "Wynton Kelly",
            role: "pianist; lived around the corner"
          },
          {
            qid: "Q921",
            name: "Paul Chambers",
            role: "bassist with the Kelly trio"
          },
          {
            qid: "Q924",
            name: "Jimmy Cobb",
            role: "drummer with the Kelly trio"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "Stoute ties it to the Kelly trio's years with Miles Davis but gives no year.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 6
        }
      },
      {
        qid: "Q18884",
        name: "The Continental",
        url: "https://base.semlab.io/wiki/Item:Q18884",
        address: "Nostrand Avenue between Prospect Place and Park Place, Brooklyn, NY",
        latitude: 40.67387,
        longitude: -73.950136,
        locations: [
          {
            address: "Nostrand Avenue between Prospect Place and Park Place, Brooklyn, NY",
            latitude: 40.67387,
            longitude: -73.950136,
            coordinates_from: "midpoint of two geocoded corners"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 85.3,
          rank: 3,
          linked_entities: 40,
          linked_people: 40,
          statements: 55,
          interviews: 15,
          mentions: 54
        },
        summary: "The Continental was a strictly-jazz club on Nostrand Avenue between Prospect and Park Places, which several speakers call the place to be before the Blue Coronet. Donald Sangster, who arrived in 1954, calls it the hippest spot he ever saw, with the stage over the bar and Willie Jones usually on drums. He names Lee Morgan, a teenage Ray Draper, Cannonball Adderley, J.J. Johnson, Jutta Hipp, Sonny Stitt and Wynton Kelly as visitors, and says Miles Davis's $1,500 fee pushed admission to $1.25. Sangster says a man named Scottie owned it. Kwesi Mensah Wali lived behind it; in summer the back door stood open and he listened from his fire escape. Jimmy Morton caught Elmo Hope's piano stool as it slid off the stage. Reggie Workman worked there with Gigi Gryce, and Dickie Habersham-Bey's interest in jazz began with seeing Miles Davis there.",
        people: [
          {
            qid: "Q22961",
            name: "Scottie",
            role: "owner"
          },
          {
            qid: "Q19039",
            name: "Willie Jones",
            role: "usual drummer"
          },
          {
            qid: "Q41",
            name: "Miles Davis",
            role: "performed there"
          },
          {
            qid: "Q331",
            name: "Horace Silver",
            role: "performed there"
          },
          {
            qid: "Q281",
            name: "Art Blakey",
            role: "performed there"
          },
          {
            qid: "Q47",
            name: "Sonny Rollins",
            role: "performed there"
          },
          {
            qid: "Q55",
            name: "Kenny Dorham",
            role: "performed there"
          },
          {
            qid: "Q9",
            name: "Gigi Gryce",
            role: "led a band there"
          },
          {
            qid: "Q1403",
            name: "Reggie Workman",
            role: "played there with Gigi Gryce"
          },
          {
            qid: "Q22548",
            name: "Elmo Hope",
            role: "played piano there"
          },
          {
            qid: "Q448",
            name: "Sonny Stitt",
            role: "performed there"
          },
          {
            qid: "Q959",
            name: "Lee Morgan",
            role: "performed there"
          },
          {
            qid: "Q22774",
            name: "Ray Draper",
            role: "performed there as a teenager"
          },
          {
            qid: "Q777",
            name: "Cannonball Adderley",
            role: "performed there"
          },
          {
            qid: "Q1090",
            name: "J.J. Johnson",
            role: "performed there"
          },
          {
            qid: "Q278",
            name: "Kai Winding",
            role: "performed there"
          },
          {
            qid: "Q23166",
            name: "Jutta Hipp",
            role: "performed there"
          },
          {
            qid: "Q1098",
            name: "Wynton Kelly",
            role: "performed there"
          },
          {
            qid: "Q18943",
            name: "Ernie Henry",
            role: "performed there"
          },
          {
            qid: "Q661",
            name: "Art Farmer",
            role: "performed there"
          },
          {
            qid: "Q23165",
            name: "Addison Farmer",
            role: "performed there"
          },
          {
            qid: "Q18957",
            name: "James Spaulding",
            role: "jammed there early on"
          },
          {
            qid: "Q18936",
            name: "Donald Sangster",
            role: "regular from 1954"
          },
          {
            qid: "Q18980",
            name: "Kwesi Mensah Wali",
            role: "neighbor who listened from outside"
          },
          {
            qid: "Q19013",
            name: 'Richard "Dickie" Habersham-Bey',
            role: "patron; sister-in-law worked there"
          }
        ],
        active: {
          from: "1954",
          to: "1950s",
          basis: "Wikibase 1954-1956 from Sangster's two years; but Weusi says its best years were the 50s and Mensah Wali thinks it closed around 1959-60.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1954"
          ],
          end_year: [
            "1956"
          ],
          wikidata: [
            "Q65548901"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 54,
          interviews: 15,
          statements_with_people: 55
        }
      },
      {
        qid: "Q22327",
        name: "The Coronet",
        url: "https://base.semlab.io/wiki/Item:Q22327",
        address: "1224 Fulton St, Brooklyn, NY 11216",
        latitude: 40.680244,
        longitude: -73.951614,
        locations: [
          {
            address: "1224 Fulton St, Brooklyn, NY 11216",
            latitude: 40.680244,
            longitude: -73.951614,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Coronet"
        ],
        connectedness: {
          score: 31.3,
          rank: 69,
          linked_entities: 2,
          linked_people: 1,
          statements: 3,
          interviews: 2,
          mentions: 6
        },
        summary: "The Coronet was the Fulton Street club that came before Dickie Habersham-Bey's Blue Coronet; Ed Stoute says the Blue Coronet was just The Coronet at first. Habersham-Bey, whose furniture store stood across the street, says it had a lot of jazz musicians, had a white owner, and closed in 1965, partly because of the drugs in the area. He bought the building around 1966, renovated it with a new kitchen, charged a door price to keep trouble out, and opened it as the Blue Coronet with Wynton Kelly, Jimmy Cobb and Paul Chambers, making it a Black-run room that gave local musicians a shot. His account is a little unclear on whether the first Coronet stood in the same building at 1200 Fulton; the wikibase gives 1224.",
        people: [
          {
            qid: "Q19013",
            name: 'Richard "Dickie" Habersham-Bey',
            role: "bought it, reopened as Blue Coronet"
          }
        ],
        active: {
          from: null,
          to: "1965",
          basis: "Habersham-Bey says The Coronet closed in 1965 and he bought it about 1966; no opening date is given.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 6,
          interviews: 2,
          statements_with_people: 1
        }
      },
      {
        qid: "Q22615",
        name: "The Cove",
        url: "https://base.semlab.io/wiki/Item:Q22615",
        address: "704 Nostrand Avenue, Brooklyn, NY",
        latitude: 40.674664,
        longitude: -73.950319,
        locations: [
          {
            address: "704 Nostrand Avenue, Brooklyn, NY",
            latitude: 40.674664,
            longitude: -73.950319,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 21.7,
          rank: 92,
          linked_entities: 2,
          linked_people: 2,
          statements: 3,
          interviews: 1,
          mentions: 1
        },
        summary: "Joe Long recalls The Cove on Nostrand Avenue, at number 704 he thinks, owned by a man named Hudson, as one stop in a round of local spots where neighborhood talent sang.",
        people: [
          {
            qid: "Q23206",
            name: "Hudson",
            role: "owner"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "Long gives no year or period for The Cove.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 3
        }
      },
      {
        qid: "Q18885",
        name: "The East",
        url: "https://base.semlab.io/wiki/Item:Q18885",
        address: "10 Claver Place, Brooklyn, NY 11238",
        latitude: 40.68279,
        longitude: -73.95786,
        locations: [
          {
            address: "10 Claver Place, Brooklyn, NY 11238",
            latitude: 40.68279,
            longitude: -73.95786,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine",
          "organization"
        ],
        also_called: [
          "The East, a cultural and education center for people of African descent"
        ],
        connectedness: {
          score: 97.8,
          rank: 2,
          linked_entities: 71,
          linked_people: 63,
          statements: 114,
          interviews: 19,
          mentions: 123
        },
        summary: "The East was a cultural and educational center for people of African descent at 10 Claver Place, founded in 1969 by Jitu Weusi, Al Vann and fellow teachers after the Ocean Hill-Brownsville strike and Weusi's ban from Pratt. Besides a bookstore, the Uhuru Sasa School, a food co-op and lectures, it presented radical jazz: Leon Thomas opened it, and Pharoah Sanders, Rahsaan Roland Kirk, Gary Bartz, McCoy Tyner and Sun Ra followed, with Sanders and Mtume recording there. Admission was for black people only; Elvin Jones walked out over it in 1973. No alcohol was served, Lottie Brown's kitchen fed hundreds, and Malcolm X and Coltrane murals hung on the walls. Speakers recall silent, then participatory audiences and a family feeling, and see Sista's Place, Jazz 966 and the New Muse's festival as heirs. Jimmy Morton was unsure whether it was more political or musical.",
        people: [
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "founder and chairman"
          },
          {
            qid: "Q22311",
            name: 'Albert "Al" Vann',
            role: "co-founder"
          },
          {
            qid: "Q18980",
            name: "Kwesi Mensah Wali",
            role: "booked music; ran food co-op"
          },
          {
            qid: "Q22532",
            name: "Gonsalves",
            role: "did most of the bookings"
          },
          {
            qid: "Q23453",
            name: "Lottie Brown",
            role: "cook who ran the kitchen"
          },
          {
            qid: "Q22242",
            name: "Frank Edward Weston",
            role: "regular visitor; brought pies, told Garvey stories"
          },
          {
            qid: "Q8",
            name: "Pharoah Sanders",
            role: "performed and recorded there"
          },
          {
            qid: "Q18818",
            name: "Mtume",
            role: "recorded there"
          },
          {
            qid: "Q18983",
            name: "Leon Thomas",
            role: "gave the opening performance"
          },
          {
            qid: "Q1909",
            name: "Roland Kirk",
            role: "performed there"
          },
          {
            qid: "Q18949",
            name: "Gary Bartz",
            role: "performed there"
          },
          {
            qid: "Q934",
            name: "Freddie Hubbard",
            role: "performed there"
          },
          {
            qid: "Q200",
            name: "McCoy Tyner",
            role: "performed there"
          },
          {
            qid: "Q52",
            name: "Sun Ra",
            role: "performed there"
          },
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "played there, about 1972-73"
          },
          {
            qid: "Q20533",
            name: "Azzedin Weston",
            role: "played with his father's quintet"
          },
          {
            qid: "Q18913",
            name: "Ahmed Abdullah",
            role: "performed there with several groups"
          },
          {
            qid: "Q18957",
            name: "James Spaulding",
            role: "led his first band there"
          },
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "early professional gigs there"
          },
          {
            qid: "Q19034",
            name: "Wade E. Barnes",
            role: "played and sat in there"
          },
          {
            qid: "Q18929",
            name: "Carlos Garnett",
            role: "performed there; replaced Elvin Jones"
          },
          {
            qid: "Q18937",
            name: "Doug Carn",
            role: "performed there"
          },
          {
            qid: "Q18960",
            name: "Jean Carn",
            role: "performed there"
          },
          {
            qid: "Q102",
            name: "Betty Carter",
            role: "performed there"
          },
          {
            qid: "Q1403",
            name: "Reggie Workman",
            role: "frequent visitor; modeled New Muse festival on it"
          }
        ],
        active: {
          from: "1969",
          to: "1986",
          basis: "Wikibase 1969-1986; Weusi says founded 1969, music began about 1970 and stopped around 1979-80; some performer qualifiers start in 1960, before it existed.",
          confidence: "high"
        },
        wikibase: {
          start_year: [
            "1969"
          ],
          end_year: [
            "1986"
          ],
          wikidata: [
            "Q48806213"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 123,
          interviews: 19,
          statements_with_people: 99
        }
      },
      {
        qid: "Q18886",
        name: "The Elks Club",
        url: "https://base.semlab.io/wiki/Item:Q18886",
        address: "1068 Fulton St, Brooklyn, NY 11238",
        latitude: 40.681502,
        longitude: -73.958089,
        locations: [
          {
            address: "1068 Fulton St, Brooklyn, NY 11238",
            latitude: 40.681502,
            longitude: -73.958089,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Elks Club"
        ],
        connectedness: {
          score: 52,
          rank: 29,
          linked_entities: 9,
          linked_people: 9,
          statements: 11,
          interviews: 5,
          mentions: 8
        },
        summary: "The Elks Club, or Elks Hall, on Fulton Street was a lodge hall where social clubs hired bands for dances. Randy Weston played dance-band jobs there for three dollars a night, from 9pm to 4am, and remembers a weekend when he and Cecil Payne came home on Army furlough to hear John English's band: admission was about a quarter, military police were checking soldiers, and Weston, who had left his papers at home, was handcuffed and marched through Penn Station while Payne, carrying forged papers, went untouched. Ed Stoute caught Thelonious Monk playing a dance there in the cabaret-card years, when Monk was shut out of many venues. On a 2008 tour Jitu Weusi said a black man bought the building around the 1930s and that it served generations of jazz, blues and dance audiences for some 70 or 80 years. Harold Valle knew nothing of it.",
        people: [
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "played dance-band jobs there"
          },
          {
            qid: "Q71",
            name: "Thelonious Monk",
            role: "played a dance there"
          },
          {
            qid: "Q23156",
            name: "John English",
            role: "bandleader at the dances"
          },
          {
            qid: "Q18931",
            name: "Cecil Payne",
            role: "attended a dance on Army furlough"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "heard Monk there"
          }
        ],
        active: {
          from: "1930s",
          to: "2000s",
          basis: "Weusi in 2008 says the building was bought around the 1930s and served entertainment for 70 to 80 years; Weston's dances there fall in his Army years.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548663"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 8,
          interviews: 5,
          statements_with_people: 11
        }
      },
      {
        qid: "Q18887",
        name: "The Fantasy",
        url: "https://base.semlab.io/wiki/Item:Q18887",
        address: "Utica Avenue between Prospect Place and Park Place, Brooklyn, NY",
        latitude: 40.672819,
        longitude: -73.930747,
        locations: [
          {
            address: "Utica Avenue between Prospect Place and Park Place, Brooklyn, NY",
            latitude: 40.672819,
            longitude: -73.930747,
            coordinates_from: "midpoint of two geocoded corners"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 47,
          rank: 38,
          linked_entities: 6,
          linked_people: 6,
          statements: 11,
          interviews: 4,
          mentions: 9
        },
        summary: "The Fantasy was a small club on Utica Avenue between Prospect Place and Park Place that booked top-shelf entertainment, mostly trios. Ed Stoute says people came from all over, with limousines double-parked out front; pianist-composer Burt Keyes played there, and Stoute himself played there near the end. Jitu Weusi remembers it as a favorite of Wynton Kelly: when Kelly had no big gig he would be there with his trio, and Weusi went several times to hear him. Michael Howard could picture it but not recall its name. Stoute says the first riot of the 1960s killed it, along with entertainment across Brooklyn, because white audiences stopped coming.",
        people: [
          {
            qid: "Q1098",
            name: "Wynton Kelly",
            role: "played there often with his trio"
          },
          {
            qid: "Q18926",
            name: "Burt Keyes",
            role: "pianist-composer, played there"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "played there toward the end"
          },
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "went there to hear Kelly"
          }
        ],
        active: {
          from: null,
          to: "1960s",
          basis: "Stoute says the first riot of the 1960s ended it; no opening date is given.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 9,
          interviews: 4,
          statements_with_people: 11
        }
      },
      {
        qid: "Q18888",
        name: "The Happy Landing",
        url: "https://base.semlab.io/wiki/Item:Q18888",
        address: "Gates Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Gates Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 32.9,
          rank: 62,
          linked_entities: 4,
          linked_people: 4,
          statements: 4,
          interviews: 2,
          mentions: 2
        },
        summary: "The Happy Landing was a little joint around the corner from where James Spaulding lived. He played there with singer Joe Louis and met Carlos Garnett when Garnett came in to jam. Spaulding puts it on Case Avenue; the wikibase says Gates Avenue.",
        people: [
          {
            qid: "Q18957",
            name: "James Spaulding",
            role: "played there; lived around the corner"
          },
          {
            qid: "Q746",
            name: "Joe Louis",
            role: "singer who performed there"
          },
          {
            qid: "Q18929",
            name: "Carlos Garnett",
            role: "sat in and jammed"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No years are given.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q72889802"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 4
        }
      },
      {
        qid: "Q18889",
        name: "The Hole (Bridge and Willoughby)",
        url: "https://base.semlab.io/wiki/Item:Q18889",
        address: "Bridge Street & Willoughby Avenue, Brooklyn, NY",
        latitude: 40.692168,
        longitude: -73.985281,
        locations: [
          {
            address: "Bridge Street & Willoughby Avenue, Brooklyn, NY",
            latitude: 40.692168,
            longitude: -73.985281,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 43.3,
          rank: 42,
          linked_entities: 8,
          linked_people: 7,
          statements: 11,
          interviews: 2,
          mentions: 5
        },
        summary: "The Hole was an after-hours jam session spot at Bridge Street and Willoughby Avenue. Ed Stoute gives the way in: walk down Bridge Street from Fulton, go down a flight of subway stairs, and take the door on the right. Sessions ran all night; he and his brother once went in on a Saturday night and left on Sunday night. He says all kinds of musicians came through, naming Jaki Byard and Gil Coggins, and Tulivu-Donna Cumberbatch says her father, Harold Cumberbatch, played the sessions there all the time. Jo Ann Cheatham notes a second Hole at Eastern Parkway and Nostrand, a different place.",
        people: [
          {
            qid: "Q18953",
            name: "Harold Cumberbatch",
            role: "played its jam sessions often"
          },
          {
            qid: "Q30",
            name: "Jaki Byard",
            role: "came through to play"
          },
          {
            qid: "Q18950",
            name: "Gil Coggins",
            role: "hung out there"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "attended all-night sessions"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No dates on the wikibase or in the passages.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 5,
          interviews: 2,
          statements_with_people: 9
        }
      },
      {
        qid: "Q19087",
        name: "The Hole (Eastern Parkway and Nostrand)",
        url: "https://base.semlab.io/wiki/Item:Q19087",
        address: "Eastern Parkway & Nostrand Avenue, Brooklyn, NY",
        latitude: 40.669826,
        longitude: -73.950502,
        locations: [
          {
            address: "Eastern Parkway & Nostrand Avenue, Brooklyn, NY",
            latitude: 40.669826,
            longitude: -73.950502,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 21.7,
          rank: 93,
          linked_entities: 2,
          linked_people: 1,
          statements: 3,
          interviews: 1,
          mentions: 1
        },
        summary: "Jo Ann Cheatham mentions in passing that there was another club called the Hole, at Eastern Parkway and Nostrand Avenue; nothing more is said about it.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and no dates in the single mention.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q18890",
        name: "The Id",
        url: "https://base.semlab.io/wiki/Item:Q18890",
        address: "East New York Avenue & Utica Avenue, Brooklyn, NY",
        latitude: 40.662758,
        longitude: -73.931644,
        locations: [
          {
            address: "East New York Avenue & Utica Avenue, Brooklyn, NY",
            latitude: 40.662758,
            longitude: -73.931644,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 50.9,
          rank: 33,
          linked_entities: 11,
          linked_people: 11,
          statements: 15,
          interviews: 3,
          mentions: 8
        },
        summary: "The Id was a large room at East New York Avenue and Utica Avenue, in a building that had been Satellite Caterers and is now a church. Jimmy Morton recalls going downstairs to reach it. Ed Stoute, who says it opened in the 1970s, calls it a beautiful place with a big long bar and remembers walking in on Cedar Walton's group, with Billy Higgins laughing at him from the drums. He also names Charles Davis, Richard Davis, Clifford Jordan and Sam Jones, and Morton saw Clifford Jordan and Kenny Dorham there. For Stoute it was one of the last hot rooms, and its sudden closing, which he puts down to money troubles, marked how jazz clubs were thinning out. Jo Ann Cheatham remembers it instead for R&B shows. In the same breath Morton mentions the Club Just Us wives who supported the music.",
        people: [
          {
            qid: "Q1365",
            name: "Cedar Walton",
            role: "performed there"
          },
          {
            qid: "Q204",
            name: "Billy Higgins",
            role: "performed there"
          },
          {
            qid: "Q63",
            name: "Clifford Jordan",
            role: "performed there"
          },
          {
            qid: "Q1759",
            name: "Sam Jones",
            role: "performed there"
          },
          {
            qid: "Q74",
            name: "Charles Davis (saxophonist)",
            role: "performed there"
          },
          {
            qid: "Q736",
            name: "Richard Davis",
            role: "performed there"
          },
          {
            qid: "Q55",
            name: "Kenny Dorham",
            role: "performed there"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "regular from 1970"
          },
          {
            qid: "Q18966",
            name: "Jimmy Morton",
            role: "attended performances there"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "attended R&B shows there"
          }
        ],
        active: {
          from: "1970",
          to: "1970s",
          basis: "Wikibase start 1970 and Stoute says it opened in the 70s; no one gives a closing year, so the end is a loose inference.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1970"
          ],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 8,
          interviews: 3,
          statements_with_people: 15
        }
      },
      {
        qid: "Q18891",
        name: "The Jazz Spot",
        url: "https://base.semlab.io/wiki/Item:Q18891",
        address: "Marcus Garvey Boulevard between DeKalb Avenue and Kosciusko Street, Brooklyn, NY",
        latitude: 40.69233,
        longitude: -73.939909,
        locations: [
          {
            address: "Marcus Garvey Boulevard between DeKalb Avenue and Kosciusko Street, Brooklyn, NY",
            latitude: 40.69233,
            longitude: -73.939909,
            coordinates_from: "midpoint of two geocoded corners"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 59.6,
          rank: 19,
          linked_entities: 15,
          linked_people: 14,
          statements: 38,
          interviews: 3,
          mentions: 24
        },
        summary: "The Jazz Spot was a small, recent club on Marcus Garvey Boulevard between DeKalb Avenue and Kosciusko Street, run by Lillithe Meyers and her daughter Tiecha Merritt. Speakers describe a cozy, clean, tasteful room with a brick wall and pictures, a counter for food and drink but no alcohol, and a backyard garden for outdoor jazz. Admission was affordable but higher than most. It ran themed series such as one featuring women players, and Danny Mixon, Kim Clarke, Joanne Brackeen, Lil Phillips and Bob Cunningham played there; Harold Valle hosted the Monday jam sessions and MC'd. Jitu Weusi says Meyers was inspired by the Central Brooklyn Jazz Consortium, but the spot sat beside the Eleanor Roosevelt housing projects, far from the subway, in a neighborhood unused to jazz, and never won local economic support. Tulivu-Donna Cumberbatch calls it short-lived; Michael Howard guesses five years.",
        people: [
          {
            qid: "Q26310",
            name: "Lillithe Meyers",
            role: "co-founder and proprietor"
          },
          {
            qid: "Q26311",
            name: "Tiecha Merritt",
            role: "co-founder with her mother"
          },
          {
            qid: "Q18955",
            name: "Harold Valle",
            role: "MC and Monday jam session host"
          },
          {
            qid: "Q22312",
            name: "Danny Mixon",
            role: "performed there regularly"
          },
          {
            qid: "Q22578",
            name: "Kim Clarke",
            role: "performed there"
          },
          {
            qid: "Q873",
            name: "Joanne Brackeen",
            role: "performed there"
          },
          {
            qid: "Q26321",
            name: "Lil Phillips",
            role: "performed there"
          },
          {
            qid: "Q18922",
            name: "Bob Cunningham",
            role: "performed there"
          },
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "performed there"
          },
          {
            qid: "Q18996",
            name: "Michael Howard",
            role: "Consortium supporter; visited often"
          }
        ],
        active: {
          from: "2003",
          to: "2009",
          basis: "Wikibase years 2003 to 2009; Howard guesses it lasted about five years and Cumberbatch calls it short-lived.",
          confidence: "high"
        },
        wikibase: {
          start_year: [
            "2003"
          ],
          end_year: [
            "2009"
          ],
          wikidata: []
        },
        evidence: {
          strength: "strong",
          interview_blocks: 24,
          interviews: 3,
          statements_with_people: 37
        }
      },
      {
        qid: "Q18893",
        name: "The Monaco",
        url: "https://base.semlab.io/wiki/Item:Q18893",
        address: "Utica Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Utica Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 35.5,
          rank: 53,
          linked_entities: 4,
          linked_people: 4,
          statements: 4,
          interviews: 2,
          mentions: 4
        },
        summary: "The Monaco was a bar on Utica Avenue near Pacific Street. Sam Pinn says it was not known for music, and Jitu Weusi lists it among bars around 1960 that only now and then had someone playing.",
        people: [],
        active: {
          from: "1960s",
          to: null,
          basis: "Weusi mentions it in describing the scene around 1960 to 1962; nothing else dates it.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68931961"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 4,
          interviews: 2,
          statements_with_people: 4
        }
      },
      {
        qid: "Q18894",
        name: "The Muse",
        url: "https://base.semlab.io/wiki/Item:Q18894",
        address: "Bedford Avenue & Eastern Parkway, Brooklyn, NY",
        latitude: 40.67017,
        longitude: -73.955255,
        locations: [
          {
            address: "Bedford Avenue & Eastern Parkway, Brooklyn, NY",
            latitude: 40.67017,
            longitude: -73.955255,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Bedford Lincoln Neighborhood Museum",
          "MUSE: the Bedford Lincoln Neighborhood Museum"
        ],
        connectedness: {
          score: 68.9,
          rank: 13,
          linked_entities: 24,
          linked_people: 19,
          statements: 44,
          interviews: 6,
          mentions: 23
        },
        summary: "The Muse, first called the Bedford Lincoln Neighborhood Museum, was a community museum with workshops in dance, art and music for children, including jazz instruction. Bob Myers says it occupied a temporary home from 1968 to 1977 while the Brooklyn Children's Museum built a new one, and puts it at Bedford and Eastern Parkway; Ahmed Abdullah, Wade Barnes and Jo Ann Cheatham place it at Bedford and Lincoln Place. Barnes calls it the main spot in Brooklyn: Friday performances, a weekly big band, lessons all week, where he first saw Tootie Heath and met Roland Alexander, Wes Anderson and their sons, who came as toddlers. Abdullah got his roots at Bill Barron's jam sessions, where Danny Mixon often played. Barnes says Brooklyn audiences there wanted music that swung hard. Kiane Zawadi and Roland Alexander taught there. The wikibase calls Reggie Workman founder; Workman says he arrived later, replacing Chris White.",
        people: [
          {
            qid: "Q1193",
            name: "Bill Barron",
            role: "teacher; ran the jam sessions"
          },
          {
            qid: "Q1403",
            name: "Reggie Workman",
            role: "jazz instructor, administrator, led big band"
          },
          {
            qid: "Q1198",
            name: "Chris White",
            role: "staff; helped start music program"
          },
          {
            qid: "Q22542",
            name: "Rudy Collins",
            role: "helped start the music program"
          },
          {
            qid: "Q19017",
            name: "Roland Alexander",
            role: "taught and performed there"
          },
          {
            qid: "Q18979",
            name: "Kiane Zawadi",
            role: "taught there"
          },
          {
            qid: "Q18987",
            name: "Louis Reyes Rivera",
            role: "on the staff"
          },
          {
            qid: "Q22312",
            name: "Danny Mixon",
            role: "regular at the jam sessions"
          },
          {
            qid: "Q18913",
            name: "Ahmed Abdullah",
            role: "played the jam sessions as a young man"
          },
          {
            qid: "Q19034",
            name: "Wade E. Barnes",
            role: "regular as a young musician"
          },
          {
            qid: "Q1467",
            name: "Tootie Heath",
            role: "performed there"
          },
          {
            qid: "Q22523",
            name: "Wes Anderson, Sr.",
            role: "regular with his son"
          },
          {
            qid: "Q2020",
            name: 'Wes "Warmdaddy" Anderson',
            role: "came there from early childhood"
          },
          {
            qid: "Q22952",
            name: "Taru Alexander",
            role: "came there from early childhood"
          },
          {
            qid: "Q353",
            name: "Frank Foster",
            role: "performed there"
          },
          {
            qid: "Q954",
            name: "Kenny Barron",
            role: "performed there"
          }
        ],
        active: {
          from: "1968",
          to: "1977",
          basis: "Wikibase and Bob Myers give 1968 to 1977; Abdullah places it in 1970; Barnes doubts it lasted much past the mid-1970s.",
          confidence: "high"
        },
        wikibase: {
          start_year: [
            "1968"
          ],
          end_year: [
            "1977"
          ],
          wikidata: [
            "Q65548898"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 23,
          interviews: 6,
          statements_with_people: 38
        }
      },
      {
        qid: "Q21581",
        name: "The Regent",
        url: "https://base.semlab.io/wiki/Item:Q21581",
        address: "1215 Fulton Street, Brooklyn, NY 11216",
        latitude: 40.680835,
        longitude: -73.952898,
        locations: [
          {
            address: "1215 Fulton Street, Brooklyn, NY 11216",
            latitude: 40.680835,
            longitude: -73.952898,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Regent"
        ],
        connectedness: {
          score: 31.8,
          rank: 68,
          linked_entities: 3,
          linked_people: 2,
          statements: 4,
          interviews: 2,
          mentions: 3
        },
        summary: "The Regent was a theater. Randy Weston lists it, placing it on Gates Avenue, among Brooklyn's own Black theaters at a time when the St. George Hotel barred Black people. Jitu Weusi says a Black judge, John Phillips, later renamed it the Slave Theatre, and that the building is now tied up in litigation. The wikibase gives its address as 1215 Fulton Street.",
        people: [
          {
            qid: "Q22235",
            name: "John Phillips",
            role: "renamed it the Slave Theatre"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years, and neither speaker dates it.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q45032277"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 3,
          interviews: 2,
          statements_with_people: 2
        }
      },
      {
        qid: "Q18896",
        name: "Tiffany Lounge",
        url: "https://base.semlab.io/wiki/Item:Q18896",
        address: "Nostrand Avenue & Bergen Street, Brooklyn, NY",
        latitude: 40.676101,
        longitude: -73.94992,
        locations: [
          {
            address: "Nostrand Avenue & Bergen Street, Brooklyn, NY",
            latitude: 40.676101,
            longitude: -73.94992,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 44.6,
          rank: 39,
          linked_entities: 7,
          linked_people: 7,
          statements: 11,
          interviews: 2,
          mentions: 9
        },
        summary: "The Tiffany Lounge was a bar in the middle of the block on Nostrand Avenue at Bergen Street. Ed Stoute had almost forgotten it, but recalls that a woman there presented music fairly regularly. For Wade Barnes, who came up after the Continental and the other major clubs had closed, it was one of the rooms where a younger generation of Brooklyn players worked. He played there with John Orr and Roland Alexander, and says the guitarist Ron Jackson played there all the time, along with Rafiq Rahim; all the Brooklyn cats played there, in his words. Neither speaker describes the interior in the passages given.",
        people: [
          {
            qid: "Q44377",
            name: "Ron Jackson",
            role: "played there all the time"
          },
          {
            qid: "Q19034",
            name: "Wade E. Barnes",
            role: "played there"
          },
          {
            qid: "Q18972",
            name: "John Orr",
            role: "played there with Barnes"
          },
          {
            qid: "Q19017",
            name: "Roland Alexander",
            role: "played there with Barnes"
          },
          {
            qid: "Q21684",
            name: "Rafiq Rahim",
            role: "played there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and no years in the passages; Barnes only says it ran after the major clubs had closed.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68931965"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 9,
          interviews: 2,
          statements_with_people: 11
        }
      },
      {
        qid: "Q18897",
        name: "Tip Top Inn",
        url: "https://base.semlab.io/wiki/Item:Q18897",
        address: "Fulton Street & Utica Avenue, Brooklyn, NY",
        latitude: 40.679284,
        longitude: -73.929067,
        locations: [
          {
            address: "Fulton Street & Utica Avenue, Brooklyn, NY",
            latitude: 40.679284,
            longitude: -73.929067,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Tip Top"
        ],
        connectedness: {
          score: 61.6,
          rank: 17,
          linked_entities: 11,
          linked_people: 11,
          statements: 14,
          interviews: 8,
          mentions: 20
        },
        summary: "The Tip Top Inn stood on the corner of Fulton Street and Utica Avenue, in Jo Ann Cheatham's and Jitu Weusi's telling; Ed Stoute puts it where Boys and Girls High School now is, and Alma Carroll was unsure, guessing near Troy. Speakers describe it differently. Stoute says it put on shows with a comedian, a singer, a band and an MC, modeled on the Baby Grand, and that the singer Toni Lester worked there; Randy Weston remembers an organ and violin duo with Richard Otto on violin; Donald Sangster calls it a blues joint. Weusi recalls piano, organ and guitar trios, not well-known players, and very good southern food such as lima beans. He counts it among the bars that only sometimes had music and were later ruined by the drug trade, and says nobody had to dress up to go there.",
        people: [
          {
            qid: "Q19027",
            name: "Toni Lester",
            role: "singer who worked there"
          },
          {
            qid: "Q19014",
            name: "Richard Otto",
            role: "violinist in an organ-violin duo"
          },
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "regular; remembered the food"
          }
        ],
        active: {
          from: "1950s",
          to: "1970s",
          basis: "Weusi's frequented-place statement runs 1950 to 1979; he lists it among early-1960s bars with occasional music. No opening or closing year is given.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "strong",
          interview_blocks: 20,
          interviews: 8,
          statements_with_people: 14
        }
      },
      {
        qid: "Q18898",
        name: "Tony's Grand Dean",
        url: "https://base.semlab.io/wiki/Item:Q18898",
        address: "Grand Avenue & Dean Street, Brooklyn, NY",
        latitude: 40.678941,
        longitude: -73.961963,
        locations: [
          {
            address: "Grand Avenue & Dean Street, Brooklyn, NY",
            latitude: 40.678941,
            longitude: -73.961963,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Tony's"
        ],
        connectedness: {
          score: 74.3,
          rank: 9,
          linked_entities: 32,
          linked_people: 32,
          statements: 61,
          interviews: 7,
          mentions: 29
        },
        summary: "Tony's Grand Dean, at Grand Avenue and Dean Street, was a plain local bar with a small kitchen and a back room where the music happened. Jimmy Morton says it was owned by an Italian family, the Bordellos, and that the dancer Vincent Jones talked them into making it a jazz spot and brought in the acts; Jones, Freddy Braithwaite Sr. and the artist Jimmy Gittins ran it. Admission was a dollar, and Morton, a law student who never paid, was told to announce the bands, which made him an MC; his early color slides document the scene. Monk played there often while barred from Manhattan clubs, unadvertised; the Modern Jazz Quartet, Mingus and Etta Jones came through. Morton and Randy Weston both recall a gang brawl: bottles flew, Monk kept playing, Gittins felled three men with one swing. Morton says it disbanded once Dorothy Kilgallen's column made it known.",
        people: [
          {
            qid: "Q19100",
            name: "Vincent Jones",
            role: "persuaded owners, booked acts, ran it"
          },
          {
            qid: "Q18947",
            name: "Fred Braithwaite, Sr.",
            role: "co-ran and promoted it"
          },
          {
            qid: "Q18965",
            name: "Jimmy Gittins",
            role: "co-ran it"
          },
          {
            qid: "Q18966",
            name: "Jimmy Morton",
            role: "MC and photographer from about 1953"
          },
          {
            qid: "Q71",
            name: "Thelonious Monk",
            role: "played there often, unadvertised"
          },
          {
            qid: "Q281",
            name: "Art Blakey",
            role: "brought Etta Jones there"
          },
          {
            qid: "Q18944",
            name: "Etta Jones",
            role: "sang there"
          },
          {
            qid: "Q90",
            name: "Charles Mingus",
            role: "played bass there"
          },
          {
            qid: "Q248",
            name: "Oscar Pettiford",
            role: "sat in on cello"
          },
          {
            qid: "Q22554",
            name: "Modern Jazz Quartet",
            role: "performed there"
          },
          {
            qid: "Q55",
            name: "Kenny Dorham",
            role: "played there, including fight night"
          },
          {
            qid: "Q19039",
            name: "Willie Jones",
            role: "on the bandstand with Monk"
          },
          {
            qid: "Q22241",
            name: "Sam Gill",
            role: "on the bandstand with Monk"
          },
          {
            qid: "Q41",
            name: "Miles Davis",
            role: "played there, per photographs"
          },
          {
            qid: "Q66",
            name: "Max Roach",
            role: "played there, per photographs"
          },
          {
            qid: "Q9",
            name: "Gigi Gryce",
            role: "played there, per photographs"
          },
          {
            qid: "Q661",
            name: "Art Farmer",
            role: "played there, per photographs"
          },
          {
            qid: "Q1090",
            name: "J.J. Johnson",
            role: "played there"
          },
          {
            qid: "Q921",
            name: "Paul Chambers",
            role: "played there"
          },
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "in the audience, including fight night"
          },
          {
            qid: "Q22546",
            name: "Andre Renard",
            role: "French visitor who came by"
          }
        ],
        active: {
          from: "1950s",
          to: "1960s",
          basis: "Wikibase performance dates 1950-1953; Morton started about 1953 and cites a 1954 ad; Weusi says it still had occasional shows in the early 1960s.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548904"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 29,
          interviews: 7,
          statements_with_people: 61
        }
      },
      {
        qid: "Q18899",
        name: "Town & Country",
        url: "https://base.semlab.io/wiki/Item:Q18899",
        address: "Eastern Parkway & Bedford Avenue, Brooklyn, NY",
        latitude: 40.67017,
        longitude: -73.955255,
        locations: [
          {
            address: "Eastern Parkway & Bedford Avenue, Brooklyn, NY",
            latitude: 40.67017,
            longitude: -73.955255,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Town and Country"
        ],
        connectedness: {
          score: 33.9,
          rank: 57,
          linked_entities: 3,
          linked_people: 3,
          statements: 5,
          interviews: 2,
          mentions: 5
        },
        summary: "Town & Country was a large venue that hosted mostly music. Jimmy Morton places it at Eastern Parkway and Bedford Avenue and MC'd there, including a fashion show. Ed Stoute, who played one gig there backing a singer and calls it huge, puts it instead on Flatbush Avenue across from Kings Plaza near Avenue U, so the speakers disagree on where it stood.",
        people: [
          {
            qid: "Q18966",
            name: "Jimmy Morton",
            role: "MC there"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "played one gig there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and neither speaker gives a date.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548905"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 5,
          interviews: 2,
          statements_with_people: 5
        }
      },
      {
        qid: "Q18900",
        name: "Town Hill",
        url: "https://base.semlab.io/wiki/Item:Q18900",
        address: "Bedford Avenue & Eastern Parkway, Brooklyn, NY",
        latitude: 40.67017,
        longitude: -73.955255,
        locations: [
          {
            address: "Bedford Avenue & Eastern Parkway, Brooklyn, NY",
            latitude: 40.67017,
            longitude: -73.955255,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 58.6,
          rank: 22,
          linked_entities: 14,
          linked_people: 14,
          statements: 16,
          interviews: 5,
          mentions: 12
        },
        summary: "Town Hill was a large nightclub the wikibase and Donald Sangster place at Bedford Avenue and Eastern Parkway, though Willard Jenkins asks about it as being at Fulton and Arlington Place. Ed Stoute says the owners of both Baby Grands also owned it. It was a variety room rather than a jazz club: Dickie Habersham-Bey, contrasting it with his own strictly-jazz Blue Coronet, calls it a huge place given mostly to singers such as Sam Cooke and Dinah Washington. Sangster adds comedians Irwin C. Watson, Scoey Mitchell and Flip Wilson, and says admission was too expensive for him to go often. Harold Valle saw Joe Williams there, while Tulivu-Donna Cumberbatch and Jo Ann Cheatham remember it putting on R&B shows by the time they went. Kwesi Mensah Wali names it among clubs near Park Place and Nostrand and thinks it may have closed after he left high school.",
        people: [
          {
            qid: "Q61",
            name: "Dinah Washington",
            role: "performed there"
          },
          {
            qid: "Q1658",
            name: "Sam Cooke",
            role: "performed there"
          },
          {
            qid: "Q46",
            name: "Joe Williams",
            role: "performed there"
          },
          {
            qid: "Q22514",
            name: "Irwin C. Watson",
            role: "comedian who performed there"
          },
          {
            qid: "Q23164",
            name: "Scoey Mitchell",
            role: "comedian who performed there"
          },
          {
            qid: "Q1846",
            name: "Flip Wilson",
            role: "performed there"
          },
          {
            qid: "Q18955",
            name: "Harold Valle",
            role: "saw Joe Williams there"
          },
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "attended its R&B shows"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "attended its R&B shows"
          },
          {
            qid: "Q18936",
            name: "Donald Sangster",
            role: "went occasionally; found it expensive"
          }
        ],
        active: {
          from: "1950s",
          to: "1960s",
          basis: "No years given; Mensah Wali knew it in high school and thinks it closed after about 1960, but Cumberbatch and Cheatham recall later R&B shows.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "strong",
          interview_blocks: 12,
          interviews: 5,
          statements_with_people: 16
        }
      },
      {
        qid: "Q22243",
        name: "Trios Restaurant",
        url: "https://base.semlab.io/wiki/Item:Q22243",
        address: "346 Marcus Garvey Blvd, Brooklyn, NY 11221",
        latitude: 40.685165,
        longitude: -73.938701,
        locations: [
          {
            address: "346 Marcus Garvey Blvd, Brooklyn, NY 11221",
            latitude: 40.685165,
            longitude: -73.938701,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Trio's Restaurant",
          "Trios"
        ],
        connectedness: {
          score: 51.6,
          rank: 31,
          linked_entities: 10,
          linked_people: 9,
          statements: 20,
          interviews: 2,
          mentions: 18
        },
        summary: "Trios Restaurant, on Sumner Avenue (now Marcus Garvey Boulevard) between Putnam and Jefferson, grew out of Randy Weston's father's businesses. Frank Weston had a barbershop on the next block in the 1940s, where Randy shined shoes beside Cecil Payne's father's tailor shop, then a candy store with a window grill selling hot dogs, pickled pigs' feet and soursop, which he expanded into a restaurant with a counter and tables. When his father bought the house at 330 Lafayette Avenue in 1946, Randy took over the Sumner Avenue place and renamed it Trios. Its draw was the jukebox: Randy stocked Monk, Sarah Vaughan and Billie Holiday next to Stravinsky, Bartok and Berg, an idea he got from George Russell. Open around the clock, it became a base where musicians came after their gigs; Randy would drive Monk over in his father's car.",
        people: [
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "ran and named it from 1946"
          },
          {
            qid: "Q22242",
            name: "Frank Edward Weston",
            role: "founder and owner"
          },
          {
            qid: "Q71",
            name: "Thelonious Monk",
            role: "came by after gigs"
          }
        ],
        active: {
          from: "1946",
          to: null,
          basis: "Weston dates his taking over and naming it Trios to 1946; the wikibase start year agrees. No closing date is given.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1946"
          ],
          end_year: [],
          wikidata: [
            "Q65548660"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 18,
          interviews: 2,
          statements_with_people: 18
        }
      },
      {
        qid: "Q18901",
        name: "Turbo Village",
        url: "https://base.semlab.io/wiki/Item:Q18901",
        address: "Halsey Street & Reid Avenue, Brooklyn, NY",
        latitude: 40.684177,
        longitude: -73.929295,
        locations: [
          {
            address: "Halsey Street & Reid Avenue, Brooklyn, NY",
            latitude: 40.684177,
            longitude: -73.929295,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Rusty Turbo Village",
          "Rusty's Turbo Village",
          "Rusty's Village",
          "Turbo's Village"
        ],
        connectedness: {
          score: 65.4,
          rank: 15,
          linked_entities: 13,
          linked_people: 13,
          statements: 16,
          interviews: 10,
          mentions: 22
        },
        summary: "Turbo Village, which Jitu Weusi calls Rusty's Turbo Village, was a jazz bar at Halsey Street and Reid Avenue. Jimmy Morton describes it as not fancy, but with quality jazz. The name people tie to it most is Freddie Hubbard: Ed Stoute says Hubbard played there when he first came to New York, and both Randy Weston and Reggie Workman remember it as the Halsey Street club where Hubbard always was. Larry Ridley sat in there on his first trip to New York in 1959 and met Tommy Williams and Andrew Cyrille. Harold Mabern thinks he played there once. Weusi was too young to get in at first and knew it from his elders' talk. Around 1960 he still counted it among the few spots with regular music, and word that someone was playing there spread by phone. Dickie Habersham-Bey dismisses it as nothing compared to his own club.",
        people: [
          {
            qid: "Q934",
            name: "Freddie Hubbard",
            role: "played there when new to New York"
          },
          {
            qid: "Q18981",
            name: "Larry Ridley",
            role: "sat in there in 1959"
          },
          {
            qid: "Q18954",
            name: "Harold Mabern",
            role: "played there once"
          },
          {
            qid: "Q19026",
            name: "Tommy Williams",
            role: "met Ridley there in 1959"
          },
          {
            qid: "Q471",
            name: "Andrew Cyrille",
            role: "met Ridley there in 1959"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "frequented it from age 18"
          },
          {
            qid: "Q18955",
            name: "Harold Valle",
            role: "frequented it"
          },
          {
            qid: "Q18966",
            name: "Jimmy Morton",
            role: "went there"
          }
        ],
        active: {
          from: "1950s",
          to: "1960s",
          basis: "Wikibase gives 1954-1956, but Ridley sat in there in 1959 and Weusi says it had regular music around 1960.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1954"
          ],
          end_year: [
            "1956"
          ],
          wikidata: [
            "Q65548906"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 22,
          interviews: 10,
          statements_with_people: 16
        }
      },
      {
        qid: "Q26026",
        name: "Uhuru Cultural Center",
        url: "https://base.semlab.io/wiki/Item:Q26026",
        address: "Sumner Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Sumner Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [
          "Sumner Avenue Armory"
        ],
        connectedness: {
          score: 17,
          rank: 116,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "The Uhuru Cultural Center, in the Sumner Avenue Armory, appears only in Reggie Workman's remark that when The East moved into the Armory, people saw that its organizers were serious and its festival began to grow.",
        people: [],
        active: {
          from: "1970s",
          to: null,
          basis: "Workman places The East's growth in the 1970s; the move into the Armory is undated.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q23451",
        name: "Uhuru Sasa School",
        url: "https://base.semlab.io/wiki/Item:Q23451",
        address: "10 Claver Place, Brooklyn, NY",
        latitude: 40.682813,
        longitude: -73.957815,
        locations: [
          {
            address: "10 Claver Place, Brooklyn, NY",
            latitude: 40.682813,
            longitude: -73.957815,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "organization",
          "school"
        ],
        also_called: [
          "Freedom Now School"
        ],
        connectedness: {
          score: 28.4,
          rank: 79,
          linked_entities: 2,
          linked_people: 1,
          statements: 4,
          interviews: 2,
          mentions: 3
        },
        summary: "The Uhuru Sasa School, or Freedom Now School, at Claver Place, was the school The East started after it opened its bookstore. Jitu Weusi says it educated young people and adults as part of The East's aim of uplifting minds. Kwesi Mensah Wali says the African Street Carnival grew out of the school and The East, began on Claver Place, and later moved to Boys and Girls High School.",
        people: [
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "leader of The East, which founded it"
          }
        ],
        active: {
          from: "1970s",
          to: null,
          basis: "No wikibase years; Wali says the festival grew from it and had moved by about 1976-77, so the school predates that.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 3,
          interviews: 2,
          statements_with_people: 1
        }
      },
      {
        qid: "Q21582",
        name: "Unnamed music venue (Beverly Road/Bedford Avenue)",
        url: "https://base.semlab.io/wiki/Item:Q21582",
        address: "Beverly Road & Bedford Avenue, Brooklyn, NY",
        latitude: 40.644783,
        longitude: -73.954742,
        locations: [
          {
            address: "Beverly Road & Bedford Avenue, Brooklyn, NY",
            latitude: 40.644783,
            longitude: -73.954742,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 21.7,
          rank: 94,
          linked_entities: 2,
          linked_people: 2,
          statements: 2,
          interviews: 1,
          mentions: 1
        },
        summary: "Reggie Workman mentions an unnamed supper club near Beverly Road and Bedford Avenue that leaned towards jazz; nothing else is recorded about it.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and the single mention gives no date.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 2
        }
      },
      {
        qid: "Q23333",
        name: "Unnamed music venue (Eastern Parway, top of hill)",
        url: "https://base.semlab.io/wiki/Item:Q23333",
        address: "Eastern Parkway, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Eastern Parkway, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 19.1,
          rank: 98,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 2
        },
        summary: "Joe Long mentions a big venue at the top of the hill on Eastern Parkway as the next stop for people moving on from the Nostrand Avenue bars such as The Cove. He gives no name, dates or performers.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and Long gives no dates.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q19682",
        name: "Unnamed music venue (Farrragut Street/Nostrand Avenue)",
        url: "https://base.semlab.io/wiki/Item:Q19682",
        address: "Nostrand Avenue & Farragut Road, Brooklyn, NY",
        latitude: 40.636278,
        longitude: -73.948019,
        locations: [
          {
            address: "Nostrand Avenue & Farragut Road, Brooklyn, NY",
            latitude: 40.636278,
            longitude: -73.948019,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 23.8,
          rank: 87,
          linked_entities: 2,
          linked_people: 2,
          statements: 3,
          interviews: 1,
          mentions: 2
        },
        summary: "An unnamed spot at Farragut Road and Nostrand Avenue where Wade Barnes played two or three times in the early 1970s with the rather avant-garde saxophonist Ken Simon; Barnes is unsure of the details.",
        people: [
          {
            qid: "Q21690",
            name: "Ken Simon",
            role: "led gigs there, early 1970s"
          },
          {
            qid: "Q19034",
            name: "Wade E. Barnes",
            role: "played there two or three times"
          }
        ],
        active: {
          from: "1970s",
          to: "1970s",
          basis: "Barnes says he played there in the early 70s; the wikibase dates his and Simon's ties 1970-1973.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 1,
          statements_with_people: 3
        }
      },
      {
        qid: "Q23207",
        name: "Unnamed music venue (Franklin Avenue/near St. John's Place)",
        url: "https://base.semlab.io/wiki/Item:Q23207",
        address: "Franklin Avenue between St. John's Place and Lincoln Place, Brooklyn, NY",
        latitude: 40.671982,
        longitude: -73.9575,
        locations: [
          {
            address: "Franklin Avenue between St. John's Place and Lincoln Place, Brooklyn, NY",
            latitude: 40.671982,
            longitude: -73.9575,
            coordinates_from: "midpoint of two geocoded corners"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 30.3,
          rank: 74,
          linked_entities: 3,
          linked_people: 3,
          statements: 4,
          interviews: 2,
          mentions: 2
        },
        summary: "An unnamed club on Franklin Avenue between St. John's and Lincoln Place. Joe Long remembers a big place there that played jazz, and Donald Sangster says organist Rector Bailey played there regularly.",
        people: [
          {
            qid: "Q19012",
            name: "Rector Bailey",
            role: "played there regularly"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No dates on the wikibase or in the passages.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 2,
          statements_with_people: 4
        }
      },
      {
        qid: "Q22324",
        name: "Unnamed music venue (Fulton Street/Bedford Avenue)",
        url: "https://base.semlab.io/wiki/Item:Q22324",
        address: "Fulton Street & Bedford Avenue, Brooklyn, NY",
        latitude: 40.680647,
        longitude: -73.953376,
        locations: [
          {
            address: "Fulton Street & Bedford Avenue, Brooklyn, NY",
            latitude: 40.680647,
            longitude: -73.953376,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 17,
          rank: 117,
          linked_entities: 1,
          linked_people: 1,
          statements: 1,
          interviews: 1,
          mentions: 1
        },
        summary: "Dickie Habersham-Bey mentions an unnamed bar on the corner of Fulton Street and Bedford Avenue, one of five or six bars on a single block with the Baby Grand and the Arlington Inn, which kept plenty of people walking about.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and Habersham-Bey gives no dates.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 1,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q21583",
        name: "Unnamed music venue (Gates Avenue/Nostrand Avenue)",
        url: "https://base.semlab.io/wiki/Item:Q21583",
        address: "Gates Avenue & Nostrand Avenue, Brooklyn, NY",
        latitude: 40.686206,
        longitude: -73.950738,
        locations: [
          {
            address: "Gates Avenue & Nostrand Avenue, Brooklyn, NY",
            latitude: 40.686206,
            longitude: -73.950738,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 25.3,
          rank: 84,
          linked_entities: 2,
          linked_people: 2,
          statements: 3,
          interviews: 1,
          mentions: 3
        },
        summary: "An unnamed dance hall at Gates and Nostrand Avenues, reached by elevator. Ed Stoute remembers it as a dancehall but not its name; Randy Weston played there with a band, and recalls that the promoter ran off with the money before they were paid their 75 cents.",
        people: [
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "played there with a band"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and the speakers give no dates.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 3,
          interviews: 1,
          statements_with_people: 3
        }
      },
      {
        qid: "Q23442",
        name: "Unnamed music venue (Vanderbilt Avenue/Gates Avenue)",
        url: "https://base.semlab.io/wiki/Item:Q23442",
        address: "Vanderbilt Avenue & Gates Avenue, Brooklyn, NY",
        latitude: 40.684218,
        longitude: -73.968095,
        locations: [
          {
            address: "Vanderbilt Avenue & Gates Avenue, Brooklyn, NY",
            latitude: 40.684218,
            longitude: -73.968095,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 28.4,
          rank: 80,
          linked_entities: 2,
          linked_people: 2,
          statements: 2,
          interviews: 2,
          mentions: 3
        },
        summary: "An unnamed bar at Vanderbilt and Gates Avenues that Jitu Weusi counts among the regular jazz spots of the early 1960s, when the Blue Coronet was Brooklyn's top club. He says the organist Rector Bailey held down the chair there. In another interview Weusi uses it to describe how these rooms worked: each had a neighborhood crowd that came in to drink and listen, and when a known name played, perhaps a saxophonist like Frank Wess with one of the organists, people came from several neighborhoods, drawn by signs in the window announcing Friday, Saturday and Sunday shows. The project's tag inside the passages names it with Nostrand rather than Gates Avenue.",
        people: [
          {
            qid: "Q19012",
            name: "Rector Bailey",
            role: "resident organist"
          }
        ],
        active: {
          from: "1960s",
          to: "1960s",
          basis: "No wikibase years; Weusi lists it among clubs still going around 1960-62.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 3,
          interviews: 2,
          statements_with_people: 2
        }
      },
      {
        qid: "Q18903",
        name: "Up Over Jazz Caf\xE9",
        url: "https://base.semlab.io/wiki/Item:Q18903",
        address: "351 Flatbush Ave, Brooklyn, NY 11238",
        latitude: 40.677135,
        longitude: -73.972097,
        locations: [
          {
            address: "351 Flatbush Ave, Brooklyn, NY 11238",
            latitude: 40.677135,
            longitude: -73.972097,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Up Over Jazz Cafe"
        ],
        connectedness: {
          score: 70.6,
          rank: 10,
          linked_entities: 29,
          linked_people: 26,
          statements: 49,
          interviews: 5,
          mentions: 27
        },
        summary: "Up Over Jazz Caf\xE9 was Bob Myers's club, opened in 1995 in an upstairs space of about 1,100 square feet in his brother Phil's building on Flatbush Avenue, above the Wing Wagon, which supplied the food; hence the name. Inspired by Bradley's in the Village, Myers billed it as Brooklyn's nothing-but-jazz club: a quiet listening room with a good acoustic piano, a cover at the door, phones off and talk kept down. It ran six nights a week: a Monday jam led by Eddie Allen and then Vincent Herring that drew students from The New School and William Paterson, Enos Payne's vocal session on Tuesdays, Hip Hop meets Jazz on Wednesdays with Robert Glasper, Bilal and Common, and Glasper's trio on Thursdays for about three years. Cedar Walton and Ronnie Mathews dropped in from nearby. James Spaulding recorded there twice, and Jo Ann Cheatham remembers its warm colors and good music.",
        people: [
          {
            qid: "Q18923",
            name: "Bob Myers",
            role: "founder and owner"
          },
          {
            qid: "Q696",
            name: "Vincent Herring",
            role: "led the Monday jam session"
          },
          {
            qid: "Q22263",
            name: "Eddie Allen",
            role: "led the early Monday jam band"
          },
          {
            qid: "Q22259",
            name: "Robert Glasper",
            role: "Thursday trio leader for about three years"
          },
          {
            qid: "Q18935",
            name: "Enos Payne",
            role: "ran Tuesday vocal sessions and workshop"
          },
          {
            qid: "Q22275",
            name: "Anthony Wonsey",
            role: "jam session rhythm section"
          },
          {
            qid: "Q22260",
            name: "Richie Goods",
            role: "jam session rhythm section"
          },
          {
            qid: "Q22271",
            name: "E.J. Strickland",
            role: "jam session drummer; played with Glasper"
          },
          {
            qid: "Q22270",
            name: "Marcus Strickland",
            role: "played with Glasper"
          },
          {
            qid: "Q22254",
            name: "Bilal",
            role: "mainstay of Hip Hop meets Jazz"
          },
          {
            qid: "Q22266",
            name: "Common",
            role: "Hip Hop meets Jazz participant"
          },
          {
            qid: "Q18978",
            name: "Kenyatta Beasley",
            role: "performed there"
          },
          {
            qid: "Q18957",
            name: "James Spaulding",
            role: "recorded two albums there"
          },
          {
            qid: "Q1764",
            name: "Russell Malone",
            role: "performed there"
          },
          {
            qid: "Q1403",
            name: "Reggie Workman",
            role: "brought New School students"
          },
          {
            qid: "Q1365",
            name: "Cedar Walton",
            role: "neighbor who dropped in"
          },
          {
            qid: "Q1425",
            name: "Ronnie Mathews",
            role: "neighbor who dropped in"
          },
          {
            qid: "Q23358",
            name: "Mulgrew Miller",
            role: "came in with students"
          },
          {
            qid: "Q22545",
            name: "Nellie",
            role: "frequent participant"
          },
          {
            qid: "Q471",
            name: "Andrew Cyrille",
            role: "came by to support"
          },
          {
            qid: "Q22261",
            name: "Oliver Lake",
            role: "came by to support"
          },
          {
            qid: "Q18968",
            name: "Jo Ann Cheatham",
            role: "regular; presented Kenyatta Beasley there"
          },
          {
            qid: "Q18976",
            name: "Keisha St. Joan",
            role: "may have sung there"
          }
        ],
        active: {
          from: "1995",
          to: "2005",
          basis: "Myers says he opened it in 1995, though the wikibase gives 1994; wikibase end year 2005, while dated statements run to 2004.",
          confidence: "high"
        },
        wikibase: {
          start_year: [
            "1994"
          ],
          end_year: [
            "2005"
          ],
          wikidata: [
            "Q65548902"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 27,
          interviews: 5,
          statements_with_people: 44
        }
      },
      {
        qid: "Q22308",
        name: "Uptown Lounge",
        url: "https://base.semlab.io/wiki/Item:Q22308",
        address: "Sterling Street, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Sterling Street, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 8,
          rank: 118,
          linked_entities: 1,
          linked_people: 1,
          statements: 2,
          interviews: 0,
          mentions: 0
        },
        summary: "The Uptown Lounge was a bar on Sterling Street owned by Dickie Habersham-Bey. Its own dossier has no interview passages. In his interview, cited in the New World dossier, he lists it among the bars he had around 1985.",
        people: [
          {
            qid: "Q19013",
            name: 'Richard "Dickie" Habersham-Bey',
            role: "owner"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and no passages in its own dossier.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68933124"
          ]
        },
        evidence: {
          strength: "thin",
          interview_blocks: 0,
          interviews: 0,
          statements_with_people: 2
        }
      },
      {
        qid: "Q18904",
        name: "Valhal Jazz Pub",
        url: "https://base.semlab.io/wiki/Item:Q18904",
        address: "Fulton Street & Lafayette Avenue, Brooklyn, NY",
        latitude: 40.687035,
        longitude: -73.976245,
        locations: [
          {
            address: "Fulton Street & Lafayette Avenue, Brooklyn, NY",
            latitude: 40.687035,
            longitude: -73.976245,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "The ValHal Club",
          "ValHal Club",
          "Valhal's",
          "Valhalla"
        ],
        connectedness: {
          score: 60,
          rank: 18,
          linked_entities: 13,
          linked_people: 12,
          statements: 16,
          interviews: 5,
          mentions: 19
        },
        summary: "The Valhal Jazz Pub, also called the ValHal Club, was a bar with music in Fort Greene, which Keisha St. Joan puts at Fulton Street and Lafayette Avenue and Vanessa Rubin at the little circle, across from Frank's; both say it is now Scopello's, an Italian restaurant. Harold Valle says the street was lined with bars serving Navy Yard workers during the Second World War, and the Valhal was the last to hold out. Rubin calls it one of her first places, where she worked a lot in a duo with Kim Clarke and Franklin Gordon; St. Joan, Torrie McCartney, Cumberbatch and Melvin Sparks also performed there. Jitu Weusi and Michael Howard remember it packed for hours with organ trios, Ed Green among them, though Weusi places it at Vanderbilt and Gates, which conflicts with the others.",
        people: [
          {
            qid: "Q19031",
            name: "Vanessa Rubin",
            role: "sang there often early in career"
          },
          {
            qid: "Q22578",
            name: "Kim Clarke",
            role: "played there in Rubin's duo"
          },
          {
            qid: "Q22576",
            name: "Franklin Gordon",
            role: "played there in Rubin's duo"
          },
          {
            qid: "Q18976",
            name: "Keisha St. Joan",
            role: "sang there"
          },
          {
            qid: "Q19028",
            name: "Torrie McCartney",
            role: "sang there"
          },
          {
            qid: "Q19029",
            name: "Tulivu-Donna Cumberbatch",
            role: "performed there with Melvin Sparks"
          },
          {
            qid: "Q18994",
            name: "Melvin Sparks",
            role: "performed there"
          },
          {
            qid: "Q44375",
            name: "Ed Green",
            role: "performed there"
          },
          {
            qid: "Q18996",
            name: "Michael Howard",
            role: "regular patron"
          },
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "attended shows there"
          }
        ],
        active: {
          from: "1940s",
          to: null,
          basis: "No wikibase years; Valle ties the bar strip to the Second World War Navy Yard, and it later became Scopello's at an unstated date.",
          confidence: "low"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q68946503"
          ]
        },
        evidence: {
          strength: "strong",
          interview_blocks: 19,
          interviews: 5,
          statements_with_people: 14
        }
      },
      {
        qid: "Q18905",
        name: "Verona Caf\xE9",
        url: "https://base.semlab.io/wiki/Item:Q18905",
        address: "Fulton Street & Verona Place, Brooklyn, NY",
        latitude: 40.680301,
        longitude: -73.947732,
        locations: [
          {
            address: "Fulton Street & Verona Place, Brooklyn, NY",
            latitude: 40.680301,
            longitude: -73.947732,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "Cafe Verona",
          "Caf\xE9 Verona",
          "The Verona",
          "Verona Cafe"
        ],
        connectedness: {
          score: 47.3,
          rank: 37,
          linked_entities: 7,
          linked_people: 7,
          statements: 8,
          interviews: 3,
          mentions: 10
        },
        summary: "The Verona Caf\xE9, which Ed Stoute calls a little bar, stood on Fulton Street across from Verona Place; Willard Jenkins notes it is also written Caf\xE9 Verona in Amsterdam News clippings. Randy Weston, who places it in the late 1940s and early 1950s, heard Don Byas there with trumpeter Leonard Hawkins, whose big, fat sound he remembers, and also the alto player Pete Brown, a Brooklyn resident who taught many younger players, and pianist Marlowe Morris. Stoute recalls walking past, hearing a piano he never knew the place had, and finding Gil Coggins at it.",
        people: [
          {
            qid: "Q469",
            name: "Don Byas",
            role: "performed there"
          },
          {
            qid: "Q18984",
            name: "Leonard Hawkins",
            role: "trumpeter who played there"
          },
          {
            qid: "Q1747",
            name: "Pete Brown",
            role: "performed there"
          },
          {
            qid: "Q23162",
            name: "Marlowe Morris",
            role: "pianist Weston recalls there"
          },
          {
            qid: "Q18950",
            name: "Gil Coggins",
            role: "played piano there"
          },
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "listener"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "listener"
          }
        ],
        active: {
          from: "1947",
          to: "1953",
          basis: "Wikibase years 1947 to 1953, consistent with Weston placing it in the late 40s and early 50s.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1947"
          ],
          end_year: [
            "1953"
          ],
          wikidata: []
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 10,
          interviews: 3,
          statements_with_people: 8
        }
      },
      {
        qid: "Q21579",
        name: "Weeksville Heritage Center",
        url: "https://base.semlab.io/wiki/Item:Q21579",
        address: "158 BUFFALO AVENUE, BROOKLYN, NY, 11213",
        latitude: 40.673989,
        longitude: -73.925369,
        locations: [
          {
            address: "158 BUFFALO AVENUE, BROOKLYN, NY, 11213",
            latitude: 40.673989,
            longitude: -73.925369,
            coordinates_from: "Wikidata"
          }
        ],
        kind: [
          "institution"
        ],
        also_called: [
          "WHC",
          "Weeksville Heritage Society"
        ],
        connectedness: {
          score: 75,
          rank: 8,
          linked_entities: 41,
          linked_people: 10,
          statements: 55,
          interviews: 7,
          mentions: 19
        },
        summary: "The Weeksville Heritage Center is the historical institution that sponsored this oral history project: interviewers tell speakers the recordings will go into an archive in its new building, and in 2008 Maxine Gordon, its jazz consultant, started the project by driving Randy Weston around Brooklyn. Jennifer Scott says the project is meant to bring out jazz history the site did not yet show. Bob Myers lists it as a partner venue of the Central Brooklyn Jazz Consortium. Speakers also argue with it: Alma Carroll asks what it says about early music and about the children of Weeksville, and Donald Sangster credits Pam Green's restoration but disputes calling it the first Black township. Richard Habersham-Bey says his anti-poverty program gave it money.",
        people: [
          {
            qid: "Q18991",
            name: "Maxine Gordon",
            role: "jazz consultant to the project, 2008"
          },
          {
            qid: "Q18963",
            name: "Jennifer Scott",
            role: "director of research"
          },
          {
            qid: "Q23158",
            name: "Pam Green",
            role: "executive director; led its restoration"
          },
          {
            qid: "Q19038",
            name: "Willard Jenkins",
            role: "interviewer for its jazz project"
          },
          {
            qid: "Q657",
            name: "Randy Weston",
            role: "led the 2008 jazz drive-around"
          },
          {
            qid: "Q18967",
            name: "Jitu Weusi",
            role: "collaborated on the 2008 tour"
          }
        ],
        active: {
          from: "1838",
          to: "present",
          basis: "Wikibase start 1838; Sangster places Weeksville in the 1840s, and speakers in 2008-2011 describe it as active and building.",
          confidence: "medium"
        },
        wikibase: {
          start_year: [
            "1838"
          ],
          end_year: [],
          wikidata: [
            "Q7979549"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 19,
          interviews: 7,
          statements_with_people: 22
        }
      },
      {
        qid: "Q18910",
        name: "Willoughby Temple",
        url: "https://base.semlab.io/wiki/Item:Q18910",
        address: "Willoughby Avenue & Nostrand Avenue, Brooklyn, NY",
        latitude: 40.693424,
        longitude: -73.952172,
        locations: [
          {
            address: "Willoughby Avenue & Nostrand Avenue, Brooklyn, NY",
            latitude: 40.693424,
            longitude: -73.952172,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [
          "The Universal Temple"
        ],
        connectedness: {
          score: 41.6,
          rank: 46,
          linked_entities: 5,
          linked_people: 5,
          statements: 6,
          interviews: 3,
          mentions: 6
        },
        summary: "The Willoughby Temple, also called the Universal Temple, is a Masonic temple at Willoughby and Nostrand Avenues that Ed Stoute says is still standing. He describes it as more of a dancehall than a club, with a tiny stage, and remembers seeing Miles Davis play there. Jimmy Morton thinks he saw Jackie McLean there and connects it with Franklin Skeete, an old Brooklyn bass player he grew up with. When Willard Jenkins raised it in a second group interview, nobody had any memory of it.",
        people: [
          {
            qid: "Q41",
            name: "Miles Davis",
            role: "performed there"
          },
          {
            qid: "Q365",
            name: "Jackie McLean",
            role: "performed there, Morton thinks"
          },
          {
            qid: "Q22549",
            name: "Franklin Skeete",
            role: "Brooklyn bassist Morton links to it"
          },
          {
            qid: "Q18941",
            name: "Edwin Stoute",
            role: "saw Miles Davis there"
          },
          {
            qid: "Q18966",
            name: "Jimmy Morton",
            role: "attended performances there"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No years or periods are given; Stoute says only that the building still stands.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: [
            "Q65548907"
          ]
        },
        evidence: {
          strength: "moderate",
          interview_blocks: 6,
          interviews: 3,
          statements_with_people: 6
        }
      },
      {
        qid: "Q22333",
        name: "Wing Wagon",
        url: "https://base.semlab.io/wiki/Item:Q22333",
        address: "Flatbush Avenue, Brooklyn, NY",
        latitude: null,
        longitude: null,
        locations: [
          {
            address: "Flatbush Avenue, Brooklyn, NY",
            latitude: null,
            longitude: null,
            coordinates_from: null
          }
        ],
        kind: [
          "organization"
        ],
        also_called: [],
        connectedness: {
          score: 23.8,
          rank: 88,
          linked_entities: 2,
          linked_people: 1,
          statements: 3,
          interviews: 1,
          mentions: 2
        },
        summary: "The Wing Wagon was a food business on Flatbush Avenue in a building owned by Bob Myers's brother Phil. Myers opened the Up Over Jazz Caf\xE9 in the 1,100-square-foot space upstairs, hence its name, and served food sent up from the Wing Wagon below, which kept the dish clatter out of a quiet listening room.",
        people: [
          {
            qid: "Q22332",
            name: "Phil Myers",
            role: "owned the building"
          },
          {
            qid: "Q18923",
            name: "Bob Myers",
            role: "ran the jazz club upstairs"
          }
        ],
        active: {
          from: null,
          to: null,
          basis: "No wikibase years and Myers gives no dates for the Wing Wagon.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 2,
          interviews: 1,
          statements_with_people: 1
        }
      },
      {
        qid: "Q18911",
        name: "Wishco Manor",
        url: "https://base.semlab.io/wiki/Item:Q18911",
        address: "Eastern Parkway & Utica Avenue, Brooklyn, NY",
        latitude: 40.668861,
        longitude: -73.931121,
        locations: [
          {
            address: "Eastern Parkway & Utica Avenue, Brooklyn, NY",
            latitude: 40.668861,
            longitude: -73.931121,
            coordinates_from: "geocoded from the address"
          }
        ],
        kind: [
          "shrine"
        ],
        also_called: [],
        connectedness: {
          score: 29.8,
          rank: 75,
          linked_entities: 3,
          linked_people: 3,
          statements: 3,
          interviews: 1,
          mentions: 4
        },
        summary: "Wishco Manor was, by Reggie Workman's description, a great big downstairs room on Eastern Parkway near Utica in the Club Just Us days. Ed Stoute remembered it and supplied the name; nothing else is said.",
        people: [],
        active: {
          from: null,
          to: null,
          basis: "No dates; Workman places it only in the Club Just Us period.",
          confidence: "none"
        },
        wikibase: {
          start_year: [],
          end_year: [],
          wikidata: []
        },
        evidence: {
          strength: "thin",
          interview_blocks: 4,
          interviews: 1,
          statements_with_people: 3
        }
      }
    ]
  };

  // data/geo_ref.json
  var geo_ref_default = {
    id: "https://annotations.allmaps.org/maps/a0d103014a51fc6f",
    type: "Annotation",
    "@context": [
      "http://iiif.io/api/extension/georef/1/context.json",
      "http://iiif.io/api/presentation/3/context.json"
    ],
    created: "2026-11-24T04:34:12.175Z",
    modified: "2026-11-24T04:34:12.175Z",
    motivation: "georeferencing",
    target: {
      type: "SpecificResource",
      source: {
        id: "https://cdm17272.contentdm.oclc.org/iiif/2/agdm:29508",
        type: "ImageService2",
        height: 14046,
        width: 10826,
        partOf: [
          {
            id: "https://cdm17272.contentdm.oclc.org/iiif/agdm:29508/canvas/c0",
            type: "Canvas",
            label: {
              none: [
                "The complete map of Brooklyn (New York City) : featuring house numbers, transit lines, playgrounds, wading pools, etc. / produced under the direction of Alexander Gross."
              ]
            },
            partOf: [
              {
                id: "https://cdm17272.contentdm.oclc.org/iiif/agdm:29508/manifest.json",
                type: "Manifest",
                label: {
                  none: [
                    "The complete map of Brooklyn (New York City) : featuring house numbers, transit lines, playgrounds, wading pools, etc. / produced under the direction of Alexander Gross."
                  ]
                }
              }
            ]
          }
        ],
        provider: [
          {
            label: {
              none: [
                "University of Wisconsin-Milwaukee Libraries"
              ]
            },
            homepage: [
              {
                id: "https://collections.lib.uwm.edu/digital/collection/agdm/"
              }
            ]
          }
        ]
      },
      selector: {
        type: "SvgSelector",
        value: '<svg width="10826" height="14046"><polygon points="0,0 0,14046 10826,14046 10826,0" /></svg>'
      }
    },
    body: {
      type: "FeatureCollection",
      transformation: {
        type: "polynomial",
        options: {
          order: 1
        }
      },
      features: [
        {
          type: "Feature",
          properties: {
            resourceCoords: [
              5326,
              1297
            ]
          },
          geometry: {
            type: "Point",
            coordinates: [
              -73.95424677422687,
              40.73020906409627
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            resourceCoords: [
              8024,
              7450
            ]
          },
          geometry: {
            type: "Point",
            coordinates: [
              -73.90066355049244,
              40.64366365567781
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            resourceCoords: [
              4379,
              5249
            ]
          },
          geometry: {
            type: "Point",
            coordinates: [
              -73.97008625653379,
              40.67390868204629
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            resourceCoords: [
              6467,
              7264
            ]
          },
          geometry: {
            type: "Point",
            coordinates: [
              -73.92980186174923,
              40.64631896745112
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            resourceCoords: [
              7832,
              4222
            ]
          },
          geometry: {
            type: "Point",
            coordinates: [
              -73.90578301553619,
              40.6893703291523
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            resourceCoords: [
              2255,
              11815
            ]
          },
          geometry: {
            type: "Point",
            coordinates: [
              -74.00661205317257,
              40.58211278116846
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            resourceCoords: [
              3286,
              6415
            ]
          },
          geometry: {
            type: "Point",
            coordinates: [
              -73.99013976711551,
              40.65749075012718
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            resourceCoords: [
              2427,
              12141
            ]
          },
          geometry: {
            type: "Point",
            coordinates: [
              -74.00322211901768,
              40.57690545510803
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            resourceCoords: [
              4294,
              12205
            ]
          },
          geometry: {
            type: "Point",
            coordinates: [
              -73.96853593223017,
              40.57633203822138
            ]
          }
        }
      ],
      _allmaps: {
        id: "https://annotations.allmaps.org/maps/a0d103014a51fc6f",
        version: "https://annotations.allmaps.org/maps/a0d103014a51fc6f@7af39dd66449cd2c",
        image: {
          id: "https://annotations.allmaps.org/images/81cc23dd16af3d18",
          version: "https://annotations.allmaps.org/images/81cc23dd16af3d18@2298ac630eaf986f",
          canvases: [
            {
              id: "https://annotations.allmaps.org/canvases/07dbd37520591ffe",
              manifests: [
                {
                  id: "https://annotations.allmaps.org/manifests/7b82b2a3c600af19"
                }
              ]
            }
          ]
        },
        scale: 0.635228,
        area: 37684346802e-2
      }
    }
  };

  // atlas/archive-detail.js
  var ArchiveDetail = class {
    constructor(source, localSize, redraw) {
      this.source = source;
      this.localSize = localSize;
      this.redraw = redraw;
      this.cache = /* @__PURE__ */ new Map();
      this.failures = 0;
      this.retryAfter = 0;
    }
    tile(x, y, w, h) {
      const key = x + "," + y + "," + w + "," + h;
      if (this.cache.has(key)) return this.cache.get(key);
      if (Date.now() < this.retryAfter) return null;
      const image = new Image();
      this.cache.set(key, image);
      image.onload = () => {
        this.failures = 0;
        this.redraw();
      };
      image.onerror = () => {
        this.cache.delete(key);
        if (++this.failures >= 3) this.retryAfter = Date.now() + 6e4;
      };
      image.src = this.source.id.replace(/\/$/, "") + "/" + key + "/full/0/default.jpg";
      if (this.cache.size > 128)
        this.cache.delete(this.cache.keys().next().value);
      return image;
    }
    draw(ctx, bounds, scale) {
      if (scale <= 1 || !this.source) return;
      const { width, height } = this.source, rx = this.localSize.width / width, ry = this.localSize.height / height;
      const step = 512, x0 = Math.max(0, Math.floor(bounds.minX / rx / step) * step), y0 = Math.max(0, Math.floor(bounds.minY / ry / step) * step);
      const xmax = Math.min(width, bounds.maxX / rx), ymax = Math.min(height, bounds.maxY / ry);
      for (let x = x0; x < xmax; x += step) {
        for (let y = y0; y < ymax; y += step) {
          const w = Math.min(step, width - x), h = Math.min(step, height - y), img = this.tile(x, y, w, h);
          if (img?.complete && img.naturalWidth)
            ctx.drawImage(
              img,
              x * rx,
              y * ry,
              w * rx + 0.4 / scale,
              h * ry + 0.4 / scale
            );
        }
      }
    }
  };

  // atlas/scene.js
  var scan = { width: 6936, height: 8999 };
  var clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  var tilt = Math.acos(1 / Math.sqrt(3));
  var bearing2 = -Math.PI / 5;
  var tileSize = 512;
  var maxLevel = 3;
  var homeZoom = 2.3;
  var positionKey = (point) => point.x + "," + point.y;
  var Raster = class {
    constructor(onLoad, onError) {
      this.cache = /* @__PURE__ */ new Map();
      this.onLoad = onLoad;
      this.onError = onError;
    }
    tile(level, x, y) {
      const key = level + "/" + x + "-" + y;
      if (!this.cache.has(key)) {
        const img2 = new Image();
        img2.onload = this.onLoad;
        img2.onerror = this.onError;
        img2.src = new URL("atlas/map/" + key + ".jpg", document.baseURI);
        this.cache.set(key, img2);
        if (this.cache.size > 110)
          this.cache.delete(this.cache.keys().next().value);
      }
      const img = this.cache.get(key);
      return img.complete && img.naturalWidth ? img : null;
    }
    draw(ctx, bounds, scale) {
      const level = clamp(Math.ceil(maxLevel + Math.log2(scale)), 0, maxLevel);
      const factor = 2 ** (maxLevel - level), size = tileSize * factor;
      for (let x = Math.max(0, Math.floor(bounds.minX / size)); x < Math.min(Math.ceil(scan.width / size), Math.ceil(bounds.maxX / size)); x++) {
        for (let y = Math.max(0, Math.floor(bounds.minY / size)); y < Math.min(Math.ceil(scan.height / size), Math.ceil(bounds.maxY / size)); y++) {
          const tile = this.tile(level, x, y);
          const left = x * size, top = y * size;
          const width = Math.min(size, scan.width - left), height = Math.min(size, scan.height - top);
          if (tile)
            ctx.drawImage(
              tile,
              left,
              top,
              width + 0.45 / scale,
              height + 0.45 / scale
            );
          else if (level) {
            const coarse = this.tile(0, x >> level, y >> level);
            if (coarse) {
              const span = tileSize / 2 ** level;
              ctx.drawImage(
                coarse,
                x % 2 ** level * span,
                y % 2 ** level * span,
                width / 8,
                height / 8,
                left,
                top,
                width + 0.45 / scale,
                height + 0.45 / scale
              );
            }
          }
        }
      }
    }
  };
  var Scene = class {
    constructor(canvas, home, events) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d", { alpha: false });
      this.home = home;
      this.events = events;
      this.points = [];
      this.hits = [];
      this.rings = [];
      this.communityLayer = false;
      this.highlightSites = null;
      this.mode = "iso";
      this.cx = home.x;
      this.cy = home.y;
      this.zoom = homeZoom;
      this.blend = 1;
      this.overheadZoom = null;
      this.frame = 0;
      this.selection = null;
      this.swayPoint = null;
      this.swayCanvas = canvas.parentElement?.querySelector("#swayingShrine");
      this.raster = new Raster(() => this.redraw(), events.tileError);
      this.detail = new ArchiveDetail(
        events.originalScan,
        scan,
        () => this.redraw()
      );
      this.viewport = new ResizeObserver(() => this.redraw());
      this.viewport.observe(canvas);
      this.bind();
    }
    redraw() {
      if (!this.frame)
        this.frame = requestAnimationFrame(() => {
          this.frame = 0;
          this.draw();
        });
    }
    camera() {
      const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
      const scale = clamp(Math.min(w / 1400, h / 890), 0.35, 1.05) * this.zoom;
      const progress = clamp(
        Math.log(this.zoom / 0.32) / Math.log(1.45 / 0.32),
        0,
        1
      );
      const angle = this.blend * progress * progress * (3 - 2 * progress);
      const pitch = tilt * angle, yaw = bearing2 * angle;
      return {
        w,
        h,
        scale,
        pitch,
        yaw,
        p: Math.cos(pitch),
        c: Math.cos(yaw),
        s: Math.sin(yaw)
      };
    }
    project(x, y, z = 0) {
      const { w, h, scale, c, s, p, pitch } = this.cam;
      x -= this.cx;
      y -= this.cy;
      return {
        x: w / 2 + scale * (c * x - s * y),
        y: h / 2 + scale * ((s * x + c * y) * p - z * Math.sin(pitch))
      };
    }
    ground(px, py) {
      const { w, h, scale, c, s, p } = this.cam;
      const x = (px - w / 2) / scale, y = (py - h / 2) / (scale * p);
      return { x: this.cx + c * x + s * y, y: this.cy - s * x + c * y };
    }
    bounds() {
      const { w, h } = this.cam, corners = [
        [0, 0],
        [w, 0],
        [0, h],
        [w, h]
      ].map(([x, y]) => this.ground(x, y));
      return {
        minX: Math.min(...corners.map((p) => p.x)),
        maxX: Math.max(...corners.map((p) => p.x)),
        minY: Math.min(...corners.map((p) => p.y)),
        maxY: Math.max(...corners.map((p) => p.y))
      };
    }
    draw() {
      this.cam = this.camera();
      const { w, h, scale, c, s, p } = this.cam, ctx = this.ctx;
      if (!w || !h) return;
      const dpr = Math.min(devicePixelRatio || 1, Math.sqrt(16e6 / (w * h))), W = Math.round(w * dpr), H = Math.round(h * dpr);
      if (this.canvas.width !== W || this.canvas.height !== H) {
        this.canvas.width = W;
        this.canvas.height = H;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#d8ddcf";
      ctx.fillRect(0, 0, w, h);
      const origin = this.project(0, 0);
      ctx.save();
      ctx.transform(
        scale * c,
        scale * s * p,
        -scale * s,
        scale * c * p,
        origin.x,
        origin.y
      );
      const bounds = this.bounds();
      if (bounds.minX < 0 || bounds.maxX > scan.width || bounds.minY < 0 || bounds.maxY > scan.height) {
        ctx.fillStyle = "#405443";
        ctx.shadowColor = "#2b382c55";
        ctx.shadowBlur = 15;
        ctx.fillRect(0, 0, scan.width, scan.height);
        ctx.shadowBlur = 0;
      }
      ctx.imageSmoothingQuality = "high";
      this.raster.draw(ctx, bounds, scale * dpr);
      this.detail.draw(ctx, bounds, scale * dpr);
      ctx.fillStyle = "rgba(246,236,208," + 0.13 / Math.max(1, scale) + ")";
      ctx.fillRect(0, 0, scan.width, scan.height);
      ctx.restore();
      this.hits = [];
      const visible = this.points.map((point) => ({ ...point, base: this.project(point.x, point.y) })).filter(
        ({ base: b }) => b.x > -105 && b.x < w + 105 && b.y > -105 && b.y < h + 105
      ).sort(
        (a, b) => a.base.y - b.base.y || Number(a.site.qid === this.selection) - Number(b.site.qid === this.selection) || b.site.connectedness.rank - a.site.connectedness.rank
      );
      const dancer = this.swayPoint?.site.qid === this.selection ? visible.find(
        (p2) => p2.site === this.swayPoint.site && p2.location === this.swayPoint.location
      ) : null;
      if (this.swayCanvas) this.swayCanvas.hidden = !dancer;
      this.rings = [];
      if (this.communityLayer) this.drawCommunities(visible);
      for (const point of visible)
        this.marker(point, point === dancer && this.swayCanvas);
      const emphasized = this.highlightSites ? visible.filter((p2) => this.highlightSites.has(p2.site)) : visible;
      this.events.markersDrawn?.(emphasized, this.cam, this.zoom);
      if (this.zoom >= 1) this.labels(emphasized);
      this.events.orientation(Math.atan2(s, c * p) * 180 / Math.PI);
    }
    markerSize(site, detail) {
      const neighborhoodSize = (30 + 52 * detail ** 0.85) * (0.94 + 0.12 * site.connectedness.score / 100);
      return 8 + (neighborhoodSize - 8) * Math.min(1, this.zoom);
    }
    drawCommunities(visible) {
      const ctx = this.ctx;
      const detail = clamp(Math.log(Math.max(1, this.zoom)) / Math.log(14), 0, 1);
      const stacks = /* @__PURE__ */ new Map();
      ctx.save();
      for (const point of visible) {
        if (!point.group) continue;
        const key = positionKey(point);
        if (!stacks.has(key)) stacks.set(key, /* @__PURE__ */ new Map());
        const groups = stacks.get(key);
        const bright = !this.highlightSites || this.highlightSites.has(point.site);
        if (groups.has(point.group)) {
          if (bright) groups.get(point.group).bright = true;
          continue;
        }
        const radius = this.markerSize(point.site, detail) * 0.62 + 5 + groups.size * 6;
        const { x, y } = point.base;
        const ring = { x, y, radius, group: point.group, bright };
        groups.set(point.group, ring);
        this.rings.push(ring);
      }
      for (const { x, y, radius, group, bright } of this.rings) {
        ctx.beginPath();
        ctx.ellipse(x, y, radius, radius * this.cam.p, 0, 0, Math.PI * 2);
        ctx.fillStyle = ctx.strokeStyle = group.color;
        ctx.globalAlpha = bright ? 0.25 : 0.06;
        ctx.fill();
        ctx.globalAlpha = bright ? 0.9 : 0.28;
        ctx.lineWidth = bright ? 2 : 1;
        ctx.stroke();
      }
      ctx.restore();
    }
    communityAt(x, y) {
      let closest, distance = Infinity;
      for (const ring of this.rings) {
        const r = Math.hypot(x - ring.x, (y - ring.y) / this.cam.p);
        const edge = Math.abs(ring.radius - r);
        if (r <= ring.radius + 2 && edge < distance) {
          closest = ring.group;
          distance = edge;
        }
      }
      return closest;
    }
    marker(point, swayCanvas) {
      const { base, site } = point, { ctx, cam } = this;
      const detail = clamp(Math.log(Math.max(1, this.zoom)) / Math.log(14), 0, 1);
      const stamp = markerStamp(shapeKeys[point.type], cam.pitch, detail);
      const overviewScale = Math.min(1, this.zoom);
      const size = this.markerSize(site, detail);
      const k = size / Math.max(stamp.width, stamp.height);
      const left = base.x - stamp.anchorX * k, top = base.y - stamp.anchorY * k;
      const width = stamp.width * k, height = stamp.height * k;
      const radius = Math.max(5, width * 0.34);
      if (this.selection === site.qid || this.hover === site.qid) {
        ctx.beginPath();
        ctx.ellipse(
          base.x,
          base.y,
          radius + 5,
          (radius + 5) * cam.p,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = "#173b31";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.globalAlpha = this.highlightSites && !this.highlightSites.has(site) ? 0.32 : 0.72 + 0.28 * overviewScale;
      if (swayCanvas) {
        if (this.swayStamp !== stamp) {
          swayCanvas.width = stamp.width;
          swayCanvas.height = stamp.height;
          swayCanvas.getContext("2d").drawImage(stamp.canvas, 0, 0);
          this.swayStamp = stamp;
        }
        Object.assign(swayCanvas.style, {
          left: left + "px",
          top: top + "px",
          width: width + "px",
          height: height + "px",
          opacity: String(ctx.globalAlpha),
          transformOrigin: stamp.anchorX * k + "px " + stamp.anchorY * k + "px"
        });
      } else {
        ctx.drawImage(stamp.canvas, left, top, width, height);
      }
      ctx.globalAlpha = 1;
      point.tip = { x: base.x, y: top };
      this.hits.push({
        point,
        left,
        right: left + width,
        top,
        bottom: top + height,
        stamp,
        swayCanvas,
        k,
        pickRadius: clamp(size / 2, 4, 11)
      });
    }
    labels(visible) {
      const ctx = this.ctx, { w, h } = this.cam;
      ctx.font = "600 13px Georgia, serif";
      const placed = [];
      const selected = this.selection;
      const order = [...visible].sort(
        (a, b) => Number(b.site.qid === selected) - Number(a.site.qid === selected) || a.site.connectedness.rank - b.site.connectedness.rank
      );
      const stacks = /* @__PURE__ */ new Map();
      for (const point of order) {
        const key = positionKey(point);
        if (!stacks.has(key)) stacks.set(key, /* @__PURE__ */ new Map());
        const sites = stacks.get(key);
        if (!sites.has(point.site.qid)) sites.set(point.site.qid, point);
      }
      for (const sites of stacks.values()) {
        if (placed.length >= Math.max(2, Math.min(5, Math.floor(w / 200)))) break;
        const members = [...sites.values()];
        const item = members[0];
        const tipY = Math.min(...members.map((p) => p.tip.y));
        const tw = Math.min(
          w - 16,
          Math.max(...members.map((p) => ctx.measureText(p.site.name).width)) + 15
        );
        const height = 21 + (members.length - 1) * 16;
        const x = clamp(item.tip.x - tw / 2, 8, w - 8 - tw);
        const y = tipY - height - 4;
        if (item.tip.x < 8 || item.tip.x > w - 8 || y < 68 || y + height > h - 79)
          continue;
        if (placed.some(
          (b) => x < b.x + b.w + 48 && x + tw > b.x - 48 && y < b.y + b.height + 50 && y + height > b.y - 50
        ))
          continue;
        ctx.shadowColor = "#29362538";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetY = 1;
        ctx.fillStyle = item.site.qid === selected ? "#1c4035" : "#faf7e8";
        ctx.fillRect(x, y, tw, height);
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;
        ctx.strokeStyle = "#53624e";
        ctx.lineWidth = 0.7;
        ctx.strokeRect(x, y, tw, height);
        ctx.beginPath();
        ctx.moveTo(item.tip.x, y + height);
        ctx.lineTo(item.tip.x, tipY - 2);
        ctx.stroke();
        ctx.fillStyle = item.site.qid === selected ? "#fcfaf0" : "#22382c";
        members.forEach(
          (p, i) => ctx.fillText(p.site.name, x + 7, y + 14.5 + i * 16, tw - 14)
        );
        placed.push({ x, y, w: tw, height });
        this.hits.push({
          point: item,
          left: x,
          right: x + tw,
          top: y,
          bottom: y + height
        });
      }
    }
    moveTo(x, y) {
      this.cx = clamp(x, 0, scan.width);
      this.cy = clamp(y, 0, scan.height);
      this.redraw();
    }
    fitSites(sites) {
      const points = this.points.filter((p) => sites.has(p.site));
      if (!points.length) return;
      this.stopAnimation();
      const xs = points.map((p) => p.x), ys = points.map((p) => p.y);
      const x = (Math.min(...xs) + Math.max(...xs)) / 2, y = (Math.min(...ys) + Math.max(...ys)) / 2;
      const radius = Math.max(
        1,
        ...points.map((p) => Math.hypot(p.x - x, p.y - y))
      );
      const cam = this.camera();
      this.setZoom(
        clamp(
          Math.min(cam.w, cam.h) * 0.38 / (radius * cam.scale / this.zoom),
          0.08,
          homeZoom
        )
      );
      this.moveTo(x, y);
    }
    focus(point) {
      this.stopAnimation();
      this.swayPoint = point.type === "shrine" ? point : null;
      this.setZoom(Math.max(this.zoom, homeZoom * 1.45));
      this.moveTo(point.x, point.y);
    }
    setZoom(zoom) {
      if (this.blend < 1 && this.overheadZoom === null)
        this.overheadZoom = this.zoom / 2 ** this.blend;
      this.zoom = zoom;
      if (this.overheadZoom !== null) {
        this.overheadZoom = Math.min(this.overheadZoom, zoom);
        this.blend = clamp(Math.log2(zoom / this.overheadZoom), 0, 1);
        if (this.blend === 1) this.overheadZoom = null;
      }
      this.cam = this.camera();
      this.mode = this.cam.pitch > 0 ? "iso" : "top";
      this.events.mode(this.mode);
    }
    zoomBy(factor, x = this.cam.w / 2, y = this.cam.h / 2) {
      this.stopAnimation();
      const before = this.ground(x, y);
      this.setZoom(clamp(this.zoom * factor, 0.08, 14));
      const after = this.ground(x, y);
      this.moveTo(this.cx + before.x - after.x, this.cy + before.y - after.y);
      this.events.clear();
    }
    stopAnimation() {
      cancelAnimationFrame(this.animation);
      this.animation = 0;
    }
    view(mode, reset = false) {
      this.stopAnimation();
      this.overheadZoom = null;
      this.events.clear();
      const from = this.blend, to = mode === "iso" ? 1 : 0, startZoom = this.zoom;
      const endZoom = reset ? homeZoom : mode === this.mode ? this.zoom : clamp(this.zoom * (to ? 1.5 : 1 / 1.5), to ? 1.45 : 0.08, 14);
      const start2 = performance.now(), duration = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 330;
      this.mode = mode;
      const tick = (now) => {
        const t = duration ? clamp((now - start2) / duration, 0, 1) : 1, ease = t * t * (3 - 2 * t);
        this.blend = from + (to - from) * ease;
        this.zoom = startZoom + (endZoom - startZoom) * ease;
        this.redraw();
        if (t < 1) this.animation = requestAnimationFrame(tick);
      };
      if (reset) this.moveTo(this.home.x, this.home.y);
      tick(start2);
      this.events.mode(mode);
    }
    hitsAt(screenX, screenY) {
      const hit = this.hits.filter((b) => {
        let x = screenX, y = screenY;
        if (b.swayCanvas) {
          const transform = getComputedStyle(b.swayCanvas).transform;
          if (transform && transform !== "none") {
            const { a: cos, b: sin } = new DOMMatrixReadOnly(transform);
            const { base } = b.point, dx = x - base.x, dy = y - base.y;
            x = base.x + cos * dx + sin * dy;
            y = base.y - sin * dx + cos * dy;
          }
        }
        if (b.pickRadius && Math.hypot(x - (b.left + b.right) / 2, y - (b.top + b.bottom) / 2) <= b.pickRadius)
          return true;
        if (x < b.left || x >= b.right || y < b.top || y >= b.bottom)
          return false;
        if (!b.stamp) return true;
        const ix = Math.floor((x - b.left) / b.k), iy = Math.floor((y - b.top) / b.k);
        return Boolean(b.stamp.pixels[(iy * b.stamp.width + ix) * 4 + 3]);
      }).reverse().map((b) => b.point);
      if (hit.length) {
        const positions = new Set(hit.map(positionKey));
        for (const p of this.points)
          if (positions.has(positionKey(p)) && !hit.some((q) => q.site === p.site))
            hit.push(p);
      }
      return hit;
    }
    bind() {
      const el = this.canvas, pointers = /* @__PURE__ */ new Map();
      let moved = false, initial, prevDistance;
      const local = (e) => {
        const r = el.getBoundingClientRect();
        return { x: e.clientX - r.left, y: e.clientY - r.top };
      };
      el.addEventListener("pointerdown", (e) => {
        if (e.button !== 0) return;
        this.stopAnimation();
        this.events.clear();
        el.setPointerCapture(e.pointerId);
        const v = local(e);
        pointers.set(e.pointerId, v);
        el.classList.add("dragging");
        if (pointers.size === 1) {
          initial = v;
          moved = false;
          prevDistance = null;
        } else {
          moved = true;
          const [a, b] = [...pointers.values()];
          prevDistance = Math.hypot(a.x - b.x, a.y - b.y);
        }
      });
      el.addEventListener("pointermove", (e) => {
        const pos = local(e), prev = pointers.get(e.pointerId);
        if (!prev) {
          if (e.pointerType === "mouse") {
            const hits = this.hitsAt(pos.x, pos.y);
            const item = hits[0];
            const sites = /* @__PURE__ */ new Map();
            for (const hit of hits)
              if (hit.x === item.x && hit.y === item.y)
                sites.set(hit.site.qid, hit.site);
            const group = !item && this.communityAt(pos.x, pos.y);
            this.events.hover(item, pos, [...sites.values()], group);
            el.style.cursor = item || group ? "pointer" : "";
          }
          return;
        }
        pointers.set(e.pointerId, pos);
        if (pointers.size > 1) {
          const [a, b] = [...pointers.values()], dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (prevDistance && dist)
            this.zoomBy(dist / prevDistance, (a.x + b.x) / 2, (a.y + b.y) / 2);
          prevDistance = dist;
          return;
        }
        if (Math.hypot(pos.x - initial.x, pos.y - initial.y) > 3) moved = true;
        if (moved) {
          const a = this.ground(prev.x, prev.y), b = this.ground(pos.x, pos.y);
          this.moveTo(this.cx + a.x - b.x, this.cy + a.y - b.y);
        }
      });
      const end = (e, click) => {
        if (!pointers.has(e.pointerId)) return;
        pointers.delete(e.pointerId);
        if (pointers.size) return;
        el.classList.remove("dragging");
        if (click && !moved) {
          const p = local(e);
          const hits = this.hitsAt(p.x, p.y);
          const group = !hits.length && this.communityAt(p.x, p.y);
          if (group) this.events.community(group);
          else this.events.select(hits, p);
        }
      };
      el.addEventListener("pointerup", (e) => end(e, true));
      el.addEventListener("pointercancel", (e) => end(e, false));
      el.addEventListener("pointerleave", () => this.events.hover(null));
      el.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
          const p = local(e);
          this.zoomBy(
            Math.exp(
              -clamp(e.deltaY * (e.deltaMode === 1 ? 16 : 1), -200, 200) * 27e-4
            ),
            p.x,
            p.y
          );
        },
        { passive: false }
      );
      el.addEventListener("keydown", (e) => {
        if (["+", "=", "-"].includes(e.key)) {
          e.preventDefault();
          this.zoomBy(e.key === "-" ? 0.8 : 1.25);
          return;
        }
        const direction = {
          ArrowLeft: [-1, 0],
          ArrowRight: [1, 0],
          ArrowUp: [0, -1],
          ArrowDown: [0, 1]
        }[e.key];
        if (direction) {
          e.preventDefault();
          this.events.clear();
          const pos = this.ground(
            this.cam.w / 2 + direction[0] * 70,
            this.cam.h / 2 + direction[1] * 70
          );
          this.moveTo(pos.x, pos.y);
        }
      });
    }
  };

  // data/shrine_communities.json
  var shrine_communities_default = [
    {
      id: 1,
      name: "The Continental / Tony\u2019s Grand Dean",
      color: "#8d4c66",
      sites: [
        "Q18827",
        "Q18829",
        "Q18832",
        "Q18842",
        "Q18844",
        "Q22272",
        "Q22463",
        "Q23431",
        "Q18859",
        "Q18860",
        "Q22240",
        "Q18862",
        "Q18868",
        "Q18871",
        "Q18881",
        "Q18884",
        "Q18886",
        "Q18887",
        "Q18889",
        "Q18890",
        "Q18898",
        "Q18899",
        "Q22243",
        "Q23207",
        "Q21583",
        "Q23442",
        "Q18905"
      ]
    },
    {
      id: 2,
      name: "Sista\u2019s Place / The East",
      color: "#357769",
      sites: [
        "Q22273",
        "Q22544",
        "Q19683",
        "Q18876",
        "Q18877",
        "Q18879",
        "Q18885",
        "Q18888",
        "Q18894",
        "Q21581",
        "Q18896",
        "Q19682"
      ]
    },
    {
      id: 3,
      name: "Brooklyn Academy of Music / Up Over Jazz Caf\xE9",
      color: "#53649b",
      sites: [
        "Q18837",
        "Q22479",
        "Q22465",
        "Q22268",
        "Q18880",
        "Q18900",
        "Q18903"
      ]
    },
    {
      id: 4,
      name: "Club La Marchal / The Blue Coronet",
      color: "#aa702a",
      sites: [
        "Q22253",
        "Q18838",
        "Q18847",
        "Q26312",
        "Q18866",
        "Q22307",
        "Q18834",
        "Q22435",
        "Q22327",
        "Q18901",
        "Q22308",
        "Q18910"
      ]
    },
    {
      id: 5,
      name: "Flamingo Lounge / Jazz 966",
      color: "#a14731",
      sites: [
        "Q18828",
        "Q18830",
        "Q18840",
        "Q18853",
        "Q23455",
        "Q18857",
        "Q18864",
        "Q22562",
        "Q19101",
        "Q18870",
        "Q23419",
        "Q18883",
        "Q18891",
        "Q18897",
        "Q18904"
      ]
    }
  ];

  // atlas/communities.js
  function buildCommunities(sites) {
    const byId = new Map(sites.map((site) => [site.qid, site]));
    const bySite = /* @__PURE__ */ new Map(), people = /* @__PURE__ */ new Map();
    const groups = shrine_communities_default.map(({ id, name, color, sites: ids }) => {
      const group = {
        id,
        name,
        color,
        sites: ids.map((qid) => byId.get(qid)),
        people: /* @__PURE__ */ new Set()
      };
      for (const site of group.sites) {
        bySite.set(site, group);
        for (const { qid, name: name2 } of site.people) {
          if (!people.has(qid)) people.set(qid, { qid, name: name2, groups: /* @__PURE__ */ new Map() });
          const person = people.get(qid);
          group.people.add(person);
          if (!person.groups.has(group)) person.groups.set(group, /* @__PURE__ */ new Set());
          person.groups.get(group).add(site);
        }
      }
      group.people = [...group.people].sort(
        (a, b) => b.groups.get(group).size - a.groups.get(group).size || a.name.localeCompare(b.name)
      );
      return group;
    });
    return { groups, bySite, people };
  }

  // atlas/georef.js
  function georeference(annotation, imageSize) {
    const source = annotation.target.source;
    const points = annotation.body.features.map((f) => [
      ...f.properties.resourceCoords,
      ...f.geometry.coordinates
    ]);
    const mean = [0, 1, 2, 3].map(
      (i) => points.reduce((sum, p) => sum + p[i], 0) / points.length
    );
    let xx = 0, xy = 0, yy = 0, xLon = 0, yLon = 0, xLat = 0, yLat = 0;
    for (const point of points) {
      const [x, y, lon, lat] = point.map((v, i) => v - mean[i]);
      xx += x * x;
      xy += x * y;
      yy += y * y;
      xLon += x * lon;
      yLon += y * lon;
      xLat += x * lat;
      yLat += y * lat;
    }
    const det = xx * yy - xy * xy;
    const a = (yy * xLon - xy * yLon) / det, b = (xx * yLon - xy * xLon) / det;
    const c = (yy * xLat - xy * yLat) / det, d = (xx * yLat - xy * xLat) / det;
    const inverse = a * d - b * c;
    if (!Number.isFinite(inverse) || Math.abs(inverse) < 1e-18)
      throw Error("Invalid map control points");
    return (longitude, latitude) => {
      const lon = longitude - mean[2], lat = latitude - mean[3];
      return {
        x: (mean[0] + (lon * d - lat * b) / inverse) * imageSize.width / source.width,
        y: (mean[1] + (lat * a - lon * c) / inverse) * imageSize.height / source.height
      };
    };
  }

  // atlas/symbols.js
  var paths = {
    map: '<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2zM9 3v16m6-14v16"/>',
    book: '<path d="M3 4q5-2 9 1 4-3 9-1v15q-5-2-9 1-4-3-9-1zM12 5v15"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.7"/><path d="m16 16 5 5"/>',
    filter: '<path d="M3 7h9m5 0h4M3 17h3m5 0h10"/><circle cx="14.5" cy="7" r="2.5"/><circle cx="8.5" cy="17" r="2.5"/>',
    layers: '<path d="m2 9 10-6 10 6-10 6zM2 13l10 6 10-6M3 17l9 5 9-5"/>',
    overhead: '<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 11h16m-9-7v16"/>',
    plus: '<path d="M12 4v16M4 12h16"/>',
    minus: '<path d="M4 12h16"/>',
    locate: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 1v4m0 14v4M1 12h4m14 0h4"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>',
    "chevron-right": '<path d="m9 5 7 7-7 7"/>',
    "chevron-left": '<path d="m15 5-7 7 7 7"/>',
    record: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/>',
    hand: '<path d="M8 13V6c0-2 3-2 3 0v6-8c0-2 3-2 3 0v8-6c0-2 3-2 3 0v6-4c0-2 3-2 3 0v7q0 6-6 6h-1q-3 0-5-3l-4-6c-1-2 1-3 3-1z"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>'
  };
  var icon = (name) => '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + paths[name] + "</svg>";
  var types = {
    shrine: "Jazz shrine",
    org: "Organization",
    inst: "Institution"
  };
  function category(site) {
    if (site.kind.some((k) => ["school", "institution", "museum"].includes(k)))
      return "inst";
    if (site.kind.includes("organization")) return "org";
    return site.kind.includes("shrine") ? "shrine" : "org";
  }

  // atlas/app.js
  var $ = (id) => document.getElementById(id);
  var escape = (s) => String(s ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
  var shortAddress = (s) => (s || "Address unrecorded").replace(/,?\s*Brooklyn\b.*$/i, "").trim() || s;
  var searchText = (value) => (value || "").normalize("NFD").replace(/\p{M}/gu, "").replace(/[‘’]/g, "'").toLocaleLowerCase().trim();
  var mobile = () => matchMedia("(max-width:700px)").matches;
  document.querySelectorAll("[data-icon]").forEach((el) => el.innerHTML = icon(el.dataset.icon));
  function showKey(open) {
    const enabled = $("communities").getAttribute("aria-pressed") === "true";
    $("legendItems").hidden = !open || enabled;
    $("communityKey").hidden = !open || !enabled;
    $("legendButton").setAttribute("aria-expanded", open);
  }
  showKey(!mobile());
  $("legendButton").onclick = () => showKey($("legendButton").getAttribute("aria-expanded") !== "true");
  $("aboutButton").onclick = () => $("about").showModal();
  $("closeAbout").onclick = () => $("about").close();
  $("about").onclick = (e) => {
    if (e.target === $("about")) {
      const r = $("about").getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
        $("about").close();
    }
  };
  $("browse").onclick = () => {
    $("sidebar").classList.add("open");
    ($("communityView").hidden ? $("recordView").hidden ? $("search") : $("back") : $("communityBack")).focus();
  };
  $("closeIndex").onclick = () => {
    $("sidebar").classList.remove("open");
    $("browse").focus();
  };
  function start() {
    const locate = georeference(geo_ref_default, scan);
    const sites = brooklyn_jazz_sites_default.sites, points = [];
    const communities = buildCommunities(sites);
    for (const site of sites) {
      for (const location of site.locations?.length ? site.locations : [site]) {
        if (!Number.isFinite(location.latitude) || !Number.isFinite(location.longitude))
          continue;
        const pos = locate(location.longitude, location.latitude);
        if (pos.x >= 0 && pos.x < scan.width && pos.y >= 0 && pos.y < scan.height) {
          points.push({
            ...pos,
            site,
            location,
            type: category(site),
            group: communities.bySite.get(site)
          });
        }
      }
    }
    let filterType = "all", selected = null, group = null, person = null, filtered = [];
    function clear() {
      notes.inspect(null);
      $("tooltip").hidden = true;
      $("coincident").hidden = true;
    }
    const notes = new MusicNotes($("musicNotes"));
    const scene = new Scene($("scene"), locate(-73.954, 40.6807), {
      markersDrawn: (points2, camera, zoom) => notes.update(points2, camera, zoom),
      clear,
      originalScan: geo_ref_default.target.source,
      tileError: () => {
        $("mapStatus").textContent = "A map tile could not load. Refresh to retry.";
        $("mapStatus").hidden = false;
      },
      orientation: (angle) => {
        $("needle").style.transform = "rotate(" + angle + "deg)";
      },
      mode: (mode) => {
        $("iso").setAttribute("aria-pressed", mode === "iso");
        $("top").setAttribute("aria-pressed", mode === "top");
      },
      community: (group2) => openCommunity(group2),
      hover: (point, pos, sitesAtPoint, ring) => {
        notes.inspect(point);
        if (!point && !ring) {
          $("tooltip").hidden = true;
          return;
        }
        const tip = $("tooltip");
        tip.textContent = ring ? ring.name + " community" : sitesAtPoint.map(
          (site) => site.name + " \xB7 Connectedness " + site.connectedness.score + "/100"
        ).join("\n");
        tip.hidden = false;
        tip.style.left = Math.max(
          tip.offsetWidth / 2 + 4,
          Math.min(scene.cam.w - tip.offsetWidth / 2 - 4, pos.x)
        ) + "px";
        tip.style.top = (pos.y + 18 + tip.offsetHeight <= scene.cam.h ? pos.y + 18 : Math.max(4, pos.y - 17 - tip.offsetHeight)) + "px";
      },
      select: (hits, pos) => {
        clear();
        const choices = [
          ...new Map(hits.map((point) => [point.site.qid, point])).values()
        ];
        if (!choices.length) return;
        if (choices.length === 1) {
          openRecord(choices[0].site, choices[0]);
          return;
        }
        const picker = $("coincident");
        picker.replaceChildren();
        for (const point of choices) {
          const button = document.createElement("button");
          button.textContent = point.site.name;
          button.onclick = () => openRecord(point.site, point);
          picker.append(button);
        }
        picker.hidden = false;
        picker.style.left = Math.max(4, Math.min(pos.x + 8, scene.cam.w - picker.offsetWidth - 5)) + "px";
        picker.style.top = Math.max(
          4,
          Math.min(pos.y + 5, scene.cam.h - picker.offsetHeight - 5)
        ) + "px";
        picker.firstChild.focus();
      }
    });
    function markerImage(type) {
      return `<img class="symbol" alt="" src="${markerIconUrl(shapeKeys[type])}">`;
    }
    $("legendItems").innerHTML = Object.entries(types).map(
      ([type, name]) => '<div class="key-row">' + markerImage(type) + name + "</div>"
    ).join("") + '<div class="note-key"><strong>Connectedness / 100</strong>' + scoreBands.map(
      (band) => '<div><b aria-label="' + band.notes.length + ' notes">' + band.notes + "</b> " + escape(band.label) + "</div>"
    ).join("") + "</div>";
    function groupKey() {
      $("communityKey").innerHTML = communities.groups.map(
        (g) => `<button class="group-choice" data-group="${g.id}" aria-pressed="${g === group}"><i class="group-swatch" style="--group-color:${g.color}"></i>${escape(g.name)}</button>`
      ).join("");
    }
    $("communityKey").onclick = (e) => {
      const button = e.target.closest("[data-group]");
      if (button)
        openCommunity(
          communities.groups.find((g) => g.id === Number(button.dataset.group))
        );
    };
    function openCommunity(next, member = null) {
      group = next;
      person = member;
      selected = null;
      scene.selection = null;
      clear();
      scene.points = points;
      scene.highlightSites = person ? person.groups.get(group) : new Set(group.sites);
      scene.fitSites(scene.highlightSites);
      scene.redraw();
      groupKey();
      const panel = $("communityView");
      const roster = person ? [...scene.highlightSites].sort((a, b) => a.name.localeCompare(b.name)) : group.people;
      const rows = roster.map((entry) => {
        if (person) {
          const mapped = points.some((p) => p.site === entry);
          return `<button data-venue="${entry.qid}">${escape(entry.name)} <small>${mapped ? "View record" : "Unmapped \xB7 View record"}</small></button>`;
        }
        const count = entry.groups.get(group).size;
        return `<button data-member="${entry.qid}"><span>${escape(entry.name)}${entry.groups.size > 1 ? `<small>In ${entry.groups.size} communities</small>` : ""}</span><small>${count} ${count === 1 ? "shrine" : "shrines"}</small></button>`;
      }).join("");
      const others = person ? [...person.groups.keys()].filter((g) => g !== group) : [];
      panel.innerHTML = `<button class="back" id="communityBack">${icon("chevron-left")}${person ? "Community members" : "Location index"}</button>
      <div class="community-caption"><i class="group-swatch" style="--group-color:${group.color}"></i>${person ? escape(group.name) : "Shared-person community"}</div>
      <h2>${escape(person ? person.name : group.name)}</h2>
      <p class="community-count">${person ? roster.length + (roster.length === 1 ? " shrine in this community" : " shrines in this community") : group.sites.length + " shrines \xB7 " + group.people.length + " people"}</p>
      <h3>${person ? "Associated shrines" : "People by number of shrines"}</h3>
      <div class="community-list">${rows}</div>` + (others.length ? '<h3>Also connected to</h3><div class="community-list">' + others.map(
        (g) => `<button data-other="${g.id}">${escape(g.name)}<small>${person.groups.get(g).size} ${person.groups.get(g).size === 1 ? "shrine" : "shrines"}</small></button>`
      ).join("") + "</div>" : "");
      $("indexView").hidden = $("recordView").hidden = true;
      panel.hidden = false;
      $("browseLabel").textContent = "Community details";
      panel.scrollTop = 0;
      if (mobile()) $("sidebar").classList.add("open");
      $("communityBack").focus({ preventScroll: true });
    }
    $("communityView").onclick = (e) => {
      const button = e.target.closest("button");
      if (!button) return;
      if (button.id === "communityBack") {
        if (person) openCommunity(group);
        else showIndex(true);
      } else if (button.dataset.member)
        openCommunity(group, communities.people.get(button.dataset.member));
      else if (button.dataset.other)
        openCommunity(
          communities.groups.find((g) => g.id === Number(button.dataset.other)),
          person
        );
      else if (button.dataset.venue)
        openRecord(sites.find((s) => s.qid === button.dataset.venue));
    };
    $("communities").onclick = () => {
      scene.communityLayer = !scene.communityLayer;
      $("communities").setAttribute("aria-pressed", scene.communityLayer);
      $("legendButton").querySelector("span").textContent = scene.communityLayer ? "Communities" : "Map key";
      if (!scene.communityLayer && group) {
        if (!selected) showIndex();
        else {
          group = person = null;
          scene.highlightSites = null;
          render();
          $("back").innerHTML = icon("chevron-left") + "Location index";
        }
      }
      groupKey();
      showKey(scene.communityLayer || !mobile());
      clear();
      scene.redraw();
    };
    function showIndex(focus = false) {
      const previous = selected;
      if (group) {
        group = person = null;
        scene.highlightSites = null;
        groupKey();
        render();
      }
      selected = null;
      scene.selection = null;
      scene.redraw();
      clear();
      $("recordView").hidden = true;
      $("communityView").hidden = true;
      $("indexView").hidden = false;
      $("browseLabel").textContent = "Location index";
      if (focus) {
        const row = previous && $("results").querySelector('[data-id="' + previous.qid + '"]');
        (row || $("search")).focus();
      }
    }
    function openRecord(site, point) {
      clear();
      selected = site;
      scene.selection = site.qid;
      if (group) scene.highlightSites = /* @__PURE__ */ new Set([site]);
      const locations = points.filter((p) => p.site === site), target = point || locations[0];
      if (target) scene.focus(target);
      else scene.redraw();
      const active = site.active || {};
      const dates = active.from && active.to ? active.from === active.to ? active.from : active.from + " \u2013 " + active.to : active.from ? "From " + active.from : active.to ? "Until " + active.to : "Dates unrecorded";
      $("recordView").innerHTML = '<button id="back" class="back">' + icon("chevron-left") + (group ? "Back to community" : "Location index") + '</button><div class="record-type">' + markerImage(category(site)) + types[category(site)] + "</div><h2>" + escape(site.name) + '</h2><p class="address">' + escape(target?.location.address || site.address || "Address unrecorded") + '</p><div class="meta"><strong>Recorded activity</strong><br>' + escape(dates) + (active.confidence ? " \xB7 " + escape(active.confidence) + " confidence" : "") + '</div><div class="meta"><strong>Connectedness</strong><br><span aria-hidden="true">' + scoreNotes(site.connectedness.score) + "</span> " + site.connectedness.score + "/100 \xB7 " + site.connectedness.linked_entities + (site.connectedness.linked_entities === 1 ? " linked entity" : " linked entities") + " \xB7 " + site.connectedness.interviews + (site.connectedness.interviews === 1 ? " interview" : " interviews") + " \xB7 " + site.connectedness.mentions + (site.connectedness.mentions === 1 ? " mention" : " mentions") + "</div>" + (!locations.length ? '<p class="address">This site has no mapped coordinates.</p>' : "") + (site.locations.length > 1 ? '<h3>Locations</h3><div id="addresses"></div>' : "") + "<h3>Oral history</h3><p>" + escape(site.summary) + "</p>" + (site.people.length ? '<h3>People in the record</h3><ul class="people-list">' + site.people.map(
        (p) => '<li data-person="' + escape(p.qid) + '"><div><a href="https://base.semlab.io/wiki/Item:' + encodeURIComponent(p.qid) + '" target="_blank" rel="noreferrer">' + escape(p.name) + "</a><small>" + escape(p.role) + "</small></div></li>"
      ).join("") + "</ul>" : "") + '<p><a class="source-link" href="' + escape(site.url) + '" target="_blank" rel="noreferrer">View Wikibase record</a></p>';
      const peopleList = $("recordView").querySelector(".people-list");
      if (peopleList) populatePortraits(peopleList);
      if ($("addresses")) {
        for (const address of site.locations) {
          const mapped = locations.find((p) => p.location === address);
          const el = document.createElement(mapped ? "button" : "p");
          el.textContent = address.address || "Address unrecorded";
          if (mapped) {
            el.className = "site-location";
            el.onclick = () => openRecord(site, mapped);
          } else el.className = "address";
          $("addresses").append(el);
        }
      }
      $("back").onclick = () => group ? openCommunity(group, person) : showIndex(true);
      $("communityView").hidden = true;
      $("indexView").hidden = true;
      $("recordView").hidden = false;
      $("browseLabel").textContent = "Location record";
      $("recordView").scrollTop = 0;
      if (mobile()) $("sidebar").classList.add("open");
      $("back").focus({ preventScroll: true });
    }
    function render() {
      clear();
      const term = searchText($("search").value);
      filtered = sites.filter(
        (s) => (filterType === "all" || category(s) === filterType) && (!term || [
          s.name,
          s.address,
          ...s.also_called,
          ...s.people.map((p) => p.name),
          ...s.locations.map((l) => l.address)
        ].some((v) => searchText(v).includes(term)))
      );
      filtered.sort(
        $("sort").value === "rank" ? (a, b) => a.connectedness.rank - b.connectedness.rank : (a, b) => a.name.localeCompare(b.name)
      );
      $("resultCount").textContent = filtered.length + " location" + (filtered.length === 1 ? "" : "s");
      $("results").innerHTML = filtered.map((s) => {
        const type = category(s);
        return '<div class="index-entry"><button class="row" data-id="' + escape(s.qid) + '"><span class="symbol-tile ' + type + '">' + markerImage(type) + '</span><span class="row-text"><strong>' + escape(s.name) + "</strong><small>" + escape(shortAddress(s.address)) + '</small></span></button><a class="index-source" href="' + escape(s.url) + '" target="_blank" rel="noreferrer" aria-label="Open the Wikibase record for ' + escape(s.name) + '">Wikibase<span aria-hidden="true"> \u2197</span></a></div>';
      }).join("") || '<p class="empty">No matching locations. Try a place, person, or address.</p>';
      const included = new Set(filtered);
      scene.points = points.filter((p) => included.has(p.site));
      scene.hover = null;
      scene.redraw();
      $("results").scrollTop = 0;
    }
    $("results").onclick = (e) => {
      const row = e.target.closest("[data-id]");
      if (row) openRecord(filtered.find((s) => s.qid === row.dataset.id));
    };
    $("results").onpointerover = (e) => {
      scene.hover = e.target.closest("[data-id]")?.dataset.id;
      scene.redraw();
    };
    $("results").onpointerleave = () => {
      scene.hover = null;
      scene.redraw();
    };
    $("search").oninput = render;
    $("sort").onchange = render;
    const filters = $("filters");
    for (const [key, name] of Object.entries({
      all: "All site types",
      ...types
    })) {
      const button = document.createElement("button");
      button.textContent = name;
      button.dataset.type = key;
      button.setAttribute("aria-pressed", key === "all");
      button.onclick = () => {
        filterType = key;
        filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === button));
        $("filter").classList.toggle("applied", key !== "all");
        $("filter").setAttribute("aria-label", "Filter site types, " + name);
        toggleFilter(false);
        $("filter").focus();
        render();
      };
      filters.append(button);
    }
    function toggleFilter(open) {
      filters.hidden = !open;
      $("filter").setAttribute("aria-expanded", open);
    }
    $("filter").onclick = () => toggleFilter(filters.hidden);
    document.addEventListener("pointerdown", (e) => {
      if (!e.target.closest(".filter-wrap")) toggleFilter(false);
      if (!e.target.closest("#coincident")) $("coincident").hidden = true;
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!filters.hidden) {
          toggleFilter(false);
          $("filter").focus();
        } else if (!$("coincident").hidden) {
          clear();
          $("scene").focus();
        } else if ($("about").open) return;
        else if (selected) $("back").click();
        else if (!$("communityView").hidden) $("communityBack").click();
        else if (mobile()) $("closeIndex").click();
      }
    });
    $("iso").onclick = () => scene.view("iso");
    $("top").onclick = () => scene.view("top");
    $("reset").onclick = () => scene.view("iso", true);
    $("zoomIn").onclick = () => scene.zoomBy(1.45);
    $("zoomOut").onclick = () => scene.zoomBy(1 / 1.45);
    $("explore").onclick = () => {
      showIndex();
      $("sidebar").classList.remove("open");
      scene.view("iso", true);
    };
    render();
    $("mapStatus").hidden = true;
  }
  try {
    start();
  } catch (error) {
    console.error(error);
    $("mapStatus").textContent = "Unable to load the atlas. Check that the site files are together and reload.";
  }
})();
