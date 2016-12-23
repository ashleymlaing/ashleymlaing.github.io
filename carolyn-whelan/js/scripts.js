/**
* Created by Unaka Muigai on 9/13/2016.
*/
var app = angular.module('portfolio', []);

app.controller('featuredCtrl', function($scope) {
  $scope.articles = [
    {
      category: "Public Policy",
      publication:"EIU",
      featured:true,
      title:"Higher education – What’s it worth?",
      date: "July 3, 2014",
      description:"As university graduates box up their caps and gowns for the summer and embark on the world of work, they might be surprised to learn that senior executives value a diploma far less than skills or contacts.",
      link:"http://going-global.economist.com/en/2014/07/03/%E9%AB%98%E7%AD%89%E6%95%99%E8%82%B2-%E4%BB%B7%E5%80%BC%E5%9C%A8%E5%93%AA%EF%BC%9F/",
      className:"public-policy",
      page:"public-policy.html",
      imageClass:"eiu"
    },
    {
      category: "Public Policy",
      publication:"EIU",
      featured:false,
      title:"Turning the clock on climate change",
      date: "November 15, 2016",
      description:"Q&A with James Gifford, senior fellow at the Initiative for Responsible Investment at Harvard and director of Impact at private equity firm Tau Investment Management",
      link:"https://www.eiuperspectives.economist.com/sustainability/global-development-goals-opportunities-and-obstacles/blog/turning-clock-climate-change",
      className:"public-policy",
      page:"public-policy.html",
      imageClass:"un-foundation"
    },
    {
      category: "Public Policy",
      publication:"EIU",
      featured:false,
      title:"Small business efforts to hire young people in the US",
      date: "February 10,2015",
      description:"Across the United States, small businesses are developing innovative strategies to hire and upskill young workers in ways that are both good for business, and that reduce the unemployment hardships that disproportionately impact disadvantaged young people.",
      link:"https://www.eiuperspectives.economist.com/talent-education/innovations-youth-hiring",
      className:"public-policy",
      page:"public-policy.html",
      imageClass:"rock-logo"
    },
    {
      category: "Public Policy",
      publication:"EIU",
      featured:false,
      title:"Technology and its impact on transportation",
      date: "December 15, 2014",
      description:"Roughly half of private operators across the world believe mobile technologies boost network or on-time performance, cut costs and improve passenger satisfaction",
      link:"https://www.eiuperspectives.economist.com/technology-innovation/how-mobile-transforming-passenger-transportation/white-paper/how-mobile-transforming-passenger-transportation",
      className:"public-policy",
      page:"public-policy.html",
      imageClass:"sap"
    },
    {
      category: "Public Policy",
      publication:"EIU",
      featured:false,
      title:"A poll of young people across the world on their challenges, plans and aspirations for the future",
      date: "#",
      description:"Approximately 75 million youth globally are actively seeking meaningful employment. To effectively compete for economic opportunities and succeed in the 21st century economy, these young people will require a mix of education, employability, entrepreneurship, and leadership skills.",
      link:"http://www.citigroup.com/citi/foundation/philanthropic-focus/youth-economic-opportunities.htm",
      className:"public-policy",
      page:"public-policy.html",
      imageClass:"c-found"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:true,
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Google's chief of environmental policy explains strategy",
      date: "October 17, 2008",
      description:"Dan Reicher, director of climate and energy initiatives at Google.org, the for-profit philanthropic arm of the Internet search giant, is spreading the anti-coal gospel in government and industry circles.",
      link:"http://www.nytimes.com/2008/10/18/business/worldbusiness/18iht-wbspot18.1.16975079.html",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Former mayor of Bogotá leaves his mark on many cities",
      date: "December 28, 2007",
      description:"NEW YORK — Mass transit projects regularly perish in the process, when special interest demands may derail the best intentions of public policy makers. So it often goes in Latin America, where wealthy land owners exert strong influence.",
      link:"http://www.nytimes.com/2007/12/28/business/worldbusiness/28iht-wbspot29.html",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"The next big thing: Battery-powered bikes",
      date: "March 14, 2007",
      description:"Picture electric bikes and Pee- Wee Herman's clunker may spring to mind. Not anymore. From California to China, 'e-bikes' are taking off as an alternate means of transportation, after years of being overshadowed by their muscle- powered cousins.",
      link:"http://www.nytimes.com/2007/03/14/business/worldbusiness/14iht-transcol15.4904522.html",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Brazil is driving a revival in sugar cane fuel",
      date: "December 18, 2004",
      description:"For Ronaido Silveir Ribeiro, the future is here, and it's called ethanol. The Sao Paulo-based cab driver switched last year from gasoline and cannot see himself going back soon.",
      link:"../pdf/Business & Investing - IHT row - no. 4 - Brazil is driving.pdf",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },

    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"A hot year for coffee? The signs look good",
      date: "March 19, 2005",
      description:"Punta da Sarra is a vast coffee plantation in the Ribeirão Preto valley north of São Paulo. For a few years now, lush sugar cane has filled half the fields, a response to rock-bottom prices in the $80 billion world coffee market.",
      link:"http://www.nytimes.com/2005/03/19/your-money/a-hot-year-for-coffee-the-signs-look-good.html",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Where fashion meets farming: Fast, sleek and expensive, vicua makes a comeback",
      date: "May 29, 2004",
      description:"The wet marshes of Wales are an unlikely place to raise guanacos, a camel-like breed whose brethren include llamas and alpacas.",
      link:"../pdf/More IHT - 6 - Where fashion meets farming.pdf",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"His strategy wins nation clout on the global stage",
      date: "December 4, 2004",
      description:"BRASÍLIA — Foreign Minister Celso Amorim, a cinema buff and former movie producer, likes to go over a script in his mind of Brazil's future.",
      link:"http://www.nytimes.com/2004/12/04/business/worldbusiness/his-strategy-wins-nation-clout-on-the-global-stage.html",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Cantor sees new life in eco-credit trading",
      date: "December 24, 2004",
      description:"Since Sept. 11, 2001, Cantor Fitzgerald has perhaps been best known for tragically losing much of its staff in the terrorist attacks on the World Trade Center in New York.",
      link:"http://www.nytimes.com/2004/12/24/your-money/briefcase-cantor-sees-new-life-in-ecocredit-trading.html",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Developing countries' economic clout grows",
      date: "July 10, 2004",
      description:"It all started with drugs. Three years ago a few emerging economies — Brazil, South Africa and India — got together to fight pharmaceutical companies' high prices for life-saving medicines.",
      link:"http://www.nytimes.com/2004/07/10/your-money/the-new-alliances-a-shifting-geography-of-trade-developing.html",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Women's Work: Making a difference in Latin America",
      date: "#",
      description:"#",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Early signals: A boom in Buenos Aires",
      date: "#",
      description:"Could Argentina be the next hot Latin property market? High-end apartments in Buenos Aires changed hands in January at a 24 percent faster cleip than in December",
      link:"../pdf/More IHT - Article 11 - A boom in Buenos Aires.pdf",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Argentina's exports gain respect and sales",
      date: "#",
      description:"#",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"A Latin Revival",
      date: "August 23, 2003",
      description:"Latin America stocks have rallied nearly 30 percent in a year as investors have shrugged off fears of instability in Brazil in response to the market-friendly stance of the new president",
      link:"../pdf/More IHT - 10 - Women's work.pdf",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Finding love (and a way to pay the bills) in Brazil",
      date: "#",
      description:"#",
      link:"http://www.nytimes.com/2005/02/26/your-money/finding-love-and-a-way-to-pay-the-bills-in-brazil.htm",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      title:"Is the party about to end in Brazil?",
      date: "August 8, 2010",
      description:"FORTUNE -- Marcelo do Rio stands outside his new Brazilian pizzeria, grinning. The sale of his brewpub chain financed the launch of his new business -- and the purchase of his swank Rio home.",
      link:"http://archive.fortune.com/2010/08/05/news/international/Brazil_growth_slows.fortune/index.htm",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"WSJ",
      featured:false,
      title:"CAC-40 Index May See Shuffle",
      date: "#",
      description:"#",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"WSJ"
    },
    {
      category:"Business",
      publication:"WSJ",
      featured:false,
      title:"Aventis May Make Investors Queasy",
      date: "#",
      description:"#",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"WSJ"
    },
    {
      category:"Business",
      publication:"WSJ",
      featured:false,
      title:"Prominent Scientists Break Away To Form Swiss Drug Company",
      date: "July 11, 2002",
      description:"PARIS - Several prominent scientist from GlaxoSmithKline PLC and Roche Holding AG are breaking away from their parent companies",
      link:"../pdf/Business & Investing - WSJ row - article 3.pdf",
      className:"business",
      page:"business.html",
      imageClass:"WSJ"
    },
    {
      category:"Business",
      publication:"WSJ",
      featured:false,
      title:"Alstom Names Former CEO Of Elf as Adviser to Chairman, (with John Carreyrou)",
      date: "February 22, 2002",
      description:"PARIS -- Moving to allay investors' concerns about its financial disclosure, engineering company Alstom SA named a respected French executive to advise its chairman on financial matters and said it would replace its chief financial officer by the summer.",
      link:"http://www.wsj.com/articles/SB1014323466760189880",
      className:"business",
      page:"business.html",
      imageClass:"WSJ"
    },
    {
      category:"Business",
      publication:"WSJ",
      featured:false,
      title:"Weak Dollar Hinders Drug Makers",
      date: "#",
      description:"#",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"WSJ"
    },
    {
      category:"Business",
      publication:"WSJ",
      featured:false,
      title:"Has Sanofi Stock Jumped Too High",
      date: "#",
      description:"#",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"WSJ"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"Bulls Say Qualcomm Is Poised for More Gains",
      date: "February 9, 1999",
      description:"Since its inception, San Diego-based Qualcomm has been a trailblazing technology company, paving the way with CDMA (Code Division Multiple Access), the dominant wireless standard in the U.S. Market leaders like Motorola , Lucent Technologies and Northern Telecom all have used Qualcomm's technology in their wireless systems.",
      link:"http://www.barrons.com/articles/SB918516752214175000",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"Chips Intact Despite Taiwan Quake",
      date: "September 21, 1999",
      description:"All roads lead to Taiwan, at least when it comes to semiconductor manufacturing. Around 70% of 'fabless' semiconductor companies (those that don't have their own factories) -- including such cutting-edge chip makers as Broadcom , Galileo Technology , MMC Networks , PMC-Sierra , S3, 3DFX Interactive , Altera , Lattice Semiconductor and Xilinx -- outsource their chip production to Taiwanese facilities. Testing and assembly...",
      link:"http://www.barrons.com/articles/SB937938035860896754",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"Some Sour on Semiconductor Equipment Stocks",
      date: "November 23, 1999",
      description:"Since bottoming out during last year's Asian financial crisis, shares of semiconductor equipment manufacturers have been on a tear.Fueled by economic recovery abroad, bullish demand for PCs, a memory chip shortage and new markets like data networking, stocks of equipment makers like Applied Materials , KLA-Tencor , and Novellus Systems have quadrupled from their two-year lows of September and October 1998. Shares of another...",
      link:"http://www.barrons.com/articles/SB943388369879143578",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"For 1999, Stick with the European Sunbelt",
      date: "January 6, 1999",
      description:"#",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"Have 'B to B' E-Commerce Stocks Hit a Wall?",
      date: "November 30, 1999",
      description:"A year ago, investors couldn't get enough of e-tailers and online auction houses, as they bid up shares of eBay and uBid big time. From January to April 1999, their stock prices more than tripled.",
      link:"http://www.barrons.com/articles/SB9439983163931621",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"DSL Is Poised For a Big Comeback",
      date: "November 18, 1999",
      description:"1999 was the year cable modems emerged as the high-speed access route of choice for Internet users (see Weekday Trader, 'Excite Deal Shows Cable Modem Is King ,' January 19).",
      link:"http://www.barrons.com/articles/SB942958922696853726",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"Nordic Handset Makers Face Price Erosion",
      date: "October 14, 1999",
      description:"GENEVA -- The new Millennium is almost upon us, yet we've only scratched the surface of mobile phone penetration in much of the world. That could change quickly as mobile devices add more and more features, like data communications and enhanced Internet connections.",
      link:"http://www.barrons.com/articles/SB939914006688310344",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"Old World Investors Like Old Economy Stocks",
      date: "January 6, 1999",
      description:"D espite their recent pullback, tech stocks are still very richly priced -- the world over. As the stocks of U.S. Internet wunderkinden went through the roof, some investors looked for technology leaders in Europe.",
      link:"http://www.barrons.com/articles/SB94950673551552602?mod=_newsreel_3",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Upwardly mobile: MIT professor speaks out on transit, technology in emerging economies",
      date: "January 19, 2010",
      description:"Ralph Gakenheimer is a Fulbright Scholar, World Bank Advisor, and MIT professor of urban planning who has emerged as one of the leading experts on transportation in developing countries.",
      link:"http://fortune.com/2010/01/19/upwardly-mobile/",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"China's New Frontier: Telecom in South America",
      date: "June 25, 2009",
      description:"(Fortune Magazine) -- At phone operator Movistar's sales offices in Buenos Aires, customers line up to buy high-speed wireless services to access the web on their mobile phones. ",
      link:"http://archive.fortune.com/2009/06/23/technology/china_telecom_latin_america.fortune/index.htm",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Wal-Mart Banks On Mexico",
      date: "February 4, 2008",
      description:"(Fortune Magazine) -- For years, Wal-Mart tried to enter the U.S. banking business, but it gave up in 2007, pulling its application after endless outcries from domestic retail banks",
      link:"http://archive.fortune.com/2008/01/28/news/international/walmart_bank.fortune/index.htm?postversion=2008012904",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Castro's Revenge: A Cuban oil rush is underway",
      date: "March 19, 2007",
      description:"#",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Argentina: Cheap Steaks, High Stakes",
      date: "March 8, 2004",
      description:"It's summer in Buenos Aires, and revelers are spilling onto city streets. Hotels in seaside Mar del Plata bulge with businessmen, many of whom made big money",
      link:"../pdf/More Fortune (top row) 5 - Cheap Steaks.pdf",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Are Patents Really A Virtue?",
      date: "October 16, 2000",
      description:"(FORTUNE Magazine) – In this era of insane stock valuations, how can you ever tell when a company's technology is really worth the multiple that investors are paying? One obvious way, it would seem, is to look at the company's patents (if you have a Ph.D., that is).",
      link:"http://archive.fortune.com/magazines/fortune/fortune_archive/2000/10/16/289636/index.htm",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Emerging Markets That Live Up To The Name",
      date: "December 18, 2000",
      description:"After repeatedly disappointing U.S. investors, a few countries in Latin America and Asia are finally reaping the benefits of a rising middle class. This time it really is different.",
      link:"http://archive.fortune.com/magazines/fortune/fortune_archive/2000/12/18/293112/index.htm",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"BP produces biodiesel fuel from African plant",
      date: "September 7, 2007",
      description:"(Fortune Magazine) -- Can a poisonous plant become a biodiesel hero and help African economies in the process? BP (Charts) thinks so.",
      link:"http://archive.fortune.com/magazines/fortune/fortune_archive/2007/09/17/100259542/index.htm",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"India Discovers Latin America",
      date: "July 28, 2005",
      description:"Observes that India is focusing on Latin America for markets and resources. How Indian auto parts, drugs, textiles and machinery are beginning to make their mark in Latin markets; Trade details; Factors that are fueling the trade expansion, including India's relaxation of rules for outward investment, its increasing appetite for raw materials",
      link:"http://connection.ebscohost.com/c/articles/17908378/india-discovers-latin-america",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"International First: Latin Outsourcing",
      date: "July 26, 2004",
      description:"Where does an Indian outsourcing company go when it wants to outsource? These days, it's likely to be Buenos Aires.",
      link:"../pdf/More Fortune - no. 4 - Latin Outsourcing.pdf",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"News",
      publication:"Newsweek",
      featured:true,
      logo:"newsweek-logo.png",
      title:"Easing The Misery",
      date: "July 16, 2004",
      description:"A small army of therapist soothes a troubled nation. Life got you down? In recent times, as an econimic depression wiped out bank savings and millions of jobs, all too many Argentines would have said yes.",
      link:"../pdf/Landing page - News - Newsweek - Easing the misery.pdf",
      className:"news",
      page:"news.html",
      imageClass:"newslogo"
    },
    {
      category:"News",
      publication:"Newsweek",
      featured:false,
      logo:"newsweek-logo.png",
      title:"A Cheap-Peso Boom",
      date: "May 18, 2003",
      description:"Argentina has found an economic formula that works: export more, import less. The peso, once pegged to the dollar, is now worth about 30 U.S. cents. That's been a boon to the country's export industries.",
      link:"http://www.newsweek.com/cheap-peso-boom-137269",
      className:"news",
      page:"news.html",
      imageClass:"newslogo"
    },
    {
      category:"News",
      publication:"Newsweek",
      featured:false,
      logo:"newsweek-logo.png",
      title:"A Province That Works",
      date: "November 30, 2003",
      description:"In 1835 Charles Darwin described the Argentine province of Mendoza as having a 'sad and disagreeable aspect,'' and he noted that the population in recent years had suffered a 'fall in prosperity.'' Few people could dispute the famed scientist.",
      link:"http://www.newsweek.com/province-works-133227",
      className:"news",
      page:"news.html",
      imageClass:"newslogo"
    },
    {
      category:"Science",
      publication:"sciAm",
      featured:true,
      logo:"Scientific_American_logo.svg_.png",
      title:"Taut-Tech: Smaller, Softer Artificial Muscles to Help Bring Power to Toys and Cell Phones",
      date: "November 9, 2011",
      description:"Artificial muscles already help human eyes blink, robotic fish swim and mechanical arms in space replace solar panels. Now a new, potentially wearable type of artificial muscle is expected to do all of those things while being lighter, smaller, softer and cheaper.",
      link:"https://www.scientificamerican.com/article/softer-artificial-muscles-new-zealand/",
      className:"science",
      page:"science.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Science",
      publication:"sciAm",
      featured:false,
      logo:"Scientific_American_logo.svg_.png",
      title:"The Doctor Is Out, but New Patient Monitoring and Robotics Technology Is In",
      date: "May 25, 2010",
      description:"A new generation of medical devices using wireless communications, sophisticated software and data center-driven 'cloud' computing promises to deliver health care in ways previously limited to the confines of fancy hospital rooms.",
      link:"http://www.scientificamerican.com/article/patient-monitoring-tech/",
      className:"science",
      page:"science.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Science",
      publication:"sciAm",
      featured:false,
      logo:"Scientific_American_logo.svg_.png",
      title:"How to Reduce Car-Made Pollution? Tune Up the Existing Technology",
      date: "March 4, 2009",
      description:"Projected carbon dioxide (CO2) emissions from cars could remain level at three gigatons through 2050 despite many more personal vehicles on the road with only minor and affordable changes to existing engines, chassis and systems, according to a new report.",
      link:"http://www.scientificamerican.com/article/how-to-reduce-car-made-pollution/",
      className:"science",
      page:"science.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Science",
      publication:"sciAm",
      featured:false,
      logo:"Scientific_American_logo.svg_.png",
      title:"Blooms Away: The Real Price of Flowers",
      date: "February 12, 2009",
      description:"Roses are red… They are also fragile and almost always flown to the U.S. from warmer climes in South America, where roughly 80 percent of our roses take root; to warm the hearts of European sweethearts, they are most often imported from Africa.",
      link:"https://www.scientificamerican.com/article/environmental-price-of-flowers/",
      className:"science",
      page:"science.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Science",
      publication:"sciAm",
      featured:false,
      logo:"Scientific_American_logo.svg_.png",
      title:"Is the Sun Setting on Solar Power in Spain?",
      date: "October 20, 2008",
      description:"On the outskirts of Seville, Spain, 600 rotating mirrors send shafts of light to a collector atop a soaring 380-foot- (115-meter-) tall tower. Its scalding 480-degree-Fahrenheit (250-degree-Celsius) steam drives a turbine generating a peak capacity of 11 megawatts (MW) of electricity for the national grid.",
      link:"http://www.scientificamerican.com/article/is-the-sun-setting-on-solar-power-in-spain/",
      className:"science",
      page:"science.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Travel",
      featured:true,
      logo:"nga.png",
      title:"NO REALLY, IT’S A HUT",
      date: "November 2009",
      description:"Set at 9,169 feet in the Swiss Alps, the Monte Rosa Hut is a three-hour, cross-glacier hike from a train station outside Zermatt (Rotenboden). So when it came time for a $6 million renovation, Swiss enginners faced a Matterhorn-size challenge.",
      link:"../pdf/Travel landing page 1.pdf",
      className:"travel",
      page:"travel.html",
      imageClass:"travellogo"
    },
    {
      category:"Travel",
      publication:"Town",
      featured:false,
      logo:"nga.png",
      title:"Buenos Aires Steps Lively",
      date: "December 15, 2006",
      description:"'Crises are painful, but you emerge stronger,' says Alan Faena, a fashion designer who partnered with designer Philippe Starack and a group of American investors",
      link:"../pdf/Travel page 1 - Buenos Steps.pdf",
      className:"travel",
      page:"travel.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Travel",
      publication:"NGA",
      featured:false,
      logo:"nga.png",
      title:"Argentina uncorked",
      date: "February 2005",
      description:"Argentina's Aconagua-at 22,835 feet, the highest peak outside the Himalaya-offers Seven Summits cachet without requiring crack mountain skills.",
      link:"../pdf/Travel 3 - Argentina uncorked.pdf",
      className:"travel",
      page:"travel.html",
      imageClass:"travellogo"
    },
    {
      category:"Travel",
      publication:"Marie",
      featured:false,
      logo:"nga.png",
      title:"More than a pretty face",
      date: "June 2007",
      description:"Seema Dhundia is used to being out in front: She was commander of the world's first all-female paramilitary in India; now she's heading up the first all-female U.N. peacekeeping force in Liberia.",
      link:"../pdf/Travel p 2 - More than a pretty face.pdf",
      className:"travel",
      page:"travel.html",
      imageClass:"marie-img"
    },
    {
      category:"Travel",
      publication:"Conde",
      featured:false,
      logo:"nga.png",
      title:"Word of Mouth: A New Vintage",
      date: "February 20, 2004",
      description:"Already on in-the-know oenophiles' itineraries, the wine route leading into the countryside from the provincial capital of Mendoza, Argentina, is uncorking as an increasingly enviable place to sip and sup.",
      link:"../pdf/Travel 4 - Word of mouth.pdf",
      className:"travel",
      page:"travel.html",
      imageClass:"conde"
    },
    {
      category:"Other",
      publication:"Ernst",
      featured:true,
      logo:"columbia-bs.png",
      title:"America’s Private Enterprise Leadership Network for CFOs Perspectives",
      date: "#",
      description:"On November 8, members of the American Private Enterprise Leadership Network will gather in Palm Springs, California, for their Fall Meeting.",
      link:"../pdf/EY1.pdf",
      className:"other",
      page:"other.html",
      imageClass:"ey"
    },
    {
      category:"Other",
      publication:"Ernst",
      featured:false,
      logo:"columbia-bs.png",
      title:"Due diligence on corrupt practices",
      date: "#",
      description:"Despite more than a decade of deal-making experience in the Middle East, Africa, Eastern Europe, Latin America and Asia, corporate investors in emerging markets still face many risks.",
      link:"../pdf/ernst&young2.pdf",
      className:"other",
      page:"other.html",
      imageClass:"ey"
    },
    {
      category:"Other",
      publication:"Ernst",
      featured:false,
      logo:"columbia-bs.png",
      title:"National strategies for competitive advantage and growth through clenatech",
      date: "#",
      description:"As the world shifts to a resource-efficient and low-carbon economy to address the rising consumption of energy and raw materials, many countries are embracing national cleantech",
      link:"../pdf/ernst&young3.pdf",
      className:"other",
      page:"other.html",
      imageClass:"ey"
    },
    {
      category:"Other",
      publication:"Ernst",
      logo:"columbia-bs.png",
      title:"Global cleantech insights and trends report",
      date: "#",
      description:"The business landscape these days presents a new reality that forces us to face new business, financial, strategic and operational risks.",
      link:"../pdf/ernst&young4.pdf",
      className:"other",
      page:"other.html",
      imageClass:"ey"
    },
    {
      category:"Other",
      publication:"Columbia",
      featured:false,
      logo:"columbia-bs.png",
      title:"Parker petroleum in Jumandia",
      date: "September 4, 2007",
      description:"Parker Petroleum has operated in Jumandia for 10 years. However, some opposition has developed to its new project, a refinery that is important to the company's growth.",
      link:"../pdf/ColumbiaBusinessSchool1.pdf",
      className:"other",
      page:"other.html",
      imageClass:"otherlogo"
    },
    {
      category:"Other",
      publication:"Columbia",
      featured:false,
      logo:"columbia-bs.png",
      title:"Buying a diamond – Determinants of price",
      date: "January 2, 2008",
      description:"The diamond industry does not make it easy to comparison shop. How should a purchaser value a stone and what attributes determine a diamond's price?",
      link:"../pdf/ColumbiaBusinessSchool2.pdf",
      className:"other",
      page:"other.html",
      imageClass:"otherlogo"
    },
    {
      category:"Other",
      publication:"Columbia",
      featured:false,
      logo:"columbia-bs.png",
      title:"Behind the Small Packages Success Story",
      date: "#",
      description:"Single-serve packages are a hit in India and other poor nations, where shoppers buy sachets of shampoo for just pennies per day.",
      link:"../pdf/ColumbiaBusinessSchool3.pdf",
      className:"other",
      page:"other.html",
      imageClass:"otherlogo"
    },
    {
      category:"Other",
      publication:"Columbia",
      featured:false,
      logo:"columbia-bs.png",
      title:"Product Customization Decisions: Order Does Matter",
      date: "#",
      description:"In an unforgettable scene from When Harry Met Sally, Meg Ryan's high-maintenance character asks a waitress for dressing on the side, lightly toasted bread and endless other options,triggering a near apoplectic fit in dining companion Billy Crystal.",
      link:"../pdf/ColumbiaBusinessSchool4.pdf",
      className:"other",
      page:"other.html",
      imageClass:"otherlogo"
    },
    {
      category:"Other",
      publication:"UN",
      featured:false,
      logo:"columbia-bs.png",
      title:"Speech of ITU Secretary General at the opening of Telecom",
      date: "December 12, 2003",
      description:"ITU is the organizer of the TELECOM event. Founded back in 1865, it is the world's oldest intergovermmental body, and a United Nations agency.",
      link:"../pdf/UN&NGOS.pdf",
      className:"other",
      page:"other.html",
      imageClass:"otherlogo"
    },
    {
      category:"Digital Equipment Corporation",
      publication:"Digital",
      featured:false,
      logo:"columbia-bs.png",
      title:"Bluebook-Internal quarterly publication for senior managers with financial and company information",
      date: "March 1996",
      description:"Digital Equipment Corporation is the world's leader in open client/server solutions from personal computing to integrated worldwide information systems.",
      link:"../pdf/Digital Equipment Corporation 1.pdf",
      className:"other",
      page:"other.html",
      imageClass:"otherlogo"
    },
  ];
});
