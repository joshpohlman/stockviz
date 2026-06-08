(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Technology`,`Healthcare`,`Financial`,`Consumer Cyclical`,`Consumer Defensive`,`Industrials`,`Energy`,`Utilities`,`Real Estate`,`Basic Materials`,`Communication Services`],t=[{symbol:`AAPL`,name:`Apple Inc.`,sector:`Technology`,industry:`Consumer Electronics`,marketCap:32e11},{symbol:`MSFT`,name:`Microsoft Corp.`,sector:`Technology`,industry:`Software`,marketCap:31e11},{symbol:`NVDA`,name:`NVIDIA Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:28e11},{symbol:`GOOGL`,name:`Alphabet Inc.`,sector:`Communication Services`,industry:`Internet Content`,marketCap:21e11},{symbol:`AMZN`,name:`Amazon.com Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:19e11},{symbol:`META`,name:`Meta Platforms`,sector:`Communication Services`,industry:`Social Media`,marketCap:14e11},{symbol:`TSLA`,name:`Tesla Inc.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e11},{symbol:`BRK.B`,name:`Berkshire Hathaway`,sector:`Financial`,industry:`Insurance`,marketCap:9e11},{symbol:`AVGO`,name:`Broadcom Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:75e10},{symbol:`JPM`,name:`JPMorgan Chase`,sector:`Financial`,industry:`Banks`,marketCap:58e10},{symbol:`V`,name:`Visa Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:56e10},{symbol:`UNH`,name:`UnitedHealth Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:52e10},{symbol:`XOM`,name:`Exxon Mobil`,sector:`Energy`,industry:`Oil & Gas`,marketCap:48e10},{symbol:`LLY`,name:`Eli Lilly`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:75e10},{symbol:`MA`,name:`Mastercard Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:45e10},{symbol:`COST`,name:`Costco Wholesale`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:4e11},{symbol:`HD`,name:`Home Depot`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:38e10},{symbol:`PG`,name:`Procter & Gamble`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:37e10},{symbol:`JNJ`,name:`Johnson & Johnson`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:36e10},{symbol:`ABBV`,name:`AbbVie Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:31e10},{symbol:`NFLX`,name:`Netflix Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:29e10},{symbol:`CRM`,name:`Salesforce Inc.`,sector:`Technology`,industry:`Software`,marketCap:28e10},{symbol:`BAC`,name:`Bank of America`,sector:`Financial`,industry:`Banks`,marketCap:31e10},{symbol:`ORCL`,name:`Oracle Corp.`,sector:`Technology`,industry:`Software`,marketCap:38e10},{symbol:`CVX`,name:`Chevron Corp.`,sector:`Energy`,industry:`Oil & Gas`,marketCap:29e10},{symbol:`KO`,name:`Coca-Cola Co.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:27e10},{symbol:`AMD`,name:`Advanced Micro Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:25e10},{symbol:`PEP`,name:`PepsiCo Inc.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:23e10},{symbol:`WMT`,name:`Walmart Inc.`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:52e10},{symbol:`DIS`,name:`Walt Disney Co.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e10},{symbol:`CSCO`,name:`Cisco Systems`,sector:`Technology`,industry:`Communication Equipment`,marketCap:21e10},{symbol:`INTC`,name:`Intel Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:95e9},{symbol:`QCOM`,name:`Qualcomm Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:19e10},{symbol:`IBM`,name:`IBM Corp.`,sector:`Technology`,industry:`IT Services`,marketCap:18e10},{symbol:`GE`,name:`GE Aerospace`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:19e10},{symbol:`CAT`,name:`Caterpillar Inc.`,sector:`Industrials`,industry:`Farm & Construction`,marketCap:175e9},{symbol:`BA`,name:`Boeing Co.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:13e10},{symbol:`UPS`,name:`United Parcel Service`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:11e10},{symbol:`RTX`,name:`RTX Corp.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:16e10},{symbol:`HON`,name:`Honeywell Intl.`,sector:`Industrials`,industry:`Conglomerates`,marketCap:14e10},{symbol:`MRK`,name:`Merck & Co.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:25e10},{symbol:`PFE`,name:`Pfizer Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:15e10},{symbol:`TMO`,name:`Thermo Fisher`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:2e11},{symbol:`ABT`,name:`Abbott Labs`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:21e10},{symbol:`AMGN`,name:`Amgen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:155e9},{symbol:`GILD`,name:`Gilead Sciences`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:105e9},{symbol:`GS`,name:`Goldman Sachs`,sector:`Financial`,industry:`Capital Markets`,marketCap:16e10},{symbol:`MS`,name:`Morgan Stanley`,sector:`Financial`,industry:`Capital Markets`,marketCap:155e9},{symbol:`WFC`,name:`Wells Fargo`,sector:`Financial`,industry:`Banks`,marketCap:21e10},{symbol:`C`,name:`Citigroup Inc.`,sector:`Financial`,industry:`Banks`,marketCap:13e10},{symbol:`BLK`,name:`BlackRock Inc.`,sector:`Financial`,industry:`Asset Management`,marketCap:13e10},{symbol:`AXP`,name:`American Express`,sector:`Financial`,industry:`Credit Services`,marketCap:175e9},{symbol:`NKE`,name:`Nike Inc.`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:115e9},{symbol:`SBUX`,name:`Starbucks Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:95e9},{symbol:`MCD`,name:`McDonald's Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:21e10},{symbol:`LOW`,name:`Lowe's Companies`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:14e10},{symbol:`TGT`,name:`Target Corp.`,sector:`Consumer Cyclical`,industry:`Discount Stores`,marketCap:65e9},{symbol:`F`,name:`Ford Motor Co.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:45e9},{symbol:`GM`,name:`General Motors`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:55e9},{symbol:`PM`,name:`Philip Morris`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:16e10},{symbol:`MO`,name:`Altria Group`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:85e9},{symbol:`CL`,name:`Colgate-Palmolive`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:75e9},{symbol:`COP`,name:`ConocoPhillips`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:13e10},{symbol:`SLB`,name:`Schlumberger`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:65e9},{symbol:`EOG`,name:`EOG Resources`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:75e9},{symbol:`OXY`,name:`Occidental Petroleum`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:5e10},{symbol:`NEE`,name:`NextEra Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:15e10},{symbol:`DUK`,name:`Duke Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:8e10},{symbol:`SO`,name:`Southern Co.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:9e10},{symbol:`D`,name:`Dominion Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:45e9},{symbol:`AMT`,name:`American Tower`,sector:`Real Estate`,industry:`REIT - Specialty`,marketCap:95e9},{symbol:`PLD`,name:`Prologis Inc.`,sector:`Real Estate`,industry:`REIT - Industrial`,marketCap:11e10},{symbol:`EQIX`,name:`Equinix Inc.`,sector:`Real Estate`,industry:`REIT - Data Centers`,marketCap:8e10},{symbol:`LIN`,name:`Linde plc`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:21e10},{symbol:`APD`,name:`Air Products`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:6e10},{symbol:`FCX`,name:`Freeport-McMoRan`,sector:`Basic Materials`,industry:`Copper`,marketCap:55e9},{symbol:`NEM`,name:`Newmont Corp.`,sector:`Basic Materials`,industry:`Gold`,marketCap:5e10},{symbol:`T`,name:`AT&T Inc.`,sector:`Communication Services`,industry:`Telecom`,marketCap:13e10},{symbol:`VZ`,name:`Verizon`,sector:`Communication Services`,industry:`Telecom`,marketCap:17e10},{symbol:`CMCSA`,name:`Comcast Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:16e10},{symbol:`TMUS`,name:`T-Mobile US`,sector:`Communication Services`,industry:`Telecom`,marketCap:23e10},{symbol:`ADBE`,name:`Adobe Inc.`,sector:`Technology`,industry:`Software`,marketCap:23e10},{symbol:`NOW`,name:`ServiceNow`,sector:`Technology`,industry:`Software`,marketCap:18e10},{symbol:`INTU`,name:`Intuit Inc.`,sector:`Technology`,industry:`Software`,marketCap:17e10},{symbol:`TXN`,name:`Texas Instruments`,sector:`Technology`,industry:`Semiconductors`,marketCap:175e9},{symbol:`MU`,name:`Micron Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:11e10},{symbol:`LRCX`,name:`Lam Research`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:1e11},{symbol:`SNPS`,name:`Synopsys Inc.`,sector:`Technology`,industry:`Software`,marketCap:85e9},{symbol:`PANW`,name:`Palo Alto Networks`,sector:`Technology`,industry:`Software`,marketCap:115e9},{symbol:`CRWD`,name:`CrowdStrike`,sector:`Technology`,industry:`Software`,marketCap:8e10},{symbol:`PLTR`,name:`Palantir Technologies`,sector:`Technology`,industry:`Software`,marketCap:7e10},{symbol:`UBER`,name:`Uber Technologies`,sector:`Technology`,industry:`Software`,marketCap:15e10},{symbol:`SQ`,name:`Block Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`SHOP`,name:`Shopify Inc.`,sector:`Technology`,industry:`Software`,marketCap:95e9},{symbol:`PYPL`,name:`PayPal Holdings`,sector:`Financial`,industry:`Credit Services`,marketCap:75e9},{symbol:`COIN`,name:`Coinbase Global`,sector:`Financial`,industry:`Capital Markets`,marketCap:55e9},{symbol:`SPY`,name:`SPDR S&P 500 ETF`,sector:`Financial`,industry:`ETF`,marketCap:5e11},{symbol:`QQQ`,name:`Invesco QQQ Trust`,sector:`Financial`,industry:`ETF`,marketCap:25e10},{symbol:`IWM`,name:`iShares Russell 2000`,sector:`Financial`,industry:`ETF`,marketCap:6e10},{symbol:`DIA`,name:`SPDR Dow Jones ETF`,sector:`Financial`,industry:`ETF`,marketCap:35e9},{symbol:`DE`,name:`Deere & Co.`,sector:`Industrials`,industry:`Farm Equipment`,marketCap:12e10},{symbol:`MMM`,name:`3M Company`,sector:`Industrials`,industry:`Conglomerates`,marketCap:7e10},{symbol:`LMT`,name:`Lockheed Martin`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:115e9},{symbol:`UNP`,name:`Union Pacific`,sector:`Industrials`,industry:`Railroads`,marketCap:145e9},{symbol:`FDX`,name:`FedEx Corp.`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:65e9},{symbol:`ISRG`,name:`Intuitive Surgical`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`VRTX`,name:`Vertex Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:115e9},{symbol:`REGN`,name:`Regeneron Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:95e9},{symbol:`BMY`,name:`Bristol-Myers Squibb`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:95e9},{symbol:`CI`,name:`Cigna Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:95e9},{symbol:`ELV`,name:`Elevance Health`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:11e10},{symbol:`ZTS`,name:`Zoetis Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:8e10},{symbol:`MDLZ`,name:`Mondelez Intl.`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:95e9},{symbol:`KHC`,name:`Kraft Heinz`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:4e10},{symbol:`GIS`,name:`General Mills`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:38e9},{symbol:`KMB`,name:`Kimberly-Clark`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:48e9},{symbol:`MAR`,name:`Marriott Intl.`,sector:`Consumer Cyclical`,industry:`Lodging`,marketCap:75e9},{symbol:`BKNG`,name:`Booking Holdings`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:16e10},{symbol:`ABNB`,name:`Airbnb Inc.`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:85e9},{symbol:`ROST`,name:`Ross Stores`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:45e9},{symbol:`TJX`,name:`TJX Companies`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:12e10},{symbol:`ORLY`,name:`O'Reilly Automotive`,sector:`Consumer Cyclical`,industry:`Auto Parts`,marketCap:6e10},{symbol:`PSX`,name:`Phillips 66`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`MPC`,name:`Marathon Petroleum`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`VLO`,name:`Valero Energy`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:45e9},{symbol:`HAL`,name:`Halliburton Co.`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:25e9},{symbol:`DVN`,name:`Devon Energy`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:25e9},{symbol:`AEP`,name:`American Electric Power`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:5e10},{symbol:`EXC`,name:`Exelon Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`SRE`,name:`Sempra Energy`,sector:`Utilities`,industry:`Utilities - Diversified`,marketCap:5e10},{symbol:`SPG`,name:`Simon Property Group`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:55e9},{symbol:`O`,name:`Realty Income`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:48e9},{symbol:`WELL`,name:`Welltower Inc.`,sector:`Real Estate`,industry:`REIT - Healthcare`,marketCap:65e9},{symbol:`DOW`,name:`Dow Inc.`,sector:`Basic Materials`,industry:`Chemicals`,marketCap:38e9},{symbol:`DD`,name:`DuPont de Nemours`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:35e9},{symbol:`NUE`,name:`Nucor Corp.`,sector:`Basic Materials`,industry:`Steel`,marketCap:35e9},{symbol:`STLD`,name:`Steel Dynamics`,sector:`Basic Materials`,industry:`Steel`,marketCap:2e10},{symbol:`EA`,name:`Electronic Arts`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:38e9},{symbol:`TTWO`,name:`Take-Two Interactive`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`ROKU`,name:`Roku Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:1e10},{symbol:`SNAP`,name:`Snap Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:18e9},{symbol:`PINS`,name:`Pinterest Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:22e9},{symbol:`SPOT`,name:`Spotify Technology`,sector:`Communication Services`,industry:`Internet Content`,marketCap:75e9},{symbol:`WDAY`,name:`Workday Inc.`,sector:`Technology`,industry:`Software`,marketCap:65e9},{symbol:`TEAM`,name:`Atlassian Corp.`,sector:`Technology`,industry:`Software`,marketCap:55e9},{symbol:`DDOG`,name:`Datadog Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`NET`,name:`Cloudflare Inc.`,sector:`Technology`,industry:`Software`,marketCap:35e9},{symbol:`SNOW`,name:`Snowflake Inc.`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`MDB`,name:`MongoDB Inc.`,sector:`Technology`,industry:`Software`,marketCap:25e9},{symbol:`ZS`,name:`Zscaler Inc.`,sector:`Technology`,industry:`Software`,marketCap:3e10},{symbol:`FTNT`,name:`Fortinet Inc.`,sector:`Technology`,industry:`Software`,marketCap:75e9},{symbol:`KLAC`,name:`KLA Corp.`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:9e10},{symbol:`AMAT`,name:`Applied Materials`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:16e10},{symbol:`ADI`,name:`Analog Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:1e11},{symbol:`MRVL`,name:`Marvell Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:7e10},{symbol:`ON`,name:`ON Semiconductor`,sector:`Technology`,industry:`Semiconductors`,marketCap:3e10},{symbol:`SMCI`,name:`Super Micro Computer`,sector:`Technology`,industry:`Computer Hardware`,marketCap:3e10},{symbol:`DELL`,name:`Dell Technologies`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e10},{symbol:`HPE`,name:`Hewlett Packard Enterprise`,sector:`Technology`,industry:`Computer Hardware`,marketCap:22e9},{symbol:`SCHW`,name:`Charles Schwab`,sector:`Financial`,industry:`Capital Markets`,marketCap:13e10},{symbol:`USB`,name:`U.S. Bancorp`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`PNC`,name:`PNC Financial`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`TFC`,name:`Truist Financial`,sector:`Financial`,industry:`Banks`,marketCap:55e9},{symbol:`ICE`,name:`Intercontinental Exchange`,sector:`Financial`,industry:`Financial Data`,marketCap:9e10},{symbol:`CME`,name:`CME Group`,sector:`Financial`,industry:`Financial Data`,marketCap:95e9},{symbol:`SPGI`,name:`S&P Global`,sector:`Financial`,industry:`Financial Data`,marketCap:15e10},{symbol:`MCO`,name:`Moody's Corp.`,sector:`Financial`,industry:`Financial Data`,marketCap:85e9},{symbol:`HOOD`,name:`Robinhood Markets`,sector:`Financial`,industry:`Capital Markets`,marketCap:2e10},{symbol:`SOFI`,name:`SoFi Technologies`,sector:`Financial`,industry:`Credit Services`,marketCap:12e9},{symbol:`RIVN`,name:`Rivian Automotive`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:12e9},{symbol:`LCID`,name:`Lucid Group`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e9},{symbol:`ARM`,name:`Arm Holdings`,sector:`Technology`,industry:`Semiconductors`,marketCap:14e10},{symbol:`MSTR`,name:`MicroStrategy`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`DKNG`,name:`DraftKings`,sector:`Consumer Cyclical`,industry:`Gambling`,marketCap:2e10},{symbol:`ETN`,name:`Eaton Corp.`,sector:`Industrials`,industry:`Electrical Equipment`,marketCap:12e10},{symbol:`EMR`,name:`Emerson Electric`,sector:`Industrials`,industry:`Electrical Equipment`,marketCap:7e10},{symbol:`ITW`,name:`Illinois Tool Works`,sector:`Industrials`,industry:`Industrial Products`,marketCap:75e9},{symbol:`CSX`,name:`CSX Corp.`,sector:`Industrials`,industry:`Railroads`,marketCap:7e10},{symbol:`NSC`,name:`Norfolk Southern`,sector:`Industrials`,industry:`Railroads`,marketCap:55e9},{symbol:`WM`,name:`Waste Management`,sector:`Industrials`,industry:`Waste Services`,marketCap:85e9},{symbol:`RSG`,name:`Republic Services`,sector:`Industrials`,industry:`Waste Services`,marketCap:6e10},{symbol:`AIG`,name:`American Intl. Group`,sector:`Financial`,industry:`Insurance`,marketCap:45e9},{symbol:`MET`,name:`MetLife Inc.`,sector:`Financial`,industry:`Insurance`,marketCap:5e10},{symbol:`PRU`,name:`Prudential Financial`,sector:`Financial`,industry:`Insurance`,marketCap:4e10},{symbol:`ALL`,name:`Allstate Corp.`,sector:`Financial`,industry:`Insurance`,marketCap:45e9},{symbol:`TRV`,name:`Travelers Companies`,sector:`Financial`,industry:`Insurance`,marketCap:5e10},{symbol:`AFL`,name:`Aflac Inc.`,sector:`Financial`,industry:`Insurance`,marketCap:55e9},{symbol:`CB`,name:`Chubb Limited`,sector:`Financial`,industry:`Insurance`,marketCap:11e10},{symbol:`PGR`,name:`Progressive Corp.`,sector:`Financial`,industry:`Insurance`,marketCap:14e10},{symbol:`VST`,name:`Vistra Corp.`,sector:`Utilities`,industry:`Utilities - Independent`,marketCap:4e10},{symbol:`CEG`,name:`Constellation Energy`,sector:`Utilities`,industry:`Utilities - Independent`,marketCap:75e9},{symbol:`PCG`,name:`PG&E Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:3e10},{symbol:`ED`,name:`Consolidated Edison`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:35e9},{symbol:`XEL`,name:`Xcel Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`WEC`,name:`WEC Energy Group`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:3e10},{symbol:`EIX`,name:`Edison Intl.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:2e10},{symbol:`AWK`,name:`American Water Works`,sector:`Utilities`,industry:`Utilities - Water`,marketCap:28e9},{symbol:`CTVA`,name:`Corteva Inc.`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:42e9},{symbol:`CF`,name:`CF Industries`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:14e9},{symbol:`MOS`,name:`Mosaic Co.`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:1e10},{symbol:`ALB`,name:`Albemarle Corp.`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:12e9},{symbol:`VMC`,name:`Vulcan Materials`,sector:`Basic Materials`,industry:`Building Materials`,marketCap:35e9},{symbol:`MLM`,name:`Martin Marietta`,sector:`Basic Materials`,industry:`Building Materials`,marketCap:35e9},{symbol:`IFF`,name:`Intl. Flavors & Fragrances`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:22e9},{symbol:`LULU`,name:`Lululemon Athletica`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:35e9},{symbol:`DECK`,name:`Deckers Outdoor`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:22e9},{symbol:`ULTA`,name:`Ulta Beauty`,sector:`Consumer Cyclical`,industry:`Specialty Retail`,marketCap:2e10},{symbol:`EBAY`,name:`eBay Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:28e9},{symbol:`ETSY`,name:`Etsy Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:8e9},{symbol:`CHWY`,name:`Chewy Inc.`,sector:`Consumer Cyclical`,industry:`Specialty Retail`,marketCap:12e9},{symbol:`DG`,name:`Dollar General`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:25e9},{symbol:`DLTR`,name:`Dollar Tree`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:18e9},{symbol:`SYY`,name:`Sysco Corp.`,sector:`Consumer Defensive`,industry:`Food Distribution`,marketCap:38e9},{symbol:`KR`,name:`Kroger Co.`,sector:`Consumer Defensive`,industry:`Grocery Stores`,marketCap:42e9},{symbol:`HSY`,name:`Hershey Co.`,sector:`Consumer Defensive`,industry:`Confectioners`,marketCap:35e9},{symbol:`KDP`,name:`Keurig Dr Pepper`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:48e9},{symbol:`MNST`,name:`Monster Beverage`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:55e9},{symbol:`BIIB`,name:`Biogen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:25e9},{symbol:`MRNA`,name:`Moderna Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:15e9},{symbol:`ILMN`,name:`Illumina Inc.`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:18e9},{symbol:`DXCM`,name:`DexCom Inc.`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:3e10},{symbol:`BSX`,name:`Boston Scientific`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:1e11},{symbol:`MDT`,name:`Medtronic plc`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:105e9},{symbol:`SYK`,name:`Stryker Corp.`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`EW`,name:`Edwards Lifesciences`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:48e9},{symbol:`HCA`,name:`HCA Healthcare`,sector:`Healthcare`,industry:`Medical Care`,marketCap:8e10},{symbol:`VEEV`,name:`Veeva Systems`,sector:`Healthcare`,industry:`Health Info Services`,marketCap:35e9},{symbol:`IDXX`,name:`IDEXX Laboratories`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:42e9},{symbol:`WBD`,name:`Warner Bros. Discovery`,sector:`Communication Services`,industry:`Entertainment`,marketCap:25e9},{symbol:`PARA`,name:`Paramount Global`,sector:`Communication Services`,industry:`Entertainment`,marketCap:8e9},{symbol:`FOX`,name:`Fox Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e9},{symbol:`NWSA`,name:`News Corp.`,sector:`Communication Services`,industry:`Publishing`,marketCap:15e9},{symbol:`LYV`,name:`Live Nation`,sector:`Communication Services`,industry:`Entertainment`,marketCap:22e9},{symbol:`MTCH`,name:`Match Group`,sector:`Communication Services`,industry:`Internet Content`,marketCap:9e9},{symbol:`RBLX`,name:`Roblox Corp.`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`TTD`,name:`Trade Desk`,sector:`Technology`,industry:`Software`,marketCap:45e9},{symbol:`HUBS`,name:`HubSpot Inc.`,sector:`Technology`,industry:`Software`,marketCap:32e9},{symbol:`OKTA`,name:`Okta Inc.`,sector:`Technology`,industry:`Software`,marketCap:15e9},{symbol:`DOCU`,name:`DocuSign Inc.`,sector:`Technology`,industry:`Software`,marketCap:12e9},{symbol:`ZM`,name:`Zoom Video`,sector:`Technology`,industry:`Software`,marketCap:22e9},{symbol:`PATH`,name:`UiPath Inc.`,sector:`Technology`,industry:`Software`,marketCap:8e9},{symbol:`AI`,name:`C3.ai Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e9},{symbol:`IONQ`,name:`IonQ Inc.`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e9},{symbol:`ASTS`,name:`AST SpaceMobile`,sector:`Technology`,industry:`Communication Equipment`,marketCap:5e9}];function n(e,t){return e.length<t?null:e.slice(-t).reduce((e,t)=>e+t,0)/t}function r(e,t){if(e.length<t)return null;let n=2/(t+1),r=e.slice(0,t).reduce((e,t)=>e+t,0)/t;for(let i=t;i<e.length;i++)r=e[i]*n+r*(1-n);return r}function i(e,t=14){if(e.length<t+1)return 50;let n=0,r=0;for(let i=e.length-t;i<e.length;i++){let t=e[i]-e[i-1];t>=0?n+=t:r-=t}return r===0?100:100-100/(1+n/r)}function a(e){if(e.length<26)return{macd:0,signal:0,hist:0};let t=r(e,12),n=r(e,26),i=(t??0)-(n??0),a=i*.85;return{macd:i,signal:a,hist:i-a}}function o(e,t=14){if(e.length<t+1)return 0;let n=[];for(let r=e.length-t;r<e.length;r++){let t=e[r],i=e[r-1];n.push(Math.max(t.h-t.l,Math.abs(t.h-i.c),Math.abs(t.l-i.c)))}return n.reduce((e,t)=>e+t,0)/n.length}function s(e,t=20){let r=n(e,t);if(r==null)return{upper:0,mid:0,lower:0};let i=e.slice(-t).reduce((e,t)=>e+(t-r)**2,0)/t,a=Math.sqrt(i);return{upper:r+2*a,mid:r,lower:r-2*a}}function c(e,t=3){let n=[],r=[];for(let i=t;i<e.length-t;i++){let a=e[i],o=e.slice(i-t,i),s=e.slice(i+1,i+t+1);o.every(e=>a>=e)&&s.every(e=>a>=e)&&n.push({i,v:a}),o.every(e=>a<=e)&&s.every(e=>a<=e)&&r.push({i,v:a})}return{peaks:n,troughs:r}}function l(e,t){return t?(e-t)/t*100:0}function u(e,t=20){if(!e.length)return 0;let n=e.slice(-t).map(e=>e.v||0);return n.reduce((e,t)=>e+t,0)/n.length}function d(e){if(!e?.length||e.length<20)return[];let t=e.map(e=>e.c),r=e.map(e=>e.h),i=e.map(e=>e.l),a=t[t.length-1],s=[],{peaks:l,troughs:u}=c(t,4);if(l.length>=2){let e=l[l.length-2],t=l[l.length-1],n=Math.abs(e.v-t.v)/e.v;n<.03&&t.i-e.i>=5&&s.push({id:`double_top`,label:`Double Top`,bias:`bearish`,confidence:72-n*500})}if(u.length>=2){let e=u[u.length-2],t=u[u.length-1],n=Math.abs(e.v-t.v)/e.v;n<.03&&t.i-e.i>=5&&s.push({id:`double_bottom`,label:`Double Bottom`,bias:`bullish`,confidence:74-n*500})}if(l.length>=3){let[e,t,n]=l.slice(-3);t.v>e.v*1.02&&t.v>n.v*1.02&&Math.abs(e.v-n.v)/e.v<.05&&s.push({id:`head_shoulders`,label:`Head & Shoulders`,bias:`bearish`,confidence:68})}if(u.length>=3){let[e,t,n]=u.slice(-3);t.v<e.v*.98&&t.v<n.v*.98&&Math.abs(e.v-n.v)/e.v<.05&&s.push({id:`inv_head_shoulders`,label:`Inverse H&S`,bias:`bullish`,confidence:70})}let d=t.slice(-20),f=(d[d.length-1]-d[0])/d.length/a*100,p=o(e.slice(-20))/a;f>.15&&p<.025?s.push({id:`channel_up`,label:`Channel Up`,bias:`bullish`,confidence:62}):f<-.15&&p<.025&&s.push({id:`channel_down`,label:`Channel Down`,bias:`bearish`,confidence:62}),f>.08&&r.slice(-10).every((e,t,n)=>t===0||e<=n[t-1]*1.01)&&s.push({id:`wedge_down`,label:`Wedge Down`,bias:`bearish`,confidence:58}),f<-.08&&i.slice(-10).every((e,t,n)=>t===0||e>=n[t-1]*.99)&&s.push({id:`wedge_up`,label:`Wedge Up`,bias:`bullish`,confidence:58});let m=Math.max(...r.slice(-30,-15))-Math.min(...i.slice(-30,-15));if(Math.max(...r.slice(-15))-Math.min(...i.slice(-15))<m*.55){let e=f>=0?`bullish`:`bearish`;s.push({id:e===`bullish`?`triangle_asc`:`triangle_desc`,label:e===`bullish`?`Triangle Ascending`:`Triangle Descending`,bias:e,confidence:60})}let h=n(t,50);h&&Math.abs(a-h)/a<.015&&s.push({id:a>h?`horizontal_resistance`:`horizontal_support`,label:a>h?`Horizontal Resistance`:`Horizontal Support`,bias:a>h?`bearish`:`bullish`,confidence:55});let g=n(t,20);return g&&a>g*1.01?s.push({id:`tl_support`,label:`Trendline Support`,bias:`bullish`,confidence:57}):g&&a<g*.99&&s.push({id:`tl_resistance`,label:`Trendline Resistance`,bias:`bearish`,confidence:57}),s.map(e=>({...e,confidence:Math.round(Math.min(95,Math.max(45,e.confidence)))}))}function f(e,t){if(!e?.length)return[];let r=e.map(e=>e.c),o=t.price??r[r.length-1],s=[],c=i(r),d=n(r,20),f=n(r,50),p=n(r,200),{hist:m}=a(r),h=u(e),g=t.volume??e[e.length-1]?.v??0,_=Math.max(...e.map(e=>e.h)),v=Math.min(...e.map(e=>e.l));if(t.changePct>=2&&s.push({id:`top_gainers`,label:`Top Gainers`,type:`momentum`}),t.changePct<=-2&&s.push({id:`top_losers`,label:`Top Losers`,type:`momentum`}),o>=_*.998&&s.push({id:`new_high`,label:`New High`,type:`breakout`}),o<=v*1.002&&s.push({id:`new_low`,label:`New Low`,type:`breakout`}),c>=70&&s.push({id:`overbought`,label:`Overbought`,type:`rsi`}),c<=30&&s.push({id:`oversold`,label:`Oversold`,type:`rsi`}),g>h*2&&s.push({id:`unusual_volume`,label:`Unusual Volume`,type:`volume`}),g>h*1.3&&Math.abs(t.changePct)>3&&s.push({id:`most_active`,label:`Most Active`,type:`volume`}),Math.abs(t.changePct)>5&&s.push({id:`most_volatile`,label:`Most Volatile`,type:`volatility`}),f&&p){let e=n(r.slice(0,-1),50),t=n(r.slice(0,-1),200);e&&t&&e<=t&&f>p&&s.push({id:`golden_cross`,label:`Golden Cross`,type:`trend`}),e&&t&&e>=t&&f<p&&s.push({id:`death_cross`,label:`Death Cross`,type:`trend`}),o>f?s.push({id:`above_sma50`,label:`Above SMA50`,type:`trend`}):s.push({id:`below_sma50`,label:`Below SMA50`,type:`trend`}),o>p?s.push({id:`above_sma200`,label:`Above SMA200`,type:`trend`}):s.push({id:`below_sma200`,label:`Below SMA200`,type:`trend`})}return m>0&&t.changePct>0&&s.push({id:`macd_bullish`,label:`MACD Bullish`,type:`macd`}),m<0&&t.changePct<0&&s.push({id:`macd_bearish`,label:`MACD Bearish`,type:`macd`}),d&&l(o,d)>5&&s.push({id:`extended`,label:`Extended Above SMA20`,type:`trend`}),d&&l(o,d)<-5&&s.push({id:`pullback`,label:`Pullback to SMA20`,type:`trend`}),s}function p(e,t,r=[]){if(!e?.length)return m(t);let c=e.map(e=>e.c),l=t.price??c[c.length-1],u=i(c),d=n(c,20),f=n(c,50),p=n(c,200),{hist:h,macd:g}=a(c),_=o(e),v=s(c),y=c.length>=6?(c[c.length-1]-c[c.length-6])/c[c.length-6]*100:t.changePct??0,b=[];u<35?b.push({name:`RSI Oversold`,score:18,weight:`bullish`}):u>65?b.push({name:`RSI Overbought`,score:-18,weight:`bearish`}):b.push({name:`RSI Neutral`,score:(50-u)*.3,weight:`neutral`});let x=0;d&&l>d?x+=8:x-=8,f&&l>f?x+=12:x-=12,p&&l>p?x+=15:x-=10,b.push({name:`Moving Avg Trend`,score:x,weight:x>0?`bullish`:`bearish`}),b.push({name:`MACD Momentum`,score:h*2,weight:h>0?`bullish`:`bearish`}),b.push({name:`5D Momentum`,score:y*1.5,weight:y>0?`bullish`:`bearish`}),v.upper&&l>v.upper?b.push({name:`Above Upper BB`,score:-10,weight:`bearish`}):v.lower&&l<v.lower&&b.push({name:`Below Lower BB`,score:10,weight:`bullish`});for(let e of r){let t=e.bias===`bullish`?e.confidence*.15:-e.confidence*.15;b.push({name:e.label,score:t,weight:e.bias})}let S=b.reduce((e,t)=>e+t.score,0),C=Math.max(-100,Math.min(100,S)),w=`neutral`;C>12?w=`bullish`:C<-12&&(w=`bearish`);let T=Math.round(Math.min(92,Math.max(48,55+Math.abs(C)*.35))),ee=C/100*_*4,E=Math.max(.01,l+ee),D=(E-l)/l*100,te=Math.abs(C)>25?`5-10 days`:`3-7 days`;return{direction:w,confidence:T,score:Math.round(C),priceTarget:Math.round(E*100)/100,targetPct:Math.round(D*100)/100,horizon:te,factors:b.slice(0,6),rsi:Math.round(u*10)/10,sma20:d,sma50:f,sma200:p,atr:Math.round(_*100)/100,macdHist:Math.round(h*100)/100}}function m(e){return{direction:(e?.changePct??0)>0?`bullish`:(e?.changePct??0)<0?`bearish`:`neutral`,confidence:52,score:e?.changePct??0,priceTarget:e?.price??0,targetPct:0,horizon:`3-7 days`,factors:[],rsi:50,sma20:null,sma50:null,sma200:null,atr:0,macdHist:0}}var h=new Map;function g(e,t){if(h.has(e))return h.get(e);let n=v(e),r=t.price||100,i=[],a=Date.now();for(let e=59;e>=0;e--){let t=r,o=(n()-.47)*r*.022,s=Math.max(1,t+o),c=Math.max(t,s)*(1+n()*.012),l=Math.min(t,s)*(1-n()*.012),u=Math.floor(5e5+n()*3e7);i.push({t:a-e*864e5,o:t,h:c,l,c:s,v:u}),r=s}return h.set(e,i),i}function _(e,t){let n=h.get(e);if(!n?.length)return g(e,t);let r=n[n.length-1];return r.c=t.price,r.h=Math.max(r.h,t.high??t.price),r.l=Math.min(r.l,t.low??t.price),t.volume&&(r.v=t.volume),n}function v(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function y(e){let t=_(e.symbol,e);t.map(e=>e.c);let n=d(t),r=f(t,e),i=p(t,e,n),a=u(t),o=b(e.symbol,`pe`),s=b(e.symbol,`eps`),c=b(e.symbol,`beta`);return{...e,candles:t,patterns:n,signals:r,prediction:i,ta:{rsi:i.rsi,sma20:i.sma20,sma50:i.sma50,sma200:i.sma200,atr:i.atr,relVolume:a?(e.volume||a)/a:1},fundamentals:{pe:o,eps:s,beta:c,dividend:b(e.symbol,`div`)},signalLabels:r.map(e=>e.label),patternLabels:n.map(e=>e.label),primarySignal:r[0]?.label||n[0]?.label||`—`}}function b(e,t){let n=v(e+t)();return t===`pe`?Math.round((8+n*45)*10)/10:t===`eps`?Math.round((.5+n*12)*100)/100:t===`beta`?Math.round((.6+n*1.8)*100)/100:t===`div`?Math.round(n*3.5*100)/100:0}function x(e){let t=[...e.values()],n=t.length||1,r=t.filter(e=>e.changePct>0).length,i=t.filter(e=>e.changePct<0).length,a=t.filter(e=>e.ta?.sma50&&e.price>e.ta.sma50).length,o=t.filter(e=>e.ta?.sma200&&e.price>e.ta.sma200).length,s=t.filter(e=>e.signals?.some(e=>e.id===`new_high`)).length,c=t.filter(e=>e.signals?.some(e=>e.id===`new_low`)).length;return{advancing:r,declining:i,advPct:r/n*100,decPct:i/n*100,aboveSma50:a,belowSma50:n-a,aboveSma50Pct:a/n*100,aboveSma200:o,belowSma200:n-o,aboveSma200Pct:o/n*100,newHigh:s,newLow:c,newHighPct:s/(s+c||1)*100}}var S=`https://finnhub.io/api/v1`,C=5,w=1100;function T(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function ee(e){return 20+T(e)()*480}var E=new Map,D=new Map,te=24;function ne(){if(!E.size)for(let e of t){let t=ee(e.symbol);E.set(e.symbol,t);let n=T(e.symbol+`hist`),r=[],i=t*.95;for(let e=0;e<te;e++)i=Math.max(1,i*(1+(n()-.48)*.02)),r.push(i);D.set(e.symbol,r)}}function re(){ne();for(let e of t){let t=E.get(e.symbol),n=(Math.random()-.48)*t*.008,r=Math.max(1,t+n);E.set(e.symbol,r);let i=D.get(e.symbol)||[];i.push(r),i.length>te&&i.shift(),D.set(e.symbol,i)}}var ie=new Map;function ae(e){return ie.get(e)||D.get(e)||[]}function oe(e,t){let n=[...ie.get(e)||D.get(e)||[],t];return n.length>te&&n.shift(),ie.set(e,n),n}function se(e){ne();let t=E.get(e.symbol),n=T(e.symbol+Date.now().toString().slice(0,-4)),r=t*(.98+n()*.04),i=Math.max(t,r)*(1+n()*.02),a=Math.min(t,r)*(1-n()*.02),o=r*(.995+n()*.01),s=t-o,c=s/o*100,l=Math.floor(5e5+n()*5e7);return{symbol:e.symbol,price:t,open:r,high:i,low:a,prevClose:o,change:s,changePct:c,volume:l,marketCap:e.marketCap,sector:e.sector,industry:e.industry,name:e.name,timestamp:Date.now(),sparkline:ae(e.symbol)}}function ce(e,t=60){ne();let n=E.get(e)||100,r=T(e+`candles`),i=[],a=Date.now();for(let e=t-1;e>=0;e--){let t=n,o=(r()-.48)*n*.025,s=Math.max(1,t+o),c=Math.max(t,s)*(1+r()*.01),l=Math.min(t,s)*(1-r()*.01);i.push({t:a-e*864e5,o:t,h:c,l,c:s,v:Math.floor(r()*1e7)}),n=s}return i}var le=[`Markets rally on strong earnings outlook`,`Fed signals cautious approach to rate cuts`,`Tech sector leads broad market gains`,`Energy stocks slip as oil prices retreat`,`Analysts upgrade outlook for semiconductor stocks`,`Consumer spending data beats expectations`,`Treasury yields edge higher in morning trade`,`IPO market shows signs of renewed activity`];function ue(e){let t=T(e+`news`);return Array.from({length:5},(n,r)=>({headline:e?`${e}: ${le[Math.floor(t()*le.length)]}`:le[Math.floor(t()*le.length)],source:[`Reuters`,`Bloomberg`,`CNBC`,`MarketWatch`][Math.floor(t()*4)],url:`#`,datetime:Math.floor(Date.now()/1e3)-r*3600-Math.floor(t()*7200),symbol:e||void 0}))}async function de(e,t){let n=`${S}/quote?symbol=${encodeURIComponent(e)}&token=${t}`,r=await fetch(n);if(!r.ok)throw Error(`Finnhub ${r.status}`);let i=await r.json();if(!i.c)throw Error(`No quote data`);let a=i.c-i.pc,o=i.pc?a/i.pc*100:0;return{symbol:e,price:i.c,open:i.o,high:i.h,low:i.l,prevClose:i.pc,change:a,changePct:o,volume:null,timestamp:(i.t||Date.now()/1e3)*1e3}}async function fe(e,t){let n=`${S}/stock/profile2?symbol=${encodeURIComponent(e)}&token=${t}`,r=await fetch(n);return r.ok?r.json():null}function pe(e){return new Promise(t=>setTimeout(t,e))}function me(e,t,n){return{...e,name:n?.name||t?.name||e.symbol,sector:t?.sector||n?.finnhubIndustry||`—`,industry:t?.industry||n?.finnhubIndustry||`—`,marketCap:n?.marketCapitalization?n.marketCapitalization*1e6:t?.marketCap,volume:e.volume??Math.floor(Math.random()*2e7+1e6),sparkline:ae(e.symbol)}}async function he(e){let n=new Map(t.map(e=>[e.symbol,e])),r=t.map(e=>e.symbol);if(!e.apiKey?.trim()||e.useMockData){re();let e=new Map;for(let n of t)e.set(n.symbol,y(se(n)));return{quotes:e,source:`mock`}}let i=new Map,a=e.apiKey.trim();for(let e=0;e<r.length;e+=C){let t=r.slice(e,e+C),o=await Promise.allSettled(t.map(async e=>{let[t,r]=await Promise.all([de(e,a),fe(e,a).catch(()=>null)]);return me(t,n.get(e),r)}));for(let e of o)if(e.status===`fulfilled`){let t=e.value;i.set(t.symbol,y({...t,sparkline:oe(t.symbol,t.price)}))}e+C<r.length&&await pe(w)}for(let e of t)i.has(e.symbol)||i.set(e.symbol,y(se(e)));return{quotes:i,source:`finnhub`}}async function ge(e,n){let r=t.find(t=>t.symbol===e);if(!n.apiKey?.trim()||n.useMockData)return r?y(se(r)):null;try{let[t,i]=await Promise.all([de(e,n.apiKey.trim()),fe(e,n.apiKey.trim())]);return y(me(t,r,i))}catch{return r?y(se(r)):null}}async function _e(e,t,n=`D`,r=60){if(!t.apiKey?.trim()||t.useMockData)return ce(e,r);try{let i=Math.floor(Date.now()/1e3),a=i-r*86400,o=`${S}/stock/candle?symbol=${encodeURIComponent(e)}&resolution=${n}&from=${a}&to=${i}&token=${t.apiKey.trim()}`,s=await fetch(o);if(!s.ok)throw Error(`candle fetch failed`);let c=await s.json();return c.s!==`ok`||!c.t?.length?ce(e,r):c.t.map((e,t)=>({t:e*1e3,o:c.o[t],h:c.h[t],l:c.l[t],c:c.c[t],v:c.v[t]}))}catch{return ce(e,r)}}async function ve(e,t){if(!t.apiKey?.trim()||t.useMockData)return ue(e);try{let n=new Date().toISOString().slice(0,10),r=new Date(Date.now()-7*864e5).toISOString().slice(0,10),i=`${S}/company-news?symbol=${encodeURIComponent(e)}&from=${r}&to=${n}&token=${t.apiKey.trim()}`,a=await fetch(i);if(!a.ok)throw Error(`news failed`);return(await a.json()||[]).slice(0,8)}catch{return ue(e)}}async function ye(e){if(!e.apiKey?.trim()||e.useMockData)return ue(null);try{let t=`${S}/news?category=general&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`news failed`);return(await n.json()||[]).slice(0,20)}catch{return ue(null)}}async function be(e){if(!e.apiKey?.trim()||e.useMockData){let e=new Date().getHours(),t=e>=9&&e<16;return{isOpen:t,label:t?`Market Open (simulated)`:`Market Closed (simulated)`}}try{let t=`${S}/stock/market-status?exchange=US&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`status failed`);let r=await n.json();return{isOpen:!!r.isOpen,label:r.isOpen?`US Market Open`:`US Market Closed`,session:r.session}}catch{return{isOpen:!1,label:`Market status unavailable`}}}async function xe(e){if(!e?.trim())return{valid:!1,message:`API key is required`};try{return await de(`AAPL`,e.trim())?{valid:!0,message:`Connected to Finnhub`}:{valid:!1,message:`Invalid response`}}catch(e){return{valid:!1,message:e.message||`Connection failed`}}}var Se={apiKey:``,refreshInterval:30,useMockData:!0,watchlist:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`],theme:`dark`},Ce={sector:``,industry:``,minChange:``,maxChange:``,minVolume:``,minMarketCap:``,search:``,signal:``,pattern:``,prediction:``,minRsi:``,maxRsi:``,minPe:``,maxPe:``,aboveSma50:``,aboveSma200:``},O=je(),k={...Ce},A=Me(),j=Ne(),M=Pe(),N=[],P=`all`,we=new Map,F={key:`changePct`,dir:`desc`},Te=null,Ee=null,De=`mock`,Oe=null,ke=new Set,Ae=null;function je(){try{let e=localStorage.getItem(`stockviz-settings`);if(e)return{...Se,...JSON.parse(e)}}catch{}return{...Se}}function Me(){try{let e=localStorage.getItem(`stockviz-saved-filters`);if(e)return JSON.parse(e)}catch{}return[]}function Ne(){try{let e=localStorage.getItem(`stockviz-favorites`);if(e)return JSON.parse(e)}catch{}return[`AAPL`,`NVDA`,`MSFT`]}function Pe(){try{let e=localStorage.getItem(`stockviz-portfolio`);if(e)return JSON.parse(e)}catch{}return[{symbol:`AAPL`,shares:10,costBasis:175},{symbol:`NVDA`,shares:5,costBasis:450},{symbol:`MSFT`,shares:8,costBasis:380}]}function I(e,t){localStorage.setItem(e,JSON.stringify(t))}function Fe(){I(`stockviz-settings`,O),Ie(O.theme),z(`settings`)}function Ie(e){document.documentElement.setAttribute(`data-theme`,e||`dark`)}function L(){return{...O}}function Le(e){O={...O,...e},e.apiKey!==void 0&&(O.useMockData=!e.apiKey?.trim()),Fe()}function Re(){O.theme=O.theme===`dark`?`light`:`dark`,Fe()}function ze(){return{...k}}function Be(e,{preset:t=null}={}){k={...k,...e},t!==null&&(P=t),z(`filters`)}function Ve(e,t){k={...Ce,...t},P=e,z(`filters`)}function He(){return P}function Ue(){return{...F}}function We(e){F.key===e?F.dir=F.dir===`asc`?`desc`:`asc`:F={key:e,dir:`desc`},z(`sort`)}function R(){return we}function Ge(e,t={}){we=e,Ee=t.fetchedAt??Date.now(),De=t.source??De,z(`quotes`)}function Ke(e){Oe=e,z(`status`)}function qe(){return Oe}function Je(){return{lastFetchAt:Ee,dataSource:De,selectedSymbol:Te}}function Ye(e){Te=e,z(`select`)}function Xe(e){return j=j.includes(e)?j.filter(t=>t!==e):[...j,e],I(`stockviz-favorites`,j),z(`favorites`),j.includes(e)}function Ze(e){return j.includes(e)}function Qe(){return[...M]}function $e({symbol:e,shares:t,costBasis:n}){let r=M.find(t=>t.symbol===e);r?(r.shares+=Number(t),r.costBasis=(r.costBasis+Number(n))/2):M=[...M,{symbol:e,shares:Number(t),costBasis:Number(n)}],I(`stockviz-portfolio`,M),z(`portfolio`)}function et(e){M=M.filter(t=>t.symbol!==e),I(`stockviz-portfolio`,M),z(`portfolio`)}function tt(){return[...N]}function nt(e){return N.includes(e)?N=N.filter(t=>t!==e):N.length<4&&(N=[...N,e]),z(`compare`),N.includes(e)}function rt(){N=[],z(`compare`)}function it(){return[...A]}function at(e){let t={id:Date.now().toString(),name:e,filters:{...k}};return A=[...A,t],I(`stockviz-saved-filters`,A),z(`filters`),t}function ot(e){A=A.filter(t=>t.id!==e),I(`stockviz-saved-filters`,A),z(`filters`)}function st(e){let t=A.find(t=>t.id===e);t&&(k={...Ce,...t.filters},P=`custom`,z(`filters`))}function ct(e){return ke.add(e),()=>ke.delete(e)}function z(e=`full`){ke.forEach(t=>t(e))}function lt(e){ut();let t=async()=>{await e()};t(),Ae=setInterval(t,O.refreshInterval*1e3)}function ut(){Ae&&=(clearInterval(Ae),null)}function dt(){k={...Ce},P=`all`,z(`filters`)}Ie(O.theme);function B(e,t=2){return e==null||Number.isNaN(e)?`—`:e.toLocaleString(`en-US`,{minimumFractionDigits:t,maximumFractionDigits:t})}function ft(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}`}function V(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}%`}function H(e){return e==null?`—`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toLocaleString()}function pt(e){return e==null?`—`:e>=0xe8d4a51000?`${(e/0xe8d4a51000).toFixed(2)}T`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(0)}M`:e.toLocaleString()}function mt(e){return e?new Date(e).toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}):``}function U(e){return e==null?``:e>0?`pos`:e<0?`neg`:`flat`}function ht(e){let t=Math.max(-5,Math.min(5,e));if(t>=0){let e=t/5;return`rgb(${Math.round(20+(1-e)*30)},${Math.round(80+e*120)},${Math.round(40+(1-e)*20)})`}let n=Math.abs(t)/5;return`rgb(${Math.round(120+n*135)},${Math.round(40+(1-n)*30)},${Math.round(40+(1-n)*20)})`}function gt(e,t,{width:n=72,height:r=24,color:i=null}={}){let a=t.map(e=>typeof e==`number`?e:e.c??e.price??0);if(!a.length)return;let o=window.devicePixelRatio||1;e.width=n*o,e.height=r*o,e.style.width=`${n}px`,e.style.height=`${r}px`;let s=e.getContext(`2d`);s.scale(o,o);let c=Math.min(...a),l=Math.max(...a)-c||1,u=a[a.length-1]>=a[0],d=i||(u?`#3fb950`:`#f85149`);s.clearRect(0,0,n,r),s.beginPath(),a.forEach((e,t)=>{let i=t/(a.length-1||1)*(n-2)+1,o=r-2-(e-c)/l*(r-4);t===0?s.moveTo(i,o):s.lineTo(i,o)}),s.strokeStyle=d,s.lineWidth=1.5,s.lineJoin=`round`,s.stroke();let f=s.createLinearGradient(0,0,0,r);f.addColorStop(0,u?`rgba(63,185,80,0.2)`:`rgba(248,81,73,0.2)`),f.addColorStop(1,`rgba(0,0,0,0)`),s.lineTo(n-1,r),s.lineTo(1,r),s.closePath(),s.fillStyle=f,s.fill()}function _t(e){return`<canvas class="sparkline" data-spark="${e}" width="72" height="24" aria-hidden="true"></canvas>`}function vt(){let e=R();document.querySelectorAll(`[data-live-symbol]`).forEach(t=>{let n=e.get(t.dataset.liveSymbol);if(!n)return;let r=t.querySelector(`[data-live="price"]`),i=t.querySelector(`[data-live="change"]`),a=t.querySelector(`[data-live="pct"]`);if(r){let e=`$${B(n.price)}`;r.textContent!==e&&(r.textContent=e,yt(r,n.change>=0?`flash-up`:`flash-down`))}i&&(i.textContent=`${n.change>=0?`+`:``}${n.change?.toFixed(2)??`—`}`,i.className=U(n.change)),a&&(a.textContent=V(n.changePct),a.className=U(n.changePct))}),document.querySelectorAll(`canvas[data-spark]`).forEach(t=>{let n=e.get(t.dataset.spark);if(n?.sparkline?.length){let e=Number(t.getAttribute(`width`))||72,r=Number(t.getAttribute(`height`))||24;gt(t,n.sparkline,{width:e,height:r})}}),document.querySelectorAll(`.heat-tile[data-symbol]`).forEach(t=>{let n=e.get(t.dataset.symbol);if(!n)return;let r=n.changePct??0;t.style.background=ht(r);let i=t.querySelector(`.tile-pct`);i&&(i.textContent=`${r>=0?`+`:``}${r.toFixed(1)}%`)})}function yt(e,t){e.classList.remove(`flash-up`,`flash-down`),e.offsetWidth,e.classList.add(t),setTimeout(()=>e.classList.remove(t),600)}function bt(e,t,{height:n=160}={}){if(!t?.length){e.innerHTML=`<p class="chart-empty">No chart data</p>`;return}let r=document.createElement(`canvas`);r.className=`price-chart-canvas`,r.height=n,e.innerHTML=``,e.appendChild(r);let i=window.devicePixelRatio||1,a=e.clientWidth||320;r.width=a*i,r.style.width=`${a}px`,r.style.height=`${n}px`;let o=r.getContext(`2d`);o.scale(i,i);let s=t.map(e=>e.l),c=t.map(e=>e.h),l=Math.min(...s),u=Math.max(...c),d=(u-l)*.08||1,f=l-d,p=u+d-f,m=a-16,h=n-16,g=m/t.length,_=e=>8+h-(e-f)/p*h;o.strokeStyle=`rgba(48,54,61,0.6)`,o.lineWidth=1;for(let e=0;e<=4;e++){let t=8+h/4*e;o.beginPath(),o.moveTo(8,t),o.lineTo(a-8,t),o.stroke()}if(t.length<=80){let e=Math.max(2,g*.6);t.forEach((t,n)=>{let r=8+n*g+g/2,i=t.c>=t.o?`#3fb950`:`#f85149`;o.strokeStyle=i,o.fillStyle=i,o.lineWidth=1,o.beginPath(),o.moveTo(r,_(t.h)),o.lineTo(r,_(t.l)),o.stroke();let a=_(Math.max(t.o,t.c)),s=_(Math.min(t.o,t.c));o.fillRect(r-e/2,a,e,Math.max(1,s-a))})}else{o.strokeStyle=`#58a6ff`,o.lineWidth=1.5,o.beginPath(),t.forEach((e,t)=>{let n=8+t*g+g/2,r=_(e.c);t===0?o.moveTo(n,r):o.lineTo(n,r)}),o.stroke(),t[t.length-1];let e=o.createLinearGradient(0,8,0,n-8);e.addColorStop(0,`rgba(88,166,255,0.25)`),e.addColorStop(1,`rgba(88,166,255,0)`),o.lineTo(8+(t.length-1)*g+g/2,n-8),o.lineTo(8+g/2,n-8),o.closePath(),o.fillStyle=e,o.fill()}o.fillStyle=`#8b949e`,o.font=`10px IBM Plex Mono, monospace`,o.textAlign=`right`,o.fillText(u.toFixed(2),a-2,18),o.fillText(l.toFixed(2),a-2,n-8-2)}var xt;function St(){xt=document.getElementById(`toast-root`)}function W(e,t=`info`,n=2800){if(!xt)return;let r=document.createElement(`div`);r.className=`toast toast-${t}`,r.textContent=e,xt.appendChild(r),requestAnimationFrame(()=>r.classList.add(`show`)),setTimeout(()=>{r.classList.remove(`show`),setTimeout(()=>r.remove(),300)},n)}var G,K,Ct,wt;function Tt(){G=document.getElementById(`quote-panel`),K=document.getElementById(`quote-panel-body`),Ct=document.getElementById(`quote-overlay`),wt=document.getElementById(`quote-close`),wt?.addEventListener(`click`,Dt),Ct?.addEventListener(`click`,Dt),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&G&&!G.hidden&&Dt()})}function Et(e){G&&(G.hidden=!1,Ct.hidden=!1,G.classList.add(`open`),K.innerHTML=`<div class="quote-loading"><div class="skeleton-line"></div><div class="skeleton-line short"></div></div>`,Ot(e))}function Dt(){G&&(G.classList.remove(`open`),setTimeout(()=>{G.hidden=!0,Ct.hidden=!0},200),Ye(null))}async function Ot(e){let t=L(),n=R().get(e),[r,i]=await Promise.all([n?.prediction?Promise.resolve(n):ge(e,t),ve(e,t)]),a=r,o=a?.candles||await _e(e,t);if(!a){K.innerHTML=`<p class="quote-error">Could not load quote.</p>`;return}let s=U(a.changePct),c=Ze(e),l=tt().includes(e);K.innerHTML=`
    <div class="quote-actions">
      <button class="btn-ghost btn-sm quote-action ${c?`starred`:``}" id="qa-fav">${c?`★ Favorited`:`☆ Favorite`}</button>
      <button class="btn-ghost btn-sm quote-action ${l?`active`:``}" id="qa-compare">${l?`In Compare`:`+ Compare`}</button>
      <a class="btn-ghost btn-sm quote-action" href="#/screener" id="qa-screener">Screener</a>
    </div>
    <div class="quote-header">
      <div>
        <h2 class="quote-symbol">${a.symbol}</h2>
        <p class="quote-name">${a.name||``}</p>
      </div>
      <div class="quote-price-block" data-live-symbol="${e}">
        <span class="quote-price" data-live="price">$${B(a.price)}</span>
        <span class="quote-change ${s}" data-live="pct">${ft(a.change)} (${V(a.changePct)})</span>
      </div>
    </div>
    <div class="quote-grid">
      <div class="quote-stat"><span class="label">Open</span><span class="value">$${B(a.open)}</span></div>
      <div class="quote-stat"><span class="label">High</span><span class="value">$${B(a.high)}</span></div>
      <div class="quote-stat"><span class="label">Low</span><span class="value">$${B(a.low)}</span></div>
      <div class="quote-stat"><span class="label">Prev Close</span><span class="value">$${B(a.prevClose)}</span></div>
      <div class="quote-stat"><span class="label">Volume</span><span class="value">${H(a.volume)}</span></div>
      <div class="quote-stat"><span class="label">Market Cap</span><span class="value">${pt(a.marketCap)}</span></div>
      <div class="quote-stat"><span class="label">Sector</span><span class="value">${a.sector||`—`}</span></div>
      <div class="quote-stat"><span class="label">Industry</span><span class="value">${a.industry||`—`}</span></div>
    </div>
    ${a.prediction?`
    <div class="prediction-panel panel">
      <h3 class="quote-section-title">AI Pattern Prediction</h3>
      <div class="pred-header">
        <span class="pred-badge ${a.prediction.direction}">${a.prediction.direction.toUpperCase()}</span>
        <span class="pred-conf">${a.prediction.confidence}% confidence</span>
        <span class="pred-horizon">${a.prediction.horizon}</span>
      </div>
      <div class="pred-target">
        Target: <strong>$${B(a.prediction.priceTarget)}</strong>
        <span class="${U(a.prediction.targetPct)}">(${a.prediction.targetPct>=0?`+`:``}${a.prediction.targetPct}%)</span>
      </div>
      <div class="pred-factors">
        ${(a.prediction.factors||[]).map(e=>`
          <div class="pred-factor ${e.weight}">
            <span>${e.name}</span>
            <span class="${e.score>=0?`pos`:`neg`}">${e.score>=0?`+`:``}${Math.round(e.score)}</span>
          </div>
        `).join(``)}
      </div>
      ${a.patterns?.length?`<p class="pred-patterns"><strong>Patterns:</strong> ${a.patterns.map(e=>`${e.label} (${e.confidence}%)`).join(` · `)}</p>`:``}
      <p class="pred-disclaimer">Technical analysis estimate — not financial advice.</p>
    </div>
    `:``}
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
  `,K.querySelector(`#qa-fav`)?.addEventListener(`click`,()=>{let t=Xe(e),n=K.querySelector(`#qa-fav`);n.textContent=t?`★ Favorited`:`☆ Favorite`,n.classList.toggle(`starred`,t),W(t?`${e} favorited`:`${e} unfavorited`,`info`)}),K.querySelector(`#qa-compare`)?.addEventListener(`click`,()=>{let t=nt(e),n=K.querySelector(`#qa-compare`);if(tt().length>4&&!t){W(`Compare list full (max 4)`,`error`);return}n.textContent=t?`In Compare`:`+ Compare`,n.classList.toggle(`active`,t),W(t?`${e} added to compare`:`${e} removed`,`info`)});let u=K.querySelector(`#quote-chart`);u&&(bt(u,o,{height:180}),new ResizeObserver(()=>bt(u,o,{height:180})).observe(u))}var q,J,kt,Y=0,X=[];function At(){q=document.getElementById(`command-palette`),J=document.getElementById(`cmd-input`),kt=document.getElementById(`cmd-results`);let e=document.getElementById(`cmd-overlay`);document.addEventListener(`keydown`,e=>{if((e.ctrlKey||e.metaKey)&&e.key===`k`&&(e.preventDefault(),Mt()),e.key===`/`&&!jt()){if(!q?.hidden)return;e.preventDefault(),Mt()}}),e?.addEventListener(`click`,Nt),J?.addEventListener(`input`,()=>Pt(J.value)),J?.addEventListener(`keydown`,e=>{e.key===`Escape`&&Nt(),e.key===`ArrowDown`&&(e.preventDefault(),Ft(1)),e.key===`ArrowUp`&&(e.preventDefault(),Ft(-1)),e.key===`Enter`&&It()})}function jt(){let e=document.activeElement?.tagName;return e===`INPUT`||e===`TEXTAREA`||e===`SELECT`}function Mt(){q&&(q.hidden=!1,document.getElementById(`cmd-overlay`).hidden=!1,J.value=``,Y=0,Pt(``),requestAnimationFrame(()=>J?.focus()))}function Nt(){q&&(q.hidden=!0,document.getElementById(`cmd-overlay`).hidden=!0)}function Pt(e){let n=e.trim().toLowerCase(),r=R();X=t.filter(e=>n?e.symbol.toLowerCase().includes(n)||e.name.toLowerCase().includes(n):!0).slice(0,12),kt.innerHTML=X.map((e,t)=>{let n=r.get(e.symbol),i=n?U(n.changePct):``;return`
      <button class="cmd-item ${t===Y?`active`:``}" data-idx="${t}" data-symbol="${e.symbol}">
        <span class="cmd-sym">${e.symbol}</span>
        <span class="cmd-name">${e.name}</span>
        ${n?`<span class="cmd-price ${i}">$${B(n.price)} ${V(n.changePct)}</span>`:``}
      </button>
    `}).join(``)||`<p class="cmd-empty">No matches</p>`,kt.querySelectorAll(`.cmd-item`).forEach(e=>{e.addEventListener(`click`,()=>{Lt(e.dataset.symbol)})})}function Ft(e){Y=Math.max(0,Math.min(X.length-1,Y+e)),kt.querySelectorAll(`.cmd-item`).forEach((e,t)=>{e.classList.toggle(`active`,t===Y)})}function It(){X[Y]&&Lt(X[Y].symbol)}function Lt(e){Nt(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))}var Rt=[{name:`Crude Oil`,symbol:`CL`,last:78.42,change:1.24,changePct:1.61},{name:`Natural Gas`,symbol:`NG`,last:2.84,change:-.06,changePct:-2.07},{name:`Gold`,symbol:`GC`,last:2348.5,change:12.3,changePct:.53},{name:`Dow`,symbol:`YM`,last:42850,change:-120,changePct:-.28},{name:`S&P 500`,symbol:`ES`,last:5892,change:18,changePct:.31},{name:`Nasdaq 100`,symbol:`NQ`,last:21245,change:95,changePct:.45},{name:`Russell 2000`,symbol:`ER2`,last:2185,change:-8,changePct:-.37}],zt=[{pair:`EUR/USD`,symbol:`EURUSD`,last:1.0842,change:.0012,changePct:.11},{pair:`USD/JPY`,symbol:`USDJPY`,last:157.32,change:.28,changePct:.18},{pair:`GBP/USD`,symbol:`GBPUSD`,last:1.2718,change:-8e-4,changePct:-.06},{pair:`BTC/USD`,symbol:`BTCUSD`,last:68420,change:1240,changePct:1.85}],Bt=[{name:`5-Year Treasury`,last:4.12,change:.03,changePct:.73},{name:`10-Year Treasury`,last:4.28,change:.02,changePct:.47},{name:`30-Year Treasury`,last:4.45,change:-.01,changePct:-.22}],Vt=[{symbol:`NVDA`,insider:`Jensen Huang`,relation:`CEO`,date:`Jun 04`,type:`Sale`,cost:128.5,shares:12e4,value:1542e4},{symbol:`AAPL`,insider:`Tim Cook`,relation:`CEO`,date:`Jun 03`,type:`Sale`,cost:198.2,shares:45e3,value:8919e3},{symbol:`MSFT`,insider:`Satya Nadella`,relation:`CEO`,date:`Jun 02`,type:`Sale`,cost:425,shares:22e3,value:935e4},{symbol:`JPM`,insider:`Jamie Dimon`,relation:`CEO`,date:`Jun 05`,type:`Buy`,cost:198.4,shares:15e3,value:2976e3},{symbol:`META`,insider:`Mark Zuckerberg`,relation:`CEO`,date:`Jun 01`,type:`Sale`,cost:512,shares:8e4,value:4096e4},{symbol:`GOOGL`,insider:`Sundar Pichai`,relation:`CEO`,date:`May 30`,type:`Sale`,cost:178.5,shares:35e3,value:6247500}],Ht=[{symbol:`ORCL`,date:`Today AMC`,epsEst:1.42,cap:`Large`},{symbol:`ADBE`,date:`Today AMC`,epsEst:4.18,cap:`Large`},{symbol:`COST`,date:`Tomorrow BMO`,epsEst:3.92,cap:`Large`},{symbol:`CRM`,date:`Tomorrow AMC`,epsEst:2.28,cap:`Large`},{symbol:`AVGO`,date:`Jun 10 AMC`,epsEst:1.35,cap:`Large`},{symbol:`NKE`,date:`Jun 11 AMC`,epsEst:.72,cap:`Large`}],Ut=[{date:`Mon`,time:`10:00 AM`,impact:`high`,event:`ISM Services PMI`,actual:`—`,expected:`52.4`,prior:`51.8`},{date:`Tue`,time:`8:30 AM`,impact:`high`,event:`Non-Farm Payrolls`,actual:`—`,expected:`185K`,prior:`177K`},{date:`Wed`,time:`2:00 PM`,impact:`medium`,event:`FOMC Minutes`,actual:`—`,expected:`—`,prior:`—`},{date:`Thu`,time:`8:30 AM`,impact:`medium`,event:`Initial Jobless Claims`,actual:`—`,expected:`220K`,prior:`218K`},{date:`Fri`,time:`8:30 AM`,impact:`high`,event:`CPI YoY`,actual:`—`,expected:`2.9%`,prior:`3.0%`}],Wt=[{id:`top_gainers`,label:`Top Gainers`},{id:`top_losers`,label:`Top Losers`},{id:`new_high`,label:`New High`},{id:`new_low`,label:`New Low`},{id:`overbought`,label:`Overbought`},{id:`oversold`,label:`Oversold`},{id:`unusual_volume`,label:`Unusual Volume`},{id:`most_active`,label:`Most Active`},{id:`most_volatile`,label:`Most Volatile`},{id:`golden_cross`,label:`Golden Cross`},{id:`death_cross`,label:`Death Cross`}],Gt=[{id:`double_top`,label:`Double Top`},{id:`double_bottom`,label:`Double Bottom`},{id:`head_shoulders`,label:`Head & Shoulders`},{id:`inv_head_shoulders`,label:`Inverse H&S`},{id:`channel_up`,label:`Channel Up`},{id:`channel_down`,label:`Channel Down`},{id:`wedge_up`,label:`Wedge Up`},{id:`wedge_down`,label:`Wedge Down`},{id:`triangle_asc`,label:`Triangle Ascending`},{id:`triangle_desc`,label:`Triangle Descending`},{id:`horizontal_support`,label:`Horizontal Support`},{id:`horizontal_resistance`,label:`Horizontal Resistance`},{id:`tl_support`,label:`Trendline Support`},{id:`tl_resistance`,label:`Trendline Resistance`}];async function Kt(e){let t=R(),n=L(),r=[...t.values()],i=x(t),a=r.filter(e=>e.signals?.some(e=>e.id===`top_gainers`)).sort((e,t)=>t.changePct-e.changePct).slice(0,7),o=r.filter(e=>e.signals?.some(e=>e.id===`top_losers`)).sort((e,t)=>e.changePct-t.changePct).slice(0,7),s=await ye(n).catch(()=>[]),c=Gt.slice(0,6).map(e=>{let t=r.find(t=>t.patterns?.some(t=>t.id===e.id));return{...e,stock:t}});e.innerHTML=`
    <div class="finviz-home">
      <!-- Market breadth bar -->
      <div class="breadth-bar panel">
        <div class="breadth-item">
          <span class="breadth-label">Advancing</span>
          <span class="breadth-val pos">${i.advPct.toFixed(1)}%</span>
          <span class="breadth-sub">(${i.advancing})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Declining</span>
          <span class="breadth-val neg">${i.decPct.toFixed(1)}%</span>
          <span class="breadth-sub">(${i.declining})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Above SMA50</span>
          <span class="breadth-val">${i.aboveSma50Pct.toFixed(1)}%</span>
          <span class="breadth-sub">(${i.aboveSma50})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Above SMA200</span>
          <span class="breadth-val">${i.aboveSma200Pct.toFixed(1)}%</span>
          <span class="breadth-sub">(${i.aboveSma200})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">New High / Low</span>
          <span class="breadth-val"><span class="pos">${i.newHigh}</span> / <span class="neg">${i.newLow}</span></span>
        </div>
      </div>

      <div class="finviz-cols">
        <!-- Left: Gainers -->
        <section class="panel finviz-col">
          <h2 class="finviz-col-title pos-title">Top Gainers</h2>
          ${qt(a,`Top Gainers`)}
        </section>

        <!-- Center-left: Losers -->
        <section class="panel finviz-col">
          <h2 class="finviz-col-title neg-title">Top Losers</h2>
          ${qt(o,`Top Losers`)}
        </section>

        <!-- Center: Heat map link + patterns -->
        <section class="panel finviz-col finviz-col-map">
          <h2 class="finviz-col-title"><a href="#/map">S&amp;P 500 — Heat Map</a></h2>
          <a href="#/map" class="map-preview">
            <div class="map-preview-grid">
              ${r.slice(0,24).map(e=>`
                <span class="map-preview-tile" style="background:${Jt(e.changePct)}" title="${e.symbol} ${V(e.changePct)}"></span>
              `).join(``)}
            </div>
          </a>
          <h3 class="finviz-sub-title">Pattern Signals</h3>
          <table class="data-table compact finviz-tbl">
            <tbody>
              ${c.map(e=>e.stock?`
                <tr class="clickable" data-symbol="${e.stock.symbol}">
                  <td class="sym">${e.stock.symbol}</td>
                  <td class="signal-tag">${e.label}</td>
                </tr>
              `:``).join(``)}
            </tbody>
          </table>
        </section>

        <!-- Right: News + predictions -->
        <section class="panel finviz-col finviz-col-news">
          <h2 class="finviz-col-title"><a href="#/news">Headlines</a></h2>
          <div class="headline-list">
            ${s.slice(0,8).map(e=>`
              <a class="headline-item" href="${e.url||`#`}" target="_blank" rel="noopener">
                <span class="headline-time">${e.datetime?new Date(e.datetime*1e3).toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`}):``}</span>
                <span class="headline-text">${e.headline||e.title}</span>
              </a>
            `).join(``)}
          </div>
          <h3 class="finviz-sub-title"><a href="#/patterns">Top Predictions</a></h3>
          <table class="data-table compact finviz-tbl">
            <tbody>
              ${r.filter(e=>e.prediction?.confidence>=65).sort((e,t)=>t.prediction.confidence-e.prediction.confidence).slice(0,6).map(e=>`
                <tr class="clickable" data-symbol="${e.symbol}">
                  <td class="sym">${e.symbol}</td>
                  <td class="${e.prediction.direction===`bullish`?`pos`:e.prediction.direction===`bearish`?`neg`:``}">${e.prediction.direction}</td>
                  <td>${e.prediction.confidence}%</td>
                  <td>$${B(e.prediction.priceTarget)}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </section>
      </div>

      <!-- Signal ticker rows -->
      <div class="signal-ticker-row panel">
        <span class="signal-ticker-label">Signals:</span>
        ${Wt.slice(0,10).map(e=>{let t=r.filter(t=>t.signals?.some(t=>t.id===e.id)).length;return`<a href="#/screener?signal=${e.id}" class="signal-ticker-chip">${e.label} (${t})</a>`}).join(``)}
        <a href="#/signals" class="signal-ticker-chip accent">All Signals →</a>
        <a href="#/patterns" class="signal-ticker-chip accent">Pattern Scanner →</a>
      </div>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function qt(e,t){return`
    <table class="data-table compact finviz-tbl">
      <thead><tr><th>Ticker</th><th>Last</th><th>Change</th><th>Vol</th><th>Signal</th></tr></thead>
      <tbody>
        ${e.length?e.map(e=>`
          <tr class="clickable" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td data-live="price">$${B(e.price)}</td>
            <td class="${U(e.changePct)}" data-live="pct">${V(e.changePct)}</td>
            <td>${H(e.volume)}</td>
            <td><a href="#/screener" class="signal-link">${t}</a></td>
          </tr>
        `).join(``):`<tr><td colspan="5" class="empty-row">—</td></tr>`}
      </tbody>
    </table>
  `}function Jt(e){let t=Math.max(-5,Math.min(5,e??0));if(t>=0){let e=t/5;return`rgb(${20+(1-e)*30},${80+e*120},${40+(1-e)*20})`}let n=Math.abs(t)/5;return`rgb(${120+n*135},${40+(1-n)*30},40)`}var Yt=[{id:`all`,label:`All Stocks`,filters:{}},{id:`gainers`,label:`Top Gainers`,filters:{signal:`top_gainers`}},{id:`losers`,label:`Top Losers`,filters:{signal:`top_losers`}},{id:`newhigh`,label:`New High`,filters:{signal:`new_high`}},{id:`newlow`,label:`New Low`,filters:{signal:`new_low`}},{id:`overbought`,label:`Overbought`,filters:{signal:`overbought`}},{id:`oversold`,label:`Oversold`,filters:{signal:`oversold`}},{id:`unusualvol`,label:`Unusual Volume`,filters:{signal:`unusual_volume`}},{id:`golden`,label:`Golden Cross`,filters:{signal:`golden_cross`}},{id:`doublebottom`,label:`Double Bottom`,filters:{pattern:`double_bottom`}},{id:`headshoulders`,label:`Head & Shoulders`,filters:{pattern:`head_shoulders`}},{id:`bullish`,label:`Bullish Prediction`,filters:{prediction:`bullish`}},{id:`bearish`,label:`Bearish Prediction`,filters:{prediction:`bearish`}},{id:`tech`,label:`Technology`,filters:{sector:`Technology`}},{id:`megacap`,label:`Mega Cap`,filters:{minMarketCap:`200000000000`}}];function Xt(e,t){return[...e.values()].filter(e=>{if(t.search){let n=t.search.toLowerCase();if(!e.symbol.toLowerCase().includes(n)&&!(e.name||``).toLowerCase().includes(n))return!1}return!(t.sector&&e.sector!==t.sector||t.industry&&e.industry!==t.industry||t.minChange!==``&&e.changePct<Number(t.minChange)||t.maxChange!==``&&e.changePct>Number(t.maxChange)||t.minVolume!==``&&(e.volume||0)<Number(t.minVolume)||t.minMarketCap!==``&&(e.marketCap||0)<Number(t.minMarketCap)||t.minRsi!==``&&(e.ta?.rsi??50)<Number(t.minRsi)||t.maxRsi!==``&&(e.ta?.rsi??50)>Number(t.maxRsi)||t.minPe!==``&&(e.fundamentals?.pe??0)<Number(t.minPe)||t.maxPe!==``&&(e.fundamentals?.pe??999)>Number(t.maxPe)||t.signal&&!e.signals?.some(e=>e.id===t.signal)||t.pattern&&!e.patterns?.some(e=>e.id===t.pattern)||t.prediction&&e.prediction?.direction!==t.prediction||t.aboveSma50===`yes`&&!(e.ta?.sma50&&e.price>e.ta.sma50)||t.aboveSma50===`no`&&e.ta?.sma50&&e.price>e.ta.sma50||t.aboveSma200===`yes`&&!(e.ta?.sma200&&e.price>e.ta.sma200)||t.aboveSma200===`no`&&e.ta?.sma200&&e.price>e.ta.sma200)})}function Zt(e,t=`stockviz-screener.csv`){let n=[[`Symbol`,`Company`,`Sector`,`Price`,`Change`,`Change %`,`Volume`,`Market Cap`].join(`,`),...e.map(e=>[e.symbol,Qt(e.name),Qt(e.sector),B(e.price),e.change?.toFixed(2)??``,e.changePct?.toFixed(2)??``,e.volume??``,e.marketCap??``].join(`,`))],r=new Blob([n.join(`
`)],{type:`text/csv;charset=utf-8`}),i=document.createElement(`a`);i.href=URL.createObjectURL(r),i.download=t,i.click(),URL.revokeObjectURL(i.href)}function Qt(e){let t=String(e??``);return t.includes(`,`)||t.includes(`"`)?`"${t.replace(/"/g,`""`)}"`:t}var $t=[`sector`,`industry`,`minChange`,`maxChange`,`minVolume`,`minMarketCap`,`search`,`signal`,`pattern`,`prediction`,`minRsi`,`maxRsi`,`minPe`,`maxPe`,`aboveSma50`,`aboveSma200`];function en(){let e=location.hash.slice(1),t=e.indexOf(`?`);if(t===-1)return null;let n=new URLSearchParams(e.slice(t+1)),r={};for(let e of $t){let t=n.get(e);t!=null&&(r[e]=t)}return Object.keys(r).length?r:null}function tn(e){let t=location.hash.slice(1).split(`?`)[0]||`/`;if(t!==`/screener`&&t!==`/map`)return;let n=new URLSearchParams;for(let t of $t)e[t]&&n.set(t,e[t]);let r=n.toString(),i=r?`#${t}?${r}`:`#${t}`;location.hash!==i&&history.replaceState(null,``,i)}function nn(){let e=en();e&&Be(e,{preset:`custom`})}function rn(e){let t=new URLSearchParams;for(let n of $t)e[n]&&t.set(n,e[n]);let n=t.toString(),r=location.origin+location.pathname;return n?`${r}#/screener?${n}`:`${r}#/screener`}function an(e,t=200){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}function on(t){let n=ze(),r=Ue(),i=He(),a=it(),o=R(),s=ln(Xt(o,n),r);tn(n),t.innerHTML=`
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
      ${Yt.map(e=>`
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
    </div>

    <form class="filter-bar" id="filter-form">
      <div class="filter-panel" data-panel="all">
        <div class="filter-group"><label>Search</label><input type="search" name="search" placeholder="Symbol…" value="${Q(n.search)}" /></div>
      </div>
      <div class="filter-panel" data-panel="desc" hidden>
        <div class="filter-group"><label>Sector</label><select name="sector"><option value="">Any</option>${e.map(e=>`<option value="${e}" ${n.sector===e?`selected`:``}>${e}</option>`).join(``)}</select></div>
        <div class="filter-group"><label>Min %</label><input type="number" name="minChange" step="0.1" value="${Q(n.minChange)}" /></div>
        <div class="filter-group"><label>Max %</label><input type="number" name="maxChange" step="0.1" value="${Q(n.maxChange)}" /></div>
        <div class="filter-group"><label>Min Vol</label><input type="number" name="minVolume" value="${Q(n.minVolume)}" /></div>
        <div class="filter-group"><label>Min MCap</label><select name="minMarketCap"><option value="">Any</option><option value="10000000000" ${n.minMarketCap===`10000000000`?`selected`:``}>$10B+</option><option value="50000000000" ${n.minMarketCap===`50000000000`?`selected`:``}>$50B+</option><option value="100000000000" ${n.minMarketCap===`100000000000`?`selected`:``}>$100B+</option></select></div>
      </div>
      <div class="filter-panel" data-panel="fund" hidden>
        <div class="filter-group"><label>Min P/E</label><input type="number" name="minPe" value="${Q(n.minPe)}" /></div>
        <div class="filter-group"><label>Max P/E</label><input type="number" name="maxPe" value="${Q(n.maxPe)}" /></div>
      </div>
      <div class="filter-panel" data-panel="tech" hidden>
        <div class="filter-group"><label>Min RSI</label><input type="number" name="minRsi" value="${Q(n.minRsi)}" /></div>
        <div class="filter-group"><label>Max RSI</label><input type="number" name="maxRsi" value="${Q(n.maxRsi)}" /></div>
        <div class="filter-group"><label>Above SMA50</label><select name="aboveSma50"><option value="">Any</option><option value="yes" ${n.aboveSma50===`yes`?`selected`:``}>Yes</option><option value="no" ${n.aboveSma50===`no`?`selected`:``}>No</option></select></div>
        <div class="filter-group"><label>Above SMA200</label><select name="aboveSma200"><option value="">Any</option><option value="yes" ${n.aboveSma200===`yes`?`selected`:``}>Yes</option><option value="no" ${n.aboveSma200===`no`?`selected`:``}>No</option></select></div>
        <div class="filter-group"><label>Prediction</label><select name="prediction"><option value="">Any</option><option value="bullish" ${n.prediction===`bullish`?`selected`:``}>Bullish</option><option value="bearish" ${n.prediction===`bearish`?`selected`:``}>Bearish</option><option value="neutral" ${n.prediction===`neutral`?`selected`:``}>Neutral</option></select></div>
      </div>
      <div class="filter-panel" data-panel="signals" hidden>
        <div class="filter-group"><label>Signal</label><select name="signal"><option value="">Any</option>${Wt.map(e=>`<option value="${e.id}" ${n.signal===e.id?`selected`:``}>${e.label}</option>`).join(``)}</select></div>
        <div class="filter-group"><label>Pattern</label><select name="pattern"><option value="">Any</option>${Gt.map(e=>`<option value="${e.id}" ${n.pattern===e.id?`selected`:``}>${e.label}</option>`).join(``)}</select></div>
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
            ${Z(`symbol`,`Ticker`,r)}
            ${Z(`name`,`Company`,r)}
            <th>Trend</th>
            ${Z(`sector`,`Sector`,r)}
            ${Z(`price`,`Price`,r)}
            ${Z(`changePct`,`Change %`,r)}
            <th>Signal</th><th>Pattern</th>
            ${Z(`ta.rsi`,`RSI`,r)}
            <th>P/E</th>
            <th>Prediction</th>
            ${Z(`volume`,`Volume`,r)}
            ${Z(`marketCap`,`Market Cap`,r)}
          </tr>
        </thead>
        <tbody>
          ${s.length?s.map(sn).join(``):`<tr><td colspan="13" class="empty-row">No matches — adjust filters</td></tr>`}
        </tbody>
      </table>
    </div>
  `;let c=t.querySelector(`#filter-form`),l=an(()=>{let e=new FormData(c);Be(Object.fromEntries(e.entries()),{preset:`custom`})},180);c.addEventListener(`input`,l),c.addEventListener(`change`,()=>{let e=new FormData(c);Be(Object.fromEntries(e.entries()),{preset:`custom`})}),t.querySelector(`#reset-filters`)?.addEventListener(`click`,dt),t.querySelector(`#save-filter`)?.addEventListener(`click`,()=>{let e=prompt(`Name this filter preset:`);e?.trim()&&at(e.trim())}),t.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Yt.find(t=>t.id===e.dataset.preset);t&&Ve(t.id,t.filters)})}),t.querySelectorAll(`[data-saved]`).forEach(e=>{e.addEventListener(`click`,()=>st(e.dataset.saved))}),t.querySelectorAll(`[data-del]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),ot(e.dataset.del)})}),t.querySelector(`#export-csv`)?.addEventListener(`click`,()=>Zt(s)),t.querySelector(`#share-screener`)?.addEventListener(`click`,async()=>{let e=rn(n);try{await navigator.clipboard.writeText(e);let n=t.querySelector(`#share-screener`),r=n.textContent;n.textContent=`Copied!`,setTimeout(()=>{n.textContent=r},2e3)}catch{prompt(`Copy this link:`,e)}}),t.querySelectorAll(`th[data-sort]`).forEach(e=>{e.addEventListener(`click`,()=>We(e.dataset.sort))}),t.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),t.querySelectorAll(`.screener-tab`).forEach(e=>{e.addEventListener(`click`,()=>{t.querySelectorAll(`.screener-tab`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let n=e.dataset.tab;t.querySelectorAll(`.filter-panel`).forEach(e=>{e.hidden=e.dataset.panel!==n})})}),t.querySelectorAll(`[data-fav]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=Xe(e.dataset.fav);e.textContent=n?`★`:`☆`,e.classList.toggle(`starred`,n)})})}function Z(e,t,n){return`<th data-sort="${e}" class="sortable">${t}${n.key===e?n.dir===`asc`?` ▲`:` ▼`:``}</th>`}function sn(e){let t=Ze(e.symbol);return`
    <tr class="clickable" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
      <td class="col-star">
        <button class="star-btn ${t?`starred`:``}" data-fav="${e.symbol}" aria-label="Favorite">${t?`★`:`☆`}</button>
      </td>
      <td class="sym">${e.symbol}</td>
      <td class="name-cell">${e.name||`—`}</td>
      <td>${_t(e.symbol)}</td>
      <td class="sector-cell">${e.sector||`—`}</td>
      <td data-live="price">$${B(e.price)}</td>
      <td class="${U(e.changePct)}" data-live="pct">${V(e.changePct)}</td>
      <td class="signal-tag">${e.primarySignal||`—`}</td>
      <td class="pattern-label">${e.patternLabels?.[0]||`—`}</td>
      <td class="${(e.ta?.rsi??50)>70?`neg`:(e.ta?.rsi??50)<30?`pos`:``}">${e.ta?.rsi?.toFixed(1)??`—`}</td>
      <td>${e.fundamentals?.pe??`—`}</td>
      <td class="${e.prediction?.direction===`bullish`?`pos`:e.prediction?.direction===`bearish`?`neg`:``}">${e.prediction?`${e.prediction.direction} ${e.prediction.confidence}%`:`—`}</td>
      <td>${H(e.volume)}</td>
      <td>${pt(e.marketCap)}</td>
    </tr>
  `}function cn(e,t){return t.includes(`.`)?t.split(`.`).reduce((e,t)=>e?.[t],e):e[t]}function ln(e,{key:t,dir:n}){let r=n===`asc`?1:-1;return[...e].sort((e,n)=>{let i=cn(e,t)??``,a=cn(n,t)??``;return typeof i==`number`&&typeof a==`number`?(i-a)*r:String(i).localeCompare(String(a))*r})}function Q(e){return String(e??``).replace(/"/g,`&quot;`)}function un(e,t,n){if(!t.length){e.innerHTML=`<p class="empty-state">No stocks match current filters.</p>`;return}let r=new Map;for(let e of t){let t=e.sector||`Other`;r.has(t)||r.set(t,[]),r.get(t).push(e)}e.innerHTML=`
    <div class="heatmap-legend">
      <span class="legend-label">-5%</span>
      <div class="legend-gradient"></div>
      <span class="legend-label">+5%</span>
    </div>
    <div class="treemap">
      ${[...r.entries()].sort((e,t)=>{let n=e[1].reduce((e,t)=>e+t.changePct,0)/e[1].length;return t[1].reduce((e,t)=>e+t.changePct,0)/t[1].length-n}).map(([e,t])=>dn(e,t)).join(``)}
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>n?.(e.dataset.symbol))})}function dn(e,t){let n=t.reduce((e,t)=>e+(t.marketCap||1),0),r=t.reduce((e,t)=>e+t.changePct,0)/t.length;return`
    <div class="sector-block" style="flex:${Math.max(1,Math.round(n/5e10))}">
      <div class="sector-header" style="background:${ht(r)}">
        <span class="sector-name">${e}</span>
        <span class="sector-avg">${r>=0?`+`:``}${r.toFixed(2)}%</span>
      </div>
      <div class="sector-tiles">
        ${t.sort((e,t)=>(t.marketCap||0)-(e.marketCap||0)).map(e=>fn(e,n)).join(``)}
      </div>
    </div>
  `}function fn(e,t){let n=(e.marketCap||1)/t,r=Math.max(1,Math.round(n*20)),i=e.changePct??0;return`
    <button
      class="heat-tile"
      data-symbol="${e.symbol}"
      style="flex:${r};background:${ht(i)}"
      title="${e.name}: ${i>=0?`+`:``}${i.toFixed(2)}%"
    >
      <span class="tile-symbol">${e.symbol}</span>
      <span class="tile-pct">${i>=0?`+`:``}${i.toFixed(1)}%</span>
    </button>
  `}function pn(e){let t=Xt(R(),ze());e.innerHTML=`
    <div class="page-header">
      <h1>Market Heat Map</h1>
      <p class="page-sub">Sector treemap sized by market cap, colored by daily change. Uses screener filters.</p>
    </div>
    <div id="heatmap-root" class="heatmap-root"></div>
  `,un(e.querySelector(`#heatmap-root`),t,e=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))})}async function mn(e){e.innerHTML=`
    <div class="page-header">
      <h1>Market News</h1>
      <p class="page-sub">Latest headlines from your data feed.</p>
    </div>
    <div class="news-loading panel">Loading news…</div>
  `;let t=await ye(L()),n=e.querySelector(`.news-loading`);n&&(n.className=`news-list panel`,n.innerHTML=t.length?t.map(hn).join(``):`<p class="muted">No news available.</p>`,n.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}))}function hn(e){let t=e.datetime?new Date(e.datetime*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):``,n=e.related?.split(`,`)[0]||e.symbol;return`
    <article class="news-item">
      <div class="news-meta">
        <span class="news-source">${e.source||`News`}</span>
        <span class="news-date">${t}</span>
        ${n?`<button class="news-symbol" data-symbol="${n}">${n}</button>`:``}
      </div>
      <a class="news-headline" href="${e.url||`#`}" target="_blank" rel="noopener">${e.headline||e.title||`Untitled`}</a>
      ${e.summary?`<p class="news-summary">${e.summary}</p>`:``}
    </article>
  `}function gn(e){let n=Qe(),r=R(),i=0,a=0,o=n.map(e=>{let t=r.get(e.symbol),n=t?.price??0,o=n*e.shares,s=e.costBasis*e.shares,c=o-s,l=s?c/s*100:0;return i+=o,a+=s,{...e,q:t,price:n,value:o,cost:s,pl:c,plPct:l}}),s=i-a,c=a?s/a*100:0;e.innerHTML=`
    <div class="page-header">
      <h1>Portfolio</h1>
      <p class="page-sub">Track holdings, cost basis, and live P&amp;L.</p>
    </div>

    <div class="portfolio-summary">
      <div class="summary-card">
        <span class="summary-label">Total Value</span>
        <span class="summary-value">$${B(i)}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Total Cost</span>
        <span class="summary-value">$${B(a)}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">P&amp;L</span>
        <span class="summary-value ${U(s)}">${s>=0?`+`:`-`}$${B(Math.abs(s))} (${V(c)})</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Holdings</span>
        <span class="summary-value">${n.length}</span>
      </div>
    </div>

    <form class="portfolio-form panel" id="add-holding">
      <h2 class="panel-title">Add Holding</h2>
      <div class="form-row">
        <div class="filter-group">
          <label>Symbol</label>
          <input list="symbol-list" name="symbol" placeholder="AAPL" required />
          <datalist id="symbol-list">${t.map(e=>`<option value="${e.symbol}">`).join(``)}</datalist>
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
          ${o.length?o.map(_n).join(``):`<tr><td colspan="8" class="empty-row">No holdings yet — add your first position above.</td></tr>`}
        </tbody>
      </table>
    </div>
  `,e.querySelector(`#add-holding`)?.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(e.target),r=n.get(`symbol`).toString().trim().toUpperCase();if(!t.find(e=>e.symbol===r)){W(`Symbol not in universe`,`error`);return}$e({symbol:r,shares:n.get(`shares`),costBasis:n.get(`costBasis`)}),W(`Added ${r}`,`success`),e.target.reset()}),e.querySelectorAll(`[data-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{et(e.dataset.remove),W(`Removed ${e.dataset.remove}`,`info`)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function _n(e){return`
    <tr data-live-symbol="${e.symbol}">
      <td class="sym clickable" data-symbol="${e.symbol}">${e.symbol}</td>
      <td>${e.shares}</td>
      <td>$${B(e.costBasis)}</td>
      <td data-live="price">$${B(e.price)}</td>
      <td>$${B(e.value)}</td>
      <td class="${U(e.pl)}">${e.pl>=0?`+`:``}$${B(Math.abs(e.pl))}</td>
      <td class="${U(e.plPct)}">${V(e.plPct)}</td>
      <td><button class="btn-ghost btn-sm" data-remove="${e.symbol}">Remove</button></td>
    </tr>
  `}var vn=[{key:`price`,label:`Price`,fmt:e=>`$${B(e.price)}`},{key:`changePct`,label:`Change %`,fmt:e=>V(e.changePct),cls:e=>U(e.changePct)},{key:`volume`,label:`Volume`,fmt:e=>H(e.volume)},{key:`marketCap`,label:`Market Cap`,fmt:e=>pt(e.marketCap)},{key:`open`,label:`Open`,fmt:e=>`$${B(e.open)}`},{key:`high`,label:`High`,fmt:e=>`$${B(e.high)}`},{key:`low`,label:`Low`,fmt:e=>`$${B(e.low)}`},{key:`sector`,label:`Sector`,fmt:e=>e.sector||`—`}];function yn(e){let t=tt(),n=R();e.innerHTML=`
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

    ${t.length?bn(t,n):`
      <div class="empty-compare panel">
        <p>No stocks selected. Press <kbd>/</kbd> or <kbd>Ctrl+K</kbd> to search, or click a ticker above.</p>
      </div>
    `}
  `,e.querySelector(`#clear-compare`)?.addEventListener(`click`,rt),e.querySelectorAll(`[data-add]`).forEach(e=>{e.addEventListener(`click`,()=>nt(e.dataset.add))}),e.querySelectorAll(`[data-rm]`).forEach(e=>{e.addEventListener(`click`,()=>nt(e.dataset.rm))}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),e.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=n.get(e.dataset.spark);t?.sparkline?.length&&gt(e,t.sparkline,{width:120,height:40})})}function bn(e,n){let r=e.map(e=>{let r=t.find(t=>t.symbol===e);return{sym:e,q:n.get(e),meta:r}});return`
    <div class="compare-grid">
      ${r.map(({sym:e,q:t,meta:n})=>`
        <div class="compare-card panel" data-live-symbol="${e}">
          <div class="compare-card-head">
            <button class="sym compare-sym" data-symbol="${e}">${e}</button>
            <button type="button" class="compare-remove" data-rm="${e}" title="Remove">&times;</button>
          </div>
          <p class="compare-name">${n?.name||t?.name||``}</p>
          ${_t(e).replace(`width="72" height="24"`,`width="120" height="40"`)}
          <div class="compare-price ${U(t?.changePct)}">
            <span data-live="price">$${B(t?.price)}</span>
            <span data-live="pct">${V(t?.changePct)}</span>
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
          ${vn.map(e=>`
            <tr>
              <td>${e.label}</td>
              ${r.map(({q:t})=>`
                <td class="${e.cls?.(t)||``}">${t?e.fmt(t):`—`}</td>
              `).join(``)}
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `}function xn(e){let t=[...R().values()];e.innerHTML=`
    <div class="page-header">
      <h1>Technical Signals</h1>
      <p class="page-sub">Finviz-style TA signals — click any ticker for prediction details.</p>
    </div>
    <div class="signals-grid">
      ${Wt.map(e=>{let n=t.filter(t=>t.signals?.some(t=>t.id===e.id)).sort((e,t)=>Math.abs(t.changePct)-Math.abs(e.changePct)).slice(0,8);return`
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
                    <td>$${B(t.price)}</td>
                    <td class="${U(t.changePct)}">${V(t.changePct)}</td>
                    <td class="signal-tag">${e.label}</td>
                  </tr>
                `).join(``):`<tr><td colspan="4" class="empty-row">None detected</td></tr>`}
              </tbody>
            </table>
          </section>
        `}).join(``)}
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Sn(e){let t=[...R().values()],n=t.flatMap(e=>(e.patterns||[]).map(t=>({...e,pattern:t}))).sort((e,t)=>t.pattern.confidence-e.pattern.confidence);e.innerHTML=`
    <div class="page-header">
      <h1>Pattern Scanner</h1>
      <p class="page-sub">Chart pattern detection with confidence scores and directional bias.</p>
    </div>

    <div class="pattern-summary panel">
      <span><strong>${n.length}</strong> patterns detected across ${t.filter(e=>e.patterns?.length).length} stocks</span>
      <div class="preset-bar">
        ${Gt.slice(0,8).map(e=>{let n=t.filter(t=>t.patterns?.some(t=>t.id===e.id)).length;return`<a href="#/screener?pattern=${e.id}" class="preset-chip">${e.label} (${n})</a>`}).join(``)}
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
              <td>$${B(n)}</td>
              <td class="${U(r)}">${V(r)}</td>
              <td class="pattern-label">${i.label}</td>
              <td class="${i.bias===`bullish`?`pos`:`neg`}">${i.bias}</td>
              <td>
                <div class="conf-bar"><div class="conf-fill" style="width:${i.confidence}%"></div></div>
                ${i.confidence}%
              </td>
              <td class="${U(a?.score)}">${a?.direction||`—`} (${a?.confidence||0}%)</td>
              <td>$${B(a?.priceTarget)}</td>
            </tr>
          `).join(``)||`<tr><td colspan="9" class="empty-row">Scanning… refresh to detect patterns.</td></tr>`}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Cn(t){let n=[...R().values()];t.innerHTML=`
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
              <td class="${U(e.avg)}">${V(e.avg)}</td>
              <td>${e.count?Math.round(e.bullish/e.count*100):0}%</td>
              <td class="sym">${e.top?`${e.top.symbol} ${V(e.top.changePct)}`:`—`}</td>
              <td class="sym">${e.bottom?`${e.bottom.symbol} ${V(e.bottom.changePct)}`:`—`}</td>
              <td><a href="#/map" class="btn-ghost btn-sm">Map</a></td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `}var wn=`AAPL`;function Tn(e){let n=R(),r=n.get(wn)||n.get(`AAPL`);e.innerHTML=`
    <div class="page-header charts-header">
      <h1>Charts</h1>
      <select id="chart-symbol" class="chart-select">
        ${t.map(e=>`<option value="${e.symbol}" ${e.symbol===wn?`selected`:``}>${e.symbol} — ${e.name}</option>`).join(``)}
      </select>
    </div>
    ${r?`
      <div class="chart-page panel">
        <div class="chart-page-head">
          <div>
            <span class="chart-page-sym">${r.symbol}</span>
            <span class="chart-page-name">${r.name}</span>
          </div>
          <div class="chart-page-price ${U(r.changePct)}">
            $${B(r.price)} ${V(r.changePct)}
          </div>
        </div>
        <div id="full-chart" class="full-chart-host"></div>
        ${r.prediction?`
          <div class="chart-prediction">
            <span class="pred-badge ${r.prediction.direction}">${r.prediction.direction.toUpperCase()}</span>
            <span>${r.prediction.confidence}% confidence · Target $${B(r.prediction.priceTarget)} (${r.prediction.targetPct>=0?`+`:``}${r.prediction.targetPct}%) · ${r.prediction.horizon}</span>
          </div>
        `:``}
        ${r.patterns?.length?`
          <div class="chart-patterns">
            <strong>Patterns:</strong> ${r.patterns.map(e=>`${e.label} (${e.confidence}%)`).join(` · `)}
          </div>
        `:``}
      </div>
    `:`<p class="muted">Loading…</p>`}
  `;let i=e.querySelector(`#full-chart`);i&&r?.candles&&(bt(i,r.candles,{height:360}),new ResizeObserver(()=>bt(i,r.candles,{height:360})).observe(i)),e.querySelector(`#chart-symbol`)?.addEventListener(`change`,t=>{wn=t.target.value,Tn(e)})}function En(e,t,n){return`
    <section class="panel">
      <h2 class="panel-title">${e}</h2>
      <table class="data-table compact finviz-tbl">
        <thead><tr>${n.map(e=>`<th>${e}</th>`).join(``)}</tr></thead>
        <tbody>
          ${t.map(e=>`
            <tr>
              <td class="sym">${e.name||e.pair}</td>
              <td>${typeof e.last==`number`&&e.last>1e3?e.last.toLocaleString():B(e.last)}</td>
              <td class="${U(e.change)}">${e.change>=0?`+`:``}${B(e.change)}</td>
              <td class="${U(e.changePct)}">${V(e.changePct)}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </section>
  `}function Dn(e){e.innerHTML=`
    <div class="page-header"><h1>Futures &amp; Forex</h1></div>
    <div class="three-col">
      ${En(`Futures`,Rt,[`Contract`,`Last`,`Change`,`Change %`])}
      ${En(`Forex & Crypto`,zt,[`Pair`,`Last`,`Change`,`Change %`])}
      ${En(`Bonds`,Bt,[`Bond`,`Yield`,`Change`,`Change %`])}
    </div>
  `}function On(e){e.innerHTML=`
    <div class="page-header"><h1>Economic &amp; Earnings Calendar</h1></div>
    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">Earnings</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Symbol</th><th>Date</th><th>EPS Est.</th><th>Cap</th></tr></thead>
          <tbody>
            ${Ht.map(e=>`
              <tr class="clickable" data-symbol="${e.symbol}">
                <td class="sym">${e.symbol}</td>
                <td>${e.date}</td>
                <td>$${B(e.epsEst)}</td>
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
            ${Ut.map(e=>`
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
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function kn(e){e.innerHTML=`
    <div class="page-header"><h1>Insider Trading</h1><p class="page-sub">Recent insider transactions (simulated data).</p></div>
    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr><th>Ticker</th><th>Insider</th><th>Relationship</th><th>Date</th><th>Transaction</th><th>Cost</th><th>#Shares</th><th>Value ($)</th></tr>
        </thead>
        <tbody>
          ${Vt.map(e=>`
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
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function An(e){let t=L();e.innerHTML=`
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
            <input type="password" id="apiKey" name="apiKey" placeholder="Paste your key…" value="${Mn(t.apiKey)}" autocomplete="off" />
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
          <input type="text" id="watchlist" name="watchlist" value="${Mn(t.watchlist.join(`, `))}" placeholder="AAPL, MSFT, NVDA" />
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
  `;let n=e.querySelector(`#settings-form`);n.addEventListener(`submit`,t=>{t.preventDefault();let r=new FormData(n),i=r.get(`watchlist`).split(`,`).map(e=>e.trim().toUpperCase()).filter(Boolean);Le({apiKey:r.get(`apiKey`),refreshInterval:Number(r.get(`refreshInterval`))||30,useMockData:r.get(`useMockData`)===`on`,watchlist:i}),jn(e),window.dispatchEvent(new CustomEvent(`stockviz:settings-saved`))}),e.querySelector(`#test-api`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#apiKey`).value,n=e.querySelector(`#api-status`);n.textContent=`Testing…`,n.className=`api-status`;let r=await xe(t);n.textContent=r.message,n.className=`api-status ${r.valid?`ok`:`err`}`})}function jn(e){let t=e.querySelector(`.save-toast`);t||(t=document.createElement(`p`),t.className=`save-toast`,e.querySelector(`.settings-form`)?.appendChild(t)),t.textContent=`Settings saved.`,setTimeout(()=>t.remove(),2500)}function Mn(e){return String(e??``).replace(/"/g,`&quot;`)}var Nn={"/":Kt,"/screener":on,"/map":pn,"/news":mn,"/portfolio":gn,"/compare":yn,"/signals":xn,"/patterns":Sn,"/groups":Cn,"/charts":Tn,"/futures":Dn,"/calendar":On,"/insider":kn,"/settings":An},Pn=new Set([`quotes`,`status`]),$=`/`,Fn=!0;async function In(){let e=L();try{let[{quotes:t,source:n},r]=await Promise.all([he(e),be(e)]);Ge(t,{fetchedAt:Date.now(),source:n}),Ke(r),Ln(n)}catch(e){console.error(`Quote fetch failed:`,e),Ln(`error`)}}function Ln(e){let t=document.getElementById(`status-dot`),n=document.getElementById(`status-text`),r=document.getElementById(`last-update`),i=document.getElementById(`market-status`),a=Je(),o=qe();e===`error`?(t.className=`status-dot`,n.textContent=`Update failed`):e===`finnhub`?(t.className=`status-dot live`,n.textContent=`Live · Finnhub`):(t.className=`status-dot mock`,n.textContent=`Simulated + TA Engine`),a.lastFetchAt&&(r.textContent=`Updated ${mt(a.lastFetchAt)}`),i&&o&&(i.textContent=o.label,i.className=`market-status ${o.isOpen?`open`:`closed`}`),Rn()}function Rn(){let e=document.getElementById(`footer-stats`);if(!e)return;let n=[...R().values()],r=n.reduce((e,t)=>e+(t.patterns?.length||0),0),i=n.filter(e=>e.prediction?.direction===`bullish`).length;e.innerHTML=`
    <span>${t.length} symbols</span>
    <span>${r} patterns</span>
    <span class="pos">${i} bullish</span>
  `}function zn(){let e=document.getElementById(`ticker-bar`),t=R();e.innerHTML=[`SPY`,`QQQ`,`DIA`,`IWM`].map(e=>{let n={SPY:`S&P 500`,QQQ:`NASDAQ`,DIA:`DOW`,IWM:`RUSSELL 2K`},r=t.get(e);if(!r)return``;let i=U(r.changePct);return`
      <span class="ticker-item" data-live-symbol="${e}">
        <span class="ticker-label">${n[e]}</span>
        <span class="ticker-price" data-live="price">$${B(r.price)}</span>
        <span class="ticker-chg ${i}" data-live="pct">${V(r.changePct)}</span>
      </span>
    `}).join(``),e.querySelectorAll(`.ticker-item`).forEach(e=>{e.style.cursor=`pointer`,e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.liveSymbol}))})})}function Bn(){document.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=R().get(e.dataset.spark);t?.sparkline?.length&&gt(e,t.sparkline,{width:Number(e.getAttribute(`width`))||72,height:Number(e.getAttribute(`height`))||24})})}function Vn(){return(location.hash.slice(1)||`/`).split(`?`)[0]||`/`}function Hn(e=!0){$=Vn(),Nn[$]||($=`/`),document.querySelectorAll(`.main-nav a`).forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)?.startsWith(`#${$}`))});let t=document.getElementById(`main-content`);e&&!Fn&&t.classList.add(`page-enter`);let n=(Nn[$]||Kt)(t),r=()=>{zn(),Bn(),e&&requestAnimationFrame(()=>t.classList.remove(`page-enter`)),Fn=!1};n?.then?n.then(r):r(),document.getElementById(`nav-toggle`)?.setAttribute(`aria-expanded`,`false`),document.querySelector(`.main-nav`)?.classList.remove(`open`)}function Un(e){if(Pn.has(e)&&Nn[$]){vt(),zn(),Ln(Je().dataSource);return}Nn[$]?Hn(!1):zn()}function Wn(){Tt(),At(),St(),document.getElementById(`nav-toggle`)?.addEventListener(`click`,()=>{document.querySelector(`.main-nav`)?.classList.toggle(`open`)}),document.getElementById(`theme-toggle`)?.addEventListener(`click`,Re),Ie(L().theme),nn(),window.addEventListener(`hashchange`,()=>{nn(),Hn()}),window.addEventListener(`stockviz:select`,e=>{Ye(e.detail),Et(e.detail)}),window.addEventListener(`stockviz:settings-saved`,()=>{ut(),In().then(()=>lt(In))}),ct(Un),In().then(()=>{Hn(),lt(In)})}Wn();