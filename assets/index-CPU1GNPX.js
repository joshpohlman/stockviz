(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Technology`,`Healthcare`,`Financial`,`Consumer Cyclical`,`Consumer Defensive`,`Industrials`,`Energy`,`Utilities`,`Real Estate`,`Basic Materials`,`Communication Services`],t=[{symbol:`AAPL`,name:`Apple Inc.`,sector:`Technology`,industry:`Consumer Electronics`,marketCap:32e11},{symbol:`MSFT`,name:`Microsoft Corp.`,sector:`Technology`,industry:`Software`,marketCap:31e11},{symbol:`NVDA`,name:`NVIDIA Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:28e11},{symbol:`GOOGL`,name:`Alphabet Inc.`,sector:`Communication Services`,industry:`Internet Content`,marketCap:21e11},{symbol:`AMZN`,name:`Amazon.com Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:19e11},{symbol:`META`,name:`Meta Platforms`,sector:`Communication Services`,industry:`Social Media`,marketCap:14e11},{symbol:`TSLA`,name:`Tesla Inc.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e11},{symbol:`BRK.B`,name:`Berkshire Hathaway`,sector:`Financial`,industry:`Insurance`,marketCap:9e11},{symbol:`AVGO`,name:`Broadcom Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:75e10},{symbol:`JPM`,name:`JPMorgan Chase`,sector:`Financial`,industry:`Banks`,marketCap:58e10},{symbol:`V`,name:`Visa Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:56e10},{symbol:`UNH`,name:`UnitedHealth Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:52e10},{symbol:`XOM`,name:`Exxon Mobil`,sector:`Energy`,industry:`Oil & Gas`,marketCap:48e10},{symbol:`LLY`,name:`Eli Lilly`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:75e10},{symbol:`MA`,name:`Mastercard Inc.`,sector:`Financial`,industry:`Credit Services`,marketCap:45e10},{symbol:`COST`,name:`Costco Wholesale`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:4e11},{symbol:`HD`,name:`Home Depot`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:38e10},{symbol:`PG`,name:`Procter & Gamble`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:37e10},{symbol:`JNJ`,name:`Johnson & Johnson`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:36e10},{symbol:`ABBV`,name:`AbbVie Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:31e10},{symbol:`NFLX`,name:`Netflix Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:29e10},{symbol:`CRM`,name:`Salesforce Inc.`,sector:`Technology`,industry:`Software`,marketCap:28e10},{symbol:`BAC`,name:`Bank of America`,sector:`Financial`,industry:`Banks`,marketCap:31e10},{symbol:`ORCL`,name:`Oracle Corp.`,sector:`Technology`,industry:`Software`,marketCap:38e10},{symbol:`CVX`,name:`Chevron Corp.`,sector:`Energy`,industry:`Oil & Gas`,marketCap:29e10},{symbol:`KO`,name:`Coca-Cola Co.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:27e10},{symbol:`AMD`,name:`Advanced Micro Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:25e10},{symbol:`PEP`,name:`PepsiCo Inc.`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:23e10},{symbol:`WMT`,name:`Walmart Inc.`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:52e10},{symbol:`DIS`,name:`Walt Disney Co.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e10},{symbol:`CSCO`,name:`Cisco Systems`,sector:`Technology`,industry:`Communication Equipment`,marketCap:21e10},{symbol:`INTC`,name:`Intel Corp.`,sector:`Technology`,industry:`Semiconductors`,marketCap:95e9},{symbol:`QCOM`,name:`Qualcomm Inc.`,sector:`Technology`,industry:`Semiconductors`,marketCap:19e10},{symbol:`IBM`,name:`IBM Corp.`,sector:`Technology`,industry:`IT Services`,marketCap:18e10},{symbol:`GE`,name:`GE Aerospace`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:19e10},{symbol:`CAT`,name:`Caterpillar Inc.`,sector:`Industrials`,industry:`Farm & Construction`,marketCap:175e9},{symbol:`BA`,name:`Boeing Co.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:13e10},{symbol:`UPS`,name:`United Parcel Service`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:11e10},{symbol:`RTX`,name:`RTX Corp.`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:16e10},{symbol:`HON`,name:`Honeywell Intl.`,sector:`Industrials`,industry:`Conglomerates`,marketCap:14e10},{symbol:`MRK`,name:`Merck & Co.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:25e10},{symbol:`PFE`,name:`Pfizer Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:15e10},{symbol:`TMO`,name:`Thermo Fisher`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:2e11},{symbol:`ABT`,name:`Abbott Labs`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:21e10},{symbol:`AMGN`,name:`Amgen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:155e9},{symbol:`GILD`,name:`Gilead Sciences`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:105e9},{symbol:`GS`,name:`Goldman Sachs`,sector:`Financial`,industry:`Capital Markets`,marketCap:16e10},{symbol:`MS`,name:`Morgan Stanley`,sector:`Financial`,industry:`Capital Markets`,marketCap:155e9},{symbol:`WFC`,name:`Wells Fargo`,sector:`Financial`,industry:`Banks`,marketCap:21e10},{symbol:`C`,name:`Citigroup Inc.`,sector:`Financial`,industry:`Banks`,marketCap:13e10},{symbol:`BLK`,name:`BlackRock Inc.`,sector:`Financial`,industry:`Asset Management`,marketCap:13e10},{symbol:`AXP`,name:`American Express`,sector:`Financial`,industry:`Credit Services`,marketCap:175e9},{symbol:`NKE`,name:`Nike Inc.`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:115e9},{symbol:`SBUX`,name:`Starbucks Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:95e9},{symbol:`MCD`,name:`McDonald's Corp.`,sector:`Consumer Cyclical`,industry:`Restaurants`,marketCap:21e10},{symbol:`LOW`,name:`Lowe's Companies`,sector:`Consumer Cyclical`,industry:`Home Improvement`,marketCap:14e10},{symbol:`TGT`,name:`Target Corp.`,sector:`Consumer Cyclical`,industry:`Discount Stores`,marketCap:65e9},{symbol:`F`,name:`Ford Motor Co.`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:45e9},{symbol:`GM`,name:`General Motors`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:55e9},{symbol:`PM`,name:`Philip Morris`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:16e10},{symbol:`MO`,name:`Altria Group`,sector:`Consumer Defensive`,industry:`Tobacco`,marketCap:85e9},{symbol:`CL`,name:`Colgate-Palmolive`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:75e9},{symbol:`COP`,name:`ConocoPhillips`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:13e10},{symbol:`SLB`,name:`Schlumberger`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:65e9},{symbol:`EOG`,name:`EOG Resources`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:75e9},{symbol:`OXY`,name:`Occidental Petroleum`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:5e10},{symbol:`NEE`,name:`NextEra Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:15e10},{symbol:`DUK`,name:`Duke Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:8e10},{symbol:`SO`,name:`Southern Co.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:9e10},{symbol:`D`,name:`Dominion Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:45e9},{symbol:`AMT`,name:`American Tower`,sector:`Real Estate`,industry:`REIT - Specialty`,marketCap:95e9},{symbol:`PLD`,name:`Prologis Inc.`,sector:`Real Estate`,industry:`REIT - Industrial`,marketCap:11e10},{symbol:`EQIX`,name:`Equinix Inc.`,sector:`Real Estate`,industry:`REIT - Data Centers`,marketCap:8e10},{symbol:`LIN`,name:`Linde plc`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:21e10},{symbol:`APD`,name:`Air Products`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:6e10},{symbol:`FCX`,name:`Freeport-McMoRan`,sector:`Basic Materials`,industry:`Copper`,marketCap:55e9},{symbol:`NEM`,name:`Newmont Corp.`,sector:`Basic Materials`,industry:`Gold`,marketCap:5e10},{symbol:`T`,name:`AT&T Inc.`,sector:`Communication Services`,industry:`Telecom`,marketCap:13e10},{symbol:`VZ`,name:`Verizon`,sector:`Communication Services`,industry:`Telecom`,marketCap:17e10},{symbol:`CMCSA`,name:`Comcast Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:16e10},{symbol:`TMUS`,name:`T-Mobile US`,sector:`Communication Services`,industry:`Telecom`,marketCap:23e10},{symbol:`ADBE`,name:`Adobe Inc.`,sector:`Technology`,industry:`Software`,marketCap:23e10},{symbol:`NOW`,name:`ServiceNow`,sector:`Technology`,industry:`Software`,marketCap:18e10},{symbol:`INTU`,name:`Intuit Inc.`,sector:`Technology`,industry:`Software`,marketCap:17e10},{symbol:`TXN`,name:`Texas Instruments`,sector:`Technology`,industry:`Semiconductors`,marketCap:175e9},{symbol:`MU`,name:`Micron Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:11e10},{symbol:`LRCX`,name:`Lam Research`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:1e11},{symbol:`SNPS`,name:`Synopsys Inc.`,sector:`Technology`,industry:`Software`,marketCap:85e9},{symbol:`PANW`,name:`Palo Alto Networks`,sector:`Technology`,industry:`Software`,marketCap:115e9},{symbol:`CRWD`,name:`CrowdStrike`,sector:`Technology`,industry:`Software`,marketCap:8e10},{symbol:`PLTR`,name:`Palantir Technologies`,sector:`Technology`,industry:`Software`,marketCap:7e10},{symbol:`UBER`,name:`Uber Technologies`,sector:`Technology`,industry:`Software`,marketCap:15e10},{symbol:`SQ`,name:`Block Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`SHOP`,name:`Shopify Inc.`,sector:`Technology`,industry:`Software`,marketCap:95e9},{symbol:`PYPL`,name:`PayPal Holdings`,sector:`Financial`,industry:`Credit Services`,marketCap:75e9},{symbol:`COIN`,name:`Coinbase Global`,sector:`Financial`,industry:`Capital Markets`,marketCap:55e9},{symbol:`SPY`,name:`SPDR S&P 500 ETF`,sector:`Financial`,industry:`ETF`,marketCap:5e11},{symbol:`QQQ`,name:`Invesco QQQ Trust`,sector:`Financial`,industry:`ETF`,marketCap:25e10},{symbol:`IWM`,name:`iShares Russell 2000`,sector:`Financial`,industry:`ETF`,marketCap:6e10},{symbol:`DIA`,name:`SPDR Dow Jones ETF`,sector:`Financial`,industry:`ETF`,marketCap:35e9},{symbol:`DE`,name:`Deere & Co.`,sector:`Industrials`,industry:`Farm Equipment`,marketCap:12e10},{symbol:`MMM`,name:`3M Company`,sector:`Industrials`,industry:`Conglomerates`,marketCap:7e10},{symbol:`LMT`,name:`Lockheed Martin`,sector:`Industrials`,industry:`Aerospace & Defense`,marketCap:115e9},{symbol:`UNP`,name:`Union Pacific`,sector:`Industrials`,industry:`Railroads`,marketCap:145e9},{symbol:`FDX`,name:`FedEx Corp.`,sector:`Industrials`,industry:`Integrated Freight`,marketCap:65e9},{symbol:`ISRG`,name:`Intuitive Surgical`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`VRTX`,name:`Vertex Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:115e9},{symbol:`REGN`,name:`Regeneron Pharma`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:95e9},{symbol:`BMY`,name:`Bristol-Myers Squibb`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:95e9},{symbol:`CI`,name:`Cigna Group`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:95e9},{symbol:`ELV`,name:`Elevance Health`,sector:`Healthcare`,industry:`Healthcare Plans`,marketCap:11e10},{symbol:`ZTS`,name:`Zoetis Inc.`,sector:`Healthcare`,industry:`Drug Manufacturers`,marketCap:8e10},{symbol:`MDLZ`,name:`Mondelez Intl.`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:95e9},{symbol:`KHC`,name:`Kraft Heinz`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:4e10},{symbol:`GIS`,name:`General Mills`,sector:`Consumer Defensive`,industry:`Packaged Foods`,marketCap:38e9},{symbol:`KMB`,name:`Kimberly-Clark`,sector:`Consumer Defensive`,industry:`Household Products`,marketCap:48e9},{symbol:`MAR`,name:`Marriott Intl.`,sector:`Consumer Cyclical`,industry:`Lodging`,marketCap:75e9},{symbol:`BKNG`,name:`Booking Holdings`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:16e10},{symbol:`ABNB`,name:`Airbnb Inc.`,sector:`Consumer Cyclical`,industry:`Travel Services`,marketCap:85e9},{symbol:`ROST`,name:`Ross Stores`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:45e9},{symbol:`TJX`,name:`TJX Companies`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:12e10},{symbol:`ORLY`,name:`O'Reilly Automotive`,sector:`Consumer Cyclical`,industry:`Auto Parts`,marketCap:6e10},{symbol:`PSX`,name:`Phillips 66`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`MPC`,name:`Marathon Petroleum`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:55e9},{symbol:`VLO`,name:`Valero Energy`,sector:`Energy`,industry:`Oil & Gas Refining`,marketCap:45e9},{symbol:`HAL`,name:`Halliburton Co.`,sector:`Energy`,industry:`Oil & Gas Equipment`,marketCap:25e9},{symbol:`DVN`,name:`Devon Energy`,sector:`Energy`,industry:`Oil & Gas E&P`,marketCap:25e9},{symbol:`AEP`,name:`American Electric Power`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:5e10},{symbol:`EXC`,name:`Exelon Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`SRE`,name:`Sempra Energy`,sector:`Utilities`,industry:`Utilities - Diversified`,marketCap:5e10},{symbol:`SPG`,name:`Simon Property Group`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:55e9},{symbol:`O`,name:`Realty Income`,sector:`Real Estate`,industry:`REIT - Retail`,marketCap:48e9},{symbol:`WELL`,name:`Welltower Inc.`,sector:`Real Estate`,industry:`REIT - Healthcare`,marketCap:65e9},{symbol:`DOW`,name:`Dow Inc.`,sector:`Basic Materials`,industry:`Chemicals`,marketCap:38e9},{symbol:`DD`,name:`DuPont de Nemours`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:35e9},{symbol:`NUE`,name:`Nucor Corp.`,sector:`Basic Materials`,industry:`Steel`,marketCap:35e9},{symbol:`STLD`,name:`Steel Dynamics`,sector:`Basic Materials`,industry:`Steel`,marketCap:2e10},{symbol:`EA`,name:`Electronic Arts`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:38e9},{symbol:`TTWO`,name:`Take-Two Interactive`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`ROKU`,name:`Roku Inc.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:1e10},{symbol:`SNAP`,name:`Snap Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:18e9},{symbol:`PINS`,name:`Pinterest Inc.`,sector:`Communication Services`,industry:`Social Media`,marketCap:22e9},{symbol:`SPOT`,name:`Spotify Technology`,sector:`Communication Services`,industry:`Internet Content`,marketCap:75e9},{symbol:`WDAY`,name:`Workday Inc.`,sector:`Technology`,industry:`Software`,marketCap:65e9},{symbol:`TEAM`,name:`Atlassian Corp.`,sector:`Technology`,industry:`Software`,marketCap:55e9},{symbol:`DDOG`,name:`Datadog Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e10},{symbol:`NET`,name:`Cloudflare Inc.`,sector:`Technology`,industry:`Software`,marketCap:35e9},{symbol:`SNOW`,name:`Snowflake Inc.`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`MDB`,name:`MongoDB Inc.`,sector:`Technology`,industry:`Software`,marketCap:25e9},{symbol:`ZS`,name:`Zscaler Inc.`,sector:`Technology`,industry:`Software`,marketCap:3e10},{symbol:`FTNT`,name:`Fortinet Inc.`,sector:`Technology`,industry:`Software`,marketCap:75e9},{symbol:`KLAC`,name:`KLA Corp.`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:9e10},{symbol:`AMAT`,name:`Applied Materials`,sector:`Technology`,industry:`Semiconductor Equipment`,marketCap:16e10},{symbol:`ADI`,name:`Analog Devices`,sector:`Technology`,industry:`Semiconductors`,marketCap:1e11},{symbol:`MRVL`,name:`Marvell Technology`,sector:`Technology`,industry:`Semiconductors`,marketCap:7e10},{symbol:`ON`,name:`ON Semiconductor`,sector:`Technology`,industry:`Semiconductors`,marketCap:3e10},{symbol:`SMCI`,name:`Super Micro Computer`,sector:`Technology`,industry:`Computer Hardware`,marketCap:3e10},{symbol:`DELL`,name:`Dell Technologies`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e10},{symbol:`HPE`,name:`Hewlett Packard Enterprise`,sector:`Technology`,industry:`Computer Hardware`,marketCap:22e9},{symbol:`SCHW`,name:`Charles Schwab`,sector:`Financial`,industry:`Capital Markets`,marketCap:13e10},{symbol:`USB`,name:`U.S. Bancorp`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`PNC`,name:`PNC Financial`,sector:`Financial`,industry:`Banks`,marketCap:7e10},{symbol:`TFC`,name:`Truist Financial`,sector:`Financial`,industry:`Banks`,marketCap:55e9},{symbol:`ICE`,name:`Intercontinental Exchange`,sector:`Financial`,industry:`Financial Data`,marketCap:9e10},{symbol:`CME`,name:`CME Group`,sector:`Financial`,industry:`Financial Data`,marketCap:95e9},{symbol:`SPGI`,name:`S&P Global`,sector:`Financial`,industry:`Financial Data`,marketCap:15e10},{symbol:`MCO`,name:`Moody's Corp.`,sector:`Financial`,industry:`Financial Data`,marketCap:85e9},{symbol:`HOOD`,name:`Robinhood Markets`,sector:`Financial`,industry:`Capital Markets`,marketCap:2e10},{symbol:`SOFI`,name:`SoFi Technologies`,sector:`Financial`,industry:`Credit Services`,marketCap:12e9},{symbol:`RIVN`,name:`Rivian Automotive`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:12e9},{symbol:`LCID`,name:`Lucid Group`,sector:`Consumer Cyclical`,industry:`Auto Manufacturers`,marketCap:8e9},{symbol:`ARM`,name:`Arm Holdings`,sector:`Technology`,industry:`Semiconductors`,marketCap:14e10},{symbol:`MSTR`,name:`MicroStrategy`,sector:`Technology`,industry:`Software`,marketCap:5e10},{symbol:`DKNG`,name:`DraftKings`,sector:`Consumer Cyclical`,industry:`Gambling`,marketCap:2e10},{symbol:`ETN`,name:`Eaton Corp.`,sector:`Industrials`,industry:`Electrical Equipment`,marketCap:12e10},{symbol:`EMR`,name:`Emerson Electric`,sector:`Industrials`,industry:`Electrical Equipment`,marketCap:7e10},{symbol:`ITW`,name:`Illinois Tool Works`,sector:`Industrials`,industry:`Industrial Products`,marketCap:75e9},{symbol:`CSX`,name:`CSX Corp.`,sector:`Industrials`,industry:`Railroads`,marketCap:7e10},{symbol:`NSC`,name:`Norfolk Southern`,sector:`Industrials`,industry:`Railroads`,marketCap:55e9},{symbol:`WM`,name:`Waste Management`,sector:`Industrials`,industry:`Waste Services`,marketCap:85e9},{symbol:`RSG`,name:`Republic Services`,sector:`Industrials`,industry:`Waste Services`,marketCap:6e10},{symbol:`AIG`,name:`American Intl. Group`,sector:`Financial`,industry:`Insurance`,marketCap:45e9},{symbol:`MET`,name:`MetLife Inc.`,sector:`Financial`,industry:`Insurance`,marketCap:5e10},{symbol:`PRU`,name:`Prudential Financial`,sector:`Financial`,industry:`Insurance`,marketCap:4e10},{symbol:`ALL`,name:`Allstate Corp.`,sector:`Financial`,industry:`Insurance`,marketCap:45e9},{symbol:`TRV`,name:`Travelers Companies`,sector:`Financial`,industry:`Insurance`,marketCap:5e10},{symbol:`AFL`,name:`Aflac Inc.`,sector:`Financial`,industry:`Insurance`,marketCap:55e9},{symbol:`CB`,name:`Chubb Limited`,sector:`Financial`,industry:`Insurance`,marketCap:11e10},{symbol:`PGR`,name:`Progressive Corp.`,sector:`Financial`,industry:`Insurance`,marketCap:14e10},{symbol:`VST`,name:`Vistra Corp.`,sector:`Utilities`,industry:`Utilities - Independent`,marketCap:4e10},{symbol:`CEG`,name:`Constellation Energy`,sector:`Utilities`,industry:`Utilities - Independent`,marketCap:75e9},{symbol:`PCG`,name:`PG&E Corp.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:3e10},{symbol:`ED`,name:`Consolidated Edison`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:35e9},{symbol:`XEL`,name:`Xcel Energy`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:4e10},{symbol:`WEC`,name:`WEC Energy Group`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:3e10},{symbol:`EIX`,name:`Edison Intl.`,sector:`Utilities`,industry:`Utilities - Regulated`,marketCap:2e10},{symbol:`AWK`,name:`American Water Works`,sector:`Utilities`,industry:`Utilities - Water`,marketCap:28e9},{symbol:`CTVA`,name:`Corteva Inc.`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:42e9},{symbol:`CF`,name:`CF Industries`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:14e9},{symbol:`MOS`,name:`Mosaic Co.`,sector:`Basic Materials`,industry:`Agricultural Inputs`,marketCap:1e10},{symbol:`ALB`,name:`Albemarle Corp.`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:12e9},{symbol:`VMC`,name:`Vulcan Materials`,sector:`Basic Materials`,industry:`Building Materials`,marketCap:35e9},{symbol:`MLM`,name:`Martin Marietta`,sector:`Basic Materials`,industry:`Building Materials`,marketCap:35e9},{symbol:`IFF`,name:`Intl. Flavors & Fragrances`,sector:`Basic Materials`,industry:`Specialty Chemicals`,marketCap:22e9},{symbol:`LULU`,name:`Lululemon Athletica`,sector:`Consumer Cyclical`,industry:`Apparel Retail`,marketCap:35e9},{symbol:`DECK`,name:`Deckers Outdoor`,sector:`Consumer Cyclical`,industry:`Footwear & Apparel`,marketCap:22e9},{symbol:`ULTA`,name:`Ulta Beauty`,sector:`Consumer Cyclical`,industry:`Specialty Retail`,marketCap:2e10},{symbol:`EBAY`,name:`eBay Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:28e9},{symbol:`ETSY`,name:`Etsy Inc.`,sector:`Consumer Cyclical`,industry:`Internet Retail`,marketCap:8e9},{symbol:`CHWY`,name:`Chewy Inc.`,sector:`Consumer Cyclical`,industry:`Specialty Retail`,marketCap:12e9},{symbol:`DG`,name:`Dollar General`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:25e9},{symbol:`DLTR`,name:`Dollar Tree`,sector:`Consumer Defensive`,industry:`Discount Stores`,marketCap:18e9},{symbol:`SYY`,name:`Sysco Corp.`,sector:`Consumer Defensive`,industry:`Food Distribution`,marketCap:38e9},{symbol:`KR`,name:`Kroger Co.`,sector:`Consumer Defensive`,industry:`Grocery Stores`,marketCap:42e9},{symbol:`HSY`,name:`Hershey Co.`,sector:`Consumer Defensive`,industry:`Confectioners`,marketCap:35e9},{symbol:`KDP`,name:`Keurig Dr Pepper`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:48e9},{symbol:`MNST`,name:`Monster Beverage`,sector:`Consumer Defensive`,industry:`Beverages`,marketCap:55e9},{symbol:`BIIB`,name:`Biogen Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:25e9},{symbol:`MRNA`,name:`Moderna Inc.`,sector:`Healthcare`,industry:`Biotechnology`,marketCap:15e9},{symbol:`ILMN`,name:`Illumina Inc.`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:18e9},{symbol:`DXCM`,name:`DexCom Inc.`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:3e10},{symbol:`BSX`,name:`Boston Scientific`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:1e11},{symbol:`MDT`,name:`Medtronic plc`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:105e9},{symbol:`SYK`,name:`Stryker Corp.`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:14e10},{symbol:`EW`,name:`Edwards Lifesciences`,sector:`Healthcare`,industry:`Medical Devices`,marketCap:48e9},{symbol:`HCA`,name:`HCA Healthcare`,sector:`Healthcare`,industry:`Medical Care`,marketCap:8e10},{symbol:`VEEV`,name:`Veeva Systems`,sector:`Healthcare`,industry:`Health Info Services`,marketCap:35e9},{symbol:`IDXX`,name:`IDEXX Laboratories`,sector:`Healthcare`,industry:`Diagnostics`,marketCap:42e9},{symbol:`WBD`,name:`Warner Bros. Discovery`,sector:`Communication Services`,industry:`Entertainment`,marketCap:25e9},{symbol:`PARA`,name:`Paramount Global`,sector:`Communication Services`,industry:`Entertainment`,marketCap:8e9},{symbol:`FOX`,name:`Fox Corp.`,sector:`Communication Services`,industry:`Entertainment`,marketCap:18e9},{symbol:`NWSA`,name:`News Corp.`,sector:`Communication Services`,industry:`Publishing`,marketCap:15e9},{symbol:`LYV`,name:`Live Nation`,sector:`Communication Services`,industry:`Entertainment`,marketCap:22e9},{symbol:`MTCH`,name:`Match Group`,sector:`Communication Services`,industry:`Internet Content`,marketCap:9e9},{symbol:`RBLX`,name:`Roblox Corp.`,sector:`Communication Services`,industry:`Electronic Gaming`,marketCap:28e9},{symbol:`TTD`,name:`Trade Desk`,sector:`Technology`,industry:`Software`,marketCap:45e9},{symbol:`HUBS`,name:`HubSpot Inc.`,sector:`Technology`,industry:`Software`,marketCap:32e9},{symbol:`OKTA`,name:`Okta Inc.`,sector:`Technology`,industry:`Software`,marketCap:15e9},{symbol:`DOCU`,name:`DocuSign Inc.`,sector:`Technology`,industry:`Software`,marketCap:12e9},{symbol:`ZM`,name:`Zoom Video`,sector:`Technology`,industry:`Software`,marketCap:22e9},{symbol:`PATH`,name:`UiPath Inc.`,sector:`Technology`,industry:`Software`,marketCap:8e9},{symbol:`AI`,name:`C3.ai Inc.`,sector:`Technology`,industry:`Software`,marketCap:4e9},{symbol:`IONQ`,name:`IonQ Inc.`,sector:`Technology`,industry:`Computer Hardware`,marketCap:8e9},{symbol:`ASTS`,name:`AST SpaceMobile`,sector:`Technology`,industry:`Communication Equipment`,marketCap:5e9}],n=[{symbol:`SPY`,label:`S&P 500`},{symbol:`QQQ`,label:`NASDAQ`},{symbol:`DIA`,label:`DOW`},{symbol:`IWM`,label:`RUSSELL 2K`}],r=`https://finnhub.io/api/v1`,i=5,a=1100;function o(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),((t^=t>>>16)>>>0)/4294967296)}function s(e){return 20+o(e)()*480}var c=new Map,l=new Map,u=24;function d(){if(!c.size)for(let e of t){let t=s(e.symbol);c.set(e.symbol,t);let n=o(e.symbol+`hist`),r=[],i=t*.95;for(let e=0;e<u;e++)i=Math.max(1,i*(1+(n()-.48)*.02)),r.push(i);l.set(e.symbol,r)}}function f(){d();for(let e of t){let t=c.get(e.symbol),n=(Math.random()-.48)*t*.008,r=Math.max(1,t+n);c.set(e.symbol,r);let i=l.get(e.symbol)||[];i.push(r),i.length>u&&i.shift(),l.set(e.symbol,i)}}var p=new Map;function m(e){return p.get(e)||l.get(e)||[]}function h(e,t){let n=[...p.get(e)||l.get(e)||[],t];return n.length>u&&n.shift(),p.set(e,n),n}function g(e){d();let t=c.get(e.symbol),n=o(e.symbol+Date.now().toString().slice(0,-4)),r=t*(.98+n()*.04),i=Math.max(t,r)*(1+n()*.02),a=Math.min(t,r)*(1-n()*.02),s=r*(.995+n()*.01),l=t-s,u=l/s*100,f=Math.floor(5e5+n()*5e7);return{symbol:e.symbol,price:t,open:r,high:i,low:a,prevClose:s,change:l,changePct:u,volume:f,marketCap:e.marketCap,sector:e.sector,industry:e.industry,name:e.name,timestamp:Date.now(),sparkline:m(e.symbol)}}function _(e,t=60){d();let n=c.get(e)||100,r=o(e+`candles`),i=[],a=Date.now();for(let e=t-1;e>=0;e--){let t=n,o=(r()-.48)*n*.025,s=Math.max(1,t+o),c=Math.max(t,s)*(1+r()*.01),l=Math.min(t,s)*(1-r()*.01);i.push({t:a-e*864e5,o:t,h:c,l,c:s,v:Math.floor(r()*1e7)}),n=s}return i}var v=[`Markets rally on strong earnings outlook`,`Fed signals cautious approach to rate cuts`,`Tech sector leads broad market gains`,`Energy stocks slip as oil prices retreat`,`Analysts upgrade outlook for semiconductor stocks`,`Consumer spending data beats expectations`,`Treasury yields edge higher in morning trade`,`IPO market shows signs of renewed activity`];function y(e){let t=o(e+`news`);return Array.from({length:5},(n,r)=>({headline:e?`${e}: ${v[Math.floor(t()*v.length)]}`:v[Math.floor(t()*v.length)],source:[`Reuters`,`Bloomberg`,`CNBC`,`MarketWatch`][Math.floor(t()*4)],url:`#`,datetime:Math.floor(Date.now()/1e3)-r*3600-Math.floor(t()*7200),symbol:e||void 0}))}async function b(e,t){let n=`${r}/quote?symbol=${encodeURIComponent(e)}&token=${t}`,i=await fetch(n);if(!i.ok)throw Error(`Finnhub ${i.status}`);let a=await i.json();if(!a.c)throw Error(`No quote data`);let o=a.c-a.pc,s=a.pc?o/a.pc*100:0;return{symbol:e,price:a.c,open:a.o,high:a.h,low:a.l,prevClose:a.pc,change:o,changePct:s,volume:null,timestamp:(a.t||Date.now()/1e3)*1e3}}async function ee(e,t){let n=`${r}/stock/profile2?symbol=${encodeURIComponent(e)}&token=${t}`,i=await fetch(n);return i.ok?i.json():null}function te(e){return new Promise(t=>setTimeout(t,e))}function ne(e,t,n){return{...e,name:n?.name||t?.name||e.symbol,sector:t?.sector||n?.finnhubIndustry||`—`,industry:t?.industry||n?.finnhubIndustry||`—`,marketCap:n?.marketCapitalization?n.marketCapitalization*1e6:t?.marketCap,volume:e.volume??Math.floor(Math.random()*2e7+1e6),sparkline:m(e.symbol)}}async function re(e){let n=new Map(t.map(e=>[e.symbol,e])),r=t.map(e=>e.symbol);if(!e.apiKey?.trim()||e.useMockData){f();let e=new Map;for(let n of t)e.set(n.symbol,g(n));return{quotes:e,source:`mock`}}let o=new Map,s=e.apiKey.trim();for(let e=0;e<r.length;e+=i){let t=r.slice(e,e+i),c=await Promise.allSettled(t.map(async e=>{let[t,r]=await Promise.all([b(e,s),ee(e,s).catch(()=>null)]);return ne(t,n.get(e),r)}));for(let e of c)if(e.status===`fulfilled`){let t=e.value;o.set(t.symbol,{...t,sparkline:h(t.symbol,t.price)})}e+i<r.length&&await te(a)}for(let e of t)o.has(e.symbol)||o.set(e.symbol,g(e));return{quotes:o,source:`finnhub`}}async function ie(e,n){let r=t.find(t=>t.symbol===e);if(!n.apiKey?.trim()||n.useMockData)return r?g(r):null;try{let[t,i]=await Promise.all([b(e,n.apiKey.trim()),ee(e,n.apiKey.trim())]);return ne(t,r,i)}catch{return r?g(r):null}}async function ae(e,t,n=`D`,i=60){if(!t.apiKey?.trim()||t.useMockData)return _(e,i);try{let a=Math.floor(Date.now()/1e3),o=a-i*86400,s=`${r}/stock/candle?symbol=${encodeURIComponent(e)}&resolution=${n}&from=${o}&to=${a}&token=${t.apiKey.trim()}`,c=await fetch(s);if(!c.ok)throw Error(`candle fetch failed`);let l=await c.json();return l.s!==`ok`||!l.t?.length?_(e,i):l.t.map((e,t)=>({t:e*1e3,o:l.o[t],h:l.h[t],l:l.l[t],c:l.c[t],v:l.v[t]}))}catch{return _(e,i)}}async function oe(e,t){if(!t.apiKey?.trim()||t.useMockData)return y(e);try{let n=new Date().toISOString().slice(0,10),i=new Date(Date.now()-7*864e5).toISOString().slice(0,10),a=`${r}/company-news?symbol=${encodeURIComponent(e)}&from=${i}&to=${n}&token=${t.apiKey.trim()}`,o=await fetch(a);if(!o.ok)throw Error(`news failed`);return(await o.json()||[]).slice(0,8)}catch{return y(e)}}async function se(e){if(!e.apiKey?.trim()||e.useMockData)return y(null);try{let t=`${r}/news?category=general&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`news failed`);return(await n.json()||[]).slice(0,20)}catch{return y(null)}}async function ce(e){if(!e.apiKey?.trim()||e.useMockData){let e=new Date().getHours(),t=e>=9&&e<16;return{isOpen:t,label:t?`Market Open (simulated)`:`Market Closed (simulated)`}}try{let t=`${r}/stock/market-status?exchange=US&token=${e.apiKey.trim()}`,n=await fetch(t);if(!n.ok)throw Error(`status failed`);let i=await n.json();return{isOpen:!!i.isOpen,label:i.isOpen?`US Market Open`:`US Market Closed`,session:i.session}}catch{return{isOpen:!1,label:`Market status unavailable`}}}async function le(e){if(!e?.trim())return{valid:!1,message:`API key is required`};try{return await b(`AAPL`,e.trim())?{valid:!0,message:`Connected to Finnhub`}:{valid:!1,message:`Invalid response`}}catch(e){return{valid:!1,message:e.message||`Connection failed`}}}var ue={apiKey:``,refreshInterval:30,useMockData:!0,watchlist:[`AAPL`,`MSFT`,`NVDA`,`GOOGL`,`AMZN`,`META`,`TSLA`],theme:`dark`},x={sector:``,minChange:``,maxChange:``,minVolume:``,minMarketCap:``,search:``},S=ve(),C={...x},w=ye(),T=be(),E=xe(),D=[],O=`all`,de=new Map,k={key:`changePct`,dir:`desc`},fe=null,pe=null,me=`mock`,he=null,ge=new Set,_e=null;function ve(){try{let e=localStorage.getItem(`stockviz-settings`);if(e)return{...ue,...JSON.parse(e)}}catch{}return{...ue}}function ye(){try{let e=localStorage.getItem(`stockviz-saved-filters`);if(e)return JSON.parse(e)}catch{}return[]}function be(){try{let e=localStorage.getItem(`stockviz-favorites`);if(e)return JSON.parse(e)}catch{}return[`AAPL`,`NVDA`,`MSFT`]}function xe(){try{let e=localStorage.getItem(`stockviz-portfolio`);if(e)return JSON.parse(e)}catch{}return[{symbol:`AAPL`,shares:10,costBasis:175},{symbol:`NVDA`,shares:5,costBasis:450},{symbol:`MSFT`,shares:8,costBasis:380}]}function A(e,t){localStorage.setItem(e,JSON.stringify(t))}function Se(){A(`stockviz-settings`,S),Ce(S.theme),P(`settings`)}function Ce(e){document.documentElement.setAttribute(`data-theme`,e||`dark`)}function j(){return{...S}}function we(e){S={...S,...e},e.apiKey!==void 0&&(S.useMockData=!e.apiKey?.trim()),Se()}function Te(){S.theme=S.theme===`dark`?`light`:`dark`,Se()}function Ee(){return{...C}}function De(e,{preset:t=null}={}){C={...C,...e},t!==null&&(O=t),P(`filters`)}function Oe(e,t){C={...x,...t},O=e,P(`filters`)}function ke(){return O}function Ae(){return{...k}}function je(e){k.key===e?k.dir=k.dir===`asc`?`desc`:`asc`:k={key:e,dir:`desc`},P(`sort`)}function M(){return de}function Me(e,t={}){de=e,pe=t.fetchedAt??Date.now(),me=t.source??me,P(`quotes`)}function Ne(e){he=e,P(`status`)}function Pe(){return he}function Fe(){return{lastFetchAt:pe,dataSource:me,selectedSymbol:fe}}function Ie(e){fe=e,P(`select`)}function Le(e){return T=T.includes(e)?T.filter(t=>t!==e):[...T,e],A(`stockviz-favorites`,T),P(`favorites`),T.includes(e)}function Re(e){return T.includes(e)}function ze(){return[...E]}function Be({symbol:e,shares:t,costBasis:n}){let r=E.find(t=>t.symbol===e);r?(r.shares+=Number(t),r.costBasis=(r.costBasis+Number(n))/2):E=[...E,{symbol:e,shares:Number(t),costBasis:Number(n)}],A(`stockviz-portfolio`,E),P(`portfolio`)}function Ve(e){E=E.filter(t=>t.symbol!==e),A(`stockviz-portfolio`,E),P(`portfolio`)}function He(){return[...D]}function N(e){return D.includes(e)?D=D.filter(t=>t!==e):D.length<4&&(D=[...D,e]),P(`compare`),D.includes(e)}function Ue(){D=[],P(`compare`)}function We(){return[...w]}function Ge(e){let t={id:Date.now().toString(),name:e,filters:{...C}};return w=[...w,t],A(`stockviz-saved-filters`,w),P(`filters`),t}function Ke(e){w=w.filter(t=>t.id!==e),A(`stockviz-saved-filters`,w),P(`filters`)}function qe(e){let t=w.find(t=>t.id===e);t&&(C={...x,...t.filters},O=`custom`,P(`filters`))}function Je(e){return ge.add(e),()=>ge.delete(e)}function P(e=`full`){ge.forEach(t=>t(e))}function Ye(e){Xe();let t=async()=>{await e()};t(),_e=setInterval(t,S.refreshInterval*1e3)}function Xe(){_e&&=(clearInterval(_e),null)}function Ze(){C={...x},O=`all`,P(`filters`)}Ce(S.theme);function F(e,t=2){return e==null||Number.isNaN(e)?`—`:e.toLocaleString(`en-US`,{minimumFractionDigits:t,maximumFractionDigits:t})}function Qe(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}`}function I(e){return e==null||Number.isNaN(e)?`—`:`${e>=0?`+`:``}${e.toFixed(2)}%`}function L(e){return e==null?`—`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toLocaleString()}function $e(e){return e==null?`—`:e>=0xe8d4a51000?`${(e/0xe8d4a51000).toFixed(2)}T`:e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(0)}M`:e.toLocaleString()}function et(e){return e?new Date(e).toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}):``}function R(e){return e==null?``:e>0?`pos`:e<0?`neg`:`flat`}function tt(e){let t=Math.max(-5,Math.min(5,e));if(t>=0){let e=t/5;return`rgb(${Math.round(20+(1-e)*30)},${Math.round(80+e*120)},${Math.round(40+(1-e)*20)})`}let n=Math.abs(t)/5;return`rgb(${Math.round(120+n*135)},${Math.round(40+(1-n)*30)},${Math.round(40+(1-n)*20)})`}function nt(e,t,{width:n=72,height:r=24,color:i=null}={}){let a=t.map(e=>typeof e==`number`?e:e.c??e.price??0);if(!a.length)return;let o=window.devicePixelRatio||1;e.width=n*o,e.height=r*o,e.style.width=`${n}px`,e.style.height=`${r}px`;let s=e.getContext(`2d`);s.scale(o,o);let c=Math.min(...a),l=Math.max(...a)-c||1,u=a[a.length-1]>=a[0],d=i||(u?`#3fb950`:`#f85149`);s.clearRect(0,0,n,r),s.beginPath(),a.forEach((e,t)=>{let i=t/(a.length-1||1)*(n-2)+1,o=r-2-(e-c)/l*(r-4);t===0?s.moveTo(i,o):s.lineTo(i,o)}),s.strokeStyle=d,s.lineWidth=1.5,s.lineJoin=`round`,s.stroke();let f=s.createLinearGradient(0,0,0,r);f.addColorStop(0,u?`rgba(63,185,80,0.2)`:`rgba(248,81,73,0.2)`),f.addColorStop(1,`rgba(0,0,0,0)`),s.lineTo(n-1,r),s.lineTo(1,r),s.closePath(),s.fillStyle=f,s.fill()}function z(e){return`<canvas class="sparkline" data-spark="${e}" width="72" height="24" aria-hidden="true"></canvas>`}function rt(){let e=M();document.querySelectorAll(`[data-live-symbol]`).forEach(t=>{let n=e.get(t.dataset.liveSymbol);if(!n)return;let r=t.querySelector(`[data-live="price"]`),i=t.querySelector(`[data-live="change"]`),a=t.querySelector(`[data-live="pct"]`);if(r){let e=`$${F(n.price)}`;r.textContent!==e&&(r.textContent=e,it(r,n.change>=0?`flash-up`:`flash-down`))}i&&(i.textContent=`${n.change>=0?`+`:``}${n.change?.toFixed(2)??`—`}`,i.className=R(n.change)),a&&(a.textContent=I(n.changePct),a.className=R(n.changePct))}),document.querySelectorAll(`canvas[data-spark]`).forEach(t=>{let n=e.get(t.dataset.spark);if(n?.sparkline?.length){let e=Number(t.getAttribute(`width`))||72,r=Number(t.getAttribute(`height`))||24;nt(t,n.sparkline,{width:e,height:r})}}),document.querySelectorAll(`.heat-tile[data-symbol]`).forEach(t=>{let n=e.get(t.dataset.symbol);if(!n)return;let r=n.changePct??0;t.style.background=tt(r);let i=t.querySelector(`.tile-pct`);i&&(i.textContent=`${r>=0?`+`:``}${r.toFixed(1)}%`)})}function it(e,t){e.classList.remove(`flash-up`,`flash-down`),e.offsetWidth,e.classList.add(t),setTimeout(()=>e.classList.remove(t),600)}function at(e,t,{height:n=160}={}){if(!t?.length){e.innerHTML=`<p class="chart-empty">No chart data</p>`;return}let r=document.createElement(`canvas`);r.className=`price-chart-canvas`,r.height=n,e.innerHTML=``,e.appendChild(r);let i=window.devicePixelRatio||1,a=e.clientWidth||320;r.width=a*i,r.style.width=`${a}px`,r.style.height=`${n}px`;let o=r.getContext(`2d`);o.scale(i,i);let s=t.map(e=>e.l),c=t.map(e=>e.h),l=Math.min(...s),u=Math.max(...c),d=(u-l)*.08||1,f=l-d,p=u+d-f,m=a-16,h=n-16,g=m/t.length,_=e=>8+h-(e-f)/p*h;o.strokeStyle=`rgba(48,54,61,0.6)`,o.lineWidth=1;for(let e=0;e<=4;e++){let t=8+h/4*e;o.beginPath(),o.moveTo(8,t),o.lineTo(a-8,t),o.stroke()}if(t.length<=80){let e=Math.max(2,g*.6);t.forEach((t,n)=>{let r=8+n*g+g/2,i=t.c>=t.o?`#3fb950`:`#f85149`;o.strokeStyle=i,o.fillStyle=i,o.lineWidth=1,o.beginPath(),o.moveTo(r,_(t.h)),o.lineTo(r,_(t.l)),o.stroke();let a=_(Math.max(t.o,t.c)),s=_(Math.min(t.o,t.c));o.fillRect(r-e/2,a,e,Math.max(1,s-a))})}else{o.strokeStyle=`#58a6ff`,o.lineWidth=1.5,o.beginPath(),t.forEach((e,t)=>{let n=8+t*g+g/2,r=_(e.c);t===0?o.moveTo(n,r):o.lineTo(n,r)}),o.stroke(),t[t.length-1];let e=o.createLinearGradient(0,8,0,n-8);e.addColorStop(0,`rgba(88,166,255,0.25)`),e.addColorStop(1,`rgba(88,166,255,0)`),o.lineTo(8+(t.length-1)*g+g/2,n-8),o.lineTo(8+g/2,n-8),o.closePath(),o.fillStyle=e,o.fill()}o.fillStyle=`#8b949e`,o.font=`10px IBM Plex Mono, monospace`,o.textAlign=`right`,o.fillText(u.toFixed(2),a-2,18),o.fillText(l.toFixed(2),a-2,n-8-2)}var ot;function st(){ot=document.getElementById(`toast-root`)}function B(e,t=`info`,n=2800){if(!ot)return;let r=document.createElement(`div`);r.className=`toast toast-${t}`,r.textContent=e,ot.appendChild(r),requestAnimationFrame(()=>r.classList.add(`show`)),setTimeout(()=>{r.classList.remove(`show`),setTimeout(()=>r.remove(),300)},n)}var V,H,U,ct;function lt(){V=document.getElementById(`quote-panel`),H=document.getElementById(`quote-panel-body`),U=document.getElementById(`quote-overlay`),ct=document.getElementById(`quote-close`),ct?.addEventListener(`click`,dt),U?.addEventListener(`click`,dt),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&V&&!V.hidden&&dt()})}function ut(e){V&&(V.hidden=!1,U.hidden=!1,V.classList.add(`open`),H.innerHTML=`<div class="quote-loading"><div class="skeleton-line"></div><div class="skeleton-line short"></div></div>`,ft(e))}function dt(){V&&(V.classList.remove(`open`),setTimeout(()=>{V.hidden=!0,U.hidden=!0},200),Ie(null))}async function ft(e){let t=j(),[n,r,i]=await Promise.all([ie(e,t),ae(e,t),oe(e,t)]);if(!n){H.innerHTML=`<p class="quote-error">Could not load quote.</p>`;return}let a=R(n.changePct),o=Re(e),s=He().includes(e);H.innerHTML=`
    <div class="quote-actions">
      <button class="btn-ghost btn-sm quote-action ${o?`starred`:``}" id="qa-fav">${o?`★ Favorited`:`☆ Favorite`}</button>
      <button class="btn-ghost btn-sm quote-action ${s?`active`:``}" id="qa-compare">${s?`In Compare`:`+ Compare`}</button>
      <a class="btn-ghost btn-sm quote-action" href="#/screener" id="qa-screener">Screener</a>
    </div>
    <div class="quote-header">
      <div>
        <h2 class="quote-symbol">${n.symbol}</h2>
        <p class="quote-name">${n.name||``}</p>
      </div>
      <div class="quote-price-block" data-live-symbol="${e}">
        <span class="quote-price" data-live="price">$${F(n.price)}</span>
        <span class="quote-change ${a}" data-live="pct">${Qe(n.change)} (${I(n.changePct)})</span>
      </div>
    </div>
    <div class="quote-grid">
      <div class="quote-stat"><span class="label">Open</span><span class="value">$${F(n.open)}</span></div>
      <div class="quote-stat"><span class="label">High</span><span class="value">$${F(n.high)}</span></div>
      <div class="quote-stat"><span class="label">Low</span><span class="value">$${F(n.low)}</span></div>
      <div class="quote-stat"><span class="label">Prev Close</span><span class="value">$${F(n.prevClose)}</span></div>
      <div class="quote-stat"><span class="label">Volume</span><span class="value">${L(n.volume)}</span></div>
      <div class="quote-stat"><span class="label">Market Cap</span><span class="value">${$e(n.marketCap)}</span></div>
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
  `,H.querySelector(`#qa-fav`)?.addEventListener(`click`,()=>{let t=Le(e),n=H.querySelector(`#qa-fav`);n.textContent=t?`★ Favorited`:`☆ Favorite`,n.classList.toggle(`starred`,t),B(t?`${e} favorited`:`${e} unfavorited`,`info`)}),H.querySelector(`#qa-compare`)?.addEventListener(`click`,()=>{let t=N(e),n=H.querySelector(`#qa-compare`);if(He().length>4&&!t){B(`Compare list full (max 4)`,`error`);return}n.textContent=t?`In Compare`:`+ Compare`,n.classList.toggle(`active`,t),B(t?`${e} added to compare`:`${e} removed`,`info`)});let c=H.querySelector(`#quote-chart`);c&&(at(c,r,{height:180}),new ResizeObserver(()=>at(c,r,{height:180})).observe(c))}var W,G,K,q=0,J=[];function pt(){W=document.getElementById(`command-palette`),G=document.getElementById(`cmd-input`),K=document.getElementById(`cmd-results`);let e=document.getElementById(`cmd-overlay`);document.addEventListener(`keydown`,e=>{if((e.ctrlKey||e.metaKey)&&e.key===`k`&&(e.preventDefault(),ht()),e.key===`/`&&!mt()){if(!W?.hidden)return;e.preventDefault(),ht()}}),e?.addEventListener(`click`,gt),G?.addEventListener(`input`,()=>_t(G.value)),G?.addEventListener(`keydown`,e=>{e.key===`Escape`&&gt(),e.key===`ArrowDown`&&(e.preventDefault(),vt(1)),e.key===`ArrowUp`&&(e.preventDefault(),vt(-1)),e.key===`Enter`&&yt()})}function mt(){let e=document.activeElement?.tagName;return e===`INPUT`||e===`TEXTAREA`||e===`SELECT`}function ht(){W&&(W.hidden=!1,document.getElementById(`cmd-overlay`).hidden=!1,G.value=``,q=0,_t(``),requestAnimationFrame(()=>G?.focus()))}function gt(){W&&(W.hidden=!0,document.getElementById(`cmd-overlay`).hidden=!0)}function _t(e){let n=e.trim().toLowerCase(),r=M();J=t.filter(e=>n?e.symbol.toLowerCase().includes(n)||e.name.toLowerCase().includes(n):!0).slice(0,12),K.innerHTML=J.map((e,t)=>{let n=r.get(e.symbol),i=n?R(n.changePct):``;return`
      <button class="cmd-item ${t===q?`active`:``}" data-idx="${t}" data-symbol="${e.symbol}">
        <span class="cmd-sym">${e.symbol}</span>
        <span class="cmd-name">${e.name}</span>
        ${n?`<span class="cmd-price ${i}">$${F(n.price)} ${I(n.changePct)}</span>`:``}
      </button>
    `}).join(``)||`<p class="cmd-empty">No matches</p>`,K.querySelectorAll(`.cmd-item`).forEach(e=>{e.addEventListener(`click`,()=>{bt(e.dataset.symbol)})})}function vt(e){q=Math.max(0,Math.min(J.length-1,q+e)),K.querySelectorAll(`.cmd-item`).forEach((e,t)=>{e.classList.toggle(`active`,t===q)})}function yt(){J[q]&&bt(J[q].symbol)}function bt(e){gt(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))}function xt(n){let r=M(),i=j(),a=Pe(),o=[...r.values()].filter(e=>e.changePct!=null),s=[...o].sort((e,t)=>t.changePct-e.changePct).slice(0,10),c=[...o].sort((e,t)=>e.changePct-t.changePct).slice(0,10),l=[...o].sort((e,t)=>(t.volume||0)-(e.volume||0)).slice(0,10),u=o.length?o.reduce((e,t)=>e+t.changePct,0)/o.length:0,d=o.filter(e=>e.changePct>0).length,f=o.filter(e=>e.changePct<0).length,p=e.map(e=>{let t=o.filter(t=>t.sector===e);return t.length?{sector:e,avg:t.reduce((e,t)=>e+t.changePct,0)/t.length,count:t.length}:null}).filter(Boolean),m=i.watchlist.map(e=>r.get(e)).filter(Boolean);n.innerHTML=`
    <div class="hero-banner panel">
      <div class="hero-stat">
        <span class="hero-label">Universe</span>
        <span class="hero-value">${t.length}</span>
        <span class="hero-sub">tracked symbols</span>
      </div>
      <div class="hero-stat">
        <span class="hero-label">Market</span>
        <span class="hero-value ${a?.isOpen?`pos`:``}">${a?.isOpen?`OPEN`:`CLOSED`}</span>
        <span class="hero-sub">${a?.label||`—`}</span>
      </div>
      <div class="hero-stat">
        <span class="hero-label">Breadth</span>
        <span class="hero-value"><span class="pos">${d}</span> / <span class="neg">${f}</span></span>
        <span class="hero-sub">advancers / decliners</span>
      </div>
      <div class="hero-stat">
        <span class="hero-label">Avg Change</span>
        <span class="hero-value ${R(u)}">${I(u)}</span>
        <span class="hero-sub">across universe</span>
      </div>
      <div class="hero-hint">
        Press <kbd>/</kbd> or <kbd>Ctrl+K</kbd> to jump to any ticker
      </div>
    </div>

    <section class="panel stagger-in">
      <h2 class="panel-title">Watchlist</h2>
      <div class="card-grid">
        ${m.length?m.map(Ct).join(``):`<p class="muted">Add symbols in Settings → Watchlist</p>`}
      </div>
    </section>

    <div class="two-col">
      <section class="panel stagger-in">
        <h2 class="panel-title pos-title">Top Gainers</h2>
        ${wt(s)}
      </section>
      <section class="panel stagger-in">
        <h2 class="panel-title neg-title">Top Losers</h2>
        ${wt(c)}
      </section>
    </div>

    <div class="two-col">
      <section class="panel stagger-in">
        <h2 class="panel-title">Most Active</h2>
        ${Tt(l)}
      </section>
      <section class="panel stagger-in">
        <h2 class="panel-title">Sector Performance</h2>
        <div class="sector-bars">
          ${p.map(Et).join(``)}
        </div>
      </section>
    </div>
  `,St(n)}function St(e){e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function Ct(e){let t=R(e.changePct);return`
    <button class="watch-card" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
      <div class="watch-card-top">
        <span class="watch-sym">${e.symbol}</span>
        ${z(e.symbol)}
      </div>
      <span class="watch-price" data-live="price">$${F(e.price)}</span>
      <span class="watch-chg ${t}" data-live="pct">${I(e.changePct)}</span>
    </button>
  `}function wt(e){return`
    <table class="data-table compact">
      <thead><tr><th>Ticker</th><th>Spark</th><th>Price</th><th>%</th></tr></thead>
      <tbody>
        ${e.map(e=>`
          <tr class="clickable" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td>${z(e.symbol)}</td>
            <td data-live="price">$${F(e.price)}</td>
            <td class="${R(e.changePct)}" data-live="pct">${I(e.changePct)}</td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `}function Tt(e){return`
    <table class="data-table compact">
      <thead><tr><th>Ticker</th><th>Volume</th><th>Price</th><th>%</th></tr></thead>
      <tbody>
        ${e.map(e=>`
          <tr class="clickable" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td>${L(e.volume)}</td>
            <td data-live="price">$${F(e.price)}</td>
            <td class="${R(e.changePct)}" data-live="pct">${I(e.changePct)}</td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `}function Et({sector:e,avg:t,count:n}){let r=R(t);return`
    <div class="sector-bar-row">
      <span class="sector-bar-label">${e}</span>
      <div class="sector-bar-track">
        <div class="sector-bar-fill ${r}" style="width:${Math.min(100,Math.abs(t)*15+10)}%"></div>
      </div>
      <span class="sector-bar-val ${r}">${I(t)}</span>
      <span class="sector-bar-count">${n}</span>
    </div>
  `}var Dt=[{id:`all`,label:`All Stocks`,filters:{}},{id:`gainers`,label:`Top Gainers`,filters:{minChange:`2`}},{id:`losers`,label:`Top Losers`,filters:{maxChange:`-2`}},{id:`highvol`,label:`High Volume`,filters:{minVolume:`10000000`}},{id:`megacap`,label:`Mega Cap`,filters:{minMarketCap:`200000000000`}},{id:`tech`,label:`Technology`,filters:{sector:`Technology`}},{id:`healthcare`,label:`Healthcare`,filters:{sector:`Healthcare`}},{id:`energy`,label:`Energy`,filters:{sector:`Energy`}},{id:`financial`,label:`Financial`,filters:{sector:`Financial`}},{id:`oversold`,label:`Oversold (< -3%)`,filters:{maxChange:`-3`}},{id:`momentum`,label:`Momentum (> 5%)`,filters:{minChange:`5`}}];function Ot(e,t){return[...e.values()].filter(e=>{if(t.search){let n=t.search.toLowerCase();if(!e.symbol.toLowerCase().includes(n)&&!(e.name||``).toLowerCase().includes(n))return!1}return!(t.sector&&e.sector!==t.sector||t.minChange!==``&&e.changePct<Number(t.minChange)||t.maxChange!==``&&e.changePct>Number(t.maxChange)||t.minVolume!==``&&(e.volume||0)<Number(t.minVolume)||t.minMarketCap!==``&&(e.marketCap||0)<Number(t.minMarketCap))})}function kt(e,t=`stockviz-screener.csv`){let n=[[`Symbol`,`Company`,`Sector`,`Price`,`Change`,`Change %`,`Volume`,`Market Cap`].join(`,`),...e.map(e=>[e.symbol,At(e.name),At(e.sector),F(e.price),e.change?.toFixed(2)??``,e.changePct?.toFixed(2)??``,e.volume??``,e.marketCap??``].join(`,`))],r=new Blob([n.join(`
`)],{type:`text/csv;charset=utf-8`}),i=document.createElement(`a`);i.href=URL.createObjectURL(r),i.download=t,i.click(),URL.revokeObjectURL(i.href)}function At(e){let t=String(e??``);return t.includes(`,`)||t.includes(`"`)?`"${t.replace(/"/g,`""`)}"`:t}var jt=[`sector`,`minChange`,`maxChange`,`minVolume`,`minMarketCap`,`search`];function Mt(){let e=location.hash.slice(1),t=e.indexOf(`?`);if(t===-1)return null;let n=new URLSearchParams(e.slice(t+1)),r={};for(let e of jt){let t=n.get(e);t!=null&&(r[e]=t)}return Object.keys(r).length?r:null}function Nt(e){let t=location.hash.slice(1).split(`?`)[0]||`/`;if(t!==`/screener`&&t!==`/map`)return;let n=new URLSearchParams;for(let t of jt)e[t]&&n.set(t,e[t]);let r=n.toString(),i=r?`#${t}?${r}`:`#${t}`;location.hash!==i&&history.replaceState(null,``,i)}function Pt(){let e=Mt();e&&De(e)}function Ft(e){let t=new URLSearchParams;for(let n of jt)e[n]&&t.set(n,e[n]);let n=t.toString(),r=location.origin+location.pathname;return n?`${r}#/screener?${n}`:`${r}#/screener`}function It(e,t=200){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}function Lt(t){let n=Ee(),r=Ae(),i=ke(),a=We(),o=M(),s=zt(Ot(o,n),r);Nt(n),t.innerHTML=`
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
      ${Dt.map(e=>`
        <button type="button" class="preset-chip ${i===e.id?`active`:``}" data-preset="${e.id}">
          ${e.label}
        </button>
      `).join(``)}
    </div>

    <form class="filter-bar" id="filter-form">
      <div class="filter-group">
        <label>Search</label>
        <input type="search" name="search" placeholder="Symbol or name…" value="${X(n.search)}" />
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
        <input type="number" name="minChange" step="0.1" placeholder="-10" value="${X(n.minChange)}" />
      </div>
      <div class="filter-group">
        <label>Max %</label>
        <input type="number" name="maxChange" step="0.1" placeholder="10" value="${X(n.maxChange)}" />
      </div>
      <div class="filter-group">
        <label>Min Vol</label>
        <input type="number" name="minVolume" step="100000" placeholder="1M" value="${X(n.minVolume)}" />
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
            ${Y(`volume`,`Volume`,r)}
            ${Y(`marketCap`,`Market Cap`,r)}
          </tr>
        </thead>
        <tbody>
          ${s.length?s.map(Rt).join(``):`<tr><td colspan="9" class="empty-row">No matches — adjust filters</td></tr>`}
        </tbody>
      </table>
    </div>
  `;let c=t.querySelector(`#filter-form`),l=It(()=>{let e=new FormData(c);De(Object.fromEntries(e.entries()),{preset:`custom`})},180);c.addEventListener(`input`,l),c.addEventListener(`change`,()=>{let e=new FormData(c);De(Object.fromEntries(e.entries()),{preset:`custom`})}),t.querySelector(`#reset-filters`)?.addEventListener(`click`,Ze),t.querySelector(`#save-filter`)?.addEventListener(`click`,()=>{let e=prompt(`Name this filter preset:`);e?.trim()&&Ge(e.trim())}),t.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Dt.find(t=>t.id===e.dataset.preset);t&&Oe(t.id,t.filters)})}),t.querySelectorAll(`[data-saved]`).forEach(e=>{e.addEventListener(`click`,()=>qe(e.dataset.saved))}),t.querySelectorAll(`[data-del]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),Ke(e.dataset.del)})}),t.querySelector(`#export-csv`)?.addEventListener(`click`,()=>kt(s)),t.querySelector(`#share-screener`)?.addEventListener(`click`,async()=>{let e=Ft(n);try{await navigator.clipboard.writeText(e);let n=t.querySelector(`#share-screener`),r=n.textContent;n.textContent=`Copied!`,setTimeout(()=>{n.textContent=r},2e3)}catch{prompt(`Copy this link:`,e)}}),t.querySelectorAll(`th[data-sort]`).forEach(e=>{e.addEventListener(`click`,()=>je(e.dataset.sort))}),t.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),t.querySelectorAll(`[data-fav]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=Le(e.dataset.fav);e.textContent=n?`★`:`☆`,e.classList.toggle(`starred`,n)})})}function Y(e,t,n){return`<th data-sort="${e}" class="sortable">${t}${n.key===e?n.dir===`asc`?` ▲`:` ▼`:``}</th>`}function Rt(e){let t=Re(e.symbol);return`
    <tr class="clickable" data-live-symbol="${e.symbol}" data-symbol="${e.symbol}">
      <td class="col-star">
        <button class="star-btn ${t?`starred`:``}" data-fav="${e.symbol}" aria-label="Favorite">${t?`★`:`☆`}</button>
      </td>
      <td class="sym">${e.symbol}</td>
      <td class="name-cell">${e.name||`—`}</td>
      <td>${z(e.symbol)}</td>
      <td class="sector-cell">${e.sector||`—`}</td>
      <td data-live="price">$${F(e.price)}</td>
      <td class="${R(e.changePct)}" data-live="pct">${I(e.changePct)}</td>
      <td>${L(e.volume)}</td>
      <td>${$e(e.marketCap)}</td>
    </tr>
  `}function zt(e,{key:t,dir:n}){let r=n===`asc`?1:-1;return[...e].sort((e,n)=>{let i=e[t]??``,a=n[t]??``;return typeof i==`number`&&typeof a==`number`?(i-a)*r:String(i).localeCompare(String(a))*r})}function X(e){return String(e??``).replace(/"/g,`&quot;`)}function Bt(e,t,n){if(!t.length){e.innerHTML=`<p class="empty-state">No stocks match current filters.</p>`;return}let r=new Map;for(let e of t){let t=e.sector||`Other`;r.has(t)||r.set(t,[]),r.get(t).push(e)}e.innerHTML=`
    <div class="heatmap-legend">
      <span class="legend-label">-5%</span>
      <div class="legend-gradient"></div>
      <span class="legend-label">+5%</span>
    </div>
    <div class="treemap">
      ${[...r.entries()].sort((e,t)=>{let n=e[1].reduce((e,t)=>e+t.changePct,0)/e[1].length;return t[1].reduce((e,t)=>e+t.changePct,0)/t[1].length-n}).map(([e,t])=>Vt(e,t)).join(``)}
    </div>
  `,e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>n?.(e.dataset.symbol))})}function Vt(e,t){let n=t.reduce((e,t)=>e+(t.marketCap||1),0),r=t.reduce((e,t)=>e+t.changePct,0)/t.length;return`
    <div class="sector-block" style="flex:${Math.max(1,Math.round(n/5e10))}">
      <div class="sector-header" style="background:${tt(r)}">
        <span class="sector-name">${e}</span>
        <span class="sector-avg">${r>=0?`+`:``}${r.toFixed(2)}%</span>
      </div>
      <div class="sector-tiles">
        ${t.sort((e,t)=>(t.marketCap||0)-(e.marketCap||0)).map(e=>Ht(e,n)).join(``)}
      </div>
    </div>
  `}function Ht(e,t){let n=(e.marketCap||1)/t,r=Math.max(1,Math.round(n*20)),i=e.changePct??0;return`
    <button
      class="heat-tile"
      data-symbol="${e.symbol}"
      style="flex:${r};background:${tt(i)}"
      title="${e.name}: ${i>=0?`+`:``}${i.toFixed(2)}%"
    >
      <span class="tile-symbol">${e.symbol}</span>
      <span class="tile-pct">${i>=0?`+`:``}${i.toFixed(1)}%</span>
    </button>
  `}function Ut(e){let t=Ot(M(),Ee());e.innerHTML=`
    <div class="page-header">
      <h1>Market Heat Map</h1>
      <p class="page-sub">Sector treemap sized by market cap, colored by daily change. Uses screener filters.</p>
    </div>
    <div id="heatmap-root" class="heatmap-root"></div>
  `,Bt(e.querySelector(`#heatmap-root`),t,e=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e}))})}async function Wt(e){e.innerHTML=`
    <div class="page-header">
      <h1>Market News</h1>
      <p class="page-sub">Latest headlines from your data feed.</p>
    </div>
    <div class="news-loading panel">Loading news…</div>
  `;let t=await se(j()),n=e.querySelector(`.news-loading`);n&&(n.className=`news-list panel`,n.innerHTML=t.length?t.map(Gt).join(``):`<p class="muted">No news available.</p>`,n.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}))}function Gt(e){let t=e.datetime?new Date(e.datetime*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):``,n=e.related?.split(`,`)[0]||e.symbol;return`
    <article class="news-item">
      <div class="news-meta">
        <span class="news-source">${e.source||`News`}</span>
        <span class="news-date">${t}</span>
        ${n?`<button class="news-symbol" data-symbol="${n}">${n}</button>`:``}
      </div>
      <a class="news-headline" href="${e.url||`#`}" target="_blank" rel="noopener">${e.headline||e.title||`Untitled`}</a>
      ${e.summary?`<p class="news-summary">${e.summary}</p>`:``}
    </article>
  `}function Kt(e){let n=ze(),r=M(),i=0,a=0,o=n.map(e=>{let t=r.get(e.symbol),n=t?.price??0,o=n*e.shares,s=e.costBasis*e.shares,c=o-s,l=s?c/s*100:0;return i+=o,a+=s,{...e,q:t,price:n,value:o,cost:s,pl:c,plPct:l}}),s=i-a,c=a?s/a*100:0;e.innerHTML=`
    <div class="page-header">
      <h1>Portfolio</h1>
      <p class="page-sub">Track holdings, cost basis, and live P&amp;L.</p>
    </div>

    <div class="portfolio-summary">
      <div class="summary-card">
        <span class="summary-label">Total Value</span>
        <span class="summary-value">$${F(i)}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Total Cost</span>
        <span class="summary-value">$${F(a)}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">P&amp;L</span>
        <span class="summary-value ${R(s)}">${s>=0?`+`:`-`}$${F(Math.abs(s))} (${I(c)})</span>
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
          ${o.length?o.map(qt).join(``):`<tr><td colspan="8" class="empty-row">No holdings yet — add your first position above.</td></tr>`}
        </tbody>
      </table>
    </div>
  `,e.querySelector(`#add-holding`)?.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(e.target),r=n.get(`symbol`).toString().trim().toUpperCase();if(!t.find(e=>e.symbol===r)){B(`Symbol not in universe`,`error`);return}Be({symbol:r,shares:n.get(`shares`),costBasis:n.get(`costBasis`)}),B(`Added ${r}`,`success`),e.target.reset()}),e.querySelectorAll(`[data-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{Ve(e.dataset.remove),B(`Removed ${e.dataset.remove}`,`info`)})}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})})}function qt(e){return`
    <tr data-live-symbol="${e.symbol}">
      <td class="sym clickable" data-symbol="${e.symbol}">${e.symbol}</td>
      <td>${e.shares}</td>
      <td>$${F(e.costBasis)}</td>
      <td data-live="price">$${F(e.price)}</td>
      <td>$${F(e.value)}</td>
      <td class="${R(e.pl)}">${e.pl>=0?`+`:``}$${F(Math.abs(e.pl))}</td>
      <td class="${R(e.plPct)}">${I(e.plPct)}</td>
      <td><button class="btn-ghost btn-sm" data-remove="${e.symbol}">Remove</button></td>
    </tr>
  `}var Jt=[{key:`price`,label:`Price`,fmt:e=>`$${F(e.price)}`},{key:`changePct`,label:`Change %`,fmt:e=>I(e.changePct),cls:e=>R(e.changePct)},{key:`volume`,label:`Volume`,fmt:e=>L(e.volume)},{key:`marketCap`,label:`Market Cap`,fmt:e=>$e(e.marketCap)},{key:`open`,label:`Open`,fmt:e=>`$${F(e.open)}`},{key:`high`,label:`High`,fmt:e=>`$${F(e.high)}`},{key:`low`,label:`Low`,fmt:e=>`$${F(e.low)}`},{key:`sector`,label:`Sector`,fmt:e=>e.sector||`—`}];function Yt(e){let t=He(),n=M();e.innerHTML=`
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

    ${t.length?Xt(t,n):`
      <div class="empty-compare panel">
        <p>No stocks selected. Press <kbd>/</kbd> or <kbd>Ctrl+K</kbd> to search, or click a ticker above.</p>
      </div>
    `}
  `,e.querySelector(`#clear-compare`)?.addEventListener(`click`,Ue),e.querySelectorAll(`[data-add]`).forEach(e=>{e.addEventListener(`click`,()=>N(e.dataset.add))}),e.querySelectorAll(`[data-rm]`).forEach(e=>{e.addEventListener(`click`,()=>N(e.dataset.rm))}),e.querySelectorAll(`[data-symbol]`).forEach(e=>{e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.symbol}))})}),e.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=n.get(e.dataset.spark);t?.sparkline?.length&&nt(e,t.sparkline,{width:120,height:40})})}function Xt(e,n){let r=e.map(e=>{let r=t.find(t=>t.symbol===e);return{sym:e,q:n.get(e),meta:r}});return`
    <div class="compare-grid">
      ${r.map(({sym:e,q:t,meta:n})=>`
        <div class="compare-card panel" data-live-symbol="${e}">
          <div class="compare-card-head">
            <button class="sym compare-sym" data-symbol="${e}">${e}</button>
            <button type="button" class="compare-remove" data-rm="${e}" title="Remove">&times;</button>
          </div>
          <p class="compare-name">${n?.name||t?.name||``}</p>
          ${z(e).replace(`width="72" height="24"`,`width="120" height="40"`)}
          <div class="compare-price ${R(t?.changePct)}">
            <span data-live="price">$${F(t?.price)}</span>
            <span data-live="pct">${I(t?.changePct)}</span>
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
          ${Jt.map(e=>`
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
  `}function Zt(e){let t=j();e.innerHTML=`
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
            <input type="password" id="apiKey" name="apiKey" placeholder="Paste your key…" value="${$t(t.apiKey)}" autocomplete="off" />
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
          <input type="text" id="watchlist" name="watchlist" value="${$t(t.watchlist.join(`, `))}" placeholder="AAPL, MSFT, NVDA" />
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
  `;let n=e.querySelector(`#settings-form`);n.addEventListener(`submit`,t=>{t.preventDefault();let r=new FormData(n),i=r.get(`watchlist`).split(`,`).map(e=>e.trim().toUpperCase()).filter(Boolean);we({apiKey:r.get(`apiKey`),refreshInterval:Number(r.get(`refreshInterval`))||30,useMockData:r.get(`useMockData`)===`on`,watchlist:i}),Qt(e),window.dispatchEvent(new CustomEvent(`stockviz:settings-saved`))}),e.querySelector(`#test-api`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#apiKey`).value,n=e.querySelector(`#api-status`);n.textContent=`Testing…`,n.className=`api-status`;let r=await le(t);n.textContent=r.message,n.className=`api-status ${r.valid?`ok`:`err`}`})}function Qt(e){let t=e.querySelector(`.save-toast`);t||(t=document.createElement(`p`),t.className=`save-toast`,e.querySelector(`.settings-form`)?.appendChild(t)),t.textContent=`Settings saved.`,setTimeout(()=>t.remove(),2500)}function $t(e){return String(e??``).replace(/"/g,`&quot;`)}var Z={"/":xt,"/screener":Lt,"/map":Ut,"/news":Wt,"/portfolio":Kt,"/compare":Yt,"/settings":Zt},en=new Set([`quotes`,`status`]),Q=`/`,tn=!0;async function $(){let e=j();try{let[{quotes:t,source:n},r]=await Promise.all([re(e),ce(e)]);Me(t,{fetchedAt:Date.now(),source:n}),Ne(r),nn(n)}catch(e){console.error(`Quote fetch failed:`,e),nn(`error`)}}function nn(e){let t=document.getElementById(`status-dot`),n=document.getElementById(`status-text`),r=document.getElementById(`last-update`),i=document.getElementById(`market-status`),a=Fe(),o=Pe();e===`error`?(t.className=`status-dot`,n.textContent=`Update failed`):e===`finnhub`?(t.className=`status-dot live`,n.textContent=`Live · Finnhub`):(t.className=`status-dot mock`,n.textContent=`Simulated data`),a.lastFetchAt&&(r.textContent=`Updated ${et(a.lastFetchAt)}`),i&&o&&(i.textContent=o.label,i.className=`market-status ${o.isOpen?`open`:`closed`}`),rn()}function rn(){let e=document.getElementById(`footer-stats`);if(!e)return;let n=[...M().values()],r=n.length?n.reduce((e,t)=>e+t.changePct,0)/n.length:0,i=n.filter(e=>e.changePct>0).length,a=n.filter(e=>e.changePct<0).length;e.innerHTML=`
    <span>${t.length} symbols</span>
    <span class="${R(r)}">Avg ${I(r)}</span>
    <span class="pos">${i} up</span>
    <span class="neg">${a} down</span>
  `}function an(){let e=document.getElementById(`ticker-bar`),t=M();e.innerHTML=n.map(({symbol:e,label:n})=>{let r=t.get(e);if(!r)return``;let i=R(r.changePct);return`
      <span class="ticker-item" data-live-symbol="${e}">
        <span class="ticker-label">${n}</span>
        <span class="ticker-price" data-live="price">$${F(r.price)}</span>
        <span class="ticker-chg ${i}" data-live="pct">${I(r.changePct)}</span>
      </span>
    `}).join(``),e.querySelectorAll(`.ticker-item`).forEach(e=>{e.style.cursor=`pointer`,e.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`stockviz:select`,{detail:e.dataset.liveSymbol}))})})}function on(){document.querySelectorAll(`canvas[data-spark]`).forEach(e=>{let t=M().get(e.dataset.spark);if(t?.sparkline?.length){let n=Number(e.getAttribute(`width`))||72,r=Number(e.getAttribute(`height`))||24;nt(e,t.sparkline,{width:n,height:r})}})}function sn(){return(location.hash.slice(1)||`/`).split(`?`)[0]||`/`}function cn(e=!0){Q=sn(),Z[Q]||(Q=`/`),document.querySelectorAll(`.main-nav a`).forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)?.startsWith(`#${Q}`))});let t=document.getElementById(`main-content`);e&&!tn&&t.classList.add(`page-enter`);let n=(Z[Q]||xt)(t),r=()=>{an(),on(),e&&requestAnimationFrame(()=>t.classList.remove(`page-enter`)),tn=!1};n?.then?n.then(r):r(),document.getElementById(`nav-toggle`)?.setAttribute(`aria-expanded`,`false`),document.querySelector(`.main-nav`)?.classList.remove(`open`)}function ln(e){if(en.has(e)&&Z[Q]){rt(),an(),nn(Fe().dataSource);return}Z[Q]?cn(!1):an()}function un(){let e=document.getElementById(`nav-toggle`),t=document.querySelector(`.main-nav`);e?.addEventListener(`click`,()=>{let n=t?.classList.toggle(`open`);e.setAttribute(`aria-expanded`,n?`true`:`false`)})}function dn(){document.getElementById(`theme-toggle`)?.addEventListener(`click`,Te),Ce(j().theme)}function fn(){lt(),pt(),st(),un(),dn(),Pt(),window.addEventListener(`hashchange`,()=>{Pt(),cn()}),window.addEventListener(`stockviz:select`,e=>{Ie(e.detail),ut(e.detail)}),window.addEventListener(`stockviz:settings-saved`,()=>{Xe(),$().then(()=>Ye($))}),Je(ln),$().then(()=>{cn(),Ye($)})}fn();