// ================= DATA =================
const destinationData = {
  Paris: {
    event:["Bastille Day Parade","Wine Tasting Tour","Seine River Cruise"],
    food:["Croissants","Ratatouille","Macarons"],
    festival:["Paris Fashion Week","Fête de la Musique","Christmas Markets"],
    festivalImg:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
  },
  London: {
    event:["Notting Hill Carnival","Royal Ascot","London Marathon"],
    food:["Fish & Chips","Shepherd’s Pie","Afternoon Tea"],
    festival:["London Film Festival","Trooping the Colour","Christmas in London"],
    festivalImg:"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80"
  },
  Tokyo: {
    event:["Cherry Blossom Festival","Sumo Tournament","Tokyo Game Show"],
    food:["Sushi","Ramen","Tempura"],
    festival:["Tokyo International Film Festival","Sanja Matsuri","Gion Matsuri"],
    festivalImg:"https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=600&q=80"
  },
  Sydney: {
    event:["Sydney Harbour Cruise","Bondi Beach Surf Fest","Opera House Tour"],
    food:["Meat Pie","Lamingtons","Barramundi Fish"],
    festival:["Sydney Festival","Vivid Sydney","New Year's Harbour Fireworks"],
    festivalImg:"https://images.unsplash.com/photo-1506976785307-8732e854ad89?auto=format&fit=crop&w=600&q=80"
  },
  "New York": {
    event:["Broadway Show","Statue of Liberty Tour","NYC City Cruise"],
    food:["Bagels","Pizza Slice","Cheesecake"],
    festival:["Macy’s Thanksgiving Parade","New Year Times Square Ball Drop","Tribeca Film Festival"],
    festivalImg:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
  },
  Rome: {
    event:["Colosseum Tour","Vatican Guided Day","Roman Forum History Walk"],
    food:["Pasta Carbonara","Roman Pizza","Gelato"],
    festival:["Rome Film Festival","Easter Celebrations Vatican","Estate Romana"],
    festivalImg:"https://images.unsplash.com/photo-1526157635218-d74513ecf49b?auto=format&fit=crop&w=600&q=80"
  },
  Dubai: {
    event:["Desert Safari","Burj Khalifa Observation","Dubai Marina Cruise"],
    food:["Shawarma","Machboos","Luqaimat"],
    festival:["Dubai Shopping Festival","Dubai Expo Events","National Day UAE"],
    festivalImg:"https://images.unsplash.com/photo-1534214526114-0ea4d0217f6b?auto=format&fit=crop&w=600&q=80"
  },
  Barcelona: {
    event:["Sagrada Família Tour","Camp Nou Stadium Visit","City Flamenco Night"],
    food:["Paella","Tapas","Crema Catalana"],
    festival:["La Mercè Festival","Primavera Sound","Festes de Gràcia"],
    festivalImg:"https://images.unsplash.com/photo-1505731132164-cca7f0ec02e7?auto=format&fit=crop&w=600&q=80"
  },
  Singapore: {
    event:["Marina Bay Cruise","Universal Studios Day","Sentosa Island Adventure"],
    food:["Hainanese Chicken Rice","Chilli Crab","Laksa"],
    festival:["Chinese New Year","Mid Autumn Festival","Deepavali"],
    festivalImg:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
  },
  Bangkok: {
    event:["Floating Market Tour","Grand Palace Tour","Chao Phraya River Cruise"],
    food:["Pad Thai","Tom Yum Soup","Mango Sticky Rice"],
    festival:["Songkran Festival","Loi Krathong","Vegetarian Festival"],
    festivalImg:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80"
  },
  Istanbul: {
    event:["Bosporus Cruise","Hagia Sophia Guided Tour","Grand Bazaar Explore"],
    food:["Doner Kebab","Baklava","Turkish Tea"],
    festival:["Istanbul Music Festival","Tulip Festival","Istanbul Biennial"],
    festivalImg:"https://images.unsplash.com/photo-1517999349371-c436f5a7cb55?auto=format&fit=crop&w=600&q=80"
  },
  Moscow: {
    event:["Red Square Tour","Kremlin Palace Guided Tour","Moscow River Cruise"],
    food:["Borscht","Pelmeni","Blini"],
    festival:["Victory Day Parade","Maslenitsa Festival","Moscow Film Festival"],
    festivalImg:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80"
  },
  Cairo: {
    event:["Pyramids of Giza Tour","Nile Cruise","Egyptian Museum Walk"],
    food:["Koshari","Falafel","Shawarma Egyptian"],
    festival:["Ramadan Night Fest","Egyptian Sun Festival","Cairo International Film Festival"],
    festivalImg:"https://images.unsplash.com/photo-1518684079-0e85f9e4b2da?auto=format&fit=crop&w=600&q=80"
  },
  "Rio de Janeiro": {
    event:["Christ the Redeemer Tour","Sugarloaf Cable Ride","Copacabana Night"],
    food:["Feijoada","Pão de Queijo","Brigadeiro"],
    festival:["Rio Carnival","Rock in Rio","New Year Copacabana"],
    festivalImg:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
  },
  "Cape Town": {
    event:["Table Mountain Cable Car","Robben Island Tour","Cape Winelands Tour"],
    food:["Biltong","Bunny Chow","Braai Grill"],
    festival:["Cape Town Jazz Festival","Heritage Day Celebration","Cape Minstrel Carnival"],
    festivalImg:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
  }
};

// ================= SELECT ELEMENTS =================
const destinationSelect = document.getElementById('destinationSelect');
const travelersInput = document.getElementById('travelers');
const daysInput = document.getElementById('days');
const transportSelect = document.getElementById('transport');
const hotelSelect = document.getElementById('hotel');
const estimateBtn = document.getElementById('estimateBudget');
const budgetResult = document.getElementById('budgetResult');
const destinationInfo = document.getElementById('destinationInfo');

const showQuoteBtn = document.getElementById('showQuote');
const quoteDisplay = document.getElementById('quoteDisplay');
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseDisplay = document.getElementById('surpriseDisplay');

const countdownInput = document.getElementById('countdownInput');
const countdownDisplay = document.getElementById('countdownDisplay');
const startCountdownBtn = document.getElementById('startCountdown');

const languageSelect = document.getElementById('languageSelect');

// ================= QUOTES & SURPRISE =================
const quotes = [
  "Travel is the only thing you buy that makes you richer.",
  "Adventure is worthwhile.",
  "The world is a book, and those who do not travel read only one page."
];

const surpriseDestinations = Object.keys(destinationData);

// ================= FUNCTION TO DISPLAY DESTINATION INFO =================
function showDestinationInfo(dest, container) {
    const info = destinationData[dest];
    if(info){
        container.innerHTML = `
            <h3>${dest}</h3>
            <p><b>Events:</b> ${info.event.join(", ")}</p>
            <p><b>Festivals:</b> ${info.festival.join(", ")}</p>
            <p><b>Foods:</b> ${info.food.join(", ")}</p>
            <img src="${info.festivalImg}" width="100%" style="border-radius:10px;margin-top:10px;">
        `;
    }
}

// ================= BUDGET ESTIMATOR =================
estimateBtn.addEventListener('click', () => {
    const destination = destinationSelect.value;
    const travelers = parseInt(travelersInput.value) || 0;
    const days = parseInt(daysInput.value) || 0;
    const transport = transportSelect.value;
    const hotel = hotelSelect.value;

    let transportCost = transport === 'bus' ? 10 : transport === 'train' ? 20 : 50;
    let hotelCost = hotel === 'budget' ? 30 : hotel === 'standard' ? 60 : 120;
    const total = travelers * days * (transportCost + hotelCost);

    budgetResult.innerText = `Estimated Total: $${total}`;

    // Show full destination info
    showDestinationInfo(destination, destinationInfo);
});

// ================= RANDOM QUOTE =================
showQuoteBtn.addEventListener('click', () => {
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteDisplay.innerText = quote;
});

// ================= SURPRISE DESTINATION =================
surpriseBtn.addEventListener('click', () => {
    const randomDest = surpriseDestinations[Math.floor(Math.random()*surpriseDestinations.length)];
    showDestinationInfo(randomDest, surpriseDisplay);
});

// ================= SHOW INFO ON DESTINATION CHANGE =================
destinationSelect.addEventListener('change', () => {
    showDestinationInfo(destinationSelect.value, destinationInfo);
});

// ================= INITIAL DISPLAY =================
showDestinationInfo(destinationSelect.value, destinationInfo);

// ================= COUNTDOWN TIMER =================
startCountdownBtn.addEventListener('click', () => {
    const endTime = new Date(countdownInput.value).getTime();
    if(isNaN(endTime)) { countdownDisplay.innerText = "Invalid date"; return; }

    clearInterval(window.countdownInterval);
    window.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;
        if(distance<0){ clearInterval(window.countdownInterval); countdownDisplay.innerText="Countdown Ended"; return; }
        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
        const seconds = Math.floor((distance%(1000*60))/1000);
        countdownDisplay.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    },1000);
});

// ================= LANGUAGE SWITCH =================
languageSelect.addEventListener('change', () => {
    const lang = languageSelect.value;
    document.querySelectorAll('[data-lang]').forEach(el => {
        if(lang==="hi"){
            if(el.dataset.lang==="budget") el.innerText="बजट अनुमान";
            if(el.dataset.lang==="selectDestination") el.innerText="गंतव्य चुनें";
        } else if(lang==="ta"){
            if(el.dataset.lang==="budget") el.innerText="பட்ஜெட் மதிப்பீடு";
            if(el.dataset.lang==="selectDestination") el.innerText="இலக்கை தேர்ந்தெடுக்கவும்";
        } else if(lang==="fr"){
            if(el.dataset.lang==="budget") el.innerText="Estimation du budget";
            if(el.dataset.lang==="selectDestination") el.innerText="Sélectionnez la destination";
        } else {
            if(el.dataset.lang==="budget") el.innerText="Budget Estimator";
            if(el.dataset.lang==="selectDestination") el.innerText="Select Destination";
        }
    });
});
