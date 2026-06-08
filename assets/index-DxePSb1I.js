(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Technology`,`Healthcare`,`Financial`,`Consumer Cyclical`,`Consumer Defensive`,`Industrials`,`Energy`,`Utilities`,`Real Estate`,`Basic Materials`,`Communication Services`],t=[{symbol:`AAPL`,name:`Apple Inc.`,sector:`Technology`,industry:`Consumer Electronics`,marketCap:32e11},{symbol:`MSFT`,name:`Microsoft Corp.`,sector:`Technology`,industry:`Software`,marketCap:31e11},{symbol:`NVDA`,name:`NVIDIA Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:28e11},{symbol:`GOOGL`,name:`Alphabet Inc.`,sector:`Communication Services`,industry:`Internet Content`,marketCap:21e11},{symbol:`AMZN`,name:`Amazon.com Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:19e11},{symbol:`META`,name:`Meta Platforms`,sector:`Communication Services`,industry:`Social Media`,marketCap:14e11},{symbol:`TSLA`,name:`Tesla Inc.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e11},{symbol:`BRK.B`,name:`Berkshire Hathaway`,sector:`Financial`,industry:`Insurance`,marketCap:9e11},{symbol:`AVGO`,name:`Broadcom Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:75e10},{symbol:`JPM`,name:`JPMorgan Chase`,sector:`Financial`,industry:`Banks`,marketCap:58e10},{symbol:`V`,name:`Visa Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:56e10},{symbol:`UNH`,name:`UnitedHealth Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:52e10},{symbol:`XOM`,name:`Exxon Mobil`,sector:`Energy`,industry:`Oil & Gas`,marketCap:48e10},{symbol:`LLY`,name:`Eli Lilly`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:75e10},{symbol:`MA`,name:`Mastercard Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:45e10},{symbol:`COST`,name:`Costco Wholesale`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:4e11},{symbol:`HD`,name:`Home Depot`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:38e10},{symbol:`PG`,name:`Procter & Gamble`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:37e10},{symbol:`JNJ`,name:`Johnson & Johnson`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:36e10},{symbol:`ABBV`,name:`AbbVie Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:31e10},{symbol:`NFLX`,name:`Netflix Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:29e10},{symbol:`CRM`,name:`Salesforce Inc.`,sector:`Technology`,industry:`Software`,marketCap:28e10},{symbol:`BAC`,name:`Bank of America`,sector:`Financial`,industry:`Banks`,marketCap:31e10},{symbol:`ORCL`,name:`Oracle Corp.`,sector:`Technology`,industry:`Software`,marketCap:38e10},{symbol:`CVX`,name:`Chevron Corp.`,sector:`Energy`,industry:`Oil & Gas`,marketCap:29e10},{symbol:`KO`,name:`Coca-Cola Co.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:27e10},{symbol:`AMD`,name:`Advanced Micro Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:25e10},{symbol:`PEP`,name:`PepsiCo Inc.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:23e10},{symbol:`WMT`,name:`Walmart Inc.`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:52e10},{symbol:`DIS`,name:`Walt Disney Co.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e10},{symbol:`CSCO`,name:`Cisco Systems`,sector:`Technology`,industry:`Communication Equipment`,marketCap:21e10},{symbol:`INTC`,name:`Intel Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:95e9},{symbol:`QCOM`,name:`Qualcomm Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:19e10},{symbol:`IBM`,name:`IBM Corp.`,sector:`Technology`,industry:`IT Services`,marketCap:18e10},{symbol:`GE`,name:`GE Aerospace`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:19e10},{symbol:`CAT`,name:`Caterpillar Inc.`,sector:`Industrials`,industry:`Farm & Construction`,marketCap:175e9},{symbol:`BA`,name:`Boeing Co.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:13e10},{symbol:`UPS`,name:`United Parcel Service`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:11e10},{symbol:`RTX`,name:`RTX Corp.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:16e10},{symbol:`HON`,name:`Honeywell Intl.`,sector:`Industrials`,industry:`Conglomerates`,marketCap:14e10},{symbol:`MRK`,name:`Merck & Co.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:25e10},{symbol:`PFE`,name:`Pfizer Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:15e10},{symbol:`TMO`,name:`Thermo Fisher`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:2e11},{symbol:`ABT`,name:`Abbott Labs`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:21e10},{symbol:`AMGN`,name:`Amgen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:155e9},{symbol:`GILD`,name:`Gilead Sciences`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:105e9},{symbol:`GS`,name:`Goldman Sachs`,sector:`Financial`,industry:`Capital Markets`,marketCap:16e10},{symbol:`MS`,name:`Morgan Stanley`,sector:`Financial`,industry:`Capital Markets`,marketCap:155e9},{symbol:`WFC`,name:`Wells Fargo`,sector:`Financial`,industry:`Banks`,marketCap:21e10},{symbol:`C`,name:`Citigroup Inc.`,sector:`Financial`,industry:`Banks`,marketCap:13e10},{symbol:`BLK`,name:`BlackRock Inc.`,sector:`Financial`,industry:`Asset Management`,marketCap:13e10},{symbol:`AXP`,name:`American Express`,sector:`Financial`,industry:`Credit Services`,marketCap:175e9},{symbol:`NKE`,name:`Nike Inc.`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:115e9},{symbol:`SBUX`,name:`Starbucks Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:95e9},{symbol:`MCD`,name:`McDonald's Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:21e10},{symbol:`LOW`,name:`Lowe's Companies`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:14e10},{symbol:`TGT`,name:`Target Corp.`,sector:`Consumer Cyclical`,industry:`Discount Stores`,marketCap:65e9},{symbol:`F`,name:`Ford Motor Co.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:45e9},{symbol:`GM`,name:`General Motors`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:55e9},{symbol:`PM`,name:`Philip Morris`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:16e10},{symbol:`MO`,name:`Altria Group`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:85e9},{symbol:`CL`,name:`Colgate-Palmolive`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:75e9},{symbol:`COP`,name:`ConocoPhillips`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:13e10},{symbol:`SLB`,name:`Schlumberger`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:65e9},{symbol:`EOG`,name:`EOG Resources`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:75e9},{symbol:`OXY`,name:`Occidental Petroleum`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:5e10},{symbol:`NEE`,name:`NextEra Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:15e10},{symbol:`DUK`,name:`Duke Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:8e10},{symbol:`SO`,name:`Southern Co.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:9e10},{symbol:`D`,name:`Dominion Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:45e9},{symbol:`AMT`,name:`American Tower`,sector:`Real Estate`,industry:`REIT - Specialty`,marketCap:95e9},{symbol:`PLD`,name:`Prologis Inc.`,sector:`Real Estate`,industry:`REIT - Industrial`,marketCap:11e10},{symbol:`EQIX`,name:`Equinix Inc.`,sector:`Real Estate`,industry:`REIT - Data Centers`,marketCap:8e10},{symbol:`LIN`,name:`Linde plc`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:21e10},{symbol:`APD`,name:`Air Products`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:6e10},{symbol:`FCX`,name:`Freeport-McMoRan`,sector:`Basic Materials`,industry:`Copper`,marketCap:55e9},{symbol:`NEM`,name:`Newmont Corp.`,sector:`Basic Materials`,industry:`Gold`,marketCap:5e10},{symbol:`T`,name:`AT&T Inc.`,sector:`Communication Services`,industry:`Telecom`,marketCap:13e10},{symbol:`VZ`,name:`Verizon`,sector:`Communication Services`,industry:`Telecom`,marketCap:17e10},{symbol:`CMCSA`,name:`Comcast Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:16e10},{symbol:`TMUS`,name:`T-Mobile US`,sector:`Communication Services`,industry:`Telecom`,marketCap:23e10},{symbol:`ADBE`,name:`Adobe Inc.`,sector:`Technology`,industry:`Software`,marketCap:23e10},{symbol:`NOW`,name:`ServiceNow`,sector:`Technology`,industry:`Software`,marketCap:18e10},{symbol:`INTU`,name:`Intuit Inc.`,sector:`Technology`,industry:`Software`,marketCap:17e10},{symbol:`TXN`,name:`Texas Instruments`,sector:`Technology`,industry:`Semiconductors`,marketCap:175e9},{symbol:`MU`,name:`Micron Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:11e10},{symbol:`LRCX`,name:`Lam Research`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:1e11},{symbol:`SNPS`,name:`Synopsys Inc.`,sector:`Technology`,industry:`Software`,marketCap:85e9},{symbol:`PANW`,name:`Palo Alto Networks`,sector:`Technology`,industry:`Software`,marketCap:115e9},{symbol:`CRWD`,name:`CrowdStrike`,sector:`Technology`,industry:`Software`,marketCap:8e10},{symbol:`PLTR`,name:`Palantir Technologies`,sector:`Technology`,industry:`Software`,marketCap:7e10},{symbol:`UBER`,name:`Uber Technologies`,sector:`Technology`,industry:`Software`,marketCap:15e10},{symbol:`SQ`,name:`Block Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`SHOP`,name:`Shopify Inc.`,sector:`Technology`,industry:`Software`,marketCap:95e9},{symbol:`PYPL`,name:`PayPal Holdings`,sector:`Financial`,industry:`Credit Services`,marketCap:75e9},{symbol:`COIN`,name:`Coinbase Global`,sector:`Financial`,industry:`Capital Markets`,marketCap:55e9},{symbol:`SPY`,name:`SPDR S&P 500 ETF`,sector:`Financial`,industry:`ETF`,marketCap:5e11},{symbol:`QQQ`,name:`Invesco QQQ Trust`,sector:`Financial`,industry:`ETF`,marketCap:25e10},{symbol:`IWM`,name:`iShares Russell 2000`,sector:`Financial`,industry:`ETF`,marketCap:6e10},{symbol:`DIA`,name:`SPDR Dow Jones ETF`,sector:`Financial`,industry:`ETF`,marketCap:35e9},{symbol:`DE`,name:`Deere & Co.`,sector:`Industrials`,industry:`Farm Equipment`,marketCap:12e10},{symbol:`MMM`,name:`3M Company`,sector:`Industrials`,industry:`Conglomerates`,marketCap:7e10},{symbol:`LMT`,name:`Lockheed Martin`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:115e9},{symbol:`UNP`,name:`Union Pacific`,sector:`Industrials`,industry:`Railroads`,marketCap:145e9},{symbol:`FDX`,name:`FedEx Corp.`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:65e9},{symbol:`ISRG`,name:`Intuitive Surgical`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`VRTX`,name:`Vertex Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:115e9},{symbol:`REGN`,name:`Regeneron Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:95e9},{symbol:`BMY`,name:`Bristol-Myers Squibb`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:95e9},{symbol:`CI`,name:`Cigna Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:95e9},{symbol:`ELV`,name:`Elevance Health`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:11e10},{symbol:`ZTS`,name:`Zoetis Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:8e10},{symbol:`MDLZ`,name:`Mondelez Intl.`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:95e9},{symbol:`KHC`,name:`Kraft Heinz`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:4e10},{symbol:`GIS`,name:`General Mills`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:38e9},{symbol:`KMB`,name:`Kimberly-Clark`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:48e9},{symbol:`MAR`,name:`Marriott Intl.`,sector:`Consumer Cyclical`,industry:`Lodging`,marketCap:75e9},{symbol:`BKNG`,name:`Booking Holdings`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:16e10},{symbol:`ABNB`,name:`Airbnb Inc.`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:85e9},{symbol:`ROST`,name:`Ross Stores`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:45e9},{symbol:`TJX`,name:`TJX Companies`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:12e10},{symbol:`ORLY`,name:`O'Reilly Automotive`,sector:`Consumer Cyclical`,industry:`Auto Parts`,marketCap:6e10},{symbol:`PSX`,name:`Phillips 66`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`MPC`,name:`Marathon Petroleum`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`VLO`,name:`Valero Energy`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:45e9},{symbol:`HAL`,name:`Halliburton Co.`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:25e9},{symbol:`DVN`,name:`Devon Energy`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:25e9},{symbol:`AEP`,name:`American Electric Power`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:5e10},{symbol:`EXC`,name:`Exelon Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`SRE`,name:`Sempra Energy`,sector:`Utilities`,industry:`Utilities - Diversified`,marketCap:5e10},{symbol:`SPG`,name:`Simon Property Group`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:55e9},{symbol:`O`,name:`Realty Income`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:48e9},{symbol:`WELL`,name:`Welltower Inc.`,sector:`Real Estate`,industry:`REIT - Healthcare`,marketCap:65e9},{symbol:`DOW`,name:`Dow Inc.`,sector:`Basic Materials`,industry:`Chemicals`,marketCap:38e9},{symbol:`DD`,name:`DuPont de Nemours`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:35e9},{symbol:`NUE`,name:`Nucor Corp.`,sector:`Basic Materials`,industry:`Steel`,marketCap:35e9},{symbol:`STLD`,name:`Steel Dynamics`,sector:`Basic Materials`,industry:`Steel`,marketCap:2e10},{symbol:`EA`,name:`Electronic Arts`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:38e9},{symbol:`TTWO`,name:`Take-Two Interactive`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`ROKU`,name:`Roku Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:1e10},{symbol:`SNAP`,name:`Snap Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:18e9},{symbol:`PINS`,name:`Pinterest Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:22e9},{symbol:`SPOT`,name:`Spotify Technology`,sector:`Communication Services`,industry:`Internet Content`,marketCap:75e9},{symbol:`WDAY`,name:`Workday Inc.`,sector:`Technology`,industry:`Software`,marketCap:65e9},{symbol:`TEAM`,name:`Atlassian Corp.`,sector:`Technology`,industry:`Software`,marketCap:55e9},{symbol:`DDOG`,name:`Datadog Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`NET`,name:`Cloudflare Inc.`,sector:`Technology`,industry:`Software`,marketCap:35e9},{symbol:`SNOW`,name:`Snowflake Inc.`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`MDB`,name:`MongoDB Inc.`,sector:`Technology`,industry:`Software`,marketCap:25e9},{symbol:`ZS`,name:`Zscaler Inc.`,sector:`Technology`,industry:`Software`,marketCap:3e10},{symbol:`FTNT`,name:`Fortinet Inc.`,sector:`Technology`,industry:`Software`,marketCap:75e9},{symbol:`KLAC`,name:`KLA Corp.`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:9e10},{symbol:`AMAT`,name:`Applied Materials`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:16e10},{symbol:`ADI`,name:`Analog Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:1e11},{symbol:`MRVL`,name:`Marvell Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:7e10},{symbol:`ON`,name:`ON Semiconductor`,sector:`Technology`,industry:`Semiconductors`,marketCap:3e10},{symbol:`SMCI`,name:`Super Micro Computer`,sector:`Technology`,industry:`Computer Hardware`,marketCap:3e10},{symbol:`DELL`,name:`Dell Technologies`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e10},{symbol:`HPE`,name:`Hewlett Packard Enterprise`,sector:`Technology`,industry:`Computer Hardware`,marketCap:22e9},{symbol:`SCHW`,name:`Charles Schwab`,sector:`Financial`,industry:`Capital Markets`,marketCap:13e10},{symbol:`USB`,name:`U.S. Bancorp`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`PNC`,name:`PNC Financial`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`TFC`,name:`Truist Financial`,sector:`Financial`,industry:`Banks`,marketCap:55e9},{symbol:`ICE`,name:`Intercontinental Exchange`,sector:`Financial`,industry:`Financial Data`,marketCap:9e10},{symbol:`CME`,name:`CME Group`,sector:`Financial`,industry:`Financial Data`,marketCap:95e9},{symbol:`SPGI`,name:`S&P Global`,sector:`Financial`,industry:`Financial Data`,marketCap:15e10},{symbol:`MCO`,name:`Moody's Corp.`,sector:`Financial`,industry:`Financial Data`,marketCap:85e9},{symbol:`HOOD`,name:`Robinhood Markets`,sector:`Financial`,industry:`Capital Markets`,marketCap:2e10},{symbol:`SOFI`,name:`SoFi Technologies`,sector:`Financial`,industry:`Credit Services`,marketCap:12e9},{symbol:`RIVN`,name:`Rivian Automotive`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:12e9},{symbol:`LCID`,name:`Lucid Group`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e9},{symbol:`ARM`,name:`Arm Holdings`,sector:`Technology`,industry:`Semiconductors`,marketCap:14e10},{symbol:`MSTR`,name:`MicroStrategy`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`DKNG`,name:`DraftKings`,sector:`Consumer Cyclical`,industry:`Gambling`,marketCap:2e10},{symbol:`ETN`,name:`Eaton Corp.`,sector:`Industrials`,industry:`Electrical Equipment`,marketCap:12e10},{symbol:`EMR`,name:`Emerson Electric`,sector:`Industrials`,industry:`Electrical Equipment`,marketCap:7e10},{symbol:`ITW`,name:`Illinois Tool Works`,sector:`Industrials`,industry:`Industrial Products`,marketCap:75e9},{symbol:`CSX`,name:`CSX Corp.`,sector:`Industrials`,industry:`Railroads`,marketCap:7e10},{symbol:`NSC`,name:`Norfolk Southern`,sector:`Industrials`,industry:`Railroads`,marketCap:55e9},{symbol:`WM`,name:`Waste Management`,sector:`Industrials`,industry:`Waste Services`,marketCap:85e9},{symbol:`RSG`,name:`Republic Services`,sector:`Industrials`,industry:`Waste Services`,marketCap:6e10},{symbol:`AIG`,name:`American Intl. Group`,sector:`Financial`,industry:`Insurance`,marketCap:45e9},{symbol:`MET`,name:`MetLife Inc.`,sector:`Financial`,industry:`Insurance`,marketCap:5e10},{symbol:`PRU`,name:`Prudential Financial`,sector:`Financial`,industry:`Insurance`,marketCap:4e10},{symbol:`ALL`,name:`Allstate Corp.`,sector:`Financial`,industry:`Insurance`,marketCap:45e9},{symbol:`TRV`,name:`Travelers Companies`,sector:`Financial`,industry:`Insurance`,marketCap:5e10},{symbol:`AFL`,name:`Aflac Inc.`,sector:`Financial`,industry:`Insurance`,marketCap:55e9},{symbol:`CB`,name:`Chubb Limited`,sector:`Financial`,industry:`Insurance`,marketCap:11e10},{symbol:`PGR`,name:`Progressive Corp.`,sector:`Financial`,industry:`Insurance`,marketCap:14e10},{symbol:`VST`,name:`Vistra Corp.`,sector:`Utilities`,industry:`Utilities - Independent`,marketCap:4e10},{symbol:`CEG`,name:`Constellation Energy`,sector:`Utilities`,industry:`Utilities - Independent`,marketCap:75e9},{symbol:`PCG`,name:`PG&E Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:3e10},{symbol:`ED`,name:`Consolidated Edison`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:35e9},{symbol:`XEL`,name:`Xcel Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`WEC`,name:`WEC Energy Group`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:3e10},{symbol:`EIX`,name:`Edison Intl.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:2e10},{symbol:`AWK`,name:`American Water Works`,sector:`Utilities`,industry:`Utilities - Water`,marketCap:28e9},{symbol:`CTVA`,name:`Corteva Inc.`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:42e9},{symbol:`CF`,name:`CF Industries`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:14e9},{symbol:`MOS`,name:`Mosaic Co.`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:1e10},{symbol:`ALB`,name:`Albemarle Corp.`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:12e9},{symbol:`VMC`,name:`Vulcan Materials`,sector:`Basic Materials`,industry:`Building Materials`,marketCap:35e9},{symbol:`MLM`,name:`Martin Marietta`,sector:`Basic Materials`,industry:`Building Materials`,marketCap:35e9},{symbol:`IFF`,name:`Intl. Flavors & Fragrances`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:22e9},{symbol:`LULU`,name:`Lululemon Athletica`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:35e9},{symbol:`DECK`,name:`Deckers Outdoor`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:22e9},{symbol:`ULTA`,name:`Ulta Beauty`,sector:`Consumer Cyclical`,industry:`Specialty Retail`,marketCap:2e10},{symbol:`EBAY`,name:`eBay Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:28e9},{symbol:`ETSY`,name:`Etsy Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:8e9},{symbol:`CHWY`,name:`Chewy Inc.`,sector:`Consumer Cyclical`,industry:`Specialty Retail`,marketCap:12e9},{symbol:`DG`,name:`Dollar General`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:25e9},{symbol:`DLTR`,name:`Dollar Tree`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:18e9},{symbol:`SYY`,name:`Sysco Corp.`,sector:`Consumer Defensive`,industry:`Food Distribution`,marketCap:38e9},{symbol:`KR`,name:`Kroger Co.`,sector:`Consumer Defensive`,industry:`Grocery Stores`,marketCap:42e9},{symbol:`HSY`,name:`Hershey Co.`,sector:`Consumer Defensive`,industry:`Confectioners`,marketCap:35e9},{symbol:`KDP`,name:`Keurig Dr Pepper`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:48e9},{symbol:`MNST`,name:`Monster Beverage`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:55e9},{symbol:`BIIB`,name:`Biogen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:25e9},{symbol:`MRNA`,name:`Moderna Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:15e9},{symbol:`ILMN`,name:`Illumina Inc.`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:18e9},{symbol:`DXCM`,name:`DexCom Inc.`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:3e10},{symbol:`BSX`,name:`Boston Scientific`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:1e11},{symbol:`MDT`,name:`Medtronic plc`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:105e9},{symbol:`SYK`,name:`Stryker Corp.`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`EW`,name:`Edwards Lifesciences`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:48e9},{symbol:`HCA`,name:`HCA Healthcare`,sector:`Healthcare`,industry:`Medical Care`,marketCap:8e10},{symbol:`VEEV`,name:`Veeva Systems`,sector:`Healthcare`,industry:`Health Info Services`,marketCap:35e9},{symbol:`IDXX`,name:`IDEXX Laboratories`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:42e9},{symbol:`WBD`,name:`Warner Bros. Discovery`,sector:`Communication Services`,industry:`Entertainment`,marketCap:25e9},{symbol:`PARA`,name:`Paramount Global`,sector:`Communication Services`,industry:`Entertainment`,marketCap:8e9},{symbol:`FOX`,name:`Fox Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e9},{symbol:`NWSA`,name:`News Corp.`,sector:`Communication Services`,industry:`Publishing`,marketCap:15e9},{symbol:`LYV`,name:`Live Nation`,sector:`Communication Services`,industry:`Entertainment`,marketCap:22e9},{symbol:`MTCH`,name:`Match Group`,sector:`Communication Services`,industry:`Internet Content`,marketCap:9e9},{symbol:`RBLX`,name:`Roblox Corp.`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`TTD`,name:`Trade Desk`,sector:`Technology`,industry:`Software`,marketCap:45e9},{symbol:`HUBS`,name:`HubSpot Inc.`,sector:`Technology`,industry:`Software`,marketCap:32e9},{symbol:`OKTA`,name:`Okta Inc.`,sector:`Technology`,industry:`Software`,marketCap:15e9},{symbol:`DOCU`,name:`DocuSign Inc.`,sector:`Technology`,industry:`Software`,marketCap:12e9},{symbol:`ZM`,name:`Zoom Video`,sector:`Technology`,industry:`Software`,marketCap:22e9},{symbol:`PATH`,name:`UiPath Inc.`,sector:`Technology`,industry:`Software`,marketCap:8e9},{symbol:`AI`,name:`C3.ai Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e9},{symbol:`IONQ`,name:`IonQ Inc.`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e9},{symbol:`ASTS`,name:`AST SpaceMobile`,sector:`Technology`,industry:`Communication Equipment`,marketCap:5e9}];function n(e,t){return e.length<t?null:e.slice(-t).reduce((e,t)=>e+t,0)/t}function r(e,t){if(e.length<t)return null;let n=2/(t+1),r=e.slice(0,t).reduce((e,t)=>e+t,0)/t;for(let i=t;i<e.length;i++)r=e[i]*n+r*(1-n);return r}function i(e,t=14){if(e.length<t+1)return 50;let n=0,r=0;for(let i=e.length-t;i<e.length;i++){let t=e[i]-e[i-1];t>=0?n+=t:r-=t}return r===0?100:100-100/(1+n/r)}function a(e){if(e.length<26)return{macd:0,signal:0,hist:0};let t=r(e,12),n=r(e,26),i=(t??0)-(n??0),a=i*.85;return{macd:i,signal:a,hist:i-a}}function o(e,t=14){if(e.length<t+1)return 0;let n=[];for(let r=e.length-t;r<e.length;r++){let t=e[r],i=e[r-1];n.push(Math.max(t.h-t.l,Math.abs(t.h-i.c),Math.abs(t.l-i.c)))}return n.reduce((e,t)=>e+t,0)/n.length}function s(e,t=20){let r=n(e,t);if(r==null)return{upper:0,mid:0,lower:0};let i=e.slice(-t).reduce((e,t)=>e+(t-r)**2,0)/t,a=Math.sqrt(i);return{upper:r+2*a,mid:r,lower:r-2*a}}function c(e,t=3){let n=[],r=[];for(let i=t;i<e.length-t;i++){let a=e[i],o=e.slice(i-t,i),s=e.slice(i+1,i+t+1);o.every(e=>a>=e)&&s.every(e=>a>=e)&&n.push({i,v:a}),o.every(e=>a<=e)&&s.every(e=>a<=e)&&r.push({i,v:a})}return{peaks:n,troughs:r}}function l(e,t){return t?(e-t)/t*100:0}function u(e,t=20){if(!e.length)return 0;let n=e.slice(-t).map(e=>e.v||0);return n.reduce((e,t)=>e+t,0)/n.length}function d(e){if(!e?.length||e.length<20)return[];let t=e.map(e=>e.c),r=e.map(e=>e.h),i=e.map(e=>e.l),a=t[t.length-1],s=[],{peaks:l,troughs:u}=c(t,4);if(l.length>=2){let e=l[l.length-2],t=l[l.length-1],n=Math.abs(e.v-t.v)/e.v;n<.03&&t.i-e.i>=5&&s.push({id:`double_top`,label:`Double Top`,bias:`bearish`,confidence:72-n*500})}if(u.length>=2){let e=u[u.length-2],t=u[u.length-1],n=Math.abs(e.v-t.v)/e.v;n<.03&&t.i-e.i>=5&&s.push({id:`double_bottom`,label:`Double Bottom`,bias:`bullish`,confidence:74-n*500})}if(l.length>=3){let[e,t,n]=l.slice(-3);t.v>e.v*1.02&&t.v>n.v*1.02&&Math.abs(e.v-n.v)/e.v<.05&&s.push({id:`head_shoulders`,label:`Head & Shoulders`,bias:`bearish`,confidence:68})}if(u.length>=3){let[e,t,n]=u.slice(-3);t.v<e.v*.98&&t.v<n.v*.98&&Math.abs(e.v-n.v)/e.v<.05&&s.push({id:`inv_head_shoulders`,label:`Inverse H&S`,bias:`bullish`,confidence:70})}let d=t.slice(-20),f=(d[d.length-1]-d[0])/d.length/a*100,p=o(e.slice(-20))/a;f>.15&&p<.025?s.push({id:`channel_up`,label:`Channel Up`,bias:`bullish`,confidence:62}):f<-.15&&p<.025&&s.push({id:`channel_down`,label:`Channel Down`,bias:`bearish`,confidence:62}),f>.08&&r.slice(-10).every((e,t,n)=>t===0||e<=n[t-1]*1.01)&&s.push({id:`wedge_down`,label:`Wedge Down`,bias:`bearish`,confidence:58}),f<-.08&&i.slice(-10).every((e,t,n)=>t===0||e>=n[t-1]*.99)&&s.push({id:`wedge_up`,label:`Wedge Up`,bias:`bullish`,confidence:58});let m=Math.max(...r.slice(-30,-15))-Math.min(...i.slice(-30,-15));if(Math.max(...r.slice(-15))-Math.min(...i.slice(-15))<m*.55){let e=f>=0?`bullish`:`bearish`;s.push({id:e===`bullish`?`triangle_asc`:`triangle_desc`,label:e===`bullish`?`Triangle Ascending`:`Triangle Descending`,bias:e,confidence:60})}let h=n(t,50);h&&Math.abs(a-h)/a<.015&&s.push({id:a>h?`horizontal_resistance`:`horizontal_support`,label:a>h?`Horizontal Resistance`:`Horizontal Support`,bias:a>h?`bearish`:`bullish`,confidence:55});let g=n(t,20);return g&&a>g*1.01?s.push({id:`tl_support`,label:`Trendline Support`,bias:`bullish`,confidence:57}):g&&a<g*.99&&s.push({id:`tl_resistance`,label:`Trendline Resistance`,bias:`bearish`,confidence:57}),s.map(e=>({...e,confidence:Math.round(Math.min(95,Math.max(45,e.confidence)))}))}function f(e,t){if(!e?.length)return[];let r=e.map(e=>e.c),o=t.price??r[r.length-1],s=[],c=i(r),d=n(r,20),f=n(r,50),p=n(r,200),{hist:m}=a(r),h=u(e),g=t.volume??e[e.length-1]?.v??0,_=Math.max(...e.map(e=>e.h)),v=Math.min(...e.map(e=>e.l));if(t.changePct>=2&&s.push({id:`top_gainers`,label:`Top Gainers`,type:`momentum`}),t.changePct<=-2&&s.push({id:`top_losers`,label:`Top Losers`,type:`momentum`}),o>=_*.998&&s.push({id:`new_high`,label:`New High`,type:`breakout`}),o<=v*1.002&&s.push({id:`new_low`,label:`New Low`,type:`breakout`}),c>=70&&s.push({id:`overbought`,label:`Overbought`,type:`rsi`}),c<=30&&s.push({id:`oversold`,label:`Oversold`,type:`rsi`}),g>h*2&&s.push({id:`unusual_volume`,label:`Unusual Volume`,type:`volume`}),g>h*1.3&&Math.abs(t.changePct)>3&&s.push({id:`most_active`,label:`Most Active`,type:`volume`}),Math.abs(t.changePct)>5&&s.push({id:`most_volatile`,label:`Most Volatile`,type:`volatility`}),f&&p){let e=n(r.slice(0,-1),50),t=n(r.slice(0,-1),200);e&&t&&e<=t&&f>p&&s.push({id:`golden_cross`,label:`Golden Cross`,type:`trend`}),e&&t&&e>=t&&f<p&&s.push({id:`death_cross`,label:`Death Cross`,type:`trend`}),o>f?s.push({id:`above_sma50`,label:`Above SMA50`,type:`trend`}):s.push({id:`below_sma50`,label:`Below SMA50`,type:`trend`}),o>p?s.push({id:`above_sma200`,label:`Above SMA200`,type:`trend`}):s.push({id:`below_sma200`,label:`Below SMA200`,type:`trend`})}return m>0&&t.changePct>0&&s.push({id:`macd_bullish`,label:`MACD Bullish`,type:`macd`}),m<0&&t.changePct<0&&s.push({id:`macd_bearish`,label:`MACD Bearish`,type:`macd`}),d&&l(o,d)>5&&s.push({id:`extended`,label:`Extended Above SMA20`,type:`trend`}),d&&l(o,d)<-5&&s.push({id:`pullback`,label:`Pullback to SMA20`,type:`trend`}),s}function p(e,t,r=[]){if(!e?.length)return m(t);let c=e.map(e=>e.c),l=t.price??c[c.length-1],u=i(c),d=n(c,20),f=n(c,50),p=n(c,200),{hist:h,macd:g}=a(c),_=o(e),v=s(c),y=c.length>=6?(c[c.length-1]-c[c.length-6])/c[c.length-6]*100:t.changePct??0,b=[];u<35?b.push({name:`RSI Oversold`,score:18,weight:`bullish`}):u>65?b.push({name:`RSI Overbought`,score:-18,weight:`bearish`}):b.push({name:`RSI Neutral`,score:(50-u)*.3,weight:`neutral`});let x=0;d&&l>d?x+=8:x-=8,f&&l>f?x+=12:x-=12,p&&l>p?x+=15:x-=10,b.push({name:`Moving Avg Trend`,score:x,weight:x>0?`bullish`:`bearish`}),b.push({name:`MACD Momentum`,score:h*2,weight:h>0?`bullish`:`bearish`}),b.push({name:`5D Momentum`,score:y*1.5,weight:y>0?`bullish`:`bearish`}),v.upper&&l>v.upper?b.push({name:`Above Upper BB`,score:-10,weight:`bearish`}):v.lower&&l<v.lower&&b.push({name:`Below Lower BB`,score:10,weight:`bullish`});for(let e of r){let t=e.bias===`bullish`?e.confidence*.15:-e.confidence*.15;b.push({name:e.label,score:t,weight:e.bias})}let S=b.reduce((e,t)=>e+t.score,0),C=Math.max(-100,Math.min(100,S)),ee=`neutral`;C>12?ee=`bullish`:C<-12&&(ee=`bearish`);let w=Math.round(Math.min(92,Math.max(48,55+Math.abs(C)*.35))),te=C/100*_*4,T=Math.max(.01,l+te),E=(T-l)/l*100,ne=Math.abs(C)>25?`5-10 days`:`3-7 days`;return{direction:ee,confidence:w,score:Math.round(C),priceTarget:Math.round(T*100)/100,targetPct:Math.round(E*100)/100,horizon:ne,factors:b.slice(0,6),rsi:Math.round(u*10)/10,sma20:d,sma50:f,sma200:p,atr:Math.round(_*100)/100,macdHist:Math.round(h*100)/100}}function m(e){return{direction:(e?.changePct??0)>0?`bullish`:(e?.changePct??0)<0?`bearish`:`neutral`,confidence:52,score:e?.changePct??0,priceTarget:e?.price??0,targetPct:0,horizon:`3-7 days`,factors:[],rsi:50,sma20:null,sma50:null,sma200:null,atr:0,macdHist:0}}var h=new Map;function g(e,t){if(h.has(e))return h.get(e);let n=v(e),r=t.price||100,i=[],a=Date.now();for(let e=59;e>=0;e--){let t=r,o=(n()-.47)*r*.022,s=Math.max(1,t+o),c=Math.max(t,s)*(1+n()*.012),l=Math.min(t,s)*(1-n()*.012),u=Math.floor(5e5+n()*3e7);i.push({t:a-e*864e5,o:t,h:c,l,c:s,v:u}),r=s}return h.set(e,i),i}function _(e,t){let n=h.get(e);if(!n?.length)return g(e,t);let r=n[n.length-1];return r.c=t.price,r.h=Math.max(r.h,t.high??t.price),r.l=Math.min(r.l,t.low??t.price),t.volume&&(r.v=t.volume),n}function v(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function y(e){let t=_(e.symbol,e);t.map(e=>e.c);let n=d(t),r=f(t,e),i=p(t,e,n),a=u(t),o=b(e.symbol,`pe`),s=b(e.symbol,`eps`),c=b(e.symbol,`beta`);return{...e,candles:t,patterns:n,signals:r,prediction:i,ta:{rsi:i.rsi,sma20:i.sma20,sma50:i.sma50,sma200:i.sma200,atr:i.atr,relVolume:a?(e.volume||a)/a:1},fundamentals:{pe:o,eps:s,beta:c,dividend:b(e.symbol,`div`)},signalLabels:r.map(e=>e.label),patternLabels:n.map(e=>e.label),primarySignal:r[0]?.label||n[0]?.label||`—`}}function b(e,t){let n=v(e+t)();return t===`pe`?Math.round((8+n*45)*10)/10:t===`eps`?Math.round((.5+n*12)*100)/100:t===`beta`?Math.round((.6+n*1.8)*100)/100:t===`div`?Math.round(n*3.5*100)/100:0}function x(e){let t=[...e.values()],n=t.length||1,r=t.filter(e=>e.changePct>0).length,i=t.filter(e=>e.changePct<0).length,a=t.filter(e=>e.ta?.sma50&&e.price>e.ta.sma50).length,o=t.filter(e=>e.ta?.sma200&&e.price>e.ta.sma200).length,s=t.filter(e=>e.signals?.some(e=>e.id===`new_high`)).length,c=t.filter(e=>e.signals?.some(e=>e.id===`new_low`)).length;return{advancing:r,declining:i,advPct:r/n*100,decPct:i/n*100,aboveSma50:a,belowSma50:n-a,aboveSma50Pct:a/n*100,aboveSma200:o,belowSma200:n-o,aboveSma200Pct:o/n*100,newHigh:s,newLow:c,newHighPct:s/(s+c||1)*100}}var S=`https://finnhub.io/api/v1`,C=5,ee=1100;function w(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function te(e){return 20+w(e)()*480}var T=new Map,E=new Map,ne=24;function re(){if(!T.size)for(let e of t){let t=te(e.symbol);T.set(e.symbol,t);let n=w(e.symbol+`hist`),r=[],i=t*.95;for(let e=0;e<ne;e++)i=Math.max(1,i*(1+(n()-.48)*.02)),r.push(i);E.set(e.symbol,r)}}function ie(){re();for(let e of t){let t=T.get(e.symbol),n=(Math.random()-.48)*t*.008,r=Math.max(1,t+n);T.set(e.symbol,r);let i=E.get(e.symbol)||[];i.push(r),i.length>ne&&i.shift(),E.set(e.symbol,i)}}var ae=new Map;function oe(e){return ae.get(e)||E.get(e)||[]}function se(e,t){let n=[...ae.get(e)||E.get(e)||[],t];return n.length>ne&&n.shift(),ae.set(e,n),n}function ce(e){re();let t=T.get(e.symbol),n=w(e.symbol+Date.now().toString().slice(0,-4)),r=t*(.98+n()*.04),i=Math.max(t,r)*(1+n()*.02),a=Math.min(t,r)*(1-n()*.02),o=r*(.995+n()*.01),s=t-o,c=s/o*100,l=Math.floor(5e5+n()*5e7);return{symbol:e.symbol,price:t,open:r,high:i,low:a,prevClose:o,change:s,changePct:c,volume:l,marketCap:e.marketCap,sector:e.sector,industry:e.industry,name:e.name,timestamp:Date.now(),sparkline:oe(e.symbol)}}function le(e,t=60){re();let n=T.get(e)||100,r=w(e+`candles`),i=[],a=Date.now();for(let e=t-1;e>=0;e--){let t=n,o=(r()-.48)*n*.025,s=Math.max(1,t+o),c=Math.max(t,s)*(1+r()*.01),l=Math.min(t,s)*(1-r()*.01);i.push({t:a-e*864e5,o:t,h:c,l,c:s,v:Math.floor(r()*1e7)}),n=s}return i}var ue=[`Markets rally on strong earnings outlook`,`Fed signals cautious approach to rate cuts`,`Tech sector leads broad market gains`,`Energy stocks slip as oil prices retreat`,`Analysts upgrade outlook for semiconductor stocks`,`Consumer spending data beats expectations`,`Treasury yields edge higher in morning trade`,`IPO market shows signs of renewed activity`];function de(e){let t=w(e+`news`);return Array.from({length:5},(n,r)=>({headline:e?`${e}: ${ue[Math.floor(t()*ue.length)]}`:ue[Math.floor(t()*ue.length)],source:[`Reuters`,`Bloomberg`,`CNBC`,`MarketWatch`][Math.floor(t()*4)],url:`#`,datetime:Math.floor(Date.now()/1e3)-r*3600-Math.floor(t()*7200),symbol:e||void 0}))}async function fe(e,t){let n=`${S}/quote?symbol=${encodeURIComponent(e)}&token=${t}`,r=await fetch(n);if(!r.ok)throw Error(`Finnhub ${r.status}`);let i=await r.json();if(!i.c)throw Error(`No quote data`);let a=i.c-i.pc,o=i.pc?a/i.pc*100:0;return{symbol:e,price:i.c,open:i.o,high:i.h,low:i.l,prevClose:i.pc,change:a,changePct:o,volume:null,timestamp:(i.t||Date.now()/1e3)*1e3}}async function pe(e,t){let n=`${S}/stock/profile2?symbol=${encodeURIComponent(e)}&token=${t}`,r=await fetch(n);return r.ok?r.json():null}function me(e){return new Promise(t=>setTimeout(t,e))}function he(e,t,n){return{...e,name:n?.name||t?.name||e.symbol,sector:t?.sector||n?.finnhubIndustry||`—`,industry:t?.industry||n?.finnhubIndustry||`—`,marketCap:n?.marketCapitalization?n.marketCapitalization*1e6:t?.marketCap,volume:e.volume??Math.floor(Math.random()*2e7+1e6),sparkline:oe(e.symbol)}}async function ge(e){let n=new Map(t.map(e=>[e.symbol,e])),r=t.map(e=>e.symbol);if(!e.apiKey?.trim()||e.useMockData){ie();let e=new Map;for(let n of t)e.set(n.symbol,y(ce(n)));return{quotes:e,source:`mock`}}let i=new Map,a=e.apiKey.trim();for(let e=0;e<r.length;e+=C){let t=r.slice(e,e+C),o=await Promise.allSettled(t.map(async e=>{let[t,r]=await Promise.all([fe(e,a),pe(e,a).catch(()=>null)]);return he(t,n.get(e),r)}));for(let e of o)if(e.status===`fulfilled`){let t=e.value;i.set(t.symbol,y({...t,sparkline:se(t.symbol,t.price)}))}e+C<r.length&&await me(ee)}for(let e of t)i.has(e.symbol)||i.set(e.symbol,y(ce(e)));return{quotes:i,source:`finnhub`}}async function _e(e,n){let r=t.find(t=>t.symbol===e);if(!n.apiKey?.trim()||n.useMockData)return r?y(ce(r)):null;try{let[t,i]=await Promise.all([fe(e,n.apiKey.trim()),pe(e,n.apiKey.trim())]);return y(he(t,r,i))}catch{return r?y(ce(r)):null}}async function ve(e,t,n=`D`,r=60){if(!t.apiKey?.trim()||t.useMockData)return le(e,r);try{let i=Math.floor(Date.now()/1e3),a=i-r*86400,o=`${S}/stock/candle?symbol=${encodeURIComponent(e)}&resolution=${n}&from=${a}&to=${i}&token=${t.apiKey.trim()}`,s=await fetch(o);if(!s.ok)throw Error(`candle fetch failed`);let c=await s.json();return c.s!==`ok`||!c.t?.length?le(e,r):c.t.map((e,t)=>({t:e*1e3,o:c.o[t],h:c.h[t],l:c.l[t],c:c.c[t],v:c.v[t]}))}catch{return le(e,r)}}async function ye(e,t){if(!t.apiKey?.trim()||t.useMockData)return de(e);try{let n=new Date().toISOString().slice(0,10),r=new Date(Date.now()-7*864e5).toISOString().slice(0,10),i=`${S}/company-news?symbol=${encodeURIComponent(e)}&from=${r}&to=${n}&token=${t.apiKey.trim()}`,a=await fetch(i);if(!a.ok)throw Error(`news failed`);return(await a.json()||[]).slice(0,8)}catch{return de(e)}}async function be(e){if(!e.apiKey?.trim()||e.useMockData)return de(null);try{let t=`${S}/news?category=general&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`news failed`);return(await n.json()||[]).slice(0,20)}catch{return de(null)}}async function xe(e){if(!e.apiKey?.trim()||e.useMockData){let e=new Date().getHours(),t=e>=9&&e<16;return{isOpen:t,label:t?`Market Open (simulated)`:`Market Closed (simulated)`}}try{let t=`${S}/stock/market-status?exchange=US&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`status failed`);let r=await n.json();return{isOpen:!!r.isOpen,label:r.isOpen?`US Market Open`:`US Market Closed`,session:r.session}}catch{return{isOpen:!1,label:`Market status unavailable`}}}async function Se(e){if(!e?.trim())return{valid:!1,message:`API key is required`};try{return await fe(`AAPL`,e.trim())?{valid:!0,message:`Connected to Finnhub`}:{valid:!1,message:`Invalid response`}}catch(e){return{valid:!1,message:e.message||`Connection failed`}}}var Ce={apiKey:``,refreshInterval:30,useMockData:!0,watchlist:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`],theme:`dark`},we={sector:``,industry:``,minChange:``,maxChange:``,minVolume:``,minMarketCap:``,search:``,signal:``,pattern:``,prediction:``,minRsi:``,maxRsi:``,minPe:``,maxPe:``,aboveSma50:``,aboveSma200:``},D=Ne(),O={...we},k=Pe(),A=Fe(),j=Re(),M=[],N=Ie(),Te=Le(),P=`all`,Ee=new Map,F={key:`changePct`,dir:`desc`},De=null,Oe=null,ke=`mock`,Ae=null,je=new Set,Me=null;function Ne(){try{let e=localStorage.getItem(`stockviz-settings`);if(e)return{...Ce,...JSON.parse(e)}}catch{}return{...Ce}}function Pe(){try{let e=localStorage.getItem(`stockviz-saved-filters`);if(e)return JSON.parse(e)}catch{}return[]}function Fe(){try{let e=localStorage.getItem(`stockviz-favorites`);if(e)return JSON.parse(e)}catch{}return[`AAPL`,`NVDA`,`MSFT`]}function Ie(){try{let e=localStorage.getItem(`stockviz-alerts`);if(e)return JSON.parse(e)}catch{}return[]}function Le(){try{let e=localStorage.getItem(`stockviz-multichart`);if(e)return JSON.parse(e)}catch{}return{id:`2x2`,symbols:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`]}}function Re(){try{let e=localStorage.getItem(`stockviz-portfolio`);if(e)return JSON.parse(e)}catch{}return[{symbol:`AAPL`,shares:10,costBasis:175},{symbol:`NVDA`,shares:5,costBasis:450},{symbol:`MSFT`,shares:8,costBasis:380}]}function I(e,t){localStorage.setItem(e,JSON.stringify(t))}function ze(){I(`stockviz-settings`,D),Be(D.theme),z(`settings`)}function Be(e){document.documentElement.setAttribute(`data-theme`,e||`dark`)}function L(){return{...D}}function Ve(e){D={...D,...e},e.apiKey!==void 0&&(D.useMockData=!e.apiKey?.trim()),ze()}function He(){D.theme=D.theme===`dark`?`light`:`dark`,ze()}function Ue(){return{...O}}function We(e,{preset:t=null}={}){O={...O,...e},t!==null&&(P=t),z(`filters`)}function Ge(e,t){O={...we,...t},P=e,z(`filters`)}function Ke(){return P}function qe(){return{...F}}function Je(e){F.key===e?F.dir=F.dir===`asc`?`desc`:`asc`:F={key:e,dir:`desc`},z(`sort`)}function R(){return Ee}function Ye(e,t={}){Ee=e,Oe=t.fetchedAt??Date.now(),ke=t.source??ke,z(`quotes`)}function Xe(e){Ae=e,z(`status`)}function Ze(){return Ae}function Qe(){return{lastFetchAt:Oe,dataSource:ke,selectedSymbol:De}}function $e(e){De=e,z(`select`)}function et(){return[...A]}function tt(e){return A=A.includes(e)?A.filter(t=>t!==e):[...A,e],I(`stockviz-favorites`,A),z(`favorites`),A.includes(e)}function nt(e){return A.includes(e)}function rt(){return[...j]}function it({symbol:e,shares:t,costBasis:n}){let r=j.find(t=>t.symbol===e);r?(r.shares+=Number(t),r.costBasis=(r.costBasis+Number(n))/2):j=[...j,{symbol:e,shares:Number(t),costBasis:Number(n)}],I(`stockviz-portfolio`,j),z(`portfolio`)}function at(e){j=j.filter(t=>t.symbol!==e),I(`stockviz-portfolio`,j),z(`portfolio`)}function ot(){return[...M]}function st(e){return M.includes(e)?M=M.filter(t=>t!==e):M.length<4&&(M=[...M,e]),z(`compare`),M.includes(e)}function ct(){M=[],z(`compare`)}function lt(){return[...N]}function ut(){return N.filter(e=>e.active&&!e.triggered).length}function dt(){return N.filter(e=>e.triggered).length}function ft({symbol:e,type:t,value:n,note:r=``}){let i={id:Date.now().toString(),symbol:e,type:t,value:String(n),note:r,active:!0,triggered:!1,triggeredAt:null,triggerDetail:null,createdAt:Date.now()};return N=[...N,i],I(`stockviz-alerts`,N),z(`alerts`),i}function pt(e){N=N.filter(t=>t.id!==e),I(`stockviz-alerts`,N),z(`alerts`)}function mt(e){N=N.map(t=>t.id===e?{...t,active:!t.active}:t),I(`stockviz-alerts`,N),z(`alerts`)}function ht(e,t){N=N.map(n=>n.id===e?{...n,triggered:!0,triggeredAt:Date.now(),triggerDetail:t}:n),I(`stockviz-alerts`,N),z(`alerts`)}function gt(){N=N.filter(e=>!e.triggered),I(`stockviz-alerts`,N),z(`alerts`)}function _t(){return{...Te}}function vt(e){Te={...e},I(`stockviz-multichart`,Te),z(`multichart`)}function yt(){return[...k]}function bt(e){let t={id:Date.now().toString(),name:e,filters:{...O}};return k=[...k,t],I(`stockviz-saved-filters`,k),z(`filters`),t}function xt(e){k=k.filter(t=>t.id!==e),I(`stockviz-saved-filters`,k),z(`filters`)}function St(e){let t=k.find(t=>t.id===e);t&&(O={...we,...t.filters},P=`custom`,z(`filters`))}function Ct(e){return je.add(e),()=>je.delete(e)}function z(e=`full`){je.forEach(t=>t(e))}function wt(e){Tt();let t=async()=>{await e()};t(),Me=setInterval(t,D.refreshInterval*1e3)}function Tt(){Me&&=(clearInterval(Me),null)}function Et(){O={...we},P=`all`,z(`filters`)}Be(D.theme);function Dt(e){let t=lt().filter(e=>e.active&&!e.triggered),n=[];for(let r of t){let t=e.get(r.symbol);if(!t)continue;let i=!1,a=``;switch(r.type){case`price_above`:i=t.price>=Number(r.value),a=`$${t.price.toFixed(2)} ≥ $${r.value}`;break;case`price_below`:i=t.price<=Number(r.value),a=`$${t.price.toFixed(2)} ≤ $${r.value}`;break;case`change_above`:i=t.changePct>=Number(r.value),a=`${t.changePct.toFixed(2)}% ≥ ${r.value}%`;break;case`change_below`:i=t.changePct<=Number(r.value),a=`${t.changePct.toFixed(2)}% ≤ ${r.value}%`;break;case`rsi_above`:i=(t.ta?.rsi??0)>=Number(r.value),a=`RSI ${t.ta?.rsi?.toFixed(1)} ≥ ${r.value}`;break;case`rsi_below`:i=(t.ta?.rsi??100)<=Number(r.value),a=`RSI ${t.ta?.rsi?.toFixed(1)} ≤ ${r.value}`;break;case`signal`:i=t.signals?.some(e=>e.id===r.value),a=`Signal: ${r.value}`;break;case`pattern`:i=t.patterns?.some(e=>e.id===r.value),a=`Pattern: ${r.value}`;break;case`prediction`:i=t.prediction?.direction===r.value,a=`Prediction: ${t.prediction?.direction} (${t.prediction?.confidence}%)`;break;default:break}i&&(ht(r.id,a),n.push({...r,detail:a}))}return n}var Ot=[{id:`price_above`,label:`Price Above`,needsValue:!0,placeholder:`200.00`},{id:`price_below`,label:`Price Below`,needsValue:!0,placeholder:`150.00`},{id:`change_above`,label:`Change % Above`,needsValue:!0,placeholder:`5`},{id:`change_below`,label:`Change % Below`,needsValue:!0,placeholder:`-5`},{id:`rsi_above`,label:`RSI Above`,needsValue:!0,placeholder:`70`},{id:`rsi_below`,label:`RSI Below`,needsValue:!0,placeholder:`30`},{id:`signal`,label:`Signal Detected`,needsValue:!0,valueType:`signal`},{id:`pattern`,label:`Pattern Detected`,needsValue:!0,valueType:`pattern`},{id:`prediction`,label:`Prediction Direction`,needsValue:!0,valueType:`prediction`}],kt;function At(){kt=document.getElementById(`toast-root`)}function B(e,t=`info`,n=2800){if(!kt)return;let r=document.createElement(`div`);r.className=`toast toast-${t}`,r.textContent=e,kt.appendChild(r),requestAnimationFrame(()=>r.classList.add(`show`)),setTimeout(()=>{r.classList.remove(`show`),setTimeout(()=>r.remove(),300)},n)}function V(e,t=2){return e==null||Number.isNaN(e)?`—`:e.toLocaleString(`en-US`,{minimumFractionDigits:t,maximumFractionDigits:t})}function jt(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}`}function H(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}%`}function Mt(e){return e==null?`—`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toLocaleString()}function Nt(e){return e==null?`—`:e>=0xe8d4a51000?`${(e/0xe8d4a51000).toFixed(2)}T`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(0)}M`:e.toLocaleString()}function Pt(e){return e?new Date(e).toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}):``}function U(e){return e==null?``:e>0?`pos`:e<0?`neg`:`flat`}function Ft(e){let t=Math.max(-5,Math.min(5,e));if(t>=0){let e=t/5;return`rgb(${Math.round(20+(1-e)*30)},${Math.round(80+e*120)},${Math.round(40+(1-e)*20)})`}let n=Math.abs(t)/5;return`rgb(${Math.round(120+n*135)},${Math.round(40+(1-n)*30)},${Math.round(40+(1-n)*20)})`}function It(e,t,{width:n=72,height:r=24,color:i=null}={}){let a=t.map(e=>typeof e==`number`?e:e.c??e.price??0);if(!a.length)return;let o=window.devicePixelRatio||1;e.width=n*o,e.height=r*o,e.style.width=`${n}px`,e.style.height=`${r}px`;let s=e.getContext(`2d`);s.scale(o,o);let c=Math.min(...a),l=Math.max(...a)-c||1,u=a[a.length-1]>=a[0],d=i||(u?`#3fb950`:`#f85149`);s.clearRect(0,0,n,r),s.beginPath(),a.forEach((e,t)=>{let i=t/(a.length-1||1)*(n-2)+1,o=r-2-(e-c)/l*(r-4);t===0?s.moveTo(i,o):s.lineTo(i,o)}),s.strokeStyle=d,s.lineWidth=1.5,s.lineJoin=`round`,s.stroke();let f=s.createLinearGradient(0,0,0,r);f.addColorStop(0,u?`rgba(63,185,80,0.2)`:`rgba(248,81,73,0.2)`),f.addColorStop(1,`rgba(0,0,0,0)`),s.lineTo(n-1,r),s.lineTo(1,r),s.closePath(),s.fillStyle=f,s.fill()}function Lt(e){return`<canvas class="sparkline" data-spark="${e}" width="72" height="24" aria-hidden="true"></canvas>`}function Rt(){let e=R();document.querySelectorAll(`[data-live-symbol]`).forEach(t=>{let n=e.get(t.dataset.liveSymbol);if(!n)return;let r=t.querySelector(`[data-live="price"]`),i=t.querySelector(`[data-live="change"]`),a=t.querySelector(`[data-live="pct"]`);if(r){let e=`$${V(n.price)}`;r.textContent!==e&&(r.textContent=e,zt(r,n.change>=0?`flash-up`:`flash-down`))}i&&(i.textContent=`${n.change>=0?`+`:``}${n.change?.toFixed(2)??`—`}`,i.className=U(n.change)),a&&(a.textContent=H(n.changePct),a.className=U(n.changePct))}),document.querySelectorAll(`canvas[data-spark]`).forEach(t=>{let n=e.get(t.dataset.spark);if(n?.sparkline?.length){let e=Number(t.getAttribute(`width`))||72,r=Number(t.getAttribute(`height`))||24;It(t,n.sparkline,{width:e,height:r})}}),document.querySelectorAll(`.heat-tile[data-symbol]`).forEach(t=>{let n=e.get(t.dataset.symbol);if(!n)return;let r=n.changePct??0;t.style.background=Ft(r);let i=t.querySelector(`.tile-pct`);i&&(i.textContent=`${r>=0?`+`:``}${r.toFixed(1)}%`)})}function zt(e,t){e.classList.remove(`flash-up`,`flash-down`),e.offsetWidth,e.classList.add(t),setTimeout(()=>e.classList.remove(t),600)}function Bt(e,t,{height:n=160}={}){if(!t?.length){e.innerHTML=`<p class="chart-empty">No chart data</p>`;return}let r=document.createElement(`canvas`);r.className=`price-chart-canvas`,r.height=n,e.innerHTML=``,e.appendChild(r);let i=window.devicePixelRatio||1,a=e.clientWidth||320;r.width=a*i,r.style.width=`${a}px`,r.style.height=`${n}px`;let o=r.getContext(`2d`);o.scale(i,i);let s=t.map(e=>e.l),c=t.map(e=>e.h),l=Math.min(...s),u=Math.max(...c),d=(u-l)*.08||1,f=l-d,p=u+d-f,m=a-16,h=n-16,g=m/t.length,_=e=>8+h-(e-f)/p*h;o.strokeStyle=`rgba(48,54,61,0.6)`,o.lineWidth=1;for(let e=0;e<=4;e++){let t=8+h/4*e;o.beginPath(),o.moveTo(8,t),o.lineTo(a-8,t),o.stroke()}if(t.length<=80){let e=Math.max(2,g*.6);t.forEach((t,n)=>{let r=8+n*g+g/2,i=t.c>=t.o?`#3fb950`:`#f85149`;o.strokeStyle=i,o.fillStyle=i,o.lineWidth=1,o.beginPath(),o.moveTo(r,_(t.h)),o.lineTo(r,_(t.l)),o.stroke();let a=_(Math.max(t.o,t.c)),s=_(Math.min(t.o,t.c));o.fillRect(r-e/2,a,e,Math.max(1,s-a))})}else{o.strokeStyle=`#58a6ff`,o.lineWidth=1.5,o.beginPath(),t.forEach((e,t)=>{let n=8+t*g+g/2,r=_(e.c);t===0?o.moveTo(n,r):o.lineTo(n,r)}),o.stroke(),t[t.length-1];let e=o.createLinearGradient(0,8,0,n-8);e.addColorStop(0,`rgba(88,166,255,0.25)`),e.addColorStop(1,`rgba(88,166,255,0)`),o.lineTo(8+(t.length-1)*g+g/2,n-8),o.lineTo(8+g/2,n-8),o.closePath(),o.fillStyle=e,o.fill()}o.fillStyle=`#8b949e`,o.font=`10px IBM Plex Mono, monospace`,o.textAlign=`right`,o.fillText(u.toFixed(2),a-2,18),o.fillText(l.toFixed(2),a-2,n-8-2)}var W,G,Vt,Ht;function Ut(){W=document.getElementById(`quote-panel`),G=document.getElementById(`quote-panel-body`),Vt=document.getElementById(`quote-overlay`),Ht=document.getElementById(`quote-close`),Ht?.addEventListener(`click`,Gt),Vt?.addEventListener(`click`,Gt),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&W&&!W.hidden&&Gt()})}function Wt(e){W&&(W.hidden=!1,Vt.hidden=!1,W.classList.add(`open`),G.innerHTML=`<div class="quote-loading"><div class="skeleton-line"></div><div class="skeleton-line short"></div></div>`,Kt(e))}function Gt(){W&&(W.classList.remove(`open`),setTimeout(()=>{W.hidden=!0,Vt.hidden=!0},200),$e(null))}async function Kt(e){let t=L(),n=R().get(e),[r,i]=await Promise.all([n?.prediction?Promise.resolve(n):_e(e,t),ye(e,t)]),a=r,o=a?.candles||await ve(e,t);if(!a){G.innerHTML=`<p class="quote-error">Could not load quote.</p>`;return}let s=U(a.changePct),c=nt(e),l=ot().includes(e);G.innerHTML=`
    <div class="quote-actions">
      <button class="btn-ghost btn-sm quote-action ${c?`starred`:``}" id="qa-fav">${c?`★ Favorited`:`☆ Favorite`}</button>
      <button class="btn-ghost btn-sm quote-action ${l?`active`:``}" id="qa-compare">${l?`In Compare`:`+ Compare`}</button>
      <button class="btn-ghost btn-sm quote-action" id="qa-alert">+ Alert</button>
      <a class="btn-ghost btn-sm quote-action" href="#/multicharts">Multi-Chart</a>
    </div>
    <div class="quote-header">
      <div>
        <h2 class="quote-symbol">${a.symbol}</h2>
        <p class="quote-name">${a.name||``}</p>
      </div>
      <div class="quote-price-block" data-live-symbol="${e}">
        <span class="quote-price" data-live="price">$${V(a.price)}</span>
        <span class="quote-change ${s}" data-live="pct">${jt(a.change)} (${H(a.changePct)})</span>
      </div>
    </div>
    <div class="quote-grid">
      <div class="quote-stat"><span class="label">Open</span><span class="value">$${V(a.open)}</span></div>
      <div class="quote-stat"><span class="label">High</span><span class="value">$${V(a.high)}</span></div>
      <div class="quote-stat"><span class="label">Low</span><span class="value">$${V(a.low)}</span></div>
      <div class="quote-stat"><span class="label">Prev Close</span><span class="value">$${V(a.prevClose)}</span></div>
      <div class="quote-stat"><span class="label">Volume</span><span class="value">${Mt(a.volume)}</span></div>
      <div class="quote-stat"><span class="label">Market Cap</span><span class="value">${Nt(a.marketCap)}</span></div>
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
        Target: <strong>$${V(a.prediction.priceTarget)}</strong>
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
  `,G.querySelector(`#qa-alert`)?.addEventListener(`click`,()=>{let t=prompt(`Alert type: price_above, price_below, change_above, rsi_above, prediction
(or visit Alerts page)`,`price_above`);if(!t)return;let n=prompt(`Threshold value:`,String(a.price));n!=null&&(ft({symbol:e,type:t,value:n,note:`Quick alert from quote panel`}),B(`Alert set for ${e}`,`success`))}),G.querySelector(`#qa-fav`)?.addEventListener(`click`,()=>{let t=tt(e),n=G.querySelector(`#qa-fav`);n.textContent=t?`★ Favorited`:`☆ Favorite`,n.classList.toggle(`starred`,t),B(t?`${e} favorited`:`${e} unfavorited`,`info`)}),G.querySelector(`#qa-compare`)?.addEventListener(`click`,()=>{let t=st(e),n=G.querySelector(`#qa-compare`);if(ot().length>4&&!t){B(`Compare list full (max 4)`,`error`);return}n.textContent=t?`In Compare`:`+ Compare`,n.classList.toggle(`active`,t),B(t?`${e} added to compare`:`${e} removed`,`info`)});let u=G.querySelector(`#quote-chart`);u&&(Bt(u,o,{height:180}),new ResizeObserver(()=>Bt(u,o,{height:180})).observe(u))}var K,q,qt,J=0,Jt=[];function Yt(){K=document.getElementById(`command-palette`),q=document.getElementById(`cmd-input`),qt=document.getElementById(`cmd-results`);let e=document.getElementById(`cmd-overlay`);document.addEventListener(`keydown`,e=>{if((e.ctrlKey||e.metaKey)&&e.key===`k`&&(e.preventDefault(),Zt()),e.key===`/`&&!Xt()){if(!K?.hidden)return;e.preventDefault(),Zt()}}),e?.addEventListener(`click`,Qt),q?.addEventListener(`input`,()=>$t(q.value)),q?.addEventListener(`keydown`,e=>{e.key===`Escape`&&Qt(),e.key===`ArrowDown`&&(e.preventDefault(),en(1)),e.key===`ArrowUp`&&(e.preventDefault(),en(-1)),e.key===`Enter`&&tn()})}function Xt(){let e=document.activeElement?.tagName;return e===`INPUT`||e===`TEXTAREA`||e===`SELECT`}function Zt(){K&&(K.hidden=!1,document.getElementById(`cmd-overlay`).hidden=!1,q.value=``,J=0,$t(``),requestAnimationFrame(()=>q?.focus()))}function Qt(){K&&(K.hidden=!0,document.getElementById(`cmd-overlay`).hidden=!0)}function $t(e){let n=e.trim().toLowerCase(),r=R();Jt=t.filter(e=>n?e.symbol.toLowerCase().includes(n)||e.name.toLowerCase().includes(n):!0).slice(0,12),qt.innerHTML=Jt.map((e,t)=>{let n=r.get(e.symbol),i=n?U(n.changePct):``;return`
      <button class="cmd-item ${t===J?`active`:``}" data-idx="${t}" data-symbol="${e.symbol}">
        <span class="cmd-sym">${e.symbol}</span>
        <span class="cmd-name">${e.name}</span>
        ${n?`<span class="cmd-price ${i}">$${V(n.price)} ${H(n.changePct)}</span>`:``}
      </button>
    `}).join(``)||`<p class="cmd-empty">No matches</p>`,qt.querySelectorAll(`.cmd-item`).forEach(e=>{e.addEventListener(`click`,()=>{nn(e.dataset.symbol)})})}function en(e){J=Math.max(0,Math.min(Jt.length-1,J+e)),qt.querySelectorAll(`.cmd-item`).forEach((e,t)=>{e.classList.toggle(`active`,t===J)})}function tn(){Jt[J]&&nn(Jt[J].symbol)}function nn(e){Qt(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))}var rn=[{name:`Crude Oil`,symbol:`CL`,last:78.42,change:1.24,changePct:1.61},{name:`Natural Gas`,symbol:`NG`,last:2.84,change:-.06,changePct:-2.07},{name:`Gold`,symbol:`GC`,last:2348.5,change:12.3,changePct:.53},{name:`Dow`,symbol:`YM`,last:42850,change:-120,changePct:-.28},{name:`S&P 500`,symbol:`ES`,last:5892,change:18,changePct:.31},{name:`Nasdaq 100`,symbol:`NQ`,last:21245,change:95,changePct:.45},{name:`Russell 2000`,symbol:`ER2`,last:2185,change:-8,changePct:-.37}],an=[{pair:`EUR/USD`,symbol:`EURUSD`,last:1.0842,change:.0012,changePct:.11},{pair:`USD/JPY`,symbol:`USDJPY`,last:157.32,change:.28,changePct:.18},{pair:`GBP/USD`,symbol:`GBPUSD`,last:1.2718,change:-8e-4,changePct:-.06},{pair:`BTC/USD`,symbol:`BTCUSD`,last:68420,change:1240,changePct:1.85}],on=[{name:`5-Year Treasury`,last:4.12,change:.03,changePct:.73},{name:`10-Year Treasury`,last:4.28,change:.02,changePct:.47},{name:`30-Year Treasury`,last:4.45,change:-.01,changePct:-.22}],sn=[{symbol:`NVDA`,insider:`Jensen Huang`,relation:`CEO`,date:`Jun 04`,type:`Sale`,cost:128.5,shares:12e4,value:1542e4},{symbol:`AAPL`,insider:`Tim Cook`,relation:`CEO`,date:`Jun 03`,type:`Sale`,cost:198.2,shares:45e3,value:8919e3},{symbol:`MSFT`,insider:`Satya Nadella`,relation:`CEO`,date:`Jun 02`,type:`Sale`,cost:425,shares:22e3,value:935e4},{symbol:`JPM`,insider:`Jamie Dimon`,relation:`CEO`,date:`Jun 05`,type:`Buy`,cost:198.4,shares:15e3,value:2976e3},{symbol:`META`,insider:`Mark Zuckerberg`,relation:`CEO`,date:`Jun 01`,type:`Sale`,cost:512,shares:8e4,value:4096e4},{symbol:`GOOGL`,insider:`Sundar Pichai`,relation:`CEO`,date:`May 30`,type:`Sale`,cost:178.5,shares:35e3,value:6247500}],cn=[{symbol:`ORCL`,date:`Today AMC`,epsEst:1.42,cap:`Large`},{symbol:`ADBE`,date:`Today AMC`,epsEst:4.18,cap:`Large`},{symbol:`COST`,date:`Tomorrow BMO`,epsEst:3.92,cap:`Large`},{symbol:`CRM`,date:`Tomorrow AMC`,epsEst:2.28,cap:`Large`},{symbol:`AVGO`,date:`Jun 10 AMC`,epsEst:1.35,cap:`Large`},{symbol:`NKE`,date:`Jun 11 AMC`,epsEst:.72,cap:`Large`}],ln=[{date:`Mon`,time:`10:00 AM`,impact:`high`,event:`ISM Services PMI`,actual:`—`,expected:`52.4`,prior:`51.8`},{date:`Tue`,time:`8:30 AM`,impact:`high`,event:`Non-Farm Payrolls`,actual:`—`,expected:`185K`,prior:`177K`},{date:`Wed`,time:`2:00 PM`,impact:`medium`,event:`FOMC Minutes`,actual:`—`,expected:`—`,prior:`—`},{date:`Thu`,time:`8:30 AM`,impact:`medium`,event:`Initial Jobless Claims`,actual:`—`,expected:`220K`,prior:`218K`},{date:`Fri`,time:`8:30 AM`,impact:`high`,event:`CPI YoY`,actual:`—`,expected:`2.9%`,prior:`3.0%`}],un=[{id:`top_gainers`,label:`Top Gainers`},{id:`top_losers`,label:`Top Losers`},{id:`new_high`,label:`New High`},{id:`new_low`,label:`New Low`},{id:`overbought`,label:`Overbought`},{id:`oversold`,label:`Oversold`},{id:`unusual_volume`,label:`Unusual Volume`},{id:`most_active`,label:`Most Active`},{id:`most_volatile`,label:`Most Volatile`},{id:`golden_cross`,label:`Golden Cross`},{id:`death_cross`,label:`Death Cross`}],dn=[{id:`double_top`,label:`Double Top`},{id:`double_bottom`,label:`Double Bottom`},{id:`head_shoulders`,label:`Head & Shoulders`},{id:`inv_head_shoulders`,label:`Inverse H&S`},{id:`channel_up`,label:`Channel Up`},{id:`channel_down`,label:`Channel Down`},{id:`wedge_up`,label:`Wedge Up`},{id:`wedge_down`,label:`Wedge Down`},{id:`triangle_asc`,label:`Triangle Ascending`},{id:`triangle_desc`,label:`Triangle Descending`},{id:`horizontal_support`,label:`Horizontal Support`},{id:`horizontal_resistance`,label:`Horizontal Resistance`},{id:`tl_support`,label:`Trendline Support`},{id:`tl_resistance`,label:`Trendline Resistance`}];async function fn(e){let t=R(),n=L(),r=[...t.values()],i=x(t),a=r.filter(e=>e.signals?.some(e=>e.id===`top_gainers`)).sort((e,t)=>t.changePct-e.changePct).slice(0,7),o=r.filter(e=>e.signals?.some(e=>e.id===`top_losers`)).sort((e,t)=>e.changePct-t.changePct).slice(0,7),s=await be(n).catch(()=>[]),c=dn.slice(0,6).map(e=>{let t=r.find(t=>t.patterns?.some(t=>t.id===e.id));return{...e,stock:t}});e.innerHTML=`
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
          ${pn(a,`Top Gainers`)}
        </section>

        <!-- Center-left: Losers -->
        <section class="panel finviz-col">
          <h2 class="finviz-col-title neg-title">Top Losers</h2>
          ${pn(o,`Top Losers`)}
        </section>

        <!-- Center: Heat map link + patterns -->
        <section class="panel finviz-col finviz-col-map">
          <h2 class="finviz-col-title"><a href="#/map">S&amp;P 500 — Heat Map</a></h2>
          <a href="#/map" class="map-preview">
            <div class="map-preview-grid">
              ${r.slice(0,24).map(e=>`
                <span class="map-preview-tile" style="background:${mn(e.changePct)}" title="${e.symbol} ${H(e.changePct)}"></span>
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
                  <td>$${V(e.prediction.priceTarget)}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </section>
      </div>

      <!-- Signal ticker rows -->
      <div class="signal-ticker-row panel">
        <span class="signal-ticker-label">Signals:</span>
        ${un.slice(0,10).map(e=>{let t=r.filter(t=>t.signals?.some(t=>t.id===e.id)).length;return`<a href="#/screener?signal=${e.id}" class="signal-ticker-chip">${e.label} (${t})</a>`}).join(``)}
        <a href="#/signals" class="signal-ticker-chip accent">All Signals →</a>
        <a href="#/patterns" class="signal-ticker-chip accent">Pattern Scanner →</a>
      </div>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function pn(e,t){return`
    <table class="data-table compact finviz-tbl">
      <thead><tr><th>Ticker</th><th>Last</th><th>Change</th><th>Vol</th><th>Signal</th></tr></thead>
      <tbody>
        ${e.length?e.map(e=>`
          <tr class="clickable" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td data-live="price">$${V(e.price)}</td>
            <td class="${U(e.changePct)}" data-live="pct">${H(e.changePct)}</td>
            <td>${Mt(e.volume)}</td>
            <td><a href="#/screener" class="signal-link">${t}</a></td>
          </tr>
        `).join(``):`<tr><td colspan="5" class="empty-row">—</td></tr>`}
      </tbody>
    </table>
  `}function mn(e){let t=Math.max(-5,Math.min(5,e??0));if(t>=0){let e=t/5;return`rgb(${20+(1-e)*30},${80+e*120},${40+(1-e)*20})`}let n=Math.abs(t)/5;return`rgb(${120+n*135},${40+(1-n)*30},40)`}var hn=[{id:`all`,label:`All Stocks`,filters:{}},{id:`gainers`,label:`Top Gainers`,filters:{signal:`top_gainers`}},{id:`losers`,label:`Top Losers`,filters:{signal:`top_losers`}},{id:`newhigh`,label:`New High`,filters:{signal:`new_high`}},{id:`newlow`,label:`New Low`,filters:{signal:`new_low`}},{id:`overbought`,label:`Overbought`,filters:{signal:`overbought`}},{id:`oversold`,label:`Oversold`,filters:{signal:`oversold`}},{id:`unusualvol`,label:`Unusual Volume`,filters:{signal:`unusual_volume`}},{id:`golden`,label:`Golden Cross`,filters:{signal:`golden_cross`}},{id:`doublebottom`,label:`Double Bottom`,filters:{pattern:`double_bottom`}},{id:`headshoulders`,label:`Head & Shoulders`,filters:{pattern:`head_shoulders`}},{id:`bullish`,label:`Bullish Prediction`,filters:{prediction:`bullish`}},{id:`bearish`,label:`Bearish Prediction`,filters:{prediction:`bearish`}},{id:`tech`,label:`Technology`,filters:{sector:`Technology`}},{id:`megacap`,label:`Mega Cap`,filters:{minMarketCap:`200000000000`}}];function gn(e,t){return[...e.values()].filter(e=>{if(t.search){let n=t.search.toLowerCase();if(!e.symbol.toLowerCase().includes(n)&&!(e.name||``).toLowerCase().includes(n))return!1}return!(t.sector&&e.sector!==t.sector||t.industry&&e.industry!==t.industry||t.minChange!==``&&e.changePct<Number(t.minChange)||t.maxChange!==``&&e.changePct>Number(t.maxChange)||t.minVolume!==``&&(e.volume||0)<Number(t.minVolume)||t.minMarketCap!==``&&(e.marketCap||0)<Number(t.minMarketCap)||t.minRsi!==``&&(e.ta?.rsi??50)<Number(t.minRsi)||t.maxRsi!==``&&(e.ta?.rsi??50)>Number(t.maxRsi)||t.minPe!==``&&(e.fundamentals?.pe??0)<Number(t.minPe)||t.maxPe!==``&&(e.fundamentals?.pe??999)>Number(t.maxPe)||t.signal&&!e.signals?.some(e=>e.id===t.signal)||t.pattern&&!e.patterns?.some(e=>e.id===t.pattern)||t.prediction&&e.prediction?.direction!==t.prediction||t.aboveSma50===`yes`&&!(e.ta?.sma50&&e.price>e.ta.sma50)||t.aboveSma50===`no`&&e.ta?.sma50&&e.price>e.ta.sma50||t.aboveSma200===`yes`&&!(e.ta?.sma200&&e.price>e.ta.sma200)||t.aboveSma200===`no`&&e.ta?.sma200&&e.price>e.ta.sma200)})}var _n=[`Symbol`,`Company`,`Sector`,`Industry`,`Price`,`Change`,`Change %`,`Volume`,`Market Cap`,`RSI`,`SMA20`,`SMA50`,`SMA200`,`P/E`,`Beta`,`Primary Signal`,`Pattern`,`Prediction`,`Confidence`,`Target`,`Target %`];function Y(e){let t=String(e??``);return t.includes(`,`)||t.includes(`"`)?`"${t.replace(/"/g,`""`)}"`:t}function vn(e){return[e.symbol,Y(e.name),Y(e.sector),Y(e.industry),V(e.price),e.change?.toFixed(2)??``,e.changePct?.toFixed(2)??``,e.volume??``,e.marketCap??``,e.ta?.rsi?.toFixed(1)??``,e.ta?.sma20?.toFixed(2)??``,e.ta?.sma50?.toFixed(2)??``,e.ta?.sma200?.toFixed(2)??``,e.fundamentals?.pe??``,e.fundamentals?.beta??``,Y(e.primarySignal),Y(e.patternLabels?.join(`; `)),e.prediction?.direction??``,e.prediction?.confidence??``,e.prediction?.priceTarget??``,e.prediction?.targetPct??``].join(`,`)}function yn(e){return{symbol:e.symbol,name:e.name,sector:e.sector,industry:e.industry,price:e.price,change:e.change,changePct:e.changePct,volume:e.volume,marketCap:e.marketCap,ta:e.ta,fundamentals:e.fundamentals,signals:e.signals?.map(e=>e.label),patterns:e.patterns,prediction:e.prediction,timestamp:e.timestamp}}function bn(e,t=`stockviz-export.csv`,n=!1){wn([(n?_n:[`Symbol`,`Company`,`Sector`,`Price`,`Change`,`Change %`,`Volume`,`Market Cap`]).join(`,`),...e.map(e=>n?vn(e):[e.symbol,Y(e.name),Y(e.sector),V(e.price),e.change?.toFixed(2)??``,e.changePct?.toFixed(2)??``,e.volume??``,e.marketCap??``].join(`,`))].join(`
`),t,`text/csv;charset=utf-8`)}function xn(e,t=`stockviz-export.json`){let n={exportedAt:new Date().toISOString(),count:e.length,stocks:e.map(yn)};wn(JSON.stringify(n,null,2),t,`application/json`)}function Sn(e){return{api:`StockViz Export API v1`,version:`1.0`,exportedAt:new Date().toISOString(),count:e.length,endpoints:{screener:`GET /api/v1/screener — full universe with TA`,quote:`GET /api/v1/quote?symbol=AAPL — single stock`,signals:`GET /api/v1/signals — stocks by signal`,patterns:`GET /api/v1/patterns — pattern scanner results`},data:e.map(yn)}}async function Cn(e){let t=Sn(e);return await navigator.clipboard.writeText(JSON.stringify(t,null,2)),t.count}function wn(e,t,n){let r=new Blob([e],{type:n}),i=document.createElement(`a`);i.href=URL.createObjectURL(r),i.download=t,i.click(),URL.revokeObjectURL(i.href)}var Tn=[`sector`,`industry`,`minChange`,`maxChange`,`minVolume`,`minMarketCap`,`search`,`signal`,`pattern`,`prediction`,`minRsi`,`maxRsi`,`minPe`,`maxPe`,`aboveSma50`,`aboveSma200`];function En(){let e=location.hash.slice(1),t=e.indexOf(`?`);if(t===-1)return null;let n=new URLSearchParams(e.slice(t+1)),r={};for(let e of Tn){let t=n.get(e);t!=null&&(r[e]=t)}return Object.keys(r).length?r:null}function Dn(e){let t=location.hash.slice(1).split(`?`)[0]||`/`;if(t!==`/screener`&&t!==`/map`)return;let n=new URLSearchParams;for(let t of Tn)e[t]&&n.set(t,e[t]);let r=n.toString(),i=r?`#${t}?${r}`:`#${t}`;location.hash!==i&&history.replaceState(null,``,i)}function On(){let e=En();e&&We(e,{preset:`custom`})}function kn(e){let t=new URLSearchParams;for(let n of Tn)e[n]&&t.set(n,e[n]);let n=t.toString(),r=location.origin+location.pathname;return n?`${r}#/screener?${n}`:`${r}#/screener`}function An(e,t=200){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}function jn(t){let n=Ue(),r=qe(),i=Ke(),a=yt(),o=R(),s=Pn(gn(o,n),r);Dn(n),t.innerHTML=`
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
      ${hn.map(e=>`
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
        <div class="filter-group"><label>Search</label><input type="search" name="search" placeholder="Symbol…" value="${Z(n.search)}" /></div>
      </div>
      <div class="filter-panel" data-panel="desc" hidden>
        <div class="filter-group"><label>Sector</label><select name="sector"><option value="">Any</option>${e.map(e=>`<option value="${e}" ${n.sector===e?`selected`:``}>${e}</option>`).join(``)}</select></div>
        <div class="filter-group"><label>Min %</label><input type="number" name="minChange" step="0.1" value="${Z(n.minChange)}" /></div>
        <div class="filter-group"><label>Max %</label><input type="number" name="maxChange" step="0.1" value="${Z(n.maxChange)}" /></div>
        <div class="filter-group"><label>Min Vol</label><input type="number" name="minVolume" value="${Z(n.minVolume)}" /></div>
        <div class="filter-group"><label>Min MCap</label><select name="minMarketCap"><option value="">Any</option><option value="10000000000" ${n.minMarketCap===`10000000000`?`selected`:``}>$10B+</option><option value="50000000000" ${n.minMarketCap===`50000000000`?`selected`:``}>$50B+</option><option value="100000000000" ${n.minMarketCap===`100000000000`?`selected`:``}>$100B+</option></select></div>
      </div>
      <div class="filter-panel" data-panel="fund" hidden>
        <div class="filter-group"><label>Min P/E</label><input type="number" name="minPe" value="${Z(n.minPe)}" /></div>
        <div class="filter-group"><label>Max P/E</label><input type="number" name="maxPe" value="${Z(n.maxPe)}" /></div>
      </div>
      <div class="filter-panel" data-panel="tech" hidden>
        <div class="filter-group"><label>Min RSI</label><input type="number" name="minRsi" value="${Z(n.minRsi)}" /></div>
        <div class="filter-group"><label>Max RSI</label><input type="number" name="maxRsi" value="${Z(n.maxRsi)}" /></div>
        <div class="filter-group"><label>Above SMA50</label><select name="aboveSma50"><option value="">Any</option><option value="yes" ${n.aboveSma50===`yes`?`selected`:``}>Yes</option><option value="no" ${n.aboveSma50===`no`?`selected`:``}>No</option></select></div>
        <div class="filter-group"><label>Above SMA200</label><select name="aboveSma200"><option value="">Any</option><option value="yes" ${n.aboveSma200===`yes`?`selected`:``}>Yes</option><option value="no" ${n.aboveSma200===`no`?`selected`:``}>No</option></select></div>
        <div class="filter-group"><label>Prediction</label><select name="prediction"><option value="">Any</option><option value="bullish" ${n.prediction===`bullish`?`selected`:``}>Bullish</option><option value="bearish" ${n.prediction===`bearish`?`selected`:``}>Bearish</option><option value="neutral" ${n.prediction===`neutral`?`selected`:``}>Neutral</option></select></div>
      </div>
      <div class="filter-panel" data-panel="signals" hidden>
        <div class="filter-group"><label>Signal</label><select name="signal"><option value="">Any</option>${un.map(e=>`<option value="${e.id}" ${n.signal===e.id?`selected`:``}>${e.label}</option>`).join(``)}</select></div>
        <div class="filter-group"><label>Pattern</label><select name="pattern"><option value="">Any</option>${dn.map(e=>`<option value="${e.id}" ${n.pattern===e.id?`selected`:``}>${e.label}</option>`).join(``)}</select></div>
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
            ${X(`symbol`,`Ticker`,r)}
            ${X(`name`,`Company`,r)}
            <th>Trend</th>
            ${X(`sector`,`Sector`,r)}
            ${X(`price`,`Price`,r)}
            ${X(`changePct`,`Change %`,r)}
            <th>Signal</th><th>Pattern</th>
            ${X(`ta.rsi`,`RSI`,r)}
            <th>P/E</th>
            <th>Prediction</th>
            ${X(`volume`,`Volume`,r)}
            ${X(`marketCap`,`Market Cap`,r)}
          </tr>
        </thead>
        <tbody>
          ${s.length?s.map(Mn).join(``):`<tr><td colspan="13" class="empty-row">No matches — adjust filters</td></tr>`}
        </tbody>
      </table>
    </div>
  `;let c=t.querySelector(`#filter-form`),l=An(()=>{let e=new FormData(c);We(Object.fromEntries(e.entries()),{preset:`custom`})},180);c.addEventListener(`input`,l),c.addEventListener(`change`,()=>{let e=new FormData(c);We(Object.fromEntries(e.entries()),{preset:`custom`})}),t.querySelector(`#reset-filters`)?.addEventListener(`click`,Et),t.querySelector(`#save-filter`)?.addEventListener(`click`,()=>{let e=prompt(`Name this filter preset:`);e?.trim()&&bt(e.trim())}),t.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=hn.find(t=>t.id===e.dataset.preset);t&&Ge(t.id,t.filters)})}),t.querySelectorAll(`[data-saved]`).forEach(e=>{e.addEventListener(`click`,()=>St(e.dataset.saved))}),t.querySelectorAll(`[data-del]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),xt(e.dataset.del)})}),t.querySelector(`#export-csv`)?.addEventListener(`click`,()=>bn(s)),t.querySelector(`#export-full`)?.addEventListener(`click`,()=>bn(s,`stockviz-screener-ta.csv`,!0)),t.querySelector(`#share-screener`)?.addEventListener(`click`,async()=>{let e=kn(n);try{await navigator.clipboard.writeText(e);let n=t.querySelector(`#share-screener`),r=n.textContent;n.textContent=`Copied!`,setTimeout(()=>{n.textContent=r},2e3)}catch{prompt(`Copy this link:`,e)}}),t.querySelectorAll(`th[data-sort]`).forEach(e=>{e.addEventListener(`click`,()=>Je(e.dataset.sort))}),t.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),t.querySelectorAll(`.screener-tab`).forEach(e=>{e.addEventListener(`click`,()=>{t.querySelectorAll(`.screener-tab`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let n=e.dataset.tab;t.querySelectorAll(`.filter-panel`).forEach(e=>{e.hidden=e.dataset.panel!==n})})}),t.querySelectorAll(`[data-fav]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=tt(e.dataset.fav);e.textContent=n?`★`:`☆`,e.classList.toggle(`starred`,n)})})}function X(e,t,n){return`<th data-sort="${e}" class="sortable">${t}${n.key===e?n.dir===`asc`?` ▲`:` ▼`:``}</th>`}function Mn(e){let t=nt(e.symbol);return`
    <tr class="clickable" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
      <td class="col-star">
        <button class="star-btn ${t?`starred`:``}" data-fav="${e.symbol}" aria-label="Favorite">${t?`★`:`☆`}</button>
      </td>
      <td class="sym">${e.symbol}</td>
      <td class="name-cell">${e.name||`—`}</td>
      <td>${Lt(e.symbol)}</td>
      <td class="sector-cell">${e.sector||`—`}</td>
      <td data-live="price">$${V(e.price)}</td>
      <td class="${U(e.changePct)}" data-live="pct">${H(e.changePct)}</td>
      <td class="signal-tag">${e.primarySignal||`—`}</td>
      <td class="pattern-label">${e.patternLabels?.[0]||`—`}</td>
      <td class="${(e.ta?.rsi??50)>70?`neg`:(e.ta?.rsi??50)<30?`pos`:``}">${e.ta?.rsi?.toFixed(1)??`—`}</td>
      <td>${e.fundamentals?.pe??`—`}</td>
      <td class="${e.prediction?.direction===`bullish`?`pos`:e.prediction?.direction===`bearish`?`neg`:``}">${e.prediction?`${e.prediction.direction} ${e.prediction.confidence}%`:`—`}</td>
      <td>${Mt(e.volume)}</td>
      <td>${Nt(e.marketCap)}</td>
    </tr>
  `}function Nn(e,t){return t.includes(`.`)?t.split(`.`).reduce((e,t)=>e?.[t],e):e[t]}function Pn(e,{key:t,dir:n}){let r=n===`asc`?1:-1;return[...e].sort((e,n)=>{let i=Nn(e,t)??``,a=Nn(n,t)??``;return typeof i==`number`&&typeof a==`number`?(i-a)*r:String(i).localeCompare(String(a))*r})}function Z(e){return String(e??``).replace(/"/g,`&quot;`)}function Fn(e,t,n){if(!t.length){e.innerHTML=`<p class="empty-state">No stocks match current filters.</p>`;return}let r=new Map;for(let e of t){let t=e.sector||`Other`;r.has(t)||r.set(t,[]),r.get(t).push(e)}e.innerHTML=`
    <div class="heatmap-legend">
      <span class="legend-label">-5%</span>
      <div class="legend-gradient"></div>
      <span class="legend-label">+5%</span>
    </div>
    <div class="treemap">
      ${[...r.entries()].sort((e,t)=>{let n=e[1].reduce((e,t)=>e+t.changePct,0)/e[1].length;return t[1].reduce((e,t)=>e+t.changePct,0)/t[1].length-n}).map(([e,t])=>In(e,t)).join(``)}
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>n?.(e.dataset.symbol))})}function In(e,t){let n=t.reduce((e,t)=>e+(t.marketCap||1),0),r=t.reduce((e,t)=>e+t.changePct,0)/t.length;return`
    <div class="sector-block" style="flex:${Math.max(1,Math.round(n/5e10))}">
      <div class="sector-header" style="background:${Ft(r)}">
        <span class="sector-name">${e}</span>
        <span class="sector-avg">${r>=0?`+`:``}${r.toFixed(2)}%</span>
      </div>
      <div class="sector-tiles">
        ${t.sort((e,t)=>(t.marketCap||0)-(e.marketCap||0)).map(e=>Ln(e,n)).join(``)}
      </div>
    </div>
  `}function Ln(e,t){let n=(e.marketCap||1)/t,r=Math.max(1,Math.round(n*20)),i=e.changePct??0;return`
    <button
      class="heat-tile"
      data-symbol="${e.symbol}"
      style="flex:${r};background:${Ft(i)}"
      title="${e.name}: ${i>=0?`+`:``}${i.toFixed(2)}%"
    >
      <span class="tile-symbol">${e.symbol}</span>
      <span class="tile-pct">${i>=0?`+`:``}${i.toFixed(1)}%</span>
    </button>
  `}function Rn(e){let t=gn(R(),Ue());e.innerHTML=`
    <div class="page-header">
      <h1>Market Heat Map</h1>
      <p class="page-sub">Sector treemap sized by market cap, colored by daily change. Uses screener filters.</p>
    </div>
    <div id="heatmap-root" class="heatmap-root"></div>
  `,Fn(e.querySelector(`#heatmap-root`),t,e=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))})}async function zn(e){e.innerHTML=`
    <div class="page-header">
      <h1>Market News</h1>
      <p class="page-sub">Latest headlines from your data feed.</p>
    </div>
    <div class="news-loading panel">Loading news…</div>
  `;let t=await be(L()),n=e.querySelector(`.news-loading`);n&&(n.className=`news-list panel`,n.innerHTML=t.length?t.map(Bn).join(``):`<p class="muted">No news available.</p>`,n.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}))}function Bn(e){let t=e.datetime?new Date(e.datetime*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):``,n=e.related?.split(`,`)[0]||e.symbol;return`
    <article class="news-item">
      <div class="news-meta">
        <span class="news-source">${e.source||`News`}</span>
        <span class="news-date">${t}</span>
        ${n?`<button class="news-symbol" data-symbol="${n}">${n}</button>`:``}
      </div>
      <a class="news-headline" href="${e.url||`#`}" target="_blank" rel="noopener">${e.headline||e.title||`Untitled`}</a>
      ${e.summary?`<p class="news-summary">${e.summary}</p>`:``}
    </article>
  `}function Vn(e){let n=rt(),r=R(),i=0,a=0,o=n.map(e=>{let t=r.get(e.symbol),n=t?.price??0,o=n*e.shares,s=e.costBasis*e.shares,c=o-s,l=s?c/s*100:0;return i+=o,a+=s,{...e,q:t,price:n,value:o,cost:s,pl:c,plPct:l}}),s=i-a,c=a?s/a*100:0;e.innerHTML=`
    <div class="page-header">
      <h1>Portfolio</h1>
      <p class="page-sub">Track holdings, cost basis, and live P&amp;L.</p>
    </div>

    <div class="portfolio-summary">
      <div class="summary-card">
        <span class="summary-label">Total Value</span>
        <span class="summary-value">$${V(i)}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Total Cost</span>
        <span class="summary-value">$${V(a)}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">P&amp;L</span>
        <span class="summary-value ${U(s)}">${s>=0?`+`:`-`}$${V(Math.abs(s))} (${H(c)})</span>
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
          ${o.length?o.map(Hn).join(``):`<tr><td colspan="8" class="empty-row">No holdings yet — add your first position above.</td></tr>`}
        </tbody>
      </table>
    </div>
  `,e.querySelector(`#add-holding`)?.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(e.target),r=n.get(`symbol`).toString().trim().toUpperCase();if(!t.find(e=>e.symbol===r)){B(`Symbol not in universe`,`error`);return}it({symbol:r,shares:n.get(`shares`),costBasis:n.get(`costBasis`)}),B(`Added ${r}`,`success`),e.target.reset()}),e.querySelectorAll(`[data-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{at(e.dataset.remove),B(`Removed ${e.dataset.remove}`,`info`)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Hn(e){return`
    <tr data-live-symbol="${e.symbol}">
      <td class="sym clickable" data-symbol="${e.symbol}">${e.symbol}</td>
      <td>${e.shares}</td>
      <td>$${V(e.costBasis)}</td>
      <td data-live="price">$${V(e.price)}</td>
      <td>$${V(e.value)}</td>
      <td class="${U(e.pl)}">${e.pl>=0?`+`:``}$${V(Math.abs(e.pl))}</td>
      <td class="${U(e.plPct)}">${H(e.plPct)}</td>
      <td><button class="btn-ghost btn-sm" data-remove="${e.symbol}">Remove</button></td>
    </tr>
  `}var Un=[{key:`price`,label:`Price`,fmt:e=>`$${V(e.price)}`},{key:`changePct`,label:`Change %`,fmt:e=>H(e.changePct),cls:e=>U(e.changePct)},{key:`volume`,label:`Volume`,fmt:e=>Mt(e.volume)},{key:`marketCap`,label:`Market Cap`,fmt:e=>Nt(e.marketCap)},{key:`open`,label:`Open`,fmt:e=>`$${V(e.open)}`},{key:`high`,label:`High`,fmt:e=>`$${V(e.high)}`},{key:`low`,label:`Low`,fmt:e=>`$${V(e.low)}`},{key:`sector`,label:`Sector`,fmt:e=>e.sector||`—`}];function Wn(e){let t=ot(),n=R();e.innerHTML=`
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

    ${t.length?Gn(t,n):`
      <div class="empty-compare panel">
        <p>No stocks selected. Press <kbd>/</kbd> or <kbd>Ctrl+K</kbd> to search, or click a ticker above.</p>
      </div>
    `}
  `,e.querySelector(`#clear-compare`)?.addEventListener(`click`,ct),e.querySelectorAll(`[data-add]`).forEach(e=>{e.addEventListener(`click`,()=>st(e.dataset.add))}),e.querySelectorAll(`[data-rm]`).forEach(e=>{e.addEventListener(`click`,()=>st(e.dataset.rm))}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),e.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=n.get(e.dataset.spark);t?.sparkline?.length&&It(e,t.sparkline,{width:120,height:40})})}function Gn(e,n){let r=e.map(e=>{let r=t.find(t=>t.symbol===e);return{sym:e,q:n.get(e),meta:r}});return`
    <div class="compare-grid">
      ${r.map(({sym:e,q:t,meta:n})=>`
        <div class="compare-card panel" data-live-symbol="${e}">
          <div class="compare-card-head">
            <button class="sym compare-sym" data-symbol="${e}">${e}</button>
            <button type="button" class="compare-remove" data-rm="${e}" title="Remove">&times;</button>
          </div>
          <p class="compare-name">${n?.name||t?.name||``}</p>
          ${Lt(e).replace(`width="72" height="24"`,`width="120" height="40"`)}
          <div class="compare-price ${U(t?.changePct)}">
            <span data-live="price">$${V(t?.price)}</span>
            <span data-live="pct">${H(t?.changePct)}</span>
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
          ${Un.map(e=>`
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
  `}function Kn(e){let t=[...R().values()];e.innerHTML=`
    <div class="page-header">
      <h1>Technical Signals</h1>
      <p class="page-sub">Finviz-style TA signals — click any ticker for prediction details.</p>
    </div>
    <div class="signals-grid">
      ${un.map(e=>{let n=t.filter(t=>t.signals?.some(t=>t.id===e.id)).sort((e,t)=>Math.abs(t.changePct)-Math.abs(e.changePct)).slice(0,8);return`
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
                    <td>$${V(t.price)}</td>
                    <td class="${U(t.changePct)}">${H(t.changePct)}</td>
                    <td class="signal-tag">${e.label}</td>
                  </tr>
                `).join(``):`<tr><td colspan="4" class="empty-row">None detected</td></tr>`}
              </tbody>
            </table>
          </section>
        `}).join(``)}
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function qn(e){let t=[...R().values()],n=t.flatMap(e=>(e.patterns||[]).map(t=>({...e,pattern:t}))).sort((e,t)=>t.pattern.confidence-e.pattern.confidence);e.innerHTML=`
    <div class="page-header">
      <h1>Pattern Scanner</h1>
      <p class="page-sub">Chart pattern detection with confidence scores and directional bias.</p>
    </div>

    <div class="pattern-summary panel">
      <span><strong>${n.length}</strong> patterns detected across ${t.filter(e=>e.patterns?.length).length} stocks</span>
      <div class="preset-bar">
        ${dn.slice(0,8).map(e=>{let n=t.filter(t=>t.patterns?.some(t=>t.id===e.id)).length;return`<a href="#/screener?pattern=${e.id}" class="preset-chip">${e.label} (${n})</a>`}).join(``)}
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
              <td>$${V(n)}</td>
              <td class="${U(r)}">${H(r)}</td>
              <td class="pattern-label">${i.label}</td>
              <td class="${i.bias===`bullish`?`pos`:`neg`}">${i.bias}</td>
              <td>
                <div class="conf-bar"><div class="conf-fill" style="width:${i.confidence}%"></div></div>
                ${i.confidence}%
              </td>
              <td class="${U(a?.score)}">${a?.direction||`—`} (${a?.confidence||0}%)</td>
              <td>$${V(a?.priceTarget)}</td>
            </tr>
          `).join(``)||`<tr><td colspan="9" class="empty-row">Scanning… refresh to detect patterns.</td></tr>`}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Jn(t){let n=[...R().values()];t.innerHTML=`
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
              <td class="${U(e.avg)}">${H(e.avg)}</td>
              <td>${e.count?Math.round(e.bullish/e.count*100):0}%</td>
              <td class="sym">${e.top?`${e.top.symbol} ${H(e.top.changePct)}`:`—`}</td>
              <td class="sym">${e.bottom?`${e.bottom.symbol} ${H(e.bottom.changePct)}`:`—`}</td>
              <td><a href="#/map" class="btn-ghost btn-sm">Map</a></td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `}var Yn=`AAPL`;function Xn(e){let n=R(),r=n.get(Yn)||n.get(`AAPL`);e.innerHTML=`
    <div class="page-header charts-header">
      <h1>Charts</h1>
      <select id="chart-symbol" class="chart-select">
        ${t.map(e=>`<option value="${e.symbol}" ${e.symbol===Yn?`selected`:``}>${e.symbol} — ${e.name}</option>`).join(``)}
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
            $${V(r.price)} ${H(r.changePct)}
          </div>
        </div>
        <div id="full-chart" class="full-chart-host"></div>
        ${r.prediction?`
          <div class="chart-prediction">
            <span class="pred-badge ${r.prediction.direction}">${r.prediction.direction.toUpperCase()}</span>
            <span>${r.prediction.confidence}% confidence · Target $${V(r.prediction.priceTarget)} (${r.prediction.targetPct>=0?`+`:``}${r.prediction.targetPct}%) · ${r.prediction.horizon}</span>
          </div>
        `:``}
        ${r.patterns?.length?`
          <div class="chart-patterns">
            <strong>Patterns:</strong> ${r.patterns.map(e=>`${e.label} (${e.confidence}%)`).join(` · `)}
          </div>
        `:``}
      </div>
    `:`<p class="muted">Loading…</p>`}
  `;let i=e.querySelector(`#full-chart`);i&&r?.candles&&(Bt(i,r.candles,{height:360}),new ResizeObserver(()=>Bt(i,r.candles,{height:360})).observe(i)),e.querySelector(`#chart-symbol`)?.addEventListener(`change`,t=>{Yn=t.target.value,Xn(e)})}function Zn(e,t,n){return`
    <section class="panel">
      <h2 class="panel-title">${e}</h2>
      <table class="data-table compact finviz-tbl">
        <thead><tr>${n.map(e=>`<th>${e}</th>`).join(``)}</tr></thead>
        <tbody>
          ${t.map(e=>`
            <tr>
              <td class="sym">${e.name||e.pair}</td>
              <td>${typeof e.last==`number`&&e.last>1e3?e.last.toLocaleString():V(e.last)}</td>
              <td class="${U(e.change)}">${e.change>=0?`+`:``}${V(e.change)}</td>
              <td class="${U(e.changePct)}">${H(e.changePct)}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </section>
  `}function Qn(e){e.innerHTML=`
    <div class="page-header"><h1>Futures &amp; Forex</h1></div>
    <div class="three-col">
      ${Zn(`Futures`,rn,[`Contract`,`Last`,`Change`,`Change %`])}
      ${Zn(`Forex & Crypto`,an,[`Pair`,`Last`,`Change`,`Change %`])}
      ${Zn(`Bonds`,on,[`Bond`,`Yield`,`Change`,`Change %`])}
    </div>
  `}function $n(e){e.innerHTML=`
    <div class="page-header"><h1>Economic &amp; Earnings Calendar</h1></div>
    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">Earnings</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Symbol</th><th>Date</th><th>EPS Est.</th><th>Cap</th></tr></thead>
          <tbody>
            ${cn.map(e=>`
              <tr class="clickable" data-symbol="${e.symbol}">
                <td class="sym">${e.symbol}</td>
                <td>${e.date}</td>
                <td>$${V(e.epsEst)}</td>
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
            ${ln.map(e=>`
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
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function er(e){e.innerHTML=`
    <div class="page-header"><h1>Insider Trading</h1><p class="page-sub">Recent insider transactions (simulated data).</p></div>
    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr><th>Ticker</th><th>Insider</th><th>Relationship</th><th>Date</th><th>Transaction</th><th>Cost</th><th>#Shares</th><th>Value ($)</th></tr>
        </thead>
        <tbody>
          ${sn.map(e=>`
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
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function tr(e){let t=L();e.innerHTML=`
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
            <input type="password" id="apiKey" name="apiKey" placeholder="Paste your key…" value="${rr(t.apiKey)}" autocomplete="off" />
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
          <input type="text" id="watchlist" name="watchlist" value="${rr(t.watchlist.join(`, `))}" placeholder="AAPL, MSFT, NVDA" />
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
  `;let n=e.querySelector(`#settings-form`);n.addEventListener(`submit`,t=>{t.preventDefault();let r=new FormData(n),i=r.get(`watchlist`).split(`,`).map(e=>e.trim().toUpperCase()).filter(Boolean);Ve({apiKey:r.get(`apiKey`),refreshInterval:Number(r.get(`refreshInterval`))||30,useMockData:r.get(`useMockData`)===`on`,watchlist:i}),nr(e),window.dispatchEvent(new CustomEvent(`stockviz:settings-saved`))}),e.querySelector(`#test-api`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#apiKey`).value,n=e.querySelector(`#api-status`);n.textContent=`Testing…`,n.className=`api-status`;let r=await Se(t);n.textContent=r.message,n.className=`api-status ${r.valid?`ok`:`err`}`})}function nr(e){let t=e.querySelector(`.save-toast`);t||(t=document.createElement(`p`),t.className=`save-toast`,e.querySelector(`.settings-form`)?.appendChild(t)),t.textContent=`Settings saved.`,setTimeout(()=>t.remove(),2500)}function rr(e){return String(e??``).replace(/"/g,`&quot;`)}var ir=[{id:`2x2`,cols:2,slots:4},{id:`2x3`,cols:3,slots:6},{id:`3x3`,cols:3,slots:9},{id:`4x2`,cols:4,slots:8}],Q=[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`,`JPM`,`SPY`];function ar(e){let t=_t(),n=ir.find(e=>e.id===t.id)||ir[0],r=R(),i=[...t.symbols];for(;i.length<n.slots;)i.push(Q[i.length%Q.length]);e.innerHTML=`
    <div class="page-header multichart-header">
      <div>
        <h1>Multi-Chart</h1>
        <p class="page-sub">Finviz Elite-style multi-layout charts — click a chart to change symbol.</p>
      </div>
      <div class="multichart-controls">
        ${ir.map(e=>`
          <button type="button" class="preset-chip ${t.id===e.id?`active`:``}" data-layout="${e.id}">${e.id}</button>
        `).join(``)}
        <button type="button" class="btn-secondary" id="mc-watchlist">Load Watchlist</button>
        <button type="button" class="btn-secondary" id="mc-favorites">Load Favorites</button>
      </div>
    </div>
    <div class="multichart-grid cols-${n.cols}" id="mc-grid">
      ${i.slice(0,n.slots).map((e,t)=>sr(e,r.get(e),t)).join(``)}
    </div>
  `,e.querySelectorAll(`[data-layout]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=ir.find(t=>t.id===e.dataset.layout);vt({id:t.id,symbols:i.slice(0,t.slots)})})}),e.querySelector(`#mc-watchlist`)?.addEventListener(`click`,()=>{let e=or();vt({id:t.id,symbols:e.slice(0,n.slots)})}),e.querySelector(`#mc-favorites`)?.addEventListener(`click`,()=>{vt({id:t.id,symbols:et().slice(0,n.slots)})}),e.querySelectorAll(`.mc-cell`).forEach(e=>{let n=e.querySelector(`.mc-chart`),i=e.dataset.symbol,a=r.get(i);n&&a?.candles&&Bt(n,a.candles,{height:140}),e.querySelector(`.mc-sym-select`)?.addEventListener(`change`,n=>{let r=Number(e.dataset.idx),i=[...t.symbols];for(;i.length<=r;)i.push(Q[i.length%Q.length]);i[r]=n.target.value,vt({id:t.id,symbols:i})}),e.addEventListener(`click`,e=>{e.target.tagName!==`SELECT`&&window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:i}))})})}function or(){try{return JSON.parse(localStorage.getItem(`stockviz-settings`)||`{}`).watchlist||Q}catch{return Q}}function sr(e,n,r){let i=U(n?.changePct);return`
    <div class="mc-cell panel" data-symbol="${e}" data-idx="${r}">
      <div class="mc-cell-head">
        <select class="mc-sym-select sym" aria-label="Symbol">
          ${t.map(t=>`<option value="${t.symbol}" ${t.symbol===e?`selected`:``}>${t.symbol}</option>`).join(``)}
        </select>
        <span class="mc-price ${i}">${n?`$${V(n.price)} ${H(n.changePct)}`:`—`}</span>
      </div>
      <div class="mc-chart"></div>
      ${n?.prediction?`<span class="mc-pred pred-badge ${n.prediction.direction}">${n.prediction.direction} ${n.prediction.confidence}%</span>`:``}
    </div>
  `}function cr(e){let n=lt(),r=n.filter(e=>e.active&&!e.triggered),i=n.filter(e=>e.triggered);e.innerHTML=`
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
          <datalist id="alert-symbols">${t.map(e=>`<option value="${e.symbol}">`).join(``)}</datalist>
        </div>
        <div class="filter-group">
          <label>Condition</label>
          <select name="type" id="alert-type">
            ${Ot.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}
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
        <h2 class="panel-title">Active Alerts (${r.length})</h2>
        ${r.length?lr(r,!1):`<p class="muted">No active alerts.</p>`}
      </section>
      <section class="panel">
        <div class="panel-title-row">
          <h2 class="panel-title">Triggered (${i.length})</h2>
          ${i.length?`<button class="btn-ghost btn-sm" id="clear-triggered">Clear All</button>`:``}
        </div>
        ${i.length?lr(i,!0):`<p class="muted">None triggered yet.</p>`}
      </section>
    </div>
  `;let a=e.querySelector(`#alert-type`),o=e.querySelector(`#alert-value-group`),s=e.querySelector(`#alert-value`);function c(){let t=Ot.find(e=>e.id===a.value);t&&(t.valueType===`signal`?s.outerHTML=`<select name="value" id="alert-value">${un.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}</select>`:t.valueType===`pattern`?s.outerHTML=`<select name="value" id="alert-value">${dn.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}</select>`:t.valueType===`prediction`?s.outerHTML=`<select name="value" id="alert-value"><option value="bullish">Bullish</option><option value="bearish">Bearish</option><option value="neutral">Neutral</option></select>`:o.querySelector(`select`)?o.innerHTML=`<label>Value</label><input type="text" name="value" id="alert-value" placeholder="${t.placeholder||``}" />`:e.querySelector(`#alert-value`).placeholder=t.placeholder||``)}a?.addEventListener(`change`,c),c(),e.querySelector(`#alert-form`)?.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(e.target),r=n.get(`symbol`).toString().trim().toUpperCase();if(!t.find(e=>e.symbol===r)){B(`Symbol not in universe`,`error`);return}ft({symbol:r,type:n.get(`type`),value:n.get(`value`),note:n.get(`note`)||``}),B(`Alert created for ${r}`,`success`),e.target.reset()}),e.querySelector(`#clear-triggered`)?.addEventListener(`click`,gt),e.querySelectorAll(`[data-del-alert]`).forEach(e=>{e.addEventListener(`click`,()=>pt(e.dataset.delAlert))}),e.querySelectorAll(`[data-toggle-alert]`).forEach(e=>{e.addEventListener(`click`,()=>mt(e.dataset.toggleAlert))}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function lr(e,t){return`
    <table class="data-table finviz-tbl">
      <thead><tr><th>Symbol</th><th>Condition</th><th>Value</th><th>${t?`Fired`:`Status`}</th><th></th></tr></thead>
      <tbody>
        ${e.map(e=>`
          <tr>
            <td class="sym clickable" data-symbol="${e.symbol}">${e.symbol}</td>
            <td>${Ot.find(t=>t.id===e.type)?.label||e.type}</td>
            <td>${e.value}</td>
            <td>${t?`<span class="pos">${e.triggerDetail||`Triggered`}</span> <span class="muted">${ur(e.triggeredAt)}</span>`:e.active?`Watching`:`Paused`}</td>
            <td>
              ${t?``:`<button class="btn-ghost btn-sm" data-toggle-alert="${e.id}">${e.active?`Pause`:`Resume`}</button>`}
              <button class="btn-ghost btn-sm" data-del-alert="${e.id}">×</button>
            </td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `}function ur(e){return e?new Date(e).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):``}function dr(e){let t=R(),n=gn(t,Ue()),r=[...t.values()],i=Sn(r.slice(0,2));e.innerHTML=`
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
          <tr><td>fundamentals</td><td>object</td><td>P/E, EPS, Beta, Dividend</td></tr>
        </tbody>
      </table>
    </section>
  `,e.querySelector(`#exp-csv`)?.addEventListener(`click`,()=>{bn(n,`stockviz-screener.csv`,!1),B(`Exported ${n.length} rows`,`success`)}),e.querySelector(`#exp-csv-full`)?.addEventListener(`click`,()=>{bn(r,`stockviz-full-ta.csv`,!0),B(`Exported ${r.length} rows with TA`,`success`)}),e.querySelector(`#exp-json`)?.addEventListener(`click`,()=>{xn(r),B(`Exported ${r.length} stocks as JSON`,`success`)}),e.querySelector(`#exp-clipboard`)?.addEventListener(`click`,async()=>{try{B(`Copied ${await Cn(r)} stocks to clipboard`,`success`)}catch{B(`Clipboard failed — use JSON download`,`error`)}}),e.querySelector(`#exp-sample`)?.addEventListener(`click`,()=>{xn(r.slice(0,5),`stockviz-api-sample.json`)})}var fr={"/":fn,"/screener":jn,"/map":Rn,"/news":zn,"/portfolio":Vn,"/compare":Wn,"/signals":Kn,"/patterns":qn,"/groups":Jn,"/charts":Xn,"/multicharts":ar,"/alerts":cr,"/export":dr,"/futures":Qn,"/calendar":$n,"/insider":er,"/settings":tr},pr=new Set([`quotes`,`status`]),$=`/`,mr=!0;async function hr(){let e=L();try{let[{quotes:t,source:n},r]=await Promise.all([ge(e),xe(e)]);Ye(t,{fetchedAt:Date.now(),source:n}),Xe(r),gr(n),Dt(t).forEach(e=>B(`Alert: ${e.symbol} — ${e.detail}`,`success`,5e3)),_r()}catch(e){console.error(`Quote fetch failed:`,e),gr(`error`)}}function gr(e){let t=document.getElementById(`status-dot`),n=document.getElementById(`status-text`),r=document.getElementById(`last-update`),i=document.getElementById(`market-status`),a=Qe(),o=Ze();e===`error`?(t.className=`status-dot`,n.textContent=`Update failed`):e===`finnhub`?(t.className=`status-dot live`,n.textContent=`Live · Finnhub`):(t.className=`status-dot mock`,n.textContent=`Simulated + TA Engine`),a.lastFetchAt&&(r.textContent=`Updated ${Pt(a.lastFetchAt)}`),i&&o&&(i.textContent=o.label,i.className=`market-status ${o.isOpen?`open`:`closed`}`),vr()}function _r(){let e=document.getElementById(`alert-badge`);if(!e)return;let t=ut(),n=dt();e.textContent=t+n,e.hidden=t+n===0,e.classList.toggle(`has-triggered`,n>0)}function vr(){let e=document.getElementById(`footer-stats`);if(!e)return;let n=[...R().values()],r=n.reduce((e,t)=>e+(t.patterns?.length||0),0),i=n.filter(e=>e.prediction?.direction===`bullish`).length;e.innerHTML=`
    <span>${t.length} symbols</span>
    <span>${r} patterns</span>
    <span class="pos">${i} bullish</span>
  `}function yr(){let e=document.getElementById(`ticker-bar`),t=R();e.innerHTML=[`SPY`,`QQQ`,`DIA`,`IWM`].map(e=>{let n={SPY:`S&P 500`,QQQ:`NASDAQ`,DIA:`DOW`,IWM:`RUSSELL 2K`},r=t.get(e);if(!r)return``;let i=U(r.changePct);return`
      <span class="ticker-item" data-live-symbol="${e}">
        <span class="ticker-label">${n[e]}</span>
        <span class="ticker-price" data-live="price">$${V(r.price)}</span>
        <span class="ticker-chg ${i}" data-live="pct">${H(r.changePct)}</span>
      </span>
    `}).join(``),e.querySelectorAll(`.ticker-item`).forEach(e=>{e.style.cursor=`pointer`,e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.liveSymbol}))})})}function br(){document.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=R().get(e.dataset.spark);t?.sparkline?.length&&It(e,t.sparkline,{width:Number(e.getAttribute(`width`))||72,height:Number(e.getAttribute(`height`))||24})})}function xr(){return(location.hash.slice(1)||`/`).split(`?`)[0]||`/`}function Sr(e=!0){$=xr(),fr[$]||($=`/`),document.querySelectorAll(`.main-nav a`).forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)?.startsWith(`#${$}`))});let t=document.getElementById(`main-content`);e&&!mr&&t.classList.add(`page-enter`);let n=(fr[$]||fn)(t),r=()=>{yr(),br(),e&&requestAnimationFrame(()=>t.classList.remove(`page-enter`)),mr=!1};n?.then?n.then(r):r(),document.getElementById(`nav-toggle`)?.setAttribute(`aria-expanded`,`false`),document.querySelector(`.main-nav`)?.classList.remove(`open`)}function Cr(e){if(e===`alerts`&&_r(),pr.has(e)&&fr[$]){Rt(),yr(),gr(Qe().dataSource);return}fr[$]?Sr(!1):yr()}function wr(){Ut(),Yt(),At(),document.getElementById(`nav-toggle`)?.addEventListener(`click`,()=>{document.querySelector(`.main-nav`)?.classList.toggle(`open`)}),document.getElementById(`theme-toggle`)?.addEventListener(`click`,He),Be(L().theme),On(),window.addEventListener(`hashchange`,()=>{On(),Sr()}),window.addEventListener(`stockviz:select`,e=>{$e(e.detail),Wt(e.detail)}),window.addEventListener(`stockviz:settings-saved`,()=>{Tt(),hr().then(()=>wt(hr))}),Ct(Cr),hr().then(()=>{Sr(),wt(hr)})}wr();