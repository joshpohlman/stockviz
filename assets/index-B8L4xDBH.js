(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Technology`,`Healthcare`,`Financial`,`Consumer Cyclical`,`Consumer Defensive`,`Industrials`,`Energy`,`Utilities`,`Real Estate`,`Basic Materials`,`Communication Services`],t=[{symbol:`AAPL`,name:`Apple Inc.`,sector:`Technology`,industry:`Consumer Electronics`,marketCap:32e11},{symbol:`MSFT`,name:`Microsoft Corp.`,sector:`Technology`,industry:`Software`,marketCap:31e11},{symbol:`NVDA`,name:`NVIDIA Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:28e11},{symbol:`GOOGL`,name:`Alphabet Inc.`,sector:`Communication Services`,industry:`Internet Content`,marketCap:21e11},{symbol:`AMZN`,name:`Amazon.com Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:19e11},{symbol:`META`,name:`Meta Platforms`,sector:`Communication Services`,industry:`Social Media`,marketCap:14e11},{symbol:`TSLA`,name:`Tesla Inc.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e11},{symbol:`BRK.B`,name:`Berkshire Hathaway`,sector:`Financial`,industry:`Insurance`,marketCap:9e11},{symbol:`AVGO`,name:`Broadcom Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:75e10},{symbol:`JPM`,name:`JPMorgan Chase`,sector:`Financial`,industry:`Banks`,marketCap:58e10},{symbol:`V`,name:`Visa Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:56e10},{symbol:`UNH`,name:`UnitedHealth Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:52e10},{symbol:`XOM`,name:`Exxon Mobil`,sector:`Energy`,industry:`Oil & Gas`,marketCap:48e10},{symbol:`LLY`,name:`Eli Lilly`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:75e10},{symbol:`MA`,name:`Mastercard Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:45e10},{symbol:`COST`,name:`Costco Wholesale`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:4e11},{symbol:`HD`,name:`Home Depot`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:38e10},{symbol:`PG`,name:`Procter & Gamble`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:37e10},{symbol:`JNJ`,name:`Johnson & Johnson`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:36e10},{symbol:`ABBV`,name:`AbbVie Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:31e10},{symbol:`NFLX`,name:`Netflix Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:29e10},{symbol:`CRM`,name:`Salesforce Inc.`,sector:`Technology`,industry:`Software`,marketCap:28e10},{symbol:`BAC`,name:`Bank of America`,sector:`Financial`,industry:`Banks`,marketCap:31e10},{symbol:`ORCL`,name:`Oracle Corp.`,sector:`Technology`,industry:`Software`,marketCap:38e10},{symbol:`CVX`,name:`Chevron Corp.`,sector:`Energy`,industry:`Oil & Gas`,marketCap:29e10},{symbol:`KO`,name:`Coca-Cola Co.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:27e10},{symbol:`AMD`,name:`Advanced Micro Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:25e10},{symbol:`PEP`,name:`PepsiCo Inc.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:23e10},{symbol:`WMT`,name:`Walmart Inc.`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:52e10},{symbol:`DIS`,name:`Walt Disney Co.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e10},{symbol:`CSCO`,name:`Cisco Systems`,sector:`Technology`,industry:`Communication Equipment`,marketCap:21e10},{symbol:`INTC`,name:`Intel Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:95e9},{symbol:`QCOM`,name:`Qualcomm Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:19e10},{symbol:`IBM`,name:`IBM Corp.`,sector:`Technology`,industry:`IT Services`,marketCap:18e10},{symbol:`GE`,name:`GE Aerospace`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:19e10},{symbol:`CAT`,name:`Caterpillar Inc.`,sector:`Industrials`,industry:`Farm & Construction`,marketCap:175e9},{symbol:`BA`,name:`Boeing Co.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:13e10},{symbol:`UPS`,name:`United Parcel Service`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:11e10},{symbol:`RTX`,name:`RTX Corp.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:16e10},{symbol:`HON`,name:`Honeywell Intl.`,sector:`Industrials`,industry:`Conglomerates`,marketCap:14e10},{symbol:`MRK`,name:`Merck & Co.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:25e10},{symbol:`PFE`,name:`Pfizer Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:15e10},{symbol:`TMO`,name:`Thermo Fisher`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:2e11},{symbol:`ABT`,name:`Abbott Labs`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:21e10},{symbol:`AMGN`,name:`Amgen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:155e9},{symbol:`GILD`,name:`Gilead Sciences`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:105e9},{symbol:`GS`,name:`Goldman Sachs`,sector:`Financial`,industry:`Capital Markets`,marketCap:16e10},{symbol:`MS`,name:`Morgan Stanley`,sector:`Financial`,industry:`Capital Markets`,marketCap:155e9},{symbol:`WFC`,name:`Wells Fargo`,sector:`Financial`,industry:`Banks`,marketCap:21e10},{symbol:`C`,name:`Citigroup Inc.`,sector:`Financial`,industry:`Banks`,marketCap:13e10},{symbol:`BLK`,name:`BlackRock Inc.`,sector:`Financial`,industry:`Asset Management`,marketCap:13e10},{symbol:`AXP`,name:`American Express`,sector:`Financial`,industry:`Credit Services`,marketCap:175e9},{symbol:`NKE`,name:`Nike Inc.`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:115e9},{symbol:`SBUX`,name:`Starbucks Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:95e9},{symbol:`MCD`,name:`McDonald's Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:21e10},{symbol:`LOW`,name:`Lowe's Companies`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:14e10},{symbol:`TGT`,name:`Target Corp.`,sector:`Consumer Cyclical`,industry:`Discount Stores`,marketCap:65e9},{symbol:`F`,name:`Ford Motor Co.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:45e9},{symbol:`GM`,name:`General Motors`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:55e9},{symbol:`PM`,name:`Philip Morris`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:16e10},{symbol:`MO`,name:`Altria Group`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:85e9},{symbol:`CL`,name:`Colgate-Palmolive`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:75e9},{symbol:`COP`,name:`ConocoPhillips`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:13e10},{symbol:`SLB`,name:`Schlumberger`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:65e9},{symbol:`EOG`,name:`EOG Resources`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:75e9},{symbol:`OXY`,name:`Occidental Petroleum`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:5e10},{symbol:`NEE`,name:`NextEra Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:15e10},{symbol:`DUK`,name:`Duke Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:8e10},{symbol:`SO`,name:`Southern Co.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:9e10},{symbol:`D`,name:`Dominion Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:45e9},{symbol:`AMT`,name:`American Tower`,sector:`Real Estate`,industry:`REIT - Specialty`,marketCap:95e9},{symbol:`PLD`,name:`Prologis Inc.`,sector:`Real Estate`,industry:`REIT - Industrial`,marketCap:11e10},{symbol:`EQIX`,name:`Equinix Inc.`,sector:`Real Estate`,industry:`REIT - Data Centers`,marketCap:8e10},{symbol:`LIN`,name:`Linde plc`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:21e10},{symbol:`APD`,name:`Air Products`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:6e10},{symbol:`FCX`,name:`Freeport-McMoRan`,sector:`Basic Materials`,industry:`Copper`,marketCap:55e9},{symbol:`NEM`,name:`Newmont Corp.`,sector:`Basic Materials`,industry:`Gold`,marketCap:5e10},{symbol:`T`,name:`AT&T Inc.`,sector:`Communication Services`,industry:`Telecom`,marketCap:13e10},{symbol:`VZ`,name:`Verizon`,sector:`Communication Services`,industry:`Telecom`,marketCap:17e10},{symbol:`CMCSA`,name:`Comcast Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:16e10},{symbol:`TMUS`,name:`T-Mobile US`,sector:`Communication Services`,industry:`Telecom`,marketCap:23e10},{symbol:`ADBE`,name:`Adobe Inc.`,sector:`Technology`,industry:`Software`,marketCap:23e10},{symbol:`NOW`,name:`ServiceNow`,sector:`Technology`,industry:`Software`,marketCap:18e10},{symbol:`INTU`,name:`Intuit Inc.`,sector:`Technology`,industry:`Software`,marketCap:17e10},{symbol:`TXN`,name:`Texas Instruments`,sector:`Technology`,industry:`Semiconductors`,marketCap:175e9},{symbol:`MU`,name:`Micron Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:11e10},{symbol:`LRCX`,name:`Lam Research`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:1e11},{symbol:`SNPS`,name:`Synopsys Inc.`,sector:`Technology`,industry:`Software`,marketCap:85e9},{symbol:`PANW`,name:`Palo Alto Networks`,sector:`Technology`,industry:`Software`,marketCap:115e9},{symbol:`CRWD`,name:`CrowdStrike`,sector:`Technology`,industry:`Software`,marketCap:8e10},{symbol:`PLTR`,name:`Palantir Technologies`,sector:`Technology`,industry:`Software`,marketCap:7e10},{symbol:`UBER`,name:`Uber Technologies`,sector:`Technology`,industry:`Software`,marketCap:15e10},{symbol:`SQ`,name:`Block Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`SHOP`,name:`Shopify Inc.`,sector:`Technology`,industry:`Software`,marketCap:95e9},{symbol:`PYPL`,name:`PayPal Holdings`,sector:`Financial`,industry:`Credit Services`,marketCap:75e9},{symbol:`COIN`,name:`Coinbase Global`,sector:`Financial`,industry:`Capital Markets`,marketCap:55e9},{symbol:`SPY`,name:`SPDR S&P 500 ETF`,sector:`Financial`,industry:`ETF`,marketCap:5e11},{symbol:`QQQ`,name:`Invesco QQQ Trust`,sector:`Financial`,industry:`ETF`,marketCap:25e10},{symbol:`IWM`,name:`iShares Russell 2000`,sector:`Financial`,industry:`ETF`,marketCap:6e10},{symbol:`DIA`,name:`SPDR Dow Jones ETF`,sector:`Financial`,industry:`ETF`,marketCap:35e9},{symbol:`DE`,name:`Deere & Co.`,sector:`Industrials`,industry:`Farm Equipment`,marketCap:12e10},{symbol:`MMM`,name:`3M Company`,sector:`Industrials`,industry:`Conglomerates`,marketCap:7e10},{symbol:`LMT`,name:`Lockheed Martin`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:115e9},{symbol:`UNP`,name:`Union Pacific`,sector:`Industrials`,industry:`Railroads`,marketCap:145e9},{symbol:`FDX`,name:`FedEx Corp.`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:65e9},{symbol:`ISRG`,name:`Intuitive Surgical`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`VRTX`,name:`Vertex Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:115e9},{symbol:`REGN`,name:`Regeneron Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:95e9},{symbol:`BMY`,name:`Bristol-Myers Squibb`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:95e9},{symbol:`CI`,name:`Cigna Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:95e9},{symbol:`ELV`,name:`Elevance Health`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:11e10},{symbol:`ZTS`,name:`Zoetis Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:8e10},{symbol:`MDLZ`,name:`Mondelez Intl.`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:95e9},{symbol:`KHC`,name:`Kraft Heinz`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:4e10},{symbol:`GIS`,name:`General Mills`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:38e9},{symbol:`KMB`,name:`Kimberly-Clark`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:48e9},{symbol:`MAR`,name:`Marriott Intl.`,sector:`Consumer Cyclical`,industry:`Lodging`,marketCap:75e9},{symbol:`BKNG`,name:`Booking Holdings`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:16e10},{symbol:`ABNB`,name:`Airbnb Inc.`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:85e9},{symbol:`ROST`,name:`Ross Stores`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:45e9},{symbol:`TJX`,name:`TJX Companies`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:12e10},{symbol:`ORLY`,name:`O'Reilly Automotive`,sector:`Consumer Cyclical`,industry:`Auto Parts`,marketCap:6e10},{symbol:`PSX`,name:`Phillips 66`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`MPC`,name:`Marathon Petroleum`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`VLO`,name:`Valero Energy`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:45e9},{symbol:`HAL`,name:`Halliburton Co.`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:25e9},{symbol:`DVN`,name:`Devon Energy`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:25e9},{symbol:`AEP`,name:`American Electric Power`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:5e10},{symbol:`EXC`,name:`Exelon Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`SRE`,name:`Sempra Energy`,sector:`Utilities`,industry:`Utilities - Diversified`,marketCap:5e10},{symbol:`SPG`,name:`Simon Property Group`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:55e9},{symbol:`O`,name:`Realty Income`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:48e9},{symbol:`WELL`,name:`Welltower Inc.`,sector:`Real Estate`,industry:`REIT - Healthcare`,marketCap:65e9},{symbol:`DOW`,name:`Dow Inc.`,sector:`Basic Materials`,industry:`Chemicals`,marketCap:38e9},{symbol:`DD`,name:`DuPont de Nemours`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:35e9},{symbol:`NUE`,name:`Nucor Corp.`,sector:`Basic Materials`,industry:`Steel`,marketCap:35e9},{symbol:`STLD`,name:`Steel Dynamics`,sector:`Basic Materials`,industry:`Steel`,marketCap:2e10},{symbol:`EA`,name:`Electronic Arts`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:38e9},{symbol:`TTWO`,name:`Take-Two Interactive`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`ROKU`,name:`Roku Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:1e10},{symbol:`SNAP`,name:`Snap Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:18e9},{symbol:`PINS`,name:`Pinterest Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:22e9},{symbol:`SPOT`,name:`Spotify Technology`,sector:`Communication Services`,industry:`Internet Content`,marketCap:75e9},{symbol:`WDAY`,name:`Workday Inc.`,sector:`Technology`,industry:`Software`,marketCap:65e9},{symbol:`TEAM`,name:`Atlassian Corp.`,sector:`Technology`,industry:`Software`,marketCap:55e9},{symbol:`DDOG`,name:`Datadog Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`NET`,name:`Cloudflare Inc.`,sector:`Technology`,industry:`Software`,marketCap:35e9},{symbol:`SNOW`,name:`Snowflake Inc.`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`MDB`,name:`MongoDB Inc.`,sector:`Technology`,industry:`Software`,marketCap:25e9},{symbol:`ZS`,name:`Zscaler Inc.`,sector:`Technology`,industry:`Software`,marketCap:3e10},{symbol:`FTNT`,name:`Fortinet Inc.`,sector:`Technology`,industry:`Software`,marketCap:75e9},{symbol:`KLAC`,name:`KLA Corp.`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:9e10},{symbol:`AMAT`,name:`Applied Materials`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:16e10},{symbol:`ADI`,name:`Analog Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:1e11},{symbol:`MRVL`,name:`Marvell Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:7e10},{symbol:`ON`,name:`ON Semiconductor`,sector:`Technology`,industry:`Semiconductors`,marketCap:3e10},{symbol:`SMCI`,name:`Super Micro Computer`,sector:`Technology`,industry:`Computer Hardware`,marketCap:3e10},{symbol:`DELL`,name:`Dell Technologies`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e10},{symbol:`HPE`,name:`Hewlett Packard Enterprise`,sector:`Technology`,industry:`Computer Hardware`,marketCap:22e9},{symbol:`SCHW`,name:`Charles Schwab`,sector:`Financial`,industry:`Capital Markets`,marketCap:13e10},{symbol:`USB`,name:`U.S. Bancorp`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`PNC`,name:`PNC Financial`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`TFC`,name:`Truist Financial`,sector:`Financial`,industry:`Banks`,marketCap:55e9},{symbol:`ICE`,name:`Intercontinental Exchange`,sector:`Financial`,industry:`Financial Data`,marketCap:9e10},{symbol:`CME`,name:`CME Group`,sector:`Financial`,industry:`Financial Data`,marketCap:95e9},{symbol:`SPGI`,name:`S&P Global`,sector:`Financial`,industry:`Financial Data`,marketCap:15e10},{symbol:`MCO`,name:`Moody's Corp.`,sector:`Financial`,industry:`Financial Data`,marketCap:85e9},{symbol:`HOOD`,name:`Robinhood Markets`,sector:`Financial`,industry:`Capital Markets`,marketCap:2e10},{symbol:`SOFI`,name:`SoFi Technologies`,sector:`Financial`,industry:`Credit Services`,marketCap:12e9}],n=[{symbol:`SPY`,label:`S&P 500`},{symbol:`QQQ`,label:`NASDAQ`},{symbol:`DIA`,label:`DOW`},{symbol:`IWM`,label:`RUSSELL 2K`}],r=`https://finnhub.io/api/v1`,i=5,a=1100;function o(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function s(e){return 20+o(e)()*480}var c=new Map;function l(){if(!c.size)for(let e of t)c.set(e.symbol,s(e.symbol))}function u(){l();for(let e of t){let t=c.get(e.symbol),n=(Math.random()-.48)*t*.008;c.set(e.symbol,Math.max(1,t+n))}}function d(e){l();let t=c.get(e.symbol),n=o(e.symbol+Date.now().toString().slice(0,-4)),r=t*(.98+n()*.04),i=Math.max(t,r)*(1+n()*.02),a=Math.min(t,r)*(1-n()*.02),s=r*(.995+n()*.01),u=t-s,d=u/s*100,f=Math.floor(5e5+n()*5e7);return{symbol:e.symbol,price:t,open:r,high:i,low:a,prevClose:s,change:u,changePct:d,volume:f,marketCap:e.marketCap,sector:e.sector,industry:e.industry,name:e.name,timestamp:Date.now()}}function f(e,t=60){l();let n=c.get(e)||100,r=o(e+`candles`),i=[],a=Date.now();for(let e=t-1;e>=0;e--){let t=n,o=(r()-.48)*n*.025,s=Math.max(1,t+o),c=Math.max(t,s)*(1+r()*.01),l=Math.min(t,s)*(1-r()*.01);i.push({t:a-e*864e5,o:t,h:c,l,c:s,v:Math.floor(r()*1e7)}),n=s}return i}var p=[`Markets rally on strong earnings outlook`,`Fed signals cautious approach to rate cuts`,`Tech sector leads broad market gains`,`Energy stocks slip as oil prices retreat`,`Analysts upgrade outlook for semiconductor stocks`,`Consumer spending data beats expectations`,`Treasury yields edge higher in morning trade`,`IPO market shows signs of renewed activity`];function m(e){let t=o(e+`news`);return Array.from({length:5},(n,r)=>({headline:e?`${e}: ${p[Math.floor(t()*p.length)]}`:p[Math.floor(t()*p.length)],source:[`Reuters`,`Bloomberg`,`CNBC`,`MarketWatch`][Math.floor(t()*4)],url:`#`,datetime:Math.floor(Date.now()/1e3)-r*3600-Math.floor(t()*7200),symbol:e||void 0}))}async function h(e,t){let n=`${r}/quote?symbol=${encodeURIComponent(e)}&token=${t}`,i=await fetch(n);if(!i.ok)throw Error(`Finnhub ${i.status}`);let a=await i.json();if(!a.c)throw Error(`No quote data`);let o=a.c-a.pc,s=a.pc?o/a.pc*100:0;return{symbol:e,price:a.c,open:a.o,high:a.h,low:a.l,prevClose:a.pc,change:o,changePct:s,volume:null,timestamp:(a.t||Date.now()/1e3)*1e3}}async function g(e,t){let n=`${r}/stock/profile2?symbol=${encodeURIComponent(e)}&token=${t}`,i=await fetch(n);return i.ok?i.json():null}function _(e){return new Promise(t=>setTimeout(t,e))}function ee(e,t,n){return{...e,name:n?.name||t?.name||e.symbol,sector:t?.sector||n?.finnhubIndustry||`—`,industry:t?.industry||n?.finnhubIndustry||`—`,marketCap:n?.marketCapitalization?n.marketCapitalization*1e6:t?.marketCap,volume:e.volume??Math.floor(Math.random()*2e7+1e6)}}async function te(e){let n=new Map(t.map(e=>[e.symbol,e])),r=t.map(e=>e.symbol);if(!e.apiKey?.trim()||e.useMockData){u();let e=new Map;for(let n of t)e.set(n.symbol,d(n));return{quotes:e,source:`mock`}}let o=new Map,s=e.apiKey.trim();for(let e=0;e<r.length;e+=i){let t=r.slice(e,e+i),c=await Promise.allSettled(t.map(async e=>{let[t,r]=await Promise.all([h(e,s),g(e,s).catch(()=>null)]);return ee(t,n.get(e),r)}));for(let e of c)e.status===`fulfilled`&&o.set(e.value.symbol,e.value);e+i<r.length&&await _(a)}for(let e of t)o.has(e.symbol)||o.set(e.symbol,d(e));return{quotes:o,source:`finnhub`}}async function ne(e,n){let r=t.find(t=>t.symbol===e);if(!n.apiKey?.trim()||n.useMockData)return r?d(r):null;try{let[t,i]=await Promise.all([h(e,n.apiKey.trim()),g(e,n.apiKey.trim())]);return ee(t,r,i)}catch{return r?d(r):null}}async function re(e,t,n=`D`,i=60){if(!t.apiKey?.trim()||t.useMockData)return f(e,i);try{let a=Math.floor(Date.now()/1e3),o=a-i*86400,s=`${r}/stock/candle?symbol=${encodeURIComponent(e)}&resolution=${n}&from=${o}&to=${a}&token=${t.apiKey.trim()}`,c=await fetch(s);if(!c.ok)throw Error(`candle fetch failed`);let l=await c.json();return l.s!==`ok`||!l.t?.length?f(e,i):l.t.map((e,t)=>({t:e*1e3,o:l.o[t],h:l.h[t],l:l.l[t],c:l.c[t],v:l.v[t]}))}catch{return f(e,i)}}async function ie(e,t){if(!t.apiKey?.trim()||t.useMockData)return m(e);try{let n=new Date().toISOString().slice(0,10),i=new Date(Date.now()-7*864e5).toISOString().slice(0,10),a=`${r}/company-news?symbol=${encodeURIComponent(e)}&from=${i}&to=${n}&token=${t.apiKey.trim()}`,o=await fetch(a);if(!o.ok)throw Error(`news failed`);return(await o.json()||[]).slice(0,8)}catch{return m(e)}}async function ae(e){if(!e.apiKey?.trim()||e.useMockData)return m(null);try{let t=`${r}/news?category=general&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`news failed`);return(await n.json()||[]).slice(0,20)}catch{return m(null)}}async function oe(e){if(!e.apiKey?.trim()||e.useMockData){let e=new Date().getHours(),t=e>=9&&e<16;return{isOpen:t,label:t?`Market Open (simulated)`:`Market Closed (simulated)`}}try{let t=`${r}/stock/market-status?exchange=US&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`status failed`);let i=await n.json();return{isOpen:!!i.isOpen,label:i.isOpen?`US Market Open`:`US Market Closed`,session:i.session}}catch{return{isOpen:!1,label:`Market status unavailable`}}}async function se(e){if(!e?.trim())return{valid:!1,message:`API key is required`};try{return await h(`AAPL`,e.trim())?{valid:!0,message:`Connected to Finnhub`}:{valid:!1,message:`Invalid response`}}catch(e){return{valid:!1,message:e.message||`Connection failed`}}}var ce={apiKey:``,refreshInterval:30,useMockData:!0,watchlist:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`]},v={sector:``,minChange:``,maxChange:``,minVolume:``,minMarketCap:``,search:``},y=fe(),b={...v},x=pe(),S=`all`,le=new Map,C={key:`changePct`,dir:`desc`},ue=null,w=null,T=`mock`,de=null,E=new Set,D=null;function fe(){try{let e=localStorage.getItem(`stockviz-settings`);if(e)return{...ce,...JSON.parse(e)}}catch{}return{...ce}}function pe(){try{let e=localStorage.getItem(`stockviz-saved-filters`);if(e)return JSON.parse(e)}catch{}return[]}function me(){localStorage.setItem(`stockviz-settings`,JSON.stringify(y)),A()}function O(){return{...y}}function he(e){y={...y,...e},e.apiKey!==void 0&&(y.useMockData=!e.apiKey?.trim()),me()}function ge(){return{...b}}function _e(e,{preset:t=null}={}){b={...b,...e},t!==null&&(S=t),A()}function ve(e,t){b={...v,...t},S=e,A()}function ye(){return S}function be(){return{...C}}function xe(e){C.key===e?C.dir=C.dir===`asc`?`desc`:`asc`:C={key:e,dir:`desc`},A()}function k(){return le}function Se(e,t={}){le=e,w=t.fetchedAt??Date.now(),T=t.source??T,A()}function Ce(e){de=e,A()}function we(){return de}function Te(){return{lastFetchAt:w,dataSource:T,selectedSymbol:ue}}function Ee(e){ue=e,A()}function De(){return[...x]}function Oe(e){let t={id:Date.now().toString(),name:e,filters:{...b}};return x=[...x,t],localStorage.setItem(`stockviz-saved-filters`,JSON.stringify(x)),A(),t}function ke(e){x=x.filter(t=>t.id!==e),localStorage.setItem(`stockviz-saved-filters`,JSON.stringify(x)),A()}function Ae(e){let t=x.find(t=>t.id===e);t&&(b={...v,...t.filters},S=`custom`,A())}function je(e){return E.add(e),()=>E.delete(e)}function A(){E.forEach(e=>e())}function j(e){M();let t=async()=>{await e()};t(),D=setInterval(t,y.refreshInterval*1e3)}function M(){D&&=(clearInterval(D),null)}function Me(){b={...v},S=`all`,A()}function N(e,t=2){return e==null||Number.isNaN(e)?`—`:e.toLocaleString(`en-US`,{minimumFractionDigits:t,maximumFractionDigits:t})}function Ne(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}`}function P(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}%`}function F(e){return e==null?`—`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toLocaleString()}function Pe(e){return e==null?`—`:e>=0xe8d4a51000?`${(e/0xe8d4a51000).toFixed(2)}T`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(0)}M`:e.toLocaleString()}function Fe(e){return e?new Date(e).toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}):``}function I(e){return e==null?``:e>0?`pos`:e<0?`neg`:`flat`}function Ie(e){let t=Math.max(-5,Math.min(5,e));if(t>=0){let e=t/5;return`rgb(${Math.round(20+(1-e)*30)},${Math.round(80+e*120)},${Math.round(40+(1-e)*20)})`}let n=Math.abs(t)/5;return`rgb(${Math.round(120+n*135)},${Math.round(40+(1-n)*30)},${Math.round(40+(1-n)*20)})`}function Le(e,t,{height:n=160}={}){if(!t?.length){e.innerHTML=`<p class="chart-empty">No chart data</p>`;return}let r=document.createElement(`canvas`);r.className=`price-chart-canvas`,r.height=n,e.innerHTML=``,e.appendChild(r);let i=window.devicePixelRatio||1,a=e.clientWidth||320;r.width=a*i,r.style.width=`${a}px`,r.style.height=`${n}px`;let o=r.getContext(`2d`);o.scale(i,i);let s=t.map(e=>e.l),c=t.map(e=>e.h),l=Math.min(...s),u=Math.max(...c),d=(u-l)*.08||1,f=l-d,p=u+d-f,m=a-16,h=n-16,g=m/t.length,_=e=>8+h-(e-f)/p*h;o.strokeStyle=`rgba(48,54,61,0.6)`,o.lineWidth=1;for(let e=0;e<=4;e++){let t=8+h/4*e;o.beginPath(),o.moveTo(8,t),o.lineTo(a-8,t),o.stroke()}if(t.length<=80){let e=Math.max(2,g*.6);t.forEach((t,n)=>{let r=8+n*g+g/2,i=t.c>=t.o?`#3fb950`:`#f85149`;o.strokeStyle=i,o.fillStyle=i,o.lineWidth=1,o.beginPath(),o.moveTo(r,_(t.h)),o.lineTo(r,_(t.l)),o.stroke();let a=_(Math.max(t.o,t.c)),s=_(Math.min(t.o,t.c));o.fillRect(r-e/2,a,e,Math.max(1,s-a))})}else{o.strokeStyle=`#58a6ff`,o.lineWidth=1.5,o.beginPath(),t.forEach((e,t)=>{let n=8+t*g+g/2,r=_(e.c);t===0?o.moveTo(n,r):o.lineTo(n,r)}),o.stroke(),t[t.length-1];let e=o.createLinearGradient(0,8,0,n-8);e.addColorStop(0,`rgba(88,166,255,0.25)`),e.addColorStop(1,`rgba(88,166,255,0)`),o.lineTo(8+(t.length-1)*g+g/2,n-8),o.lineTo(8+g/2,n-8),o.closePath(),o.fillStyle=e,o.fill()}o.fillStyle=`#8b949e`,o.font=`10px IBM Plex Mono, monospace`,o.textAlign=`right`,o.fillText(u.toFixed(2),a-2,18),o.fillText(l.toFixed(2),a-2,n-8-2)}var L,R,z,B;function Re(){L=document.getElementById(`quote-panel`),R=document.getElementById(`quote-panel-body`),z=document.getElementById(`quote-overlay`),B=document.getElementById(`quote-close`),B?.addEventListener(`click`,V),z?.addEventListener(`click`,V),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&L&&!L.hidden&&V()})}function ze(e){L&&(L.hidden=!1,z.hidden=!1,R.innerHTML=`<div class="quote-loading">Loading quote…</div>`,Be(e))}function V(){L&&(L.hidden=!0,z.hidden=!0,Ee(null))}async function Be(e){let t=O(),[n,r,i]=await Promise.all([ne(e,t),re(e,t),ie(e,t)]);if(!n){R.innerHTML=`<p class="quote-error">Could not load quote.</p>`;return}let a=I(n.changePct);R.innerHTML=`
    <div class="quote-header">
      <div>
        <h2 class="quote-symbol">${n.symbol}</h2>
        <p class="quote-name">${n.name||``}</p>
      </div>
      <div class="quote-price-block">
        <span class="quote-price">$${N(n.price)}</span>
        <span class="quote-change ${a}">${Ne(n.change)} (${P(n.changePct)})</span>
      </div>
    </div>
    <div class="quote-grid">
      <div class="quote-stat"><span class="label">Open</span><span class="value">$${N(n.open)}</span></div>
      <div class="quote-stat"><span class="label">High</span><span class="value">$${N(n.high)}</span></div>
      <div class="quote-stat"><span class="label">Low</span><span class="value">$${N(n.low)}</span></div>
      <div class="quote-stat"><span class="label">Prev Close</span><span class="value">$${N(n.prevClose)}</span></div>
      <div class="quote-stat"><span class="label">Volume</span><span class="value">${F(n.volume)}</span></div>
      <div class="quote-stat"><span class="label">Market Cap</span><span class="value">${Pe(n.marketCap)}</span></div>
      <div class="quote-stat"><span class="label">Sector</span><span class="value">${n.sector||`—`}</span></div>
      <div class="quote-stat"><span class="label">Industry</span><span class="value">${n.industry||`—`}</span></div>
    </div>
    <div class="quote-chart-section">
      <h3 class="quote-section-title">Price Chart (60D)</h3>
      <div id="quote-chart" class="quote-chart-host"></div>
    </div>
    <div class="quote-news-section">
      <h3 class="quote-section-title">News</h3>
      <div class="quote-news-list">
        ${i.slice(0,5).map(e=>`
          <a class="quote-news-item" href="${e.url||`#`}" target="_blank" rel="noopener">
            <span class="quote-news-headline">${e.headline||e.title}</span>
            <span class="quote-news-meta">${e.source||``}</span>
          </a>
        `).join(``)}
      </div>
    </div>
  `;let o=R.querySelector(`#quote-chart`);o&&Le(o,r,{height:180})}function H(t){let n=k(),r=O(),i=[...n.values()].filter(e=>e.changePct!=null),a=[...i].sort((e,t)=>t.changePct-e.changePct).slice(0,10),o=[...i].sort((e,t)=>e.changePct-t.changePct).slice(0,10),s=[...i].sort((e,t)=>(t.volume||0)-(e.volume||0)).slice(0,10),c=e.map(e=>{let t=i.filter(t=>t.sector===e);return t.length?{sector:e,avg:t.reduce((e,t)=>e+t.changePct,0)/t.length,count:t.length}:null}).filter(Boolean),l=r.watchlist.map(e=>n.get(e)).filter(Boolean);t.innerHTML=`
    <div class="page-header">
      <h1>Market Overview</h1>
      <p class="page-sub">Real-time snapshot of your stock universe. Click any ticker for details.</p>
    </div>

    <section class="panel">
      <h2 class="panel-title">Watchlist</h2>
      <div class="card-grid">
        ${l.length?l.map(Ve).join(``):`<p class="muted">Add symbols in Settings → Watchlist</p>`}
      </div>
    </section>

    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title pos-title">Top Gainers</h2>
        ${U(a)}
      </section>
      <section class="panel">
        <h2 class="panel-title neg-title">Top Losers</h2>
        ${U(o)}
      </section>
    </div>

    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">Most Active</h2>
        ${He(s)}
      </section>
      <section class="panel">
        <h2 class="panel-title">Sector Performance</h2>
        <div class="sector-bars">
          ${c.map(Ue).join(``)}
        </div>
      </section>
    </div>
  `,t.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Ve(e){let t=I(e.changePct);return`
    <button class="watch-card" data-symbol="${e.symbol}">
      <span class="watch-sym">${e.symbol}</span>
      <span class="watch-price">$${N(e.price)}</span>
      <span class="watch-chg ${t}">${P(e.changePct)}</span>
    </button>
  `}function U(e){return`
    <table class="data-table compact">
      <thead><tr><th>Ticker</th><th>Price</th><th>Change</th><th>%</th></tr></thead>
      <tbody>
        ${e.map(e=>`
          <tr class="clickable" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td>$${N(e.price)}</td>
            <td class="${I(e.change)}">${e.change>=0?`+`:``}${e.change?.toFixed(2)??`—`}</td>
            <td class="${I(e.changePct)}">${P(e.changePct)}</td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `}function He(e){return`
    <table class="data-table compact">
      <thead><tr><th>Ticker</th><th>Volume</th><th>Price</th><th>%</th></tr></thead>
      <tbody>
        ${e.map(e=>`
          <tr class="clickable" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td>${F(e.volume)}</td>
            <td>$${N(e.price)}</td>
            <td class="${I(e.changePct)}">${P(e.changePct)}</td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `}function Ue({sector:e,avg:t,count:n}){let r=I(t);return`
    <div class="sector-bar-row">
      <span class="sector-bar-label">${e}</span>
      <div class="sector-bar-track">
        <div class="sector-bar-fill ${r}" style="width:${Math.min(100,Math.abs(t)*15+10)}%"></div>
      </div>
      <span class="sector-bar-val ${r}">${P(t)}</span>
      <span class="sector-bar-count">${n}</span>
    </div>
  `}var W=[{id:`all`,label:`All Stocks`,filters:{}},{id:`gainers`,label:`Top Gainers`,filters:{minChange:`2`}},{id:`losers`,label:`Top Losers`,filters:{maxChange:`-2`}},{id:`highvol`,label:`High Volume`,filters:{minVolume:`10000000`}},{id:`megacap`,label:`Mega Cap`,filters:{minMarketCap:`200000000000`}},{id:`tech`,label:`Technology`,filters:{sector:`Technology`}},{id:`healthcare`,label:`Healthcare`,filters:{sector:`Healthcare`}},{id:`energy`,label:`Energy`,filters:{sector:`Energy`}},{id:`financial`,label:`Financial`,filters:{sector:`Financial`}},{id:`oversold`,label:`Oversold (< -3%)`,filters:{maxChange:`-3`}},{id:`momentum`,label:`Momentum (> 5%)`,filters:{minChange:`5`}}];function We(e,t){return[...e.values()].filter(e=>{if(t.search){let n=t.search.toLowerCase();if(!e.symbol.toLowerCase().includes(n)&&!(e.name||``).toLowerCase().includes(n))return!1}return!(t.sector&&e.sector!==t.sector||t.minChange!==``&&e.changePct<Number(t.minChange)||t.maxChange!==``&&e.changePct>Number(t.maxChange)||t.minVolume!==``&&(e.volume||0)<Number(t.minVolume)||t.minMarketCap!==``&&(e.marketCap||0)<Number(t.minMarketCap))})}function Ge(e,t=`stockviz-screener.csv`){let n=[[`Symbol`,`Company`,`Sector`,`Price`,`Change`,`Change %`,`Volume`,`Market Cap`].join(`,`),...e.map(e=>[e.symbol,Ke(e.name),Ke(e.sector),N(e.price),e.change?.toFixed(2)??``,e.changePct?.toFixed(2)??``,e.volume??``,e.marketCap??``].join(`,`))],r=new Blob([n.join(`
`)],{type:`text/csv;charset=utf-8`}),i=document.createElement(`a`);i.href=URL.createObjectURL(r),i.download=t,i.click(),URL.revokeObjectURL(i.href)}function Ke(e){let t=String(e??``);return t.includes(`,`)||t.includes(`"`)?`"${t.replace(/"/g,`""`)}"`:t}var G=[`sector`,`minChange`,`maxChange`,`minVolume`,`minMarketCap`,`search`];function qe(){let e=location.hash.slice(1),t=e.indexOf(`?`);if(t===-1)return null;let n=new URLSearchParams(e.slice(t+1)),r={};for(let e of G){let t=n.get(e);t!=null&&(r[e]=t)}return Object.keys(r).length?r:null}function Je(e){let t=location.hash.slice(1).split(`?`)[0]||`/`;if(t!==`/screener`&&t!==`/map`)return;let n=new URLSearchParams;for(let t of G)e[t]&&n.set(t,e[t]);let r=n.toString(),i=r?`#${t}?${r}`:`#${t}`;location.hash!==i&&history.replaceState(null,``,i)}function Ye(){let e=qe();e&&_e(e)}function Xe(e){let t=new URLSearchParams;for(let n of G)e[n]&&t.set(n,e[n]);let n=t.toString(),r=location.origin+location.pathname;return n?`${r}#/screener?${n}`:`${r}#/screener`}function Ze(t){let n=ge(),r=be(),i=ye(),a=De(),o=k(),s=$e(We(o,n),r);Je(n),t.innerHTML=`
    <div class="page-header screener-header">
      <div>
        <h1>Stock Screener</h1>
        <p class="page-sub">Filter and sort ${o.size} symbols — Finviz-style customizable view.</p>
      </div>
      <div class="screener-actions">
        <button type="button" class="btn-secondary" id="export-csv">Export CSV</button>
        <button type="button" class="btn-secondary" id="share-screener">Copy Link</button>
        <span class="result-count">${s.length} results</span>
      </div>
    </div>

    <div class="preset-bar">
      ${W.map(e=>`
        <button type="button" class="preset-chip ${i===e.id?`active`:``}" data-preset="${e.id}">
          ${e.label}
        </button>
      `).join(``)}
    </div>

    <form class="filter-bar" id="filter-form">
      <div class="filter-group">
        <label>Search</label>
        <input type="search" name="search" placeholder="Symbol or name…" value="${q(n.search)}" />
      </div>
      <div class="filter-group">
        <label>Sector</label>
        <select name="sector">
          <option value="">All Sectors</option>
          ${e.map(e=>`<option value="${e}" ${n.sector===e?`selected`:``}>${e}</option>`).join(``)}
        </select>
      </div>
      <div class="filter-group">
        <label>Min %</label>
        <input type="number" name="minChange" step="0.1" placeholder="-10" value="${q(n.minChange)}" />
      </div>
      <div class="filter-group">
        <label>Max %</label>
        <input type="number" name="maxChange" step="0.1" placeholder="10" value="${q(n.maxChange)}" />
      </div>
      <div class="filter-group">
        <label>Min Vol</label>
        <input type="number" name="minVolume" step="100000" placeholder="1M" value="${q(n.minVolume)}" />
      </div>
      <div class="filter-group">
        <label>Min MCap</label>
        <select name="minMarketCap">
          <option value="">Any</option>
          <option value="10000000000" ${n.minMarketCap===`10000000000`?`selected`:``}>$10B+</option>
          <option value="50000000000" ${n.minMarketCap===`50000000000`?`selected`:``}>$50B+</option>
          <option value="100000000000" ${n.minMarketCap===`100000000000`?`selected`:``}>$100B+</option>
          <option value="500000000000" ${n.minMarketCap===`500000000000`?`selected`:``}>$500B+</option>
        </select>
      </div>
      <button type="button" class="btn-ghost" id="reset-filters">Reset</button>
      <button type="button" class="btn-ghost" id="save-filter">Save Preset</button>
    </form>

    ${a.length?`
      <div class="saved-filters">
        <span class="saved-label">Saved:</span>
        ${a.map(e=>`
          <button type="button" class="saved-chip" data-saved="${e.id}">${e.name}</button>
          <button type="button" class="saved-del" data-del="${e.id}" title="Delete">&times;</button>
        `).join(``)}
      </div>
    `:``}

    <div class="table-wrap">
      <table class="data-table screener-table" id="screener-table">
        <thead>
          <tr>
            ${K(`symbol`,`Ticker`,r)}
            ${K(`name`,`Company`,r)}
            ${K(`sector`,`Sector`,r)}
            ${K(`price`,`Price`,r)}
            ${K(`change`,`Change`,r)}
            ${K(`changePct`,`Change %`,r)}
            ${K(`volume`,`Volume`,r)}
            ${K(`marketCap`,`Market Cap`,r)}
          </tr>
        </thead>
        <tbody>
          ${s.length?s.map(Qe).join(``):`<tr><td colspan="8" class="empty-row">No matches — adjust filters</td></tr>`}
        </tbody>
      </table>
    </div>
  `;let c=t.querySelector(`#filter-form`),l=()=>{let e=new FormData(c);_e(Object.fromEntries(e.entries()),{preset:`custom`})};c.addEventListener(`input`,l),c.addEventListener(`change`,l),t.querySelector(`#reset-filters`)?.addEventListener(`click`,Me),t.querySelector(`#save-filter`)?.addEventListener(`click`,()=>{let e=prompt(`Name this filter preset:`);e?.trim()&&Oe(e.trim())}),t.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=W.find(t=>t.id===e.dataset.preset);t&&ve(t.id,t.filters)})}),t.querySelectorAll(`[data-saved]`).forEach(e=>{e.addEventListener(`click`,()=>Ae(e.dataset.saved))}),t.querySelectorAll(`[data-del]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),ke(e.dataset.del)})}),t.querySelector(`#export-csv`)?.addEventListener(`click`,()=>{Ge(s)}),t.querySelector(`#share-screener`)?.addEventListener(`click`,async()=>{let e=Xe(n);try{await navigator.clipboard.writeText(e);let n=t.querySelector(`#share-screener`),r=n.textContent;n.textContent=`Copied!`,setTimeout(()=>{n.textContent=r},2e3)}catch{prompt(`Copy this link:`,e)}}),t.querySelectorAll(`th[data-sort]`).forEach(e=>{e.addEventListener(`click`,()=>xe(e.dataset.sort))}),t.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function K(e,t,n){return`<th data-sort="${e}" class="sortable">${t}${n.key===e?n.dir===`asc`?` ▲`:` ▼`:``}</th>`}function Qe(e){return`
    <tr class="clickable" data-symbol="${e.symbol}">
      <td class="sym">${e.symbol}</td>
      <td class="name-cell">${e.name||`—`}</td>
      <td class="sector-cell">${e.sector||`—`}</td>
      <td>$${N(e.price)}</td>
      <td class="${I(e.change)}">${e.change>=0?`+`:``}${e.change?.toFixed(2)??`—`}</td>
      <td class="${I(e.changePct)}">${P(e.changePct)}</td>
      <td>${F(e.volume)}</td>
      <td>${Pe(e.marketCap)}</td>
    </tr>
  `}function $e(e,{key:t,dir:n}){let r=n===`asc`?1:-1;return[...e].sort((e,n)=>{let i=e[t]??``,a=n[t]??``;return typeof i==`number`&&typeof a==`number`?(i-a)*r:String(i).localeCompare(String(a))*r})}function q(e){return String(e??``).replace(/"/g,`&quot;`)}function et(e,t,n){if(!t.length){e.innerHTML=`<p class="empty-state">No stocks match current filters.</p>`;return}let r=new Map;for(let e of t){let t=e.sector||`Other`;r.has(t)||r.set(t,[]),r.get(t).push(e)}e.innerHTML=`
    <div class="heatmap-legend">
      <span class="legend-label">-5%</span>
      <div class="legend-gradient"></div>
      <span class="legend-label">+5%</span>
    </div>
    <div class="treemap">
      ${[...r.entries()].sort((e,t)=>{let n=e[1].reduce((e,t)=>e+t.changePct,0)/e[1].length;return t[1].reduce((e,t)=>e+t.changePct,0)/t[1].length-n}).map(([e,t])=>tt(e,t)).join(``)}
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>n?.(e.dataset.symbol))})}function tt(e,t){let n=t.reduce((e,t)=>e+(t.marketCap||1),0),r=t.reduce((e,t)=>e+t.changePct,0)/t.length;return`
    <div class="sector-block" style="flex:${Math.max(1,Math.round(n/5e10))}">
      <div class="sector-header" style="background:${Ie(r)}">
        <span class="sector-name">${e}</span>
        <span class="sector-avg">${r>=0?`+`:``}${r.toFixed(2)}%</span>
      </div>
      <div class="sector-tiles">
        ${t.sort((e,t)=>(t.marketCap||0)-(e.marketCap||0)).map(e=>nt(e,n)).join(``)}
      </div>
    </div>
  `}function nt(e,t){let n=(e.marketCap||1)/t,r=Math.max(1,Math.round(n*20)),i=e.changePct??0;return`
    <button
      class="heat-tile"
      data-symbol="${e.symbol}"
      style="flex:${r};background:${Ie(i)}"
      title="${e.name}: ${i>=0?`+`:``}${i.toFixed(2)}%"
    >
      <span class="tile-symbol">${e.symbol}</span>
      <span class="tile-pct">${i>=0?`+`:``}${i.toFixed(1)}%</span>
    </button>
  `}function rt(e){let t=We(k(),ge());e.innerHTML=`
    <div class="page-header">
      <h1>Market Heat Map</h1>
      <p class="page-sub">Sector treemap sized by market cap, colored by daily change. Uses screener filters.</p>
    </div>
    <div id="heatmap-root" class="heatmap-root"></div>
  `,et(e.querySelector(`#heatmap-root`),t,e=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))})}async function it(e){e.innerHTML=`
    <div class="page-header">
      <h1>Market News</h1>
      <p class="page-sub">Latest headlines from your data feed.</p>
    </div>
    <div class="news-loading panel">Loading news…</div>
  `;let t=await ae(O()),n=e.querySelector(`.news-loading`);n&&(n.className=`news-list panel`,n.innerHTML=t.length?t.map(at).join(``):`<p class="muted">No news available.</p>`,n.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}))}function at(e){let t=e.datetime?new Date(e.datetime*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):``,n=e.related?.split(`,`)[0]||e.symbol;return`
    <article class="news-item">
      <div class="news-meta">
        <span class="news-source">${e.source||`News`}</span>
        <span class="news-date">${t}</span>
        ${n?`<button class="news-symbol" data-symbol="${n}">${n}</button>`:``}
      </div>
      <a class="news-headline" href="${e.url||`#`}" target="_blank" rel="noopener">${e.headline||e.title||`Untitled`}</a>
      ${e.summary?`<p class="news-summary">${e.summary}</p>`:``}
    </article>
  `}function ot(e){let t=O();e.innerHTML=`
    <div class="page-header">
      <h1>Settings</h1>
      <p class="page-sub">Connect a free Finnhub API key for live quotes, or use simulated data for development.</p>
    </div>

    <form class="settings-form panel" id="settings-form">
      <fieldset>
        <legend>Data Source</legend>
        <div class="field">
          <label for="apiKey">Finnhub API Key</label>
          <div class="input-row">
            <input type="password" id="apiKey" name="apiKey" placeholder="Paste your key…" value="${J(t.apiKey)}" autocomplete="off" />
            <button type="button" class="btn-secondary" id="test-api">Test Connection</button>
          </div>
          <p class="field-hint">
            Get a free key at <a href="https://finnhub.io/register" target="_blank" rel="noopener">finnhub.io/register</a>
            (60 calls/min). Leave blank to use simulated live data.
          </p>
          <p class="api-status" id="api-status"></p>
        </div>

        <div class="field">
          <label for="refreshInterval">Refresh Interval (seconds)</label>
          <input type="number" id="refreshInterval" name="refreshInterval" min="10" max="300" value="${t.refreshInterval}" />
        </div>

        <div class="field checkbox-field">
          <label>
            <input type="checkbox" name="useMockData" ${t.useMockData?`checked`:``} />
            Force simulated data (ignore API key)
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Watchlist</legend>
        <div class="field">
          <label for="watchlist">Symbols (comma-separated)</label>
          <input type="text" id="watchlist" name="watchlist" value="${J(t.watchlist.join(`, `))}" placeholder="AAPL, MSFT, NVDA" />
        </div>
      </fieldset>

      <button type="submit" class="btn-primary">Save Settings</button>
    </form>

    <section class="panel about-panel">
      <h2>About StockViz</h2>
      <p>Finviz-inspired stock screener you can customize and extend. Built with Vite + vanilla JS.</p>
      <ul>
        <li><strong>Screener</strong> — filter by sector, change %, volume, market cap</li>
        <li><strong>Heat Map</strong> — sector treemap with live color updates</li>
        <li><strong>Quote Panel</strong> — click any ticker for details</li>
        <li><strong>Extensible</strong> — add symbols in <code>src/data/universe.js</code></li>
      </ul>
    </section>
  `;let n=e.querySelector(`#settings-form`);n.addEventListener(`submit`,t=>{t.preventDefault();let r=new FormData(n),i=r.get(`watchlist`).split(`,`).map(e=>e.trim().toUpperCase()).filter(Boolean);he({apiKey:r.get(`apiKey`),refreshInterval:Number(r.get(`refreshInterval`))||30,useMockData:r.get(`useMockData`)===`on`,watchlist:i}),st(e),window.dispatchEvent(new CustomEvent(`stockviz:settings-saved`))}),e.querySelector(`#test-api`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#apiKey`).value,n=e.querySelector(`#api-status`);n.textContent=`Testing…`,n.className=`api-status`;let r=await se(t);n.textContent=r.message,n.className=`api-status ${r.valid?`ok`:`err`}`})}function st(e){let t=e.querySelector(`.save-toast`);t||(t=document.createElement(`p`),t.className=`save-toast`,e.querySelector(`.settings-form`)?.appendChild(t)),t.textContent=`Settings saved.`,setTimeout(()=>t.remove(),2500)}function J(e){return String(e??``).replace(/"/g,`&quot;`)}var Y={"/":H,"/screener":Ze,"/map":rt,"/news":it,"/settings":ot},X=`/`;async function Z(){let e=O();try{let[{quotes:t,source:n},r]=await Promise.all([te(e),oe(e)]);Se(t,{fetchedAt:Date.now(),source:n}),Ce(r),ct(n)}catch(e){console.error(`Quote fetch failed:`,e),ct(`error`)}}function ct(e){let t=document.getElementById(`status-dot`),n=document.getElementById(`status-text`),r=document.getElementById(`last-update`),i=document.getElementById(`market-status`),a=Te(),o=we();e===`error`?(t.className=`status-dot`,n.textContent=`Update failed`):e===`finnhub`?(t.className=`status-dot live`,n.textContent=`Live · Finnhub`):(t.className=`status-dot mock`,n.textContent=`Simulated data`),a.lastFetchAt&&(r.textContent=`Updated ${Fe(a.lastFetchAt)}`),i&&o&&(i.textContent=o.label,i.className=`market-status ${o.isOpen?`open`:`closed`}`)}function Q(){let e=document.getElementById(`ticker-bar`),t=k();e.innerHTML=n.map(({symbol:e,label:n})=>{let r=t.get(e);if(!r)return``;let i=I(r.changePct);return`
      <span class="ticker-item" data-symbol="${e}">
        <span class="ticker-label">${n}</span>
        <span class="ticker-price">$${N(r.price)}</span>
        <span class="ticker-chg ${i}">${P(r.changePct)}</span>
      </span>
    `}).join(``),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.style.cursor=`pointer`,e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function lt(){return(location.hash.slice(1)||`/`).split(`?`)[0]||`/`}function $(){X=lt(),Y[X]||(X=`/`),document.querySelectorAll(`.main-nav a`).forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)?.startsWith(`#${X}`))});let e=document.getElementById(`main-content`),t=(Y[X]||H)(e);t?.then?t.then(()=>Q()):Q(),document.getElementById(`nav-toggle`)?.setAttribute(`aria-expanded`,`false`),document.querySelector(`.main-nav`)?.classList.remove(`open`)}function ut(){Y[X]?$():Q()}function dt(){let e=document.getElementById(`nav-toggle`),t=document.querySelector(`.main-nav`);e?.addEventListener(`click`,()=>{let n=t?.classList.toggle(`open`);e.setAttribute(`aria-expanded`,n?`true`:`false`)})}function ft(){Re(),dt(),Ye(),window.addEventListener(`hashchange`,()=>{Ye(),$()}),window.addEventListener(`stockviz:select`,e=>{Ee(e.detail),ze(e.detail)}),window.addEventListener(`stockviz:settings-saved`,()=>{M(),Z().then(()=>j(Z))}),je(ut),Z().then(()=>{$(),j(Z)})}ft();