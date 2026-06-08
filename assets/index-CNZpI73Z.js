(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Technology`,`Healthcare`,`Financial`,`Consumer Cyclical`,`Consumer Defensive`,`Industrials`,`Energy`,`Utilities`,`Real Estate`,`Basic Materials`,`Communication Services`],t=[{symbol:`AAPL`,name:`Apple Inc.`,sector:`Technology`,industry:`Consumer Electronics`,marketCap:32e11},{symbol:`MSFT`,name:`Microsoft Corp.`,sector:`Technology`,industry:`Software`,marketCap:31e11},{symbol:`NVDA`,name:`NVIDIA Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:28e11},{symbol:`GOOGL`,name:`Alphabet Inc.`,sector:`Communication Services`,industry:`Internet Content`,marketCap:21e11},{symbol:`AMZN`,name:`Amazon.com Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:19e11},{symbol:`META`,name:`Meta Platforms`,sector:`Communication Services`,industry:`Social Media`,marketCap:14e11},{symbol:`TSLA`,name:`Tesla Inc.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e11},{symbol:`BRK.B`,name:`Berkshire Hathaway`,sector:`Financial`,industry:`Insurance`,marketCap:9e11},{symbol:`AVGO`,name:`Broadcom Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:75e10},{symbol:`JPM`,name:`JPMorgan Chase`,sector:`Financial`,industry:`Banks`,marketCap:58e10},{symbol:`V`,name:`Visa Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:56e10},{symbol:`UNH`,name:`UnitedHealth Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:52e10},{symbol:`XOM`,name:`Exxon Mobil`,sector:`Energy`,industry:`Oil & Gas`,marketCap:48e10},{symbol:`LLY`,name:`Eli Lilly`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:75e10},{symbol:`MA`,name:`Mastercard Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:45e10},{symbol:`COST`,name:`Costco Wholesale`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:4e11},{symbol:`HD`,name:`Home Depot`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:38e10},{symbol:`PG`,name:`Procter & Gamble`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:37e10},{symbol:`JNJ`,name:`Johnson & Johnson`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:36e10},{symbol:`ABBV`,name:`AbbVie Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:31e10},{symbol:`NFLX`,name:`Netflix Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:29e10},{symbol:`CRM`,name:`Salesforce Inc.`,sector:`Technology`,industry:`Software`,marketCap:28e10},{symbol:`BAC`,name:`Bank of America`,sector:`Financial`,industry:`Banks`,marketCap:31e10},{symbol:`ORCL`,name:`Oracle Corp.`,sector:`Technology`,industry:`Software`,marketCap:38e10},{symbol:`CVX`,name:`Chevron Corp.`,sector:`Energy`,industry:`Oil & Gas`,marketCap:29e10},{symbol:`KO`,name:`Coca-Cola Co.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:27e10},{symbol:`AMD`,name:`Advanced Micro Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:25e10},{symbol:`PEP`,name:`PepsiCo Inc.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:23e10},{symbol:`WMT`,name:`Walmart Inc.`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:52e10},{symbol:`DIS`,name:`Walt Disney Co.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e10},{symbol:`CSCO`,name:`Cisco Systems`,sector:`Technology`,industry:`Communication Equipment`,marketCap:21e10},{symbol:`INTC`,name:`Intel Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:95e9},{symbol:`QCOM`,name:`Qualcomm Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:19e10},{symbol:`IBM`,name:`IBM Corp.`,sector:`Technology`,industry:`IT Services`,marketCap:18e10},{symbol:`GE`,name:`GE Aerospace`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:19e10},{symbol:`CAT`,name:`Caterpillar Inc.`,sector:`Industrials`,industry:`Farm & Construction`,marketCap:175e9},{symbol:`BA`,name:`Boeing Co.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:13e10},{symbol:`UPS`,name:`United Parcel Service`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:11e10},{symbol:`RTX`,name:`RTX Corp.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:16e10},{symbol:`HON`,name:`Honeywell Intl.`,sector:`Industrials`,industry:`Conglomerates`,marketCap:14e10},{symbol:`MRK`,name:`Merck & Co.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:25e10},{symbol:`PFE`,name:`Pfizer Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:15e10},{symbol:`TMO`,name:`Thermo Fisher`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:2e11},{symbol:`ABT`,name:`Abbott Labs`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:21e10},{symbol:`AMGN`,name:`Amgen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:155e9},{symbol:`GILD`,name:`Gilead Sciences`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:105e9},{symbol:`GS`,name:`Goldman Sachs`,sector:`Financial`,industry:`Capital Markets`,marketCap:16e10},{symbol:`MS`,name:`Morgan Stanley`,sector:`Financial`,industry:`Capital Markets`,marketCap:155e9},{symbol:`WFC`,name:`Wells Fargo`,sector:`Financial`,industry:`Banks`,marketCap:21e10},{symbol:`C`,name:`Citigroup Inc.`,sector:`Financial`,industry:`Banks`,marketCap:13e10},{symbol:`BLK`,name:`BlackRock Inc.`,sector:`Financial`,industry:`Asset Management`,marketCap:13e10},{symbol:`AXP`,name:`American Express`,sector:`Financial`,industry:`Credit Services`,marketCap:175e9},{symbol:`NKE`,name:`Nike Inc.`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:115e9},{symbol:`SBUX`,name:`Starbucks Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:95e9},{symbol:`MCD`,name:`McDonald's Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:21e10},{symbol:`LOW`,name:`Lowe's Companies`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:14e10},{symbol:`TGT`,name:`Target Corp.`,sector:`Consumer Cyclical`,industry:`Discount Stores`,marketCap:65e9},{symbol:`F`,name:`Ford Motor Co.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:45e9},{symbol:`GM`,name:`General Motors`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:55e9},{symbol:`PM`,name:`Philip Morris`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:16e10},{symbol:`MO`,name:`Altria Group`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:85e9},{symbol:`CL`,name:`Colgate-Palmolive`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:75e9},{symbol:`COP`,name:`ConocoPhillips`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:13e10},{symbol:`SLB`,name:`Schlumberger`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:65e9},{symbol:`EOG`,name:`EOG Resources`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:75e9},{symbol:`OXY`,name:`Occidental Petroleum`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:5e10},{symbol:`NEE`,name:`NextEra Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:15e10},{symbol:`DUK`,name:`Duke Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:8e10},{symbol:`SO`,name:`Southern Co.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:9e10},{symbol:`D`,name:`Dominion Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:45e9},{symbol:`AMT`,name:`American Tower`,sector:`Real Estate`,industry:`REIT - Specialty`,marketCap:95e9},{symbol:`PLD`,name:`Prologis Inc.`,sector:`Real Estate`,industry:`REIT - Industrial`,marketCap:11e10},{symbol:`EQIX`,name:`Equinix Inc.`,sector:`Real Estate`,industry:`REIT - Data Centers`,marketCap:8e10},{symbol:`LIN`,name:`Linde plc`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:21e10},{symbol:`APD`,name:`Air Products`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:6e10},{symbol:`FCX`,name:`Freeport-McMoRan`,sector:`Basic Materials`,industry:`Copper`,marketCap:55e9},{symbol:`NEM`,name:`Newmont Corp.`,sector:`Basic Materials`,industry:`Gold`,marketCap:5e10},{symbol:`T`,name:`AT&T Inc.`,sector:`Communication Services`,industry:`Telecom`,marketCap:13e10},{symbol:`VZ`,name:`Verizon`,sector:`Communication Services`,industry:`Telecom`,marketCap:17e10},{symbol:`CMCSA`,name:`Comcast Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:16e10},{symbol:`TMUS`,name:`T-Mobile US`,sector:`Communication Services`,industry:`Telecom`,marketCap:23e10},{symbol:`ADBE`,name:`Adobe Inc.`,sector:`Technology`,industry:`Software`,marketCap:23e10},{symbol:`NOW`,name:`ServiceNow`,sector:`Technology`,industry:`Software`,marketCap:18e10},{symbol:`INTU`,name:`Intuit Inc.`,sector:`Technology`,industry:`Software`,marketCap:17e10},{symbol:`TXN`,name:`Texas Instruments`,sector:`Technology`,industry:`Semiconductors`,marketCap:175e9},{symbol:`MU`,name:`Micron Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:11e10},{symbol:`LRCX`,name:`Lam Research`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:1e11},{symbol:`SNPS`,name:`Synopsys Inc.`,sector:`Technology`,industry:`Software`,marketCap:85e9},{symbol:`PANW`,name:`Palo Alto Networks`,sector:`Technology`,industry:`Software`,marketCap:115e9},{symbol:`CRWD`,name:`CrowdStrike`,sector:`Technology`,industry:`Software`,marketCap:8e10},{symbol:`PLTR`,name:`Palantir Technologies`,sector:`Technology`,industry:`Software`,marketCap:7e10},{symbol:`UBER`,name:`Uber Technologies`,sector:`Technology`,industry:`Software`,marketCap:15e10},{symbol:`SQ`,name:`Block Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`SHOP`,name:`Shopify Inc.`,sector:`Technology`,industry:`Software`,marketCap:95e9},{symbol:`PYPL`,name:`PayPal Holdings`,sector:`Financial`,industry:`Credit Services`,marketCap:75e9},{symbol:`COIN`,name:`Coinbase Global`,sector:`Financial`,industry:`Capital Markets`,marketCap:55e9},{symbol:`SPY`,name:`SPDR S&P 500 ETF`,sector:`Financial`,industry:`ETF`,marketCap:5e11},{symbol:`QQQ`,name:`Invesco QQQ Trust`,sector:`Financial`,industry:`ETF`,marketCap:25e10},{symbol:`IWM`,name:`iShares Russell 2000`,sector:`Financial`,industry:`ETF`,marketCap:6e10},{symbol:`DIA`,name:`SPDR Dow Jones ETF`,sector:`Financial`,industry:`ETF`,marketCap:35e9},{symbol:`DE`,name:`Deere & Co.`,sector:`Industrials`,industry:`Farm Equipment`,marketCap:12e10},{symbol:`MMM`,name:`3M Company`,sector:`Industrials`,industry:`Conglomerates`,marketCap:7e10},{symbol:`LMT`,name:`Lockheed Martin`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:115e9},{symbol:`UNP`,name:`Union Pacific`,sector:`Industrials`,industry:`Railroads`,marketCap:145e9},{symbol:`FDX`,name:`FedEx Corp.`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:65e9},{symbol:`ISRG`,name:`Intuitive Surgical`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`VRTX`,name:`Vertex Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:115e9},{symbol:`REGN`,name:`Regeneron Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:95e9},{symbol:`BMY`,name:`Bristol-Myers Squibb`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:95e9},{symbol:`CI`,name:`Cigna Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:95e9},{symbol:`ELV`,name:`Elevance Health`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:11e10},{symbol:`ZTS`,name:`Zoetis Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:8e10},{symbol:`MDLZ`,name:`Mondelez Intl.`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:95e9},{symbol:`KHC`,name:`Kraft Heinz`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:4e10},{symbol:`GIS`,name:`General Mills`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:38e9},{symbol:`KMB`,name:`Kimberly-Clark`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:48e9},{symbol:`MAR`,name:`Marriott Intl.`,sector:`Consumer Cyclical`,industry:`Lodging`,marketCap:75e9},{symbol:`BKNG`,name:`Booking Holdings`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:16e10},{symbol:`ABNB`,name:`Airbnb Inc.`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:85e9},{symbol:`ROST`,name:`Ross Stores`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:45e9},{symbol:`TJX`,name:`TJX Companies`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:12e10},{symbol:`ORLY`,name:`O'Reilly Automotive`,sector:`Consumer Cyclical`,industry:`Auto Parts`,marketCap:6e10},{symbol:`PSX`,name:`Phillips 66`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`MPC`,name:`Marathon Petroleum`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`VLO`,name:`Valero Energy`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:45e9},{symbol:`HAL`,name:`Halliburton Co.`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:25e9},{symbol:`DVN`,name:`Devon Energy`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:25e9},{symbol:`AEP`,name:`American Electric Power`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:5e10},{symbol:`EXC`,name:`Exelon Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`SRE`,name:`Sempra Energy`,sector:`Utilities`,industry:`Utilities - Diversified`,marketCap:5e10},{symbol:`SPG`,name:`Simon Property Group`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:55e9},{symbol:`O`,name:`Realty Income`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:48e9},{symbol:`WELL`,name:`Welltower Inc.`,sector:`Real Estate`,industry:`REIT - Healthcare`,marketCap:65e9},{symbol:`DOW`,name:`Dow Inc.`,sector:`Basic Materials`,industry:`Chemicals`,marketCap:38e9},{symbol:`DD`,name:`DuPont de Nemours`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:35e9},{symbol:`NUE`,name:`Nucor Corp.`,sector:`Basic Materials`,industry:`Steel`,marketCap:35e9},{symbol:`STLD`,name:`Steel Dynamics`,sector:`Basic Materials`,industry:`Steel`,marketCap:2e10},{symbol:`EA`,name:`Electronic Arts`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:38e9},{symbol:`TTWO`,name:`Take-Two Interactive`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`ROKU`,name:`Roku Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:1e10},{symbol:`SNAP`,name:`Snap Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:18e9},{symbol:`PINS`,name:`Pinterest Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:22e9},{symbol:`SPOT`,name:`Spotify Technology`,sector:`Communication Services`,industry:`Internet Content`,marketCap:75e9},{symbol:`WDAY`,name:`Workday Inc.`,sector:`Technology`,industry:`Software`,marketCap:65e9},{symbol:`TEAM`,name:`Atlassian Corp.`,sector:`Technology`,industry:`Software`,marketCap:55e9},{symbol:`DDOG`,name:`Datadog Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`NET`,name:`Cloudflare Inc.`,sector:`Technology`,industry:`Software`,marketCap:35e9},{symbol:`SNOW`,name:`Snowflake Inc.`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`MDB`,name:`MongoDB Inc.`,sector:`Technology`,industry:`Software`,marketCap:25e9},{symbol:`ZS`,name:`Zscaler Inc.`,sector:`Technology`,industry:`Software`,marketCap:3e10},{symbol:`FTNT`,name:`Fortinet Inc.`,sector:`Technology`,industry:`Software`,marketCap:75e9},{symbol:`KLAC`,name:`KLA Corp.`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:9e10},{symbol:`AMAT`,name:`Applied Materials`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:16e10},{symbol:`ADI`,name:`Analog Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:1e11},{symbol:`MRVL`,name:`Marvell Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:7e10},{symbol:`ON`,name:`ON Semiconductor`,sector:`Technology`,industry:`Semiconductors`,marketCap:3e10},{symbol:`SMCI`,name:`Super Micro Computer`,sector:`Technology`,industry:`Computer Hardware`,marketCap:3e10},{symbol:`DELL`,name:`Dell Technologies`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e10},{symbol:`HPE`,name:`Hewlett Packard Enterprise`,sector:`Technology`,industry:`Computer Hardware`,marketCap:22e9},{symbol:`SCHW`,name:`Charles Schwab`,sector:`Financial`,industry:`Capital Markets`,marketCap:13e10},{symbol:`USB`,name:`U.S. Bancorp`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`PNC`,name:`PNC Financial`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`TFC`,name:`Truist Financial`,sector:`Financial`,industry:`Banks`,marketCap:55e9},{symbol:`ICE`,name:`Intercontinental Exchange`,sector:`Financial`,industry:`Financial Data`,marketCap:9e10},{symbol:`CME`,name:`CME Group`,sector:`Financial`,industry:`Financial Data`,marketCap:95e9},{symbol:`SPGI`,name:`S&P Global`,sector:`Financial`,industry:`Financial Data`,marketCap:15e10},{symbol:`MCO`,name:`Moody's Corp.`,sector:`Financial`,industry:`Financial Data`,marketCap:85e9},{symbol:`HOOD`,name:`Robinhood Markets`,sector:`Financial`,industry:`Capital Markets`,marketCap:2e10},{symbol:`SOFI`,name:`SoFi Technologies`,sector:`Financial`,industry:`Credit Services`,marketCap:12e9},{symbol:`RIVN`,name:`Rivian Automotive`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:12e9},{symbol:`LCID`,name:`Lucid Group`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e9},{symbol:`ARM`,name:`Arm Holdings`,sector:`Technology`,industry:`Semiconductors`,marketCap:14e10},{symbol:`MSTR`,name:`MicroStrategy`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`DKNG`,name:`DraftKings`,sector:`Consumer Cyclical`,industry:`Gambling`,marketCap:2e10},{symbol:`ETN`,name:`Eaton Corp.`,sector:`Industrials`,industry:`Electrical Equipment`,marketCap:12e10},{symbol:`EMR`,name:`Emerson Electric`,sector:`Industrials`,industry:`Electrical Equipment`,marketCap:7e10},{symbol:`ITW`,name:`Illinois Tool Works`,sector:`Industrials`,industry:`Industrial Products`,marketCap:75e9},{symbol:`CSX`,name:`CSX Corp.`,sector:`Industrials`,industry:`Railroads`,marketCap:7e10},{symbol:`NSC`,name:`Norfolk Southern`,sector:`Industrials`,industry:`Railroads`,marketCap:55e9},{symbol:`WM`,name:`Waste Management`,sector:`Industrials`,industry:`Waste Services`,marketCap:85e9},{symbol:`RSG`,name:`Republic Services`,sector:`Industrials`,industry:`Waste Services`,marketCap:6e10},{symbol:`AIG`,name:`American Intl. Group`,sector:`Financial`,industry:`Insurance`,marketCap:45e9},{symbol:`MET`,name:`MetLife Inc.`,sector:`Financial`,industry:`Insurance`,marketCap:5e10},{symbol:`PRU`,name:`Prudential Financial`,sector:`Financial`,industry:`Insurance`,marketCap:4e10},{symbol:`ALL`,name:`Allstate Corp.`,sector:`Financial`,industry:`Insurance`,marketCap:45e9},{symbol:`TRV`,name:`Travelers Companies`,sector:`Financial`,industry:`Insurance`,marketCap:5e10},{symbol:`AFL`,name:`Aflac Inc.`,sector:`Financial`,industry:`Insurance`,marketCap:55e9},{symbol:`CB`,name:`Chubb Limited`,sector:`Financial`,industry:`Insurance`,marketCap:11e10},{symbol:`PGR`,name:`Progressive Corp.`,sector:`Financial`,industry:`Insurance`,marketCap:14e10},{symbol:`VST`,name:`Vistra Corp.`,sector:`Utilities`,industry:`Utilities - Independent`,marketCap:4e10},{symbol:`CEG`,name:`Constellation Energy`,sector:`Utilities`,industry:`Utilities - Independent`,marketCap:75e9},{symbol:`PCG`,name:`PG&E Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:3e10},{symbol:`ED`,name:`Consolidated Edison`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:35e9},{symbol:`XEL`,name:`Xcel Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`WEC`,name:`WEC Energy Group`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:3e10},{symbol:`EIX`,name:`Edison Intl.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:2e10},{symbol:`AWK`,name:`American Water Works`,sector:`Utilities`,industry:`Utilities - Water`,marketCap:28e9},{symbol:`CTVA`,name:`Corteva Inc.`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:42e9},{symbol:`CF`,name:`CF Industries`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:14e9},{symbol:`MOS`,name:`Mosaic Co.`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:1e10},{symbol:`ALB`,name:`Albemarle Corp.`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:12e9},{symbol:`VMC`,name:`Vulcan Materials`,sector:`Basic Materials`,industry:`Building Materials`,marketCap:35e9},{symbol:`MLM`,name:`Martin Marietta`,sector:`Basic Materials`,industry:`Building Materials`,marketCap:35e9},{symbol:`IFF`,name:`Intl. Flavors & Fragrances`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:22e9},{symbol:`LULU`,name:`Lululemon Athletica`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:35e9},{symbol:`DECK`,name:`Deckers Outdoor`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:22e9},{symbol:`ULTA`,name:`Ulta Beauty`,sector:`Consumer Cyclical`,industry:`Specialty Retail`,marketCap:2e10},{symbol:`EBAY`,name:`eBay Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:28e9},{symbol:`ETSY`,name:`Etsy Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:8e9},{symbol:`CHWY`,name:`Chewy Inc.`,sector:`Consumer Cyclical`,industry:`Specialty Retail`,marketCap:12e9},{symbol:`DG`,name:`Dollar General`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:25e9},{symbol:`DLTR`,name:`Dollar Tree`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:18e9},{symbol:`SYY`,name:`Sysco Corp.`,sector:`Consumer Defensive`,industry:`Food Distribution`,marketCap:38e9},{symbol:`KR`,name:`Kroger Co.`,sector:`Consumer Defensive`,industry:`Grocery Stores`,marketCap:42e9},{symbol:`HSY`,name:`Hershey Co.`,sector:`Consumer Defensive`,industry:`Confectioners`,marketCap:35e9},{symbol:`KDP`,name:`Keurig Dr Pepper`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:48e9},{symbol:`MNST`,name:`Monster Beverage`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:55e9},{symbol:`BIIB`,name:`Biogen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:25e9},{symbol:`MRNA`,name:`Moderna Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:15e9},{symbol:`ILMN`,name:`Illumina Inc.`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:18e9},{symbol:`DXCM`,name:`DexCom Inc.`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:3e10},{symbol:`BSX`,name:`Boston Scientific`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:1e11},{symbol:`MDT`,name:`Medtronic plc`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:105e9},{symbol:`SYK`,name:`Stryker Corp.`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`EW`,name:`Edwards Lifesciences`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:48e9},{symbol:`HCA`,name:`HCA Healthcare`,sector:`Healthcare`,industry:`Medical Care`,marketCap:8e10},{symbol:`VEEV`,name:`Veeva Systems`,sector:`Healthcare`,industry:`Health Info Services`,marketCap:35e9},{symbol:`IDXX`,name:`IDEXX Laboratories`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:42e9},{symbol:`WBD`,name:`Warner Bros. Discovery`,sector:`Communication Services`,industry:`Entertainment`,marketCap:25e9},{symbol:`PARA`,name:`Paramount Global`,sector:`Communication Services`,industry:`Entertainment`,marketCap:8e9},{symbol:`FOX`,name:`Fox Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e9},{symbol:`NWSA`,name:`News Corp.`,sector:`Communication Services`,industry:`Publishing`,marketCap:15e9},{symbol:`LYV`,name:`Live Nation`,sector:`Communication Services`,industry:`Entertainment`,marketCap:22e9},{symbol:`MTCH`,name:`Match Group`,sector:`Communication Services`,industry:`Internet Content`,marketCap:9e9},{symbol:`RBLX`,name:`Roblox Corp.`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`TTD`,name:`Trade Desk`,sector:`Technology`,industry:`Software`,marketCap:45e9},{symbol:`HUBS`,name:`HubSpot Inc.`,sector:`Technology`,industry:`Software`,marketCap:32e9},{symbol:`OKTA`,name:`Okta Inc.`,sector:`Technology`,industry:`Software`,marketCap:15e9},{symbol:`DOCU`,name:`DocuSign Inc.`,sector:`Technology`,industry:`Software`,marketCap:12e9},{symbol:`ZM`,name:`Zoom Video`,sector:`Technology`,industry:`Software`,marketCap:22e9},{symbol:`PATH`,name:`UiPath Inc.`,sector:`Technology`,industry:`Software`,marketCap:8e9},{symbol:`AI`,name:`C3.ai Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e9},{symbol:`IONQ`,name:`IonQ Inc.`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e9},{symbol:`ASTS`,name:`AST SpaceMobile`,sector:`Technology`,industry:`Communication Equipment`,marketCap:5e9}],n=`https://financialmodelingprep.com/stable`,r=40,i=250;function a(e,t,r={}){let i=new URL(`${n}${e}`);i.searchParams.set(`apikey`,t);for(let[e,t]of Object.entries(r))t!=null&&t!==``&&i.searchParams.set(e,t);return i.toString()}var o=2e4;async function s(e,t,n={}){let r=new AbortController,i=setTimeout(()=>r.abort(),o);try{let i=await fetch(a(e,t,n),{signal:r.signal});if(!i.ok)throw Error(`FMP ${i.status}`);let o=await i.json();if(o?.[`Error Message`])throw Error(o[`Error Message`]);return o}catch(e){throw e.name===`AbortError`?Error(`FMP request timed out`):e}finally{clearTimeout(i)}}function c(e){return new Promise(t=>setTimeout(t,e))}function l(e){return e.replace(`.`,`-`)}function u(e){return e.replace(`-`,`.`)}function d(e){let t=u(e.symbol),n=e.price??0,r=e.previousClose??n,i=e.change??n-r,a=e.changesPercentage??e.changePercentage??(r?i/r*100:0);return{symbol:t,price:n,open:e.open??n,high:e.dayHigh??e.high??n,low:e.dayLow??e.low??n,prevClose:r,change:i,changePct:a,volume:e.volume??0,timestamp:e.timestamp?e.timestamp*1e3:Date.now(),name:e.name,marketCap:e.marketCap}}async function f(e,t,{onChunk:n}={}){let a=new Map;for(let o=0;o<e.length;o+=r){let f=e.slice(o,o+r).map(l);try{let e=await s(`/batch-quote`,t,{symbols:f.join(`,`)}),r=Array.isArray(e)?e:[e];for(let e of r)e?.symbol&&a.set(u(e.symbol),d(e));n&&n(new Map(a))}catch(e){console.warn(`FMP batch quote chunk ${o/r+1} failed:`,e.message),n&&a.size&&n(new Map(a))}o+r<e.length&&await c(i)}return a}async function p(e,t){let n=await s(`/quote`,t,{symbol:l(e)}),r=Array.isArray(n)?n[0]:n;if(!r?.price)throw Error(`No FMP quote`);return d(r)}async function m(e,t){let n=await s(`/profile`,t,{symbol:l(e)});return Array.isArray(n)?n[0]:n}async function h(e,t){let n=await s(`/ratios-ttm`,t,{symbol:l(e)});return Array.isArray(n)?n[0]:n}async function g(e,t){let n=await s(`/key-metrics-ttm`,t,{symbol:l(e)});return Array.isArray(n)?n[0]:n}async function _(e,t){let[n,r,i]=await Promise.all([h(e,t).catch(()=>null),g(e,t).catch(()=>null),m(e,t).catch(()=>null)]);return{ratios:n,metrics:r,profile:i}}async function v(e,t,n=60){let r=await s(`/historical-price-eod/full`,t,{symbol:l(e)});return(Array.isArray(r)?r:r?.historical||[]).slice(0,n).reverse().map(e=>({t:new Date(e.date).getTime(),o:e.open,h:e.high,l:e.low,c:e.close,v:e.volume}))}async function y(e,t=20){let n=await s(`/news/general-latest`,e,{page:0,limit:t});return(Array.isArray(n)?n:[]).map(x)}async function b(e,t,n=8){let r=await s(`/news/stock`,t,{symbols:l(e),limit:n});return(Array.isArray(r)?r:[]).map(x)}function x(e){return{headline:e.title,title:e.title,source:e.site||e.publisher||``,url:e.url||e.image||`#`,datetime:e.publishedDate?Math.floor(new Date(e.publishedDate).getTime()/1e3):void 0,symbol:e.symbol}}async function S(e){let t=await s(`/earnings-calendar`,e,{from:new Date().toISOString().slice(0,10),to:new Date(Date.now()+14*864e5).toISOString().slice(0,10)});return(Array.isArray(t)?t:[]).slice(0,30).map(e=>({symbol:e.symbol,date:C(e.date,e.time),epsEst:e.epsEstimated??e.eps??0,cap:e.marketCap?`Large`:`—`,rawDate:e.date,time:e.time}))}function C(e,t){let n=new Date().toISOString().slice(0,10),r=new Date(Date.now()+864e5).toISOString().slice(0,10),i=e?.slice(0,10),a=i||e;i===n?a=`Today`:i===r&&(a=`Tomorrow`);let o=t===`bmo`?` BMO`:t===`amc`?` AMC`:t?` ${t}`:``;return`${a}${o}`}async function w(e){let t=await s(`/economic-calendar`,e,{from:new Date().toISOString().slice(0,10),to:new Date(Date.now()+7*864e5).toISOString().slice(0,10)});return(Array.isArray(t)?t:[]).slice(0,10).map(e=>({date:e.date?.slice(5,10)||e.date,time:e.time||``,impact:(e.impact||`medium`).toLowerCase(),event:e.event||e.name||`—`,expected:e.estimate??e.forecast??`—`,actual:e.actual??`—`,prior:e.previous??`—`}))}async function T(e,t=20){let n=await s(`/insider-trading/latest`,e,{page:0,limit:t});return(Array.isArray(n)?n:[]).slice(0,t).map(e=>({symbol:e.symbol,insider:e.reportingName||e.name||`—`,relation:e.typeOfOwner||e.ownerType||`—`,date:e.transactionDate?.slice(5)||e.filingDate?.slice(5)||`—`,type:/purchase|buy|acquisition/i.test(e.transactionType||e.acquistionOrDisposition||``)?`Buy`:`Sale`,cost:e.price??0,shares:Math.abs(e.securitiesTransacted??e.shares??0),value:Math.abs((e.securitiesTransacted??0)*(e.price??0))}))}async function ee(e){let t=await s(`/batch-commodity-quotes`,e),n={CL:`Crude Oil`,NG:`Natural Gas`,GC:`Gold`,SI:`Silver`};return(Array.isArray(t)?t:[]).filter(e=>n[e.symbol]||e.name).slice(0,7).map(e=>({name:n[e.symbol]||e.name||e.symbol,symbol:e.symbol,last:e.price??0,change:e.change??0,changePct:e.changesPercentage??e.changePercentage??0}))}async function te(e){let t=await s(`/batch-forex-quotes`,e),n=[`EURUSD`,`USDJPY`,`GBPUSD`,`BTCUSD`];return(Array.isArray(t)?t:[]).filter(e=>n.includes(e.symbol)||n.some(t=>e.symbol?.includes(t))).slice(0,4).map(e=>({pair:ne(e.symbol),symbol:e.symbol,last:e.price??0,change:e.change??0,changePct:e.changesPercentage??e.changePercentage??0}))}function ne(e){return!e||e.length<6?e:`${e.slice(0,3)}/${e.slice(3,6)}`}async function re(e){let t=await s(`/batch-index-quotes`,e),n={"^DJI":`Dow`,"^GSPC":`S&P 500`,"^IXIC":`Nasdaq`,"^RUT":`Russell 2000`,"^VIX":`VIX`};return(Array.isArray(t)?t:[]).filter(e=>n[e.symbol]).map(e=>({name:n[e.symbol],symbol:e.symbol,last:e.price??0,change:e.change??0,changePct:e.changesPercentage??e.changePercentage??0}))}async function ie(e){let t=await s(`/treasury-rates`,e),n=(Array.isArray(t)?t:[])[0];return n?[{name:`5-Year Treasury`,last:n.year5??0,change:0,changePct:0},{name:`10-Year Treasury`,last:n.year10??0,change:0,changePct:0},{name:`30-Year Treasury`,last:n.year30??0,change:0,changePct:0}]:[]}async function ae(e){try{let t=await s(`/exchange-market-hours`,e,{exchange:`NYSE`}),n=Array.isArray(t)?t[0]:t,r=n?.isMarketOpen??n?.stockMarketHours?.isTheStockMarketOpen;return{isOpen:!!r,label:r?`US Market Open`:`US Market Closed`}}catch{let e=new Date().getHours(),t=e>=9&&e<16;return{isOpen:t,label:t?`US Market Open`:`US Market Closed`}}}async function oe(e){if(!e?.trim())return{valid:!1,message:`API key is required`};try{return await p(`AAPL`,e.trim()),{valid:!0,message:`Connected to Financial Modeling Prep`}}catch(e){return{valid:!1,message:e.message||`FMP connection failed`}}}async function se(e,t){let n=await s(`/grades-consensus`,t,{symbol:l(e)});return Array.isArray(n)?n[0]:n}async function ce(e,t){let n=await s(`/price-target-consensus`,t,{symbol:l(e)});return Array.isArray(n)?n[0]:n}async function le(e,t){let n=await s(`/price-target-summary`,t,{symbol:l(e)});return Array.isArray(n)?n[0]:n}async function ue(e,t){let[n,r,i]=await Promise.all([se(e,t).catch(()=>null),ce(e,t).catch(()=>null),le(e,t).catch(()=>null)]);return de(e,n,r,i)}function de(e,t,n,r){return!t&&!n&&!r?null:{symbol:e,consensus:t?.consensus||t?.rating||r?.consensus||`Hold`,target:n?.targetConsensus??n?.targetMedian??n?.lastTarget??r?.lastMonthAvgPriceTarget??r?.allTimeAvgPriceTarget??null,numAnalysts:t?.numberOfAnalysts??n?.numberOfAnalysts??r?.numberOfAnalysts??0,strongBuy:t?.strongBuy??0,buy:t?.buy??0,hold:t?.hold??0,sell:t?.sell??0,strongSell:t?.strongSell??0,revisions:(t?.upgradesLastMonth??0)-(t?.downgradesLastMonth??0),lastUpdate:t?.date||n?.lastUpdated||r?.lastUpdated||`—`}}async function fe(e,t){let n=[];for(let r=0;r<e.length;r+=5){let i=e.slice(r,r+5),a=await Promise.all(i.map(e=>ue(e,t).catch(()=>null)));for(let e of a)e&&n.push(e);r+5<e.length&&await c(300)}return n}async function pe(e,t){let n=await s(`/shares-float`,t,{symbol:l(e)});return Array.isArray(n)?n[0]:n}async function me(e,t){try{let n=await s(`/short-interest`,t,{symbol:l(e)}),r=Array.isArray(n)?n[0]:n;if(r)return{symbol:e,shortPct:r.shortPercentOfFloat??r.shortInterest??0,daysToCover:r.daysToCover??r.shortRatio??0,change:r.change??0}}catch{}let[n,r]=await Promise.all([pe(e,t).catch(()=>null),g(e,t).catch(()=>null)]);if(!n&&!r)return null;let i=n?.shortPercentOfFloat??n?.shortInterest??0;i>0&&i<1&&(i*=100);let a=n?.daysToCover??n?.shortRatio??0;return!i&&!a?null:{symbol:e,shortPct:i,daysToCover:a,change:0}}async function he(e,t){let n=[];for(let r=0;r<e.length;r+=5){let i=e.slice(r,r+5),a=await Promise.all(i.map(e=>me(e,t).catch(()=>null)));for(let e of a)e&&n.push(e);r+5<e.length&&await c(300)}return n}async function ge(e,t){let n=await s(`/options-chain`,t,{symbol:l(e)});return(Array.isArray(n)?n:n?.options||[]).slice(0,30).map(t=>({symbol:e,type:t.type===`call`?`Call`:`Put`,strike:t.strike??0,expiry:t.expirationDate?.slice(5)||t.expiration||`—`,premium:t.last??t.bid??0,contracts:t.volume??t.openInterest??0,notional:(t.volume??0)*(t.last??0)*100,sentiment:t.type===`call`?`bullish`:`bearish`,unusual:(t.volume??0)>1e3}))}async function _e(e,t,n=40){let r=e.slice(0,12),i=[];for(let e of r){let n=(await ge(e,t).catch(()=>[])).filter(e=>e.unusual).sort((e,t)=>t.notional-e.notional).slice(0,4);i.push(...n),await c(200)}return i.sort((e,t)=>t.notional-e.notional).slice(0,n)}async function ve(e,t){let[n,r,i]=await Promise.all([s(`/income-statement`,t,{symbol:l(e),period:`annual`,limit:4}).catch(()=>[]),s(`/balance-sheet-statement`,t,{symbol:l(e),period:`annual`,limit:4}).catch(()=>[]),s(`/cash-flow-statement`,t,{symbol:l(e),period:`annual`,limit:4}).catch(()=>[])]);return{income:(Array.isArray(n)?n:[]).slice(0,4),balance:(Array.isArray(r)?r:[]).slice(0,4),cash:(Array.isArray(i)?i:[]).slice(0,4)}}function ye(e){return{type:e.type||e.formType||e.form||`Filing`,date:e.fillingDate?.slice(0,10)||e.filingDate?.slice(0,10)||e.date?.slice(0,10)||`—`,url:e.finalLink||e.link||e.url||`#`,title:e.description||e.title||`${e.type||e.formType||`SEC`} filing`}}async function be(e,t){let n=l(e),r=new Date().toISOString().slice(0,10),i=[[`/sec-filings-search/symbol`,{symbol:n,from:new Date(Date.now()-365*864e5).toISOString().slice(0,10),to:r,page:0,limit:10}],[`/sec-filings`,{symbol:n,limit:10}]];for(let[e,n]of i)try{let r=await s(e,t,n),i=Array.isArray(r)?r:r?.filings||[];if(i.length)return i.map(ye)}catch{}return[]}async function xe(e){let t=await s(`/sp500-constituent`,e);return(Array.isArray(t)?t:[]).map(e=>({symbol:u(e.symbol),name:e.name||e.companyName||e.symbol,sector:e.sector||e.sectorName||`—`,industry:e.subSector||e.industry||e.subIndustry||`—`,subSector:e.subSector,marketCap:e.marketCap||0,dateAdded:e.dateAdded||e.dateFirstAdded}))}async function Se(e){let t=await s(`/dividends-calendar`,e,{from:new Date().toISOString().slice(0,10),to:new Date(Date.now()+30*864e5).toISOString().slice(0,10)});return(Array.isArray(t)?t:[]).slice(0,50).map(e=>({symbol:e.symbol,date:e.date?.slice(0,10)||e.paymentDate?.slice(0,10)||`—`,exDate:e.exDividendDate?.slice(0,10)||e.date?.slice(0,10)||`—`,amount:e.dividend??e.adjDividend??0,yield:e.yield??null}))}async function Ce(e,t){try{let n=await s(`/aftermarket-quote`,t,{symbol:l(e)}),r=Array.isArray(n)?n[0]:n;return r?.price?{price:r.price,change:r.change??0,changePct:r.changesPercentage??r.changePercentage??0,session:`after-hours`}:null}catch{return null}}async function we(e){let t=await s(`/batch-index-quotes`,e),n={"^GSPC":{symbol:`SPY`,label:`S&P 500`},"^IXIC":{symbol:`QQQ`,label:`NASDAQ`},"^DJI":{symbol:`DIA`,label:`DOW`},"^RUT":{symbol:`IWM`,label:`RUSSELL 2K`}},r=Array.isArray(t)?t:[],i=new Map;for(let e of r){let t=n[e.symbol];t&&i.set(t.symbol,{symbol:t.symbol,label:t.label,price:e.price??0,change:e.change??0,changePct:e.changesPercentage??e.changePercentage??0})}return i}async function Te(e){let[t,n,r,i,a,o,s]=await Promise.all([S(e).catch(()=>null),w(e).catch(()=>null),T(e).catch(()=>null),ee(e).catch(()=>null),te(e).catch(()=>null),re(e).catch(()=>null),ie(e).catch(()=>null)]),c=[...i||[],...o||[]];return{earnings:t||[],economic:n||[],insider:r||[],futures:c.length?c:null,forex:a||[],bonds:s||[]}}var Ee=`stockviz-sp500-universe`,De=10080*60*1e3,Oe={"Information Technology":`Technology`,Technology:`Technology`,"Health Care":`Healthcare`,Healthcare:`Healthcare`,Financials:`Financial`,Financial:`Financial`,"Consumer Discretionary":`Consumer Cyclical`,"Consumer Cyclical":`Consumer Cyclical`,"Consumer Staples":`Consumer Defensive`,"Consumer Defensive":`Consumer Defensive`,Industrials:`Industrials`,Energy:`Energy`,Utilities:`Utilities`,"Real Estate":`Real Estate`,Materials:`Basic Materials`,"Basic Materials":`Basic Materials`,"Communication Services":`Communication Services`,"Telecommunication Services":`Communication Services`},ke=[...t],Ae={source:`bundled`,count:ke.length,label:`Bundled (${ke.length})`};function E(){return ke}function je(){return{...Ae}}function Me(){return new Map(ke.map(e=>[e.symbol,e]))}function Ne(e){return Me().get(e)||t.find(t=>t.symbol===e)}function Pe(e){return e?Oe[e]||e:`—`}function Fe(){try{let e=localStorage.getItem(Ee);if(!e)return null;let{at:t,rows:n}=JSON.parse(e);return Date.now()-t>De?null:n?.length?n:null}catch{return null}}function Ie(e){try{localStorage.setItem(Ee,JSON.stringify({at:Date.now(),rows:e}))}catch{}}function Le(){localStorage.removeItem(Ee)}function Re(e,t){ke=e,Ae={source:t,count:e.length,label:t===`sp500`?`S&P 500 (${e.length})`:`Bundled (${e.length})`}}function ze(e){if(!(!e.useMockData&&e.fmpApiKey?.trim()&&e.fmpApiKey.trim()))return Ae;let t=Fe();return t?.length>=400&&Re(t,`sp500`),Ae}async function Be(e,{force:n=!1}={}){let r=!e.useMockData&&e.fmpApiKey?.trim()?e.fmpApiKey.trim():null;if(!r)return Re([...t],`bundled`),Ae;n&&Le();let i=Fe();if(!n&&i?.length>=400)return Re(i,`sp500`),Ae;try{let e=await xe(r);if(e.length>=400){let t=e.map(e=>({symbol:e.symbol,name:e.name,sector:Pe(e.sector),industry:e.industry||e.subSector||`—`,marketCap:e.marketCap||0}));return Ie(t),Re(t,`sp500`),Ae}}catch(e){console.warn(`S&P 500 universe load failed:`,e)}return Re([...t],`bundled`),Ae}async function Ve(e){return Be(e,{force:!0})}function D(e,t){return e.length<t?null:e.slice(-t).reduce((e,t)=>e+t,0)/t}function He(e,t){if(e.length<t)return null;let n=2/(t+1),r=e.slice(0,t).reduce((e,t)=>e+t,0)/t;for(let i=t;i<e.length;i++)r=e[i]*n+r*(1-n);return r}function Ue(e,t=14){if(e.length<t+1)return 50;let n=0,r=0;for(let i=e.length-t;i<e.length;i++){let t=e[i]-e[i-1];t>=0?n+=t:r-=t}return r===0?100:100-100/(1+n/r)}function We(e){if(e.length<26)return{macd:0,signal:0,hist:0};let t=He(e,12),n=He(e,26),r=(t??0)-(n??0),i=r*.85;return{macd:r,signal:i,hist:r-i}}function Ge(e,t=14){if(e.length<t+1)return 0;let n=[];for(let r=e.length-t;r<e.length;r++){let t=e[r],i=e[r-1];n.push(Math.max(t.h-t.l,Math.abs(t.h-i.c),Math.abs(t.l-i.c)))}return n.reduce((e,t)=>e+t,0)/n.length}function Ke(e,t=20){let n=D(e,t);if(n==null)return{upper:0,mid:0,lower:0};let r=e.slice(-t).reduce((e,t)=>e+(t-n)**2,0)/t,i=Math.sqrt(r);return{upper:n+2*i,mid:n,lower:n-2*i}}function qe(e,t=3){let n=[],r=[];for(let i=t;i<e.length-t;i++){let a=e[i],o=e.slice(i-t,i),s=e.slice(i+1,i+t+1);o.every(e=>a>=e)&&s.every(e=>a>=e)&&n.push({i,v:a}),o.every(e=>a<=e)&&s.every(e=>a<=e)&&r.push({i,v:a})}return{peaks:n,troughs:r}}function Je(e,t){return t?(e-t)/t*100:0}function Ye(e,t=20){if(!e.length)return 0;let n=e.slice(-t).map(e=>e.v||0);return n.reduce((e,t)=>e+t,0)/n.length}function Xe(e){if(!e?.length||e.length<20)return[];let t=e.map(e=>e.c),n=e.map(e=>e.h),r=e.map(e=>e.l),i=t[t.length-1],a=[],{peaks:o,troughs:s}=qe(t,4);if(o.length>=2){let e=o[o.length-2],t=o[o.length-1],n=Math.abs(e.v-t.v)/e.v;n<.03&&t.i-e.i>=5&&a.push({id:`double_top`,label:`Double Top`,bias:`bearish`,confidence:72-n*500})}if(s.length>=2){let e=s[s.length-2],t=s[s.length-1],n=Math.abs(e.v-t.v)/e.v;n<.03&&t.i-e.i>=5&&a.push({id:`double_bottom`,label:`Double Bottom`,bias:`bullish`,confidence:74-n*500})}if(o.length>=3){let[e,t,n]=o.slice(-3);t.v>e.v*1.02&&t.v>n.v*1.02&&Math.abs(e.v-n.v)/e.v<.05&&a.push({id:`head_shoulders`,label:`Head & Shoulders`,bias:`bearish`,confidence:68})}if(s.length>=3){let[e,t,n]=s.slice(-3);t.v<e.v*.98&&t.v<n.v*.98&&Math.abs(e.v-n.v)/e.v<.05&&a.push({id:`inv_head_shoulders`,label:`Inverse H&S`,bias:`bullish`,confidence:70})}let c=t.slice(-20),l=(c[c.length-1]-c[0])/c.length/i*100,u=Ge(e.slice(-20))/i;l>.15&&u<.025?a.push({id:`channel_up`,label:`Channel Up`,bias:`bullish`,confidence:62}):l<-.15&&u<.025&&a.push({id:`channel_down`,label:`Channel Down`,bias:`bearish`,confidence:62}),l>.08&&n.slice(-10).every((e,t,n)=>t===0||e<=n[t-1]*1.01)&&a.push({id:`wedge_down`,label:`Wedge Down`,bias:`bearish`,confidence:58}),l<-.08&&r.slice(-10).every((e,t,n)=>t===0||e>=n[t-1]*.99)&&a.push({id:`wedge_up`,label:`Wedge Up`,bias:`bullish`,confidence:58});let d=Math.max(...n.slice(-30,-15))-Math.min(...r.slice(-30,-15));if(Math.max(...n.slice(-15))-Math.min(...r.slice(-15))<d*.55){let e=l>=0?`bullish`:`bearish`;a.push({id:e===`bullish`?`triangle_asc`:`triangle_desc`,label:e===`bullish`?`Triangle Ascending`:`Triangle Descending`,bias:e,confidence:60})}let f=D(t,50);f&&Math.abs(i-f)/i<.015&&a.push({id:i>f?`horizontal_resistance`:`horizontal_support`,label:i>f?`Horizontal Resistance`:`Horizontal Support`,bias:i>f?`bearish`:`bullish`,confidence:55});let p=D(t,20);return p&&i>p*1.01?a.push({id:`tl_support`,label:`Trendline Support`,bias:`bullish`,confidence:57}):p&&i<p*.99&&a.push({id:`tl_resistance`,label:`Trendline Resistance`,bias:`bearish`,confidence:57}),a.map(e=>({...e,confidence:Math.round(Math.min(95,Math.max(45,e.confidence)))}))}function Ze(e,t){if(!e?.length)return[];let n=e.map(e=>e.c),r=t.price??n[n.length-1],i=[],a=Ue(n),o=D(n,20),s=D(n,50),c=D(n,200),{hist:l}=We(n),u=Ye(e),d=t.volume??e[e.length-1]?.v??0,f=Math.max(...e.map(e=>e.h)),p=Math.min(...e.map(e=>e.l));if(t.changePct>=2&&i.push({id:`top_gainers`,label:`Top Gainers`,type:`momentum`}),t.changePct<=-2&&i.push({id:`top_losers`,label:`Top Losers`,type:`momentum`}),r>=f*.998&&i.push({id:`new_high`,label:`New High`,type:`breakout`}),r<=p*1.002&&i.push({id:`new_low`,label:`New Low`,type:`breakout`}),a>=70&&i.push({id:`overbought`,label:`Overbought`,type:`rsi`}),a<=30&&i.push({id:`oversold`,label:`Oversold`,type:`rsi`}),d>u*2&&i.push({id:`unusual_volume`,label:`Unusual Volume`,type:`volume`}),d>u*1.3&&Math.abs(t.changePct)>3&&i.push({id:`most_active`,label:`Most Active`,type:`volume`}),Math.abs(t.changePct)>5&&i.push({id:`most_volatile`,label:`Most Volatile`,type:`volatility`}),s&&c){let e=D(n.slice(0,-1),50),t=D(n.slice(0,-1),200);e&&t&&e<=t&&s>c&&i.push({id:`golden_cross`,label:`Golden Cross`,type:`trend`}),e&&t&&e>=t&&s<c&&i.push({id:`death_cross`,label:`Death Cross`,type:`trend`}),r>s?i.push({id:`above_sma50`,label:`Above SMA50`,type:`trend`}):i.push({id:`below_sma50`,label:`Below SMA50`,type:`trend`}),r>c?i.push({id:`above_sma200`,label:`Above SMA200`,type:`trend`}):i.push({id:`below_sma200`,label:`Below SMA200`,type:`trend`})}return l>0&&t.changePct>0&&i.push({id:`macd_bullish`,label:`MACD Bullish`,type:`macd`}),l<0&&t.changePct<0&&i.push({id:`macd_bearish`,label:`MACD Bearish`,type:`macd`}),o&&Je(r,o)>5&&i.push({id:`extended`,label:`Extended Above SMA20`,type:`trend`}),o&&Je(r,o)<-5&&i.push({id:`pullback`,label:`Pullback to SMA20`,type:`trend`}),i}function Qe(e,t,n=[]){if(!e?.length)return $e(t);let r=e.map(e=>e.c),i=t.price??r[r.length-1],a=Ue(r),o=D(r,20),s=D(r,50),c=D(r,200),{hist:l,macd:u}=We(r),d=Ge(e),f=Ke(r),p=r.length>=6?(r[r.length-1]-r[r.length-6])/r[r.length-6]*100:t.changePct??0,m=[];a<35?m.push({name:`RSI Oversold`,score:18,weight:`bullish`}):a>65?m.push({name:`RSI Overbought`,score:-18,weight:`bearish`}):m.push({name:`RSI Neutral`,score:(50-a)*.3,weight:`neutral`});let h=0;o&&i>o?h+=8:h-=8,s&&i>s?h+=12:h-=12,c&&i>c?h+=15:h-=10,m.push({name:`Moving Avg Trend`,score:h,weight:h>0?`bullish`:`bearish`}),m.push({name:`MACD Momentum`,score:l*2,weight:l>0?`bullish`:`bearish`}),m.push({name:`5D Momentum`,score:p*1.5,weight:p>0?`bullish`:`bearish`}),f.upper&&i>f.upper?m.push({name:`Above Upper BB`,score:-10,weight:`bearish`}):f.lower&&i<f.lower&&m.push({name:`Below Lower BB`,score:10,weight:`bullish`});for(let e of n){let t=e.bias===`bullish`?e.confidence*.15:-e.confidence*.15;m.push({name:e.label,score:t,weight:e.bias})}let g=m.reduce((e,t)=>e+t.score,0),_=Math.max(-100,Math.min(100,g)),v=`neutral`;_>12?v=`bullish`:_<-12&&(v=`bearish`);let y=Math.round(Math.min(92,Math.max(48,55+Math.abs(_)*.35))),b=_/100*d*4,x=Math.max(.01,i+b),S=(x-i)/i*100,C=Math.abs(_)>25?`5-10 days`:`3-7 days`;return{direction:v,confidence:y,score:Math.round(_),priceTarget:Math.round(x*100)/100,targetPct:Math.round(S*100)/100,horizon:C,factors:m.slice(0,6),rsi:Math.round(a*10)/10,sma20:o,sma50:s,sma200:c,atr:Math.round(d*100)/100,macdHist:Math.round(l*100)/100}}function $e(e){return{direction:(e?.changePct??0)>0?`bullish`:(e?.changePct??0)<0?`bearish`:`neutral`,confidence:52,score:e?.changePct??0,priceTarget:e?.price??0,targetPct:0,horizon:`3-7 days`,factors:[],rsi:50,sma20:null,sma50:null,sma200:null,atr:0,macdHist:0}}function et(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function O(e,t,n,r,i=2){let a=n+et(e+t)()*(r-n),o=10**i;return Math.round(a*o)/o}function tt(e,t){if(!e?.length)return{};let n=e.map(e=>e.c),r=t??n[n.length-1],i=e=>{let t=n[Math.max(0,n.length-1-e)];return t?(r-t)/t*100:null},a=new Date(new Date().getFullYear(),0,1).getTime(),o=e.findIndex(e=>e.t>=a),s=o>=0?(r-e[o].c)/e[o].c*100:i(60);return{perf1D:null,perf5D:i(5),perf1M:i(21),perf3M:i(63),perf6M:i(126),perfYTD:s,perf1Y:i(Math.min(252,n.length-1)),perf5Y:i(Math.min(1260,n.length-1))}}function nt(e,t,n=null){let r=e.symbol,i=e.price||100,a=e.marketCap||i*O(r,`shares`,5e8,15e9,0),o=a/i,s=O(r,`float`,.55,.95,2),c=o*s,l=n?.epsTTM??O(r,`eps`,.5,18,2),u=n?.epsForward??l*O(r,`epsfwd`,1.02,1.25,2),d=n?.peTTM??(l>0?Math.round(i/l*10)/10:O(r,`pe`,8,45,1)),f=u>0?Math.round(i/u*10)/10:d*O(r,`pefwd`,.8,1.1,1),p=n?.epsGrowthTTMYoy??O(r,`epsg`,-5,35,1),m=p>0?Math.round(d/p*100)/100:O(r,`peg`,.8,3.5,2),h=a*O(r,`rev`,.15,.55,2),g=h/o,_=Math.round(a/h*10)/10,v=i*O(r,`pb`,.3,4,2),y=Math.round(i/v*10)/10,b=h*O(r,`ebitda`,.12,.35,2),x=a*O(r,`ev`,1.05,1.35,2),S=Math.round(x/b*10)/10,C=Math.round(x/h*10)/10,w=b*O(r,`fcf`,.5,.85,2),T=Math.round(a/w*10)/10,ee=n?.grossMarginTTM??O(r,`gm`,25,75,1),te=n?.operatingMarginTTM??O(r,`om`,8,35,1),ne=n?.netProfitMarginTTM??O(r,`nm`,5,28,1),re=n?.roeTTM??O(r,`roe`,8,45,1),ie=n?.roaTTM??O(r,`roa`,3,18,1),ae=O(r,`roic`,6,30,1),oe=n?.dividendYield??O(r,`divy`,0,4.5,2),se=oe/100*i,ce=O(r,`payout`,15,65,0),le=Math.floor(O(r,`exdiv`,5,90,0)),ue=n?.beta??O(r,`beta`,.5,2.2,2),de=n?.high52??i*O(r,`hi52`,1.02,1.35,2),fe=n?.low52??i*O(r,`lo52`,.65,.98,2),pe=e.volume?e.volume*O(r,`av10`,.8,1.2,2):O(r,`vol10`,1e6,5e7,0),me=pe*O(r,`av90`,.85,1.15,2),he=O(r,`short`,.5,18,2),ge=O(r,`shortr`,.5,8,1),_e=O(r,`ins`,.1,25,1),ve=O(r,`inst`,45,92,1),ye=i*O(r,`target`,.9,1.35,2),be=tt(t,i);be.perf1D=e.changePct??be.perf1D;let xe=O(r,`revg`,-2,25,1),Se=O(r,`de`,.2,2.5,2),Ce=O(r,`cr`,.8,3.5,2),we=Ce*O(r,`qr`,.6,.95,2),Te=Math.floor(O(r,`emp`,5e3,25e4,0));return{pe:d,peFwd:f,peg:m,ps:_,pb:y,evEbitda:S,evRevenue:C,pcf:T,priceToBook:y,eps:l,epsFwd:u,epsGrowth:p,revenue:h,revenuePerShare:g,revenueGrowth:xe,grossMargin:ee,opMargin:te,netMargin:ne,roe:re,roa:ie,roic:ae,ebitda:b,dividend:se,dividendYield:oe,payoutRatio:ce,exDividendDate:`in ${le}d`,debtEquity:Se,currentRatio:Ce,quickRatio:we,bookValue:v,sharesOutstanding:o,floatShares:c,floatPct:s*100,employees:Te,beta:ue,high52:de,low52:fe,avgVol10:pe,avgVol90:me,distanceFromHigh:(i-de)/de*100,distanceFromLow:(i-fe)/fe*100,shortPct:he,shortRatio:ge,insiderPct:_e,instPct:ve,targetPrice:ye,upside:(ye-i)/i*100,...be,peTTM:d,div:se}}function rt({ratios:e,metrics:t,profile:n}={}){if(!e&&!t)return null;let r=e||{},i=t||{};return{peTTM:r.priceToEarningsRatioTTM??r.peRatioTTM,peFwd:r.priceToEarningsRatioTTM,peg:r.priceToEarningsGrowthRatioTTM??r.pegRatioTTM,ps:r.priceToSalesRatioTTM,pb:r.priceToBookRatioTTM,evEbitda:i.enterpriseValueOverEBITDATTM??r.enterpriseValueMultipleTTM,epsTTM:r.netIncomePerShareTTM??i.netIncomePerShareTTM,epsGrowthTTMYoy:r.revenueGrowthTTM??i.revenuePerShareTTM,dividendYield:r.dividendYieldTTM??r.dividendYielTTM,beta:n?.beta??r.betaTTM,high52:n?.range?.split(`-`)?.[1]?.trim()||null,low52:n?.range?.split(`-`)?.[0]?.trim()||null,grossMarginTTM:r.grossProfitMarginTTM,operatingMarginTTM:r.operatingProfitMarginTTM,netProfitMarginTTM:r.netProfitMarginTTM,roeTTM:r.returnOnEquityTTM,roaTTM:r.returnOnAssetsTTM,sharesOutstanding:n?.sharesOutstanding,floatShares:n?.floatShares}}function it(e){let t=e?.metric;return t?{peTTM:t.peBasicExclExtraTTM??t.peTTM,peFwd:t.peForwardAnnual,peg:t.pegRatio,ps:t.psTTM??t.psAnnual,pb:t.pbAnnual,evEbitda:t.evEbitdaTTM??t.enterpriseValueEbitdaTTM,epsTTM:t.epsBasicExclExtraItemsTTM??t.epsTTM,epsForward:t.epsForwardAnnual,epsGrowthTTMYoy:t.epsGrowthTTMYoy??t.epsGrowthQuarterlyYoy,dividendYield:t.dividendYieldIndicatedAnnual??t.currentDividendYieldTTM,beta:t.beta,high52:t[`52WeekHigh`],low52:t[`52WeekLow`],grossMarginTTM:t.grossMarginTTM,operatingMarginTTM:t.operatingMarginTTM,netProfitMarginTTM:t.netProfitMarginTTM,roeTTM:t.roeTTM,roaTTM:t.roaRfy,revenueGrowth:t.revenueGrowth3Y??t.revenueGrowth5Y,sharesOutstanding:t.sharesOutstanding,floatShares:t.floatShares}:null}var at=[{id:`key`,title:`Key Stats`,fields:[{key:`marketCap`,label:`Market cap`,fmt:`mcap`,fromQuote:!0},{key:`sharesOutstanding`,label:`Shares outstanding`,fmt:`shares`},{key:`floatShares`,label:`Float`,fmt:`shares`},{key:`floatPct`,label:`Float %`,fmt:`pct`},{key:`employees`,label:`Employees`,fmt:`num`},{key:`beta`,label:`Beta`,fmt:`num2`}]},{id:`valuation`,title:`Valuation`,fields:[{key:`pe`,label:`P/E (TTM)`,fmt:`num2`},{key:`peFwd`,label:`Forward P/E`,fmt:`num2`},{key:`peg`,label:`PEG Ratio`,fmt:`num2`},{key:`ps`,label:`Price/Sales`,fmt:`num2`},{key:`pb`,label:`Price/Book`,fmt:`num2`},{key:`evEbitda`,label:`EV/EBITDA`,fmt:`num2`},{key:`evRevenue`,label:`EV/Revenue`,fmt:`num2`},{key:`pcf`,label:`Price/Cash Flow`,fmt:`num2`}]},{id:`financials`,title:`Financials`,fields:[{key:`eps`,label:`EPS (TTM)`,fmt:`money`},{key:`epsFwd`,label:`EPS (Forward)`,fmt:`money`},{key:`epsGrowth`,label:`EPS Growth YoY`,fmt:`pct`},{key:`revenue`,label:`Revenue (TTM)`,fmt:`mcap`},{key:`revenuePerShare`,label:`Revenue/Share`,fmt:`money`},{key:`revenueGrowth`,label:`Revenue Growth`,fmt:`pct`},{key:`ebitda`,label:`EBITDA`,fmt:`mcap`},{key:`grossMargin`,label:`Gross Margin`,fmt:`pct`},{key:`opMargin`,label:`Operating Margin`,fmt:`pct`},{key:`netMargin`,label:`Net Margin`,fmt:`pct`},{key:`roe`,label:`ROE`,fmt:`pct`},{key:`roa`,label:`ROA`,fmt:`pct`},{key:`roic`,label:`ROIC`,fmt:`pct`},{key:`debtEquity`,label:`Debt/Equity`,fmt:`num2`},{key:`currentRatio`,label:`Current Ratio`,fmt:`num2`},{key:`quickRatio`,label:`Quick Ratio`,fmt:`num2`}]},{id:`dividends`,title:`Dividends`,fields:[{key:`dividendYield`,label:`Dividend Yield`,fmt:`pct`},{key:`dividend`,label:`Dividend/Share`,fmt:`money`},{key:`payoutRatio`,label:`Payout Ratio`,fmt:`pct`},{key:`exDividendDate`,label:`Ex-Dividend`,fmt:`text`}]},{id:`performance`,title:`Performance`,fields:[{key:`perf1D`,label:`1 Day`,fmt:`pct`},{key:`perf5D`,label:`5 Days`,fmt:`pct`},{key:`perf1M`,label:`1 Month`,fmt:`pct`},{key:`perf3M`,label:`3 Months`,fmt:`pct`},{key:`perf6M`,label:`6 Months`,fmt:`pct`},{key:`perfYTD`,label:`YTD`,fmt:`pct`},{key:`perf1Y`,label:`1 Year`,fmt:`pct`},{key:`perf5Y`,label:`5 Years`,fmt:`pct`}]},{id:`technicals`,title:`Price & Volume`,fields:[{key:`high52`,label:`52W High`,fmt:`money`},{key:`low52`,label:`52W Low`,fmt:`money`},{key:`distanceFromHigh`,label:`From 52W High`,fmt:`pct`},{key:`distanceFromLow`,label:`From 52W Low`,fmt:`pct`},{key:`avgVol10`,label:`Avg Vol (10D)`,fmt:`vol`},{key:`avgVol90`,label:`Avg Vol (90D)`,fmt:`vol`},{key:`volume`,label:`Volume`,fmt:`vol`,fromQuote:!0},{key:`relVolume`,label:`Rel Volume`,fmt:`mult`,fromTa:!0}]},{id:`ownership`,title:`Ownership & Short`,fields:[{key:`insiderPct`,label:`Insider %`,fmt:`pct`},{key:`instPct`,label:`Institutional %`,fmt:`pct`},{key:`shortPct`,label:`Short % Float`,fmt:`pct`},{key:`shortRatio`,label:`Short Ratio`,fmt:`num2`},{key:`targetPrice`,label:`Analyst Target`,fmt:`money`},{key:`upside`,label:`Upside to Target`,fmt:`pct`}]}];function ot(e,t,n,r){if(e==null||e===``||Number.isNaN(e))return`—`;switch(t){case`money`:return`$${Number(e).toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}`;case`mcap`:return e>=0xe8d4a51000?`$${(e/0xe8d4a51000).toFixed(2)}T`:e>=1e9?`$${(e/1e9).toFixed(2)}B`:e>=1e6?`$${(e/1e6).toFixed(1)}M`:`$${Number(e).toLocaleString()}`;case`shares`:return e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(1)}M`:Number(e).toLocaleString();case`vol`:return e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:Number(e).toLocaleString();case`pct`:{let t=Number(e);return`${t>=0?`+`:``}${t.toFixed(2)}%`}case`mult`:return`${Number(e).toFixed(2)}x`;case`num2`:return Number(e).toFixed(2);case`num`:return Number(e).toLocaleString();case`text`:return String(e);default:return String(e)}}function st(e,t,n,r){return e.fromQuote?e.key===`marketCap`?t.marketCap:e.key===`volume`?t.volume:t[e.key]:e.fromTa?r?.[e.key===`relVolume`?`relVolume`:e.key]:n?.[e.key]}var ct=new Map;function lt(e,t){if(ct.has(e))return ct.get(e);let n=dt(e),r=t.price||100,i=[],a=Date.now();for(let e=59;e>=0;e--){let t=r,o=(n()-.47)*r*.022,s=Math.max(1,t+o),c=Math.max(t,s)*(1+n()*.012),l=Math.min(t,s)*(1-n()*.012),u=Math.floor(5e5+n()*3e7);i.push({t:a-e*864e5,o:t,h:c,l,c:s,v:u}),r=s}return ct.set(e,i),i}function ut(e,t){let n=ct.get(e);if(!n?.length)return lt(e,t);let r=n[n.length-1];return r.c=t.price,r.h=Math.max(r.h,t.high??t.price),r.l=Math.min(r.l,t.low??t.price),t.volume&&(r.v=t.volume),n}function dt(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function k(e,{finnhubMetrics:t=null,fmpMetrics:n=null}={}){let r=ut(e.symbol,e),i=Xe(r),a=Ze(r,e),o=Qe(r,e,i),s=Ye(r),c=nt(e,r,n||t);return{...e,candles:r,patterns:i,signals:a,prediction:o,ta:{rsi:o.rsi,sma20:o.sma20,sma50:o.sma50,sma200:o.sma200,atr:o.atr,relVolume:s?(e.volume||s)/s:1},fundamentals:c,signalLabels:a.map(e=>e.label),patternLabels:i.map(e=>e.label),primarySignal:a[0]?.label||i[0]?.label||`—`}}function ft(e){let t=[...e.values()],n=t.length||1,r=t.filter(e=>e.changePct>0).length,i=t.filter(e=>e.changePct<0).length,a=t.filter(e=>e.ta?.sma50&&e.price>e.ta.sma50).length,o=t.filter(e=>e.ta?.sma200&&e.price>e.ta.sma200).length,s=t.filter(e=>e.signals?.some(e=>e.id===`new_high`)).length,c=t.filter(e=>e.signals?.some(e=>e.id===`new_low`)).length;return{advancing:r,declining:i,advPct:r/n*100,decPct:i/n*100,aboveSma50:a,belowSma50:n-a,aboveSma50Pct:a/n*100,aboveSma200:o,belowSma200:n-o,aboveSma200Pct:o/n*100,newHigh:s,newLow:c,newHighPct:s/(s+c||1)*100}}var pt=300*1e3,mt=null,ht=0;function gt(){return mt&&Date.now()-ht<pt?mt:null}function _t(e){mt=e,ht=Date.now()}function vt(){mt=null,ht=0}var yt=`https://finnhub.io/api/v1`,bt=5,xt=1100;function A(e){return e.useMockData?`mock`:e.fmpApiKey?.trim()?`fmp`:e.apiKey?.trim()?`finnhub`:`mock`}function St(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function Ct(e){return 20+St(e)()*480}var wt=new Map,Tt=new Map,Et=24;function Dt(){if(!wt.size)for(let e of E()){let t=Ct(e.symbol);wt.set(e.symbol,t);let n=St(e.symbol+`hist`),r=[],i=t*.95;for(let e=0;e<Et;e++)i=Math.max(1,i*(1+(n()-.48)*.02)),r.push(i);Tt.set(e.symbol,r)}}function Ot(){Dt();for(let e of E()){let t=wt.get(e.symbol),n=(Math.random()-.48)*t*.008,r=Math.max(1,t+n);wt.set(e.symbol,r);let i=Tt.get(e.symbol)||[];i.push(r),i.length>Et&&i.shift(),Tt.set(e.symbol,i)}}var kt=new Map;function At(e){return kt.get(e)||Tt.get(e)||[]}function jt(e,t){let n=[...kt.get(e)||Tt.get(e)||[],t];return n.length>Et&&n.shift(),kt.set(e,n),n}function Mt(e){Dt();let t=wt.get(e.symbol),n=St(e.symbol+Date.now().toString().slice(0,-4)),r=t*(.98+n()*.04),i=Math.max(t,r)*(1+n()*.02),a=Math.min(t,r)*(1-n()*.02),o=r*(.995+n()*.01),s=t-o,c=s/o*100,l=Math.floor(5e5+n()*5e7);return{symbol:e.symbol,price:t,open:r,high:i,low:a,prevClose:o,change:s,changePct:c,volume:l,marketCap:e.marketCap,sector:e.sector,industry:e.industry,name:e.name,timestamp:Date.now(),sparkline:At(e.symbol)}}function Nt(e,t=60){Dt();let n=wt.get(e)||100,r=St(e+`candles`),i=[],a=Date.now();for(let e=t-1;e>=0;e--){let t=n,o=(r()-.48)*n*.025,s=Math.max(1,t+o),c=Math.max(t,s)*(1+r()*.01),l=Math.min(t,s)*(1-r()*.01);i.push({t:a-e*864e5,o:t,h:c,l,c:s,v:Math.floor(r()*1e7)}),n=s}return i}var Pt=[`Markets rally on strong earnings outlook`,`Fed signals cautious approach to rate cuts`,`Tech sector leads broad market gains`,`Energy stocks slip as oil prices retreat`,`Analysts upgrade outlook for semiconductor stocks`,`Consumer spending data beats expectations`,`Treasury yields edge higher in morning trade`,`IPO market shows signs of renewed activity`];function Ft(e){let t=St(e+`news`);return Array.from({length:5},(n,r)=>({headline:e?`${e}: ${Pt[Math.floor(t()*Pt.length)]}`:Pt[Math.floor(t()*Pt.length)],source:[`Reuters`,`Bloomberg`,`CNBC`,`MarketWatch`][Math.floor(t()*4)],url:`#`,datetime:Math.floor(Date.now()/1e3)-r*3600-Math.floor(t()*7200),symbol:e||void 0}))}async function It(e,t){let n=`${yt}/quote?symbol=${encodeURIComponent(e)}&token=${t}`,r=await fetch(n);if(!r.ok)throw Error(`Finnhub ${r.status}`);let i=await r.json();if(!i.c)throw Error(`No quote data`);let a=i.c-i.pc,o=i.pc?a/i.pc*100:0;return{symbol:e,price:i.c,open:i.o,high:i.h,low:i.l,prevClose:i.pc,change:a,changePct:o,volume:null,timestamp:(i.t||Date.now()/1e3)*1e3}}async function Lt(e,t){let n=`${yt}/stock/profile2?symbol=${encodeURIComponent(e)}&token=${t}`,r=await fetch(n);return r.ok?r.json():null}function Rt(e){return new Promise(t=>setTimeout(t,e))}function zt(e,t,n){return{...e,name:n?.name||n?.companyName||t?.name||e.name||e.symbol,sector:t?.sector||n?.sector||n?.finnhubIndustry||`—`,industry:t?.industry||n?.industry||n?.finnhubIndustry||`—`,marketCap:n?.marketCapitalization?n.marketCapitalization*1e6:n?.marketCap||e.marketCap||t?.marketCap,volume:e.volume??Math.floor(Math.random()*2e7+1e6),sparkline:At(e.symbol)}}async function Bt(e,{onProgress:t}={}){let n=E(),r=Me(),i=n.map(e=>e.symbol),a=A(e);if(a===`mock`){Ot();let e=new Map;for(let t of n)e.set(t.symbol,k(Mt(t)));return{quotes:e,source:`mock`}}if(a===`fmp`){let a=e.fmpApiKey.trim(),o=new Map,s=e=>{let n=!1;for(let t of i){let i=e.get(t);if(i&&!o.has(t)){let e=zt(i,r.get(t));o.set(t,k({...e,sparkline:jt(t,e.price)})),n=!0}}n&&t&&t(new Map(o),`fmp`)};try{s(await f(i,a,{onChunk:e=>s(e)}))}catch(e){console.warn(`FMP batch quotes failed:`,e)}for(let e of n)o.has(e.symbol)||o.set(e.symbol,k(Mt(e)));return{quotes:o,source:`fmp`}}let o=new Map,s=e.apiKey.trim();for(let e=0;e<i.length;e+=bt){let t=i.slice(e,e+bt),n=await Promise.allSettled(t.map(async e=>{let[t,n]=await Promise.all([It(e,s),Lt(e,s).catch(()=>null)]);return zt(t,r.get(e),n)}));for(let e of n)if(e.status===`fulfilled`){let t=e.value;o.set(t.symbol,k({...t,sparkline:jt(t.symbol,t.price)}))}e+bt<i.length&&await Rt(xt)}for(let e of n)o.has(e.symbol)||o.set(e.symbol,k(Mt(e)));return{quotes:o,source:`finnhub`}}async function Vt(e,t){let n=`${yt}/stock/metric?symbol=${encodeURIComponent(e)}&metric=all&token=${t}`,r=await fetch(n);return r.ok?it(await r.json()):null}async function Ht(e,t){let n=Ne(e),r=A(t);if(r===`mock`)return n?k(Mt(n)):null;if(r===`fmp`)try{let r=t.fmpApiKey.trim(),[i,a]=await Promise.all([p(e,r),_(e,r).catch(()=>null)]),o=a?rt(a):null;return k(zt(i,n,a?.profile),{fmpMetrics:o})}catch{return n?k(Mt(n)):null}try{let r=t.apiKey.trim(),[i,a,o]=await Promise.all([It(e,r),Lt(e,r),Vt(e,r).catch(()=>null)]);return k(zt(i,n,a),{finnhubMetrics:o})}catch{return n?k(Mt(n)):null}}async function Ut(e,t){let n=A(t);if(n===`mock`)return null;if(n===`fmp`)try{return rt(await _(e,t.fmpApiKey.trim()))}catch{return null}try{return await Vt(e,t.apiKey.trim())}catch{return null}}async function Wt(e,t,n=`D`,r=60){let i=A(t);if(i===`mock`)return Nt(e,r);if(i===`fmp`){try{let n=await v(e,t.fmpApiKey.trim(),r);if(n?.length)return n}catch{}return Nt(e,r)}try{let i=Math.floor(Date.now()/1e3),a=i-r*86400,o=`${yt}/stock/candle?symbol=${encodeURIComponent(e)}&resolution=${n}&from=${a}&to=${i}&token=${t.apiKey.trim()}`,s=await fetch(o);if(!s.ok)throw Error(`candle fetch failed`);let c=await s.json();return c.s!==`ok`||!c.t?.length?Nt(e,r):c.t.map((e,t)=>({t:e*1e3,o:c.o[t],h:c.h[t],l:c.l[t],c:c.c[t],v:c.v[t]}))}catch{return Nt(e,r)}}async function Gt(e,t){let n=A(t);if(n===`mock`)return Ft(e);if(n===`fmp`)try{return await b(e,t.fmpApiKey.trim())}catch{return Ft(e)}try{let n=new Date().toISOString().slice(0,10),r=new Date(Date.now()-7*864e5).toISOString().slice(0,10),i=`${yt}/company-news?symbol=${encodeURIComponent(e)}&from=${r}&to=${n}&token=${t.apiKey.trim()}`,a=await fetch(i);if(!a.ok)throw Error(`news failed`);return(await a.json()||[]).slice(0,8)}catch{return Ft(e)}}async function Kt(e){let t=A(e);if(t===`mock`)return Ft(null);if(t===`fmp`)try{return await y(e.fmpApiKey.trim())}catch{return Ft(null)}try{let t=`${yt}/news?category=general&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`news failed`);return(await n.json()||[]).slice(0,20)}catch{return Ft(null)}}async function qt(e){let t=A(e);if(t===`mock`){let e=new Date().getHours(),t=e>=9&&e<16;return{isOpen:t,label:t?`Market Open (simulated)`:`Market Closed (simulated)`}}if(t===`fmp`)return ae(e.fmpApiKey.trim());try{let t=`${yt}/stock/market-status?exchange=US&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`status failed`);let r=await n.json();return{isOpen:!!r.isOpen,label:r.isOpen?`US Market Open`:`US Market Closed`,session:r.session}}catch{return{isOpen:!1,label:`Market status unavailable`}}}async function Jt(e){if(A(e)!==`fmp`)return null;let t=gt();if(t)return t;try{let t=await Te(e.fmpApiKey.trim());return _t(t),t}catch{return null}}async function Yt(e){if(!e?.trim())return{valid:!1,message:`API key is required`};try{return await It(`AAPL`,e.trim())?{valid:!0,message:`Connected to Finnhub`}:{valid:!1,message:`Invalid response`}}catch(e){return{valid:!1,message:e.message||`Connection failed`}}}var Xt={apiKey:``,fmpApiKey:``,refreshInterval:30,useMockData:!0,watchlist:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`],theme:`dark`,chartTheme:`dark`,pushNotifications:!1,alertSound:!0,alertWebhookUrl:``},Zt={sector:``,industry:``,minChange:``,maxChange:``,minVolume:``,minMarketCap:``,search:``,signal:``,pattern:``,prediction:``,minRsi:``,maxRsi:``,minPe:``,maxPe:``,minPeg:``,maxPeg:``,minDivYield:``,aboveSma50:``,aboveSma200:``,formula:``},j=un(),Qt={...Zt},M=dn(),N=fn(),P=gn(),F=hn(),I=[],L=pn(),$t=mn(),en=`all`,tn=new Map,nn={key:`changePct`,dir:`desc`},rn=null,an=null,on=`mock`,sn=null,cn=new Set,ln=null;function un(){try{let e=localStorage.getItem(`stockviz-settings`);if(e)return{...Xt,...JSON.parse(e)}}catch{}return{...Xt}}function dn(){try{let e=localStorage.getItem(`stockviz-saved-filters`);if(e)return JSON.parse(e)}catch{}return[]}function fn(){try{let e=localStorage.getItem(`stockviz-favorites`);if(e)return JSON.parse(e)}catch{}return[`AAPL`,`NVDA`,`MSFT`]}function pn(){try{let e=localStorage.getItem(`stockviz-alerts`);if(e)return JSON.parse(e)}catch{}return[]}function mn(){try{let e=localStorage.getItem(`stockviz-multichart`);if(e)return JSON.parse(e)}catch{}return{id:`2x2`,symbols:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`]}}function hn(){try{let e=localStorage.getItem(`stockviz-paper-trades`);if(e)return JSON.parse(e)}catch{}return[]}function gn(){try{let e=localStorage.getItem(`stockviz-portfolio`);if(e)return JSON.parse(e)}catch{}return[{symbol:`AAPL`,shares:10,costBasis:175},{symbol:`NVDA`,shares:5,costBasis:450},{symbol:`MSFT`,shares:8,costBasis:380}]}function R(e,t){localStorage.setItem(e,JSON.stringify(t))}function _n(){R(`stockviz-settings`,j),vn(j.theme),V(`settings`)}function vn(e){document.documentElement.setAttribute(`data-theme`,e||`dark`)}function z(){return{...j}}function yn(e){if(j={...j,...e},e.useMockData===void 0&&(e.apiKey!==void 0||e.fmpApiKey!==void 0)){let e=j.fmpApiKey?.trim()||j.apiKey?.trim();j.useMockData=!e}_n()}function bn(){j.theme=j.theme===`dark`?`light`:`dark`,_n()}function xn(){return{...Qt}}function Sn(e,{preset:t=null}={}){Qt={...Qt,...e},t!==null&&(en=t),V(`filters`)}function Cn(e,t){Qt={...Zt,...t},en=e,V(`filters`)}function wn(){return en}function Tn(){return{...nn}}function En(e){nn.key===e?nn.dir=nn.dir===`asc`?`desc`:`asc`:nn={key:e,dir:`desc`},V(`sort`)}function B(){return tn}function Dn(e,t={}){tn=e,an=t.fetchedAt??Date.now(),on=t.source??on,V(`quotes`)}function On(e){sn=e,V(`status`)}function kn(){return sn}function An(){return{lastFetchAt:an,dataSource:on,selectedSymbol:rn}}function jn(e){rn=e,V(`select`)}function Mn(){return[...N]}function Nn(e){return N=N.includes(e)?N.filter(t=>t!==e):[...N,e],R(`stockviz-favorites`,N),V(`favorites`),N.includes(e)}function Pn(e){return N.includes(e)}function Fn(){return[...P]}function In({symbol:e,shares:t,costBasis:n}){let r=P.find(t=>t.symbol===e);r?(r.shares+=Number(t),r.costBasis=(r.costBasis+Number(n))/2):P=[...P,{symbol:e,shares:Number(t),costBasis:Number(n)}],R(`stockviz-portfolio`,P),V(`portfolio`)}function Ln(e){P=P.filter(t=>t.symbol!==e),R(`stockviz-portfolio`,P),V(`portfolio`)}function Rn(){return[...F]}function zn({symbol:e,side:t,shares:n,entryPrice:r}){let i={id:Date.now().toString(),symbol:e.toUpperCase(),side:t,shares:Number(n),entryPrice:Number(r),openedAt:Date.now(),closedAt:null,realizedPnl:null};return F=[...F,i],R(`stockviz-paper-trades`,F),V(`paper`),i}function Bn(e,t){F=F.map(n=>{if(n.id!==e||n.closedAt)return n;let r=n.side===`long`?(t-n.entryPrice)*n.shares:(n.entryPrice-t)*n.shares;return{...n,closedAt:Date.now(),exitPrice:t,realizedPnl:r}}),R(`stockviz-paper-trades`,F),V(`paper`)}function Vn(e){F=F.filter(t=>t.id!==e),R(`stockviz-paper-trades`,F),V(`paper`)}function Hn(){return[...I]}function Un(e){return I.includes(e)?I=I.filter(t=>t!==e):I.length<4&&(I=[...I,e]),V(`compare`),I.includes(e)}function Wn(){I=[],V(`compare`)}function Gn(){return[...L]}function Kn(){return L.filter(e=>e.active&&!e.triggered).length}function qn(){return L.filter(e=>e.triggered).length}function Jn({symbol:e,type:t,value:n,note:r=``}){let i={id:Date.now().toString(),symbol:e,type:t,value:String(n),note:r,active:!0,triggered:!1,triggeredAt:null,triggerDetail:null,createdAt:Date.now()};return L=[...L,i],R(`stockviz-alerts`,L),V(`alerts`),i}function Yn(e){L=L.filter(t=>t.id!==e),R(`stockviz-alerts`,L),V(`alerts`)}function Xn(e){L=L.map(t=>t.id===e?{...t,active:!t.active}:t),R(`stockviz-alerts`,L),V(`alerts`)}function Zn(e,t){L=L.map(n=>n.id===e?{...n,triggered:!0,triggeredAt:Date.now(),triggerDetail:t}:n),R(`stockviz-alerts`,L),V(`alerts`)}function Qn(){L=L.filter(e=>!e.triggered),R(`stockviz-alerts`,L),V(`alerts`)}function $n(e){L=L.map(t=>t.id===e?{...t,triggered:!1,triggeredAt:null,triggerDetail:null,active:!0}:t),R(`stockviz-alerts`,L),V(`alerts`)}function er(){L=L.map(e=>e.triggered?{...e,triggered:!1,triggeredAt:null,triggerDetail:null,active:!0}:e),R(`stockviz-alerts`,L),V(`alerts`)}function tr(){return{...$t}}function nr(e){$t={...e},R(`stockviz-multichart`,$t),V(`multichart`)}function rr(){return[...M]}function ir(e){let t={id:Date.now().toString(),name:e,filters:{...Qt}};return M=[...M,t],R(`stockviz-saved-filters`,M),V(`filters`),t}function ar(e){M=M.filter(t=>t.id!==e),R(`stockviz-saved-filters`,M),V(`filters`)}function or(e){let t=M.find(t=>t.id===e);t&&(Qt={...Zt,...t.filters},en=`custom`,V(`filters`))}function sr(e){return cn.add(e),()=>cn.delete(e)}function V(e=`full`){cn.forEach(t=>t(e))}function cr(e){lr();let t=async()=>{await e()};t(),ln=setInterval(t,j.refreshInterval*1e3)}function lr(){ln&&=(clearInterval(ln),null)}function ur(){Qt={...Zt},en=`all`,V(`filters`)}vn(j.theme);function dr(e){let t=Gn().filter(e=>e.active&&!e.triggered),n=[];for(let r of t){let t=e.get(r.symbol);if(!t)continue;let i=!1,a=``;switch(r.type){case`price_above`:i=t.price>=Number(r.value),a=`$${t.price.toFixed(2)} ≥ $${r.value}`;break;case`price_below`:i=t.price<=Number(r.value),a=`$${t.price.toFixed(2)} ≤ $${r.value}`;break;case`change_above`:i=t.changePct>=Number(r.value),a=`${t.changePct.toFixed(2)}% ≥ ${r.value}%`;break;case`change_below`:i=t.changePct<=Number(r.value),a=`${t.changePct.toFixed(2)}% ≤ ${r.value}%`;break;case`rsi_above`:i=(t.ta?.rsi??0)>=Number(r.value),a=`RSI ${t.ta?.rsi?.toFixed(1)} ≥ ${r.value}`;break;case`rsi_below`:i=(t.ta?.rsi??100)<=Number(r.value),a=`RSI ${t.ta?.rsi?.toFixed(1)} ≤ ${r.value}`;break;case`signal`:i=t.signals?.some(e=>e.id===r.value),a=`Signal: ${r.value}`;break;case`pattern`:i=t.patterns?.some(e=>e.id===r.value),a=`Pattern: ${r.value}`;break;case`prediction`:i=t.prediction?.direction===r.value,a=`Prediction: ${t.prediction?.direction} (${t.prediction?.confidence}%)`;break;default:break}i&&(Zn(r.id,a),n.push({...r,detail:a}))}return n}var fr=[{id:`price_above`,label:`Price Above`,needsValue:!0,placeholder:`200.00`},{id:`price_below`,label:`Price Below`,needsValue:!0,placeholder:`150.00`},{id:`change_above`,label:`Change % Above`,needsValue:!0,placeholder:`5`},{id:`change_below`,label:`Change % Below`,needsValue:!0,placeholder:`-5`},{id:`rsi_above`,label:`RSI Above`,needsValue:!0,placeholder:`70`},{id:`rsi_below`,label:`RSI Below`,needsValue:!0,placeholder:`30`},{id:`signal`,label:`Signal Detected`,needsValue:!0,valueType:`signal`},{id:`pattern`,label:`Pattern Detected`,needsValue:!0,valueType:`pattern`},{id:`prediction`,label:`Prediction Direction`,needsValue:!0,valueType:`prediction`}],pr;function mr(){pr=document.getElementById(`toast-root`)}function H(e,t=`info`,n=2800){if(!pr)return;let r=document.createElement(`div`);r.className=`toast toast-${t}`,r.textContent=e,pr.appendChild(r),requestAnimationFrame(()=>r.classList.add(`show`)),setTimeout(()=>{r.classList.remove(`show`),setTimeout(()=>r.remove(),300)},n)}function U(e,t=2){return e==null||Number.isNaN(e)?`—`:e.toLocaleString(`en-US`,{minimumFractionDigits:t,maximumFractionDigits:t})}function hr(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}`}function W(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}%`}function gr(e){return e==null?`—`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toLocaleString()}function _r(e){return e==null?`—`:e>=0xe8d4a51000?`${(e/0xe8d4a51000).toFixed(2)}T`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(0)}M`:e.toLocaleString()}function vr(e){return e?new Date(e).toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}):``}function G(e){return e==null?``:e>0?`pos`:e<0?`neg`:`flat`}function yr(e){let t=Math.max(-5,Math.min(5,e));if(t>=0){let e=t/5;return`rgb(${Math.round(20+(1-e)*30)},${Math.round(80+e*120)},${Math.round(40+(1-e)*20)})`}let n=Math.abs(t)/5;return`rgb(${Math.round(120+n*135)},${Math.round(40+(1-n)*30)},${Math.round(40+(1-n)*20)})`}function br(e,t,{width:n=72,height:r=24,color:i=null}={}){let a=t.map(e=>typeof e==`number`?e:e.c??e.price??0);if(!a.length)return;let o=window.devicePixelRatio||1;e.width=n*o,e.height=r*o,e.style.width=`${n}px`,e.style.height=`${r}px`;let s=e.getContext(`2d`);s.scale(o,o);let c=Math.min(...a),l=Math.max(...a)-c||1,u=a[a.length-1]>=a[0],d=i||(u?`#3fb950`:`#f85149`);s.clearRect(0,0,n,r),s.beginPath(),a.forEach((e,t)=>{let i=t/(a.length-1||1)*(n-2)+1,o=r-2-(e-c)/l*(r-4);t===0?s.moveTo(i,o):s.lineTo(i,o)}),s.strokeStyle=d,s.lineWidth=1.5,s.lineJoin=`round`,s.stroke();let f=s.createLinearGradient(0,0,0,r);f.addColorStop(0,u?`rgba(63,185,80,0.2)`:`rgba(248,81,73,0.2)`),f.addColorStop(1,`rgba(0,0,0,0)`),s.lineTo(n-1,r),s.lineTo(1,r),s.closePath(),s.fillStyle=f,s.fill()}function xr(e){return`<canvas class="sparkline" data-spark="${e}" width="72" height="24" aria-hidden="true"></canvas>`}function Sr(e,t,{width:n=180,height:r=72}={}){if(!t?.length)return;let i=t.map(e=>{if(typeof e==`number`)return{o:e,h:e,l:e,c:e};let t=e.c??e.price??0,n=e.o??t;return{o:n,h:e.h??Math.max(n,t),l:e.l??Math.min(n,t),c:t}}),a=window.devicePixelRatio||1;e.width=n*a,e.height=r*a,e.style.width=`${n}px`,e.style.height=`${r}px`;let o=e.getContext(`2d`);o.scale(a,a),o.clearRect(0,0,n,r);let s=i.map(e=>e.l),c=i.map(e=>e.h),l=Math.min(...s),u=Math.max(...c)-l||1,d=n-6,f=r-8,p=d/i.length,m=Math.max(1.5,Math.min(5,p*.65)),h=e=>4+f-(e-l)/u*f;i.forEach((e,t)=>{let n=3+t*p+p/2,r=e.c>=e.o?`#3fb950`:`#f85149`,i=h(Math.max(e.o,e.c)),a=h(Math.min(e.o,e.c)),s=Math.max(1,a-i);o.strokeStyle=r,o.fillStyle=r,o.lineWidth=1,o.beginPath(),o.moveTo(n,h(e.h)),o.lineTo(n,h(e.l)),o.stroke(),o.fillRect(n-m/2,i,m,s)})}function Cr(e,t,{width:n=600,height:r=160}={}){if(!t?.length)return;let i=window.devicePixelRatio||1;e.width=n*i,e.height=r*i,e.style.width=`${n}px`,e.style.height=`${r}px`;let a=e.getContext(`2d`);a.scale(i,i),a.clearRect(0,0,n,r);let o=n-8-8,s=r-12-42,c=Math.max(.5,...t.map(e=>Math.abs(e.value))),l=12+s/2,u=o/t.length,d=Math.max(12,Math.min(36,u*.7));a.strokeStyle=`rgba(139,148,158,0.35)`,a.lineWidth=1,a.beginPath(),a.moveTo(8,l),a.lineTo(n-8,l),a.stroke(),t.forEach((e,t)=>{let n=8+t*u+u/2,i=Math.abs(e.value)/c*(s/2-4),o=e.value>=0,f=o?`#3fb950`:`#f85149`,p=o?l-i:l;a.fillStyle=f,a.fillRect(n-d/2,p,d,i||1),a.fillStyle=`#8b949e`,a.font=`9px IBM Plex Sans, sans-serif`,a.textAlign=`center`;let m=e.label.length>10?`${e.label.slice(0,9)}…`:e.label;a.save(),a.translate(n,r-42+10),a.rotate(-.55),a.fillText(m,0,0),a.restore(),a.fillStyle=o?`#3fb950`:`#f85149`,a.font=`500 9px IBM Plex Mono, monospace`,a.textAlign=`center`;let h=`${e.value>=0?`+`:``}${e.value.toFixed(2)}%`;a.fillText(h,n,o?p-3:p+i+10)})}function wr(){let e=B();document.querySelectorAll(`[data-live-symbol]`).forEach(t=>{let n=e.get(t.dataset.liveSymbol);if(!n)return;let r=t.querySelector(`[data-live="price"]`),i=t.querySelector(`[data-live="change"]`),a=t.querySelector(`[data-live="pct"]`);if(r){let e=`$${U(n.price)}`;r.textContent!==e&&(r.textContent=e,Tr(r,n.change>=0?`flash-up`:`flash-down`))}i&&(i.textContent=`${n.change>=0?`+`:``}${n.change?.toFixed(2)??`—`}`,i.className=G(n.change)),a&&(a.textContent=W(n.changePct),a.className=G(n.changePct))}),document.querySelectorAll(`canvas[data-spark]`).forEach(t=>{let n=e.get(t.dataset.spark);if(n?.sparkline?.length){let e=Number(t.getAttribute(`width`))||72,r=Number(t.getAttribute(`height`))||24;br(t,n.sparkline,{width:e,height:r})}}),document.querySelectorAll(`.heat-tile[data-symbol]`).forEach(t=>{let n=e.get(t.dataset.symbol);if(!n)return;let r=n.changePct??0;t.style.background=yr(r);let i=t.querySelector(`.tile-pct`);i&&(i.textContent=`${r>=0?`+`:``}${r.toFixed(1)}%`)})}function Tr(e,t){e.classList.remove(`flash-up`,`flash-down`),e.offsetWidth,e.classList.add(t),setTimeout(()=>e.classList.remove(t),600)}function Er(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}var Dr=[`Call Sweep`,`Put Sweep`,`Block Call`,`Block Put`,`Unusual OI`,`Golden Sweep`],Or=[`bullish`,`bearish`,`neutral`];function kr(e,t=40){return[...e.values()].filter(e=>e.volume>1e6).sort((e,t)=>(t.ta?.relVolume??1)-(e.ta?.relVolume??1)).slice(0,t).map(e=>{let t=Er(e.symbol+`opt`),n=Math.round(e.price*(.9+t()*.2)*2)/2,r=Math.round((.5+t()*8)*100)/100,i=Math.floor(500+t()*15e3),a=Dr[Math.floor(t()*Dr.length)],o=[1,3,7,14,30,45,60][Math.floor(t()*7)],s=a.includes(`Call`)||a.includes(`Golden`)?`bullish`:a.includes(`Put`)?`bearish`:Or[Math.floor(t()*3)],c=i*r*100;return{symbol:e.symbol,type:a,strike:n,expiry:`+${o}d`,premium:r,contracts:i,notional:c,sentiment:s,relVolume:e.ta?.relVolume??1,price:e.price,changePct:e.changePct,unusual:(e.ta?.relVolume??1)>1.3||i>5e3}}).sort((e,t)=>t.notional-e.notional)}var Ar=[`Strong Buy`,`Buy`,`Hold`,`Sell`,`Strong Sell`];function jr(e){return[...e.values()].map(e=>{let t=Er(e.symbol+`analyst`),n=Math.floor(3+t()*18),r=Ar[Math.floor(t()*Ar.length)],i=Math.round(e.price*(.85+t()*.35)*100)/100,a=(i-e.price)/e.price*100,o=Math.floor(t()*5)-2;return{symbol:e.symbol,name:e.name,price:e.price,consensus:r,target:i,upside:a,numAnalysts:n,strongBuy:Math.floor(t()*n*.4),buy:Math.floor(t()*n*.3),hold:Math.floor(t()*n*.4),sell:Math.floor(t()*3),strongSell:Math.floor(t()*2),revisions:o,lastUpdate:`${Math.floor(1+t()*30)}d ago`}}).sort((e,t)=>t.upside-e.upside)}function Mr(e){return[...e.values()].map(e=>{let t=Er(e.symbol+`short`),n=Math.round((.5+t()*25)*100)/100,r=Math.round((.5+t()*12)*10)/10,i=Math.round((t()*6-3)*100)/100,a=Math.min(100,Math.round(n*2+(e.ta?.relVolume??1)*10+Math.abs(e.changePct)*2));return{symbol:e.symbol,name:e.name,price:e.price,changePct:e.changePct,shortPct:n,daysToCover:r,change:i,squeezeScore:a,sector:e.sector}}).sort((e,t)=>t.squeezeScore-e.squeezeScore)}function Nr(e){let t=new Map;for(let n of e.values()){if(!n.sector)continue;t.has(n.sector)||t.set(n.sector,{adv:0,dec:0,vol:0,count:0});let e=t.get(n.sector);e.count++,n.changePct>0?e.adv++:n.changePct<0&&e.dec++,e.vol+=n.volume||0}return[...t.entries()].map(([e,t])=>({sector:e,...t,advPct:t.adv/t.count*100,avgVol:t.vol/t.count})).sort((e,t)=>t.advPct-e.advPct)}var Pr=600*1e3,Fr=new Map;function Ir(e){let t=Fr.get(e);return t&&Date.now()-t.at<Pr?t.data:null}function Lr(e,t){Fr.set(e,{data:t,at:Date.now()})}function Rr(){Fr.clear()}function zr(e){return e.useMockData?null:e.fmpApiKey?.trim()||null}async function Br(e,t){let n=zr(e),r=[...t.values()];if(!n)return jr(t);let i=Ir(`analyst`);if(i)return i;try{let e=await fe(r.slice(0,40).map(e=>e.symbol),n),t=new Map(e.map(e=>[e.symbol,e])),i=r.map(e=>{let n=t.get(e.symbol);if(!n)return jr(new Map([[e.symbol,e]]))[0];let r=n.target?(n.target-e.price)/e.price*100:0;return{symbol:e.symbol,name:e.name,price:e.price,consensus:n.consensus,target:n.target??e.price,upside:r,numAnalysts:n.numAnalysts,strongBuy:n.strongBuy,buy:n.buy,hold:n.hold,sell:n.sell,strongSell:n.strongSell,revisions:n.revisions,lastUpdate:n.lastUpdate,live:!0}}).sort((e,t)=>t.upside-e.upside);return Lr(`analyst`,i),i}catch{return jr(t)}}async function Vr(e,t){let n=zr(e);if(!n)return Mr(t);let r=Ir(`shorts`);if(r)return r;try{let e=await he([...t.values()].slice(0,50).map(e=>e.symbol),n),r=new Map(e.map(e=>[e.symbol,e])),i=[...t.values()].map(e=>{let t=r.get(e.symbol),n=t?.shortPct??0,i=t?.daysToCover??0,a=Math.min(100,Math.round(n*2+(e.ta?.relVolume??1)*10+Math.abs(e.changePct)*2));return{symbol:e.symbol,name:e.name,price:e.price,changePct:e.changePct,shortPct:n,daysToCover:i,change:t?.change??0,squeezeScore:a,sector:e.sector,live:!!t}}).sort((e,t)=>t.squeezeScore-e.squeezeScore);return Lr(`shorts`,i),i}catch{return Mr(t)}}async function Hr(e,t,n=40){let r=zr(e);if(!r)return kr(t,n);let i=Ir(`options`);if(i)return i;try{let e=(await _e([...t.values()].filter(e=>e.volume>5e5).sort((e,t)=>(t.ta?.relVolume??1)-(e.ta?.relVolume??1)).slice(0,20).map(e=>e.symbol),r,n)).map(e=>{let n=t.get(e.symbol);return{...e,type:`${e.type} ${e.strike}`,relVolume:n?.ta?.relVolume??1,price:n?.price??0,changePct:n?.changePct??0,live:!0}});if(e.length)return Lr(`options`,e),e}catch{}return kr(t,n)}async function Ur(e){let t=zr(e);if(!t)return[];let n=Ir(`dividends`);if(n)return n;try{let e=await Se(t);return Lr(`dividends`,e),e}catch{return[]}}async function Wr(e,t){let n=zr(t);if(!n)return null;let r=`fin-${e}`,i=Ir(r);if(i)return i;try{let t=await ve(e,n);return Lr(r,t),t}catch{return null}}async function Gr(e,t){let n=zr(t);if(!n)return[];let r=`sec-${e}`,i=Ir(r);if(i)return i;try{let t=await be(e,n);return Lr(r,t),t}catch{return[]}}async function Kr(e,t){let n=zr(t);return n?Ce(e,n).catch(()=>null):null}async function qr(e){let t=zr(e);if(!t)return null;let n=Ir(`indices`);if(n)return n;try{let e=await we(t);return Lr(`indices`,e),e}catch{return null}}var Jr={height:160,overlays:{sma20:!0,sma50:!1,sma200:!1,bollinger:!1},showVolume:!0,showRsi:!1,theme:`dark`},Yr={dark:{grid:`rgba(48,54,61,0.5)`,label:`#8b949e`,up:`#3fb950`,down:`#f85149`},light:{grid:`rgba(0,0,0,0.08)`,label:`#57606a`,up:`#1a7f37`,down:`#cf222e`}};function Xr(e,t,n={}){let r={...Jr,...n,overlays:{...Jr.overlays,...n.overlays}};if(!t?.length){e.innerHTML=`<p class="chart-empty">No chart data</p>`;return}let i=r.showRsi,a=r.showVolume,o=r.height,s=a?50:0,c=i?60:0,l=o+s+c,u=document.createElement(`canvas`);u.className=`price-chart-canvas`,e.innerHTML=``,e.appendChild(u);let d=window.devicePixelRatio||1,f=e.clientWidth||320;u.width=f*d,u.style.width=`${f}px`,u.style.height=`${l}px`,u.height=l*d;let p=u.getContext(`2d`);p.scale(d,d);let m=t.map(e=>e.c),h=t.map(e=>e.l),g=t.map(e=>e.h),_=Math.min(...h),v=Math.max(...g);if(r.overlays.bollinger){let e=Ke(m);e.upper&&(_=Math.min(_,e.lower),v=Math.max(v,e.upper))}(r.overlays.sma20||r.overlays.sma50||r.overlays.sma200)&&[20,50,200].forEach(e=>{let t=`sma${e}`;if(r.overlays[t]){let t=D(m,e);t&&(_=Math.min(_,t),v=Math.max(v,t))}});let y=(v-_)*.08||1,b=_-y,x=v+y-b,S=f-16,C=o-16,w=S/t.length,T=e=>8+C-(e-b)/x*C,ee=e=>8+e*w+w/2,te=Yr[r.theme]||Yr.dark;if(Zr(p,f,8,8,C,o,te.grid),r.overlays.bollinger){let e=Ke(m);e.upper&&(p.fillStyle=`rgba(88,166,255,0.08)`,p.fillRect(8,T(e.upper),S,T(e.lower)-T(e.upper)),$r(p,t,t=>e.upper,ee,T,`#58a6ff`,.5,1),$r(p,t,t=>e.lower,ee,T,`#58a6ff`,.5,1))}[200,50,20].forEach(e=>{let t=`sma${e}`;r.overlays[t]&&Qr(p,m,e,ee,T,{20:`#d29922`,50:`#a371f7`,200:`#f85149`}[e])});let ne=Math.max(2,w*.6);t.forEach((e,t)=>{let n=ee(t),r=e.c>=e.o?te.up:te.down;p.strokeStyle=r,p.fillStyle=r,p.lineWidth=1,p.beginPath(),p.moveTo(n,T(e.h)),p.lineTo(n,T(e.l)),p.stroke();let i=T(Math.max(e.o,e.c)),a=T(Math.min(e.o,e.c));p.fillRect(n-ne/2,i,ne,Math.max(1,a-i))}),p.fillStyle=te.label,p.font=`10px IBM Plex Mono, monospace`,p.textAlign=`right`,p.fillText(v.toFixed(2),f-2,18),p.fillText(_.toFixed(2),f-2,o-8-2),a&&ei(p,t,f,o,s,8,S,w),i&&ti(p,m,f,o+s,c,8,S,w)}function Zr(e,t,n,r,i,a,o=`rgba(48,54,61,0.6)`){e.strokeStyle=o,e.lineWidth=1;for(let a=0;a<=4;a++){let o=r+i/4*a;e.beginPath(),e.moveTo(n,o),e.lineTo(t-n,o),e.stroke()}}function Qr(e,t,n,r,i,a){e.strokeStyle=a,e.lineWidth=1.2,e.setLineDash([]),e.beginPath();let o=!1;for(let a=n-1;a<t.length;a++){let s=D(t.slice(0,a+1),n);if(s==null)continue;let c=r(a),l=i(s);o?e.lineTo(c,l):(e.moveTo(c,l),o=!0)}e.stroke()}function $r(e,t,n,r,i,a,o,s){e.strokeStyle=a,e.globalAlpha=o,e.lineWidth=s,e.beginPath(),t.forEach((t,a)=>{let o=r(a),s=i(n(a));a===0?e.moveTo(o,s):e.lineTo(o,s)}),e.stroke(),e.globalAlpha=1}function ei(e,t,n,r,i,a,o,s){let c=Math.max(...t.map(e=>e.v||0),1);e.fillStyle=`rgba(48,54,61,0.3)`,e.fillRect(0,r,n,i),e.fillStyle=`#8b949e`,e.font=`9px IBM Plex Mono, monospace`,e.textAlign=`left`,e.fillText(`VOL`,a,r+12);let l=Math.max(1,s*.7);t.forEach((t,n)=>{let o=a+n*s+s/2,u=(t.v||0)/c*(i-16);e.fillStyle=t.c>=t.o?`rgba(63,185,80,0.5)`:`rgba(248,81,73,0.5)`,e.fillRect(o-l/2,r+i-u,l,u)})}function ti(e,t,n,r,i,a,o,s){e.fillStyle=`rgba(48,54,61,0.3)`,e.fillRect(0,r,n,i),e.fillStyle=`#8b949e`,e.font=`9px IBM Plex Mono, monospace`,e.textAlign=`left`,e.fillText(`RSI`,a,r+12);let c=t.map((e,n)=>Ue(t.slice(0,n+1))),l=e=>r+14+(i-20)*(1-e/100);[30,70].forEach(t=>{e.strokeStyle=t===30?`rgba(63,185,80,0.4)`:`rgba(248,81,73,0.4)`,e.setLineDash([4,4]),e.beginPath(),e.moveTo(a,l(t)),e.lineTo(a+o,l(t)),e.stroke(),e.setLineDash([])}),e.strokeStyle=`#d29922`,e.lineWidth=1.5,e.beginPath(),c.forEach((n,r)=>{let i=a+r*(o/t.length)+o/t.length/2,s=l(n);r===0?e.moveTo(i,s):e.lineTo(i,s)}),e.stroke()}var ni=`key`;function ri(e,t){let n=e.fundamentals||{},r=e.ta||{};t.innerHTML=`
    <div class="fund-panel">
      <div class="fund-tabs" role="tablist">
        ${at.map(e=>`
          <button type="button" class="fund-tab ${ni===e.id?`active`:``}" data-tab="${e.id}" role="tab">
            ${e.title}
          </button>
        `).join(``)}
      </div>
      <div class="fund-body">
        ${at.map(t=>`
          <section class="fund-section ${ni===t.id?`active`:``}" data-section="${t.id}">
            <h4 class="fund-section-title">${t.title}</h4>
            <div class="fund-grid">
              ${t.fields.map(t=>{let i=st(t,e,n,r),a=ot(i,t.fmt,e,r),o=t.fmt===`pct`&&i!=null?G(i):``;return`
                  <div class="fund-row">
                    <span class="fund-label">${t.label}</span>
                    <span class="fund-value ${o}">${a}</span>
                  </div>
                `}).join(``)}
            </div>
          </section>
        `).join(``)}
      </div>
      <p class="fund-disclaimer">Fundamental data from FMP or Finnhub when API key is set; otherwise simulated.</p>
    </div>
  `,t.querySelectorAll(`.fund-tab`).forEach(n=>{n.addEventListener(`click`,()=>{ni=n.dataset.tab,ri(e,t)})})}function ii(e,t=[]){if(!e)return`No data available.`;let n=[],r=e.changePct>=0?`up`:`down`,i=Math.abs(e.changePct).toFixed(2);n.push(`${e.symbol} (${e.name||`—`}) is ${r} ${i}% today at $${e.price?.toFixed(2)}.`),e.sector&&n.push(`Sector: ${e.sector}${e.industry?` · ${e.industry}`:``}.`);let a=e.fundamentals||{},o=[];if(a.pe&&o.push(`P/E ${a.pe}`),a.peg&&o.push(`PEG ${a.peg}`),a.dividendYield&&o.push(`div yield ${a.dividendYield}%`),o.length&&n.push(`Valuation: ${o.join(`, `)}.`),e.ta?.rsi!=null){let t=e.ta.rsi;t>70?n.push(`RSI ${t.toFixed(1)} suggests overbought conditions.`):t<30?n.push(`RSI ${t.toFixed(1)} suggests oversold conditions.`):n.push(`RSI ${t.toFixed(1)} is neutral.`)}return e.prediction&&n.push(`Pattern engine: ${e.prediction.direction} bias (${e.prediction.confidence}% confidence, target $${e.prediction.priceTarget?.toFixed(2)}).`),e.patterns?.length&&n.push(`Detected patterns: ${e.patterns.slice(0,3).map(e=>e.label).join(`, `)}.`),e.signals?.length&&n.push(`Active signals: ${e.signals.slice(0,3).map(e=>e.label).join(`, `)}.`),t.length&&n.push(`Latest headline: "${t[0].headline||t[0].title}" (${t[0].source||`news`}).`),n.join(` `)}function ai(e,t){if(!e?.income?.length){t.innerHTML=`<p class="muted">No financial statement data — add FMP key in Settings.</p>`;return}let n=(e,t,n)=>`
    <h4 class="fund-section-title">${e}</h4>
    <table class="data-table compact finviz-tbl fin-stmt-tbl">
      <thead><tr><th>Period</th>${n.map(e=>`<th>${e.label}</th>`).join(``)}</tr></thead>
      <tbody>
        ${t.map(e=>`
          <tr>
            <td>${e.date?.slice(0,4)||e.calendarYear||`—`}</td>
            ${n.map(t=>`<td>${ot(e[t.key],t.fmt)}</td>`).join(``)}
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `;t.innerHTML=`
    <div class="fin-statements">
      ${n(`Income Statement`,e.income,[{key:`revenue`,label:`Revenue`,fmt:`mcap`},{key:`grossProfit`,label:`Gross Profit`,fmt:`mcap`},{key:`netIncome`,label:`Net Income`,fmt:`mcap`},{key:`eps`,label:`EPS`,fmt:`money`}])}
      ${n(`Balance Sheet`,e.balance,[{key:`totalAssets`,label:`Assets`,fmt:`mcap`},{key:`totalLiabilities`,label:`Liabilities`,fmt:`mcap`},{key:`totalStockholdersEquity`,label:`Equity`,fmt:`mcap`}])}
      ${n(`Cash Flow`,e.cash,[{key:`operatingCashFlow`,label:`Operating CF`,fmt:`mcap`},{key:`freeCashFlow`,label:`Free CF`,fmt:`mcap`},{key:`capitalExpenditure`,label:`CapEx`,fmt:`mcap`}])}
    </div>
  `}function oi(e,t){if(!e.length){t.innerHTML=`<p class="muted">No SEC filings available.</p>`;return}t.innerHTML=`
    <ul class="filings-list">
      ${e.map(e=>`
        <li><a href="${e.url}" target="_blank" rel="noopener">
          <span class="filing-type">${e.type}</span>
          <span class="filing-date">${e.date}</span>
          <span class="filing-title">${e.title}</span>
        </a></li>
      `).join(``)}
    </ul>
  `}function si(e,t,n){n.innerHTML=`
    <div class="ai-summary panel">
      <p class="ai-summary-text">${ii(e,t)}</p>
      <p class="field-hint">Auto-generated from live quote, TA, and news — not financial advice.</p>
    </div>
  `}var K=`overview`,q,J,ci,li;function ui(){q=document.getElementById(`quote-panel`),J=document.getElementById(`quote-panel-body`),ci=document.getElementById(`quote-overlay`),li=document.getElementById(`quote-close`),li?.addEventListener(`click`,fi),ci?.addEventListener(`click`,fi),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&q&&!q.hidden&&fi()})}function di(e){q&&(q.hidden=!1,ci.hidden=!1,q.classList.add(`open`),J.innerHTML=`<div class="quote-loading"><div class="skeleton-line"></div><div class="skeleton-line short"></div></div>`,pi(e))}function fi(){q&&(q.classList.remove(`open`),setTimeout(()=>{q.hidden=!0,ci.hidden=!0},200),jn(null))}async function pi(e){let t=z(),n=B().get(e),[r,i,a,o,s,c]=await Promise.all([n?.fundamentals?.peg==null?Ht(e,t):Promise.resolve(n),Gt(e,t),Ut(e,t),Wr(e,t),Gr(e,t),Kr(e,t)]),l=r;if(l&&a&&!n?.fundamentals?.peg){let e=A(t)===`fmp`?{fmpMetrics:a}:{finnhubMetrics:a};l=k(l,e)}let u=l?.candles||await Wt(e,t);if(!l){J.innerHTML=`<p class="quote-error">Could not load quote.</p>`;return}let d=G(l.changePct),f=Pn(e),p=Hn().includes(e),m=l.fundamentals||{};J.innerHTML=`
    <div class="quote-actions">
      <button class="btn-ghost btn-sm quote-action ${f?`starred`:``}" id="qa-fav">${f?`★ Favorited`:`☆ Favorite`}</button>
      <button class="btn-ghost btn-sm quote-action ${p?`active`:``}" id="qa-compare">${p?`In Compare`:`+ Compare`}</button>
      <button class="btn-ghost btn-sm quote-action" id="qa-alert">+ Alert</button>
      <a class="btn-ghost btn-sm quote-action" href="#/multicharts">Multi-Chart</a>
    </div>
    <div class="quote-header">
      <div>
        <h2 class="quote-symbol">${l.symbol}</h2>
        <p class="quote-name">${l.name||``}</p>
        <p class="quote-sector-line">${l.sector||``} · ${l.industry||``}</p>
      </div>
      <div class="quote-price-block" data-live-symbol="${e}">
        <span class="quote-price" data-live="price">$${U(l.price)}</span>
        <span class="quote-change ${d}" data-live="pct">${hr(l.change)} (${W(l.changePct)})</span>
        ${c?`<span class="quote-extended">After-hours: $${U(c.price)} (${W(c.changePct)})</span>`:``}
      </div>
    </div>

    <div class="quote-tabs" role="tablist">
      ${[`overview`,`financials`,`filings`,`summary`].map(e=>`
        <button type="button" class="quote-tab ${K===e?`active`:``}" data-qtab="${e}">${e===`summary`?`AI Summary`:e.charAt(0).toUpperCase()+e.slice(1)}</button>
      `).join(``)}
    </div>

    <div class="quote-tab-panel ${K===`overview`?`active`:``}" data-qpanel="overview">
    <div class="quote-key-metrics">
      <div class="qkm"><span class="qkm-label">Mkt Cap</span><span class="qkm-val">${_r(l.marketCap)}</span></div>
      <div class="qkm"><span class="qkm-label">P/E</span><span class="qkm-val">${m.pe??`—`}</span></div>
      <div class="qkm"><span class="qkm-label">PEG</span><span class="qkm-val">${m.peg??`—`}</span></div>
      <div class="qkm"><span class="qkm-label">EPS</span><span class="qkm-val">${m.eps==null?`—`:`$${m.eps}`}</span></div>
      <div class="qkm"><span class="qkm-label">Div Yield</span><span class="qkm-val">${m.dividendYield==null?`—`:`${m.dividendYield}%`}</span></div>
      <div class="qkm"><span class="qkm-label">Beta</span><span class="qkm-val">${m.beta??`—`}</span></div>
    </div>

    <div class="quote-grid">
      <div class="quote-stat"><span class="label">Open</span><span class="value">$${U(l.open)}</span></div>
      <div class="quote-stat"><span class="label">High</span><span class="value">$${U(l.high)}</span></div>
      <div class="quote-stat"><span class="label">Low</span><span class="value">$${U(l.low)}</span></div>
      <div class="quote-stat"><span class="label">Prev Close</span><span class="value">$${U(l.prevClose)}</span></div>
      <div class="quote-stat"><span class="label">Volume</span><span class="value">${gr(l.volume)}</span></div>
      <div class="quote-stat"><span class="label">52W High</span><span class="value">$${U(m.high52)}</span></div>
      <div class="quote-stat"><span class="label">52W Low</span><span class="value">$${U(m.low52)}</span></div>
      <div class="quote-stat"><span class="label">RSI (14)</span><span class="value">${l.ta?.rsi?.toFixed(1)??`—`}</span></div>
    </div>

    <div id="fundamentals-host"></div>
    </div>

    <div class="quote-tab-panel ${K===`financials`?`active`:``}" data-qpanel="financials">
      <div id="financials-host"></div>
    </div>
    <div class="quote-tab-panel ${K===`filings`?`active`:``}" data-qpanel="filings">
      <div id="filings-host"></div>
    </div>
    <div class="quote-tab-panel ${K===`summary`?`active`:``}" data-qpanel="summary">
      <div id="summary-host"></div>
    </div>

    ${K===`overview`&&l.prediction?`
    <div class="prediction-panel panel">
      <h3 class="quote-section-title">AI Pattern Prediction</h3>
      <div class="pred-header">
        <span class="pred-badge ${l.prediction.direction}">${l.prediction.direction.toUpperCase()}</span>
        <span class="pred-conf">${l.prediction.confidence}% confidence</span>
        <span class="pred-horizon">${l.prediction.horizon}</span>
      </div>
      <div class="pred-target">
        Target: <strong>$${U(l.prediction.priceTarget)}</strong>
        <span class="${G(l.prediction.targetPct)}">(${l.prediction.targetPct>=0?`+`:``}${l.prediction.targetPct}%)</span>
      </div>
      <div class="pred-factors">
        ${(l.prediction.factors||[]).slice(0,5).map(e=>`
          <div class="pred-factor ${e.weight}">
            <span>${e.name}</span>
            <span class="${e.score>=0?`pos`:`neg`}">${e.score>=0?`+`:``}${Math.round(e.score)}</span>
          </div>
        `).join(``)}
      </div>
      ${l.patterns?.length?`<p class="pred-patterns"><strong>Patterns:</strong> ${l.patterns.map(e=>`${e.label} (${e.confidence}%)`).join(` · `)}</p>`:``}
    </div>
    `:``}

    ${K===`overview`?`<div class="quote-chart-section">
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
    </div>`:``}
  `;let h=J.querySelector(`#fundamentals-host`);h&&K===`overview`&&ri(l,h);let g=J.querySelector(`#financials-host`);g&&ai(o,g);let _=J.querySelector(`#filings-host`);_&&oi(s,_);let v=J.querySelector(`#summary-host`);v&&si(l,i,v),J.querySelectorAll(`[data-qtab]`).forEach(t=>{t.addEventListener(`click`,()=>{K=t.dataset.qtab,pi(e)})}),J.querySelector(`#qa-alert`)?.addEventListener(`click`,()=>{let t=prompt(`Alert type: price_above, price_below, change_above, rsi_above, prediction
(or visit Alerts page)`,`price_above`);if(!t)return;let n=prompt(`Threshold value:`,String(l.price));n!=null&&(Jn({symbol:e,type:t,value:n,note:`Quick alert from quote panel`}),H(`Alert set for ${e}`,`success`))}),J.querySelector(`#qa-fav`)?.addEventListener(`click`,()=>{let t=Nn(e),n=J.querySelector(`#qa-fav`);n.textContent=t?`★ Favorited`:`☆ Favorite`,n.classList.toggle(`starred`,t),H(t?`${e} favorited`:`${e} unfavorited`,`info`)}),J.querySelector(`#qa-compare`)?.addEventListener(`click`,()=>{let t=Un(e),n=J.querySelector(`#qa-compare`);if(Hn().length>4&&!t){H(`Compare list full (max 4)`,`error`);return}n.textContent=t?`In Compare`:`+ Compare`,n.classList.toggle(`active`,t),H(t?`${e} added to compare`:`${e} removed`,`info`)});let y=J.querySelector(`#quote-chart`),b=z().chartTheme||`dark`;y&&(Xr(y,u,{height:180,showVolume:!0,theme:b}),new ResizeObserver(()=>Xr(y,u,{height:180,showVolume:!0,theme:b})).observe(y))}var mi,hi,gi,_i=0,vi=[];function yi(){mi=document.getElementById(`command-palette`),hi=document.getElementById(`cmd-input`),gi=document.getElementById(`cmd-results`);let e=document.getElementById(`cmd-overlay`);document.addEventListener(`keydown`,e=>{if((e.ctrlKey||e.metaKey)&&e.key===`k`&&(e.preventDefault(),xi()),e.key===`/`&&!bi()){if(!mi?.hidden)return;e.preventDefault(),xi()}}),e?.addEventListener(`click`,Si),hi?.addEventListener(`input`,()=>Ci(hi.value)),hi?.addEventListener(`keydown`,e=>{e.key===`Escape`&&Si(),e.key===`ArrowDown`&&(e.preventDefault(),wi(1)),e.key===`ArrowUp`&&(e.preventDefault(),wi(-1)),e.key===`Enter`&&Ti()})}function bi(){let e=document.activeElement?.tagName;return e===`INPUT`||e===`TEXTAREA`||e===`SELECT`}function xi(){mi&&(mi.hidden=!1,document.getElementById(`cmd-overlay`).hidden=!1,hi.value=``,_i=0,Ci(``),requestAnimationFrame(()=>hi?.focus()))}function Si(){mi&&(mi.hidden=!0,document.getElementById(`cmd-overlay`).hidden=!0)}function Ci(e){let t=e.trim().toLowerCase(),n=B();vi=E().filter(e=>t?e.symbol.toLowerCase().includes(t)||e.name.toLowerCase().includes(t):!0).slice(0,12),gi.innerHTML=vi.map((e,t)=>{let r=n.get(e.symbol),i=r?G(r.changePct):``;return`
      <button class="cmd-item ${t===_i?`active`:``}" data-idx="${t}" data-symbol="${e.symbol}">
        <span class="cmd-sym">${e.symbol}</span>
        <span class="cmd-name">${e.name}</span>
        ${r?`<span class="cmd-price ${i}">$${U(r.price)} ${W(r.changePct)}</span>`:``}
      </button>
    `}).join(``)||`<p class="cmd-empty">No matches</p>`,gi.querySelectorAll(`.cmd-item`).forEach(e=>{e.addEventListener(`click`,()=>{Ei(e.dataset.symbol)})})}function wi(e){_i=Math.max(0,Math.min(vi.length-1,_i+e)),gi.querySelectorAll(`.cmd-item`).forEach((e,t)=>{e.classList.toggle(`active`,t===_i)})}function Ti(){vi[_i]&&Ei(vi[_i].symbol)}function Ei(e){Si(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))}function Di(e,t,n){if(!t.length){e.innerHTML=`<p class="empty-state">No stocks match current filters.</p>`;return}let r=new Map;for(let e of t){let t=e.sector||`Other`;r.has(t)||r.set(t,[]),r.get(t).push(e)}e.innerHTML=`
    <div class="heatmap-legend">
      <span class="legend-label">-5%</span>
      <div class="legend-gradient"></div>
      <span class="legend-label">+5%</span>
    </div>
    <div class="treemap">
      ${[...r.entries()].sort((e,t)=>{let n=e[1].reduce((e,t)=>e+t.changePct,0)/e[1].length;return t[1].reduce((e,t)=>e+t.changePct,0)/t[1].length-n}).map(([e,t])=>Oi(e,t)).join(``)}
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>n?.(e.dataset.symbol))})}function Oi(e,t){let n=t.reduce((e,t)=>e+(t.marketCap||1),0),r=t.reduce((e,t)=>e+t.changePct,0)/t.length;return`
    <div class="sector-block" style="flex:${Math.max(1,Math.round(n/5e10))}">
      <div class="sector-header" style="background:${yr(r)}">
        <span class="sector-name">${e}</span>
        <span class="sector-avg">${r>=0?`+`:``}${r.toFixed(2)}%</span>
      </div>
      <div class="sector-tiles">
        ${t.sort((e,t)=>(t.marketCap||0)-(e.marketCap||0)).map(e=>ki(e,n)).join(``)}
      </div>
    </div>
  `}function ki(e,t){let n=(e.marketCap||1)/t,r=Math.max(1,Math.round(n*20)),i=e.changePct??0;return`
    <button
      class="heat-tile"
      data-symbol="${e.symbol}"
      style="flex:${r};background:${yr(i)}"
      title="${e.name}: ${i>=0?`+`:``}${i.toFixed(2)}%"
    >
      <span class="tile-symbol">${e.symbol}</span>
      <span class="tile-pct">${i>=0?`+`:``}${i.toFixed(1)}%</span>
    </button>
  `}var Ai=[{name:`Crude Oil`,symbol:`CL`,last:78.42,change:1.24,changePct:1.61},{name:`Natural Gas`,symbol:`NG`,last:2.84,change:-.06,changePct:-2.07},{name:`Gold`,symbol:`GC`,last:2348.5,change:12.3,changePct:.53},{name:`Dow`,symbol:`YM`,last:42850,change:-120,changePct:-.28},{name:`S&P 500`,symbol:`ES`,last:5892,change:18,changePct:.31},{name:`Nasdaq 100`,symbol:`NQ`,last:21245,change:95,changePct:.45},{name:`Russell 2000`,symbol:`ER2`,last:2185,change:-8,changePct:-.37}],ji=[{pair:`EUR/USD`,symbol:`EURUSD`,last:1.0842,change:.0012,changePct:.11},{pair:`USD/JPY`,symbol:`USDJPY`,last:157.32,change:.28,changePct:.18},{pair:`GBP/USD`,symbol:`GBPUSD`,last:1.2718,change:-8e-4,changePct:-.06},{pair:`BTC/USD`,symbol:`BTCUSD`,last:68420,change:1240,changePct:1.85}],Mi=[{name:`5-Year Treasury`,last:4.12,change:.03,changePct:.73},{name:`10-Year Treasury`,last:4.28,change:.02,changePct:.47},{name:`30-Year Treasury`,last:4.45,change:-.01,changePct:-.22}],Ni=[{symbol:`NVDA`,insider:`Jensen Huang`,relation:`CEO`,date:`Jun 04`,type:`Sale`,cost:128.5,shares:12e4,value:1542e4},{symbol:`AAPL`,insider:`Tim Cook`,relation:`CEO`,date:`Jun 03`,type:`Sale`,cost:198.2,shares:45e3,value:8919e3},{symbol:`MSFT`,insider:`Satya Nadella`,relation:`CEO`,date:`Jun 02`,type:`Sale`,cost:425,shares:22e3,value:935e4},{symbol:`JPM`,insider:`Jamie Dimon`,relation:`CEO`,date:`Jun 05`,type:`Buy`,cost:198.4,shares:15e3,value:2976e3},{symbol:`META`,insider:`Mark Zuckerberg`,relation:`CEO`,date:`Jun 01`,type:`Sale`,cost:512,shares:8e4,value:4096e4},{symbol:`GOOGL`,insider:`Sundar Pichai`,relation:`CEO`,date:`May 30`,type:`Sale`,cost:178.5,shares:35e3,value:6247500}],Pi=[{symbol:`ORCL`,date:`Today AMC`,epsEst:1.42,cap:`Large`},{symbol:`ADBE`,date:`Today AMC`,epsEst:4.18,cap:`Large`},{symbol:`COST`,date:`Tomorrow BMO`,epsEst:3.92,cap:`Large`},{symbol:`CRM`,date:`Tomorrow AMC`,epsEst:2.28,cap:`Large`},{symbol:`AVGO`,date:`Jun 10 AMC`,epsEst:1.35,cap:`Large`},{symbol:`NKE`,date:`Jun 11 AMC`,epsEst:.72,cap:`Large`}],Fi=[{date:`Mon`,time:`10:00 AM`,impact:`high`,event:`ISM Services PMI`,actual:`—`,expected:`52.4`,prior:`51.8`},{date:`Tue`,time:`8:30 AM`,impact:`high`,event:`Non-Farm Payrolls`,actual:`—`,expected:`185K`,prior:`177K`},{date:`Wed`,time:`2:00 PM`,impact:`medium`,event:`FOMC Minutes`,actual:`—`,expected:`—`,prior:`—`},{date:`Thu`,time:`8:30 AM`,impact:`medium`,event:`Initial Jobless Claims`,actual:`—`,expected:`220K`,prior:`218K`},{date:`Fri`,time:`8:30 AM`,impact:`high`,event:`CPI YoY`,actual:`—`,expected:`2.9%`,prior:`3.0%`}],Ii=[{id:`top_gainers`,label:`Top Gainers`},{id:`top_losers`,label:`Top Losers`},{id:`new_high`,label:`New High`},{id:`new_low`,label:`New Low`},{id:`overbought`,label:`Overbought`},{id:`oversold`,label:`Oversold`},{id:`unusual_volume`,label:`Unusual Volume`},{id:`most_active`,label:`Most Active`},{id:`most_volatile`,label:`Most Volatile`},{id:`golden_cross`,label:`Golden Cross`},{id:`death_cross`,label:`Death Cross`}],Li=[{id:`double_top`,label:`Double Top`},{id:`double_bottom`,label:`Double Bottom`},{id:`head_shoulders`,label:`Head & Shoulders`},{id:`inv_head_shoulders`,label:`Inverse H&S`},{id:`channel_up`,label:`Channel Up`},{id:`channel_down`,label:`Channel Down`},{id:`wedge_up`,label:`Wedge Up`},{id:`wedge_down`,label:`Wedge Down`},{id:`triangle_asc`,label:`Triangle Ascending`},{id:`triangle_desc`,label:`Triangle Descending`},{id:`horizontal_support`,label:`Horizontal Support`},{id:`horizontal_resistance`,label:`Horizontal Resistance`},{id:`tl_support`,label:`Trendline Support`},{id:`tl_resistance`,label:`Trendline Resistance`}],Ri=30,zi=[{symbol:`^GSPC`,label:`S&P 500`,etf:`SPY`,decimals:2},{symbol:`^DJI`,label:`Dow Jones`,etf:`DIA`,decimals:2},{symbol:`^IXIC`,label:`Nasdaq`,etf:`QQQ`,decimals:2},{symbol:`^RUT`,label:`Russell 2000`,etf:`IWM`,decimals:2},{symbol:`^VIX`,label:`VIX`,etf:null,decimals:2}],Bi=600*1e3,Vi=null;function Hi(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function Ui(e,t,n=30){let r=Hi(t+`idx`),i=[],a=e*(.97+r()*.02);for(let e=0;e<n;e++){let t=a;a=Math.max(.01,a*(1+(r()-.48)*.012));let o=a,s=Math.max(t,o)*(1+r()*.006),c=Math.min(t,o)*(1-r()*.006);i.push({t:Date.now()-(n-e)*864e5,o:t,h:s,l:c,c:o})}return i[i.length-1].c=e,i}function Wi(e,t){if(!e.etf)return null;let n=t.get(e.etf);return n?{price:n.price,change:n.change,changePct:n.changePct,history:n.sparkline?.length?n.sparkline.map((e,t)=>({t:Date.now()-(n.sparkline.length-t)*36e5,c:e})):Ui(n.price,e.etf),navigateSymbol:e.etf,live:!1}:null}async function Gi(e,t){try{let n=await v(e.symbol,t,Ri);if(n.length>=10)return n}catch{}if(e.etf)try{let n=await v(e.etf,t,Ri);if(n.length>=10)return n}catch{}return null}async function Ki(e,t){if(Vi&&Date.now()-Vi.at<Bi)return Vi.data;let n=A(e),r=[];if(n===`fmp`){let n=e.fmpApiKey.trim(),i=[];try{i=await re(n)}catch{}let a=new Map(i.map(e=>[e.symbol,e])),o=await Promise.all(zi.map(e=>Gi(e,n).catch(()=>null)));zi.forEach((e,n)=>{let i=a.get(e.symbol),s=o[n],c=Wi(e,t),l=i?.last??c?.price??0,u=i?.change??c?.change??0,d=i?.changePct??c?.changePct??0;r.push({...e,price:l,change:u,changePct:d,history:s?.length?s:c?.history||Ui(l||100,e.symbol),navigateSymbol:e.etf||e.symbol,live:!!i})})}else for(let e of zi){let n=Wi(e,t),i=n?.price??Ui(100,e.symbol).at(-1).c;r.push({...e,price:i,change:n?.change??0,changePct:n?.changePct??0,history:n?.history||Ui(i,e.symbol),navigateSymbol:e.etf||e.symbol,live:!1})}return Vi={at:Date.now(),data:r},r}function qi(){Vi=null}function Ji(e,t){if(!t?.length)return;e.innerHTML=`
    <div class="home-indices-scroll">
      ${t.map((e,t)=>`
        <article class="home-index-card ${G(e.changePct)}" data-symbol="${e.navigateSymbol}" data-idx="${t}" title="Open ${e.label}">
          <div class="home-index-head">
            <span class="home-index-label">${e.label}</span>
            <span class="home-index-price" data-live="price">${Yi(e.price,e.decimals)}</span>
            <span class="home-index-chg ${G(e.changePct)}" data-live="pct">${W(e.changePct)}</span>
          </div>
          <canvas class="home-index-chart" data-chart-idx="${t}" aria-hidden="true"></canvas>
        </article>
      `).join(``)}
    </div>
  `;let n=e.querySelectorAll(`.home-index-chart`),r=[];return t.forEach((e,t)=>{let i=n[t];if(!i)return;let a=()=>{let t=i.parentElement?.clientWidth||180;Sr(i,e.history,{width:t,height:72})};a();let o=new ResizeObserver(a);o.observe(i.parentElement),r.push(o)}),e.querySelectorAll(`.home-index-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.symbol;t&&window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:t}))})}),()=>r.forEach(e=>e.disconnect())}function Yi(e,t=2){return e?e>=1e4?e.toLocaleString(`en-US`,{maximumFractionDigits:0}):e>=1e3?e.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2}):e.toFixed(t):`—`}function Xi(t){let n=[...t.values()];return e.map(e=>{let t=n.filter(t=>t.sector===e);return{label:e,value:t.length?t.reduce((e,t)=>e+t.changePct,0)/t.length:0,count:t.length}}).filter(e=>e.count>0).sort((e,t)=>t.value-e.value)}function Zi(e,t){let n=Xi(t);if(!n.length)return;e.innerHTML=`
    <div class="home-sector-bars-head">
      <h2 class="finviz-col-title"><a href="#/groups">Sector Performance</a></h2>
      <span class="home-sector-bars-sub">Avg % change today</span>
    </div>
    <canvas class="home-sector-bars-canvas" aria-label="Sector performance bar chart"></canvas>
  `;let r=e.querySelector(`.home-sector-bars-canvas`);if(!r)return;let i=()=>{Cr(r,n,{width:e.clientWidth||600,height:150})};i();let a=new ResizeObserver(i);return a.observe(e),()=>a.disconnect()}var Qi=[{signal:`top_gainers`,limit:7,sort:(e,t)=>t.changePct-e.changePct},{signal:`new_high`,limit:4,sort:(e,t)=>t.changePct-e.changePct},{signal:`overbought`,limit:2,sort:(e,t)=>(t.ta?.rsi??0)-(e.ta?.rsi??0)},{signal:`unusual_volume`,limit:4,sort:(e,t)=>(t.ta?.relVolume??0)-(e.ta?.relVolume??0)}],$i=[{signal:`top_losers`,limit:7,sort:(e,t)=>e.changePct-t.changePct},{signal:`new_low`,limit:4,sort:(e,t)=>e.changePct-t.changePct},{signal:`oversold`,limit:2,sort:(e,t)=>(e.ta?.rsi??100)-(t.ta?.rsi??100)},{signal:`most_volatile`,limit:2,sort:(e,t)=>Math.abs(t.changePct)-Math.abs(e.changePct)},{signal:`most_active`,limit:2,sort:(e,t)=>(t.volume??0)-(e.volume??0)}];async function ea(e){let t=B(),n=z(),r=[...t.values()],i=ft(t),[a,o,s]=await Promise.all([Kt(n).catch(()=>[]),Jt(n).catch(()=>null),Ki(n,t).catch(()=>[])]),c=o?.earnings?.length?o.earnings:Pi,l=o?.economic?.length?o.economic:Fi,u=o?.insider?.length?o.insider:Ni,d=o?.futures?.length?o.futures:Ai,f=o?.forex?.length?o.forex:ji,p=o?.bonds?.length?o.bonds:Mi,m=ta(r,Qi),h=ta(r,$i),g=c.filter(e=>/BMO|before/i.test(e.date)),_=c.filter(e=>/AMC|after|Today/i.test(e.date)),v=u.filter(e=>e.type===`Buy`).slice(0,2),y=u.filter(e=>e.type===`Sale`).slice(0,2),b=r.filter(e=>Math.abs(e.changePct)>=1.5).sort((e,t)=>Math.abs(t.changePct)-Math.abs(e.changePct)).slice(0,12),x=Li.slice(0,7),S=Li.slice(7,14);e.innerHTML=`
    <div class="finviz-home">
      ${a[0]?`
        <div class="home-market-line panel">
          <span class="home-market-time">${oa(a[0].datetime)}</span>
          <a class="home-market-text" href="${a[0].url||`#/`}" target="_blank" rel="noopener">${a[0].headline||a[0].title}</a>
        </div>
      `:``}

      <section class="panel home-indices-panel" id="home-indices"></section>

      <section class="panel home-sector-bars-panel" id="home-sector-bars"></section>

      <div class="breadth-bar panel finviz-breadth">
        <div class="breadth-item">
          <span class="breadth-label">Advancing</span>
          <span class="breadth-val pos">${i.advPct.toFixed(1)}%</span>
          <span class="breadth-sub">(${i.advancing})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Declining</span>
          <span class="breadth-sub">(${i.declining})</span>
          <span class="breadth-val neg">${i.decPct.toFixed(1)}%</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">New High</span>
          <span class="breadth-val pos">${i.newHighPct.toFixed(1)}%</span>
          <span class="breadth-sub">(${i.newHigh})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">New Low</span>
          <span class="breadth-sub">(${i.newLow})</span>
          <span class="breadth-val neg">${(100-i.newHighPct).toFixed(1)}%</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Above</span>
          <span class="breadth-val">${i.aboveSma50Pct.toFixed(1)}%</span>
          <span class="breadth-sub">SMA50 (${i.aboveSma50})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Below</span>
          <span class="breadth-sub">(${i.belowSma50})</span>
          <span class="breadth-val">${(100-i.aboveSma50Pct).toFixed(1)}%</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Above</span>
          <span class="breadth-val">${i.aboveSma200Pct.toFixed(1)}%</span>
          <span class="breadth-sub">SMA200 (${i.aboveSma200})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Below</span>
          <span class="breadth-sub">(${i.belowSma200})</span>
          <span class="breadth-val">${(100-i.aboveSma200Pct).toFixed(1)}%</span>
        </div>
      </div>

      <div class="home-main-grid">
        <section class="panel home-tape-col">
          ${na(m)}
          ${ra(g,`Earnings Before`)}
          ${ia(v,`Insider Buying`)}
        </section>

        <section class="panel home-center-col">
          <h2 class="finviz-col-title"><a href="#/map">S&amp;P 500 — 1 Day Performance</a></h2>
          <div id="home-heatmap" class="home-heatmap-host"></div>
          <div class="home-pattern-cols">
            <div class="home-pattern-col">
              ${aa(x,r)}
            </div>
            <div class="home-pattern-col">
              ${aa(S,r)}
            </div>
          </div>
        </section>

        <section class="panel home-tape-col">
          ${na(h)}
          ${ra(_,`Earnings After`)}
          ${ia(y,`Insider Selling`)}
        </section>

        <section class="panel home-news-col">
          <h2 class="finviz-col-title"><a href="#/news">Headlines</a></h2>
          <div class="headline-list home-headlines">
            ${a.slice(0,6).map(e=>`
              <a class="headline-item" href="${e.url||`#`}" target="_blank" rel="noopener">
                <span class="headline-time">${oa(e.datetime)}</span>
                <span class="headline-text">${e.headline||e.title}</span>
              </a>
            `).join(``)}
          </div>
          <h3 class="finviz-sub-title"><a href="#/screener">Major News</a></h3>
          <div class="major-news-strip">
            ${b.map(e=>`
              <a class="major-news-chip clickable" data-symbol="${e.symbol}">
                <span class="sym">${e.symbol}</span>
                <span class="${G(e.changePct)}">${W(e.changePct)}</span>
              </a>
            `).join(``)}
          </div>
        </section>
      </div>

      <div class="home-bottom-grid">
        <section class="panel home-bottom-panel">
          <h3 class="finviz-sub-title"><a href="#/calendar">Economic Calendar</a></h3>
          <table class="data-table compact finviz-tbl home-mini-tbl">
            <thead><tr><th>Date</th><th>Time</th><th>Impact</th><th>Event</th><th>Expected</th></tr></thead>
            <tbody>
              ${l.slice(0,4).map(e=>`
                <tr>
                  <td>${e.date}</td>
                  <td>${e.time}</td>
                  <td><span class="impact impact-${e.impact}">${e.impact}</span></td>
                  <td>${e.event}</td>
                  <td>${e.expected}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </section>

        <section class="panel home-bottom-panel">
          <h3 class="finviz-sub-title"><a href="#/calendar">Earnings Release</a></h3>
          <table class="data-table compact finviz-tbl home-mini-tbl">
            <thead><tr><th>Date</th><th>Symbol</th></tr></thead>
            <tbody>
              ${c.slice(0,6).map(e=>`
                <tr class="clickable" data-symbol="${e.symbol}">
                  <td>${e.date}</td>
                  <td class="sym">${e.symbol}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </section>

        <section class="panel home-bottom-panel">
          <h3 class="finviz-sub-title"><a href="#/insider">Latest Insider Trading</a></h3>
          <table class="data-table compact finviz-tbl home-mini-tbl">
            <thead><tr><th>Ticker</th><th>Insider</th><th>Date</th><th>Type</th><th>Value</th></tr></thead>
            <tbody>
              ${u.slice(0,5).map(e=>`
                <tr class="clickable" data-symbol="${e.symbol}">
                  <td class="sym">${e.symbol}</td>
                  <td>${e.insider.split(` `)[0]}</td>
                  <td>${e.date}</td>
                  <td class="${e.type===`Buy`?`pos`:`neg`}">${e.type}</td>
                  <td>$${(e.value/1e6).toFixed(1)}M</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </section>

        <section class="panel home-bottom-panel">
          <h3 class="finviz-sub-title"><a href="#/futures">Futures</a></h3>
          <table class="data-table compact finviz-tbl home-mini-tbl">
            <thead><tr><th>Contract</th><th>Last</th><th>Chg</th><th>Chg %</th></tr></thead>
            <tbody>
              ${d.map(e=>`
                <tr>
                  <td>${e.name}</td>
                  <td>${e.last>1e3?e.last.toLocaleString():U(e.last)}</td>
                  <td class="${G(e.change)}">${e.change>=0?`+`:``}${U(e.change)}</td>
                  <td class="${G(e.changePct)}">${W(e.changePct)}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </section>

        <section class="panel home-bottom-panel">
          <h3 class="finviz-sub-title"><a href="#/futures">Forex &amp; Bonds</a></h3>
          <table class="data-table compact finviz-tbl home-mini-tbl">
            <thead><tr><th>Pair / Bond</th><th>Last</th><th>Chg %</th></tr></thead>
            <tbody>
              ${[...f,...p].map(e=>`
                <tr>
                  <td>${e.pair||e.name}</td>
                  <td>${typeof e.last==`number`&&e.last>100?e.last.toLocaleString():U(e.last)}</td>
                  <td class="${G(e.changePct)}">${W(e.changePct)}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </section>
      </div>

      <div class="signal-ticker-row panel">
        <span class="signal-ticker-label">Signals:</span>
        ${Ii.map(e=>{let t=r.filter(t=>t.signals?.some(t=>t.id===e.id)).length;return`<a href="#/screener?signal=${e.id}" class="signal-ticker-chip">${e.label} (${t})</a>`}).join(``)}
        <a href="#/patterns" class="signal-ticker-chip accent">Patterns →</a>
        <a href="#/signals" class="signal-ticker-chip accent">All Signals →</a>
      </div>
    </div>
  `;let C=e.querySelector(`#home-indices`);C&&s.length&&Ji(C,s);let w=e.querySelector(`#home-sector-bars`);w&&Zi(w,t);let T=e.querySelector(`#home-heatmap`);T&&Di(T,r,e=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function ta(e,t){let n=[];for(let{signal:r,limit:i,sort:a}of t){let t=Ii.find(e=>e.id===r)?.label||r,o=e.filter(e=>e.signals?.some(e=>e.id===r)).sort(a).slice(0,i);for(let e of o)n.push({quote:e,signal:r,signalLabel:t})}return n}function na(e){return`
    <table class="data-table compact finviz-tbl home-tape-tbl">
      <thead>
        <tr>
          <th>Ticker</th><th>Last</th><th>Change</th><th>Volume</th><th>Signal</th>
        </tr>
      </thead>
      <tbody>
        ${e.length?e.map(({quote:e,signal:t,signalLabel:n})=>`
          <tr class="clickable" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td data-live="price">$${U(e.price)}</td>
            <td class="${G(e.changePct)}" data-live="pct">${W(e.changePct)}</td>
            <td>${gr(e.volume)}</td>
            <td><a href="#/screener?signal=${t}" class="signal-link">${n}</a></td>
          </tr>
        `).join(``):`<tr><td colspan="5" class="empty-row">—</td></tr>`}
      </tbody>
    </table>
  `}function ra(e,t){return e.length?`
    <table class="data-table compact finviz-tbl home-tape-tbl home-tape-extra">
      <tbody>
        ${e.slice(0,2).map(e=>`
          <tr class="clickable" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td>$${U(e.epsEst)}</td>
            <td>${e.date}</td>
            <td></td>
            <td><a href="#/calendar" class="signal-link">${t}</a></td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `:``}function ia(e,t){return e.length?`
    <table class="data-table compact finviz-tbl home-tape-tbl home-tape-extra">
      <tbody>
        ${e.map(e=>`
          <tr class="clickable" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td>$${e.cost}</td>
            <td>${e.shares.toLocaleString()}</td>
            <td>$${(e.value/1e6).toFixed(1)}M</td>
            <td><a href="#/insider" class="signal-link">${t}</a></td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `:``}function aa(e,t){return`
    <table class="data-table compact finviz-tbl home-pattern-tbl">
      <thead><tr><th>Ticker</th><th>Signal</th></tr></thead>
      <tbody>
        ${e.flatMap(e=>{let n=t.filter(t=>t.patterns?.some(t=>t.id===e.id)).slice(0,4);return n.length?n.map(t=>`
            <tr class="clickable" data-symbol="${t.symbol}">
              <td class="sym">${t.symbol}</td>
              <td><a href="#/screener?pattern=${e.id}" class="signal-link">${e.label}</a></td>
            </tr>
          `):``}).join(``)}
      </tbody>
    </table>
  `}function oa(e){return e?(typeof e==`number`?new Date(e*1e3):new Date(e)).toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`}):``}var sa=[{id:`all`,label:`All Stocks`,filters:{}},{id:`gainers`,label:`Top Gainers`,filters:{signal:`top_gainers`}},{id:`losers`,label:`Top Losers`,filters:{signal:`top_losers`}},{id:`newhigh`,label:`New High`,filters:{signal:`new_high`}},{id:`newlow`,label:`New Low`,filters:{signal:`new_low`}},{id:`overbought`,label:`Overbought`,filters:{signal:`overbought`}},{id:`oversold`,label:`Oversold`,filters:{signal:`oversold`}},{id:`unusualvol`,label:`Unusual Volume`,filters:{signal:`unusual_volume`}},{id:`golden`,label:`Golden Cross`,filters:{signal:`golden_cross`}},{id:`doublebottom`,label:`Double Bottom`,filters:{pattern:`double_bottom`}},{id:`headshoulders`,label:`Head & Shoulders`,filters:{pattern:`head_shoulders`}},{id:`bullish`,label:`Bullish Prediction`,filters:{prediction:`bullish`}},{id:`bearish`,label:`Bearish Prediction`,filters:{prediction:`bearish`}},{id:`tech`,label:`Technology`,filters:{sector:`Technology`}},{id:`megacap`,label:`Mega Cap`,filters:{minMarketCap:`200000000000`}},{id:`value`,label:`Value (Low P/E)`,filters:{maxPe:`20`,minDivYield:`1`}},{id:`growth`,label:`Growth (Low PEG)`,filters:{maxPeg:`1.5`,minChange:`0`}},{id:`dividend`,label:`Dividend`,filters:{minDivYield:`2`}},{id:`momentum`,label:`Momentum`,filters:{minChange:`2`,aboveSma50:`yes`}},{id:`rsi30`,label:`RSI Oversold`,filters:{maxRsi:`30`}},{id:`rsi70`,label:`RSI Overbought`,filters:{minRsi:`70`}},{id:`healthcare`,label:`Healthcare`,filters:{sector:`Healthcare`}},{id:`financial`,label:`Financial`,filters:{sector:`Financial`}}],ca=new Set(`price.changePct.volume.marketCap.rsi.pe.peFwd.peg.ps.pb.eps.epsFwd.epsGrowth.beta.dividendYield.payoutRatio.grossMargin.netMargin.roe.relVolume.sma20.sma50.sma200.predConf.atr.shortPct.instPct`.split(`.`)),la={rsi:e=>e.ta?.rsi??50,pe:e=>e.fundamentals?.pe??0,peFwd:e=>e.fundamentals?.peFwd??0,peg:e=>e.fundamentals?.peg??0,ps:e=>e.fundamentals?.ps??0,pb:e=>e.fundamentals?.pb??0,eps:e=>e.fundamentals?.eps??0,epsFwd:e=>e.fundamentals?.epsFwd??0,epsGrowth:e=>e.fundamentals?.epsGrowth??0,beta:e=>e.fundamentals?.beta??1,dividendYield:e=>e.fundamentals?.dividendYield??0,payoutRatio:e=>e.fundamentals?.payoutRatio??0,grossMargin:e=>e.fundamentals?.grossMargin??0,netMargin:e=>e.fundamentals?.netMargin??0,roe:e=>e.fundamentals?.roe??0,shortPct:e=>e.fundamentals?.shortPct??0,instPct:e=>e.fundamentals?.instPct??0,relVolume:e=>e.ta?.relVolume??1,sma20:e=>e.ta?.sma20??e.price,sma50:e=>e.ta?.sma50??e.price,sma200:e=>e.ta?.sma200??e.price,predConf:e=>e.prediction?.confidence??50,atr:e=>e.ta?.atr??0,price:e=>e.price??0,changePct:e=>e.changePct??0,volume:e=>e.volume??0,marketCap:e=>e.marketCap??0};function ua(e){let t={};for(let[n,r]of Object.entries(la))t[n]=r(e);return t}function da(e){if(!e?.trim())return{valid:!0,error:null};try{return ma(pa(e),0),{valid:!0,error:null}}catch(e){return{valid:!1,error:e.message}}}function fa(e,t){if(!e?.trim())return!0;let n=ua(t);return!!ma(pa(e),0,n).value}function pa(e){let t=[],n=0;for(;n<e.length;){let r=e[n];if(/\s/.test(r)){n++;continue}if(/[0-9.]/.test(r)){let r=``;for(;n<e.length&&/[0-9.]/.test(e[n]);)r+=e[n++];t.push({type:`num`,value:parseFloat(r)});continue}if(/[a-zA-Z_]/.test(r)){let r=``;for(;n<e.length&&/[a-zA-Z0-9_]/.test(e[n]);)r+=e[n++];let i=r.toLowerCase();if(i===`and`)t.push({type:`op`,value:`&&`});else if(i===`or`)t.push({type:`op`,value:`||`});else if(i===`not`)t.push({type:`op`,value:`!`});else if(ca.has(r))t.push({type:`id`,value:r});else throw Error(`Unknown field: ${r}`);continue}if(`+-*/<>=!&|()`.includes(r)){let i=r+(e[n+1]||``);[`>=`,`<=`,`==`,`!=`,`&&`,`||`].includes(i)?(t.push({type:`op`,value:i}),n+=2):(t.push({type:`op`,value:r}),n++);continue}throw Error(`Invalid character: ${r}`)}return t}function ma(e,t,n=null){return ha(e,t,n)}function ha(e,t,n){let r=ga(e,t,n);for(t=r.pos;e[t]?.value===`||`;){let i=ga(e,t+1,n);r={value:r.value||i.value,pos:i.pos},t=i.pos}return r}function ga(e,t,n){let r=_a(e,t,n);for(t=r.pos;e[t]?.value===`&&`;){let i=_a(e,t+1,n);r={value:r.value&&i.value,pos:i.pos},t=i.pos}return r}function _a(e,t,n){let r=va(e,t,n);if(t=r.pos,[`>=`,`<=`,`==`,`!=`,`>`,`<`].includes(e[t]?.value)){let i=e[t].value,a=va(e,t+1,n),o=r.value,s=a.value,c=!1;return i===`>`?c=o>s:i===`<`?c=o<s:i===`>=`?c=o>=s:i===`<=`?c=o<=s:i===`==`?c=o===s:i===`!=`&&(c=o!==s),{value:c,pos:a.pos}}return r}function va(e,t,n){let r=ya(e,t,n);for(t=r.pos;e[t]?.value===`+`||e[t]?.value===`-`;){let i=e[t].value,a=ya(e,t+1,n);r={value:i===`+`?r.value+a.value:r.value-a.value,pos:a.pos},t=a.pos}return r}function ya(e,t,n){let r=ba(e,t,n);for(t=r.pos;e[t]?.value===`*`||e[t]?.value===`/`;){let i=e[t].value,a=ba(e,t+1,n);r={value:i===`*`?r.value*a.value:r.value/a.value,pos:a.pos},t=a.pos}return r}function ba(e,t,n){if(e[t]?.value===`!`){let r=ba(e,t+1,n);return{value:!r.value,pos:r.pos}}if(e[t]?.value===`-`){let r=ba(e,t+1,n);return{value:-r.value,pos:r.pos}}return xa(e,t,n)}function xa(e,t,n){let r=e[t];if(!r)throw Error(`Unexpected end of formula`);if(r.type===`num`)return{value:r.value,pos:t+1};if(r.type===`id`)return n?{value:n[r.value]??0,pos:t+1}:{value:0,pos:t+1};if(r.value===`(`){let r=ma(e,t+1,n);if(e[r.pos]?.value!==`)`)throw Error(`Missing )`);return{value:r.value,pos:r.pos+1}}throw Error(`Unexpected token: ${r.value}`)}var Sa=[{label:`Oversold bounce`,formula:`rsi < 35 and changePct > 0`},{label:`Value + PEG`,formula:`peg < 1.5 and pe < 25 and epsGrowth > 5`},{label:`Dividend value`,formula:`dividendYield > 2 and pe < 20 and payoutRatio < 60`},{label:`Growth at reasonable price`,formula:`peg < 2 and epsGrowth > 10 and ps < 8`},{label:`High volume breakout`,formula:`relVolume > 1.5 and changePct > 2`}];function Ca(e,t){return[...e.values()].filter(e=>{if(t.search){let n=t.search.toLowerCase();if(!e.symbol.toLowerCase().includes(n)&&!(e.name||``).toLowerCase().includes(n))return!1}return!(t.sector&&e.sector!==t.sector||t.industry&&e.industry!==t.industry||t.minChange!==``&&e.changePct<Number(t.minChange)||t.maxChange!==``&&e.changePct>Number(t.maxChange)||t.minVolume!==``&&(e.volume||0)<Number(t.minVolume)||t.minMarketCap!==``&&(e.marketCap||0)<Number(t.minMarketCap)||t.minRsi!==``&&(e.ta?.rsi??50)<Number(t.minRsi)||t.maxRsi!==``&&(e.ta?.rsi??50)>Number(t.maxRsi)||t.minPe!==``&&(e.fundamentals?.pe??0)<Number(t.minPe)||t.maxPe!==``&&(e.fundamentals?.pe??999)>Number(t.maxPe)||t.minPeg!==``&&(e.fundamentals?.peg??0)<Number(t.minPeg)||t.maxPeg!==``&&(e.fundamentals?.peg??999)>Number(t.maxPeg)||t.minDivYield!==``&&(e.fundamentals?.dividendYield??0)<Number(t.minDivYield)||t.signal&&!e.signals?.some(e=>e.id===t.signal)||t.pattern&&!e.patterns?.some(e=>e.id===t.pattern)||t.prediction&&e.prediction?.direction!==t.prediction||t.aboveSma50===`yes`&&!(e.ta?.sma50&&e.price>e.ta.sma50)||t.aboveSma50===`no`&&e.ta?.sma50&&e.price>e.ta.sma50||t.aboveSma200===`yes`&&!(e.ta?.sma200&&e.price>e.ta.sma200)||t.aboveSma200===`no`&&e.ta?.sma200&&e.price>e.ta.sma200||t.formula&&!fa(t.formula,e))})}var wa=`Symbol.Company.Sector.Industry.Price.Change.Change %.Volume.Market Cap.RSI.SMA20.SMA50.SMA200.P/E.Forward P/E.PEG.P/S.P/B.EV/EBITDA.EPS.EPS Fwd.EPS Growth.Div Yield.Beta.52W High.52W Low.ROE.Net Margin.Short %.Primary Signal.Pattern.Prediction.Confidence.Target.Target %`.split(`.`);function Ta(e){let t=String(e??``);return t.includes(`,`)||t.includes(`"`)?`"${t.replace(/"/g,`""`)}"`:t}function Ea(e){return[e.symbol,Ta(e.name),Ta(e.sector),Ta(e.industry),U(e.price),e.change?.toFixed(2)??``,e.changePct?.toFixed(2)??``,e.volume??``,e.marketCap??``,e.ta?.rsi?.toFixed(1)??``,e.ta?.sma20?.toFixed(2)??``,e.ta?.sma50?.toFixed(2)??``,e.ta?.sma200?.toFixed(2)??``,e.fundamentals?.pe??``,e.fundamentals?.peFwd??``,e.fundamentals?.peg??``,e.fundamentals?.ps??``,e.fundamentals?.pb??``,e.fundamentals?.evEbitda??``,e.fundamentals?.eps??``,e.fundamentals?.epsFwd??``,e.fundamentals?.epsGrowth??``,e.fundamentals?.dividendYield??``,e.fundamentals?.beta??``,e.fundamentals?.high52??``,e.fundamentals?.low52??``,e.fundamentals?.roe??``,e.fundamentals?.netMargin??``,e.fundamentals?.shortPct??``,Ta(e.primarySignal),Ta(e.patternLabels?.join(`; `)),e.prediction?.direction??``,e.prediction?.confidence??``,e.prediction?.priceTarget??``,e.prediction?.targetPct??``].join(`,`)}function Da(e){return{symbol:e.symbol,name:e.name,sector:e.sector,industry:e.industry,price:e.price,change:e.change,changePct:e.changePct,volume:e.volume,marketCap:e.marketCap,ta:e.ta,fundamentals:e.fundamentals,signals:e.signals?.map(e=>e.label),patterns:e.patterns,prediction:e.prediction,timestamp:e.timestamp}}function Oa(e,t=`stockviz-export.csv`,n=!1){Ma([(n?wa:[`Symbol`,`Company`,`Sector`,`Price`,`Change`,`Change %`,`Volume`,`Market Cap`]).join(`,`),...e.map(e=>n?Ea(e):[e.symbol,Ta(e.name),Ta(e.sector),U(e.price),e.change?.toFixed(2)??``,e.changePct?.toFixed(2)??``,e.volume??``,e.marketCap??``].join(`,`))].join(`
`),t,`text/csv;charset=utf-8`)}function ka(e,t=`stockviz-export.json`){let n={exportedAt:new Date().toISOString(),count:e.length,stocks:e.map(Da)};Ma(JSON.stringify(n,null,2),t,`application/json`)}function Aa(e){return{api:`StockViz Export API v1`,version:`1.0`,exportedAt:new Date().toISOString(),count:e.length,endpoints:{screener:`GET /api/v1/screener — full universe with TA`,quote:`GET /api/v1/quote?symbol=AAPL — single stock`,signals:`GET /api/v1/signals — stocks by signal`,patterns:`GET /api/v1/patterns — pattern scanner results`},data:e.map(Da)}}async function ja(e){let t=Aa(e);return await navigator.clipboard.writeText(JSON.stringify(t,null,2)),t.count}function Ma(e,t,n){let r=new Blob([e],{type:n}),i=document.createElement(`a`);i.href=URL.createObjectURL(r),i.download=t,i.click(),URL.revokeObjectURL(i.href)}var Na=[`sector`,`industry`,`minChange`,`maxChange`,`minVolume`,`minMarketCap`,`search`,`signal`,`pattern`,`prediction`,`minRsi`,`maxRsi`,`minPe`,`maxPe`,`minPeg`,`maxPeg`,`minDivYield`,`aboveSma50`,`aboveSma200`,`formula`];function Pa(){let e=location.hash.slice(1),t=e.indexOf(`?`);if(t===-1)return null;let n=new URLSearchParams(e.slice(t+1)),r={};for(let e of Na){let t=n.get(e);t!=null&&(r[e]=t)}return Object.keys(r).length?r:null}function Fa(e){let t=location.hash.slice(1).split(`?`)[0]||`/`;if(t!==`/screener`&&t!==`/map`)return;let n=new URLSearchParams;for(let t of Na)e[t]&&n.set(t,e[t]);let r=n.toString(),i=r?`#${t}?${r}`:`#${t}`;location.hash!==i&&history.replaceState(null,``,i)}function Ia(){let e=Pa();e&&Sn(e,{preset:`custom`})}function La(e){let t=new URLSearchParams;for(let n of Na)e[n]&&t.set(n,e[n]);let n=t.toString(),r=location.origin+location.pathname;return n?`${r}#/screener?${n}`:`${r}#/screener`}function Ra(e,t=200){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var za=[{id:`rsi`,label:`RSI`,type:`number`},{id:`changePct`,label:`Change %`,type:`number`},{id:`pe`,label:`P/E`,type:`number`},{id:`peg`,label:`PEG`,type:`number`},{id:`relVolume`,label:`Rel Volume`,type:`number`},{id:`predConf`,label:`Pred Confidence`,type:`number`},{id:`volume`,label:`Volume`,type:`number`},{id:`marketCap`,label:`Market Cap`,type:`number`}],Ba=[`<`,`>`,`<=`,`>=`,`==`,`!=`];function Va(e,{current:t=``,onApply:n}){let r=`rsi`,i=`<`,a=`35`,o=`and`;function s(){return`${r} ${i} ${a}`}function c(){e.innerHTML=`
      <div class="formula-builder panel">
        <h4 class="panel-title">Visual Formula Builder</h4>
        <div class="fb-row">
          <select id="fb-field">${za.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}</select>
          <select id="fb-op">${Ba.map(e=>`<option value="${e}">${e}</option>`).join(``)}</select>
          <input type="text" id="fb-val" value="${a}" />
          <select id="fb-conn"><option value="and">AND</option><option value="or">OR</option></select>
        </div>
        <div class="fb-preview">
          <code id="fb-out">${t||s()}</code>
        </div>
        <div class="fb-actions">
          <button type="button" class="btn-secondary" id="fb-append">Append</button>
          <button type="button" class="btn-primary" id="fb-apply">Apply Formula</button>
        </div>
      </div>
    `,e.querySelector(`#fb-field`).value=r,e.querySelector(`#fb-op`).value=i;let c=e.querySelector(`#fb-out`),l=()=>{r=e.querySelector(`#fb-field`).value,i=e.querySelector(`#fb-op`).value,a=e.querySelector(`#fb-val`).value,o=e.querySelector(`#fb-conn`).value,c.textContent=s()};e.querySelectorAll(`select, input`).forEach(e=>e.addEventListener(`change`,l)),e.querySelector(`#fb-val`)?.addEventListener(`input`,l),e.querySelector(`#fb-append`)?.addEventListener(`click`,()=>{let e=s(),n=c.textContent&&c.textContent!==s()?c.textContent:t||``;c.textContent=n?`${n} ${o} ${e}`:e}),e.querySelector(`#fb-apply`)?.addEventListener(`click`,()=>{n?.(c.textContent)})}c()}function Ha(t){let n=xn(),r=Tn(),i=wn(),a=rr(),o=B(),s=Ga(Ca(o,n),r);Fa(n),t.innerHTML=`
    <div class="page-header screener-header">
      <div>
        <h1>Stock Screener</h1>
        <p class="page-sub">Filter and sort ${o.size} symbols — Finviz-style customizable view.</p>
      </div>
      <div class="screener-actions">
        <button type="button" class="btn-secondary" id="export-csv">Export CSV</button>
        <button type="button" class="btn-secondary" id="export-full">Full TA CSV</button>
        <a href="#/export" class="btn-secondary">Export API</a>
        <button type="button" class="btn-secondary" id="share-screener">Copy Link</button>
        <span class="result-count">${s.length} results</span>
      </div>
    </div>

    <div class="preset-bar">
      ${sa.map(e=>`
        <button type="button" class="preset-chip ${i===e.id?`active`:``}" data-preset="${e.id}">
          ${e.label}
        </button>
      `).join(``)}
    </div>

    <div class="screener-tabs">
      <button type="button" class="screener-tab active" data-tab="all">All</button>
      <button type="button" class="screener-tab" data-tab="desc">Descriptive</button>
      <button type="button" class="screener-tab" data-tab="fund">Fundamental</button>
      <button type="button" class="screener-tab" data-tab="tech">Technical</button>
      <button type="button" class="screener-tab" data-tab="signals">Signals</button>
      <button type="button" class="screener-tab" data-tab="formula">Formula</button>
    </div>

    <form class="filter-bar" id="filter-form">
      <div class="filter-panel" data-panel="all">
        <div class="filter-group"><label>Search</label><input type="search" name="search" placeholder="Symbol…" value="${X(n.search)}" /></div>
      </div>
      <div class="filter-panel" data-panel="desc" hidden>
        <div class="filter-group"><label>Sector</label><select name="sector"><option value="">Any</option>${e.map(e=>`<option value="${e}" ${n.sector===e?`selected`:``}>${e}</option>`).join(``)}</select></div>
        <div class="filter-group"><label>Min %</label><input type="number" name="minChange" step="0.1" value="${X(n.minChange)}" /></div>
        <div class="filter-group"><label>Max %</label><input type="number" name="maxChange" step="0.1" value="${X(n.maxChange)}" /></div>
        <div class="filter-group"><label>Min Vol</label><input type="number" name="minVolume" value="${X(n.minVolume)}" /></div>
        <div class="filter-group"><label>Min MCap</label><select name="minMarketCap"><option value="">Any</option><option value="10000000000" ${n.minMarketCap===`10000000000`?`selected`:``}>$10B+</option><option value="50000000000" ${n.minMarketCap===`50000000000`?`selected`:``}>$50B+</option><option value="100000000000" ${n.minMarketCap===`100000000000`?`selected`:``}>$100B+</option></select></div>
      </div>
      <div class="filter-panel" data-panel="fund" hidden>
        <div class="filter-group"><label>Min P/E</label><input type="number" name="minPe" step="0.1" value="${X(n.minPe)}" /></div>
        <div class="filter-group"><label>Max P/E</label><input type="number" name="maxPe" step="0.1" value="${X(n.maxPe)}" /></div>
        <div class="filter-group"><label>Min PEG</label><input type="number" name="minPeg" step="0.1" value="${X(n.minPeg)}" /></div>
        <div class="filter-group"><label>Max PEG</label><input type="number" name="maxPeg" step="0.1" value="${X(n.maxPeg)}" /></div>
        <div class="filter-group"><label>Min Div %</label><input type="number" name="minDivYield" step="0.1" value="${X(n.minDivYield)}" /></div>
      </div>
      <div class="filter-panel" data-panel="tech" hidden>
        <div class="filter-group"><label>Min RSI</label><input type="number" name="minRsi" value="${X(n.minRsi)}" /></div>
        <div class="filter-group"><label>Max RSI</label><input type="number" name="maxRsi" value="${X(n.maxRsi)}" /></div>
        <div class="filter-group"><label>Above SMA50</label><select name="aboveSma50"><option value="">Any</option><option value="yes" ${n.aboveSma50===`yes`?`selected`:``}>Yes</option><option value="no" ${n.aboveSma50===`no`?`selected`:``}>No</option></select></div>
        <div class="filter-group"><label>Above SMA200</label><select name="aboveSma200"><option value="">Any</option><option value="yes" ${n.aboveSma200===`yes`?`selected`:``}>Yes</option><option value="no" ${n.aboveSma200===`no`?`selected`:``}>No</option></select></div>
        <div class="filter-group"><label>Prediction</label><select name="prediction"><option value="">Any</option><option value="bullish" ${n.prediction===`bullish`?`selected`:``}>Bullish</option><option value="bearish" ${n.prediction===`bearish`?`selected`:``}>Bearish</option><option value="neutral" ${n.prediction===`neutral`?`selected`:``}>Neutral</option></select></div>
      </div>
      <div class="filter-panel" data-panel="signals" hidden>
        <div class="filter-group"><label>Signal</label><select name="signal"><option value="">Any</option>${Ii.map(e=>`<option value="${e.id}" ${n.signal===e.id?`selected`:``}>${e.label}</option>`).join(``)}</select></div>
        <div class="filter-group"><label>Pattern</label><select name="pattern"><option value="">Any</option>${Li.map(e=>`<option value="${e.id}" ${n.pattern===e.id?`selected`:``}>${e.label}</option>`).join(``)}</select></div>
      </div>
      <div class="filter-panel" data-panel="formula" hidden>
        <div class="filter-group formula-group">
          <label>Custom Formula</label>
          <input type="text" name="formula" id="formula-input" placeholder="rsi < 35 and changePct > 0" value="${X(n.formula)}" />
          <span class="formula-status ${da(n.formula).valid?`ok`:n.formula?`err`:``}" id="formula-status">
            ${n.formula&&!da(n.formula).valid?da(n.formula).error:`Fields: price, changePct, rsi, pe, relVolume, sma20, predConf…`}
          </span>
        </div>
        <div class="formula-examples">
          ${Sa.map(e=>`<button type="button" class="preset-chip formula-chip" data-formula="${X(e.formula)}">${e.label}</button>`).join(``)}
        </div>
        <div id="formula-builder-host"></div>
      </div>
      <button type="button" class="btn-ghost" id="reset-filters">Reset</button>
      <button type="button" class="btn-ghost" id="save-filter">Save</button>
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

    <div class="table-wrap screener-scroll">
      <table class="data-table screener-table" id="screener-table">
        <thead>
          <tr>
            <th class="col-star"></th>
            ${Y(`symbol`,`Ticker`,r)}
            ${Y(`name`,`Company`,r)}
            <th>Trend</th>
            ${Y(`sector`,`Sector`,r)}
            ${Y(`price`,`Price`,r)}
            ${Y(`changePct`,`Change %`,r)}
            <th>Signal</th><th>Pattern</th>
            ${Y(`ta.rsi`,`RSI`,r)}
            ${Y(`fundamentals.pe`,`P/E`,r)}
            ${Y(`fundamentals.peg`,`PEG`,r)}
            ${Y(`fundamentals.eps`,`EPS`,r)}
            ${Y(`fundamentals.ps`,`P/S`,r)}
            ${Y(`fundamentals.dividendYield`,`Div %`,r)}
            ${Y(`fundamentals.beta`,`Beta`,r)}
            <th>Prediction</th>
            ${Y(`volume`,`Volume`,r)}
            ${Y(`marketCap`,`Market Cap`,r)}
          </tr>
        </thead>
        <tbody>
          ${s.length?s.map(Ua).join(``):`<tr><td colspan="18" class="empty-row">No matches — adjust filters</td></tr>`}
        </tbody>
      </table>
    </div>
  `;let c=t.querySelector(`#filter-form`),l=Ra(()=>{let e=new FormData(c);Sn(Object.fromEntries(e.entries()),{preset:`custom`})},180);c.addEventListener(`input`,l),c.addEventListener(`change`,()=>{let e=new FormData(c);Sn(Object.fromEntries(e.entries()),{preset:`custom`})}),t.querySelector(`#reset-filters`)?.addEventListener(`click`,ur),t.querySelector(`#save-filter`)?.addEventListener(`click`,()=>{let e=prompt(`Name this filter preset:`);e?.trim()&&ir(e.trim())}),t.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=sa.find(t=>t.id===e.dataset.preset);t&&Cn(t.id,t.filters)})}),t.querySelectorAll(`[data-saved]`).forEach(e=>{e.addEventListener(`click`,()=>or(e.dataset.saved))}),t.querySelectorAll(`[data-del]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),ar(e.dataset.del)})}),t.querySelector(`#export-csv`)?.addEventListener(`click`,()=>Oa(s)),t.querySelector(`#export-full`)?.addEventListener(`click`,()=>Oa(s,`stockviz-screener-ta.csv`,!0)),t.querySelector(`#share-screener`)?.addEventListener(`click`,async()=>{let e=La(n);try{await navigator.clipboard.writeText(e);let n=t.querySelector(`#share-screener`),r=n.textContent;n.textContent=`Copied!`,setTimeout(()=>{n.textContent=r},2e3)}catch{prompt(`Copy this link:`,e)}}),t.querySelectorAll(`th[data-sort]`).forEach(e=>{e.addEventListener(`click`,()=>En(e.dataset.sort))}),t.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),t.querySelectorAll(`.screener-tab`).forEach(e=>{e.addEventListener(`click`,()=>{t.querySelectorAll(`.screener-tab`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let n=e.dataset.tab;t.querySelectorAll(`.filter-panel`).forEach(e=>{e.hidden=e.dataset.panel!==n})})}),t.querySelectorAll(`[data-fav]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=Nn(e.dataset.fav);e.textContent=n?`★`:`☆`,e.classList.toggle(`starred`,n)})});let u=t.querySelector(`#formula-builder-host`);u&&Va(u,{current:n.formula,onApply:e=>{let n=t.querySelector(`#formula-input`);n&&(n.value=e),Sn({formula:e},{preset:`custom`})}}),t.querySelectorAll(`[data-formula]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=t.querySelector(`#formula-input`);n&&(n.value=e.dataset.formula,Sn({formula:e.dataset.formula},{preset:`custom`}))})})}function Y(e,t,n){return`<th data-sort="${e}" class="sortable">${t}${n.key===e?n.dir===`asc`?` ▲`:` ▼`:``}</th>`}function Ua(e){let t=Pn(e.symbol);return`
    <tr class="clickable" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
      <td class="col-star">
        <button class="star-btn ${t?`starred`:``}" data-fav="${e.symbol}" aria-label="Favorite">${t?`★`:`☆`}</button>
      </td>
      <td class="sym">${e.symbol}</td>
      <td class="name-cell">${e.name||`—`}</td>
      <td>${xr(e.symbol)}</td>
      <td class="sector-cell">${e.sector||`—`}</td>
      <td data-live="price">$${U(e.price)}</td>
      <td class="${G(e.changePct)}" data-live="pct">${W(e.changePct)}</td>
      <td class="signal-tag">${e.primarySignal||`—`}</td>
      <td class="pattern-label">${e.patternLabels?.[0]||`—`}</td>
      <td class="${(e.ta?.rsi??50)>70?`neg`:(e.ta?.rsi??50)<30?`pos`:``}">${e.ta?.rsi?.toFixed(1)??`—`}</td>
      <td>${e.fundamentals?.pe??`—`}</td>
      <td>${e.fundamentals?.peg??`—`}</td>
      <td>${e.fundamentals?.eps==null?`—`:e.fundamentals.eps.toFixed(2)}</td>
      <td>${e.fundamentals?.ps??`—`}</td>
      <td>${e.fundamentals?.dividendYield==null?`—`:`${e.fundamentals.dividendYield}%`}</td>
      <td>${e.fundamentals?.beta??`—`}</td>
      <td class="${e.prediction?.direction===`bullish`?`pos`:e.prediction?.direction===`bearish`?`neg`:``}">${e.prediction?`${e.prediction.direction} ${e.prediction.confidence}%`:`—`}</td>
      <td>${gr(e.volume)}</td>
      <td>${_r(e.marketCap)}</td>
    </tr>
  `}function Wa(e,t){return t.includes(`.`)?t.split(`.`).reduce((e,t)=>e?.[t],e):e[t]}function Ga(e,{key:t,dir:n}){let r=n===`asc`?1:-1;return[...e].sort((e,n)=>{let i=Wa(e,t)??``,a=Wa(n,t)??``;return typeof i==`number`&&typeof a==`number`?(i-a)*r:String(i).localeCompare(String(a))*r})}function X(e){return String(e??``).replace(/"/g,`&quot;`)}function Ka(e){let t=Ca(B(),xn());e.innerHTML=`
    <div class="page-header">
      <h1>Market Heat Map</h1>
      <p class="page-sub">Sector treemap sized by market cap, colored by daily change. Uses screener filters.</p>
    </div>
    <div id="heatmap-root" class="heatmap-root"></div>
  `,Di(e.querySelector(`#heatmap-root`),t,e=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))})}async function qa(e){e.innerHTML=`
    <div class="page-header">
      <h1>Market News</h1>
      <p class="page-sub">Latest headlines from your data feed.</p>
    </div>
    <div class="news-loading panel">Loading news…</div>
  `;let t=await Kt(z()),n=e.querySelector(`.news-loading`);n&&(n.className=`news-list panel`,n.innerHTML=t.length?t.map(Ja).join(``):`<p class="muted">No news available.</p>`,n.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}))}function Ja(e){let t=e.datetime?new Date(e.datetime*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):``,n=e.related?.split(`,`)[0]||e.symbol;return`
    <article class="news-item">
      <div class="news-meta">
        <span class="news-source">${e.source||`News`}</span>
        <span class="news-date">${t}</span>
        ${n?`<button class="news-symbol" data-symbol="${n}">${n}</button>`:``}
      </div>
      <a class="news-headline" href="${e.url||`#`}" target="_blank" rel="noopener">${e.headline||e.title||`Untitled`}</a>
      ${e.summary?`<p class="news-summary">${e.summary}</p>`:``}
    </article>
  `}function Ya(e){let t=Fn(),n=B(),r=0,i=0,a=t.map(e=>{let t=n.get(e.symbol),a=t?.price??0,o=a*e.shares,s=e.costBasis*e.shares,c=o-s,l=s?c/s*100:0;return r+=o,i+=s,{...e,q:t,price:a,value:o,cost:s,pl:c,plPct:l}}),o=r-i,s=i?o/i*100:0;e.innerHTML=`
    <div class="page-header">
      <h1>Portfolio</h1>
      <p class="page-sub">Track holdings, cost basis, and live P&amp;L.</p>
    </div>

    <div class="portfolio-summary">
      <div class="summary-card">
        <span class="summary-label">Total Value</span>
        <span class="summary-value">$${U(r)}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Total Cost</span>
        <span class="summary-value">$${U(i)}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">P&amp;L</span>
        <span class="summary-value ${G(o)}">${o>=0?`+`:`-`}$${U(Math.abs(o))} (${W(s)})</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Holdings</span>
        <span class="summary-value">${t.length}</span>
      </div>
    </div>

    <form class="portfolio-form panel" id="add-holding">
      <h2 class="panel-title">Add Holding</h2>
      <div class="form-row">
        <div class="filter-group">
          <label>Symbol</label>
          <input list="symbol-list" name="symbol" placeholder="AAPL" required />
          <datalist id="symbol-list">${E().map(e=>`<option value="${e.symbol}">`).join(``)}</datalist>
        </div>
        <div class="filter-group">
          <label>Shares</label>
          <input type="number" name="shares" min="0.01" step="0.01" placeholder="10" required />
        </div>
        <div class="filter-group">
          <label>Cost / Share</label>
          <input type="number" name="costBasis" min="0.01" step="0.01" placeholder="150.00" required />
        </div>
        <button type="submit" class="btn-primary">Add</button>
      </div>
    </form>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Symbol</th><th>Shares</th><th>Avg Cost</th><th>Price</th>
            <th>Value</th><th>P&amp;L</th><th>P&amp;L %</th><th></th>
          </tr>
        </thead>
        <tbody>
          ${a.length?a.map(Xa).join(``):`<tr><td colspan="8" class="empty-row">No holdings yet — add your first position above.</td></tr>`}
        </tbody>
      </table>
    </div>
  `,e.querySelector(`#add-holding`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(e.target),n=t.get(`symbol`).toString().trim().toUpperCase();if(!Ne(n)){H(`Symbol not in universe`,`error`);return}In({symbol:n,shares:t.get(`shares`),costBasis:t.get(`costBasis`)}),H(`Added ${n}`,`success`),e.target.reset()}),e.querySelectorAll(`[data-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{Ln(e.dataset.remove),H(`Removed ${e.dataset.remove}`,`info`)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Xa(e){return`
    <tr data-live-symbol="${e.symbol}">
      <td class="sym clickable" data-symbol="${e.symbol}">${e.symbol}</td>
      <td>${e.shares}</td>
      <td>$${U(e.costBasis)}</td>
      <td data-live="price">$${U(e.price)}</td>
      <td>$${U(e.value)}</td>
      <td class="${G(e.pl)}">${e.pl>=0?`+`:``}$${U(Math.abs(e.pl))}</td>
      <td class="${G(e.plPct)}">${W(e.plPct)}</td>
      <td><button class="btn-ghost btn-sm" data-remove="${e.symbol}">Remove</button></td>
    </tr>
  `}var Za=[{key:`price`,label:`Price`,fmt:e=>`$${U(e.price)}`},{key:`changePct`,label:`Change %`,fmt:e=>W(e.changePct),cls:e=>G(e.changePct)},{key:`volume`,label:`Volume`,fmt:e=>gr(e.volume)},{key:`marketCap`,label:`Market Cap`,fmt:e=>_r(e.marketCap)},{key:`pe`,label:`P/E (TTM)`,fmt:e=>e.fundamentals?.pe??`—`},{key:`peg`,label:`PEG`,fmt:e=>e.fundamentals?.peg??`—`},{key:`eps`,label:`EPS`,fmt:e=>e.fundamentals?.eps==null?`—`:e.fundamentals.eps.toFixed(2)},{key:`ps`,label:`P/S`,fmt:e=>e.fundamentals?.ps??`—`},{key:`pb`,label:`P/B`,fmt:e=>e.fundamentals?.pb??`—`},{key:`div`,label:`Div Yield`,fmt:e=>e.fundamentals?.dividendYield==null?`—`:`${e.fundamentals.dividendYield}%`},{key:`beta`,label:`Beta`,fmt:e=>e.fundamentals?.beta??`—`},{key:`rsi`,label:`RSI`,fmt:e=>e.ta?.rsi?.toFixed(1)??`—`},{key:`prediction`,label:`Prediction`,fmt:e=>e.prediction?`${e.prediction.direction} ${e.prediction.confidence}%`:`—`,cls:e=>e.prediction?.direction===`bullish`?`pos`:e.prediction?.direction===`bearish`?`neg`:``},{key:`sector`,label:`Sector`,fmt:e=>e.sector||`—`}];function Qa(e){let t=Hn(),n=B();e.innerHTML=`
    <div class="page-header compare-header">
      <div>
        <h1>Compare Stocks</h1>
        <p class="page-sub">Select up to 4 tickers side-by-side. Click chips below or use <kbd>/</kbd> search.</p>
      </div>
      ${t.length?`<button class="btn-ghost" id="clear-compare">Clear All</button>`:``}
    </div>

    <div class="compare-picker panel">
      <span class="picker-label">Quick add:</span>
      <div class="preset-bar">
        ${[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`,`JPM`].map(e=>`
          <button type="button" class="preset-chip ${t.includes(e)?`active`:``}" data-add="${e}">${e}</button>
        `).join(``)}
      </div>
    </div>

    ${t.length?$a(t,n):`
      <div class="empty-compare panel">
        <p>No stocks selected. Press <kbd>/</kbd> or <kbd>Ctrl+K</kbd> to search, or click a ticker above.</p>
      </div>
    `}
  `,e.querySelector(`#clear-compare`)?.addEventListener(`click`,Wn),e.querySelectorAll(`[data-add]`).forEach(e=>{e.addEventListener(`click`,()=>Un(e.dataset.add))}),e.querySelectorAll(`[data-rm]`).forEach(e=>{e.addEventListener(`click`,()=>Un(e.dataset.rm))}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),e.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=n.get(e.dataset.spark);t?.sparkline?.length&&br(e,t.sparkline,{width:120,height:40})})}function $a(e,t){let n=e.map(e=>{let n=Ne(e);return{sym:e,q:t.get(e),meta:n}});return`
    <div class="compare-grid">
      ${n.map(({sym:e,q:t,meta:n})=>`
        <div class="compare-card panel" data-live-symbol="${e}">
          <div class="compare-card-head">
            <button class="sym compare-sym" data-symbol="${e}">${e}</button>
            <button type="button" class="compare-remove" data-rm="${e}" title="Remove">&times;</button>
          </div>
          <p class="compare-name">${n?.name||t?.name||``}</p>
          ${xr(e).replace(`width="72" height="24"`,`width="120" height="40"`)}
          <div class="compare-price ${G(t?.changePct)}">
            <span data-live="price">$${U(t?.price)}</span>
            <span data-live="pct">${W(t?.changePct)}</span>
          </div>
        </div>
      `).join(``)}
    </div>
    <div class="table-wrap">
      <table class="data-table compare-table">
        <thead>
          <tr><th>Metric</th>${e.map(e=>`<th class="sym">${e}</th>`).join(``)}</tr>
        </thead>
        <tbody>
          ${Za.map(e=>`
            <tr>
              <td>${e.label}</td>
              ${n.map(({q:t})=>`
                <td class="${e.cls?.(t)||``}">${t?e.fmt(t):`—`}</td>
              `).join(``)}
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `}function eo(e){let t=[...B().values()];e.innerHTML=`
    <div class="page-header">
      <h1>Technical Signals</h1>
      <p class="page-sub">Finviz-style TA signals — click any ticker for prediction details.</p>
    </div>
    <div class="signals-grid">
      ${Ii.map(e=>{let n=t.filter(t=>t.signals?.some(t=>t.id===e.id)).sort((e,t)=>Math.abs(t.changePct)-Math.abs(e.changePct)).slice(0,8);return`
          <section class="panel signal-panel">
            <h2 class="panel-title signal-title">
              <a href="#/screener?signal=${e.id}" class="signal-link">${e.label}</a>
              <span class="signal-count">${n.length}</span>
            </h2>
            <table class="data-table compact finviz-tbl">
              <thead><tr><th>Ticker</th><th>Last</th><th>Change</th><th>Signal</th></tr></thead>
              <tbody>
                ${n.length?n.map(t=>`
                  <tr class="clickable" data-symbol="${t.symbol}">
                    <td class="sym">${t.symbol}</td>
                    <td>$${U(t.price)}</td>
                    <td class="${G(t.changePct)}">${W(t.changePct)}</td>
                    <td class="signal-tag">${e.label}</td>
                  </tr>
                `).join(``):`<tr><td colspan="4" class="empty-row">None detected</td></tr>`}
              </tbody>
            </table>
          </section>
        `}).join(``)}
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function to(e){let t=[...B().values()],n=t.flatMap(e=>(e.patterns||[]).map(t=>({...e,pattern:t}))).sort((e,t)=>t.pattern.confidence-e.pattern.confidence);e.innerHTML=`
    <div class="page-header">
      <h1>Pattern Scanner</h1>
      <p class="page-sub">Chart pattern detection with confidence scores and directional bias.</p>
    </div>

    <div class="pattern-summary panel">
      <span><strong>${n.length}</strong> patterns detected across ${t.filter(e=>e.patterns?.length).length} stocks</span>
      <div class="preset-bar">
        ${Li.slice(0,8).map(e=>{let n=t.filter(t=>t.patterns?.some(t=>t.id===e.id)).length;return`<a href="#/screener?pattern=${e.id}" class="preset-chip">${e.label} (${n})</a>`}).join(``)}
      </div>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th>Ticker</th><th>Company</th><th>Price</th><th>Change %</th>
            <th>Pattern</th><th>Bias</th><th>Confidence</th>
            <th>Prediction</th><th>Target</th>
          </tr>
        </thead>
        <tbody>
          ${n.slice(0,80).map(({symbol:e,name:t,price:n,changePct:r,pattern:i,prediction:a})=>`
            <tr class="clickable" data-symbol="${e}">
              <td class="sym">${e}</td>
              <td class="name-cell">${t||`—`}</td>
              <td>$${U(n)}</td>
              <td class="${G(r)}">${W(r)}</td>
              <td class="pattern-label">${i.label}</td>
              <td class="${i.bias===`bullish`?`pos`:`neg`}">${i.bias}</td>
              <td>
                <div class="conf-bar"><div class="conf-fill" style="width:${i.confidence}%"></div></div>
                ${i.confidence}%
              </td>
              <td class="${G(a?.score)}">${a?.direction||`—`} (${a?.confidence||0}%)</td>
              <td>$${U(a?.priceTarget)}</td>
            </tr>
          `).join(``)||`<tr><td colspan="9" class="empty-row">Scanning… refresh to detect patterns.</td></tr>`}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function no(t){let n=[...B().values()];t.innerHTML=`
    <div class="page-header">
      <h1>Groups</h1>
      <p class="page-sub">Sector performance rankings — Finviz Groups view.</p>
    </div>
    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th>Sector</th><th>Stocks</th><th>Avg Change</th><th>Bullish %</th>
            <th>Top</th><th>Worst</th><th></th>
          </tr>
        </thead>
        <tbody>
          ${e.map(e=>{let t=n.filter(t=>t.sector===e),r=t.length?t.reduce((e,t)=>e+t.changePct,0)/t.length:0,i=t.filter(e=>e.prediction?.direction===`bullish`).length,a=[...t].sort((e,t)=>t.changePct-e.changePct)[0],o=[...t].sort((e,t)=>e.changePct-t.changePct)[0];return{sector:e,count:t.length,avg:r,bullish:i,top:a,bottom:o,stocks:t}}).filter(e=>e.count>0).sort((e,t)=>t.avg-e.avg).map(e=>`
            <tr>
              <td><a href="#/screener?sector=${encodeURIComponent(e.sector)}" class="sym">${e.sector}</a></td>
              <td>${e.count}</td>
              <td class="${G(e.avg)}">${W(e.avg)}</td>
              <td>${e.count?Math.round(e.bullish/e.count*100):0}%</td>
              <td class="sym">${e.top?`${e.top.symbol} ${W(e.top.changePct)}`:`—`}</td>
              <td class="sym">${e.bottom?`${e.bottom.symbol} ${W(e.bottom.changePct)}`:`—`}</td>
              <td><a href="#/map" class="btn-ghost btn-sm">Map</a></td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `}var ro=`AAPL`,Z={overlays:{sma20:!0,sma50:!0,sma200:!1,bollinger:!1},showVolume:!0,showRsi:!0};function io(e){let t=B(),n=t.get(ro)||t.get(`AAPL`);e.innerHTML=`
    <div class="page-header charts-header">
      <h1>Advanced Charts</h1>
      <select id="chart-symbol" class="chart-select">
        ${E().map(e=>`<option value="${e.symbol}" ${e.symbol===ro?`selected`:``}>${e.symbol} — ${e.name}</option>`).join(``)}
      </select>
    </div>
    ${n?`
      <div class="chart-page panel">
        <div class="chart-page-head">
          <div>
            <span class="chart-page-sym">${n.symbol}</span>
            <span class="chart-page-name">${n.name}</span>
          </div>
          <div class="chart-page-price ${G(n.changePct)}">
            $${U(n.price)} ${W(n.changePct)}
          </div>
        </div>
        <div class="chart-overlay-bar">
          <label><input type="checkbox" data-ov="sma20" ${Z.overlays.sma20?`checked`:``} /> SMA20</label>
          <label><input type="checkbox" data-ov="sma50" ${Z.overlays.sma50?`checked`:``} /> SMA50</label>
          <label><input type="checkbox" data-ov="sma200" ${Z.overlays.sma200?`checked`:``} /> SMA200</label>
          <label><input type="checkbox" data-ov="bollinger" ${Z.overlays.bollinger?`checked`:``} /> Bollinger</label>
          <label><input type="checkbox" data-vol ${Z.showVolume?`checked`:``} /> Volume</label>
          <label><input type="checkbox" data-rsi ${Z.showRsi?`checked`:``} /> RSI</label>
        </div>
        <div id="full-chart" class="full-chart-host"></div>
        ${n.prediction?`
          <div class="chart-prediction">
            <span class="pred-badge ${n.prediction.direction}">${n.prediction.direction.toUpperCase()}</span>
            <span>${n.prediction.confidence}% confidence · Target $${U(n.prediction.priceTarget)} (${n.prediction.targetPct>=0?`+`:``}${n.prediction.targetPct}%) · ${n.prediction.horizon}</span>
          </div>
        `:``}
        ${n.patterns?.length?`
          <div class="chart-patterns">
            <strong>Patterns:</strong> ${n.patterns.map(e=>`${e.label} (${e.confidence}%)`).join(` · `)}
          </div>
        `:``}
      </div>
    `:`<p class="muted">Loading…</p>`}
  `;let r=()=>{let t=e.querySelector(`#full-chart`);t&&n?.candles&&Xr(t,n.candles,{height:320,...Z})};r();let i=e.querySelector(`#full-chart`);i&&new ResizeObserver(r).observe(i),e.querySelector(`#chart-symbol`)?.addEventListener(`change`,t=>{ro=t.target.value,io(e)}),e.querySelectorAll(`[data-ov]`).forEach(e=>{e.addEventListener(`change`,()=>{Z.overlays[e.dataset.ov]=e.checked,r()})}),e.querySelector(`[data-vol]`)?.addEventListener(`change`,e=>{Z.showVolume=e.target.checked,r()}),e.querySelector(`[data-rsi]`)?.addEventListener(`change`,e=>{Z.showRsi=e.target.checked,r()})}function ao(e,t,n){return`
    <section class="panel">
      <h2 class="panel-title">${e}</h2>
      <table class="data-table compact finviz-tbl">
        <thead><tr>${n.map(e=>`<th>${e}</th>`).join(``)}</tr></thead>
        <tbody>
          ${t.map(e=>`
            <tr>
              <td class="sym">${e.name||e.pair}</td>
              <td>${typeof e.last==`number`&&e.last>1e3?e.last.toLocaleString():U(e.last)}</td>
              <td class="${G(e.change)}">${e.change>=0?`+`:``}${U(e.change)}</td>
              <td class="${G(e.changePct)}">${W(e.changePct)}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </section>
  `}async function oo(e){let t=await Jt(z()).catch(()=>null),n=t?.futures?.length?t.futures:Ai,r=t?.forex?.length?t.forex:ji,i=t?.bonds?.length?t.bonds:Mi;e.innerHTML=`
    <div class="page-header">
      <h1>Futures &amp; Forex</h1>
      ${t?.futures?.length?`<p class="page-sub">Live data from Financial Modeling Prep.</p>`:`<p class="page-sub">Simulated data — add an FMP API key in Settings for live futures and forex.</p>`}
    </div>
    <div class="three-col">
      ${ao(`Futures`,n,[`Contract`,`Last`,`Change`,`Change %`])}
      ${ao(`Forex & Crypto`,r,[`Pair`,`Last`,`Change`,`Change %`])}
      ${ao(`Bonds`,i,[`Bond`,`Yield`,`Change`,`Change %`])}
    </div>
  `}async function so(e){let t=await Jt(z()).catch(()=>null),n=t?.earnings?.length?t.earnings:Pi,r=t?.economic?.length?t.economic:Fi;e.innerHTML=`
    <div class="page-header">
      <h1>Economic &amp; Earnings Calendar</h1>
      ${t?.earnings?.length?`<p class="page-sub">Live data from Financial Modeling Prep.</p>`:`<p class="page-sub">Simulated data — add an FMP API key in Settings for live calendars.</p>`}
    </div>
    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">Earnings</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Symbol</th><th>Date</th><th>EPS Est.</th><th>Cap</th></tr></thead>
          <tbody>
            ${n.map(e=>`
              <tr class="clickable" data-symbol="${e.symbol}">
                <td class="sym">${e.symbol}</td>
                <td>${e.date}</td>
                <td>$${U(e.epsEst)}</td>
                <td>${e.cap}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </section>
      <section class="panel">
        <h2 class="panel-title">Economic Events</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Date</th><th>Time</th><th>Impact</th><th>Event</th><th>Expected</th></tr></thead>
          <tbody>
            ${r.map(e=>`
              <tr>
                <td>${e.date}</td>
                <td>${e.time}</td>
                <td><span class="impact impact-${e.impact}">${e.impact}</span></td>
                <td>${e.event}</td>
                <td>${e.expected}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </section>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}async function co(e){let t=await Jt(z()).catch(()=>null),n=t?.insider?.length?t.insider:Ni;e.innerHTML=`
    <div class="page-header">
      <h1>Insider Trading</h1>
      <p class="page-sub">${t?.insider?.length?`Live insider transactions from Financial Modeling Prep.`:`Simulated data — add an FMP API key in Settings for live insider trades.`}</p>
    </div>
    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr><th>Ticker</th><th>Insider</th><th>Relationship</th><th>Date</th><th>Transaction</th><th>Cost</th><th>#Shares</th><th>Value ($)</th></tr>
        </thead>
        <tbody>
          ${n.map(e=>`
            <tr class="clickable" data-symbol="${e.symbol}">
              <td class="sym">${e.symbol}</td>
              <td>${e.insider}</td>
              <td>${e.relation}</td>
              <td>${e.date}</td>
              <td class="${e.type===`Buy`?`pos`:`neg`}">${e.type}</td>
              <td>$${e.cost}</td>
              <td>${e.shares.toLocaleString()}</td>
              <td>$${e.value.toLocaleString()}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function lo(){return`Notification`in window}function uo(){return lo()?Notification.permission:`unsupported`}async function fo(){return lo()?Notification.permission===`granted`?`granted`:Notification.permission===`denied`?`denied`:await Notification.requestPermission():`unsupported`}function po({title:e,body:t,tag:n}){if(!lo()||Notification.permission!==`granted`)return!1;try{return new Notification(e,{body:t,tag:n||`stockviz-alert`,icon:`/favicon.svg`,silent:!1}),!0}catch{return!1}}async function Q(e,t){let n=Date.now();try{let r=await t(),i=r!=null&&(!Array.isArray(r)||r.length>0);return{name:e,ok:i,ms:Date.now()-n,detail:i?`Live`:`Empty response`}}catch(t){return{name:e,ok:!1,ms:Date.now()-n,detail:t.message||`Failed`}}}async function mo(e){let t=e?.trim();if(!t)return{valid:!1,results:[],message:`No FMP API key`};let n=await Promise.all([Q(`Stock Quote`,()=>p(`AAPL`,t)),Q(`Batch Quotes`,()=>f([`AAPL`,`MSFT`],t).then(e=>[...e.values()])),Q(`S&P 500 List`,()=>xe(t)),Q(`Ratios TTM`,()=>h(`AAPL`,t)),Q(`General News`,()=>y(t,3)),Q(`Earnings Calendar`,()=>S(t)),Q(`Insider Trades`,()=>T(t,5)),Q(`Analyst Grades`,()=>ue(`AAPL`,t)),Q(`Short Interest`,()=>me(`AAPL`,t)),Q(`Options Chain`,()=>ge(`AAPL`,t)),Q(`Financials`,()=>ve(`AAPL`,t)),Q(`SEC Filings`,()=>be(`AAPL`,t)),Q(`Dividend Calendar`,()=>Se(t)),Q(`After-Hours Quote`,()=>Ce(`AAPL`,t))]),r=n.filter(e=>e.ok).length;return{valid:r>0,live:r,total:n.length,results:n,message:`${r}/${n.length} endpoints returned live data`}}var ho=1;function go(){let e=[`stockviz-settings`,`stockviz-favorites`,`stockviz-portfolio`,`stockviz-alerts`,`stockviz-saved-filters`,`stockviz-multichart`,`stockviz-paper-trades`],t={version:ho,exportedAt:Date.now(),data:{}};for(let n of e)try{let e=localStorage.getItem(n);e&&(t.data[n]=JSON.parse(e))}catch{}return t}function _o(e){if(!e?.data||e.version!==ho)throw Error(`Invalid settings bundle`);for(let[t,n]of Object.entries(e.data))localStorage.setItem(t,JSON.stringify(n));return Object.keys(e.data).length}function vo(){let e=go(),t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`stockviz-settings-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(n)}async function yo(){let e=go(),t=btoa(JSON.stringify(e));return await navigator.clipboard.writeText(t),t.length}function bo(e){return _o(JSON.parse(atob(e.trim())))}function xo(e){let t=z(),n=je();e.innerHTML=`
    <div class="page-header">
      <h1>Settings</h1>
      <p class="page-sub">Connect an API key for live quotes and market data, or use simulated data for development.</p>
    </div>

    <form class="settings-form panel" id="settings-form">
      <fieldset>
        <legend>Data Source</legend>
        <div class="field">
          <label for="fmpApiKey">Financial Modeling Prep API Key</label>
          <div class="input-row">
            <input type="password" id="fmpApiKey" name="fmpApiKey" placeholder="Paste your FMP key…" value="${Co(t.fmpApiKey)}" autocomplete="off" />
            <button type="button" class="btn-secondary" id="test-fmp-api">Test Connection</button>
          </div>
          <p class="field-hint">
            Get a key at <a href="https://site.financialmodelingprep.com/developer/docs" target="_blank" rel="noopener">financialmodelingprep.com</a>.
            FMP powers quotes, fundamentals, earnings calendar, insider trades, futures, and forex.
          </p>
          <p class="api-status" id="fmp-api-status"></p>
          <div class="export-btn-row" style="margin-top:0.5rem">
            <button type="button" class="btn-secondary" id="audit-fmp-api">Test All FMP Data</button>
          </div>
          <div id="fmp-audit-results" class="fmp-audit-results" hidden></div>
        </div>

        <div class="field">
          <label>Stock Universe</label>
          <p class="field-hint">
            Current: <strong id="universe-label">${Co(n.label)}</strong>
            (${n.source===`sp500`?`loaded from FMP, cached 7 days`:`bundled list — add FMP key for full S&amp;P 500`})
          </p>
          <div class="export-btn-row">
            <button type="button" class="btn-secondary" id="refresh-universe" ${t.useMockData||!t.fmpApiKey?.trim()?`disabled`:``}>Refresh S&amp;P 500 List</button>
          </div>
          <p class="field-hint">S&amp;P 500 uses ~13 batch quote calls on refresh. Use 60s+ refresh interval for large universes.</p>
        </div>

        <div class="field">
          <label for="apiKey">Finnhub API Key (optional fallback)</label>
          <div class="input-row">
            <input type="password" id="apiKey" name="apiKey" placeholder="Paste your Finnhub key…" value="${Co(t.apiKey)}" autocomplete="off" />
            <button type="button" class="btn-secondary" id="test-api">Test Connection</button>
          </div>
          <p class="field-hint">
            Get a free key at <a href="https://finnhub.io/register" target="_blank" rel="noopener">finnhub.io/register</a>
            (60 calls/min). Used only when no FMP key is set.
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
            Force simulated data (ignore API keys)
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Notifications</legend>
        <div class="field checkbox-field">
          <label>
            <input type="checkbox" name="pushNotifications" ${t.pushNotifications?`checked`:``} ${lo()?``:`disabled`} />
            Browser push notifications for alerts
          </label>
          ${lo()?`<p class="field-hint">Permission: <strong>${uo()}</strong>
            ${uo()==="default"?` — save settings to request permission`:``}</p>`:`<p class="field-hint">Not supported in this browser.</p>`}
        </div>
        <div class="field checkbox-field">
          <label>
            <input type="checkbox" name="alertSound" ${t.alertSound===!1?``:`checked`} />
            In-app toast notifications (always on when alerts fire)
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Display</legend>
        <div class="field">
          <label for="chartTheme">Chart Theme</label>
          <select id="chartTheme" name="chartTheme">
            <option value="dark" ${t.chartTheme===`light`?``:`selected`}>Dark</option>
            <option value="light" ${t.chartTheme===`light`?`selected`:``}>Light</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Alert Delivery</legend>
        <div class="field">
          <label for="alertWebhookUrl">Webhook URL (Telegram, Discord, IFTTT)</label>
          <input type="url" id="alertWebhookUrl" name="alertWebhookUrl" placeholder="https://…" value="${Co(t.alertWebhookUrl)}" />
          <p class="field-hint">POST JSON when alerts fire. Works with Telegram bot webhooks and Discord.</p>
        </div>
      </fieldset>

      <fieldset>
        <legend>Sync Settings (cross-device)</legend>
        <p class="field-hint">Export your API keys and preferences to use on another computer.</p>
        <div class="export-btn-row">
          <button type="button" class="btn-secondary" id="export-settings">Download JSON</button>
          <button type="button" class="btn-secondary" id="copy-settings">Copy Sync Code</button>
          <button type="button" class="btn-secondary" id="import-settings">Import Sync Code</button>
        </div>
      </fieldset>

      <fieldset>
        <legend>Watchlist</legend>
        <div class="field">
          <label for="watchlist">Symbols (comma-separated)</label>
          <input type="text" id="watchlist" name="watchlist" value="${Co(t.watchlist.join(`, `))}" placeholder="AAPL, MSFT, NVDA" />
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
        <li><strong>S&amp;P 500</strong> — full index when FMP key is set (cached locally)</li>
      </ul>
    </section>
  `;let r=e.querySelector(`#settings-form`);r.addEventListener(`submit`,async t=>{t.preventDefault();let n=new FormData(r),i=n.get(`watchlist`).split(`,`).map(e=>e.trim().toUpperCase()).filter(Boolean),a=n.get(`pushNotifications`)===`on`;yn({fmpApiKey:n.get(`fmpApiKey`),apiKey:n.get(`apiKey`),refreshInterval:Number(n.get(`refreshInterval`))||30,useMockData:n.get(`useMockData`)===`on`,watchlist:i,pushNotifications:a,alertSound:n.get(`alertSound`)===`on`,chartTheme:n.get(`chartTheme`)||`dark`,alertWebhookUrl:n.get(`alertWebhookUrl`)}),vt(),Rr(),qi(),a&&uo()==="default"&&await fo(),So(e),window.dispatchEvent(new CustomEvent(`stockviz:settings-saved`))}),e.querySelector(`#test-fmp-api`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#fmpApiKey`).value,n=e.querySelector(`#fmp-api-status`);n.textContent=`Testing…`,n.className=`api-status`;let r=await oe(t);n.textContent=r.message,n.className=`api-status ${r.valid?`ok`:`err`}`}),e.querySelector(`#audit-fmp-api`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#fmpApiKey`).value,n=e.querySelector(`#fmp-api-status`),r=e.querySelector(`#fmp-audit-results`),i=e.querySelector(`#audit-fmp-api`);n.textContent=`Running endpoint audit (~15 API calls)…`,n.className=`api-status`,i.disabled=!0,r.hidden=!0;let a=await mo(t);n.textContent=a.message,n.className=`api-status ${a.valid?`ok`:`err`}`,r.hidden=!1,r.innerHTML=`
      <table class="fmp-audit-table">
        <thead><tr><th>Endpoint</th><th>Status</th><th>Time</th><th>Detail</th></tr></thead>
        <tbody>
          ${a.results.map(e=>`
            <tr class="${e.ok?`ok`:`err`}">
              <td>${Co(e.name)}</td>
              <td>${e.ok?`✓ Live`:`✗ Failed`}</td>
              <td>${e.ms}ms</td>
              <td>${Co(e.detail)}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    `,i.disabled=!1}),e.querySelector(`#refresh-universe`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#refresh-universe`),n=e.querySelector(`#universe-label`);t.disabled=!0,t.textContent=`Loading…`;let r={...z(),fmpApiKey:e.querySelector(`#fmpApiKey`).value,useMockData:e.querySelector(`[name="useMockData"]`).checked},i=await Ve(r);n.textContent=i.label,t.textContent=`Refresh S&P 500 List`,t.disabled=r.useMockData||!r.fmpApiKey?.trim(),So(e,`Universe updated: ${i.label}`),window.dispatchEvent(new CustomEvent(`stockviz:settings-saved`))}),e.querySelector(`#export-settings`)?.addEventListener(`click`,()=>vo()),e.querySelector(`#copy-settings`)?.addEventListener(`click`,async()=>{await yo(),So(e,`Sync code copied to clipboard.`)}),e.querySelector(`#import-settings`)?.addEventListener(`click`,()=>{let t=prompt(`Paste your sync code:`);if(t)try{bo(t),So(e,`Settings imported — reloading…`),setTimeout(()=>window.dispatchEvent(new CustomEvent(`stockviz:settings-saved`)),500)}catch(e){alert(e.message||`Import failed`)}}),e.querySelector(`#test-api`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#apiKey`).value,n=e.querySelector(`#api-status`);n.textContent=`Testing…`,n.className=`api-status`;let r=await Yt(t);n.textContent=r.message,n.className=`api-status ${r.valid?`ok`:`err`}`})}function So(e,t=`Settings saved.`){let n=e.querySelector(`.save-toast`);n||(n=document.createElement(`p`),n.className=`save-toast`,e.querySelector(`.settings-form`)?.appendChild(n)),n.textContent=t,setTimeout(()=>n.remove(),2500)}function Co(e){return String(e??``).replace(/"/g,`&quot;`)}var wo=[{id:`2x2`,cols:2,slots:4},{id:`2x3`,cols:3,slots:6},{id:`3x3`,cols:3,slots:9},{id:`4x2`,cols:4,slots:8}],To=[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`,`JPM`,`SPY`];function Eo(e){let t=tr(),n=wo.find(e=>e.id===t.id)||wo[0],r=B(),i=[...t.symbols];for(;i.length<n.slots;)i.push(To[i.length%To.length]);e.innerHTML=`
    <div class="page-header multichart-header">
      <div>
        <h1>Multi-Chart</h1>
        <p class="page-sub">Finviz Elite-style multi-layout charts — click a chart to change symbol.</p>
      </div>
      <div class="multichart-controls">
        ${wo.map(e=>`
          <button type="button" class="preset-chip ${t.id===e.id?`active`:``}" data-layout="${e.id}">${e.id}</button>
        `).join(``)}
        <button type="button" class="btn-secondary" id="mc-watchlist">Load Watchlist</button>
        <button type="button" class="btn-secondary" id="mc-favorites">Load Favorites</button>
      </div>
    </div>
    <div class="multichart-grid cols-${n.cols}" id="mc-grid">
      ${i.slice(0,n.slots).map((e,t)=>Oo(e,r.get(e),t)).join(``)}
    </div>
  `,e.querySelectorAll(`[data-layout]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=wo.find(t=>t.id===e.dataset.layout);nr({id:t.id,symbols:i.slice(0,t.slots)})})}),e.querySelector(`#mc-watchlist`)?.addEventListener(`click`,()=>{let e=Do();nr({id:t.id,symbols:e.slice(0,n.slots)})}),e.querySelector(`#mc-favorites`)?.addEventListener(`click`,()=>{nr({id:t.id,symbols:Mn().slice(0,n.slots)})}),e.querySelectorAll(`.mc-cell`).forEach(e=>{let n=e.querySelector(`.mc-chart`),i=e.dataset.symbol,a=r.get(i);n&&a?.candles&&Xr(n,a.candles,{height:140}),e.querySelector(`.mc-sym-select`)?.addEventListener(`change`,n=>{let r=Number(e.dataset.idx),i=[...t.symbols];for(;i.length<=r;)i.push(To[i.length%To.length]);i[r]=n.target.value,nr({id:t.id,symbols:i})}),e.addEventListener(`click`,e=>{e.target.tagName!==`SELECT`&&window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:i}))})})}function Do(){try{return JSON.parse(localStorage.getItem(`stockviz-settings`)||`{}`).watchlist||To}catch{return To}}function Oo(e,t,n){let r=G(t?.changePct);return`
    <div class="mc-cell panel" data-symbol="${e}" data-idx="${n}">
      <div class="mc-cell-head">
        <select class="mc-sym-select sym" aria-label="Symbol">
          ${E().map(t=>`<option value="${t.symbol}" ${t.symbol===e?`selected`:``}>${t.symbol}</option>`).join(``)}
        </select>
        <span class="mc-price ${r}">${t?`$${U(t.price)} ${W(t.changePct)}`:`—`}</span>
      </div>
      <div class="mc-chart"></div>
      ${t?.prediction?`<span class="mc-pred pred-badge ${t.prediction.direction}">${t.prediction.direction} ${t.prediction.confidence}%</span>`:``}
    </div>
  `}function ko(e){let t=Gn(),n=t.filter(e=>e.active&&!e.triggered),r=t.filter(e=>e.triggered);e.innerHTML=`
    <div class="page-header">
      <h1>Custom Alerts</h1>
      <p class="page-sub">Price, RSI, signal, pattern, and prediction alerts — checked every refresh.</p>
    </div>

    <form class="alert-form panel" id="alert-form">
      <h2 class="panel-title">Create Alert</h2>
      <div class="form-row">
        <div class="filter-group">
          <label>Symbol</label>
          <input list="alert-symbols" name="symbol" placeholder="AAPL" required />
          <datalist id="alert-symbols">${E().map(e=>`<option value="${e.symbol}">`).join(``)}</datalist>
        </div>
        <div class="filter-group">
          <label>Condition</label>
          <select name="type" id="alert-type">
            ${fr.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}
          </select>
        </div>
        <div class="filter-group" id="alert-value-group">
          <label>Value</label>
          <input type="text" name="value" id="alert-value" placeholder="200" />
        </div>
        <div class="filter-group">
          <label>Note (optional)</label>
          <input type="text" name="note" placeholder="Breakout watch" />
        </div>
        <button type="submit" class="btn-primary">Create Alert</button>
      </div>
    </form>

    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">Active Alerts (${n.length})</h2>
        ${n.length?Ao(n,!1):`<p class="muted">No active alerts.</p>`}
      </section>
      <section class="panel">
        <div class="panel-title-row">
          <h2 class="panel-title">Triggered (${r.length})</h2>
          ${r.length?`
            <div class="panel-actions">
              <button class="btn-ghost btn-sm" id="rearm-all">Re-arm All</button>
              <button class="btn-ghost btn-sm" id="clear-triggered">Clear All</button>
            </div>
          `:``}
        </div>
        ${r.length?Ao(r,!0):`<p class="muted">None triggered yet.</p>`}
      </section>
    </div>
  `;let i=e.querySelector(`#alert-type`),a=e.querySelector(`#alert-value-group`),o=e.querySelector(`#alert-value`);function s(){let t=fr.find(e=>e.id===i.value);t&&(t.valueType===`signal`?o.outerHTML=`<select name="value" id="alert-value">${Ii.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}</select>`:t.valueType===`pattern`?o.outerHTML=`<select name="value" id="alert-value">${Li.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}</select>`:t.valueType===`prediction`?o.outerHTML=`<select name="value" id="alert-value"><option value="bullish">Bullish</option><option value="bearish">Bearish</option><option value="neutral">Neutral</option></select>`:a.querySelector(`select`)?a.innerHTML=`<label>Value</label><input type="text" name="value" id="alert-value" placeholder="${t.placeholder||``}" />`:e.querySelector(`#alert-value`).placeholder=t.placeholder||``)}i?.addEventListener(`change`,s),s(),e.querySelector(`#alert-form`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(e.target),n=t.get(`symbol`).toString().trim().toUpperCase();if(!Ne(n)){H(`Symbol not in universe`,`error`);return}Jn({symbol:n,type:t.get(`type`),value:t.get(`value`),note:t.get(`note`)||``}),H(`Alert created for ${n}`,`success`),e.target.reset()}),e.querySelector(`#clear-triggered`)?.addEventListener(`click`,Qn),e.querySelector(`#rearm-all`)?.addEventListener(`click`,()=>{er(),H(`All triggered alerts re-armed`,`success`),ko(e)}),e.querySelectorAll(`[data-rearm]`).forEach(t=>{t.addEventListener(`click`,()=>{$n(t.dataset.rearm),H(`Alert re-armed`,`success`),ko(e)})}),e.querySelectorAll(`[data-del-alert]`).forEach(e=>{e.addEventListener(`click`,()=>Yn(e.dataset.delAlert))}),e.querySelectorAll(`[data-toggle-alert]`).forEach(e=>{e.addEventListener(`click`,()=>Xn(e.dataset.toggleAlert))}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Ao(e,t){return`
    <table class="data-table finviz-tbl">
      <thead><tr><th>Symbol</th><th>Condition</th><th>Value</th><th>${t?`Fired`:`Status`}</th><th></th></tr></thead>
      <tbody>
        ${e.map(e=>`
          <tr>
            <td class="sym clickable" data-symbol="${e.symbol}">${e.symbol}</td>
            <td>${fr.find(t=>t.id===e.type)?.label||e.type}</td>
            <td>${e.value}</td>
            <td>${t?`<span class="pos">${e.triggerDetail||`Triggered`}</span> <span class="muted">${jo(e.triggeredAt)}</span>`:e.active?`Watching`:`Paused`}</td>
            <td>
              ${t?`<button class="btn-ghost btn-sm" data-rearm="${e.id}">Re-arm</button>`:`<button class="btn-ghost btn-sm" data-toggle-alert="${e.id}">${e.active?`Pause`:`Resume`}</button>`}
              <button class="btn-ghost btn-sm" data-del-alert="${e.id}">×</button>
            </td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `}function jo(e){return e?new Date(e).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):``}function Mo(e){let t=B(),n=Ca(t,xn()),r=[...t.values()],i=Aa(r.slice(0,2));e.innerHTML=`
    <div class="page-header">
      <h1>Export &amp; API</h1>
      <p class="page-sub">Finviz Elite-style data export — CSV, JSON, and clipboard API payloads.</p>
    </div>

    <div class="export-actions panel">
      <h2 class="panel-title">Quick Export</h2>
      <div class="export-btn-row">
        <button class="btn-primary" id="exp-csv">Screener CSV (${n.length})</button>
        <button class="btn-primary" id="exp-csv-full">Full TA CSV (${r.length})</button>
        <button class="btn-secondary" id="exp-json">JSON Export (${r.length})</button>
        <button class="btn-secondary" id="exp-clipboard">Copy API JSON</button>
      </div>
      <p class="field-hint">Full CSV includes RSI, SMA, signals, patterns, and predictions.</p>
    </div>

    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">API Reference</h2>
        <div class="api-docs">
          <div class="api-endpoint">
            <code class="api-method">GET</code> <code>/api/v1/screener</code>
            <p>Returns full universe with technical analysis enrichment.</p>
          </div>
          <div class="api-endpoint">
            <code class="api-method">GET</code> <code>/api/v1/quote?symbol=AAPL</code>
            <p>Single stock quote with patterns, signals, and prediction.</p>
          </div>
          <div class="api-endpoint">
            <code class="api-method">GET</code> <code>/api/v1/signals?type=overbought</code>
            <p>Filter stocks by technical signal ID.</p>
          </div>
          <div class="api-endpoint">
            <code class="api-method">GET</code> <code>/api/v1/patterns?type=double_bottom</code>
            <p>Filter stocks by chart pattern ID.</p>
          </div>
          <div class="api-endpoint">
            <code class="api-method">GET</code> <code>/api/v1/export?format=json|csv</code>
            <p>Bulk export — use the buttons above for client-side export.</p>
          </div>
        </div>
        <p class="field-hint">Live REST API requires a backend. Client-side export works now with zero setup.</p>
      </section>

      <section class="panel">
        <h2 class="panel-title">Sample API Response</h2>
        <pre class="api-sample"><code>${JSON.stringify(i,null,2).slice(0,2800)}…</code></pre>
        <button class="btn-ghost btn-sm" id="exp-sample">Download Sample JSON</button>
      </section>
    </div>

    <section class="panel">
      <h2 class="panel-title">Field Reference</h2>
      <table class="data-table finviz-tbl">
        <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>ta.rsi</td><td>number</td><td>14-period RSI</td></tr>
          <tr><td>ta.sma50 / sma200</td><td>number</td><td>Simple moving averages</td></tr>
          <tr><td>signals[]</td><td>array</td><td>Active TA signals (Overbought, Golden Cross…)</td></tr>
          <tr><td>patterns[]</td><td>array</td><td>Detected chart patterns with confidence</td></tr>
          <tr><td>prediction</td><td>object</td><td>direction, confidence, priceTarget, factors</td></tr>
          <tr><td>fundamentals</td><td>object</td><td>P/E, PEG, P/S, P/B, EV/EBITDA, EPS, margins, div yield, beta, 52W range, performance, ownership</td></tr>
        </tbody>
      </table>
    </section>
  `,e.querySelector(`#exp-csv`)?.addEventListener(`click`,()=>{Oa(n,`stockviz-screener.csv`,!1),H(`Exported ${n.length} rows`,`success`)}),e.querySelector(`#exp-csv-full`)?.addEventListener(`click`,()=>{Oa(r,`stockviz-full-ta.csv`,!0),H(`Exported ${r.length} rows with TA`,`success`)}),e.querySelector(`#exp-json`)?.addEventListener(`click`,()=>{ka(r),H(`Exported ${r.length} stocks as JSON`,`success`)}),e.querySelector(`#exp-clipboard`)?.addEventListener(`click`,async()=>{try{H(`Copied ${await ja(r)} stocks to clipboard`,`success`)}catch{H(`Clipboard failed — use JSON download`,`error`)}}),e.querySelector(`#exp-sample`)?.addEventListener(`click`,()=>{ka(r.slice(0,5),`stockviz-api-sample.json`)})}function No(t){let n=new Map;for(let t of e)n.set(t,[]);for(let e of t.values())!e.sector||!n.has(e.sector)||n.get(e.sector).push(e);return e.map(e=>{let t=n.get(e)||[],r=t.length||1,i=t.reduce((e,t)=>e+(t.changePct||0),0)/r,a=t.filter(e=>e.changePct>0).length,o=t.filter(e=>e.prediction?.direction===`bullish`).length,s=t.reduce((e,t)=>e+(t.ta?.rsi??50),0)/r,c=t.reduce((e,t)=>e+(t.ta?.relVolume??1),0)/r,l=t.filter(e=>e.ta?.sma50&&e.price>e.ta.sma50).length,u=i*2+a/r*15+o/r*10+l/r*8,d=Math.max(0,Math.min(100,50+u));return{sector:e,count:t.length,avgChange:i,advancing:a,advancingPct:a/r*100,bullish:o,bullishPct:o/r*100,avgRsi:s,relVol:c,aboveSma50Pct:l/r*100,momentum:u,strength:d,topStock:t.sort((e,t)=>t.changePct-e.changePct)[0]||null,laggard:t.sort((e,t)=>e.changePct-t.changePct)[0]||null}}).sort((e,t)=>t.momentum-e.momentum)}function Po(e){return e.momentum>8?{label:`Leading`,color:`var(--green)`}:e.momentum>2?{label:`Improving`,color:`var(--accent)`}:e.momentum>-2?{label:`Neutral`,color:`var(--text-muted)`}:e.momentum>-8?{label:`Weakening`,color:`var(--yellow)`}:{label:`Lagging`,color:`var(--red)`}}async function Fo(e){let t=B(),n=z();Mn();let r=Fn(),i=[...t.values()],a=ft(t),o=No(t).slice(0,5),[s,c]=await Promise.all([Hr(n,t,6),Jt(n).catch(()=>null)]),l=c?.earnings?.slice(0,4)||[],u=i.filter(e=>e.prediction?.direction===`bullish`).sort((e,t)=>(t.prediction?.confidence??0)-(e.prediction?.confidence??0)).slice(0,6);e.innerHTML=`
    <div class="page-header dash-header">
      <div>
        <h1>Elite Dashboard</h1>
        <p class="page-sub">Real-time market command center — breadth, rotation, predictions, flow.</p>
      </div>
      <div class="dash-quick-links">
        <a href="#/internals" class="btn-secondary btn-sm">Internals</a>
        <a href="#/correlation" class="btn-secondary btn-sm">Correlation</a>
        <a href="#/backtest" class="btn-secondary btn-sm">Backtest</a>
        <a href="#/rotation" class="btn-secondary btn-sm">Rotation</a>
        <a href="#/watchlist" class="btn-secondary btn-sm">Watchlist</a>
      </div>
    </div>

    <div class="dash-grid">
      <section class="panel dash-widget dash-breadth">
        <h2 class="widget-title">Market Breadth</h2>
        <div class="breadth-gauges">
          <div class="gauge-item">
            <div class="gauge-bar"><div class="gauge-fill pos" style="width:${a.advPct}%"></div></div>
            <span>Advancing ${a.advPct.toFixed(0)}%</span>
          </div>
          <div class="gauge-item">
            <div class="gauge-bar"><div class="gauge-fill" style="width:${a.aboveSma50Pct}%;background:var(--accent)"></div></div>
            <span>Above SMA50 ${a.aboveSma50Pct.toFixed(0)}%</span>
          </div>
          <div class="gauge-item">
            <div class="gauge-bar"><div class="gauge-fill" style="width:${a.aboveSma200Pct}%;background:var(--yellow)"></div></div>
            <span>Above SMA200 ${a.aboveSma200Pct.toFixed(0)}%</span>
          </div>
        </div>
        <div class="dash-stats-row">
          <span class="pos">${a.newHigh} new highs</span>
          <span class="neg">${a.newLow} new lows</span>
        </div>
      </section>

      <section class="panel dash-widget">
        <h2 class="widget-title">Sector Rotation</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Sector</th><th>Mom</th><th>Phase</th><th>Leader</th></tr></thead>
          <tbody>
            ${o.map(e=>{let t=Po(e);return`<tr>
                <td><a href="#/rotation">${e.sector}</a></td>
                <td class="${G(e.avgChange)}">${W(e.avgChange)}</td>
                <td style="color:${t.color}">${t.label}</td>
                <td class="sym">${e.topStock?.symbol||`—`}</td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </section>

      <section class="panel dash-widget">
        <h2 class="widget-title">Top Predictions</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Ticker</th><th>Conf</th><th>Target</th><th>Change</th></tr></thead>
          <tbody>
            ${u.map(e=>`
              <tr class="clickable" data-symbol="${e.symbol}">
                <td class="sym">${e.symbol}</td>
                <td>${e.prediction.confidence}%</td>
                <td>$${U(e.prediction.priceTarget)}</td>
                <td class="${G(e.changePct)}">${W(e.changePct)}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </section>

      <section class="panel dash-widget">
        <h2 class="widget-title">Watchlist</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Ticker</th><th>Price</th><th>Change</th><th>RSI</th></tr></thead>
          <tbody>
            ${n.watchlist.slice(0,8).map(e=>{let n=t.get(e);return n?`<tr class="clickable" data-symbol="${e}">
                <td class="sym">${e}</td>
                <td>$${U(n.price)}</td>
                <td class="${G(n.changePct)}">${W(n.changePct)}</td>
                <td>${n.ta?.rsi?.toFixed(0)??`—`}</td>
              </tr>`:``}).join(``)}
          </tbody>
        </table>
      </section>

      <section class="panel dash-widget">
        <h2 class="widget-title">Unusual Options Flow</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Ticker</th><th>Type</th><th>Notional</th><th>Sentiment</th></tr></thead>
          <tbody>
            ${s.map(e=>`
              <tr class="clickable" data-symbol="${e.symbol}">
                <td class="sym">${e.symbol}</td>
                <td>${e.type}</td>
                <td>$${(e.notional/1e3).toFixed(0)}K</td>
                <td class="${e.sentiment===`bullish`?`pos`:e.sentiment===`bearish`?`neg`:``}">${e.sentiment}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
        <a href="#/options" class="widget-link">View all flow →</a>
      </section>

      ${l.length?`
      <section class="panel dash-widget">
        <h2 class="widget-title">Upcoming Earnings</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Symbol</th><th>Date</th><th>EPS Est</th></tr></thead>
          <tbody>
            ${l.map(e=>`
              <tr class="clickable" data-symbol="${e.symbol}">
                <td class="sym">${e.symbol}</td>
                <td>${e.date}</td>
                <td>$${U(e.epsEst)}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
        <a href="#/calendar" class="widget-link">Full calendar →</a>
      </section>
      `:``}

      <section class="panel dash-widget">
        <h2 class="widget-title">Portfolio Snapshot</h2>
        ${r.length?(()=>{let e=0,n=0;r.forEach(r=>{let i=t.get(r.symbol);e+=(i?.price??0)*r.shares,n+=r.costBasis*r.shares});let i=e-n,a=n?i/n*100:0;return`
            <div class="dash-portfolio-summary">
              <div><span class="muted">Value</span> <strong>$${U(e)}</strong></div>
              <div><span class="muted">P&amp;L</span> <strong class="${G(i)}">${W(a)}</strong></div>
            </div>
            <table class="data-table compact finviz-tbl">
              <tbody>
                ${r.slice(0,5).map(e=>{let n=t.get(e.symbol),r=n?(n.price-e.costBasis)*e.shares:0;return`<tr class="clickable" data-symbol="${e.symbol}">
                    <td class="sym">${e.symbol}</td>
                    <td>$${U(n?.price)}</td>
                    <td class="${G(r)}">${n?W((n.price-e.costBasis)/e.costBasis*100):`—`}</td>
                  </tr>`}).join(``)}
              </tbody>
            </table>
          `})():`<p class="muted">No holdings — <a href="#/portfolio">add positions</a></p>`}
      </section>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Io(e){let t=B(),n=ft(t),r=Nr(t),i=[...t.values()],a=i.filter(e=>(e.ta?.relVolume??1)>1.5).sort((e,t)=>(t.ta?.relVolume??1)-(e.ta?.relVolume??1)).slice(0,12),o=i.filter(e=>(e.ta?.rsi??50)<25||(e.ta?.rsi??50)>75).sort((e,t)=>Math.abs(50-(t.ta?.rsi??50))-Math.abs(50-(e.ta?.rsi??50))).slice(0,12),s=n.declining?n.advancing/n.declining:n.advancing;e.innerHTML=`
    <div class="page-header">
      <h1>Market Internals</h1>
      <p class="page-sub">Advance/decline, breadth thrust, sector internals, volume extremes.</p>
    </div>

    <div class="internals-grid">
      <section class="panel internals-card">
        <h2 class="panel-title">Breadth Overview</h2>
        <div class="internals-metrics">
          <div class="metric-big">
            <span class="metric-val pos">${n.advancing}</span>
            <span class="metric-label">Advancing</span>
          </div>
          <div class="metric-big">
            <span class="metric-val neg">${n.declining}</span>
            <span class="metric-label">Declining</span>
          </div>
          <div class="metric-big">
            <span class="metric-val">${s.toFixed(2)}</span>
            <span class="metric-label">A/D Ratio</span>
          </div>
          <div class="metric-big">
            <span class="metric-val">${n.newHigh}</span>
            <span class="metric-label">52W Highs</span>
          </div>
          <div class="metric-big">
            <span class="metric-val">${n.newLow}</span>
            <span class="metric-label">52W Lows</span>
          </div>
        </div>
        <div class="breadth-visual">
          <div class="breadth-stack">
            <div class="breadth-seg pos" style="flex:${n.advPct}">${n.advPct.toFixed(0)}%</div>
            <div class="breadth-seg flat" style="flex:${100-n.advPct-n.decPct}"></div>
            <div class="breadth-seg neg" style="flex:${n.decPct}">${n.decPct.toFixed(0)}%</div>
          </div>
        </div>
      </section>

      <section class="panel internals-card">
        <h2 class="panel-title">Moving Average Breadth</h2>
        <div class="ma-breadth-bars">
          <div class="ma-bar-row">
            <span>SMA 50</span>
            <div class="ma-bar"><div class="ma-fill" style="width:${n.aboveSma50Pct}%"></div></div>
            <span>${n.aboveSma50} / ${i.length}</span>
          </div>
          <div class="ma-bar-row">
            <span>SMA 200</span>
            <div class="ma-bar"><div class="ma-fill accent" style="width:${n.aboveSma200Pct}%"></div></div>
            <span>${n.aboveSma200} / ${i.length}</span>
          </div>
        </div>
        <p class="field-hint">Above 70% on SMA200 often signals bull market; below 30% bearish.</p>
      </section>

      <section class="panel internals-card wide">
        <h2 class="panel-title">Sector Advance/Decline</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Sector</th><th>Adv %</th><th>Adv/Dec</th><th>Avg Volume</th><th>Breadth</th></tr></thead>
          <tbody>
            ${r.map(e=>`
              <tr>
                <td>${e.sector}</td>
                <td class="${G(e.advPct-50)}">${e.advPct.toFixed(0)}%</td>
                <td>${e.adv}/${e.dec}</td>
                <td>${gr(e.avgVol)}</td>
                <td><div class="mini-bar"><div class="mini-fill" style="width:${e.advPct}%"></div></div></td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </section>

      <section class="panel internals-card">
        <h2 class="panel-title">Volume Surge</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Ticker</th><th>Rel Vol</th><th>Change</th></tr></thead>
          <tbody>
            ${a.map(e=>`
              <tr class="clickable" data-symbol="${e.symbol}">
                <td class="sym">${e.symbol}</td>
                <td>${(e.ta?.relVolume??1).toFixed(1)}x</td>
                <td class="${G(e.changePct)}">${W(e.changePct)}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </section>

      <section class="panel internals-card">
        <h2 class="panel-title">RSI Extremes</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Ticker</th><th>RSI</th><th>Change</th></tr></thead>
          <tbody>
            ${o.map(e=>`
              <tr class="clickable" data-symbol="${e.symbol}">
                <td class="sym">${e.symbol}</td>
                <td class="${(e.ta?.rsi??50)<30?`pos`:`neg`}">${e.ta?.rsi?.toFixed(0)}</td>
                <td class="${G(e.changePct)}">${W(e.changePct)}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </section>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Lo(e,t){let n=Math.min(e.length,t.length);if(n<3)return 0;let r=e.slice(-n),i=t.slice(-n),a=r.reduce((e,t)=>e+t,0)/n,o=i.reduce((e,t)=>e+t,0)/n,s=0,c=0,l=0;for(let e=0;e<n;e++){let t=r[e]-a,n=i[e]-o;s+=t*n,c+=t*t,l+=n*n}let u=Math.sqrt(c*l);return u?s/u:0}function Ro(e){if(!e?.length)return[];let t=e.map(e=>e.c),n=[];for(let e=1;e<t.length;e++)n.push((t[e]-t[e-1])/t[e-1]);return n}function zo(e,t,{period:n=30}={}){let r=new Map;for(let i of e){let e=t.get(i)?.candles;e?.length&&r.set(i,Ro(e).slice(-n))}let i=[...r.keys()];return{symbols:i,matrix:i.map(e=>i.map(t=>e===t?1:Lo(r.get(e),r.get(t))))}}function Bo(e){return e>=.7?`rgba(63,185,80,0.85)`:e>=.4?`rgba(63,185,80,0.45)`:e>=.15?`rgba(88,166,255,0.35)`:e>-.15?`rgba(139,148,158,0.25)`:e>-.4?`rgba(248,81,73,0.35)`:e>-.7?`rgba(248,81,73,0.55)`:`rgba(248,81,73,0.85)`}var Vo={mag7:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`],indices:[`SPY`,`QQQ`,`DIA`,`IWM`,`VTI`],semis:[`NVDA`,`AMD`,`INTC`,`AVGO`,`QCOM`,`MU`,`AMAT`],banks:[`JPM`,`BAC`,`WFC`,`GS`,`MS`,`C`]},$=`mag7`,Ho=``;function Uo(e){let t=B(),n=Mn(),{symbols:r,matrix:i}=zo(Wo($,Ho,n),t);e.innerHTML=`
    <div class="page-header corr-header">
      <div>
        <h1>Correlation Matrix</h1>
        <p class="page-sub">Pearson correlation of daily returns — spot diversification and sector clustering.</p>
      </div>
      <div class="corr-controls">
        <select id="corr-set" class="chart-select">
          <option value="mag7" ${$===`mag7`?`selected`:``}>Mag 7</option>
          <option value="indices" ${$===`indices`?`selected`:``}>Indices &amp; ETFs</option>
          <option value="semis" ${$===`semis`?`selected`:``}>Semiconductors</option>
          <option value="banks" ${$===`banks`?`selected`:``}>Banks</option>
          <option value="watchlist" ${$===`watchlist`?`selected`:``}>Watchlist</option>
          <option value="custom" ${$===`custom`?`selected`:``}>Custom</option>
        </select>
        <input type="text" id="corr-custom" class="corr-custom-input" placeholder="AAPL, MSFT, NVDA"
          value="${Ho}" ${$===`custom`?``:`hidden`} />
      </div>
    </div>

    ${r.length<2?`<p class="muted">Need at least 2 symbols with data.</p>`:`
      <div class="corr-legend">
        <span>−1</span><div class="corr-legend-bar"></div><span>+1</span>
        <span class="muted">Strong negative ← → Strong positive</span>
      </div>
      <div class="corr-matrix-wrap panel">
        <table class="corr-matrix">
          <thead>
            <tr><th></th>${r.map(e=>`<th>${e}</th>`).join(``)}</tr>
          </thead>
          <tbody>
            ${i.map((e,t)=>`
              <tr>
                <th>${r[t]}</th>
                ${e.map((e,n)=>`
                  <td class="corr-cell" style="background:${Bo(e)}" title="${r[t]} vs ${r[n]}: ${e.toFixed(2)}">
                    ${t===n?`1.0`:e.toFixed(2)}
                  </td>
                `).join(``)}
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </div>
      <section class="panel corr-insights">
        <h2 class="panel-title">Low Correlation Pairs</h2>
        <p class="muted">Best diversification candidates (lowest absolute correlation):</p>
        <div class="corr-pairs">
          ${Go(r,i).map(e=>`
            <span class="corr-pair-chip">${e.a} ↔ ${e.b} <strong>${e.r.toFixed(2)}</strong></span>
          `).join(``)}
        </div>
      </section>
    `}
  `,e.querySelector(`#corr-set`)?.addEventListener(`change`,t=>{$=t.target.value;let n=e.querySelector(`#corr-custom`);n&&(n.hidden=$!==`custom`),Uo(e)}),e.querySelector(`#corr-custom`)?.addEventListener(`change`,t=>{Ho=t.target.value,$=`custom`,Uo(e)})}function Wo(e,t,n){return e===`custom`&&t?t.split(`,`).map(e=>e.trim().toUpperCase()).filter(Boolean).slice(0,12):e===`watchlist`?n.slice(0,12):Vo[e]||Vo.mag7}function Go(e,t){let n=[];for(let r=0;r<e.length;r++)for(let i=r+1;i<e.length;i++)n.push({a:e[r],b:e[i],r:t[r][i]});return n.sort((e,t)=>Math.abs(e.r)-Math.abs(t.r)).slice(0,6)}var Ko={rsi_oversold:{label:`RSI Oversold Bounce`,desc:`Buy when RSI < 30, sell when RSI > 70`,entry:e=>e.rsi<30,exit:e=>e.rsi>70},rsi_overbought_short:{label:`RSI Overbought Fade`,desc:`Short when RSI > 70, cover when RSI < 40`,entry:e=>e.rsi>70,exit:e=>e.rsi<40,short:!0},sma_cross:{label:`SMA 20/50 Cross`,desc:`Buy golden cross, sell death cross`,entry:e=>e.sma20>e.sma50&&e.prevSma20<=e.prevSma50,exit:e=>e.sma20<e.sma50&&e.prevSma20>=e.prevSma50},momentum_breakout:{label:`5-Day Momentum`,desc:`Buy 3%+ 5-day move, exit on reversal`,entry:e=>e.mom5>3,exit:e=>e.mom5<0},macd_trend:{label:`MACD Histogram Trend`,desc:`Buy positive histogram, sell negative`,entry:e=>e.hist>0&&e.prevHist<=0,exit:e=>e.hist<0&&e.prevHist>=0}};function qo(){return Object.entries(Ko).map(([e,t])=>({id:e,label:t.label,desc:t.desc}))}function Jo(e,t){let n=e.slice(0,t+1).map(e=>e.c),r=e.slice(0,t).map(e=>e.c),i=Ue(n),a=D(n,20),o=D(n,50),s=D(r,20),c=D(r,50),l=n.length>=6?(n[n.length-1]-n[n.length-6])/n[n.length-6]*100:0,u=Yo(n,12),d=Yo(n,26),f=(u??0)-(d??0),p=Yo(r,12),m=Yo(r,26),h=(p??0)-(m??0);return{price:n[n.length-1],rsi:i,sma20:a,sma50:o,prevSma20:s,prevSma50:c,mom5:l,hist:f,prevHist:h}}function Yo(e,t){if(e.length<t)return null;let n=2/(t+1),r=e.slice(0,t).reduce((e,t)=>e+t,0)/t;for(let i=t;i<e.length;i++)r=e[i]*n+r*(1-n);return r}function Xo(e,t,{initialCapital:n=1e4}={}){let r=Ko[t];if(!r||!e?.length)return{trades:[],equity:[],stats:Qo(n)};let i=[],a=[],o=n,s=0,c=0,l=0,u=r.short;for(let t=20;t<e.length;t++){let d=Jo(e,t),f=d.price;if(!s&&r.entry(d))s=o/f,c=f,l=t,o=0;else if(s&&r.exit(d)){let e=u?(c-f)*s:(f-c)*s,r=(f-c)/c*100*(u?-1:1);i.push({entryIdx:l,exitIdx:t,entryPrice:c,exitPrice:f,pl:e,plPct:r,days:t-l}),o=n+i.reduce((e,t)=>e+t.pl,0),s=0}let p=s?u?o+(c-f)*s:s*f:o;a.push({i:t,value:p,date:e[t].t})}if(s){let t=e[e.length-1].c,n=u?(c-t)*s:(t-c)*s;i.push({entryIdx:l,exitIdx:e.length-1,entryPrice:c,exitPrice:t,pl:n,plPct:(t-c)/c*100*(u?-1:1),days:e.length-1-l,open:!0})}return{trades:i,equity:a,stats:Zo(i,n,a.length?a[a.length-1].value:n,a),strategy:r.label}}function Zo(e,t,n,r){let i=e.filter(e=>!e.open),a=i.filter(e=>e.pl>0),o=n-t,s=o/t*100,c=t,l=0;for(let e of r){e.value>c&&(c=e.value);let t=(c-e.value)/c*100;t>l&&(l=t)}let u=r.slice(1).map((e,t)=>(e.value-r[t].value)/r[t].value),d=u.length?u.reduce((e,t)=>e+t,0)/u.length:0,f=u.length>1?Math.sqrt(u.reduce((e,t)=>e+(t-d)**2,0)/u.length):0,p=f?d/f*Math.sqrt(252):0;return{totalReturn:s,totalPl:o,finalValue:n,tradeCount:i.length,winRate:i.length?a.length/i.length*100:0,avgWin:a.length?a.reduce((e,t)=>e+t.plPct,0)/a.length:0,avgLoss:i.filter(e=>e.pl<=0).length?i.filter(e=>e.pl<=0).reduce((e,t)=>e+t.plPct,0)/i.filter(e=>e.pl<=0).length:0,maxDrawdown:l,sharpe:p,profitFactor:i.filter(e=>e.pl<0).length?Math.abs(a.reduce((e,t)=>e+t.pl,0)/i.filter(e=>e.pl<0).reduce((e,t)=>e+t.pl,0)):a.length?999:0}}function Qo(e){return{totalReturn:0,totalPl:0,finalValue:e,tradeCount:0,winRate:0,avgWin:0,avgLoss:0,maxDrawdown:0,sharpe:0,profitFactor:0}}function $o(e,{simulations:t=500,days:n=20}={}){if(!e?.length)return null;let r=e.map(e=>e.c),i=[];for(let e=1;e<r.length;e++)i.push((r[e]-r[e-1])/r[e-1]);let a=i.reduce((e,t)=>e+t,0)/i.length,o=Math.sqrt(i.reduce((e,t)=>e+(t-a)**2,0)/i.length),s=r[r.length-1],c=[];for(let e=0;e<t;e++){let e=s,t=[e];for(let r=0;r<n;r++){let n=es();e=Math.max(1,e*(1+a+o*n)),t.push(e)}c.push(t)}let l=c.map(e=>e[e.length-1]).sort((e,t)=>e-t),u=e=>l[Math.floor(t*e)];return{start:s,days:n,simulations:t,median:u(.5),p10:u(.1),p90:u(.9),bullishPct:l.filter(e=>e>s).length/t*100,paths:c.slice(0,50)}}function es(){let e=1-Math.random(),t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}var ts=`AAPL`,ns=`rsi_oversold`,rs=[];async function is(e){let t=B(),n=z(),r=t.get(ts),i=qo(),a=A(n)!==`mock`;e.innerHTML=`<div class="page-header"><h1>Strategy Backtester</h1><p class="page-sub">Loading historical data…</p></div>`,rs=await Wt(ts,n,`D`,120);let o=rs.length?rs:r?.candles||[],s=Xo(o,ns),c=$o(o);e.innerHTML=`
    <div class="page-header backtest-header">
      <div>
        <h1>Strategy Backtester</h1>
        <p class="page-sub">Test TA strategies on ${a?`live FMP`:`simulated`} historical candles — equity curve, Sharpe, drawdown.</p>
      </div>
      <div class="backtest-controls">
        <select id="bt-symbol" class="chart-select">
          ${E().slice(0,80).map(e=>`<option value="${e.symbol}" ${e.symbol===ts?`selected`:``}>${e.symbol}</option>`).join(``)}
        </select>
        <select id="bt-strategy" class="chart-select">
          ${i.map(e=>`<option value="${e.id}" ${e.id===ns?`selected`:``}>${e.label}</option>`).join(``)}
        </select>
      </div>
    </div>

    ${r?`
      <p class="page-sub">${i.find(e=>e.id===ns)?.desc}</p>

      <div class="backtest-stats">
        <div class="summary-card"><span class="summary-label">Total Return</span>
          <span class="summary-value ${G(s.stats.totalReturn)}">${s.stats.totalReturn.toFixed(1)}%</span></div>
        <div class="summary-card"><span class="summary-label">Final Value</span>
          <span class="summary-value">$${U(s.stats.finalValue)}</span></div>
        <div class="summary-card"><span class="summary-label">Win Rate</span>
          <span class="summary-value">${s.stats.winRate.toFixed(0)}%</span></div>
        <div class="summary-card"><span class="summary-label">Max Drawdown</span>
          <span class="summary-value neg">${s.stats.maxDrawdown.toFixed(1)}%</span></div>
        <div class="summary-card"><span class="summary-label">Sharpe</span>
          <span class="summary-value">${s.stats.sharpe.toFixed(2)}</span></div>
        <div class="summary-card"><span class="summary-label">Trades</span>
          <span class="summary-value">${s.stats.tradeCount}</span></div>
        <div class="summary-card"><span class="summary-label">Profit Factor</span>
          <span class="summary-value">${s.stats.profitFactor>100?`∞`:s.stats.profitFactor.toFixed(2)}</span></div>
      </div>

      <div class="two-col">
        <section class="panel">
          <h2 class="panel-title">Equity Curve</h2>
          <canvas id="equity-chart" class="equity-canvas" height="200"></canvas>
        </section>
        <section class="panel">
          <h2 class="panel-title">Monte Carlo (20d, 500 sims)</h2>
          ${c?`
            <div class="monte-stats">
              <div><span class="muted">Median</span> $${U(c.median)}</div>
              <div><span class="muted">10th %ile</span> $${U(c.p10)}</div>
              <div><span class="muted">90th %ile</span> $${U(c.p90)}</div>
              <div><span class="muted">Bullish</span> ${c.bullishPct.toFixed(0)}%</div>
            </div>
            <canvas id="monte-chart" class="equity-canvas" height="200"></canvas>
          `:`<p class="muted">Insufficient data</p>`}
        </section>
      </div>

      <section class="panel">
        <h2 class="panel-title">Trade Log (${s.trades.length})</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Entry</th><th>Exit</th><th>Entry $</th><th>Exit $</th><th>P&amp;L %</th><th>Days</th><th>Status</th></tr></thead>
          <tbody>
            ${s.trades.length?s.trades.map(e=>`
              <tr>
                <td>${e.entryIdx}</td><td>${e.exitIdx}</td>
                <td>$${U(e.entryPrice)}</td><td>$${U(e.exitPrice)}</td>
                <td class="${G(e.plPct)}">${e.plPct.toFixed(2)}%</td>
                <td>${e.days}</td>
                <td>${e.open?`Open`:`Closed`}</td>
              </tr>
            `).join(``):`<tr><td colspan="7" class="empty-row">No trades generated</td></tr>`}
          </tbody>
        </table>
      </section>
    `:`<p class="muted">Loading quote data…</p>`}
  `,s.equity?.length&&as(e.querySelector(`#equity-chart`),s.equity,1e4),c?.paths&&os(e.querySelector(`#monte-chart`),c),e.querySelector(`#bt-symbol`)?.addEventListener(`change`,t=>{ts=t.target.value,is(e)}),e.querySelector(`#bt-strategy`)?.addEventListener(`change`,t=>{ns=t.target.value,is(e)})}function as(e,t,n){if(!e)return;let r=window.devicePixelRatio||1,i=e.parentElement?.clientWidth||400;e.width=i*r,e.style.width=`${i}px`,e.height=200*r;let a=e.getContext(`2d`);a.scale(r,r);let o=t.map(e=>e.value),s=Math.min(...o,n)*.98,c=Math.max(...o,n)*1.02-s||1;a.fillStyle=getComputedStyle(document.documentElement).getPropertyValue(`--bg-panel`).trim()||`#1c2128`,a.fillRect(0,0,i,200),a.strokeStyle=`rgba(139,148,158,0.3)`,a.beginPath(),a.moveTo(10,10+180*(1-(n-s)/c)),a.lineTo(i-10,10+180*(1-(n-s)/c)),a.stroke(),a.strokeStyle=`#58a6ff`,a.lineWidth=2,a.beginPath(),o.forEach((e,t)=>{let n=10+t/(o.length-1||1)*(i-20),r=10+180*(1-(e-s)/c);t===0?a.moveTo(n,r):a.lineTo(n,r)}),a.stroke()}function os(e,t){if(!e)return;let n=window.devicePixelRatio||1,r=e.parentElement?.clientWidth||400;e.width=r*n,e.style.width=`${r}px`,e.height=200*n;let i=e.getContext(`2d`);i.scale(n,n);let a=t.paths.flat(),o=Math.min(...a)*.98,s=Math.max(...a)*1.02-o||1;t.paths.forEach((e,t)=>{i.strokeStyle=`rgba(88,166,255,${.15+t%3*.05})`,i.lineWidth=1,i.beginPath(),e.forEach((t,n)=>{let a=10+n/(e.length-1)*(r-20),c=10+180*(1-(t-o)/s);n===0?i.moveTo(a,c):i.lineTo(a,c)}),i.stroke()}),i.strokeStyle=`#3fb950`,i.lineWidth=2;let c=t.paths[0];c&&(i.beginPath(),c.forEach((e,n)=>{let a=10+n/(c.length-1)*(r-20),l=10+180*(1-(t.median-o)/s);n===0?i.moveTo(a,l):i.lineTo(a,(t.median,l))}))}var ss=`all`;async function cs(e){let t=B(),n=await Hr(z(),t,60),r=n.some(e=>e.live);ss===`unusual`?n=n.filter(e=>e.unusual):ss===`bullish`?n=n.filter(e=>e.sentiment===`bullish`):ss===`bearish`&&(n=n.filter(e=>e.sentiment===`bearish`));let i=n.reduce((e,t)=>e+t.notional,0),a=n.filter(e=>e.sentiment===`bullish`).length;e.innerHTML=`
    <div class="page-header">
      <h1>Options Flow</h1>
      <p class="page-sub">${r?`Live options chain highlights from FMP.`:`Simulated flow — add FMP key for live options data.`}</p>
    </div>

    <div class="options-summary">
      <div class="summary-card"><span class="summary-label">Total Notional</span>
        <span class="summary-value">$${(i/1e6).toFixed(1)}M</span></div>
      <div class="summary-card"><span class="summary-label">Trades</span>
        <span class="summary-value">${n.length}</span></div>
      <div class="summary-card"><span class="summary-label">Bullish %</span>
        <span class="summary-value pos">${n.length?(a/n.length*100).toFixed(0):0}%</span></div>
    </div>

    <div class="filter-chips">
      ${[`all`,`unusual`,`bullish`,`bearish`].map(e=>`
        <button class="preset-chip ${ss===e?`active`:``}" data-filter="${e}">${e.charAt(0).toUpperCase()+e.slice(1)}</button>
      `).join(``)}
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr><th>Ticker</th><th>Type</th><th>Strike</th><th>Expiry</th><th>Premium</th><th>Contracts</th><th>Notional</th><th>Sentiment</th></tr>
        </thead>
        <tbody>
          ${n.map(e=>`
            <tr class="clickable" data-symbol="${e.symbol}">
              <td class="sym">${e.symbol}</td>
              <td>${e.type}</td>
              <td>$${U(e.strike)}</td>
              <td>${e.expiry}</td>
              <td>$${U(e.premium)}</td>
              <td>${e.contracts.toLocaleString()}</td>
              <td>$${(e.notional/1e3).toFixed(0)}K</td>
              <td class="${e.sentiment===`bullish`?`pos`:e.sentiment===`bearish`?`neg`:``}">${e.sentiment}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-filter]`).forEach(t=>{t.addEventListener(`click`,()=>{ss=t.dataset.filter,cs(e)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}var ls=`upside`,us=`desc`;async function ds(e){let t=B(),n=await Br(z(),t),r=n.some(e=>e.live);n.sort((e,t)=>{let n=e[ls]??0,r=t[ls]??0;return us===`desc`?r-n:n-r});let i=n.filter(e=>e.revisions>0).length,a=n.filter(e=>e.revisions<0).length;e.innerHTML=`
    <div class="page-header">
      <h1>Analyst Ratings</h1>
      <p class="page-sub">${r?`Live consensus and price targets from FMP.`:`Simulated ratings — add FMP key for live analyst data.`}</p>
    </div>

    <div class="analyst-summary">
      <div class="summary-card"><span class="summary-label">Upgrades</span><span class="summary-value pos">${i}</span></div>
      <div class="summary-card"><span class="summary-label">Downgrades</span><span class="summary-value neg">${a}</span></div>
      <div class="summary-card"><span class="summary-label">Avg Upside</span>
        <span class="summary-value">${n.length?W(n.reduce((e,t)=>e+t.upside,0)/n.length):`—`}</span></div>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th data-sort="symbol">Ticker</th><th>Company</th><th data-sort="price">Price</th>
            <th data-sort="consensus">Consensus</th><th data-sort="target">Target</th>
            <th data-sort="upside">Upside</th><th data-sort="numAnalysts">Analysts</th>
            <th>Buy/Hold/Sell</th><th data-sort="revisions">Revisions</th>
          </tr>
        </thead>
        <tbody>
          ${n.map(e=>`
            <tr class="clickable" data-symbol="${e.symbol}">
              <td class="sym">${e.symbol}</td>
              <td>${e.name||`—`}</td>
              <td>$${U(e.price)}</td>
              <td>${e.consensus}</td>
              <td>$${U(e.target)}</td>
              <td class="${G(e.upside)}">${W(e.upside)}</td>
              <td>${e.numAnalysts}</td>
              <td class="analyst-bars">
                <span class="pos">${e.strongBuy+e.buy}</span> /
                <span>${e.hold}</span> /
                <span class="neg">${e.sell+e.strongSell}</span>
              </td>
              <td class="${e.revisions>0?`pos`:e.revisions<0?`neg`:``}">${e.revisions>0?`+`:``}${e.revisions}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-sort]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.sort;ls===n?us=us===`desc`?`asc`:`desc`:(ls=n,us=`desc`),ds(e)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function fs(e){let t=No(B());e.innerHTML=`
    <div class="page-header">
      <h1>Sector Rotation</h1>
      <p class="page-sub">Momentum-based sector ranking — identify leaders, improvers, and laggards.</p>
    </div>

    <div class="rotation-wheel panel">
      <div class="rotation-bars">
        ${t.map(e=>{let t=Po(e);return`
            <div class="rotation-bar-row">
              <span class="rotation-sector">${e.sector}</span>
              <div class="rotation-bar-track">
                <div class="rotation-bar-fill" style="width:${e.strength}%;background:${t.color}"></div>
              </div>
              <span class="rotation-mom ${G(e.avgChange)}">${W(e.avgChange)}</span>
              <span class="rotation-phase" style="color:${t.color}">${t.label}</span>
            </div>
          `}).join(``)}
      </div>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th>Rank</th><th>Sector</th><th>Stocks</th><th>Avg Change</th>
            <th>Adv %</th><th>Bullish %</th><th>Above SMA50</th>
            <th>Avg RSI</th><th>Rel Vol</th><th>Momentum</th>
            <th>Leader</th><th>Laggard</th>
          </tr>
        </thead>
        <tbody>
          ${t.map((e,t)=>{let n=Po(e);return`
              <tr>
                <td>${t+1}</td>
                <td><strong>${e.sector}</strong> <span style="color:${n.color};font-size:0.7rem">${n.label}</span></td>
                <td>${e.count}</td>
                <td class="${G(e.avgChange)}">${W(e.avgChange)}</td>
                <td>${e.advancingPct.toFixed(0)}%</td>
                <td>${e.bullishPct.toFixed(0)}%</td>
                <td>${e.aboveSma50Pct.toFixed(0)}%</td>
                <td>${e.avgRsi.toFixed(0)}</td>
                <td>${e.relVol.toFixed(1)}x</td>
                <td class="${G(e.momentum)}">${e.momentum.toFixed(1)}</td>
                <td class="sym clickable" data-symbol="${e.topStock?.symbol||``}">${e.topStock?.symbol||`—`}</td>
                <td class="sym clickable" data-symbol="${e.laggard?.symbol||``}">${e.laggard?.symbol||`—`}</td>
              </tr>
            `}).join(``)}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.dataset.symbol&&e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}var ps=0;async function ms(e){let t=B(),n=await Vr(z(),t),r=n.some(e=>e.live);ps>0&&(n=n.filter(e=>e.squeezeScore>=ps)),e.innerHTML=`
    <div class="page-header">
      <h1>Short Interest Scanner</h1>
      <p class="page-sub">${r?`Live short interest from FMP.`:`Simulated short data — add FMP key for live short interest.`}</p>
    </div>

    <div class="filter-chips">
      <button class="preset-chip ${ps===0?`active`:``}" data-min="0">All</button>
      <button class="preset-chip ${ps===50?`active`:``}" data-min="50">Squeeze 50+</button>
      <button class="preset-chip ${ps===70?`active`:``}" data-min="70">Squeeze 70+</button>
      <button class="preset-chip ${ps===85?`active`:``}" data-min="85">High Risk 85+</button>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr><th>Ticker</th><th>Price</th><th>Change</th><th>Short %</th><th>Days Cover</th><th>Short Chg</th><th>Squeeze</th><th>Sector</th></tr>
        </thead>
        <tbody>
          ${n.map(e=>`
            <tr class="clickable" data-symbol="${e.symbol}">
              <td class="sym">${e.symbol}</td>
              <td>$${U(e.price)}</td>
              <td class="${G(e.changePct)}">${W(e.changePct)}</td>
              <td>${e.shortPct.toFixed(2)}%</td>
              <td>${e.daysToCover.toFixed(1)}</td>
              <td class="${G(e.change)}">${e.change>=0?`+`:``}${e.change.toFixed(2)}%</td>
              <td><span class="squeeze-badge ${e.squeezeScore>=70?`hot`:``}">${e.squeezeScore}</span></td>
              <td>${e.sector||`—`}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-min]`).forEach(t=>{t.addEventListener(`click`,()=>{ps=Number(t.dataset.min),ms(e)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function hs(e){let t=Mn(),n=B(),r=t.map(e=>({sym:e,q:n.get(e)})).filter(e=>e.q);e.innerHTML=`
    <div class="page-header">
      <h1>Watchlist</h1>
      <p class="page-sub">${t.length} starred tickers — press <kbd>/</kbd> to add more from any page.</p>
    </div>

    ${r.length?`
      <div class="watchlist-grid">
        ${r.map(({sym:e,q:t})=>`
          <div class="watchlist-card panel clickable" data-symbol="${e}" data-live-symbol="${e}">
            <div class="wl-head">
              <span class="sym">${e}</span>
              <span class="${G(t.changePct)}" data-live="pct">${W(t.changePct)}</span>
            </div>
            <p class="wl-name">${t.name||``}</p>
            <div class="wl-price" data-live="price">$${U(t.price)}</div>
            ${xr(e)}
            <div class="wl-meta">
              <span>Vol ${gr(t.volume)}</span>
              <span>RSI ${t.ta?.rsi?.toFixed(0)??`—`}</span>
            </div>
            ${t.primarySignal?`<span class="wl-signal">${t.primarySignal}</span>`:``}
          </div>
        `).join(``)}
      </div>
      <div class="table-wrap">
        <table class="data-table finviz-tbl">
          <thead><tr><th>Ticker</th><th>Price</th><th>Change</th><th>RSI</th><th>Signal</th><th>Prediction</th></tr></thead>
          <tbody>
            ${r.map(({sym:e,q:t})=>`
              <tr class="clickable" data-symbol="${e}" data-live-symbol="${e}">
                <td class="sym">${e}</td>
                <td data-live="price">$${U(t.price)}</td>
                <td class="${G(t.changePct)}" data-live="pct">${W(t.changePct)}</td>
                <td>${t.ta?.rsi?.toFixed(1)??`—`}</td>
                <td>${t.primarySignal||`—`}</td>
                <td class="${t.prediction?.direction===`bullish`?`pos`:t.prediction?.direction===`bearish`?`neg`:``}">${t.prediction?.direction||`—`}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </div>
    `:`
      <div class="empty-compare panel">
        <p>No favorites yet. Star tickers in the screener or quote panel, or search with <kbd>/</kbd>.</p>
        <a href="#/screener" class="btn-primary">Go to Screener</a>
      </div>
    `}
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),e.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=n.get(e.dataset.spark);t?.sparkline?.length&&br(e,t.sparkline,{width:120,height:36})})}async function gs(e){let t=z(),n=B(),r=await Ur(t),i=r.length>0,a=r.map(e=>{let t=n.get(e.symbol);return{...e,name:t?.name,price:t?.price}});e.innerHTML=`
    <div class="page-header">
      <h1>Dividend Calendar</h1>
      <p class="page-sub">${i?`Upcoming ex-dividend dates from FMP.`:`Add an FMP API key in Settings for live dividend calendar.`}</p>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr><th>Symbol</th><th>Company</th><th>Ex-Date</th><th>Payment</th><th>Amount</th><th>Yield</th><th>Price</th></tr>
        </thead>
        <tbody>
          ${a.length?a.map(e=>`
            <tr class="clickable" data-symbol="${e.symbol}">
              <td class="sym">${e.symbol}</td>
              <td>${e.name||`—`}</td>
              <td>${e.exDate}</td>
              <td>${e.date}</td>
              <td>$${U(e.amount)}</td>
              <td>${e.yield==null?`—`:`${e.yield}%`}</td>
              <td>${e.price?`$${U(e.price)}`:`—`}</td>
            </tr>
          `).join(``):`<tr><td colspan="7" class="empty-row">No dividend data — check FMP key or try again later</td></tr>`}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function _s(e){let t=Rn(),n=B(),r=t.map(e=>{let t=n.get(e.symbol)?.price??e.entryPrice,r=e.side===`long`?(t-e.entryPrice)*e.shares:(e.entryPrice-t)*e.shares,i=(t-e.entryPrice)/e.entryPrice*100*(e.side===`long`?1:-1);return{...e,current:t,pnl:r,pnlPct:i,open:!e.closedAt}}),i=r.filter(e=>e.open),a=r.filter(e=>!e.open),o=r.reduce((e,t)=>e+(t.closedAt?t.realizedPnl??t.pnl:t.pnl),0);e.innerHTML=`
    <div class="page-header">
      <h1>Paper Trading</h1>
      <p class="page-sub">Simulated positions against live quotes — no real money.</p>
    </div>

    <div class="paper-summary">
      <div class="summary-card"><span class="summary-label">Open Positions</span><span class="summary-value">${i.length}</span></div>
      <div class="summary-card"><span class="summary-label">Total P&amp;L</span>
        <span class="summary-value ${G(o)}">$${o.toFixed(2)}</span></div>
    </div>

    <form class="panel paper-form" id="paper-form">
      <div class="filter-group"><label>Symbol</label><input name="symbol" placeholder="AAPL" required /></div>
      <div class="filter-group"><label>Side</label><select name="side"><option value="long">Long</option><option value="short">Short</option></select></div>
      <div class="filter-group"><label>Shares</label><input type="number" name="shares" min="1" value="10" required /></div>
      <button type="submit" class="btn-primary">Open Position</button>
    </form>

    <section class="panel">
      <h2 class="panel-title">Open Positions</h2>
      <table class="data-table finviz-tbl">
        <thead><tr><th>Symbol</th><th>Side</th><th>Shares</th><th>Entry</th><th>Current</th><th>P&amp;L</th><th></th></tr></thead>
        <tbody>
          ${i.length?i.map(e=>`
            <tr>
              <td class="sym">${e.symbol}</td>
              <td class="${e.side===`long`?`pos`:`neg`}">${e.side}</td>
              <td>${e.shares}</td>
              <td>$${U(e.entryPrice)}</td>
              <td>$${U(e.current)}</td>
              <td class="${G(e.pnl)}">$${e.pnl.toFixed(2)} (${W(e.pnlPct)})</td>
              <td><button class="btn-ghost btn-sm" data-close="${e.id}">Close</button></td>
            </tr>
          `).join(``):`<tr><td colspan="7" class="empty-row">No open positions</td></tr>`}
        </tbody>
      </table>
    </section>

    ${a.length?`
      <section class="panel">
        <h2 class="panel-title">Closed Trades</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Symbol</th><th>Side</th><th>P&amp;L</th><th>Closed</th><th></th></tr></thead>
          <tbody>
            ${a.map(e=>`
              <tr>
                <td class="sym">${e.symbol}</td>
                <td>${e.side}</td>
                <td class="${G(e.realizedPnl)}">$${(e.realizedPnl??0).toFixed(2)}</td>
                <td>${new Date(e.closedAt).toLocaleDateString()}</td>
                <td><button class="btn-ghost btn-sm" data-rm="${e.id}">Remove</button></td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </section>
    `:``}
  `,e.querySelector(`#paper-form`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(e.target),r=t.get(`symbol`).toString().toUpperCase(),i=n.get(r);zn({symbol:r,side:t.get(`side`),shares:Number(t.get(`shares`)),entryPrice:i?.price??100})}),e.querySelectorAll(`[data-close]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=i.find(t=>t.id===e.dataset.close);t&&Bn(t.id,t.current)})}),e.querySelectorAll(`[data-rm]`).forEach(e=>{e.addEventListener(`click`,()=>Vn(e.dataset.rm))})}var vs={h:{path:`/`,label:`Home`},d:{path:`/dashboard`,label:`Dashboard`},s:{path:`/screener`,label:`Screener`},w:{path:`/watchlist`,label:`Watchlist`},n:{path:`/news`,label:`News`},p:{path:`/portfolio`,label:`Portfolio`},a:{path:`/alerts`,label:`Alerts`},g:{path:`/groups`,label:`Groups`},c:{path:`/charts`,label:`Charts`},",":{path:`/settings`,label:`Settings`}};function ys(){document.addEventListener(`keydown`,e=>{if(e.target.matches(`input, textarea, select`)||e.ctrlKey||e.metaKey||e.altKey)return;if(e.key===`?`){bs();return}let t=vs[e.key];t&&(e.preventDefault(),location.hash=t.path)})}function bs(){let e=document.getElementById(`kbd-help`);if(e){e.remove();return}let t=document.createElement(`div`);t.id=`kbd-help`,t.className=`kbd-help-overlay`,t.innerHTML=`
    <div class="kbd-help panel">
      <h3>Keyboard Shortcuts</h3>
      <ul>
        <li><kbd>/</kbd> or <kbd>Ctrl+K</kbd> — Search ticker</li>
        ${Object.entries(vs).map(([e,t])=>`<li><kbd>${e}</kbd> — ${t.label}</li>`).join(``)}
        <li><kbd>?</kbd> — Toggle this help</li>
        <li><kbd>Esc</kbd> — Close panels</li>
      </ul>
      <button class="btn-secondary" id="kbd-close">Close</button>
    </div>
  `,document.body.appendChild(t),t.addEventListener(`click`,e=>{e.target===t&&t.remove()}),t.querySelector(`#kbd-close`)?.addEventListener(`click`,()=>t.remove())}async function xs(e,t){let n=e.alertWebhookUrl?.trim();if(!n)return!1;try{return(await fetch(n,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({text:`StockViz Alert: ${t.symbol} — ${t.detail}`,symbol:t.symbol,type:t.type,value:t.value,detail:t.detail,triggeredAt:Date.now()})})).ok}catch{return!1}}var Ss={"/":ea,"/dashboard":Fo,"/screener":Ha,"/map":Ka,"/news":qa,"/portfolio":Ya,"/compare":Qa,"/signals":eo,"/patterns":to,"/groups":no,"/charts":io,"/multicharts":Eo,"/alerts":ko,"/export":Mo,"/internals":Io,"/correlation":Uo,"/backtest":is,"/options":cs,"/analyst":ds,"/rotation":fs,"/shorts":ms,"/futures":oo,"/calendar":so,"/insider":co,"/settings":xo,"/watchlist":hs,"/dividends":gs,"/paper":_s},Cs=new Set([`quotes`,`status`]),ws=`/`,Ts=!0,Es=!1;async function Ds(){let e=z();Es=!0,Os(`loading`);try{let[{quotes:t,source:n},r]=await Promise.all([Bt(e,{onProgress:(e,t)=>{Dn(e,{fetchedAt:Date.now(),source:t}),Os(`loading`)}}),qt(e)]);Dn(t,{fetchedAt:Date.now(),source:n}),On(r),Os(n),dr(t).forEach(t=>{H(`Alert: ${t.symbol} — ${t.detail}`,`success`,5e3),e.pushNotifications&&po({title:`StockViz: ${t.symbol}`,body:t.detail,tag:`alert-${t.id}`}),xs(e,t)}),ks()}catch(e){console.error(`Quote fetch failed:`,e),Os(`error`)}finally{Es=!1}}function Os(e){let t=document.getElementById(`status-dot`),n=document.getElementById(`status-text`),r=document.getElementById(`last-update`),i=document.getElementById(`market-status`),a=An(),o=kn();if(e===`loading`)t.className=`status-dot`,n.textContent=`Loading quotes…`;else if(e===`error`)t.className=`status-dot`,n.textContent=`Update failed`;else if(e===`fmp`){t.className=`status-dot live`;let e=je();n.textContent=e.source===`sp500`?`Live · FMP · ${e.label}`:`Live · FMP`}else e===`finnhub`?(t.className=`status-dot live`,n.textContent=`Live · Finnhub`):(t.className=`status-dot mock`,n.textContent=`Simulated + TA Engine`);a.lastFetchAt&&(r.textContent=`Updated ${vr(a.lastFetchAt)}`),i&&o&&(i.textContent=o.label,i.className=`market-status ${o.isOpen?`open`:`closed`}`),As()}function ks(){let e=document.getElementById(`alert-badge`);if(!e)return;let t=Kn(),n=qn();e.textContent=t+n,e.hidden=t+n===0,e.classList.toggle(`has-triggered`,n>0)}function As(){let e=document.getElementById(`footer-stats`);if(!e)return;let t=[...B().values()],n=t.reduce((e,t)=>e+(t.patterns?.length||0),0),r=t.filter(e=>e.prediction?.direction===`bullish`).length;e.innerHTML=`
    <span>${je().label}</span>
    <span>${n} patterns</span>
    <span class="pos">${r} bullish</span>
  `}var js=null;async function Ms(){let e=await qr(z()).catch(()=>null);e?.size&&(js=e)}function Ns(){let e=document.getElementById(`ticker-bar`),t=B(),n=[`SPY`,`QQQ`,`DIA`,`IWM`],r={SPY:`S&P 500`,QQQ:`NASDAQ`,DIA:`DOW`,IWM:`RUSSELL 2K`};e.innerHTML=n.map(e=>{let n=js?.get(e),i=n||t.get(e);if(!i)return``;let a=G(i.changePct),o=i.price,s=i.changePct;return`
      <span class="ticker-item" data-live-symbol="${e}">
        <span class="ticker-label">${n?.label||r[e]}</span>
        <span class="ticker-price" data-live="price">$${U(o)}</span>
        <span class="ticker-chg ${a}" data-live="pct">${W(s)}</span>
      </span>
    `}).join(``),e.querySelectorAll(`.ticker-item`).forEach(e=>{e.style.cursor=`pointer`,e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.liveSymbol}))})})}function Ps(){document.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=B().get(e.dataset.spark);t?.sparkline?.length&&br(e,t.sparkline,{width:Number(e.getAttribute(`width`))||72,height:Number(e.getAttribute(`height`))||24})})}function Fs(){return(location.hash.slice(1)||`/`).split(`?`)[0]||`/`}function Is(e=!0){ws=Fs(),Ss[ws]||(ws=`/`),document.querySelectorAll(`.main-nav a`).forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)?.startsWith(`#${ws}`))});let t=document.getElementById(`main-content`);e&&!Ts&&t.classList.add(`page-enter`);let n=(Ss[ws]||ea)(t),r=()=>{Ns(),Ps(),e&&requestAnimationFrame(()=>t.classList.remove(`page-enter`)),Ts=!1};n?.then?n.then(r):r(),document.getElementById(`nav-toggle`)?.setAttribute(`aria-expanded`,`false`),document.querySelector(`.main-nav`)?.classList.remove(`open`)}function Ls(e){if(e===`alerts`&&ks(),Cs.has(e)&&Ss[ws]&&!Es){wr(),Ns(),Os(An().dataSource);return}Ss[ws]?Is(!1):Ns()}function Rs(){ui(),yi(),mr(),ys(),Ms(),document.getElementById(`nav-toggle`)?.addEventListener(`click`,()=>{document.querySelector(`.main-nav`)?.classList.toggle(`open`)}),document.getElementById(`theme-toggle`)?.addEventListener(`click`,bn),vn(z().theme),Ia(),window.addEventListener(`hashchange`,()=>{Ia(),Is()}),window.addEventListener(`stockviz:select`,e=>{jn(e.detail),di(e.detail)}),window.addEventListener(`stockviz:settings-saved`,async()=>{lr(),js=null,await Be(z()),Ms(),Ds().then(()=>cr(Ds))}),sr(Ls);let e=z();ze(e),Is(),Be(e).catch(e=>console.warn(`Universe init failed:`,e)).finally(()=>cr(Ds)),`serviceWorker`in navigator&&navigator.serviceWorker.register(`/stockviz/sw.js`).catch(()=>{})}Rs();