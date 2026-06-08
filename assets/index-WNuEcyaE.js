(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Technology`,`Healthcare`,`Financial`,`Consumer Cyclical`,`Consumer Defensive`,`Industrials`,`Energy`,`Utilities`,`Real Estate`,`Basic Materials`,`Communication Services`],t=[{symbol:`AAPL`,name:`Apple Inc.`,sector:`Technology`,industry:`Consumer Electronics`,marketCap:32e11},{symbol:`MSFT`,name:`Microsoft Corp.`,sector:`Technology`,industry:`Software`,marketCap:31e11},{symbol:`NVDA`,name:`NVIDIA Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:28e11},{symbol:`GOOGL`,name:`Alphabet Inc.`,sector:`Communication Services`,industry:`Internet Content`,marketCap:21e11},{symbol:`AMZN`,name:`Amazon.com Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:19e11},{symbol:`META`,name:`Meta Platforms`,sector:`Communication Services`,industry:`Social Media`,marketCap:14e11},{symbol:`TSLA`,name:`Tesla Inc.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e11},{symbol:`BRK.B`,name:`Berkshire Hathaway`,sector:`Financial`,industry:`Insurance`,marketCap:9e11},{symbol:`AVGO`,name:`Broadcom Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:75e10},{symbol:`JPM`,name:`JPMorgan Chase`,sector:`Financial`,industry:`Banks`,marketCap:58e10},{symbol:`V`,name:`Visa Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:56e10},{symbol:`UNH`,name:`UnitedHealth Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:52e10},{symbol:`XOM`,name:`Exxon Mobil`,sector:`Energy`,industry:`Oil & Gas`,marketCap:48e10},{symbol:`LLY`,name:`Eli Lilly`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:75e10},{symbol:`MA`,name:`Mastercard Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:45e10},{symbol:`COST`,name:`Costco Wholesale`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:4e11},{symbol:`HD`,name:`Home Depot`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:38e10},{symbol:`PG`,name:`Procter & Gamble`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:37e10},{symbol:`JNJ`,name:`Johnson & Johnson`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:36e10},{symbol:`ABBV`,name:`AbbVie Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:31e10},{symbol:`NFLX`,name:`Netflix Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:29e10},{symbol:`CRM`,name:`Salesforce Inc.`,sector:`Technology`,industry:`Software`,marketCap:28e10},{symbol:`BAC`,name:`Bank of America`,sector:`Financial`,industry:`Banks`,marketCap:31e10},{symbol:`ORCL`,name:`Oracle Corp.`,sector:`Technology`,industry:`Software`,marketCap:38e10},{symbol:`CVX`,name:`Chevron Corp.`,sector:`Energy`,industry:`Oil & Gas`,marketCap:29e10},{symbol:`KO`,name:`Coca-Cola Co.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:27e10},{symbol:`AMD`,name:`Advanced Micro Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:25e10},{symbol:`PEP`,name:`PepsiCo Inc.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:23e10},{symbol:`WMT`,name:`Walmart Inc.`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:52e10},{symbol:`DIS`,name:`Walt Disney Co.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e10},{symbol:`CSCO`,name:`Cisco Systems`,sector:`Technology`,industry:`Communication Equipment`,marketCap:21e10},{symbol:`INTC`,name:`Intel Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:95e9},{symbol:`QCOM`,name:`Qualcomm Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:19e10},{symbol:`IBM`,name:`IBM Corp.`,sector:`Technology`,industry:`IT Services`,marketCap:18e10},{symbol:`GE`,name:`GE Aerospace`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:19e10},{symbol:`CAT`,name:`Caterpillar Inc.`,sector:`Industrials`,industry:`Farm & Construction`,marketCap:175e9},{symbol:`BA`,name:`Boeing Co.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:13e10},{symbol:`UPS`,name:`United Parcel Service`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:11e10},{symbol:`RTX`,name:`RTX Corp.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:16e10},{symbol:`HON`,name:`Honeywell Intl.`,sector:`Industrials`,industry:`Conglomerates`,marketCap:14e10},{symbol:`MRK`,name:`Merck & Co.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:25e10},{symbol:`PFE`,name:`Pfizer Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:15e10},{symbol:`TMO`,name:`Thermo Fisher`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:2e11},{symbol:`ABT`,name:`Abbott Labs`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:21e10},{symbol:`AMGN`,name:`Amgen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:155e9},{symbol:`GILD`,name:`Gilead Sciences`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:105e9},{symbol:`GS`,name:`Goldman Sachs`,sector:`Financial`,industry:`Capital Markets`,marketCap:16e10},{symbol:`MS`,name:`Morgan Stanley`,sector:`Financial`,industry:`Capital Markets`,marketCap:155e9},{symbol:`WFC`,name:`Wells Fargo`,sector:`Financial`,industry:`Banks`,marketCap:21e10},{symbol:`C`,name:`Citigroup Inc.`,sector:`Financial`,industry:`Banks`,marketCap:13e10},{symbol:`BLK`,name:`BlackRock Inc.`,sector:`Financial`,industry:`Asset Management`,marketCap:13e10},{symbol:`AXP`,name:`American Express`,sector:`Financial`,industry:`Credit Services`,marketCap:175e9},{symbol:`NKE`,name:`Nike Inc.`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:115e9},{symbol:`SBUX`,name:`Starbucks Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:95e9},{symbol:`MCD`,name:`McDonald's Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:21e10},{symbol:`LOW`,name:`Lowe's Companies`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:14e10},{symbol:`TGT`,name:`Target Corp.`,sector:`Consumer Cyclical`,industry:`Discount Stores`,marketCap:65e9},{symbol:`F`,name:`Ford Motor Co.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:45e9},{symbol:`GM`,name:`General Motors`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:55e9},{symbol:`PM`,name:`Philip Morris`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:16e10},{symbol:`MO`,name:`Altria Group`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:85e9},{symbol:`CL`,name:`Colgate-Palmolive`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:75e9},{symbol:`COP`,name:`ConocoPhillips`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:13e10},{symbol:`SLB`,name:`Schlumberger`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:65e9},{symbol:`EOG`,name:`EOG Resources`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:75e9},{symbol:`OXY`,name:`Occidental Petroleum`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:5e10},{symbol:`NEE`,name:`NextEra Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:15e10},{symbol:`DUK`,name:`Duke Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:8e10},{symbol:`SO`,name:`Southern Co.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:9e10},{symbol:`D`,name:`Dominion Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:45e9},{symbol:`AMT`,name:`American Tower`,sector:`Real Estate`,industry:`REIT - Specialty`,marketCap:95e9},{symbol:`PLD`,name:`Prologis Inc.`,sector:`Real Estate`,industry:`REIT - Industrial`,marketCap:11e10},{symbol:`EQIX`,name:`Equinix Inc.`,sector:`Real Estate`,industry:`REIT - Data Centers`,marketCap:8e10},{symbol:`LIN`,name:`Linde plc`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:21e10},{symbol:`APD`,name:`Air Products`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:6e10},{symbol:`FCX`,name:`Freeport-McMoRan`,sector:`Basic Materials`,industry:`Copper`,marketCap:55e9},{symbol:`NEM`,name:`Newmont Corp.`,sector:`Basic Materials`,industry:`Gold`,marketCap:5e10},{symbol:`T`,name:`AT&T Inc.`,sector:`Communication Services`,industry:`Telecom`,marketCap:13e10},{symbol:`VZ`,name:`Verizon`,sector:`Communication Services`,industry:`Telecom`,marketCap:17e10},{symbol:`CMCSA`,name:`Comcast Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:16e10},{symbol:`TMUS`,name:`T-Mobile US`,sector:`Communication Services`,industry:`Telecom`,marketCap:23e10},{symbol:`ADBE`,name:`Adobe Inc.`,sector:`Technology`,industry:`Software`,marketCap:23e10},{symbol:`NOW`,name:`ServiceNow`,sector:`Technology`,industry:`Software`,marketCap:18e10},{symbol:`INTU`,name:`Intuit Inc.`,sector:`Technology`,industry:`Software`,marketCap:17e10},{symbol:`TXN`,name:`Texas Instruments`,sector:`Technology`,industry:`Semiconductors`,marketCap:175e9},{symbol:`MU`,name:`Micron Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:11e10},{symbol:`LRCX`,name:`Lam Research`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:1e11},{symbol:`SNPS`,name:`Synopsys Inc.`,sector:`Technology`,industry:`Software`,marketCap:85e9},{symbol:`PANW`,name:`Palo Alto Networks`,sector:`Technology`,industry:`Software`,marketCap:115e9},{symbol:`CRWD`,name:`CrowdStrike`,sector:`Technology`,industry:`Software`,marketCap:8e10},{symbol:`PLTR`,name:`Palantir Technologies`,sector:`Technology`,industry:`Software`,marketCap:7e10},{symbol:`UBER`,name:`Uber Technologies`,sector:`Technology`,industry:`Software`,marketCap:15e10},{symbol:`SQ`,name:`Block Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`SHOP`,name:`Shopify Inc.`,sector:`Technology`,industry:`Software`,marketCap:95e9},{symbol:`PYPL`,name:`PayPal Holdings`,sector:`Financial`,industry:`Credit Services`,marketCap:75e9},{symbol:`COIN`,name:`Coinbase Global`,sector:`Financial`,industry:`Capital Markets`,marketCap:55e9},{symbol:`SPY`,name:`SPDR S&P 500 ETF`,sector:`Financial`,industry:`ETF`,marketCap:5e11},{symbol:`QQQ`,name:`Invesco QQQ Trust`,sector:`Financial`,industry:`ETF`,marketCap:25e10},{symbol:`IWM`,name:`iShares Russell 2000`,sector:`Financial`,industry:`ETF`,marketCap:6e10},{symbol:`DIA`,name:`SPDR Dow Jones ETF`,sector:`Financial`,industry:`ETF`,marketCap:35e9},{symbol:`DE`,name:`Deere & Co.`,sector:`Industrials`,industry:`Farm Equipment`,marketCap:12e10},{symbol:`MMM`,name:`3M Company`,sector:`Industrials`,industry:`Conglomerates`,marketCap:7e10},{symbol:`LMT`,name:`Lockheed Martin`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:115e9},{symbol:`UNP`,name:`Union Pacific`,sector:`Industrials`,industry:`Railroads`,marketCap:145e9},{symbol:`FDX`,name:`FedEx Corp.`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:65e9},{symbol:`ISRG`,name:`Intuitive Surgical`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`VRTX`,name:`Vertex Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:115e9},{symbol:`REGN`,name:`Regeneron Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:95e9},{symbol:`BMY`,name:`Bristol-Myers Squibb`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:95e9},{symbol:`CI`,name:`Cigna Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:95e9},{symbol:`ELV`,name:`Elevance Health`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:11e10},{symbol:`ZTS`,name:`Zoetis Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:8e10},{symbol:`MDLZ`,name:`Mondelez Intl.`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:95e9},{symbol:`KHC`,name:`Kraft Heinz`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:4e10},{symbol:`GIS`,name:`General Mills`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:38e9},{symbol:`KMB`,name:`Kimberly-Clark`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:48e9},{symbol:`MAR`,name:`Marriott Intl.`,sector:`Consumer Cyclical`,industry:`Lodging`,marketCap:75e9},{symbol:`BKNG`,name:`Booking Holdings`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:16e10},{symbol:`ABNB`,name:`Airbnb Inc.`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:85e9},{symbol:`ROST`,name:`Ross Stores`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:45e9},{symbol:`TJX`,name:`TJX Companies`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:12e10},{symbol:`ORLY`,name:`O'Reilly Automotive`,sector:`Consumer Cyclical`,industry:`Auto Parts`,marketCap:6e10},{symbol:`PSX`,name:`Phillips 66`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`MPC`,name:`Marathon Petroleum`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`VLO`,name:`Valero Energy`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:45e9},{symbol:`HAL`,name:`Halliburton Co.`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:25e9},{symbol:`DVN`,name:`Devon Energy`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:25e9},{symbol:`AEP`,name:`American Electric Power`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:5e10},{symbol:`EXC`,name:`Exelon Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`SRE`,name:`Sempra Energy`,sector:`Utilities`,industry:`Utilities - Diversified`,marketCap:5e10},{symbol:`SPG`,name:`Simon Property Group`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:55e9},{symbol:`O`,name:`Realty Income`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:48e9},{symbol:`WELL`,name:`Welltower Inc.`,sector:`Real Estate`,industry:`REIT - Healthcare`,marketCap:65e9},{symbol:`DOW`,name:`Dow Inc.`,sector:`Basic Materials`,industry:`Chemicals`,marketCap:38e9},{symbol:`DD`,name:`DuPont de Nemours`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:35e9},{symbol:`NUE`,name:`Nucor Corp.`,sector:`Basic Materials`,industry:`Steel`,marketCap:35e9},{symbol:`STLD`,name:`Steel Dynamics`,sector:`Basic Materials`,industry:`Steel`,marketCap:2e10},{symbol:`EA`,name:`Electronic Arts`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:38e9},{symbol:`TTWO`,name:`Take-Two Interactive`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`ROKU`,name:`Roku Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:1e10},{symbol:`SNAP`,name:`Snap Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:18e9},{symbol:`PINS`,name:`Pinterest Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:22e9},{symbol:`SPOT`,name:`Spotify Technology`,sector:`Communication Services`,industry:`Internet Content`,marketCap:75e9},{symbol:`WDAY`,name:`Workday Inc.`,sector:`Technology`,industry:`Software`,marketCap:65e9},{symbol:`TEAM`,name:`Atlassian Corp.`,sector:`Technology`,industry:`Software`,marketCap:55e9},{symbol:`DDOG`,name:`Datadog Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`NET`,name:`Cloudflare Inc.`,sector:`Technology`,industry:`Software`,marketCap:35e9},{symbol:`SNOW`,name:`Snowflake Inc.`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`MDB`,name:`MongoDB Inc.`,sector:`Technology`,industry:`Software`,marketCap:25e9},{symbol:`ZS`,name:`Zscaler Inc.`,sector:`Technology`,industry:`Software`,marketCap:3e10},{symbol:`FTNT`,name:`Fortinet Inc.`,sector:`Technology`,industry:`Software`,marketCap:75e9},{symbol:`KLAC`,name:`KLA Corp.`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:9e10},{symbol:`AMAT`,name:`Applied Materials`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:16e10},{symbol:`ADI`,name:`Analog Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:1e11},{symbol:`MRVL`,name:`Marvell Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:7e10},{symbol:`ON`,name:`ON Semiconductor`,sector:`Technology`,industry:`Semiconductors`,marketCap:3e10},{symbol:`SMCI`,name:`Super Micro Computer`,sector:`Technology`,industry:`Computer Hardware`,marketCap:3e10},{symbol:`DELL`,name:`Dell Technologies`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e10},{symbol:`HPE`,name:`Hewlett Packard Enterprise`,sector:`Technology`,industry:`Computer Hardware`,marketCap:22e9},{symbol:`SCHW`,name:`Charles Schwab`,sector:`Financial`,industry:`Capital Markets`,marketCap:13e10},{symbol:`USB`,name:`U.S. Bancorp`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`PNC`,name:`PNC Financial`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`TFC`,name:`Truist Financial`,sector:`Financial`,industry:`Banks`,marketCap:55e9},{symbol:`ICE`,name:`Intercontinental Exchange`,sector:`Financial`,industry:`Financial Data`,marketCap:9e10},{symbol:`CME`,name:`CME Group`,sector:`Financial`,industry:`Financial Data`,marketCap:95e9},{symbol:`SPGI`,name:`S&P Global`,sector:`Financial`,industry:`Financial Data`,marketCap:15e10},{symbol:`MCO`,name:`Moody's Corp.`,sector:`Financial`,industry:`Financial Data`,marketCap:85e9},{symbol:`HOOD`,name:`Robinhood Markets`,sector:`Financial`,industry:`Capital Markets`,marketCap:2e10},{symbol:`SOFI`,name:`SoFi Technologies`,sector:`Financial`,industry:`Credit Services`,marketCap:12e9},{symbol:`RIVN`,name:`Rivian Automotive`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:12e9},{symbol:`LCID`,name:`Lucid Group`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e9},{symbol:`ARM`,name:`Arm Holdings`,sector:`Technology`,industry:`Semiconductors`,marketCap:14e10},{symbol:`MSTR`,name:`MicroStrategy`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`DKNG`,name:`DraftKings`,sector:`Consumer Cyclical`,industry:`Gambling`,marketCap:2e10},{symbol:`ETN`,name:`Eaton Corp.`,sector:`Industrials`,industry:`Electrical Equipment`,marketCap:12e10},{symbol:`EMR`,name:`Emerson Electric`,sector:`Industrials`,industry:`Electrical Equipment`,marketCap:7e10},{symbol:`ITW`,name:`Illinois Tool Works`,sector:`Industrials`,industry:`Industrial Products`,marketCap:75e9},{symbol:`CSX`,name:`CSX Corp.`,sector:`Industrials`,industry:`Railroads`,marketCap:7e10},{symbol:`NSC`,name:`Norfolk Southern`,sector:`Industrials`,industry:`Railroads`,marketCap:55e9},{symbol:`WM`,name:`Waste Management`,sector:`Industrials`,industry:`Waste Services`,marketCap:85e9},{symbol:`RSG`,name:`Republic Services`,sector:`Industrials`,industry:`Waste Services`,marketCap:6e10},{symbol:`AIG`,name:`American Intl. Group`,sector:`Financial`,industry:`Insurance`,marketCap:45e9},{symbol:`MET`,name:`MetLife Inc.`,sector:`Financial`,industry:`Insurance`,marketCap:5e10},{symbol:`PRU`,name:`Prudential Financial`,sector:`Financial`,industry:`Insurance`,marketCap:4e10},{symbol:`ALL`,name:`Allstate Corp.`,sector:`Financial`,industry:`Insurance`,marketCap:45e9},{symbol:`TRV`,name:`Travelers Companies`,sector:`Financial`,industry:`Insurance`,marketCap:5e10},{symbol:`AFL`,name:`Aflac Inc.`,sector:`Financial`,industry:`Insurance`,marketCap:55e9},{symbol:`CB`,name:`Chubb Limited`,sector:`Financial`,industry:`Insurance`,marketCap:11e10},{symbol:`PGR`,name:`Progressive Corp.`,sector:`Financial`,industry:`Insurance`,marketCap:14e10},{symbol:`VST`,name:`Vistra Corp.`,sector:`Utilities`,industry:`Utilities - Independent`,marketCap:4e10},{symbol:`CEG`,name:`Constellation Energy`,sector:`Utilities`,industry:`Utilities - Independent`,marketCap:75e9},{symbol:`PCG`,name:`PG&E Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:3e10},{symbol:`ED`,name:`Consolidated Edison`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:35e9},{symbol:`XEL`,name:`Xcel Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`WEC`,name:`WEC Energy Group`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:3e10},{symbol:`EIX`,name:`Edison Intl.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:2e10},{symbol:`AWK`,name:`American Water Works`,sector:`Utilities`,industry:`Utilities - Water`,marketCap:28e9},{symbol:`CTVA`,name:`Corteva Inc.`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:42e9},{symbol:`CF`,name:`CF Industries`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:14e9},{symbol:`MOS`,name:`Mosaic Co.`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:1e10},{symbol:`ALB`,name:`Albemarle Corp.`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:12e9},{symbol:`VMC`,name:`Vulcan Materials`,sector:`Basic Materials`,industry:`Building Materials`,marketCap:35e9},{symbol:`MLM`,name:`Martin Marietta`,sector:`Basic Materials`,industry:`Building Materials`,marketCap:35e9},{symbol:`IFF`,name:`Intl. Flavors & Fragrances`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:22e9},{symbol:`LULU`,name:`Lululemon Athletica`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:35e9},{symbol:`DECK`,name:`Deckers Outdoor`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:22e9},{symbol:`ULTA`,name:`Ulta Beauty`,sector:`Consumer Cyclical`,industry:`Specialty Retail`,marketCap:2e10},{symbol:`EBAY`,name:`eBay Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:28e9},{symbol:`ETSY`,name:`Etsy Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:8e9},{symbol:`CHWY`,name:`Chewy Inc.`,sector:`Consumer Cyclical`,industry:`Specialty Retail`,marketCap:12e9},{symbol:`DG`,name:`Dollar General`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:25e9},{symbol:`DLTR`,name:`Dollar Tree`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:18e9},{symbol:`SYY`,name:`Sysco Corp.`,sector:`Consumer Defensive`,industry:`Food Distribution`,marketCap:38e9},{symbol:`KR`,name:`Kroger Co.`,sector:`Consumer Defensive`,industry:`Grocery Stores`,marketCap:42e9},{symbol:`HSY`,name:`Hershey Co.`,sector:`Consumer Defensive`,industry:`Confectioners`,marketCap:35e9},{symbol:`KDP`,name:`Keurig Dr Pepper`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:48e9},{symbol:`MNST`,name:`Monster Beverage`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:55e9},{symbol:`BIIB`,name:`Biogen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:25e9},{symbol:`MRNA`,name:`Moderna Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:15e9},{symbol:`ILMN`,name:`Illumina Inc.`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:18e9},{symbol:`DXCM`,name:`DexCom Inc.`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:3e10},{symbol:`BSX`,name:`Boston Scientific`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:1e11},{symbol:`MDT`,name:`Medtronic plc`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:105e9},{symbol:`SYK`,name:`Stryker Corp.`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`EW`,name:`Edwards Lifesciences`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:48e9},{symbol:`HCA`,name:`HCA Healthcare`,sector:`Healthcare`,industry:`Medical Care`,marketCap:8e10},{symbol:`VEEV`,name:`Veeva Systems`,sector:`Healthcare`,industry:`Health Info Services`,marketCap:35e9},{symbol:`IDXX`,name:`IDEXX Laboratories`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:42e9},{symbol:`WBD`,name:`Warner Bros. Discovery`,sector:`Communication Services`,industry:`Entertainment`,marketCap:25e9},{symbol:`PARA`,name:`Paramount Global`,sector:`Communication Services`,industry:`Entertainment`,marketCap:8e9},{symbol:`FOX`,name:`Fox Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e9},{symbol:`NWSA`,name:`News Corp.`,sector:`Communication Services`,industry:`Publishing`,marketCap:15e9},{symbol:`LYV`,name:`Live Nation`,sector:`Communication Services`,industry:`Entertainment`,marketCap:22e9},{symbol:`MTCH`,name:`Match Group`,sector:`Communication Services`,industry:`Internet Content`,marketCap:9e9},{symbol:`RBLX`,name:`Roblox Corp.`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`TTD`,name:`Trade Desk`,sector:`Technology`,industry:`Software`,marketCap:45e9},{symbol:`HUBS`,name:`HubSpot Inc.`,sector:`Technology`,industry:`Software`,marketCap:32e9},{symbol:`OKTA`,name:`Okta Inc.`,sector:`Technology`,industry:`Software`,marketCap:15e9},{symbol:`DOCU`,name:`DocuSign Inc.`,sector:`Technology`,industry:`Software`,marketCap:12e9},{symbol:`ZM`,name:`Zoom Video`,sector:`Technology`,industry:`Software`,marketCap:22e9},{symbol:`PATH`,name:`UiPath Inc.`,sector:`Technology`,industry:`Software`,marketCap:8e9},{symbol:`AI`,name:`C3.ai Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e9},{symbol:`IONQ`,name:`IonQ Inc.`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e9},{symbol:`ASTS`,name:`AST SpaceMobile`,sector:`Technology`,industry:`Communication Equipment`,marketCap:5e9}];function n(e,t){return e.length<t?null:e.slice(-t).reduce((e,t)=>e+t,0)/t}function r(e,t){if(e.length<t)return null;let n=2/(t+1),r=e.slice(0,t).reduce((e,t)=>e+t,0)/t;for(let i=t;i<e.length;i++)r=e[i]*n+r*(1-n);return r}function i(e,t=14){if(e.length<t+1)return 50;let n=0,r=0;for(let i=e.length-t;i<e.length;i++){let t=e[i]-e[i-1];t>=0?n+=t:r-=t}return r===0?100:100-100/(1+n/r)}function a(e){if(e.length<26)return{macd:0,signal:0,hist:0};let t=r(e,12),n=r(e,26),i=(t??0)-(n??0),a=i*.85;return{macd:i,signal:a,hist:i-a}}function o(e,t=14){if(e.length<t+1)return 0;let n=[];for(let r=e.length-t;r<e.length;r++){let t=e[r],i=e[r-1];n.push(Math.max(t.h-t.l,Math.abs(t.h-i.c),Math.abs(t.l-i.c)))}return n.reduce((e,t)=>e+t,0)/n.length}function s(e,t=20){let r=n(e,t);if(r==null)return{upper:0,mid:0,lower:0};let i=e.slice(-t).reduce((e,t)=>e+(t-r)**2,0)/t,a=Math.sqrt(i);return{upper:r+2*a,mid:r,lower:r-2*a}}function c(e,t=3){let n=[],r=[];for(let i=t;i<e.length-t;i++){let a=e[i],o=e.slice(i-t,i),s=e.slice(i+1,i+t+1);o.every(e=>a>=e)&&s.every(e=>a>=e)&&n.push({i,v:a}),o.every(e=>a<=e)&&s.every(e=>a<=e)&&r.push({i,v:a})}return{peaks:n,troughs:r}}function l(e,t){return t?(e-t)/t*100:0}function u(e,t=20){if(!e.length)return 0;let n=e.slice(-t).map(e=>e.v||0);return n.reduce((e,t)=>e+t,0)/n.length}function d(e){if(!e?.length||e.length<20)return[];let t=e.map(e=>e.c),r=e.map(e=>e.h),i=e.map(e=>e.l),a=t[t.length-1],s=[],{peaks:l,troughs:u}=c(t,4);if(l.length>=2){let e=l[l.length-2],t=l[l.length-1],n=Math.abs(e.v-t.v)/e.v;n<.03&&t.i-e.i>=5&&s.push({id:`double_top`,label:`Double Top`,bias:`bearish`,confidence:72-n*500})}if(u.length>=2){let e=u[u.length-2],t=u[u.length-1],n=Math.abs(e.v-t.v)/e.v;n<.03&&t.i-e.i>=5&&s.push({id:`double_bottom`,label:`Double Bottom`,bias:`bullish`,confidence:74-n*500})}if(l.length>=3){let[e,t,n]=l.slice(-3);t.v>e.v*1.02&&t.v>n.v*1.02&&Math.abs(e.v-n.v)/e.v<.05&&s.push({id:`head_shoulders`,label:`Head & Shoulders`,bias:`bearish`,confidence:68})}if(u.length>=3){let[e,t,n]=u.slice(-3);t.v<e.v*.98&&t.v<n.v*.98&&Math.abs(e.v-n.v)/e.v<.05&&s.push({id:`inv_head_shoulders`,label:`Inverse H&S`,bias:`bullish`,confidence:70})}let d=t.slice(-20),f=(d[d.length-1]-d[0])/d.length/a*100,p=o(e.slice(-20))/a;f>.15&&p<.025?s.push({id:`channel_up`,label:`Channel Up`,bias:`bullish`,confidence:62}):f<-.15&&p<.025&&s.push({id:`channel_down`,label:`Channel Down`,bias:`bearish`,confidence:62}),f>.08&&r.slice(-10).every((e,t,n)=>t===0||e<=n[t-1]*1.01)&&s.push({id:`wedge_down`,label:`Wedge Down`,bias:`bearish`,confidence:58}),f<-.08&&i.slice(-10).every((e,t,n)=>t===0||e>=n[t-1]*.99)&&s.push({id:`wedge_up`,label:`Wedge Up`,bias:`bullish`,confidence:58});let m=Math.max(...r.slice(-30,-15))-Math.min(...i.slice(-30,-15));if(Math.max(...r.slice(-15))-Math.min(...i.slice(-15))<m*.55){let e=f>=0?`bullish`:`bearish`;s.push({id:e===`bullish`?`triangle_asc`:`triangle_desc`,label:e===`bullish`?`Triangle Ascending`:`Triangle Descending`,bias:e,confidence:60})}let h=n(t,50);h&&Math.abs(a-h)/a<.015&&s.push({id:a>h?`horizontal_resistance`:`horizontal_support`,label:a>h?`Horizontal Resistance`:`Horizontal Support`,bias:a>h?`bearish`:`bullish`,confidence:55});let g=n(t,20);return g&&a>g*1.01?s.push({id:`tl_support`,label:`Trendline Support`,bias:`bullish`,confidence:57}):g&&a<g*.99&&s.push({id:`tl_resistance`,label:`Trendline Resistance`,bias:`bearish`,confidence:57}),s.map(e=>({...e,confidence:Math.round(Math.min(95,Math.max(45,e.confidence)))}))}function f(e,t){if(!e?.length)return[];let r=e.map(e=>e.c),o=t.price??r[r.length-1],s=[],c=i(r),d=n(r,20),f=n(r,50),p=n(r,200),{hist:m}=a(r),h=u(e),g=t.volume??e[e.length-1]?.v??0,ee=Math.max(...e.map(e=>e.h)),_=Math.min(...e.map(e=>e.l));if(t.changePct>=2&&s.push({id:`top_gainers`,label:`Top Gainers`,type:`momentum`}),t.changePct<=-2&&s.push({id:`top_losers`,label:`Top Losers`,type:`momentum`}),o>=ee*.998&&s.push({id:`new_high`,label:`New High`,type:`breakout`}),o<=_*1.002&&s.push({id:`new_low`,label:`New Low`,type:`breakout`}),c>=70&&s.push({id:`overbought`,label:`Overbought`,type:`rsi`}),c<=30&&s.push({id:`oversold`,label:`Oversold`,type:`rsi`}),g>h*2&&s.push({id:`unusual_volume`,label:`Unusual Volume`,type:`volume`}),g>h*1.3&&Math.abs(t.changePct)>3&&s.push({id:`most_active`,label:`Most Active`,type:`volume`}),Math.abs(t.changePct)>5&&s.push({id:`most_volatile`,label:`Most Volatile`,type:`volatility`}),f&&p){let e=n(r.slice(0,-1),50),t=n(r.slice(0,-1),200);e&&t&&e<=t&&f>p&&s.push({id:`golden_cross`,label:`Golden Cross`,type:`trend`}),e&&t&&e>=t&&f<p&&s.push({id:`death_cross`,label:`Death Cross`,type:`trend`}),o>f?s.push({id:`above_sma50`,label:`Above SMA50`,type:`trend`}):s.push({id:`below_sma50`,label:`Below SMA50`,type:`trend`}),o>p?s.push({id:`above_sma200`,label:`Above SMA200`,type:`trend`}):s.push({id:`below_sma200`,label:`Below SMA200`,type:`trend`})}return m>0&&t.changePct>0&&s.push({id:`macd_bullish`,label:`MACD Bullish`,type:`macd`}),m<0&&t.changePct<0&&s.push({id:`macd_bearish`,label:`MACD Bearish`,type:`macd`}),d&&l(o,d)>5&&s.push({id:`extended`,label:`Extended Above SMA20`,type:`trend`}),d&&l(o,d)<-5&&s.push({id:`pullback`,label:`Pullback to SMA20`,type:`trend`}),s}function p(e,t,r=[]){if(!e?.length)return m(t);let c=e.map(e=>e.c),l=t.price??c[c.length-1],u=i(c),d=n(c,20),f=n(c,50),p=n(c,200),{hist:h,macd:g}=a(c),ee=o(e),_=s(c),v=c.length>=6?(c[c.length-1]-c[c.length-6])/c[c.length-6]*100:t.changePct??0,y=[];u<35?y.push({name:`RSI Oversold`,score:18,weight:`bullish`}):u>65?y.push({name:`RSI Overbought`,score:-18,weight:`bearish`}):y.push({name:`RSI Neutral`,score:(50-u)*.3,weight:`neutral`});let b=0;d&&l>d?b+=8:b-=8,f&&l>f?b+=12:b-=12,p&&l>p?b+=15:b-=10,y.push({name:`Moving Avg Trend`,score:b,weight:b>0?`bullish`:`bearish`}),y.push({name:`MACD Momentum`,score:h*2,weight:h>0?`bullish`:`bearish`}),y.push({name:`5D Momentum`,score:v*1.5,weight:v>0?`bullish`:`bearish`}),_.upper&&l>_.upper?y.push({name:`Above Upper BB`,score:-10,weight:`bearish`}):_.lower&&l<_.lower&&y.push({name:`Below Lower BB`,score:10,weight:`bullish`});for(let e of r){let t=e.bias===`bullish`?e.confidence*.15:-e.confidence*.15;y.push({name:e.label,score:t,weight:e.bias})}let te=y.reduce((e,t)=>e+t.score,0),x=Math.max(-100,Math.min(100,te)),S=`neutral`;x>12?S=`bullish`:x<-12&&(S=`bearish`);let ne=Math.round(Math.min(92,Math.max(48,55+Math.abs(x)*.35))),C=x/100*ee*4,w=Math.max(.01,l+C),T=(w-l)/l*100,E=Math.abs(x)>25?`5-10 days`:`3-7 days`;return{direction:S,confidence:ne,score:Math.round(x),priceTarget:Math.round(w*100)/100,targetPct:Math.round(T*100)/100,horizon:E,factors:y.slice(0,6),rsi:Math.round(u*10)/10,sma20:d,sma50:f,sma200:p,atr:Math.round(ee*100)/100,macdHist:Math.round(h*100)/100}}function m(e){return{direction:(e?.changePct??0)>0?`bullish`:(e?.changePct??0)<0?`bearish`:`neutral`,confidence:52,score:e?.changePct??0,priceTarget:e?.price??0,targetPct:0,horizon:`3-7 days`,factors:[],rsi:50,sma20:null,sma50:null,sma200:null,atr:0,macdHist:0}}function h(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function g(e,t,n,r,i=2){let a=n+h(e+t)()*(r-n),o=10**i;return Math.round(a*o)/o}function ee(e,t){if(!e?.length)return{};let n=e.map(e=>e.c),r=t??n[n.length-1],i=e=>{let t=n[Math.max(0,n.length-1-e)];return t?(r-t)/t*100:null},a=new Date(new Date().getFullYear(),0,1).getTime(),o=e.findIndex(e=>e.t>=a),s=o>=0?(r-e[o].c)/e[o].c*100:i(60);return{perf1D:null,perf5D:i(5),perf1M:i(21),perf3M:i(63),perf6M:i(126),perfYTD:s,perf1Y:i(Math.min(252,n.length-1)),perf5Y:i(Math.min(1260,n.length-1))}}function _(e,t,n=null){let r=e.symbol,i=e.price||100,a=e.marketCap||i*g(r,`shares`,5e8,15e9,0),o=a/i,s=g(r,`float`,.55,.95,2),c=o*s,l=n?.epsTTM??g(r,`eps`,.5,18,2),u=n?.epsForward??l*g(r,`epsfwd`,1.02,1.25,2),d=n?.peTTM??(l>0?Math.round(i/l*10)/10:g(r,`pe`,8,45,1)),f=u>0?Math.round(i/u*10)/10:d*g(r,`pefwd`,.8,1.1,1),p=n?.epsGrowthTTMYoy??g(r,`epsg`,-5,35,1),m=p>0?Math.round(d/p*100)/100:g(r,`peg`,.8,3.5,2),h=a*g(r,`rev`,.15,.55,2),_=h/o,v=Math.round(a/h*10)/10,y=i*g(r,`pb`,.3,4,2),b=Math.round(i/y*10)/10,te=h*g(r,`ebitda`,.12,.35,2),x=a*g(r,`ev`,1.05,1.35,2),S=Math.round(x/te*10)/10,ne=Math.round(x/h*10)/10,C=te*g(r,`fcf`,.5,.85,2),w=Math.round(a/C*10)/10,T=n?.grossMarginTTM??g(r,`gm`,25,75,1),E=n?.operatingMarginTTM??g(r,`om`,8,35,1),re=n?.netProfitMarginTTM??g(r,`nm`,5,28,1),ie=n?.roeTTM??g(r,`roe`,8,45,1),ae=n?.roaTTM??g(r,`roa`,3,18,1),oe=g(r,`roic`,6,30,1),D=n?.dividendYield??g(r,`divy`,0,4.5,2),O=D/100*i,se=g(r,`payout`,15,65,0),ce=Math.floor(g(r,`exdiv`,5,90,0)),le=n?.beta??g(r,`beta`,.5,2.2,2),ue=n?.high52??i*g(r,`hi52`,1.02,1.35,2),de=n?.low52??i*g(r,`lo52`,.65,.98,2),fe=e.volume?e.volume*g(r,`av10`,.8,1.2,2):g(r,`vol10`,1e6,5e7,0),pe=fe*g(r,`av90`,.85,1.15,2),me=g(r,`short`,.5,18,2),he=g(r,`shortr`,.5,8,1),ge=g(r,`ins`,.1,25,1),_e=g(r,`inst`,45,92,1),ve=i*g(r,`target`,.9,1.35,2),ye=ee(t,i);ye.perf1D=e.changePct??ye.perf1D;let be=g(r,`revg`,-2,25,1),xe=g(r,`de`,.2,2.5,2),Se=g(r,`cr`,.8,3.5,2),Ce=Se*g(r,`qr`,.6,.95,2),we=Math.floor(g(r,`emp`,5e3,25e4,0));return{pe:d,peFwd:f,peg:m,ps:v,pb:b,evEbitda:S,evRevenue:ne,pcf:w,priceToBook:b,eps:l,epsFwd:u,epsGrowth:p,revenue:h,revenuePerShare:_,revenueGrowth:be,grossMargin:T,opMargin:E,netMargin:re,roe:ie,roa:ae,roic:oe,ebitda:te,dividend:O,dividendYield:D,payoutRatio:se,exDividendDate:`in ${ce}d`,debtEquity:xe,currentRatio:Se,quickRatio:Ce,bookValue:y,sharesOutstanding:o,floatShares:c,floatPct:s*100,employees:we,beta:le,high52:ue,low52:de,avgVol10:fe,avgVol90:pe,distanceFromHigh:(i-ue)/ue*100,distanceFromLow:(i-de)/de*100,shortPct:me,shortRatio:he,insiderPct:ge,instPct:_e,targetPrice:ve,upside:(ve-i)/i*100,...ye,peTTM:d,div:O}}function v(e){let t=e?.metric;return t?{peTTM:t.peBasicExclExtraTTM??t.peTTM,peFwd:t.peForwardAnnual,peg:t.pegRatio,ps:t.psTTM??t.psAnnual,pb:t.pbAnnual,evEbitda:t.evEbitdaTTM??t.enterpriseValueEbitdaTTM,epsTTM:t.epsBasicExclExtraItemsTTM??t.epsTTM,epsForward:t.epsForwardAnnual,epsGrowthTTMYoy:t.epsGrowthTTMYoy??t.epsGrowthQuarterlyYoy,dividendYield:t.dividendYieldIndicatedAnnual??t.currentDividendYieldTTM,beta:t.beta,high52:t[`52WeekHigh`],low52:t[`52WeekLow`],grossMarginTTM:t.grossMarginTTM,operatingMarginTTM:t.operatingMarginTTM,netProfitMarginTTM:t.netProfitMarginTTM,roeTTM:t.roeTTM,roaTTM:t.roaRfy,revenueGrowth:t.revenueGrowth3Y??t.revenueGrowth5Y,sharesOutstanding:t.sharesOutstanding,floatShares:t.floatShares}:null}var y=[{id:`key`,title:`Key Stats`,fields:[{key:`marketCap`,label:`Market cap`,fmt:`mcap`,fromQuote:!0},{key:`sharesOutstanding`,label:`Shares outstanding`,fmt:`shares`},{key:`floatShares`,label:`Float`,fmt:`shares`},{key:`floatPct`,label:`Float %`,fmt:`pct`},{key:`employees`,label:`Employees`,fmt:`num`},{key:`beta`,label:`Beta`,fmt:`num2`}]},{id:`valuation`,title:`Valuation`,fields:[{key:`pe`,label:`P/E (TTM)`,fmt:`num2`},{key:`peFwd`,label:`Forward P/E`,fmt:`num2`},{key:`peg`,label:`PEG Ratio`,fmt:`num2`},{key:`ps`,label:`Price/Sales`,fmt:`num2`},{key:`pb`,label:`Price/Book`,fmt:`num2`},{key:`evEbitda`,label:`EV/EBITDA`,fmt:`num2`},{key:`evRevenue`,label:`EV/Revenue`,fmt:`num2`},{key:`pcf`,label:`Price/Cash Flow`,fmt:`num2`}]},{id:`financials`,title:`Financials`,fields:[{key:`eps`,label:`EPS (TTM)`,fmt:`money`},{key:`epsFwd`,label:`EPS (Forward)`,fmt:`money`},{key:`epsGrowth`,label:`EPS Growth YoY`,fmt:`pct`},{key:`revenue`,label:`Revenue (TTM)`,fmt:`mcap`},{key:`revenuePerShare`,label:`Revenue/Share`,fmt:`money`},{key:`revenueGrowth`,label:`Revenue Growth`,fmt:`pct`},{key:`ebitda`,label:`EBITDA`,fmt:`mcap`},{key:`grossMargin`,label:`Gross Margin`,fmt:`pct`},{key:`opMargin`,label:`Operating Margin`,fmt:`pct`},{key:`netMargin`,label:`Net Margin`,fmt:`pct`},{key:`roe`,label:`ROE`,fmt:`pct`},{key:`roa`,label:`ROA`,fmt:`pct`},{key:`roic`,label:`ROIC`,fmt:`pct`},{key:`debtEquity`,label:`Debt/Equity`,fmt:`num2`},{key:`currentRatio`,label:`Current Ratio`,fmt:`num2`},{key:`quickRatio`,label:`Quick Ratio`,fmt:`num2`}]},{id:`dividends`,title:`Dividends`,fields:[{key:`dividendYield`,label:`Dividend Yield`,fmt:`pct`},{key:`dividend`,label:`Dividend/Share`,fmt:`money`},{key:`payoutRatio`,label:`Payout Ratio`,fmt:`pct`},{key:`exDividendDate`,label:`Ex-Dividend`,fmt:`text`}]},{id:`performance`,title:`Performance`,fields:[{key:`perf1D`,label:`1 Day`,fmt:`pct`},{key:`perf5D`,label:`5 Days`,fmt:`pct`},{key:`perf1M`,label:`1 Month`,fmt:`pct`},{key:`perf3M`,label:`3 Months`,fmt:`pct`},{key:`perf6M`,label:`6 Months`,fmt:`pct`},{key:`perfYTD`,label:`YTD`,fmt:`pct`},{key:`perf1Y`,label:`1 Year`,fmt:`pct`},{key:`perf5Y`,label:`5 Years`,fmt:`pct`}]},{id:`technicals`,title:`Price & Volume`,fields:[{key:`high52`,label:`52W High`,fmt:`money`},{key:`low52`,label:`52W Low`,fmt:`money`},{key:`distanceFromHigh`,label:`From 52W High`,fmt:`pct`},{key:`distanceFromLow`,label:`From 52W Low`,fmt:`pct`},{key:`avgVol10`,label:`Avg Vol (10D)`,fmt:`vol`},{key:`avgVol90`,label:`Avg Vol (90D)`,fmt:`vol`},{key:`volume`,label:`Volume`,fmt:`vol`,fromQuote:!0},{key:`relVolume`,label:`Rel Volume`,fmt:`mult`,fromTa:!0}]},{id:`ownership`,title:`Ownership & Short`,fields:[{key:`insiderPct`,label:`Insider %`,fmt:`pct`},{key:`instPct`,label:`Institutional %`,fmt:`pct`},{key:`shortPct`,label:`Short % Float`,fmt:`pct`},{key:`shortRatio`,label:`Short Ratio`,fmt:`num2`},{key:`targetPrice`,label:`Analyst Target`,fmt:`money`},{key:`upside`,label:`Upside to Target`,fmt:`pct`}]}];function b(e,t,n,r){if(e==null||e===``||Number.isNaN(e))return`—`;switch(t){case`money`:return`$${Number(e).toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}`;case`mcap`:return e>=0xe8d4a51000?`$${(e/0xe8d4a51000).toFixed(2)}T`:e>=1e9?`$${(e/1e9).toFixed(2)}B`:e>=1e6?`$${(e/1e6).toFixed(1)}M`:`$${Number(e).toLocaleString()}`;case`shares`:return e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(1)}M`:Number(e).toLocaleString();case`vol`:return e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:Number(e).toLocaleString();case`pct`:{let t=Number(e);return`${t>=0?`+`:``}${t.toFixed(2)}%`}case`mult`:return`${Number(e).toFixed(2)}x`;case`num2`:return Number(e).toFixed(2);case`num`:return Number(e).toLocaleString();case`text`:return String(e);default:return String(e)}}function te(e,t,n,r){return e.fromQuote?e.key===`marketCap`?t.marketCap:e.key===`volume`?t.volume:t[e.key]:e.fromTa?r?.[e.key===`relVolume`?`relVolume`:e.key]:n?.[e.key]}var x=new Map;function S(e,t){if(x.has(e))return x.get(e);let n=C(e),r=t.price||100,i=[],a=Date.now();for(let e=59;e>=0;e--){let t=r,o=(n()-.47)*r*.022,s=Math.max(1,t+o),c=Math.max(t,s)*(1+n()*.012),l=Math.min(t,s)*(1-n()*.012),u=Math.floor(5e5+n()*3e7);i.push({t:a-e*864e5,o:t,h:c,l,c:s,v:u}),r=s}return x.set(e,i),i}function ne(e,t){let n=x.get(e);if(!n?.length)return S(e,t);let r=n[n.length-1];return r.c=t.price,r.h=Math.max(r.h,t.high??t.price),r.l=Math.min(r.l,t.low??t.price),t.volume&&(r.v=t.volume),n}function C(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function w(e,{finnhubMetrics:t=null}={}){let n=ne(e.symbol,e),r=d(n),i=f(n,e),a=p(n,e,r),o=u(n),s=_(e,n,t);return{...e,candles:n,patterns:r,signals:i,prediction:a,ta:{rsi:a.rsi,sma20:a.sma20,sma50:a.sma50,sma200:a.sma200,atr:a.atr,relVolume:o?(e.volume||o)/o:1},fundamentals:s,signalLabels:i.map(e=>e.label),patternLabels:r.map(e=>e.label),primarySignal:i[0]?.label||r[0]?.label||`—`}}function T(e){let t=[...e.values()],n=t.length||1,r=t.filter(e=>e.changePct>0).length,i=t.filter(e=>e.changePct<0).length,a=t.filter(e=>e.ta?.sma50&&e.price>e.ta.sma50).length,o=t.filter(e=>e.ta?.sma200&&e.price>e.ta.sma200).length,s=t.filter(e=>e.signals?.some(e=>e.id===`new_high`)).length,c=t.filter(e=>e.signals?.some(e=>e.id===`new_low`)).length;return{advancing:r,declining:i,advPct:r/n*100,decPct:i/n*100,aboveSma50:a,belowSma50:n-a,aboveSma50Pct:a/n*100,aboveSma200:o,belowSma200:n-o,aboveSma200Pct:o/n*100,newHigh:s,newLow:c,newHighPct:s/(s+c||1)*100}}var E=`https://finnhub.io/api/v1`,re=5,ie=1100;function ae(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function oe(e){return 20+ae(e)()*480}var D=new Map,O=new Map,se=24;function ce(){if(!D.size)for(let e of t){let t=oe(e.symbol);D.set(e.symbol,t);let n=ae(e.symbol+`hist`),r=[],i=t*.95;for(let e=0;e<se;e++)i=Math.max(1,i*(1+(n()-.48)*.02)),r.push(i);O.set(e.symbol,r)}}function le(){ce();for(let e of t){let t=D.get(e.symbol),n=(Math.random()-.48)*t*.008,r=Math.max(1,t+n);D.set(e.symbol,r);let i=O.get(e.symbol)||[];i.push(r),i.length>se&&i.shift(),O.set(e.symbol,i)}}var ue=new Map;function de(e){return ue.get(e)||O.get(e)||[]}function fe(e,t){let n=[...ue.get(e)||O.get(e)||[],t];return n.length>se&&n.shift(),ue.set(e,n),n}function pe(e){ce();let t=D.get(e.symbol),n=ae(e.symbol+Date.now().toString().slice(0,-4)),r=t*(.98+n()*.04),i=Math.max(t,r)*(1+n()*.02),a=Math.min(t,r)*(1-n()*.02),o=r*(.995+n()*.01),s=t-o,c=s/o*100,l=Math.floor(5e5+n()*5e7);return{symbol:e.symbol,price:t,open:r,high:i,low:a,prevClose:o,change:s,changePct:c,volume:l,marketCap:e.marketCap,sector:e.sector,industry:e.industry,name:e.name,timestamp:Date.now(),sparkline:de(e.symbol)}}function me(e,t=60){ce();let n=D.get(e)||100,r=ae(e+`candles`),i=[],a=Date.now();for(let e=t-1;e>=0;e--){let t=n,o=(r()-.48)*n*.025,s=Math.max(1,t+o),c=Math.max(t,s)*(1+r()*.01),l=Math.min(t,s)*(1-r()*.01);i.push({t:a-e*864e5,o:t,h:c,l,c:s,v:Math.floor(r()*1e7)}),n=s}return i}var he=[`Markets rally on strong earnings outlook`,`Fed signals cautious approach to rate cuts`,`Tech sector leads broad market gains`,`Energy stocks slip as oil prices retreat`,`Analysts upgrade outlook for semiconductor stocks`,`Consumer spending data beats expectations`,`Treasury yields edge higher in morning trade`,`IPO market shows signs of renewed activity`];function ge(e){let t=ae(e+`news`);return Array.from({length:5},(n,r)=>({headline:e?`${e}: ${he[Math.floor(t()*he.length)]}`:he[Math.floor(t()*he.length)],source:[`Reuters`,`Bloomberg`,`CNBC`,`MarketWatch`][Math.floor(t()*4)],url:`#`,datetime:Math.floor(Date.now()/1e3)-r*3600-Math.floor(t()*7200),symbol:e||void 0}))}async function _e(e,t){let n=`${E}/quote?symbol=${encodeURIComponent(e)}&token=${t}`,r=await fetch(n);if(!r.ok)throw Error(`Finnhub ${r.status}`);let i=await r.json();if(!i.c)throw Error(`No quote data`);let a=i.c-i.pc,o=i.pc?a/i.pc*100:0;return{symbol:e,price:i.c,open:i.o,high:i.h,low:i.l,prevClose:i.pc,change:a,changePct:o,volume:null,timestamp:(i.t||Date.now()/1e3)*1e3}}async function ve(e,t){let n=`${E}/stock/profile2?symbol=${encodeURIComponent(e)}&token=${t}`,r=await fetch(n);return r.ok?r.json():null}function ye(e){return new Promise(t=>setTimeout(t,e))}function be(e,t,n){return{...e,name:n?.name||t?.name||e.symbol,sector:t?.sector||n?.finnhubIndustry||`—`,industry:t?.industry||n?.finnhubIndustry||`—`,marketCap:n?.marketCapitalization?n.marketCapitalization*1e6:t?.marketCap,volume:e.volume??Math.floor(Math.random()*2e7+1e6),sparkline:de(e.symbol)}}async function xe(e){let n=new Map(t.map(e=>[e.symbol,e])),r=t.map(e=>e.symbol);if(!e.apiKey?.trim()||e.useMockData){le();let e=new Map;for(let n of t)e.set(n.symbol,w(pe(n)));return{quotes:e,source:`mock`}}let i=new Map,a=e.apiKey.trim();for(let e=0;e<r.length;e+=re){let t=r.slice(e,e+re),o=await Promise.allSettled(t.map(async e=>{let[t,r]=await Promise.all([_e(e,a),ve(e,a).catch(()=>null)]);return be(t,n.get(e),r)}));for(let e of o)if(e.status===`fulfilled`){let t=e.value;i.set(t.symbol,w({...t,sparkline:fe(t.symbol,t.price)}))}e+re<r.length&&await ye(ie)}for(let e of t)i.has(e.symbol)||i.set(e.symbol,w(pe(e)));return{quotes:i,source:`finnhub`}}async function Se(e,t){let n=`${E}/stock/metric?symbol=${encodeURIComponent(e)}&metric=all&token=${t}`,r=await fetch(n);return r.ok?v(await r.json()):null}async function Ce(e,n){let r=t.find(t=>t.symbol===e);if(!n.apiKey?.trim()||n.useMockData)return r?w(pe(r)):null;try{let t=n.apiKey.trim(),[i,a,o]=await Promise.all([_e(e,t),ve(e,t),Se(e,t).catch(()=>null)]);return w(be(i,r,a),{finnhubMetrics:o})}catch{return r?w(pe(r)):null}}async function we(e,t){if(!t.apiKey?.trim()||t.useMockData)return null;try{return await Se(e,t.apiKey.trim())}catch{return null}}async function Te(e,t,n=`D`,r=60){if(!t.apiKey?.trim()||t.useMockData)return me(e,r);try{let i=Math.floor(Date.now()/1e3),a=i-r*86400,o=`${E}/stock/candle?symbol=${encodeURIComponent(e)}&resolution=${n}&from=${a}&to=${i}&token=${t.apiKey.trim()}`,s=await fetch(o);if(!s.ok)throw Error(`candle fetch failed`);let c=await s.json();return c.s!==`ok`||!c.t?.length?me(e,r):c.t.map((e,t)=>({t:e*1e3,o:c.o[t],h:c.h[t],l:c.l[t],c:c.c[t],v:c.v[t]}))}catch{return me(e,r)}}async function Ee(e,t){if(!t.apiKey?.trim()||t.useMockData)return ge(e);try{let n=new Date().toISOString().slice(0,10),r=new Date(Date.now()-7*864e5).toISOString().slice(0,10),i=`${E}/company-news?symbol=${encodeURIComponent(e)}&from=${r}&to=${n}&token=${t.apiKey.trim()}`,a=await fetch(i);if(!a.ok)throw Error(`news failed`);return(await a.json()||[]).slice(0,8)}catch{return ge(e)}}async function De(e){if(!e.apiKey?.trim()||e.useMockData)return ge(null);try{let t=`${E}/news?category=general&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`news failed`);return(await n.json()||[]).slice(0,20)}catch{return ge(null)}}async function Oe(e){if(!e.apiKey?.trim()||e.useMockData){let e=new Date().getHours(),t=e>=9&&e<16;return{isOpen:t,label:t?`Market Open (simulated)`:`Market Closed (simulated)`}}try{let t=`${E}/stock/market-status?exchange=US&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`status failed`);let r=await n.json();return{isOpen:!!r.isOpen,label:r.isOpen?`US Market Open`:`US Market Closed`,session:r.session}}catch{return{isOpen:!1,label:`Market status unavailable`}}}async function ke(e){if(!e?.trim())return{valid:!1,message:`API key is required`};try{return await _e(`AAPL`,e.trim())?{valid:!0,message:`Connected to Finnhub`}:{valid:!1,message:`Invalid response`}}catch(e){return{valid:!1,message:e.message||`Connection failed`}}}var Ae={apiKey:``,refreshInterval:30,useMockData:!0,watchlist:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`],theme:`dark`,pushNotifications:!1,alertSound:!0},je={sector:``,industry:``,minChange:``,maxChange:``,minVolume:``,minMarketCap:``,search:``,signal:``,pattern:``,prediction:``,minRsi:``,maxRsi:``,minPe:``,maxPe:``,minPeg:``,maxPeg:``,minDivYield:``,aboveSma50:``,aboveSma200:``,formula:``},k=He(),A={...je},j=Ue(),M=We(),N=qe(),P=[],F=Ge(),Me=Ke(),Ne=`all`,Pe=new Map,Fe={key:`changePct`,dir:`desc`},Ie=null,Le=null,Re=`mock`,ze=null,Be=new Set,Ve=null;function He(){try{let e=localStorage.getItem(`stockviz-settings`);if(e)return{...Ae,...JSON.parse(e)}}catch{}return{...Ae}}function Ue(){try{let e=localStorage.getItem(`stockviz-saved-filters`);if(e)return JSON.parse(e)}catch{}return[]}function We(){try{let e=localStorage.getItem(`stockviz-favorites`);if(e)return JSON.parse(e)}catch{}return[`AAPL`,`NVDA`,`MSFT`]}function Ge(){try{let e=localStorage.getItem(`stockviz-alerts`);if(e)return JSON.parse(e)}catch{}return[]}function Ke(){try{let e=localStorage.getItem(`stockviz-multichart`);if(e)return JSON.parse(e)}catch{}return{id:`2x2`,symbols:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`]}}function qe(){try{let e=localStorage.getItem(`stockviz-portfolio`);if(e)return JSON.parse(e)}catch{}return[{symbol:`AAPL`,shares:10,costBasis:175},{symbol:`NVDA`,shares:5,costBasis:450},{symbol:`MSFT`,shares:8,costBasis:380}]}function I(e,t){localStorage.setItem(e,JSON.stringify(t))}function Je(){I(`stockviz-settings`,k),Ye(k.theme),z(`settings`)}function Ye(e){document.documentElement.setAttribute(`data-theme`,e||`dark`)}function L(){return{...k}}function Xe(e){k={...k,...e},e.apiKey!==void 0&&(k.useMockData=!e.apiKey?.trim()),Je()}function Ze(){k.theme=k.theme===`dark`?`light`:`dark`,Je()}function Qe(){return{...A}}function $e(e,{preset:t=null}={}){A={...A,...e},t!==null&&(Ne=t),z(`filters`)}function et(e,t){A={...je,...t},Ne=e,z(`filters`)}function tt(){return Ne}function nt(){return{...Fe}}function rt(e){Fe.key===e?Fe.dir=Fe.dir===`asc`?`desc`:`asc`:Fe={key:e,dir:`desc`},z(`sort`)}function R(){return Pe}function it(e,t={}){Pe=e,Le=t.fetchedAt??Date.now(),Re=t.source??Re,z(`quotes`)}function at(e){ze=e,z(`status`)}function ot(){return ze}function st(){return{lastFetchAt:Le,dataSource:Re,selectedSymbol:Ie}}function ct(e){Ie=e,z(`select`)}function lt(){return[...M]}function ut(e){return M=M.includes(e)?M.filter(t=>t!==e):[...M,e],I(`stockviz-favorites`,M),z(`favorites`),M.includes(e)}function dt(e){return M.includes(e)}function ft(){return[...N]}function pt({symbol:e,shares:t,costBasis:n}){let r=N.find(t=>t.symbol===e);r?(r.shares+=Number(t),r.costBasis=(r.costBasis+Number(n))/2):N=[...N,{symbol:e,shares:Number(t),costBasis:Number(n)}],I(`stockviz-portfolio`,N),z(`portfolio`)}function mt(e){N=N.filter(t=>t.symbol!==e),I(`stockviz-portfolio`,N),z(`portfolio`)}function ht(){return[...P]}function gt(e){return P.includes(e)?P=P.filter(t=>t!==e):P.length<4&&(P=[...P,e]),z(`compare`),P.includes(e)}function _t(){P=[],z(`compare`)}function vt(){return[...F]}function yt(){return F.filter(e=>e.active&&!e.triggered).length}function bt(){return F.filter(e=>e.triggered).length}function xt({symbol:e,type:t,value:n,note:r=``}){let i={id:Date.now().toString(),symbol:e,type:t,value:String(n),note:r,active:!0,triggered:!1,triggeredAt:null,triggerDetail:null,createdAt:Date.now()};return F=[...F,i],I(`stockviz-alerts`,F),z(`alerts`),i}function St(e){F=F.filter(t=>t.id!==e),I(`stockviz-alerts`,F),z(`alerts`)}function Ct(e){F=F.map(t=>t.id===e?{...t,active:!t.active}:t),I(`stockviz-alerts`,F),z(`alerts`)}function wt(e,t){F=F.map(n=>n.id===e?{...n,triggered:!0,triggeredAt:Date.now(),triggerDetail:t}:n),I(`stockviz-alerts`,F),z(`alerts`)}function Tt(){F=F.filter(e=>!e.triggered),I(`stockviz-alerts`,F),z(`alerts`)}function Et(e){F=F.map(t=>t.id===e?{...t,triggered:!1,triggeredAt:null,triggerDetail:null,active:!0}:t),I(`stockviz-alerts`,F),z(`alerts`)}function Dt(){F=F.map(e=>e.triggered?{...e,triggered:!1,triggeredAt:null,triggerDetail:null,active:!0}:e),I(`stockviz-alerts`,F),z(`alerts`)}function Ot(){return{...Me}}function kt(e){Me={...e},I(`stockviz-multichart`,Me),z(`multichart`)}function At(){return[...j]}function jt(e){let t={id:Date.now().toString(),name:e,filters:{...A}};return j=[...j,t],I(`stockviz-saved-filters`,j),z(`filters`),t}function Mt(e){j=j.filter(t=>t.id!==e),I(`stockviz-saved-filters`,j),z(`filters`)}function Nt(e){let t=j.find(t=>t.id===e);t&&(A={...je,...t.filters},Ne=`custom`,z(`filters`))}function Pt(e){return Be.add(e),()=>Be.delete(e)}function z(e=`full`){Be.forEach(t=>t(e))}function Ft(e){It();let t=async()=>{await e()};t(),Ve=setInterval(t,k.refreshInterval*1e3)}function It(){Ve&&=(clearInterval(Ve),null)}function Lt(){A={...je},Ne=`all`,z(`filters`)}Ye(k.theme);function Rt(e){let t=vt().filter(e=>e.active&&!e.triggered),n=[];for(let r of t){let t=e.get(r.symbol);if(!t)continue;let i=!1,a=``;switch(r.type){case`price_above`:i=t.price>=Number(r.value),a=`$${t.price.toFixed(2)} ≥ $${r.value}`;break;case`price_below`:i=t.price<=Number(r.value),a=`$${t.price.toFixed(2)} ≤ $${r.value}`;break;case`change_above`:i=t.changePct>=Number(r.value),a=`${t.changePct.toFixed(2)}% ≥ ${r.value}%`;break;case`change_below`:i=t.changePct<=Number(r.value),a=`${t.changePct.toFixed(2)}% ≤ ${r.value}%`;break;case`rsi_above`:i=(t.ta?.rsi??0)>=Number(r.value),a=`RSI ${t.ta?.rsi?.toFixed(1)} ≥ ${r.value}`;break;case`rsi_below`:i=(t.ta?.rsi??100)<=Number(r.value),a=`RSI ${t.ta?.rsi?.toFixed(1)} ≤ ${r.value}`;break;case`signal`:i=t.signals?.some(e=>e.id===r.value),a=`Signal: ${r.value}`;break;case`pattern`:i=t.patterns?.some(e=>e.id===r.value),a=`Pattern: ${r.value}`;break;case`prediction`:i=t.prediction?.direction===r.value,a=`Prediction: ${t.prediction?.direction} (${t.prediction?.confidence}%)`;break;default:break}i&&(wt(r.id,a),n.push({...r,detail:a}))}return n}var zt=[{id:`price_above`,label:`Price Above`,needsValue:!0,placeholder:`200.00`},{id:`price_below`,label:`Price Below`,needsValue:!0,placeholder:`150.00`},{id:`change_above`,label:`Change % Above`,needsValue:!0,placeholder:`5`},{id:`change_below`,label:`Change % Below`,needsValue:!0,placeholder:`-5`},{id:`rsi_above`,label:`RSI Above`,needsValue:!0,placeholder:`70`},{id:`rsi_below`,label:`RSI Below`,needsValue:!0,placeholder:`30`},{id:`signal`,label:`Signal Detected`,needsValue:!0,valueType:`signal`},{id:`pattern`,label:`Pattern Detected`,needsValue:!0,valueType:`pattern`},{id:`prediction`,label:`Prediction Direction`,needsValue:!0,valueType:`prediction`}],Bt;function Vt(){Bt=document.getElementById(`toast-root`)}function B(e,t=`info`,n=2800){if(!Bt)return;let r=document.createElement(`div`);r.className=`toast toast-${t}`,r.textContent=e,Bt.appendChild(r),requestAnimationFrame(()=>r.classList.add(`show`)),setTimeout(()=>{r.classList.remove(`show`),setTimeout(()=>r.remove(),300)},n)}function V(e,t=2){return e==null||Number.isNaN(e)?`—`:e.toLocaleString(`en-US`,{minimumFractionDigits:t,maximumFractionDigits:t})}function Ht(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}`}function H(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}%`}function Ut(e){return e==null?`—`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toLocaleString()}function Wt(e){return e==null?`—`:e>=0xe8d4a51000?`${(e/0xe8d4a51000).toFixed(2)}T`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(0)}M`:e.toLocaleString()}function Gt(e){return e?new Date(e).toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}):``}function U(e){return e==null?``:e>0?`pos`:e<0?`neg`:`flat`}function Kt(e){let t=Math.max(-5,Math.min(5,e));if(t>=0){let e=t/5;return`rgb(${Math.round(20+(1-e)*30)},${Math.round(80+e*120)},${Math.round(40+(1-e)*20)})`}let n=Math.abs(t)/5;return`rgb(${Math.round(120+n*135)},${Math.round(40+(1-n)*30)},${Math.round(40+(1-n)*20)})`}function qt(e,t,{width:n=72,height:r=24,color:i=null}={}){let a=t.map(e=>typeof e==`number`?e:e.c??e.price??0);if(!a.length)return;let o=window.devicePixelRatio||1;e.width=n*o,e.height=r*o,e.style.width=`${n}px`,e.style.height=`${r}px`;let s=e.getContext(`2d`);s.scale(o,o);let c=Math.min(...a),l=Math.max(...a)-c||1,u=a[a.length-1]>=a[0],d=i||(u?`#3fb950`:`#f85149`);s.clearRect(0,0,n,r),s.beginPath(),a.forEach((e,t)=>{let i=t/(a.length-1||1)*(n-2)+1,o=r-2-(e-c)/l*(r-4);t===0?s.moveTo(i,o):s.lineTo(i,o)}),s.strokeStyle=d,s.lineWidth=1.5,s.lineJoin=`round`,s.stroke();let f=s.createLinearGradient(0,0,0,r);f.addColorStop(0,u?`rgba(63,185,80,0.2)`:`rgba(248,81,73,0.2)`),f.addColorStop(1,`rgba(0,0,0,0)`),s.lineTo(n-1,r),s.lineTo(1,r),s.closePath(),s.fillStyle=f,s.fill()}function Jt(e){return`<canvas class="sparkline" data-spark="${e}" width="72" height="24" aria-hidden="true"></canvas>`}function Yt(){let e=R();document.querySelectorAll(`[data-live-symbol]`).forEach(t=>{let n=e.get(t.dataset.liveSymbol);if(!n)return;let r=t.querySelector(`[data-live="price"]`),i=t.querySelector(`[data-live="change"]`),a=t.querySelector(`[data-live="pct"]`);if(r){let e=`$${V(n.price)}`;r.textContent!==e&&(r.textContent=e,Xt(r,n.change>=0?`flash-up`:`flash-down`))}i&&(i.textContent=`${n.change>=0?`+`:``}${n.change?.toFixed(2)??`—`}`,i.className=U(n.change)),a&&(a.textContent=H(n.changePct),a.className=U(n.changePct))}),document.querySelectorAll(`canvas[data-spark]`).forEach(t=>{let n=e.get(t.dataset.spark);if(n?.sparkline?.length){let e=Number(t.getAttribute(`width`))||72,r=Number(t.getAttribute(`height`))||24;qt(t,n.sparkline,{width:e,height:r})}}),document.querySelectorAll(`.heat-tile[data-symbol]`).forEach(t=>{let n=e.get(t.dataset.symbol);if(!n)return;let r=n.changePct??0;t.style.background=Kt(r);let i=t.querySelector(`.tile-pct`);i&&(i.textContent=`${r>=0?`+`:``}${r.toFixed(1)}%`)})}function Xt(e,t){e.classList.remove(`flash-up`,`flash-down`),e.offsetWidth,e.classList.add(t),setTimeout(()=>e.classList.remove(t),600)}var Zt={height:160,overlays:{sma20:!0,sma50:!1,sma200:!1,bollinger:!1},showVolume:!0,showRsi:!1};function Qt(e,t,r={}){let i={...Zt,...r,overlays:{...Zt.overlays,...r.overlays}};if(!t?.length){e.innerHTML=`<p class="chart-empty">No chart data</p>`;return}let a=i.showRsi,o=i.showVolume,c=i.height,l=o?50:0,u=a?60:0,d=c+l+u,f=document.createElement(`canvas`);f.className=`price-chart-canvas`,e.innerHTML=``,e.appendChild(f);let p=window.devicePixelRatio||1,m=e.clientWidth||320;f.width=m*p,f.style.width=`${m}px`,f.style.height=`${d}px`,f.height=d*p;let h=f.getContext(`2d`);h.scale(p,p);let g=t.map(e=>e.c),ee=t.map(e=>e.l),_=t.map(e=>e.h),v=Math.min(...ee),y=Math.max(..._);if(i.overlays.bollinger){let e=s(g);e.upper&&(v=Math.min(v,e.lower),y=Math.max(y,e.upper))}(i.overlays.sma20||i.overlays.sma50||i.overlays.sma200)&&[20,50,200].forEach(e=>{let t=`sma${e}`;if(i.overlays[t]){let t=n(g,e);t&&(v=Math.min(v,t),y=Math.max(y,t))}});let b=(y-v)*.08||1,te=v-b,x=y+b-te,S=m-16,ne=c-16,C=S/t.length,w=e=>8+ne-(e-te)/x*ne,T=e=>8+e*C+C/2;if($t(h,m,8,8,ne,c),i.overlays.bollinger){let e=s(g);e.upper&&(h.fillStyle=`rgba(88,166,255,0.08)`,h.fillRect(8,w(e.upper),S,w(e.lower)-w(e.upper)),tn(h,t,t=>e.upper,T,w,`#58a6ff`,.5,1),tn(h,t,t=>e.lower,T,w,`#58a6ff`,.5,1))}[200,50,20].forEach(e=>{let t=`sma${e}`;i.overlays[t]&&en(h,g,e,T,w,{20:`#d29922`,50:`#a371f7`,200:`#f85149`}[e])});let E=Math.max(2,C*.6);t.forEach((e,t)=>{let n=T(t),r=e.c>=e.o?`#3fb950`:`#f85149`;h.strokeStyle=r,h.fillStyle=r,h.lineWidth=1,h.beginPath(),h.moveTo(n,w(e.h)),h.lineTo(n,w(e.l)),h.stroke();let i=w(Math.max(e.o,e.c)),a=w(Math.min(e.o,e.c));h.fillRect(n-E/2,i,E,Math.max(1,a-i))}),h.fillStyle=`#8b949e`,h.font=`10px IBM Plex Mono, monospace`,h.textAlign=`right`,h.fillText(y.toFixed(2),m-2,18),h.fillText(v.toFixed(2),m-2,c-8-2),o&&nn(h,t,m,c,l,8,S,C),a&&rn(h,g,m,c+l,u,8,S,C)}function $t(e,t,n,r,i,a){e.strokeStyle=`rgba(48,54,61,0.6)`,e.lineWidth=1;for(let a=0;a<=4;a++){let o=r+i/4*a;e.beginPath(),e.moveTo(n,o),e.lineTo(t-n,o),e.stroke()}}function en(e,t,r,i,a,o){e.strokeStyle=o,e.lineWidth=1.2,e.setLineDash([]),e.beginPath();let s=!1;for(let o=r-1;o<t.length;o++){let c=n(t.slice(0,o+1),r);if(c==null)continue;let l=i(o),u=a(c);s?e.lineTo(l,u):(e.moveTo(l,u),s=!0)}e.stroke()}function tn(e,t,n,r,i,a,o,s){e.strokeStyle=a,e.globalAlpha=o,e.lineWidth=s,e.beginPath(),t.forEach((t,a)=>{let o=r(a),s=i(n(a));a===0?e.moveTo(o,s):e.lineTo(o,s)}),e.stroke(),e.globalAlpha=1}function nn(e,t,n,r,i,a,o,s){let c=Math.max(...t.map(e=>e.v||0),1);e.fillStyle=`rgba(48,54,61,0.3)`,e.fillRect(0,r,n,i),e.fillStyle=`#8b949e`,e.font=`9px IBM Plex Mono, monospace`,e.textAlign=`left`,e.fillText(`VOL`,a,r+12);let l=Math.max(1,s*.7);t.forEach((t,n)=>{let o=a+n*s+s/2,u=(t.v||0)/c*(i-16);e.fillStyle=t.c>=t.o?`rgba(63,185,80,0.5)`:`rgba(248,81,73,0.5)`,e.fillRect(o-l/2,r+i-u,l,u)})}function rn(e,t,n,r,a,o,s,c){e.fillStyle=`rgba(48,54,61,0.3)`,e.fillRect(0,r,n,a),e.fillStyle=`#8b949e`,e.font=`9px IBM Plex Mono, monospace`,e.textAlign=`left`,e.fillText(`RSI`,o,r+12);let l=t.map((e,n)=>i(t.slice(0,n+1))),u=e=>r+14+(a-20)*(1-e/100);[30,70].forEach(t=>{e.strokeStyle=t===30?`rgba(63,185,80,0.4)`:`rgba(248,81,73,0.4)`,e.setLineDash([4,4]),e.beginPath(),e.moveTo(o,u(t)),e.lineTo(o+s,u(t)),e.stroke(),e.setLineDash([])}),e.strokeStyle=`#d29922`,e.lineWidth=1.5,e.beginPath(),l.forEach((n,r)=>{let i=o+r*(s/t.length)+s/t.length/2,a=u(n);r===0?e.moveTo(i,a):e.lineTo(i,a)}),e.stroke()}var an=`key`;function on(e,t){let n=e.fundamentals||{},r=e.ta||{};t.innerHTML=`
    <div class="fund-panel">
      <div class="fund-tabs" role="tablist">
        ${y.map(e=>`
          <button type="button" class="fund-tab ${an===e.id?`active`:``}" data-tab="${e.id}" role="tab">
            ${e.title}
          </button>
        `).join(``)}
      </div>
      <div class="fund-body">
        ${y.map(t=>`
          <section class="fund-section ${an===t.id?`active`:``}" data-section="${t.id}">
            <h4 class="fund-section-title">${t.title}</h4>
            <div class="fund-grid">
              ${t.fields.map(t=>{let i=te(t,e,n,r),a=b(i,t.fmt,e,r),o=t.fmt===`pct`&&i!=null?U(i):``;return`
                  <div class="fund-row">
                    <span class="fund-label">${t.label}</span>
                    <span class="fund-value ${o}">${a}</span>
                  </div>
                `}).join(``)}
            </div>
          </section>
        `).join(``)}
      </div>
      <p class="fund-disclaimer">Fundamental data — simulated unless Finnhub API key provides live metrics.</p>
    </div>
  `,t.querySelectorAll(`.fund-tab`).forEach(n=>{n.addEventListener(`click`,()=>{an=n.dataset.tab,on(e,t)})})}var W,G,sn,cn;function ln(){W=document.getElementById(`quote-panel`),G=document.getElementById(`quote-panel-body`),sn=document.getElementById(`quote-overlay`),cn=document.getElementById(`quote-close`),cn?.addEventListener(`click`,dn),sn?.addEventListener(`click`,dn),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&W&&!W.hidden&&dn()})}function un(e){W&&(W.hidden=!1,sn.hidden=!1,W.classList.add(`open`),G.innerHTML=`<div class="quote-loading"><div class="skeleton-line"></div><div class="skeleton-line short"></div></div>`,fn(e))}function dn(){W&&(W.classList.remove(`open`),setTimeout(()=>{W.hidden=!0,sn.hidden=!0},200),ct(null))}async function fn(e){let t=L(),n=R().get(e),[r,i,a]=await Promise.all([n?.fundamentals?.peg==null?Ce(e,t):Promise.resolve(n),Ee(e,t),we(e,t)]),o=r;o&&a&&!n?.fundamentals?.peg&&(o=w(o,{finnhubMetrics:a}));let s=o?.candles||await Te(e,t);if(!o){G.innerHTML=`<p class="quote-error">Could not load quote.</p>`;return}let c=U(o.changePct),l=dt(e),u=ht().includes(e),d=o.fundamentals||{};G.innerHTML=`
    <div class="quote-actions">
      <button class="btn-ghost btn-sm quote-action ${l?`starred`:``}" id="qa-fav">${l?`★ Favorited`:`☆ Favorite`}</button>
      <button class="btn-ghost btn-sm quote-action ${u?`active`:``}" id="qa-compare">${u?`In Compare`:`+ Compare`}</button>
      <button class="btn-ghost btn-sm quote-action" id="qa-alert">+ Alert</button>
      <a class="btn-ghost btn-sm quote-action" href="#/multicharts">Multi-Chart</a>
    </div>
    <div class="quote-header">
      <div>
        <h2 class="quote-symbol">${o.symbol}</h2>
        <p class="quote-name">${o.name||``}</p>
        <p class="quote-sector-line">${o.sector||``} · ${o.industry||``}</p>
      </div>
      <div class="quote-price-block" data-live-symbol="${e}">
        <span class="quote-price" data-live="price">$${V(o.price)}</span>
        <span class="quote-change ${c}" data-live="pct">${Ht(o.change)} (${H(o.changePct)})</span>
      </div>
    </div>

    <div class="quote-key-metrics">
      <div class="qkm"><span class="qkm-label">Mkt Cap</span><span class="qkm-val">${Wt(o.marketCap)}</span></div>
      <div class="qkm"><span class="qkm-label">P/E</span><span class="qkm-val">${d.pe??`—`}</span></div>
      <div class="qkm"><span class="qkm-label">PEG</span><span class="qkm-val">${d.peg??`—`}</span></div>
      <div class="qkm"><span class="qkm-label">EPS</span><span class="qkm-val">${d.eps==null?`—`:`$${d.eps}`}</span></div>
      <div class="qkm"><span class="qkm-label">Div Yield</span><span class="qkm-val">${d.dividendYield==null?`—`:`${d.dividendYield}%`}</span></div>
      <div class="qkm"><span class="qkm-label">Beta</span><span class="qkm-val">${d.beta??`—`}</span></div>
    </div>

    <div class="quote-grid">
      <div class="quote-stat"><span class="label">Open</span><span class="value">$${V(o.open)}</span></div>
      <div class="quote-stat"><span class="label">High</span><span class="value">$${V(o.high)}</span></div>
      <div class="quote-stat"><span class="label">Low</span><span class="value">$${V(o.low)}</span></div>
      <div class="quote-stat"><span class="label">Prev Close</span><span class="value">$${V(o.prevClose)}</span></div>
      <div class="quote-stat"><span class="label">Volume</span><span class="value">${Ut(o.volume)}</span></div>
      <div class="quote-stat"><span class="label">52W High</span><span class="value">$${V(d.high52)}</span></div>
      <div class="quote-stat"><span class="label">52W Low</span><span class="value">$${V(d.low52)}</span></div>
      <div class="quote-stat"><span class="label">RSI (14)</span><span class="value">${o.ta?.rsi?.toFixed(1)??`—`}</span></div>
    </div>

    <div id="fundamentals-host"></div>

    ${o.prediction?`
    <div class="prediction-panel panel">
      <h3 class="quote-section-title">AI Pattern Prediction</h3>
      <div class="pred-header">
        <span class="pred-badge ${o.prediction.direction}">${o.prediction.direction.toUpperCase()}</span>
        <span class="pred-conf">${o.prediction.confidence}% confidence</span>
        <span class="pred-horizon">${o.prediction.horizon}</span>
      </div>
      <div class="pred-target">
        Target: <strong>$${V(o.prediction.priceTarget)}</strong>
        <span class="${U(o.prediction.targetPct)}">(${o.prediction.targetPct>=0?`+`:``}${o.prediction.targetPct}%)</span>
      </div>
      <div class="pred-factors">
        ${(o.prediction.factors||[]).slice(0,5).map(e=>`
          <div class="pred-factor ${e.weight}">
            <span>${e.name}</span>
            <span class="${e.score>=0?`pos`:`neg`}">${e.score>=0?`+`:``}${Math.round(e.score)}</span>
          </div>
        `).join(``)}
      </div>
      ${o.patterns?.length?`<p class="pred-patterns"><strong>Patterns:</strong> ${o.patterns.map(e=>`${e.label} (${e.confidence}%)`).join(` · `)}</p>`:``}
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
  `;let f=G.querySelector(`#fundamentals-host`);f&&on(o,f),G.querySelector(`#qa-alert`)?.addEventListener(`click`,()=>{let t=prompt(`Alert type: price_above, price_below, change_above, rsi_above, prediction
(or visit Alerts page)`,`price_above`);if(!t)return;let n=prompt(`Threshold value:`,String(o.price));n!=null&&(xt({symbol:e,type:t,value:n,note:`Quick alert from quote panel`}),B(`Alert set for ${e}`,`success`))}),G.querySelector(`#qa-fav`)?.addEventListener(`click`,()=>{let t=ut(e),n=G.querySelector(`#qa-fav`);n.textContent=t?`★ Favorited`:`☆ Favorite`,n.classList.toggle(`starred`,t),B(t?`${e} favorited`:`${e} unfavorited`,`info`)}),G.querySelector(`#qa-compare`)?.addEventListener(`click`,()=>{let t=gt(e),n=G.querySelector(`#qa-compare`);if(ht().length>4&&!t){B(`Compare list full (max 4)`,`error`);return}n.textContent=t?`In Compare`:`+ Compare`,n.classList.toggle(`active`,t),B(t?`${e} added to compare`:`${e} removed`,`info`)});let p=G.querySelector(`#quote-chart`);p&&(Qt(p,s,{height:180,showVolume:!0}),new ResizeObserver(()=>Qt(p,s,{height:180,showVolume:!0})).observe(p))}var pn,mn,hn,K=0,gn=[];function _n(){pn=document.getElementById(`command-palette`),mn=document.getElementById(`cmd-input`),hn=document.getElementById(`cmd-results`);let e=document.getElementById(`cmd-overlay`);document.addEventListener(`keydown`,e=>{if((e.ctrlKey||e.metaKey)&&e.key===`k`&&(e.preventDefault(),yn()),e.key===`/`&&!vn()){if(!pn?.hidden)return;e.preventDefault(),yn()}}),e?.addEventListener(`click`,bn),mn?.addEventListener(`input`,()=>xn(mn.value)),mn?.addEventListener(`keydown`,e=>{e.key===`Escape`&&bn(),e.key===`ArrowDown`&&(e.preventDefault(),Sn(1)),e.key===`ArrowUp`&&(e.preventDefault(),Sn(-1)),e.key===`Enter`&&Cn()})}function vn(){let e=document.activeElement?.tagName;return e===`INPUT`||e===`TEXTAREA`||e===`SELECT`}function yn(){pn&&(pn.hidden=!1,document.getElementById(`cmd-overlay`).hidden=!1,mn.value=``,K=0,xn(``),requestAnimationFrame(()=>mn?.focus()))}function bn(){pn&&(pn.hidden=!0,document.getElementById(`cmd-overlay`).hidden=!0)}function xn(e){let n=e.trim().toLowerCase(),r=R();gn=t.filter(e=>n?e.symbol.toLowerCase().includes(n)||e.name.toLowerCase().includes(n):!0).slice(0,12),hn.innerHTML=gn.map((e,t)=>{let n=r.get(e.symbol),i=n?U(n.changePct):``;return`
      <button class="cmd-item ${t===K?`active`:``}" data-idx="${t}" data-symbol="${e.symbol}">
        <span class="cmd-sym">${e.symbol}</span>
        <span class="cmd-name">${e.name}</span>
        ${n?`<span class="cmd-price ${i}">$${V(n.price)} ${H(n.changePct)}</span>`:``}
      </button>
    `}).join(``)||`<p class="cmd-empty">No matches</p>`,hn.querySelectorAll(`.cmd-item`).forEach(e=>{e.addEventListener(`click`,()=>{wn(e.dataset.symbol)})})}function Sn(e){K=Math.max(0,Math.min(gn.length-1,K+e)),hn.querySelectorAll(`.cmd-item`).forEach((e,t)=>{e.classList.toggle(`active`,t===K)})}function Cn(){gn[K]&&wn(gn[K].symbol)}function wn(e){bn(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))}function Tn(e,t,n){if(!t.length){e.innerHTML=`<p class="empty-state">No stocks match current filters.</p>`;return}let r=new Map;for(let e of t){let t=e.sector||`Other`;r.has(t)||r.set(t,[]),r.get(t).push(e)}e.innerHTML=`
    <div class="heatmap-legend">
      <span class="legend-label">-5%</span>
      <div class="legend-gradient"></div>
      <span class="legend-label">+5%</span>
    </div>
    <div class="treemap">
      ${[...r.entries()].sort((e,t)=>{let n=e[1].reduce((e,t)=>e+t.changePct,0)/e[1].length;return t[1].reduce((e,t)=>e+t.changePct,0)/t[1].length-n}).map(([e,t])=>En(e,t)).join(``)}
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>n?.(e.dataset.symbol))})}function En(e,t){let n=t.reduce((e,t)=>e+(t.marketCap||1),0),r=t.reduce((e,t)=>e+t.changePct,0)/t.length;return`
    <div class="sector-block" style="flex:${Math.max(1,Math.round(n/5e10))}">
      <div class="sector-header" style="background:${Kt(r)}">
        <span class="sector-name">${e}</span>
        <span class="sector-avg">${r>=0?`+`:``}${r.toFixed(2)}%</span>
      </div>
      <div class="sector-tiles">
        ${t.sort((e,t)=>(t.marketCap||0)-(e.marketCap||0)).map(e=>Dn(e,n)).join(``)}
      </div>
    </div>
  `}function Dn(e,t){let n=(e.marketCap||1)/t,r=Math.max(1,Math.round(n*20)),i=e.changePct??0;return`
    <button
      class="heat-tile"
      data-symbol="${e.symbol}"
      style="flex:${r};background:${Kt(i)}"
      title="${e.name}: ${i>=0?`+`:``}${i.toFixed(2)}%"
    >
      <span class="tile-symbol">${e.symbol}</span>
      <span class="tile-pct">${i>=0?`+`:``}${i.toFixed(1)}%</span>
    </button>
  `}var On=[{name:`Crude Oil`,symbol:`CL`,last:78.42,change:1.24,changePct:1.61},{name:`Natural Gas`,symbol:`NG`,last:2.84,change:-.06,changePct:-2.07},{name:`Gold`,symbol:`GC`,last:2348.5,change:12.3,changePct:.53},{name:`Dow`,symbol:`YM`,last:42850,change:-120,changePct:-.28},{name:`S&P 500`,symbol:`ES`,last:5892,change:18,changePct:.31},{name:`Nasdaq 100`,symbol:`NQ`,last:21245,change:95,changePct:.45},{name:`Russell 2000`,symbol:`ER2`,last:2185,change:-8,changePct:-.37}],kn=[{pair:`EUR/USD`,symbol:`EURUSD`,last:1.0842,change:.0012,changePct:.11},{pair:`USD/JPY`,symbol:`USDJPY`,last:157.32,change:.28,changePct:.18},{pair:`GBP/USD`,symbol:`GBPUSD`,last:1.2718,change:-8e-4,changePct:-.06},{pair:`BTC/USD`,symbol:`BTCUSD`,last:68420,change:1240,changePct:1.85}],An=[{name:`5-Year Treasury`,last:4.12,change:.03,changePct:.73},{name:`10-Year Treasury`,last:4.28,change:.02,changePct:.47},{name:`30-Year Treasury`,last:4.45,change:-.01,changePct:-.22}],jn=[{symbol:`NVDA`,insider:`Jensen Huang`,relation:`CEO`,date:`Jun 04`,type:`Sale`,cost:128.5,shares:12e4,value:1542e4},{symbol:`AAPL`,insider:`Tim Cook`,relation:`CEO`,date:`Jun 03`,type:`Sale`,cost:198.2,shares:45e3,value:8919e3},{symbol:`MSFT`,insider:`Satya Nadella`,relation:`CEO`,date:`Jun 02`,type:`Sale`,cost:425,shares:22e3,value:935e4},{symbol:`JPM`,insider:`Jamie Dimon`,relation:`CEO`,date:`Jun 05`,type:`Buy`,cost:198.4,shares:15e3,value:2976e3},{symbol:`META`,insider:`Mark Zuckerberg`,relation:`CEO`,date:`Jun 01`,type:`Sale`,cost:512,shares:8e4,value:4096e4},{symbol:`GOOGL`,insider:`Sundar Pichai`,relation:`CEO`,date:`May 30`,type:`Sale`,cost:178.5,shares:35e3,value:6247500}],Mn=[{symbol:`ORCL`,date:`Today AMC`,epsEst:1.42,cap:`Large`},{symbol:`ADBE`,date:`Today AMC`,epsEst:4.18,cap:`Large`},{symbol:`COST`,date:`Tomorrow BMO`,epsEst:3.92,cap:`Large`},{symbol:`CRM`,date:`Tomorrow AMC`,epsEst:2.28,cap:`Large`},{symbol:`AVGO`,date:`Jun 10 AMC`,epsEst:1.35,cap:`Large`},{symbol:`NKE`,date:`Jun 11 AMC`,epsEst:.72,cap:`Large`}],Nn=[{date:`Mon`,time:`10:00 AM`,impact:`high`,event:`ISM Services PMI`,actual:`—`,expected:`52.4`,prior:`51.8`},{date:`Tue`,time:`8:30 AM`,impact:`high`,event:`Non-Farm Payrolls`,actual:`—`,expected:`185K`,prior:`177K`},{date:`Wed`,time:`2:00 PM`,impact:`medium`,event:`FOMC Minutes`,actual:`—`,expected:`—`,prior:`—`},{date:`Thu`,time:`8:30 AM`,impact:`medium`,event:`Initial Jobless Claims`,actual:`—`,expected:`220K`,prior:`218K`},{date:`Fri`,time:`8:30 AM`,impact:`high`,event:`CPI YoY`,actual:`—`,expected:`2.9%`,prior:`3.0%`}],Pn=[{id:`top_gainers`,label:`Top Gainers`},{id:`top_losers`,label:`Top Losers`},{id:`new_high`,label:`New High`},{id:`new_low`,label:`New Low`},{id:`overbought`,label:`Overbought`},{id:`oversold`,label:`Oversold`},{id:`unusual_volume`,label:`Unusual Volume`},{id:`most_active`,label:`Most Active`},{id:`most_volatile`,label:`Most Volatile`},{id:`golden_cross`,label:`Golden Cross`},{id:`death_cross`,label:`Death Cross`}],Fn=[{id:`double_top`,label:`Double Top`},{id:`double_bottom`,label:`Double Bottom`},{id:`head_shoulders`,label:`Head & Shoulders`},{id:`inv_head_shoulders`,label:`Inverse H&S`},{id:`channel_up`,label:`Channel Up`},{id:`channel_down`,label:`Channel Down`},{id:`wedge_up`,label:`Wedge Up`},{id:`wedge_down`,label:`Wedge Down`},{id:`triangle_asc`,label:`Triangle Ascending`},{id:`triangle_desc`,label:`Triangle Descending`},{id:`horizontal_support`,label:`Horizontal Support`},{id:`horizontal_resistance`,label:`Horizontal Resistance`},{id:`tl_support`,label:`Trendline Support`},{id:`tl_resistance`,label:`Trendline Resistance`}],In=[{signal:`top_gainers`,limit:7,sort:(e,t)=>t.changePct-e.changePct},{signal:`new_high`,limit:4,sort:(e,t)=>t.changePct-e.changePct},{signal:`overbought`,limit:2,sort:(e,t)=>(t.ta?.rsi??0)-(e.ta?.rsi??0)},{signal:`unusual_volume`,limit:4,sort:(e,t)=>(t.ta?.relVolume??0)-(e.ta?.relVolume??0)}],Ln=[{signal:`top_losers`,limit:7,sort:(e,t)=>e.changePct-t.changePct},{signal:`new_low`,limit:4,sort:(e,t)=>e.changePct-t.changePct},{signal:`oversold`,limit:2,sort:(e,t)=>(e.ta?.rsi??100)-(t.ta?.rsi??100)},{signal:`most_volatile`,limit:2,sort:(e,t)=>Math.abs(t.changePct)-Math.abs(e.changePct)},{signal:`most_active`,limit:2,sort:(e,t)=>(t.volume??0)-(e.volume??0)}];async function Rn(e){let t=R(),n=L(),r=[...t.values()],i=T(t),a=await De(n).catch(()=>[]),o=zn(r,In),s=zn(r,Ln),c=Mn.filter(e=>/BMO|before/i.test(e.date)),l=Mn.filter(e=>/AMC|after|Today/i.test(e.date)),u=jn.filter(e=>e.type===`Buy`).slice(0,2),d=jn.filter(e=>e.type===`Sale`).slice(0,2),f=r.filter(e=>Math.abs(e.changePct)>=1.5).sort((e,t)=>Math.abs(t.changePct)-Math.abs(e.changePct)).slice(0,12),p=Fn.slice(0,7),m=Fn.slice(7,14);e.innerHTML=`
    <div class="finviz-home">
      ${a[0]?`
        <div class="home-market-line panel">
          <span class="home-market-time">${Wn(a[0].datetime)}</span>
          <a class="home-market-text" href="${a[0].url||`#/`}" target="_blank" rel="noopener">${a[0].headline||a[0].title}</a>
        </div>
      `:``}

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
          ${Bn(o)}
          ${Vn(c,`Earnings Before`)}
          ${Hn(u,`Insider Buying`)}
        </section>

        <section class="panel home-center-col">
          <h2 class="finviz-col-title"><a href="#/map">S&amp;P 500 — 1 Day Performance</a></h2>
          <div id="home-heatmap" class="home-heatmap-host"></div>
          <div class="home-pattern-cols">
            <div class="home-pattern-col">
              ${Un(p,r)}
            </div>
            <div class="home-pattern-col">
              ${Un(m,r)}
            </div>
          </div>
        </section>

        <section class="panel home-tape-col">
          ${Bn(s)}
          ${Vn(l,`Earnings After`)}
          ${Hn(d,`Insider Selling`)}
        </section>

        <section class="panel home-news-col">
          <h2 class="finviz-col-title"><a href="#/news">Headlines</a></h2>
          <div class="headline-list home-headlines">
            ${a.slice(0,6).map(e=>`
              <a class="headline-item" href="${e.url||`#`}" target="_blank" rel="noopener">
                <span class="headline-time">${Wn(e.datetime)}</span>
                <span class="headline-text">${e.headline||e.title}</span>
              </a>
            `).join(``)}
          </div>
          <h3 class="finviz-sub-title"><a href="#/screener">Major News</a></h3>
          <div class="major-news-strip">
            ${f.map(e=>`
              <a class="major-news-chip clickable" data-symbol="${e.symbol}">
                <span class="sym">${e.symbol}</span>
                <span class="${U(e.changePct)}">${H(e.changePct)}</span>
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
              ${Nn.slice(0,4).map(e=>`
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
              ${Mn.slice(0,6).map(e=>`
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
              ${jn.slice(0,5).map(e=>`
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
              ${On.map(e=>`
                <tr>
                  <td>${e.name}</td>
                  <td>${e.last>1e3?e.last.toLocaleString():V(e.last)}</td>
                  <td class="${U(e.change)}">${e.change>=0?`+`:``}${V(e.change)}</td>
                  <td class="${U(e.changePct)}">${H(e.changePct)}</td>
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
              ${[...kn,...An].map(e=>`
                <tr>
                  <td>${e.pair||e.name}</td>
                  <td>${typeof e.last==`number`&&e.last>100?e.last.toLocaleString():V(e.last)}</td>
                  <td class="${U(e.changePct)}">${H(e.changePct)}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </section>
      </div>

      <div class="signal-ticker-row panel">
        <span class="signal-ticker-label">Signals:</span>
        ${Pn.map(e=>{let t=r.filter(t=>t.signals?.some(t=>t.id===e.id)).length;return`<a href="#/screener?signal=${e.id}" class="signal-ticker-chip">${e.label} (${t})</a>`}).join(``)}
        <a href="#/patterns" class="signal-ticker-chip accent">Patterns →</a>
        <a href="#/signals" class="signal-ticker-chip accent">All Signals →</a>
      </div>
    </div>
  `;let h=e.querySelector(`#home-heatmap`);h&&Tn(h,r,e=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function zn(e,t){let n=[];for(let{signal:r,limit:i,sort:a}of t){let t=Pn.find(e=>e.id===r)?.label||r,o=e.filter(e=>e.signals?.some(e=>e.id===r)).sort(a).slice(0,i);for(let e of o)n.push({quote:e,signal:r,signalLabel:t})}return n}function Bn(e){return`
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
            <td data-live="price">$${V(e.price)}</td>
            <td class="${U(e.changePct)}" data-live="pct">${H(e.changePct)}</td>
            <td>${Ut(e.volume)}</td>
            <td><a href="#/screener?signal=${t}" class="signal-link">${n}</a></td>
          </tr>
        `).join(``):`<tr><td colspan="5" class="empty-row">—</td></tr>`}
      </tbody>
    </table>
  `}function Vn(e,t){return e.length?`
    <table class="data-table compact finviz-tbl home-tape-tbl home-tape-extra">
      <tbody>
        ${e.slice(0,2).map(e=>`
          <tr class="clickable" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td>$${V(e.epsEst)}</td>
            <td>${e.date}</td>
            <td></td>
            <td><a href="#/calendar" class="signal-link">${t}</a></td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `:``}function Hn(e,t){return e.length?`
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
  `:``}function Un(e,t){return`
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
  `}function Wn(e){return e?(typeof e==`number`?new Date(e*1e3):new Date(e)).toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`}):``}var Gn=[{id:`all`,label:`All Stocks`,filters:{}},{id:`gainers`,label:`Top Gainers`,filters:{signal:`top_gainers`}},{id:`losers`,label:`Top Losers`,filters:{signal:`top_losers`}},{id:`newhigh`,label:`New High`,filters:{signal:`new_high`}},{id:`newlow`,label:`New Low`,filters:{signal:`new_low`}},{id:`overbought`,label:`Overbought`,filters:{signal:`overbought`}},{id:`oversold`,label:`Oversold`,filters:{signal:`oversold`}},{id:`unusualvol`,label:`Unusual Volume`,filters:{signal:`unusual_volume`}},{id:`golden`,label:`Golden Cross`,filters:{signal:`golden_cross`}},{id:`doublebottom`,label:`Double Bottom`,filters:{pattern:`double_bottom`}},{id:`headshoulders`,label:`Head & Shoulders`,filters:{pattern:`head_shoulders`}},{id:`bullish`,label:`Bullish Prediction`,filters:{prediction:`bullish`}},{id:`bearish`,label:`Bearish Prediction`,filters:{prediction:`bearish`}},{id:`tech`,label:`Technology`,filters:{sector:`Technology`}},{id:`megacap`,label:`Mega Cap`,filters:{minMarketCap:`200000000000`}}],Kn=new Set(`price.changePct.volume.marketCap.rsi.pe.peFwd.peg.ps.pb.eps.epsFwd.epsGrowth.beta.dividendYield.payoutRatio.grossMargin.netMargin.roe.relVolume.sma20.sma50.sma200.predConf.atr.shortPct.instPct`.split(`.`)),qn={rsi:e=>e.ta?.rsi??50,pe:e=>e.fundamentals?.pe??0,peFwd:e=>e.fundamentals?.peFwd??0,peg:e=>e.fundamentals?.peg??0,ps:e=>e.fundamentals?.ps??0,pb:e=>e.fundamentals?.pb??0,eps:e=>e.fundamentals?.eps??0,epsFwd:e=>e.fundamentals?.epsFwd??0,epsGrowth:e=>e.fundamentals?.epsGrowth??0,beta:e=>e.fundamentals?.beta??1,dividendYield:e=>e.fundamentals?.dividendYield??0,payoutRatio:e=>e.fundamentals?.payoutRatio??0,grossMargin:e=>e.fundamentals?.grossMargin??0,netMargin:e=>e.fundamentals?.netMargin??0,roe:e=>e.fundamentals?.roe??0,shortPct:e=>e.fundamentals?.shortPct??0,instPct:e=>e.fundamentals?.instPct??0,relVolume:e=>e.ta?.relVolume??1,sma20:e=>e.ta?.sma20??e.price,sma50:e=>e.ta?.sma50??e.price,sma200:e=>e.ta?.sma200??e.price,predConf:e=>e.prediction?.confidence??50,atr:e=>e.ta?.atr??0,price:e=>e.price??0,changePct:e=>e.changePct??0,volume:e=>e.volume??0,marketCap:e=>e.marketCap??0};function Jn(e){let t={};for(let[n,r]of Object.entries(qn))t[n]=r(e);return t}function Yn(e){if(!e?.trim())return{valid:!0,error:null};try{return Qn(Zn(e),0),{valid:!0,error:null}}catch(e){return{valid:!1,error:e.message}}}function Xn(e,t){if(!e?.trim())return!0;let n=Jn(t);return!!Qn(Zn(e),0,n).value}function Zn(e){let t=[],n=0;for(;n<e.length;){let r=e[n];if(/\s/.test(r)){n++;continue}if(/[0-9.]/.test(r)){let r=``;for(;n<e.length&&/[0-9.]/.test(e[n]);)r+=e[n++];t.push({type:`num`,value:parseFloat(r)});continue}if(/[a-zA-Z_]/.test(r)){let r=``;for(;n<e.length&&/[a-zA-Z0-9_]/.test(e[n]);)r+=e[n++];let i=r.toLowerCase();if(i===`and`)t.push({type:`op`,value:`&&`});else if(i===`or`)t.push({type:`op`,value:`||`});else if(i===`not`)t.push({type:`op`,value:`!`});else if(Kn.has(r))t.push({type:`id`,value:r});else throw Error(`Unknown field: ${r}`);continue}if(`+-*/<>=!&|()`.includes(r)){let i=r+(e[n+1]||``);[`>=`,`<=`,`==`,`!=`,`&&`,`||`].includes(i)?(t.push({type:`op`,value:i}),n+=2):(t.push({type:`op`,value:r}),n++);continue}throw Error(`Invalid character: ${r}`)}return t}function Qn(e,t,n=null){return $n(e,t,n)}function $n(e,t,n){let r=er(e,t,n);for(t=r.pos;e[t]?.value===`||`;){let i=er(e,t+1,n);r={value:r.value||i.value,pos:i.pos},t=i.pos}return r}function er(e,t,n){let r=tr(e,t,n);for(t=r.pos;e[t]?.value===`&&`;){let i=tr(e,t+1,n);r={value:r.value&&i.value,pos:i.pos},t=i.pos}return r}function tr(e,t,n){let r=nr(e,t,n);if(t=r.pos,[`>=`,`<=`,`==`,`!=`,`>`,`<`].includes(e[t]?.value)){let i=e[t].value,a=nr(e,t+1,n),o=r.value,s=a.value,c=!1;return i===`>`?c=o>s:i===`<`?c=o<s:i===`>=`?c=o>=s:i===`<=`?c=o<=s:i===`==`?c=o===s:i===`!=`&&(c=o!==s),{value:c,pos:a.pos}}return r}function nr(e,t,n){let r=rr(e,t,n);for(t=r.pos;e[t]?.value===`+`||e[t]?.value===`-`;){let i=e[t].value,a=rr(e,t+1,n);r={value:i===`+`?r.value+a.value:r.value-a.value,pos:a.pos},t=a.pos}return r}function rr(e,t,n){let r=ir(e,t,n);for(t=r.pos;e[t]?.value===`*`||e[t]?.value===`/`;){let i=e[t].value,a=ir(e,t+1,n);r={value:i===`*`?r.value*a.value:r.value/a.value,pos:a.pos},t=a.pos}return r}function ir(e,t,n){if(e[t]?.value===`!`){let r=ir(e,t+1,n);return{value:!r.value,pos:r.pos}}if(e[t]?.value===`-`){let r=ir(e,t+1,n);return{value:-r.value,pos:r.pos}}return ar(e,t,n)}function ar(e,t,n){let r=e[t];if(!r)throw Error(`Unexpected end of formula`);if(r.type===`num`)return{value:r.value,pos:t+1};if(r.type===`id`)return n?{value:n[r.value]??0,pos:t+1}:{value:0,pos:t+1};if(r.value===`(`){let r=Qn(e,t+1,n);if(e[r.pos]?.value!==`)`)throw Error(`Missing )`);return{value:r.value,pos:r.pos+1}}throw Error(`Unexpected token: ${r.value}`)}var or=[{label:`Oversold bounce`,formula:`rsi < 35 and changePct > 0`},{label:`Value + PEG`,formula:`peg < 1.5 and pe < 25 and epsGrowth > 5`},{label:`Dividend value`,formula:`dividendYield > 2 and pe < 20 and payoutRatio < 60`},{label:`Growth at reasonable price`,formula:`peg < 2 and epsGrowth > 10 and ps < 8`},{label:`High volume breakout`,formula:`relVolume > 1.5 and changePct > 2`}];function sr(e,t){return[...e.values()].filter(e=>{if(t.search){let n=t.search.toLowerCase();if(!e.symbol.toLowerCase().includes(n)&&!(e.name||``).toLowerCase().includes(n))return!1}return!(t.sector&&e.sector!==t.sector||t.industry&&e.industry!==t.industry||t.minChange!==``&&e.changePct<Number(t.minChange)||t.maxChange!==``&&e.changePct>Number(t.maxChange)||t.minVolume!==``&&(e.volume||0)<Number(t.minVolume)||t.minMarketCap!==``&&(e.marketCap||0)<Number(t.minMarketCap)||t.minRsi!==``&&(e.ta?.rsi??50)<Number(t.minRsi)||t.maxRsi!==``&&(e.ta?.rsi??50)>Number(t.maxRsi)||t.minPe!==``&&(e.fundamentals?.pe??0)<Number(t.minPe)||t.maxPe!==``&&(e.fundamentals?.pe??999)>Number(t.maxPe)||t.minPeg!==``&&(e.fundamentals?.peg??0)<Number(t.minPeg)||t.maxPeg!==``&&(e.fundamentals?.peg??999)>Number(t.maxPeg)||t.minDivYield!==``&&(e.fundamentals?.dividendYield??0)<Number(t.minDivYield)||t.signal&&!e.signals?.some(e=>e.id===t.signal)||t.pattern&&!e.patterns?.some(e=>e.id===t.pattern)||t.prediction&&e.prediction?.direction!==t.prediction||t.aboveSma50===`yes`&&!(e.ta?.sma50&&e.price>e.ta.sma50)||t.aboveSma50===`no`&&e.ta?.sma50&&e.price>e.ta.sma50||t.aboveSma200===`yes`&&!(e.ta?.sma200&&e.price>e.ta.sma200)||t.aboveSma200===`no`&&e.ta?.sma200&&e.price>e.ta.sma200||t.formula&&!Xn(t.formula,e))})}var cr=`Symbol.Company.Sector.Industry.Price.Change.Change %.Volume.Market Cap.RSI.SMA20.SMA50.SMA200.P/E.Forward P/E.PEG.P/S.P/B.EV/EBITDA.EPS.EPS Fwd.EPS Growth.Div Yield.Beta.52W High.52W Low.ROE.Net Margin.Short %.Primary Signal.Pattern.Prediction.Confidence.Target.Target %`.split(`.`);function q(e){let t=String(e??``);return t.includes(`,`)||t.includes(`"`)?`"${t.replace(/"/g,`""`)}"`:t}function lr(e){return[e.symbol,q(e.name),q(e.sector),q(e.industry),V(e.price),e.change?.toFixed(2)??``,e.changePct?.toFixed(2)??``,e.volume??``,e.marketCap??``,e.ta?.rsi?.toFixed(1)??``,e.ta?.sma20?.toFixed(2)??``,e.ta?.sma50?.toFixed(2)??``,e.ta?.sma200?.toFixed(2)??``,e.fundamentals?.pe??``,e.fundamentals?.peFwd??``,e.fundamentals?.peg??``,e.fundamentals?.ps??``,e.fundamentals?.pb??``,e.fundamentals?.evEbitda??``,e.fundamentals?.eps??``,e.fundamentals?.epsFwd??``,e.fundamentals?.epsGrowth??``,e.fundamentals?.dividendYield??``,e.fundamentals?.beta??``,e.fundamentals?.high52??``,e.fundamentals?.low52??``,e.fundamentals?.roe??``,e.fundamentals?.netMargin??``,e.fundamentals?.shortPct??``,q(e.primarySignal),q(e.patternLabels?.join(`; `)),e.prediction?.direction??``,e.prediction?.confidence??``,e.prediction?.priceTarget??``,e.prediction?.targetPct??``].join(`,`)}function ur(e){return{symbol:e.symbol,name:e.name,sector:e.sector,industry:e.industry,price:e.price,change:e.change,changePct:e.changePct,volume:e.volume,marketCap:e.marketCap,ta:e.ta,fundamentals:e.fundamentals,signals:e.signals?.map(e=>e.label),patterns:e.patterns,prediction:e.prediction,timestamp:e.timestamp}}function dr(e,t=`stockviz-export.csv`,n=!1){hr([(n?cr:[`Symbol`,`Company`,`Sector`,`Price`,`Change`,`Change %`,`Volume`,`Market Cap`]).join(`,`),...e.map(e=>n?lr(e):[e.symbol,q(e.name),q(e.sector),V(e.price),e.change?.toFixed(2)??``,e.changePct?.toFixed(2)??``,e.volume??``,e.marketCap??``].join(`,`))].join(`
`),t,`text/csv;charset=utf-8`)}function fr(e,t=`stockviz-export.json`){let n={exportedAt:new Date().toISOString(),count:e.length,stocks:e.map(ur)};hr(JSON.stringify(n,null,2),t,`application/json`)}function pr(e){return{api:`StockViz Export API v1`,version:`1.0`,exportedAt:new Date().toISOString(),count:e.length,endpoints:{screener:`GET /api/v1/screener — full universe with TA`,quote:`GET /api/v1/quote?symbol=AAPL — single stock`,signals:`GET /api/v1/signals — stocks by signal`,patterns:`GET /api/v1/patterns — pattern scanner results`},data:e.map(ur)}}async function mr(e){let t=pr(e);return await navigator.clipboard.writeText(JSON.stringify(t,null,2)),t.count}function hr(e,t,n){let r=new Blob([e],{type:n}),i=document.createElement(`a`);i.href=URL.createObjectURL(r),i.download=t,i.click(),URL.revokeObjectURL(i.href)}var gr=[`sector`,`industry`,`minChange`,`maxChange`,`minVolume`,`minMarketCap`,`search`,`signal`,`pattern`,`prediction`,`minRsi`,`maxRsi`,`minPe`,`maxPe`,`minPeg`,`maxPeg`,`minDivYield`,`aboveSma50`,`aboveSma200`,`formula`];function _r(){let e=location.hash.slice(1),t=e.indexOf(`?`);if(t===-1)return null;let n=new URLSearchParams(e.slice(t+1)),r={};for(let e of gr){let t=n.get(e);t!=null&&(r[e]=t)}return Object.keys(r).length?r:null}function vr(e){let t=location.hash.slice(1).split(`?`)[0]||`/`;if(t!==`/screener`&&t!==`/map`)return;let n=new URLSearchParams;for(let t of gr)e[t]&&n.set(t,e[t]);let r=n.toString(),i=r?`#${t}?${r}`:`#${t}`;location.hash!==i&&history.replaceState(null,``,i)}function yr(){let e=_r();e&&$e(e,{preset:`custom`})}function br(e){let t=new URLSearchParams;for(let n of gr)e[n]&&t.set(n,e[n]);let n=t.toString(),r=location.origin+location.pathname;return n?`${r}#/screener?${n}`:`${r}#/screener`}function xr(e,t=200){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}function Sr(t){let n=Qe(),r=nt(),i=tt(),a=At(),o=R(),s=Tr(sr(o,n),r);vr(n),t.innerHTML=`
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
      ${Gn.map(e=>`
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
        <div class="filter-group"><label>Search</label><input type="search" name="search" placeholder="Symbol…" value="${Y(n.search)}" /></div>
      </div>
      <div class="filter-panel" data-panel="desc" hidden>
        <div class="filter-group"><label>Sector</label><select name="sector"><option value="">Any</option>${e.map(e=>`<option value="${e}" ${n.sector===e?`selected`:``}>${e}</option>`).join(``)}</select></div>
        <div class="filter-group"><label>Min %</label><input type="number" name="minChange" step="0.1" value="${Y(n.minChange)}" /></div>
        <div class="filter-group"><label>Max %</label><input type="number" name="maxChange" step="0.1" value="${Y(n.maxChange)}" /></div>
        <div class="filter-group"><label>Min Vol</label><input type="number" name="minVolume" value="${Y(n.minVolume)}" /></div>
        <div class="filter-group"><label>Min MCap</label><select name="minMarketCap"><option value="">Any</option><option value="10000000000" ${n.minMarketCap===`10000000000`?`selected`:``}>$10B+</option><option value="50000000000" ${n.minMarketCap===`50000000000`?`selected`:``}>$50B+</option><option value="100000000000" ${n.minMarketCap===`100000000000`?`selected`:``}>$100B+</option></select></div>
      </div>
      <div class="filter-panel" data-panel="fund" hidden>
        <div class="filter-group"><label>Min P/E</label><input type="number" name="minPe" step="0.1" value="${Y(n.minPe)}" /></div>
        <div class="filter-group"><label>Max P/E</label><input type="number" name="maxPe" step="0.1" value="${Y(n.maxPe)}" /></div>
        <div class="filter-group"><label>Min PEG</label><input type="number" name="minPeg" step="0.1" value="${Y(n.minPeg)}" /></div>
        <div class="filter-group"><label>Max PEG</label><input type="number" name="maxPeg" step="0.1" value="${Y(n.maxPeg)}" /></div>
        <div class="filter-group"><label>Min Div %</label><input type="number" name="minDivYield" step="0.1" value="${Y(n.minDivYield)}" /></div>
      </div>
      <div class="filter-panel" data-panel="tech" hidden>
        <div class="filter-group"><label>Min RSI</label><input type="number" name="minRsi" value="${Y(n.minRsi)}" /></div>
        <div class="filter-group"><label>Max RSI</label><input type="number" name="maxRsi" value="${Y(n.maxRsi)}" /></div>
        <div class="filter-group"><label>Above SMA50</label><select name="aboveSma50"><option value="">Any</option><option value="yes" ${n.aboveSma50===`yes`?`selected`:``}>Yes</option><option value="no" ${n.aboveSma50===`no`?`selected`:``}>No</option></select></div>
        <div class="filter-group"><label>Above SMA200</label><select name="aboveSma200"><option value="">Any</option><option value="yes" ${n.aboveSma200===`yes`?`selected`:``}>Yes</option><option value="no" ${n.aboveSma200===`no`?`selected`:``}>No</option></select></div>
        <div class="filter-group"><label>Prediction</label><select name="prediction"><option value="">Any</option><option value="bullish" ${n.prediction===`bullish`?`selected`:``}>Bullish</option><option value="bearish" ${n.prediction===`bearish`?`selected`:``}>Bearish</option><option value="neutral" ${n.prediction===`neutral`?`selected`:``}>Neutral</option></select></div>
      </div>
      <div class="filter-panel" data-panel="signals" hidden>
        <div class="filter-group"><label>Signal</label><select name="signal"><option value="">Any</option>${Pn.map(e=>`<option value="${e.id}" ${n.signal===e.id?`selected`:``}>${e.label}</option>`).join(``)}</select></div>
        <div class="filter-group"><label>Pattern</label><select name="pattern"><option value="">Any</option>${Fn.map(e=>`<option value="${e.id}" ${n.pattern===e.id?`selected`:``}>${e.label}</option>`).join(``)}</select></div>
      </div>
      <div class="filter-panel" data-panel="formula" hidden>
        <div class="filter-group formula-group">
          <label>Custom Formula</label>
          <input type="text" name="formula" id="formula-input" placeholder="rsi < 35 and changePct > 0" value="${Y(n.formula)}" />
          <span class="formula-status ${Yn(n.formula).valid?`ok`:n.formula?`err`:``}" id="formula-status">
            ${n.formula&&!Yn(n.formula).valid?Yn(n.formula).error:`Fields: price, changePct, rsi, pe, relVolume, sma20, predConf…`}
          </span>
        </div>
        <div class="formula-examples">
          ${or.map(e=>`<button type="button" class="preset-chip formula-chip" data-formula="${Y(e.formula)}">${e.label}</button>`).join(``)}
        </div>
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
            ${J(`symbol`,`Ticker`,r)}
            ${J(`name`,`Company`,r)}
            <th>Trend</th>
            ${J(`sector`,`Sector`,r)}
            ${J(`price`,`Price`,r)}
            ${J(`changePct`,`Change %`,r)}
            <th>Signal</th><th>Pattern</th>
            ${J(`ta.rsi`,`RSI`,r)}
            ${J(`fundamentals.pe`,`P/E`,r)}
            ${J(`fundamentals.peg`,`PEG`,r)}
            ${J(`fundamentals.eps`,`EPS`,r)}
            ${J(`fundamentals.ps`,`P/S`,r)}
            ${J(`fundamentals.dividendYield`,`Div %`,r)}
            ${J(`fundamentals.beta`,`Beta`,r)}
            <th>Prediction</th>
            ${J(`volume`,`Volume`,r)}
            ${J(`marketCap`,`Market Cap`,r)}
          </tr>
        </thead>
        <tbody>
          ${s.length?s.map(Cr).join(``):`<tr><td colspan="18" class="empty-row">No matches — adjust filters</td></tr>`}
        </tbody>
      </table>
    </div>
  `;let c=t.querySelector(`#filter-form`),l=xr(()=>{let e=new FormData(c);$e(Object.fromEntries(e.entries()),{preset:`custom`})},180);c.addEventListener(`input`,l),c.addEventListener(`change`,()=>{let e=new FormData(c);$e(Object.fromEntries(e.entries()),{preset:`custom`})}),t.querySelector(`#reset-filters`)?.addEventListener(`click`,Lt),t.querySelector(`#save-filter`)?.addEventListener(`click`,()=>{let e=prompt(`Name this filter preset:`);e?.trim()&&jt(e.trim())}),t.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Gn.find(t=>t.id===e.dataset.preset);t&&et(t.id,t.filters)})}),t.querySelectorAll(`[data-saved]`).forEach(e=>{e.addEventListener(`click`,()=>Nt(e.dataset.saved))}),t.querySelectorAll(`[data-del]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),Mt(e.dataset.del)})}),t.querySelector(`#export-csv`)?.addEventListener(`click`,()=>dr(s)),t.querySelector(`#export-full`)?.addEventListener(`click`,()=>dr(s,`stockviz-screener-ta.csv`,!0)),t.querySelector(`#share-screener`)?.addEventListener(`click`,async()=>{let e=br(n);try{await navigator.clipboard.writeText(e);let n=t.querySelector(`#share-screener`),r=n.textContent;n.textContent=`Copied!`,setTimeout(()=>{n.textContent=r},2e3)}catch{prompt(`Copy this link:`,e)}}),t.querySelectorAll(`th[data-sort]`).forEach(e=>{e.addEventListener(`click`,()=>rt(e.dataset.sort))}),t.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),t.querySelectorAll(`.screener-tab`).forEach(e=>{e.addEventListener(`click`,()=>{t.querySelectorAll(`.screener-tab`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let n=e.dataset.tab;t.querySelectorAll(`.filter-panel`).forEach(e=>{e.hidden=e.dataset.panel!==n})})}),t.querySelectorAll(`[data-fav]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=ut(e.dataset.fav);e.textContent=n?`★`:`☆`,e.classList.toggle(`starred`,n)})}),t.querySelectorAll(`[data-formula]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=t.querySelector(`#formula-input`);n&&(n.value=e.dataset.formula,$e({formula:e.dataset.formula},{preset:`custom`}))})})}function J(e,t,n){return`<th data-sort="${e}" class="sortable">${t}${n.key===e?n.dir===`asc`?` ▲`:` ▼`:``}</th>`}function Cr(e){let t=dt(e.symbol);return`
    <tr class="clickable" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
      <td class="col-star">
        <button class="star-btn ${t?`starred`:``}" data-fav="${e.symbol}" aria-label="Favorite">${t?`★`:`☆`}</button>
      </td>
      <td class="sym">${e.symbol}</td>
      <td class="name-cell">${e.name||`—`}</td>
      <td>${Jt(e.symbol)}</td>
      <td class="sector-cell">${e.sector||`—`}</td>
      <td data-live="price">$${V(e.price)}</td>
      <td class="${U(e.changePct)}" data-live="pct">${H(e.changePct)}</td>
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
      <td>${Ut(e.volume)}</td>
      <td>${Wt(e.marketCap)}</td>
    </tr>
  `}function wr(e,t){return t.includes(`.`)?t.split(`.`).reduce((e,t)=>e?.[t],e):e[t]}function Tr(e,{key:t,dir:n}){let r=n===`asc`?1:-1;return[...e].sort((e,n)=>{let i=wr(e,t)??``,a=wr(n,t)??``;return typeof i==`number`&&typeof a==`number`?(i-a)*r:String(i).localeCompare(String(a))*r})}function Y(e){return String(e??``).replace(/"/g,`&quot;`)}function Er(e){let t=sr(R(),Qe());e.innerHTML=`
    <div class="page-header">
      <h1>Market Heat Map</h1>
      <p class="page-sub">Sector treemap sized by market cap, colored by daily change. Uses screener filters.</p>
    </div>
    <div id="heatmap-root" class="heatmap-root"></div>
  `,Tn(e.querySelector(`#heatmap-root`),t,e=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))})}async function Dr(e){e.innerHTML=`
    <div class="page-header">
      <h1>Market News</h1>
      <p class="page-sub">Latest headlines from your data feed.</p>
    </div>
    <div class="news-loading panel">Loading news…</div>
  `;let t=await De(L()),n=e.querySelector(`.news-loading`);n&&(n.className=`news-list panel`,n.innerHTML=t.length?t.map(Or).join(``):`<p class="muted">No news available.</p>`,n.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}))}function Or(e){let t=e.datetime?new Date(e.datetime*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):``,n=e.related?.split(`,`)[0]||e.symbol;return`
    <article class="news-item">
      <div class="news-meta">
        <span class="news-source">${e.source||`News`}</span>
        <span class="news-date">${t}</span>
        ${n?`<button class="news-symbol" data-symbol="${n}">${n}</button>`:``}
      </div>
      <a class="news-headline" href="${e.url||`#`}" target="_blank" rel="noopener">${e.headline||e.title||`Untitled`}</a>
      ${e.summary?`<p class="news-summary">${e.summary}</p>`:``}
    </article>
  `}function kr(e){let n=ft(),r=R(),i=0,a=0,o=n.map(e=>{let t=r.get(e.symbol),n=t?.price??0,o=n*e.shares,s=e.costBasis*e.shares,c=o-s,l=s?c/s*100:0;return i+=o,a+=s,{...e,q:t,price:n,value:o,cost:s,pl:c,plPct:l}}),s=i-a,c=a?s/a*100:0;e.innerHTML=`
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
          ${o.length?o.map(Ar).join(``):`<tr><td colspan="8" class="empty-row">No holdings yet — add your first position above.</td></tr>`}
        </tbody>
      </table>
    </div>
  `,e.querySelector(`#add-holding`)?.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(e.target),r=n.get(`symbol`).toString().trim().toUpperCase();if(!t.find(e=>e.symbol===r)){B(`Symbol not in universe`,`error`);return}pt({symbol:r,shares:n.get(`shares`),costBasis:n.get(`costBasis`)}),B(`Added ${r}`,`success`),e.target.reset()}),e.querySelectorAll(`[data-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{mt(e.dataset.remove),B(`Removed ${e.dataset.remove}`,`info`)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Ar(e){return`
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
  `}var jr=[{key:`price`,label:`Price`,fmt:e=>`$${V(e.price)}`},{key:`changePct`,label:`Change %`,fmt:e=>H(e.changePct),cls:e=>U(e.changePct)},{key:`volume`,label:`Volume`,fmt:e=>Ut(e.volume)},{key:`marketCap`,label:`Market Cap`,fmt:e=>Wt(e.marketCap)},{key:`open`,label:`Open`,fmt:e=>`$${V(e.open)}`},{key:`high`,label:`High`,fmt:e=>`$${V(e.high)}`},{key:`low`,label:`Low`,fmt:e=>`$${V(e.low)}`},{key:`sector`,label:`Sector`,fmt:e=>e.sector||`—`}];function Mr(e){let t=ht(),n=R();e.innerHTML=`
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

    ${t.length?Nr(t,n):`
      <div class="empty-compare panel">
        <p>No stocks selected. Press <kbd>/</kbd> or <kbd>Ctrl+K</kbd> to search, or click a ticker above.</p>
      </div>
    `}
  `,e.querySelector(`#clear-compare`)?.addEventListener(`click`,_t),e.querySelectorAll(`[data-add]`).forEach(e=>{e.addEventListener(`click`,()=>gt(e.dataset.add))}),e.querySelectorAll(`[data-rm]`).forEach(e=>{e.addEventListener(`click`,()=>gt(e.dataset.rm))}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),e.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=n.get(e.dataset.spark);t?.sparkline?.length&&qt(e,t.sparkline,{width:120,height:40})})}function Nr(e,n){let r=e.map(e=>{let r=t.find(t=>t.symbol===e);return{sym:e,q:n.get(e),meta:r}});return`
    <div class="compare-grid">
      ${r.map(({sym:e,q:t,meta:n})=>`
        <div class="compare-card panel" data-live-symbol="${e}">
          <div class="compare-card-head">
            <button class="sym compare-sym" data-symbol="${e}">${e}</button>
            <button type="button" class="compare-remove" data-rm="${e}" title="Remove">&times;</button>
          </div>
          <p class="compare-name">${n?.name||t?.name||``}</p>
          ${Jt(e).replace(`width="72" height="24"`,`width="120" height="40"`)}
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
          ${jr.map(e=>`
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
  `}function Pr(e){let t=[...R().values()];e.innerHTML=`
    <div class="page-header">
      <h1>Technical Signals</h1>
      <p class="page-sub">Finviz-style TA signals — click any ticker for prediction details.</p>
    </div>
    <div class="signals-grid">
      ${Pn.map(e=>{let n=t.filter(t=>t.signals?.some(t=>t.id===e.id)).sort((e,t)=>Math.abs(t.changePct)-Math.abs(e.changePct)).slice(0,8);return`
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
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Fr(e){let t=[...R().values()],n=t.flatMap(e=>(e.patterns||[]).map(t=>({...e,pattern:t}))).sort((e,t)=>t.pattern.confidence-e.pattern.confidence);e.innerHTML=`
    <div class="page-header">
      <h1>Pattern Scanner</h1>
      <p class="page-sub">Chart pattern detection with confidence scores and directional bias.</p>
    </div>

    <div class="pattern-summary panel">
      <span><strong>${n.length}</strong> patterns detected across ${t.filter(e=>e.patterns?.length).length} stocks</span>
      <div class="preset-bar">
        ${Fn.slice(0,8).map(e=>{let n=t.filter(t=>t.patterns?.some(t=>t.id===e.id)).length;return`<a href="#/screener?pattern=${e.id}" class="preset-chip">${e.label} (${n})</a>`}).join(``)}
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
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Ir(t){let n=[...R().values()];t.innerHTML=`
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
  `}var Lr=`AAPL`,X={overlays:{sma20:!0,sma50:!0,sma200:!1,bollinger:!1},showVolume:!0,showRsi:!0};function Rr(e){let n=R(),r=n.get(Lr)||n.get(`AAPL`);e.innerHTML=`
    <div class="page-header charts-header">
      <h1>Advanced Charts</h1>
      <select id="chart-symbol" class="chart-select">
        ${t.map(e=>`<option value="${e.symbol}" ${e.symbol===Lr?`selected`:``}>${e.symbol} — ${e.name}</option>`).join(``)}
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
        <div class="chart-overlay-bar">
          <label><input type="checkbox" data-ov="sma20" ${X.overlays.sma20?`checked`:``} /> SMA20</label>
          <label><input type="checkbox" data-ov="sma50" ${X.overlays.sma50?`checked`:``} /> SMA50</label>
          <label><input type="checkbox" data-ov="sma200" ${X.overlays.sma200?`checked`:``} /> SMA200</label>
          <label><input type="checkbox" data-ov="bollinger" ${X.overlays.bollinger?`checked`:``} /> Bollinger</label>
          <label><input type="checkbox" data-vol ${X.showVolume?`checked`:``} /> Volume</label>
          <label><input type="checkbox" data-rsi ${X.showRsi?`checked`:``} /> RSI</label>
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
  `;let i=()=>{let t=e.querySelector(`#full-chart`);t&&r?.candles&&Qt(t,r.candles,{height:320,...X})};i();let a=e.querySelector(`#full-chart`);a&&new ResizeObserver(i).observe(a),e.querySelector(`#chart-symbol`)?.addEventListener(`change`,t=>{Lr=t.target.value,Rr(e)}),e.querySelectorAll(`[data-ov]`).forEach(e=>{e.addEventListener(`change`,()=>{X.overlays[e.dataset.ov]=e.checked,i()})}),e.querySelector(`[data-vol]`)?.addEventListener(`change`,e=>{X.showVolume=e.target.checked,i()}),e.querySelector(`[data-rsi]`)?.addEventListener(`change`,e=>{X.showRsi=e.target.checked,i()})}function zr(e,t,n){return`
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
  `}function Br(e){e.innerHTML=`
    <div class="page-header"><h1>Futures &amp; Forex</h1></div>
    <div class="three-col">
      ${zr(`Futures`,On,[`Contract`,`Last`,`Change`,`Change %`])}
      ${zr(`Forex & Crypto`,kn,[`Pair`,`Last`,`Change`,`Change %`])}
      ${zr(`Bonds`,An,[`Bond`,`Yield`,`Change`,`Change %`])}
    </div>
  `}function Vr(e){e.innerHTML=`
    <div class="page-header"><h1>Economic &amp; Earnings Calendar</h1></div>
    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">Earnings</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Symbol</th><th>Date</th><th>EPS Est.</th><th>Cap</th></tr></thead>
          <tbody>
            ${Mn.map(e=>`
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
            ${Nn.map(e=>`
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
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Hr(e){e.innerHTML=`
    <div class="page-header"><h1>Insider Trading</h1><p class="page-sub">Recent insider transactions (simulated data).</p></div>
    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr><th>Ticker</th><th>Insider</th><th>Relationship</th><th>Date</th><th>Transaction</th><th>Cost</th><th>#Shares</th><th>Value ($)</th></tr>
        </thead>
        <tbody>
          ${jn.map(e=>`
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
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Ur(){return`Notification`in window}function Wr(){return Ur()?Notification.permission:`unsupported`}async function Gr(){return Ur()?Notification.permission===`granted`?`granted`:Notification.permission===`denied`?`denied`:await Notification.requestPermission():`unsupported`}function Kr({title:e,body:t,tag:n}){if(!Ur()||Notification.permission!==`granted`)return!1;try{return new Notification(e,{body:t,tag:n||`stockviz-alert`,icon:`/favicon.svg`,silent:!1}),!0}catch{return!1}}function qr(e){let t=L();e.innerHTML=`
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
            <input type="password" id="apiKey" name="apiKey" placeholder="Paste your key…" value="${Yr(t.apiKey)}" autocomplete="off" />
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
        <legend>Notifications</legend>
        <div class="field checkbox-field">
          <label>
            <input type="checkbox" name="pushNotifications" ${t.pushNotifications?`checked`:``} ${Ur()?``:`disabled`} />
            Browser push notifications for alerts
          </label>
          ${Ur()?`<p class="field-hint">Permission: <strong>${Wr()}</strong>
            ${Wr()==="default"?` — save settings to request permission`:``}</p>`:`<p class="field-hint">Not supported in this browser.</p>`}
        </div>
        <div class="field checkbox-field">
          <label>
            <input type="checkbox" name="alertSound" ${t.alertSound===!1?``:`checked`} />
            In-app toast notifications (always on when alerts fire)
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Watchlist</legend>
        <div class="field">
          <label for="watchlist">Symbols (comma-separated)</label>
          <input type="text" id="watchlist" name="watchlist" value="${Yr(t.watchlist.join(`, `))}" placeholder="AAPL, MSFT, NVDA" />
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
  `;let n=e.querySelector(`#settings-form`);n.addEventListener(`submit`,async t=>{t.preventDefault();let r=new FormData(n),i=r.get(`watchlist`).split(`,`).map(e=>e.trim().toUpperCase()).filter(Boolean),a=r.get(`pushNotifications`)===`on`;Xe({apiKey:r.get(`apiKey`),refreshInterval:Number(r.get(`refreshInterval`))||30,useMockData:r.get(`useMockData`)===`on`,watchlist:i,pushNotifications:a,alertSound:r.get(`alertSound`)===`on`}),a&&Wr()==="default"&&await Gr(),Jr(e),window.dispatchEvent(new CustomEvent(`stockviz:settings-saved`))}),e.querySelector(`#test-api`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#apiKey`).value,n=e.querySelector(`#api-status`);n.textContent=`Testing…`,n.className=`api-status`;let r=await ke(t);n.textContent=r.message,n.className=`api-status ${r.valid?`ok`:`err`}`})}function Jr(e){let t=e.querySelector(`.save-toast`);t||(t=document.createElement(`p`),t.className=`save-toast`,e.querySelector(`.settings-form`)?.appendChild(t)),t.textContent=`Settings saved.`,setTimeout(()=>t.remove(),2500)}function Yr(e){return String(e??``).replace(/"/g,`&quot;`)}var Xr=[{id:`2x2`,cols:2,slots:4},{id:`2x3`,cols:3,slots:6},{id:`3x3`,cols:3,slots:9},{id:`4x2`,cols:4,slots:8}],Zr=[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`,`JPM`,`SPY`];function Qr(e){let t=Ot(),n=Xr.find(e=>e.id===t.id)||Xr[0],r=R(),i=[...t.symbols];for(;i.length<n.slots;)i.push(Zr[i.length%Zr.length]);e.innerHTML=`
    <div class="page-header multichart-header">
      <div>
        <h1>Multi-Chart</h1>
        <p class="page-sub">Finviz Elite-style multi-layout charts — click a chart to change symbol.</p>
      </div>
      <div class="multichart-controls">
        ${Xr.map(e=>`
          <button type="button" class="preset-chip ${t.id===e.id?`active`:``}" data-layout="${e.id}">${e.id}</button>
        `).join(``)}
        <button type="button" class="btn-secondary" id="mc-watchlist">Load Watchlist</button>
        <button type="button" class="btn-secondary" id="mc-favorites">Load Favorites</button>
      </div>
    </div>
    <div class="multichart-grid cols-${n.cols}" id="mc-grid">
      ${i.slice(0,n.slots).map((e,t)=>ei(e,r.get(e),t)).join(``)}
    </div>
  `,e.querySelectorAll(`[data-layout]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Xr.find(t=>t.id===e.dataset.layout);kt({id:t.id,symbols:i.slice(0,t.slots)})})}),e.querySelector(`#mc-watchlist`)?.addEventListener(`click`,()=>{let e=$r();kt({id:t.id,symbols:e.slice(0,n.slots)})}),e.querySelector(`#mc-favorites`)?.addEventListener(`click`,()=>{kt({id:t.id,symbols:lt().slice(0,n.slots)})}),e.querySelectorAll(`.mc-cell`).forEach(e=>{let n=e.querySelector(`.mc-chart`),i=e.dataset.symbol,a=r.get(i);n&&a?.candles&&Qt(n,a.candles,{height:140}),e.querySelector(`.mc-sym-select`)?.addEventListener(`change`,n=>{let r=Number(e.dataset.idx),i=[...t.symbols];for(;i.length<=r;)i.push(Zr[i.length%Zr.length]);i[r]=n.target.value,kt({id:t.id,symbols:i})}),e.addEventListener(`click`,e=>{e.target.tagName!==`SELECT`&&window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:i}))})})}function $r(){try{return JSON.parse(localStorage.getItem(`stockviz-settings`)||`{}`).watchlist||Zr}catch{return Zr}}function ei(e,n,r){let i=U(n?.changePct);return`
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
  `}function ti(e){let n=vt(),r=n.filter(e=>e.active&&!e.triggered),i=n.filter(e=>e.triggered);e.innerHTML=`
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
            ${zt.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}
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
        ${r.length?ni(r,!1):`<p class="muted">No active alerts.</p>`}
      </section>
      <section class="panel">
        <div class="panel-title-row">
          <h2 class="panel-title">Triggered (${i.length})</h2>
          ${i.length?`
            <div class="panel-actions">
              <button class="btn-ghost btn-sm" id="rearm-all">Re-arm All</button>
              <button class="btn-ghost btn-sm" id="clear-triggered">Clear All</button>
            </div>
          `:``}
        </div>
        ${i.length?ni(i,!0):`<p class="muted">None triggered yet.</p>`}
      </section>
    </div>
  `;let a=e.querySelector(`#alert-type`),o=e.querySelector(`#alert-value-group`),s=e.querySelector(`#alert-value`);function c(){let t=zt.find(e=>e.id===a.value);t&&(t.valueType===`signal`?s.outerHTML=`<select name="value" id="alert-value">${Pn.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}</select>`:t.valueType===`pattern`?s.outerHTML=`<select name="value" id="alert-value">${Fn.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}</select>`:t.valueType===`prediction`?s.outerHTML=`<select name="value" id="alert-value"><option value="bullish">Bullish</option><option value="bearish">Bearish</option><option value="neutral">Neutral</option></select>`:o.querySelector(`select`)?o.innerHTML=`<label>Value</label><input type="text" name="value" id="alert-value" placeholder="${t.placeholder||``}" />`:e.querySelector(`#alert-value`).placeholder=t.placeholder||``)}a?.addEventListener(`change`,c),c(),e.querySelector(`#alert-form`)?.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(e.target),r=n.get(`symbol`).toString().trim().toUpperCase();if(!t.find(e=>e.symbol===r)){B(`Symbol not in universe`,`error`);return}xt({symbol:r,type:n.get(`type`),value:n.get(`value`),note:n.get(`note`)||``}),B(`Alert created for ${r}`,`success`),e.target.reset()}),e.querySelector(`#clear-triggered`)?.addEventListener(`click`,Tt),e.querySelector(`#rearm-all`)?.addEventListener(`click`,()=>{Dt(),B(`All triggered alerts re-armed`,`success`),ti(e)}),e.querySelectorAll(`[data-rearm]`).forEach(t=>{t.addEventListener(`click`,()=>{Et(t.dataset.rearm),B(`Alert re-armed`,`success`),ti(e)})}),e.querySelectorAll(`[data-del-alert]`).forEach(e=>{e.addEventListener(`click`,()=>St(e.dataset.delAlert))}),e.querySelectorAll(`[data-toggle-alert]`).forEach(e=>{e.addEventListener(`click`,()=>Ct(e.dataset.toggleAlert))}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function ni(e,t){return`
    <table class="data-table finviz-tbl">
      <thead><tr><th>Symbol</th><th>Condition</th><th>Value</th><th>${t?`Fired`:`Status`}</th><th></th></tr></thead>
      <tbody>
        ${e.map(e=>`
          <tr>
            <td class="sym clickable" data-symbol="${e.symbol}">${e.symbol}</td>
            <td>${zt.find(t=>t.id===e.type)?.label||e.type}</td>
            <td>${e.value}</td>
            <td>${t?`<span class="pos">${e.triggerDetail||`Triggered`}</span> <span class="muted">${ri(e.triggeredAt)}</span>`:e.active?`Watching`:`Paused`}</td>
            <td>
              ${t?`<button class="btn-ghost btn-sm" data-rearm="${e.id}">Re-arm</button>`:`<button class="btn-ghost btn-sm" data-toggle-alert="${e.id}">${e.active?`Pause`:`Resume`}</button>`}
              <button class="btn-ghost btn-sm" data-del-alert="${e.id}">×</button>
            </td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `}function ri(e){return e?new Date(e).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):``}function ii(e){let t=R(),n=sr(t,Qe()),r=[...t.values()],i=pr(r.slice(0,2));e.innerHTML=`
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
  `,e.querySelector(`#exp-csv`)?.addEventListener(`click`,()=>{dr(n,`stockviz-screener.csv`,!1),B(`Exported ${n.length} rows`,`success`)}),e.querySelector(`#exp-csv-full`)?.addEventListener(`click`,()=>{dr(r,`stockviz-full-ta.csv`,!0),B(`Exported ${r.length} rows with TA`,`success`)}),e.querySelector(`#exp-json`)?.addEventListener(`click`,()=>{fr(r),B(`Exported ${r.length} stocks as JSON`,`success`)}),e.querySelector(`#exp-clipboard`)?.addEventListener(`click`,async()=>{try{B(`Copied ${await mr(r)} stocks to clipboard`,`success`)}catch{B(`Clipboard failed — use JSON download`,`error`)}}),e.querySelector(`#exp-sample`)?.addEventListener(`click`,()=>{fr(r.slice(0,5),`stockviz-api-sample.json`)})}function ai(t){let n=new Map;for(let t of e)n.set(t,[]);for(let e of t.values())!e.sector||!n.has(e.sector)||n.get(e.sector).push(e);return e.map(e=>{let t=n.get(e)||[],r=t.length||1,i=t.reduce((e,t)=>e+(t.changePct||0),0)/r,a=t.filter(e=>e.changePct>0).length,o=t.filter(e=>e.prediction?.direction===`bullish`).length,s=t.reduce((e,t)=>e+(t.ta?.rsi??50),0)/r,c=t.reduce((e,t)=>e+(t.ta?.relVolume??1),0)/r,l=t.filter(e=>e.ta?.sma50&&e.price>e.ta.sma50).length,u=i*2+a/r*15+o/r*10+l/r*8,d=Math.max(0,Math.min(100,50+u));return{sector:e,count:t.length,avgChange:i,advancing:a,advancingPct:a/r*100,bullish:o,bullishPct:o/r*100,avgRsi:s,relVol:c,aboveSma50Pct:l/r*100,momentum:u,strength:d,topStock:t.sort((e,t)=>t.changePct-e.changePct)[0]||null,laggard:t.sort((e,t)=>e.changePct-t.changePct)[0]||null}}).sort((e,t)=>t.momentum-e.momentum)}function oi(e){return e.momentum>8?{label:`Leading`,color:`var(--green)`}:e.momentum>2?{label:`Improving`,color:`var(--accent)`}:e.momentum>-2?{label:`Neutral`,color:`var(--text-muted)`}:e.momentum>-8?{label:`Weakening`,color:`var(--yellow)`}:{label:`Lagging`,color:`var(--red)`}}function si(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}var ci=[`Call Sweep`,`Put Sweep`,`Block Call`,`Block Put`,`Unusual OI`,`Golden Sweep`],li=[`bullish`,`bearish`,`neutral`];function ui(e,t=40){return[...e.values()].filter(e=>e.volume>1e6).sort((e,t)=>(t.ta?.relVolume??1)-(e.ta?.relVolume??1)).slice(0,t).map(e=>{let t=si(e.symbol+`opt`),n=Math.round(e.price*(.9+t()*.2)*2)/2,r=Math.round((.5+t()*8)*100)/100,i=Math.floor(500+t()*15e3),a=ci[Math.floor(t()*ci.length)],o=[1,3,7,14,30,45,60][Math.floor(t()*7)],s=a.includes(`Call`)||a.includes(`Golden`)?`bullish`:a.includes(`Put`)?`bearish`:li[Math.floor(t()*3)],c=i*r*100;return{symbol:e.symbol,type:a,strike:n,expiry:`+${o}d`,premium:r,contracts:i,notional:c,sentiment:s,relVolume:e.ta?.relVolume??1,price:e.price,changePct:e.changePct,unusual:(e.ta?.relVolume??1)>1.3||i>5e3}}).sort((e,t)=>t.notional-e.notional)}var di=[`Strong Buy`,`Buy`,`Hold`,`Sell`,`Strong Sell`];function fi(e){return[...e.values()].map(e=>{let t=si(e.symbol+`analyst`),n=Math.floor(3+t()*18),r=di[Math.floor(t()*di.length)],i=Math.round(e.price*(.85+t()*.35)*100)/100,a=(i-e.price)/e.price*100,o=Math.floor(t()*5)-2;return{symbol:e.symbol,name:e.name,price:e.price,consensus:r,target:i,upside:a,numAnalysts:n,strongBuy:Math.floor(t()*n*.4),buy:Math.floor(t()*n*.3),hold:Math.floor(t()*n*.4),sell:Math.floor(t()*3),strongSell:Math.floor(t()*2),revisions:o,lastUpdate:`${Math.floor(1+t()*30)}d ago`}}).sort((e,t)=>t.upside-e.upside)}function pi(e){return[...e.values()].map(e=>{let t=si(e.symbol+`short`),n=Math.round((.5+t()*25)*100)/100,r=Math.round((.5+t()*12)*10)/10,i=Math.round((t()*6-3)*100)/100,a=Math.min(100,Math.round(n*2+(e.ta?.relVolume??1)*10+Math.abs(e.changePct)*2));return{symbol:e.symbol,name:e.name,price:e.price,changePct:e.changePct,shortPct:n,daysToCover:r,change:i,squeezeScore:a,sector:e.sector}}).sort((e,t)=>t.squeezeScore-e.squeezeScore)}function mi(e){let t=new Map;for(let n of e.values()){if(!n.sector)continue;t.has(n.sector)||t.set(n.sector,{adv:0,dec:0,vol:0,count:0});let e=t.get(n.sector);e.count++,n.changePct>0?e.adv++:n.changePct<0&&e.dec++,e.vol+=n.volume||0}return[...t.entries()].map(([e,t])=>({sector:e,...t,advPct:t.adv/t.count*100,avgVol:t.vol/t.count})).sort((e,t)=>t.advPct-e.advPct)}function hi(e){let t=R(),n=L();lt();let r=ft(),i=[...t.values()],a=T(t),o=ai(t).slice(0,5),s=ui(t,6),c=i.filter(e=>e.prediction?.direction===`bullish`).sort((e,t)=>(t.prediction?.confidence??0)-(e.prediction?.confidence??0)).slice(0,6);e.innerHTML=`
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
            ${o.map(e=>{let t=oi(e);return`<tr>
                <td><a href="#/rotation">${e.sector}</a></td>
                <td class="${U(e.avgChange)}">${H(e.avgChange)}</td>
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
            ${c.map(e=>`
              <tr class="clickable" data-symbol="${e.symbol}">
                <td class="sym">${e.symbol}</td>
                <td>${e.prediction.confidence}%</td>
                <td>$${V(e.prediction.priceTarget)}</td>
                <td class="${U(e.changePct)}">${H(e.changePct)}</td>
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
                <td>$${V(n.price)}</td>
                <td class="${U(n.changePct)}">${H(n.changePct)}</td>
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

      <section class="panel dash-widget">
        <h2 class="widget-title">Portfolio Snapshot</h2>
        ${r.length?(()=>{let e=0,n=0;r.forEach(r=>{let i=t.get(r.symbol);e+=(i?.price??0)*r.shares,n+=r.costBasis*r.shares});let i=e-n,a=n?i/n*100:0;return`
            <div class="dash-portfolio-summary">
              <div><span class="muted">Value</span> <strong>$${V(e)}</strong></div>
              <div><span class="muted">P&amp;L</span> <strong class="${U(i)}">${H(a)}</strong></div>
            </div>
            <table class="data-table compact finviz-tbl">
              <tbody>
                ${r.slice(0,5).map(e=>{let n=t.get(e.symbol),r=n?(n.price-e.costBasis)*e.shares:0;return`<tr class="clickable" data-symbol="${e.symbol}">
                    <td class="sym">${e.symbol}</td>
                    <td>$${V(n?.price)}</td>
                    <td class="${U(r)}">${n?H((n.price-e.costBasis)/e.costBasis*100):`—`}</td>
                  </tr>`}).join(``)}
              </tbody>
            </table>
          `})():`<p class="muted">No holdings — <a href="#/portfolio">add positions</a></p>`}
      </section>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function gi(e){let t=R(),n=T(t),r=mi(t),i=[...t.values()],a=i.filter(e=>(e.ta?.relVolume??1)>1.5).sort((e,t)=>(t.ta?.relVolume??1)-(e.ta?.relVolume??1)).slice(0,12),o=i.filter(e=>(e.ta?.rsi??50)<25||(e.ta?.rsi??50)>75).sort((e,t)=>Math.abs(50-(t.ta?.rsi??50))-Math.abs(50-(e.ta?.rsi??50))).slice(0,12),s=n.declining?n.advancing/n.declining:n.advancing;e.innerHTML=`
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
                <td class="${U(e.advPct-50)}">${e.advPct.toFixed(0)}%</td>
                <td>${e.adv}/${e.dec}</td>
                <td>${Ut(e.avgVol)}</td>
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
                <td class="${U(e.changePct)}">${H(e.changePct)}</td>
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
                <td class="${U(e.changePct)}">${H(e.changePct)}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </section>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function _i(e,t){let n=Math.min(e.length,t.length);if(n<3)return 0;let r=e.slice(-n),i=t.slice(-n),a=r.reduce((e,t)=>e+t,0)/n,o=i.reduce((e,t)=>e+t,0)/n,s=0,c=0,l=0;for(let e=0;e<n;e++){let t=r[e]-a,n=i[e]-o;s+=t*n,c+=t*t,l+=n*n}let u=Math.sqrt(c*l);return u?s/u:0}function vi(e){if(!e?.length)return[];let t=e.map(e=>e.c),n=[];for(let e=1;e<t.length;e++)n.push((t[e]-t[e-1])/t[e-1]);return n}function yi(e,t,{period:n=30}={}){let r=new Map;for(let i of e){let e=t.get(i)?.candles;e?.length&&r.set(i,vi(e).slice(-n))}let i=[...r.keys()];return{symbols:i,matrix:i.map(e=>i.map(t=>e===t?1:_i(r.get(e),r.get(t))))}}function bi(e){return e>=.7?`rgba(63,185,80,0.85)`:e>=.4?`rgba(63,185,80,0.45)`:e>=.15?`rgba(88,166,255,0.35)`:e>-.15?`rgba(139,148,158,0.25)`:e>-.4?`rgba(248,81,73,0.35)`:e>-.7?`rgba(248,81,73,0.55)`:`rgba(248,81,73,0.85)`}var xi={mag7:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`],indices:[`SPY`,`QQQ`,`DIA`,`IWM`,`VTI`],semis:[`NVDA`,`AMD`,`INTC`,`AVGO`,`QCOM`,`MU`,`AMAT`],banks:[`JPM`,`BAC`,`WFC`,`GS`,`MS`,`C`]},Z=`mag7`,Si=``;function Ci(e){let t=R(),n=lt(),{symbols:r,matrix:i}=yi(wi(Z,Si,n),t);e.innerHTML=`
    <div class="page-header corr-header">
      <div>
        <h1>Correlation Matrix</h1>
        <p class="page-sub">Pearson correlation of daily returns — spot diversification and sector clustering.</p>
      </div>
      <div class="corr-controls">
        <select id="corr-set" class="chart-select">
          <option value="mag7" ${Z===`mag7`?`selected`:``}>Mag 7</option>
          <option value="indices" ${Z===`indices`?`selected`:``}>Indices &amp; ETFs</option>
          <option value="semis" ${Z===`semis`?`selected`:``}>Semiconductors</option>
          <option value="banks" ${Z===`banks`?`selected`:``}>Banks</option>
          <option value="watchlist" ${Z===`watchlist`?`selected`:``}>Watchlist</option>
          <option value="custom" ${Z===`custom`?`selected`:``}>Custom</option>
        </select>
        <input type="text" id="corr-custom" class="corr-custom-input" placeholder="AAPL, MSFT, NVDA"
          value="${Si}" ${Z===`custom`?``:`hidden`} />
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
                  <td class="corr-cell" style="background:${bi(e)}" title="${r[t]} vs ${r[n]}: ${e.toFixed(2)}">
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
          ${Ti(r,i).map(e=>`
            <span class="corr-pair-chip">${e.a} ↔ ${e.b} <strong>${e.r.toFixed(2)}</strong></span>
          `).join(``)}
        </div>
      </section>
    `}
  `,e.querySelector(`#corr-set`)?.addEventListener(`change`,t=>{Z=t.target.value;let n=e.querySelector(`#corr-custom`);n&&(n.hidden=Z!==`custom`),Ci(e)}),e.querySelector(`#corr-custom`)?.addEventListener(`change`,t=>{Si=t.target.value,Z=`custom`,Ci(e)})}function wi(e,t,n){return e===`custom`&&t?t.split(`,`).map(e=>e.trim().toUpperCase()).filter(Boolean).slice(0,12):e===`watchlist`?n.slice(0,12):xi[e]||xi.mag7}function Ti(e,t){let n=[];for(let r=0;r<e.length;r++)for(let i=r+1;i<e.length;i++)n.push({a:e[r],b:e[i],r:t[r][i]});return n.sort((e,t)=>Math.abs(e.r)-Math.abs(t.r)).slice(0,6)}var Ei={rsi_oversold:{label:`RSI Oversold Bounce`,desc:`Buy when RSI < 30, sell when RSI > 70`,entry:e=>e.rsi<30,exit:e=>e.rsi>70},rsi_overbought_short:{label:`RSI Overbought Fade`,desc:`Short when RSI > 70, cover when RSI < 40`,entry:e=>e.rsi>70,exit:e=>e.rsi<40,short:!0},sma_cross:{label:`SMA 20/50 Cross`,desc:`Buy golden cross, sell death cross`,entry:e=>e.sma20>e.sma50&&e.prevSma20<=e.prevSma50,exit:e=>e.sma20<e.sma50&&e.prevSma20>=e.prevSma50},momentum_breakout:{label:`5-Day Momentum`,desc:`Buy 3%+ 5-day move, exit on reversal`,entry:e=>e.mom5>3,exit:e=>e.mom5<0},macd_trend:{label:`MACD Histogram Trend`,desc:`Buy positive histogram, sell negative`,entry:e=>e.hist>0&&e.prevHist<=0,exit:e=>e.hist<0&&e.prevHist>=0}};function Di(){return Object.entries(Ei).map(([e,t])=>({id:e,label:t.label,desc:t.desc}))}function Oi(e,t){let r=e.slice(0,t+1).map(e=>e.c),a=e.slice(0,t).map(e=>e.c),o=i(r),s=n(r,20),c=n(r,50),l=n(a,20),u=n(a,50),d=r.length>=6?(r[r.length-1]-r[r.length-6])/r[r.length-6]*100:0,f=ki(r,12),p=ki(r,26),m=(f??0)-(p??0),h=ki(a,12),g=ki(a,26),ee=(h??0)-(g??0);return{price:r[r.length-1],rsi:o,sma20:s,sma50:c,prevSma20:l,prevSma50:u,mom5:d,hist:m,prevHist:ee}}function ki(e,t){if(e.length<t)return null;let n=2/(t+1),r=e.slice(0,t).reduce((e,t)=>e+t,0)/t;for(let i=t;i<e.length;i++)r=e[i]*n+r*(1-n);return r}function Ai(e,t,{initialCapital:n=1e4}={}){let r=Ei[t];if(!r||!e?.length)return{trades:[],equity:[],stats:Mi(n)};let i=[],a=[],o=n,s=0,c=0,l=0,u=r.short;for(let t=20;t<e.length;t++){let d=Oi(e,t),f=d.price;if(!s&&r.entry(d))s=o/f,c=f,l=t,o=0;else if(s&&r.exit(d)){let e=u?(c-f)*s:(f-c)*s,r=(f-c)/c*100*(u?-1:1);i.push({entryIdx:l,exitIdx:t,entryPrice:c,exitPrice:f,pl:e,plPct:r,days:t-l}),o=n+i.reduce((e,t)=>e+t.pl,0),s=0}let p=s?u?o+(c-f)*s:s*f:o;a.push({i:t,value:p,date:e[t].t})}if(s){let t=e[e.length-1].c,n=u?(c-t)*s:(t-c)*s;i.push({entryIdx:l,exitIdx:e.length-1,entryPrice:c,exitPrice:t,pl:n,plPct:(t-c)/c*100*(u?-1:1),days:e.length-1-l,open:!0})}return{trades:i,equity:a,stats:ji(i,n,a.length?a[a.length-1].value:n,a),strategy:r.label}}function ji(e,t,n,r){let i=e.filter(e=>!e.open),a=i.filter(e=>e.pl>0),o=n-t,s=o/t*100,c=t,l=0;for(let e of r){e.value>c&&(c=e.value);let t=(c-e.value)/c*100;t>l&&(l=t)}let u=r.slice(1).map((e,t)=>(e.value-r[t].value)/r[t].value),d=u.length?u.reduce((e,t)=>e+t,0)/u.length:0,f=u.length>1?Math.sqrt(u.reduce((e,t)=>e+(t-d)**2,0)/u.length):0,p=f?d/f*Math.sqrt(252):0;return{totalReturn:s,totalPl:o,finalValue:n,tradeCount:i.length,winRate:i.length?a.length/i.length*100:0,avgWin:a.length?a.reduce((e,t)=>e+t.plPct,0)/a.length:0,avgLoss:i.filter(e=>e.pl<=0).length?i.filter(e=>e.pl<=0).reduce((e,t)=>e+t.plPct,0)/i.filter(e=>e.pl<=0).length:0,maxDrawdown:l,sharpe:p,profitFactor:i.filter(e=>e.pl<0).length?Math.abs(a.reduce((e,t)=>e+t.pl,0)/i.filter(e=>e.pl<0).reduce((e,t)=>e+t.pl,0)):a.length?999:0}}function Mi(e){return{totalReturn:0,totalPl:0,finalValue:e,tradeCount:0,winRate:0,avgWin:0,avgLoss:0,maxDrawdown:0,sharpe:0,profitFactor:0}}function Ni(e,{simulations:t=500,days:n=20}={}){if(!e?.length)return null;let r=e.map(e=>e.c),i=[];for(let e=1;e<r.length;e++)i.push((r[e]-r[e-1])/r[e-1]);let a=i.reduce((e,t)=>e+t,0)/i.length,o=Math.sqrt(i.reduce((e,t)=>e+(t-a)**2,0)/i.length),s=r[r.length-1],c=[];for(let e=0;e<t;e++){let e=s,t=[e];for(let r=0;r<n;r++){let n=Pi();e=Math.max(1,e*(1+a+o*n)),t.push(e)}c.push(t)}let l=c.map(e=>e[e.length-1]).sort((e,t)=>e-t),u=e=>l[Math.floor(t*e)];return{start:s,days:n,simulations:t,median:u(.5),p10:u(.1),p90:u(.9),bullishPct:l.filter(e=>e>s).length/t*100,paths:c.slice(0,50)}}function Pi(){let e=1-Math.random(),t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}var Fi=`AAPL`,Ii=`rsi_oversold`;function Li(e){let n=R().get(Fi),r=Di(),i=n?.candles||[],a=Ai(i,Ii),o=Ni(i);e.innerHTML=`
    <div class="page-header backtest-header">
      <div>
        <h1>Strategy Backtester</h1>
        <p class="page-sub">Test TA strategies on historical candles with equity curve, Sharpe, and drawdown.</p>
      </div>
      <div class="backtest-controls">
        <select id="bt-symbol" class="chart-select">
          ${t.slice(0,80).map(e=>`<option value="${e.symbol}" ${e.symbol===Fi?`selected`:``}>${e.symbol}</option>`).join(``)}
        </select>
        <select id="bt-strategy" class="chart-select">
          ${r.map(e=>`<option value="${e.id}" ${e.id===Ii?`selected`:``}>${e.label}</option>`).join(``)}
        </select>
      </div>
    </div>

    ${n?`
      <p class="page-sub">${r.find(e=>e.id===Ii)?.desc}</p>

      <div class="backtest-stats">
        <div class="summary-card"><span class="summary-label">Total Return</span>
          <span class="summary-value ${U(a.stats.totalReturn)}">${a.stats.totalReturn.toFixed(1)}%</span></div>
        <div class="summary-card"><span class="summary-label">Final Value</span>
          <span class="summary-value">$${V(a.stats.finalValue)}</span></div>
        <div class="summary-card"><span class="summary-label">Win Rate</span>
          <span class="summary-value">${a.stats.winRate.toFixed(0)}%</span></div>
        <div class="summary-card"><span class="summary-label">Max Drawdown</span>
          <span class="summary-value neg">${a.stats.maxDrawdown.toFixed(1)}%</span></div>
        <div class="summary-card"><span class="summary-label">Sharpe</span>
          <span class="summary-value">${a.stats.sharpe.toFixed(2)}</span></div>
        <div class="summary-card"><span class="summary-label">Trades</span>
          <span class="summary-value">${a.stats.tradeCount}</span></div>
        <div class="summary-card"><span class="summary-label">Profit Factor</span>
          <span class="summary-value">${a.stats.profitFactor>100?`∞`:a.stats.profitFactor.toFixed(2)}</span></div>
      </div>

      <div class="two-col">
        <section class="panel">
          <h2 class="panel-title">Equity Curve</h2>
          <canvas id="equity-chart" class="equity-canvas" height="200"></canvas>
        </section>
        <section class="panel">
          <h2 class="panel-title">Monte Carlo (20d, 500 sims)</h2>
          ${o?`
            <div class="monte-stats">
              <div><span class="muted">Median</span> $${V(o.median)}</div>
              <div><span class="muted">10th %ile</span> $${V(o.p10)}</div>
              <div><span class="muted">90th %ile</span> $${V(o.p90)}</div>
              <div><span class="muted">Bullish</span> ${o.bullishPct.toFixed(0)}%</div>
            </div>
            <canvas id="monte-chart" class="equity-canvas" height="200"></canvas>
          `:`<p class="muted">Insufficient data</p>`}
        </section>
      </div>

      <section class="panel">
        <h2 class="panel-title">Trade Log (${a.trades.length})</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Entry</th><th>Exit</th><th>Entry $</th><th>Exit $</th><th>P&amp;L %</th><th>Days</th><th>Status</th></tr></thead>
          <tbody>
            ${a.trades.length?a.trades.map(e=>`
              <tr>
                <td>${e.entryIdx}</td><td>${e.exitIdx}</td>
                <td>$${V(e.entryPrice)}</td><td>$${V(e.exitPrice)}</td>
                <td class="${U(e.plPct)}">${e.plPct.toFixed(2)}%</td>
                <td>${e.days}</td>
                <td>${e.open?`Open`:`Closed`}</td>
              </tr>
            `).join(``):`<tr><td colspan="7" class="empty-row">No trades generated</td></tr>`}
          </tbody>
        </table>
      </section>
    `:`<p class="muted">Loading quote data…</p>`}
  `,a.equity?.length&&Ri(e.querySelector(`#equity-chart`),a.equity,1e4),o?.paths&&zi(e.querySelector(`#monte-chart`),o),e.querySelector(`#bt-symbol`)?.addEventListener(`change`,t=>{Fi=t.target.value,Li(e)}),e.querySelector(`#bt-strategy`)?.addEventListener(`change`,t=>{Ii=t.target.value,Li(e)})}function Ri(e,t,n){if(!e)return;let r=window.devicePixelRatio||1,i=e.parentElement?.clientWidth||400;e.width=i*r,e.style.width=`${i}px`,e.height=200*r;let a=e.getContext(`2d`);a.scale(r,r);let o=t.map(e=>e.value),s=Math.min(...o,n)*.98,c=Math.max(...o,n)*1.02-s||1;a.fillStyle=getComputedStyle(document.documentElement).getPropertyValue(`--bg-panel`).trim()||`#1c2128`,a.fillRect(0,0,i,200),a.strokeStyle=`rgba(139,148,158,0.3)`,a.beginPath(),a.moveTo(10,10+180*(1-(n-s)/c)),a.lineTo(i-10,10+180*(1-(n-s)/c)),a.stroke(),a.strokeStyle=`#58a6ff`,a.lineWidth=2,a.beginPath(),o.forEach((e,t)=>{let n=10+t/(o.length-1||1)*(i-20),r=10+180*(1-(e-s)/c);t===0?a.moveTo(n,r):a.lineTo(n,r)}),a.stroke()}function zi(e,t){if(!e)return;let n=window.devicePixelRatio||1,r=e.parentElement?.clientWidth||400;e.width=r*n,e.style.width=`${r}px`,e.height=200*n;let i=e.getContext(`2d`);i.scale(n,n);let a=t.paths.flat(),o=Math.min(...a)*.98,s=Math.max(...a)*1.02-o||1;t.paths.forEach((e,t)=>{i.strokeStyle=`rgba(88,166,255,${.15+t%3*.05})`,i.lineWidth=1,i.beginPath(),e.forEach((t,n)=>{let a=10+n/(e.length-1)*(r-20),c=10+180*(1-(t-o)/s);n===0?i.moveTo(a,c):i.lineTo(a,c)}),i.stroke()}),i.strokeStyle=`#3fb950`,i.lineWidth=2;let c=t.paths[0];c&&(i.beginPath(),c.forEach((e,n)=>{let a=10+n/(c.length-1)*(r-20),l=10+180*(1-(t.median-o)/s);n===0?i.moveTo(a,l):i.lineTo(a,(t.median,l))}))}var Bi=`all`;function Vi(e){let t=ui(R(),60);Bi===`unusual`?t=t.filter(e=>e.unusual):Bi===`bullish`?t=t.filter(e=>e.sentiment===`bullish`):Bi===`bearish`&&(t=t.filter(e=>e.sentiment===`bearish`));let n=t.reduce((e,t)=>e+t.notional,0),r=t.filter(e=>e.sentiment===`bullish`).length;e.innerHTML=`
    <div class="page-header">
      <h1>Options Flow</h1>
      <p class="page-sub">Unusual options activity — sweeps, blocks, and high-notional trades.</p>
    </div>

    <div class="options-summary">
      <div class="summary-card"><span class="summary-label">Total Notional</span>
        <span class="summary-value">$${(n/1e6).toFixed(1)}M</span></div>
      <div class="summary-card"><span class="summary-label">Trades</span>
        <span class="summary-value">${t.length}</span></div>
      <div class="summary-card"><span class="summary-label">Bullish %</span>
        <span class="summary-value pos">${t.length?(r/t.length*100).toFixed(0):0}%</span></div>
    </div>

    <div class="filter-chips">
      ${[`all`,`unusual`,`bullish`,`bearish`].map(e=>`
        <button class="preset-chip ${Bi===e?`active`:``}" data-filter="${e}">${e.charAt(0).toUpperCase()+e.slice(1)}</button>
      `).join(``)}
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th>Symbol</th><th>Type</th><th>Strike</th><th>Expiry</th>
            <th>Premium</th><th>Contracts</th><th>Notional</th>
            <th>Rel Vol</th><th>Price</th><th>Change</th><th>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="clickable ${e.unusual?`row-highlight`:``}" data-symbol="${e.symbol}">
              <td class="sym">${e.symbol}</td>
              <td><span class="flow-type ${e.type.includes(`Call`)?`pos`:e.type.includes(`Put`)?`neg`:``}">${e.type}</span></td>
              <td>$${V(e.strike)}</td>
              <td>${e.expiry}</td>
              <td>$${e.premium.toFixed(2)}</td>
              <td>${e.contracts.toLocaleString()}</td>
              <td>$${(e.notional/1e3).toFixed(0)}K</td>
              <td>${e.relVolume.toFixed(1)}x</td>
              <td>$${V(e.price)}</td>
              <td class="${U(e.changePct)}">${H(e.changePct)}</td>
              <td class="${e.sentiment===`bullish`?`pos`:e.sentiment===`bearish`?`neg`:``}">${e.sentiment}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-filter]`).forEach(t=>{t.addEventListener(`click`,()=>{Bi=t.dataset.filter,Vi(e)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}var Hi=`upside`,Ui=`desc`;function Wi(e){let t=fi(R());t.sort((e,t)=>{let n=e[Hi]??0,r=t[Hi]??0;return Ui===`desc`?r-n:n-r}),e.innerHTML=`
    <div class="page-header">
      <h1>Analyst Ratings</h1>
      <p class="page-sub">Consensus ratings, price targets, and revision trends.</p>
    </div>

    <div class="analyst-summary">
      <div class="summary-card"><span class="summary-label">Upgrades</span><span class="summary-value pos">${t.filter(e=>e.revisions>0).length}</span></div>
      <div class="summary-card"><span class="summary-label">Downgrades</span><span class="summary-value neg">${t.filter(e=>e.revisions<0).length}</span></div>
      <div class="summary-card"><span class="summary-label">Avg Upside</span>
        <span class="summary-value">${(t.reduce((e,t)=>e+t.upside,0)/t.length).toFixed(1)}%</span></div>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl" id="analyst-table">
        <thead>
          <tr>
            <th data-sort="symbol">Symbol</th>
            <th>Company</th>
            <th data-sort="price">Price</th>
            <th data-sort="consensus">Consensus</th>
            <th data-sort="target">Target</th>
            <th data-sort="upside">Upside %</th>
            <th data-sort="numAnalysts">Analysts</th>
            <th>Breakdown</th>
            <th data-sort="revisions">Revisions</th>
          </tr>
        </thead>
        <tbody>
          ${t.slice(0,80).map(e=>`
            <tr class="clickable" data-symbol="${e.symbol}">
              <td class="sym">${e.symbol}</td>
              <td>${e.name}</td>
              <td>$${V(e.price)}</td>
              <td><span class="rating-badge ${Gi(e.consensus)}">${e.consensus}</span></td>
              <td>$${V(e.target)}</td>
              <td class="${U(e.upside)}">${H(e.upside)}</td>
              <td>${e.numAnalysts}</td>
              <td class="rating-breakdown">
                <span class="pos" title="Strong Buy">${e.strongBuy}</span>/
                <span class="pos" title="Buy">${e.buy}</span>/
                <span title="Hold">${e.hold}</span>/
                <span class="neg" title="Sell">${e.sell}</span>
              </td>
              <td class="${e.revisions>0?`pos`:e.revisions<0?`neg`:``}">${e.revisions>0?`+`:``}${e.revisions}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`th[data-sort]`).forEach(t=>{t.style.cursor=`pointer`,t.addEventListener(`click`,()=>{let n=t.dataset.sort;Hi===n?Ui=Ui===`desc`?`asc`:`desc`:(Hi=n,Ui=`desc`),Wi(e)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Gi(e){return e.includes(`Strong Buy`)||e===`Buy`?`bullish`:e.includes(`Sell`)?`bearish`:`neutral`}function Ki(e){let t=ai(R());e.innerHTML=`
    <div class="page-header">
      <h1>Sector Rotation</h1>
      <p class="page-sub">Momentum-based sector ranking — identify leaders, improvers, and laggards.</p>
    </div>

    <div class="rotation-wheel panel">
      <div class="rotation-bars">
        ${t.map(e=>{let t=oi(e);return`
            <div class="rotation-bar-row">
              <span class="rotation-sector">${e.sector}</span>
              <div class="rotation-bar-track">
                <div class="rotation-bar-fill" style="width:${e.strength}%;background:${t.color}"></div>
              </div>
              <span class="rotation-mom ${U(e.avgChange)}">${H(e.avgChange)}</span>
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
          ${t.map((e,t)=>{let n=oi(e);return`
              <tr>
                <td>${t+1}</td>
                <td><strong>${e.sector}</strong> <span style="color:${n.color};font-size:0.7rem">${n.label}</span></td>
                <td>${e.count}</td>
                <td class="${U(e.avgChange)}">${H(e.avgChange)}</td>
                <td>${e.advancingPct.toFixed(0)}%</td>
                <td>${e.bullishPct.toFixed(0)}%</td>
                <td>${e.aboveSma50Pct.toFixed(0)}%</td>
                <td>${e.avgRsi.toFixed(0)}</td>
                <td>${e.relVol.toFixed(1)}x</td>
                <td class="${U(e.momentum)}">${e.momentum.toFixed(1)}</td>
                <td class="sym clickable" data-symbol="${e.topStock?.symbol||``}">${e.topStock?.symbol||`—`}</td>
                <td class="sym clickable" data-symbol="${e.laggard?.symbol||``}">${e.laggard?.symbol||`—`}</td>
              </tr>
            `}).join(``)}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.dataset.symbol&&e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}var Q=0;function qi(e){let t=pi(R());Q>0&&(t=t.filter(e=>e.squeezeScore>=Q)),e.innerHTML=`
    <div class="page-header">
      <h1>Short Interest Scanner</h1>
      <p class="page-sub">Short % of float, days to cover, and squeeze score ranking.</p>
    </div>

    <div class="filter-chips">
      <button class="preset-chip ${Q===0?`active`:``}" data-min="0">All</button>
      <button class="preset-chip ${Q===50?`active`:``}" data-min="50">Squeeze 50+</button>
      <button class="preset-chip ${Q===70?`active`:``}" data-min="70">Squeeze 70+</button>
      <button class="preset-chip ${Q===85?`active`:``}" data-min="85">High Risk 85+</button>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th>Symbol</th><th>Company</th><th>Sector</th><th>Price</th><th>Change</th>
            <th>Short %</th><th>Days to Cover</th><th>Short Δ</th><th>Squeeze Score</th>
          </tr>
        </thead>
        <tbody>
          ${t.slice(0,60).map(e=>`
            <tr class="clickable ${e.squeezeScore>=70?`row-highlight`:``}" data-symbol="${e.symbol}">
              <td class="sym">${e.symbol}</td>
              <td>${e.name}</td>
              <td>${e.sector}</td>
              <td>$${V(e.price)}</td>
              <td class="${U(e.changePct)}">${H(e.changePct)}</td>
              <td class="${e.shortPct>15?`neg`:``}">${e.shortPct}%</td>
              <td>${e.daysToCover}</td>
              <td class="${U(e.change)}">${e.change>0?`+`:``}${e.change}%</td>
              <td>
                <div class="squeeze-cell">
                  <div class="squeeze-bar"><div class="squeeze-fill" style="width:${e.squeezeScore}%"></div></div>
                  <span>${e.squeezeScore}</span>
                </div>
              </td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `,e.querySelectorAll(`[data-min]`).forEach(t=>{t.addEventListener(`click`,()=>{Q=Number(t.dataset.min),qi(e)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}var Ji={"/":Rn,"/dashboard":hi,"/screener":Sr,"/map":Er,"/news":Dr,"/portfolio":kr,"/compare":Mr,"/signals":Pr,"/patterns":Fr,"/groups":Ir,"/charts":Rr,"/multicharts":Qr,"/alerts":ti,"/export":ii,"/internals":gi,"/correlation":Ci,"/backtest":Li,"/options":Vi,"/analyst":Wi,"/rotation":Ki,"/shorts":qi,"/futures":Br,"/calendar":Vr,"/insider":Hr,"/settings":qr},Yi=new Set([`quotes`,`status`]),$=`/`,Xi=!0;async function Zi(){let e=L();try{let[{quotes:t,source:n},r]=await Promise.all([xe(e),Oe(e)]);it(t,{fetchedAt:Date.now(),source:n}),at(r),Qi(n),Rt(t).forEach(t=>{B(`Alert: ${t.symbol} — ${t.detail}`,`success`,5e3),e.pushNotifications&&Kr({title:`StockViz: ${t.symbol}`,body:t.detail,tag:`alert-${t.id}`})}),$i()}catch(e){console.error(`Quote fetch failed:`,e),Qi(`error`)}}function Qi(e){let t=document.getElementById(`status-dot`),n=document.getElementById(`status-text`),r=document.getElementById(`last-update`),i=document.getElementById(`market-status`),a=st(),o=ot();e===`error`?(t.className=`status-dot`,n.textContent=`Update failed`):e===`finnhub`?(t.className=`status-dot live`,n.textContent=`Live · Finnhub`):(t.className=`status-dot mock`,n.textContent=`Simulated + TA Engine`),a.lastFetchAt&&(r.textContent=`Updated ${Gt(a.lastFetchAt)}`),i&&o&&(i.textContent=o.label,i.className=`market-status ${o.isOpen?`open`:`closed`}`),ea()}function $i(){let e=document.getElementById(`alert-badge`);if(!e)return;let t=yt(),n=bt();e.textContent=t+n,e.hidden=t+n===0,e.classList.toggle(`has-triggered`,n>0)}function ea(){let e=document.getElementById(`footer-stats`);if(!e)return;let n=[...R().values()],r=n.reduce((e,t)=>e+(t.patterns?.length||0),0),i=n.filter(e=>e.prediction?.direction===`bullish`).length;e.innerHTML=`
    <span>${t.length} symbols</span>
    <span>${r} patterns</span>
    <span class="pos">${i} bullish</span>
  `}function ta(){let e=document.getElementById(`ticker-bar`),t=R();e.innerHTML=[`SPY`,`QQQ`,`DIA`,`IWM`].map(e=>{let n={SPY:`S&P 500`,QQQ:`NASDAQ`,DIA:`DOW`,IWM:`RUSSELL 2K`},r=t.get(e);if(!r)return``;let i=U(r.changePct);return`
      <span class="ticker-item" data-live-symbol="${e}">
        <span class="ticker-label">${n[e]}</span>
        <span class="ticker-price" data-live="price">$${V(r.price)}</span>
        <span class="ticker-chg ${i}" data-live="pct">${H(r.changePct)}</span>
      </span>
    `}).join(``),e.querySelectorAll(`.ticker-item`).forEach(e=>{e.style.cursor=`pointer`,e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.liveSymbol}))})})}function na(){document.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=R().get(e.dataset.spark);t?.sparkline?.length&&qt(e,t.sparkline,{width:Number(e.getAttribute(`width`))||72,height:Number(e.getAttribute(`height`))||24})})}function ra(){return(location.hash.slice(1)||`/`).split(`?`)[0]||`/`}function ia(e=!0){$=ra(),Ji[$]||($=`/`),document.querySelectorAll(`.main-nav a`).forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)?.startsWith(`#${$}`))});let t=document.getElementById(`main-content`);e&&!Xi&&t.classList.add(`page-enter`);let n=(Ji[$]||Rn)(t),r=()=>{ta(),na(),e&&requestAnimationFrame(()=>t.classList.remove(`page-enter`)),Xi=!1};n?.then?n.then(r):r(),document.getElementById(`nav-toggle`)?.setAttribute(`aria-expanded`,`false`),document.querySelector(`.main-nav`)?.classList.remove(`open`)}function aa(e){if(e===`alerts`&&$i(),Yi.has(e)&&Ji[$]){Yt(),ta(),Qi(st().dataSource);return}Ji[$]?ia(!1):ta()}function oa(){ln(),_n(),Vt(),document.getElementById(`nav-toggle`)?.addEventListener(`click`,()=>{document.querySelector(`.main-nav`)?.classList.toggle(`open`)}),document.getElementById(`theme-toggle`)?.addEventListener(`click`,Ze),Ye(L().theme),yr(),window.addEventListener(`hashchange`,()=>{yr(),ia()}),window.addEventListener(`stockviz:select`,e=>{ct(e.detail),un(e.detail)}),window.addEventListener(`stockviz:settings-saved`,()=>{It(),Zi().then(()=>Ft(Zi))}),Pt(aa),Zi().then(()=>{ia(),Ft(Zi)})}oa();