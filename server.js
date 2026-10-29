const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Budget estimator route
app.post('/budget', (req, res) => {
    const { travelers, days, transport, hotel } = req.body;
    let transportCost = transport === 'bus' ? 10 : transport === 'train' ? 20 : transport === 'flight' ? 50 : 0;
    let hotelCost = hotel === 'budget' ? 30 : hotel === 'standard' ? 60 : hotel === 'luxury' ? 120 : 0;
    const total = travelers * days * (transportCost + hotelCost);
    res.json({ total });
});

// Personalized Itinerary Generator
app.post('/itinerary', (req, res) => {
    const { destination, budget, days, interests } = req.body;
    if(!destination || !days || !interests) return res.json({ error: "Please provide all inputs" });

    const itinerary = [];
    const interestActivities = {
        adventure: ["Hiking", "River Rafting", "Zip-lining", "Safari Tour"],
        historical: ["Visit Museums", "Historical Walking Tour", "Old Town Exploration", "Monument Tour"],
        shopping: ["Local Market", "Shopping Mall", "Street Shops", "Souvenir Hunt"],
        relaxation: ["Spa Day", "Beach Relaxation", "Park Picnic", "Yoga Session"]
    };

    for(let i=1; i<=days; i++){
        let activityList = [];
        interests.forEach(interest => {
            const activities = interestActivities[interest] || [];
            if(activities.length) activityList.push(activities[i % activities.length]);
        });
        itinerary.push({ day: i, activities: activityList });
    }

    res.json({ destination, days, itinerary });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

