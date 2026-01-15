export type TipCategory = "Nutrition" | "Workout" | "Hydration" | "Mindset" | "Damage Control";

export interface Tip {
    id: number;
    category: TipCategory;
    keywords: string[];
    text: string;
}

export const TIPS_DB: Tip[] = [
    // --- NUTRITION (Vegetables & Superfoods) ---
    {
        id: 1,
        category: "Nutrition",
        keywords: ["spinach", "greens", "salad", "iron"],
        text: "Leafy greens are iron-rich! Pro tip: Add a splash of lemon or orange juice. Vitamin C helps your body absorb that iron 3x better."
    },
    {
        id: 2,
        category: "Nutrition",
        keywords: ["carrot", "hummus", "snack"],
        text: "Carrots are full of Vitamin A, which is fat-soluble. That means eating them with a healthy fat (like hummus or avocado) helps you absorb the nutrients!"
    },
    {
        id: 3,
        category: "Nutrition",
        keywords: ["broccoli", "steamed", "veggie"],
        text: "Broccoli is a superfood, but don't boil it to death! Steaming it preserves the cancer-fighting sulforaphane better than boiling."
    },
    {
        id: 4,
        category: "Nutrition",
        keywords: ["oats", "porridge", "breakfast"],
        text: "Oats contain beta-glucan, a fiber that keeps you full for hours. Javier says: No snacking until lunch!"
    },
    {
        id: 5,
        category: "Nutrition",
        keywords: ["banana", "fruit", "cramp"],
        text: "Nature's energy bar. The potassium here helps prevent muscle cramps. Perfect before a workout."
    },
    {
        id: 6,
        category: "Nutrition",
        keywords: ["egg", "protein", "omelet"],
        text: "Eggs are a complete protein source. Don't fear the yolk—that's where most of the nutrients (like Choline for your brain) live."
    },
    {
        id: 7,
        category: "Nutrition",
        keywords: ["avocado", "fat", "toast"],
        text: "Yes, it's high calorie, but it's the *good* kind of fat (monounsaturated). It keeps your skin glowing and Javier happy."
    },
    {
        id: 8,
        category: "Nutrition",
        keywords: ["berries", "blueberries", "yogurt"],
        text: "Berries have the highest antioxidant levels of almost any fruit. They are basically rust-removers for your cells."
    },
    {
        id: 9,
        category: "Nutrition",
        keywords: ["garlic", "onion", "flavor"],
        text: "Garlic isn't just for flavor; it boosts your immune system. Crush it and let it sit for 10 mins before cooking to maximize the health benefits."
    },
    {
        id: 10,
        category: "Nutrition",
        keywords: ["nuts", "almonds", "walnuts"],
        text: "Walnuts look like little brains because they are good for your brain! Just stick to a handful; they are calorie bombs."
    },

    // --- WORKOUT (Motivation & Recovery) ---
    {
        id: 11,
        category: "Workout",
        keywords: ["run", "jog", "cardio", "stamina"],
        text: "Cardio is great, but don't forget: running burns calories, but building muscle burns calories even while you sleep."
    },
    {
        id: 12,
        category: "Workout",
        keywords: ["lift", "weights", "gym", "strength"],
        text: "Muscle is metabolic armor. Every bit of muscle you add makes it harder for fat to come back."
    },
    {
        id: 13,
        category: "Workout",
        keywords: ["rest", "sleep", "recovery"],
        text: "Muscles don't grow in the gym; they grow while you sleep. Javier loves naps, and you should too."
    },
    {
        id: 14,
        category: "Workout",
        keywords: ["stretch", "yoga", "flexibility"],
        text: "Feeling stiff? Stretching improves blood flow and recovery. Flexible muscles are strong muscles."
    },
    {
        id: 15,
        category: "Workout",
        keywords: ["walk", "steps", "active"],
        text: "Walking is the most underrated fat burner. It lowers cortisol (stress hormone) which helps reduce belly fat."
    },
    {
        id: 16,
        category: "Workout",
        keywords: ["sore", "pain", "doms"],
        text: "Soreness (DOMS) means you challenged your body. Drink water and keep moving gently to flush out the stiffness."
    },
    {
        id: 17,
        category: "Workout",
        keywords: ["squat", "leg day"],
        text: "Leg muscles are the biggest in your body. Working them releases more growth hormone than any other exercise!"
    },

    // --- HYDRATION ---
    {
        id: 18,
        category: "Hydration",
        keywords: ["water", "drink", "thirsty"],
        text: "Your brain is 75% water. If you feel foggy or have a headache, drink a glass before you take a pill."
    },
    {
        id: 19,
        category: "Hydration",
        keywords: ["hungry", "snack craving"],
        text: "Wait! Are you hungry or just thirsty? The brain often confuses the two. Drink a glass of water and wait 10 mins."
    },
    {
        id: 20,
        category: "Hydration",
        keywords: ["coffee", "caffeine", "tea"],
        text: "Coffee is great for focus, but it's a diuretic. Match every cup of coffee with a cup of water to stay balanced."
    },

    // --- DAMAGE CONTROL (Burgers, Pizza, Sweets) ---
    {
        id: 21,
        category: "Damage Control",
        keywords: ["burger", "fast food", "fries", "junk"],
        text: "Okay, you ate the burger. Javier is judging you slightly, but it's fine. One bad meal doesn't make you fat, just like one salad doesn't make you skinny."
    },
    {
        id: 22,
        category: "Damage Control",
        keywords: ["pizza", "cheese", "takeout"],
        text: "Pizza happens. The salt will make you retain water tomorrow (scale might go up), but it's just water weight. Drink extra fluids!"
    },
    {
        id: 23,
        category: "Damage Control",
        keywords: ["sugar", "candy", "chocolate", "dessert"],
        text: "Sugar spike incoming! Go for a 10-minute walk right now to help your body use that glucose instead of storing it as fat."
    },
    {
        id: 24,
        category: "Damage Control",
        keywords: ["beer", "wine", "alcohol", "party"],
        text: "Alcohol pauses fat burning because your liver prioritizes clearing the toxin. Hydrate like crazy before bed!"
    },
    {
        id: 25,
        category: "Damage Control",
        keywords: ["cheat", "treat", "heavy meal"],
        text: "Don't beat yourself up. Guilt is heavier than fat. Just make sure your NEXT meal is a healthy one."
    },

    // --- MINDSET & GENERAL JAVIER WISDOM ---
    {
        id: 26,
        category: "Mindset",
        keywords: ["morning", "routine"],
        text: "Win the morning, win the day. High-protein breakfasts prevent cravings later in the evening."
    },
    {
        id: 27,
        category: "Mindset",
        keywords: ["tired", "lazy", "skip"],
        text: "The only workout you regret is the one you didn't do. Even 10 minutes counts. Do it for Javier!"
    },
    {
        id: 28,
        category: "Mindset",
        keywords: ["scale", "weight"],
        text: "Muscle is denser than fat. You might look smaller but weigh the same. Trust the mirror and your jeans, not the scale."
    },
    {
        id: 29,
        category: "Mindset",
        keywords: ["stress", "anxiety"],
        text: "Stress releases cortisol, which makes you hold onto belly fat. Take 3 deep breaths. Javier is purring for you."
    },
    {
        id: 30,
        category: "Mindset",
        keywords: ["general", "random"],
        text: "Consistency > Intensity. It's better to work out poorly 3 times a week than perfectly once a month."
    },
    {
        id: 31,
        category: "Mindset",
        keywords: ["general", "random"],
        text: "You can't out-train a bad diet. Treat your body like a temple, not a trash can."
    },
    {
        id: 32,
        category: "Mindset",
        keywords: ["general", "random"],
        text: "Javier check-in: Have you stood up from your desk in the last hour? Sitting is the new smoking."
    },
    {
        id: 33,
        category: "Mindset",
        keywords: ["shop", "grocery"],
        text: "Never go grocery shopping while hungry. You will end up buying snacks Javier would not approve of."
    },
    // --- NUTRITION (Vegetables & Superfoods) ---
    {
        id: 34,
        category: "Nutrition",
        keywords: ["salmon", "fish", "omega"],
        text: "Salmon is loaded with Omega-3s which reduce inflammation and help brain fog. It's brain food, literal brain food."
    },
    {
        id: 35,
        category: "Nutrition",
        keywords: ["chocolate", "dark chocolate", "sweet"],
        text: "Craving chocolate? Go for 70% cocoa or higher. It has antioxidants and less sugar. A square a day keeps the cravings at bay."
    },
    {
        id: 36,
        category: "Nutrition",
        keywords: ["spicy", "chili", "pepper", "hot"],
        text: "Spicy foods contain capsaicin, which can slightly boost your metabolism and curb appetite. Javier doesn't like spicy, but you might."
    },
    {
        id: 37,
        category: "Nutrition",
        keywords: ["apple", "fruit", "fiber"],
        text: "An apple a day? Actually, yes. The pectin (fiber) in apples helps digestion and keeps you full. Eat the skin!"
    },
    {
        id: 38,
        category: "Nutrition",
        keywords: ["ginger", "stomach", "tea"],
        text: "Feeling bloated? Ginger is a natural anti-inflammatory. Add a slice to hot water to calm your stomach instantly."
    },
    {
        id: 39,
        category: "Nutrition",
        keywords: ["sweet potato", "carb", "orange"],
        text: "Sweet potatoes release energy slowly (low glycemic index), unlike white potatoes which spike your blood sugar. Swap your fries!"
    },
    {
        id: 40,
        category: "Nutrition",
        keywords: ["cinnamon", "spice", "oats"],
        text: "Sprinkle cinnamon on your coffee or oats. It helps regulate blood sugar levels, preventing that mid-morning crash."
    },
    {
        id: 41,
        category: "Nutrition",
        keywords: ["mushroom", "vitamin d", "umami"],
        text: "Mushrooms are one of the few plant sources of Vitamin D. They also add meatiness to meals without the calories."
    },
    {
        id: 42,
        category: "Nutrition",
        keywords: ["turmeric", "curry", "yellow"],
        text: "Turmeric contains curcumin, a powerful anti-inflammatory. Always eat it with black pepper to help absorption!"
    },
    {
        id: 43,
        category: "Nutrition",
        keywords: ["cucumber", "water", "snack"],
        text: "Cucumbers are 95% water. You can eat a whole cucumber for fewer calories than a few chips. Ultimate volume eating."
    },
    {
        id: 44,
        category: "Nutrition",
        keywords: ["beans", "legumes", "fiber"],
        text: "Beans are the magical fruit... mostly because they are high in fiber and protein. Rinse canned beans to reduce sodium."
    },
    {
        id: 45,
        category: "Nutrition",
        keywords: ["quinoa", "grain", "protein"],
        text: "Quinoa is a 'complete protein' (contains all amino acids), unlike rice. It's technically a seed, not a grain!"
    },
    {
        id: 46,
        category: "Nutrition",
        keywords: ["greek yogurt", "dairy", "probiotic"],
        text: "Greek yogurt has double the protein of regular yogurt. It keeps you full and feeds your gut bacteria."
    },
    {
        id: 47,
        category: "Nutrition",
        keywords: ["olive oil", "mediterranean", "fat"],
        text: "Extra Virgin Olive Oil is heart-healthy, but remember: 1 tablespoon is roughly 120 calories. Measure it, don't pour it!"
    },
    {
        id: 48,
        category: "Nutrition",
        keywords: ["flax", "chia", "seeds"],
        text: "Seeds like Chia and Flax are tiny nutritional powerhouses. Add them to smoothies for an invisible fiber boost."
    },
    {
        id: 49,
        category: "Nutrition",
        keywords: ["tomato", "sauce", "red"],
        text: "Cooked tomatoes release Lycopene, which protects your skin and heart. Marinara sauce is actually healthy (if no sugar is added)."
    },
    {
        id: 50,
        category: "Nutrition",
        keywords: ["cottage cheese", "protein", "dairy"],
        text: "The bodybuilder's secret. Cottage cheese is packed with Casein protein, which digests slowly—perfect for a pre-sleep snack."
    },
    {
        id: 51,
        category: "Nutrition",
        keywords: ["lemon", "citrus", "dressing"],
        text: "Use lemon juice instead of heavy salad dressings. It adds zing without the calories."
    },
    {
        id: 52,
        category: "Nutrition",
        keywords: ["soup", "broth", "starter"],
        text: "Start dinner with a broth-based soup. It fills up your stomach volume so you eat less of the main course."
    },
    {
        id: 53,
        category: "Nutrition",
        keywords: ["protein bar", "snack", "fake healthy"],
        text: "Check the label! Many protein bars are just candy bars with vitamins. Look for < 5g sugar."
    },
    {
        id: 54,
        category: "Nutrition",
        keywords: ["salt", "sodium", "bloat"],
        text: "Feeling puffy? You might be eating too much sodium. Use herbs and spices for flavor instead of the salt shaker."
    },
    {
        id: 55,
        category: "Nutrition",
        keywords: ["pineapple", "enzyme", "sweet"],
        text: "Pineapple contains Bromelain, an enzyme that helps digest protein. Great for dessert after a heavy meat meal."
    },
    {
        id: 56,
        category: "Nutrition",
        keywords: ["kiwi", "vitamin c", "green"],
        text: "Kiwis have more Vitamin C than oranges! They boost immunity and help collagen production."
    },
    {
        id: 57,
        category: "Nutrition",
        keywords: ["tofu", "soy", "vegan"],
        text: "Tofu is a flavor sponge. Press the water out of it before cooking so it absorbs your spices instead of staying soggy."
    },
    {
        id: 58,
        category: "Nutrition",
        keywords: ["peanut butter", "nut butter"],
        text: "Peanut butter is healthy but dangerous. 2 tablespoons is a serving, but most of us accidentally eat 5. Weigh it once to see!"
    },
    {
        id: 59,
        category: "Nutrition",
        keywords: ["white bread", "refined", "toast"],
        text: "White bread converts to sugar almost instantly. Switch to whole grain or sourdough for sustained energy."
    },
    {
        id: 60,
        category: "Nutrition",
        keywords: ["juice", "fruit juice", "sugar"],
        text: "Eat your fruit, don't drink it. Juice removes the fiber, leaving just the sugar water."
    },
    {
        id: 61,
        category: "Nutrition",
        keywords: ["pumpkin", "squash"],
        text: "Pumpkin isn't just for pie. It's incredibly low calorie and high in Vitamin A. Roast it with cinnamon!"
    },
    {
        id: 62,
        category: "Nutrition",
        keywords: ["popcorn", "movie", "snack"],
        text: "Air-popped popcorn is a whole grain! It's a high-volume snack, as long as you don't drown it in butter."
    },
    {
        id: 63,
        category: "Nutrition",
        keywords: ["lentils", "iron", "soup"],
        text: "Lentils are cheap, iron-rich, and cook fast. A staple for a reason. Javier wishes tuna was this cheap."
    },
    {
        id: 64,
        category: "Nutrition",
        keywords: ["frozen veg", "freezer", "budget"],
        text: "Frozen veggies are often *more* nutritious than fresh ones because they are frozen at peak ripeness. Stock up!"
    },

    // --- WORKOUT (Motivation & Recovery) ---
    {
        id: 65,
        category: "Workout",
        keywords: ["plank", "core", "abs"],
        text: "Planks engage your entire body, not just abs. Squeeze your glutes to protect your lower back!"
    },
    {
        id: 66,
        category: "Workout",
        keywords: ["pushup", "arms", "chest"],
        text: "Can't do a pushup? Start on your knees or against a wall. Form matters more than difficulty."
    },
    {
        id: 67,
        category: "Workout",
        keywords: ["hiit", "intense", "cardio"],
        text: "HIIT (Interval training) burns calories for hours *after* you finish. It's the efficiency hack of fitness."
    },
    {
        id: 68,
        category: "Workout",
        keywords: ["warmup", "start", "injury"],
        text: "Never skip the warmup. Cold muscles are like cold rubber bands—they snap easier. 5 mins is all you need."
    },
    {
        id: 69,
        category: "Workout",
        keywords: ["cooldown", "finish", "stretch"],
        text: "Cool down to stop blood from pooling in your legs (which causes dizziness). Walk it off for 2 mins."
    },
    {
        id: 70,
        category: "Workout",
        keywords: ["music", "playlist", "hype"],
        text: "Studies show listening to fast-paced music can increase your running speed and endurance. Pump up the volume."
    },
    {
        id: 71,
        category: "Workout",
        keywords: ["partner", "buddy", "social"],
        text: "Couples who train together, stay together. (Or at least annoy each other into being healthy). Spot your partner!"
    },
    {
        id: 72,
        category: "Workout",
        keywords: ["burpee", "hate", "full body"],
        text: "Everyone hates burpees. But they are one of the best single exercises for conditioning. Embrace the suck."
    },
    {
        id: 73,
        category: "Workout",
        keywords: ["foam roller", "massage", "recovery"],
        text: "Foam rolling hurts so good. It releases fascia tightness. Think of it as a poor man's massage."
    },
    {
        id: 74,
        category: "Workout",
        keywords: ["gym anxiety", "nervous", "scared"],
        text: "Scared of the gym? Remember: everyone is looking at themselves in the mirror, not at you."
    },
    {
        id: 75,
        category: "Workout",
        keywords: ["compound", "deadlift", "squat"],
        text: "Compound exercises (squats, deadlifts) move multiple joints. They give you the most bang for your buck."
    },
    {
        id: 76,
        category: "Workout",
        keywords: ["form", "technique", "injury"],
        text: "Drop the ego. It's better to lift lighter weights with perfect form than heavy weights with bad form."
    },
    {
        id: 77,
        category: "Workout",
        keywords: ["swimming", "pool", "joints"],
        text: "Swimming is zero-impact. If your knees hurt from running, jump in the pool. It's a full-body resistance workout."
    },
    {
        id: 78,
        category: "Workout",
        keywords: ["stairs", "climb", "everyday"],
        text: "Skip the elevator. Taking the stairs is a mini-workout that adds up over the week. Glute activation!"
    },
    {
        id: 79,
        category: "Workout",
        keywords: ["morning workout", "time"],
        text: "Working out in the morning boosts metabolism for the day. Plus, you can't make excuses later when you're tired."
    },
    {
        id: 80,
        category: "Workout",
        keywords: ["evening workout", "stress"],
        text: "Working out at night? It's a great way to de-stress from work. Just don't do it right before bed or you might not sleep."
    },
    {
        id: 81,
        category: "Workout",
        keywords: ["rope", "jump rope", "cardio"],
        text: "10 minutes of jump rope burns roughly the same calories as 30 minutes of jogging. Efficiency!"
    },
    {
        id: 82,
        category: "Workout",
        keywords: ["lunge", "legs", "balance"],
        text: "Lunges improve your balance and hip flexibility. Javier wonders why humans do this, but it works."
    },
    {
        id: 83,
        category: "Workout",
        keywords: ["active recovery", "rest day"],
        text: "Rest day doesn't mean 'couch day'. Go for a gentle walk or do some yoga to keep blood flowing."
    },
    {
        id: 84,
        category: "Workout",
        keywords: ["progression", "heavier", "track"],
        text: "Progressive Overload: Try to do a little more than last week. One more rep, or 1kg heavier. Write it down!"
    },
    {
        id: 85,
        category: "Workout",
        keywords: ["kettlebell", "swing", "hips"],
        text: "Kettlebell swings are all about the hips, not the arms. It's a posterior chain party."
    },
    {
        id: 86,
        category: "Workout",
        keywords: ["posture", "desk", "back"],
        text: "Face pulls and rows help fix 'computer guy' posture. Pull those shoulders back!"
    },
    {
        id: 87,
        category: "Workout",
        keywords: ["sweat", "intensity"],
        text: "Sweat is just fat crying. (Actually it's thermoregulation, but let's go with the fat crying thing)."
    },
    {
        id: 88,
        category: "Workout",
        keywords: ["cycle", "bike", "ride"],
        text: "Cycling builds massive quads. It's also great for exploring the city while burning calories."
    },
    {
        id: 89,
        category: "Workout",
        keywords: ["dance", "zumba", "fun"],
        text: "Dancing counts as cardio! If you hate the treadmill, put on your favorite song and move."
    },
    {
        id: 90,
        category: "Workout",
        keywords: ["plateau", "stuck", "change"],
        text: "Stopped seeing results? Your body adapted. Change your routine, tempo, or weights to shock the system."
    },
    {
        id: 91,
        category: "Workout",
        keywords: ["abs", "kitchen", "belly"],
        text: "Abs are made in the kitchen, not the gym. You can do 1000 crunches, but diet reveals them."
    },
    {
        id: 92,
        category: "Workout",
        keywords: ["grip", "strength", "forearm"],
        text: "Grip strength is correlated with longevity. Carry those heavy grocery bags in one trip!"
    },
    {
        id: 93,
        category: "Workout",
        keywords: ["breathe", "breath", "holding"],
        text: "Don't hold your breath while lifting! Exhale on the exertion (the hard part). Avoid the dizziness."
    },
    {
        id: 94,
        category: "Workout",
        keywords: ["shoes", "gear", "feet"],
        text: "Running in old shoes? That's a recipe for shin splints. Replace runners every 500-800km."
    },
    {
        id: 95,
        category: "Workout",
        keywords: ["consistency", "habit"],
        text: "Motivation gets you started. Habit keeps you going. Make it automatic."
    },

    // --- HYDRATION ---
    {
        id: 96,
        category: "Hydration",
        keywords: ["lemon water", "morning", "alkaline"],
        text: "Start the day with warm lemon water. It wakes up your digestion before you hit the coffee."
    },
    {
        id: 97,
        category: "Hydration",
        keywords: ["skin", "face", "glow"],
        text: "Want better skin? No cream works as well as drinking 2-3 liters of water a day."
    },
    {
        id: 98,
        category: "Hydration",
        keywords: ["bottle", "carry", "environment"],
        text: "Get a reusable bottle you actually like. If it's near you, you will drink from it. It's the law of proximity."
    },
    {
        id: 99,
        category: "Hydration",
        keywords: ["sparkling", "soda alternative", "fizz"],
        text: "Sparkling water counts! If you miss soda, add fruit to seltzer. The fizz tricks your brain."
    },
    {
        id: 100,
        category: "Hydration",
        keywords: ["urine", "pee", "check"],
        text: "The Pee Check: If it looks like apple juice, drink more. If it looks like lemonade, you're good."
    },
    {
        id: 101,
        category: "Hydration",
        keywords: ["coconut water", "electrolytes", "nature"],
        text: "Coconut water is nature's Gatorade. Full of potassium and electrolytes without the neon food coloring."
    },
    {
        id: 102,
        category: "Hydration",
        keywords: ["meal", "digestion", "timing"],
        text: "Drink a glass of water 30 mins *before* a meal. It prepares your stomach and helps you feel full faster."
    },
    {
        id: 103,
        category: "Hydration",
        keywords: ["headache", "pain"],
        text: "Most afternoon headaches are just dehydration in disguise. Chug a glass and wait 15 minutes."
    },
    {
        id: 104,
        category: "Hydration",
        keywords: ["straw", "hack", "volume"],
        text: "Weird psychology hack: You drink more water if you use a straw. Try it."
    },
    {
        id: 105,
        category: "Hydration",
        keywords: ["tea", "herbal", "chamomile"],
        text: "Herbal teas count towards hydration. Chamomile or peppermint are great for relaxing in the evening."
    },
    {
        id: 106,
        category: "Hydration",
        keywords: ["sweat", "salt", "summer"],
        text: "If you sweated buckets, water isn't enough. You need salt/electrolytes too, or you'll just pee the water out."
    },
    {
        id: 107,
        category: "Hydration",
        keywords: ["cold", "warm", "temp"],
        text: "Ice cold water burns a tiny few extra calories to warm up, but room temp water is easier to chug in volume."
    },
    {
        id: 108,
        category: "Hydration",
        keywords: ["flight", "travel", "plane"],
        text: "Airplanes are deserts. Drink double the water you usually do when flying to avoid jet lag bloat."
    },
    {
        id: 109,
        category: "Hydration",
        keywords: ["fiber", "bloating", "stuck"],
        text: "Eating high fiber? You MUST increase water intake, or things will get... stuck. Keep it moving."
    },

    // --- DAMAGE CONTROL (Burgers, Pizza, Sweets) ---
    {
        id: 110,
        category: "Damage Control",
        keywords: ["ice cream", "dairy", "dessert"],
        text: "Eating ice cream? Enjoy it. But maybe choose a bowl instead of eating from the tub. Portion control is key."
    },
    {
        id: 111,
        category: "Damage Control",
        keywords: ["soda", "coke", "sugar drink"],
        text: "Soda is liquid candy. Switching to Diet/Zero reduces calories to 0. It's an easy win."
    },
    {
        id: 112,
        category: "Damage Control",
        keywords: ["buffet", "all you can eat", "overeating"],
        text: "At a buffet? Fill your first plate with veggies and salad. Then go back for the heavy stuff."
    },
    {
        id: 113,
        category: "Damage Control",
        keywords: ["chips", "salty", "crisps"],
        text: "Never eat chips directly from the big bag. You will hit the bottom before you realize it. Bowl it."
    },
    {
        id: 114,
        category: "Damage Control",
        keywords: ["sauce", "ketchup", "mayo", "calories"],
        text: "Calories hide in sauces. Mayo and ranch are calorie bombs. Mustard and hot sauce are your low-cal friends."
    },
    {
        id: 115,
        category: "Damage Control",
        keywords: ["fry", "fried", "oil"],
        text: "Fried food is tasty but inflammatory. If you can, air-fry it at home. Javier likes the crunch just as much."
    },
    {
        id: 116,
        category: "Damage Control",
        keywords: ["holiday", "christmas", "thanksgiving"],
        text: "Holidays are for family, not dieting. One day of feasting won't ruin your year. Just get back on track tomorrow."
    },
    {
        id: 117,
        category: "Damage Control",
        keywords: ["movie", "popcorn", "butter"],
        text: "Cinema popcorn usually has 1000+ calories. Share a small one, or smuggle in your own healthy snacks (shh!)."
    },
    {
        id: 118,
        category: "Damage Control",
        keywords: ["late night", "midnight snack"],
        text: "Eating late? Try not to eat 2-3 hours before bed. Digestion interferes with deep sleep quality."
    },
    {
        id: 119,
        category: "Damage Control",
        keywords: ["hangover", "grease", "morning after"],
        text: "Craving a greasy breakfast after a night out? Your body wants salt and energy. Eggs and toast work better than a fry-up."
    },
    {
        id: 120,
        category: "Damage Control",
        keywords: ["stress eating", "emotional"],
        text: "Emotional hunger comes on suddenly. Physical hunger comes on gradually. Ask yourself: 'Am I hungry or sad?'"
    },
    {
        id: 121,
        category: "Damage Control",
        keywords: ["restaurant", "menu", "portion"],
        text: "Restaurant portions are huge. Ask for a box immediately and put half away *before* you start eating. Lunch for tomorrow!"
    },
    {
        id: 122,
        category: "Damage Control",
        keywords: ["bread basket", "waiter"],
        text: "The bread basket is a trap. If you're really hungry, eat one piece. If not, ask the waiter to take it away."
    },
    {
        id: 123,
        category: "Damage Control",
        keywords: ["cocktail", "margarita", "sugar"],
        text: "Cocktails are sugar bombs. clear spirits with soda water (e.g., Gin & Soda) are the lowest calorie alcohol choice."
    },
    {
        id: 124,
        category: "Damage Control",
        keywords: ["cookie", "biscuit", "one more"],
        text: "The 'Just one more' fallacy. The first cookie tastes the best. The fifth one tastes like guilt. Stop at two."
    },
    {
        id: 125,
        category: "Damage Control",
        keywords: ["office snacks", "work", "temptation"],
        text: "Office donuts? Keep them out of sight. Visual cues trigger hunger even if you're full."
    },
    {
        id: 126,
        category: "Damage Control",
        keywords: ["salad", "caesar", "trap"],
        text: "Watch out for salad traps. A Caesar salad with croutons and heavy dressing often has more calories than a burger."
    },
    {
        id: 127,
        category: "Damage Control",
        keywords: ["milkshake", "drink calories"],
        text: "Don't drink your calories. A milkshake is a dessert, not a beverage. Treat it like cake."
    },

    // --- MINDSET & GENERAL JAVIER WISDOM ---
    {
        id: 128,
        category: "Mindset",
        keywords: ["sleep", "insomnia", "tired"],
        text: "Poor sleep increases Ghrelin (hunger hormone). If you don't sleep well, you WILL overeat tomorrow."
    },
    {
        id: 129,
        category: "Mindset",
        keywords: ["blue light", "phone", "bed"],
        text: "Blue light from your phone messes with melatonin. Put the phone down 30 mins before bed. Javier demands attention anyway."
    },
    {
        id: 130,
        category: "Mindset",
        keywords: ["meditation", "calm", "mind"],
        text: "5 minutes of mindfulness reduces cortisol. Less stress = less belly fat storage."
    },
    {
        id: 131,
        category: "Mindset",
        keywords: ["progress pic", "photo", "mirror"],
        text: "Take progress photos. The scale lies, but photos don't. You'll wish you had them in 3 months."
    },
    {
        id: 132,
        category: "Mindset",
        keywords: ["clothes", "jeans", "fit"],
        text: "Best metric? How your favorite jeans fit. If they are loose, you're winning, regardless of the scale number."
    },
    {
        id: 133,
        category: "Mindset",
        keywords: ["patience", "time", "slow"],
        text: "You didn't gain it in a week, you won't lose it in a week. Trust the process."
    },
    {
        id: 134,
        category: "Mindset",
        keywords: ["all or nothing", "perfectionism"],
        text: "Don't let 'perfect' be the enemy of 'good'. A sloppy workout is infinitely better than no workout."
    },
    {
        id: 135,
        category: "Mindset",
        keywords: ["comparison", "social media", "instagram"],
        text: "Don't compare your Chapter 1 to someone else's Chapter 20. Also, remember Instagram is full of photoshop."
    },
    {
        id: 136,
        category: "Mindset",
        keywords: ["why", "reason", "goal"],
        text: "Find your 'Why'. Do you want to look good? Feel energetic? Live longer? Keep that reason close."
    },
    {
        id: 137,
        category: "Mindset",
        keywords: ["plate", "small plate", "trick"],
        text: "Use smaller plates. It tricks your brain into thinking you're eating more food. Visual psychology works."
    },
    {
        id: 138,
        category: "Mindset",
        keywords: ["chew", "slow down", "eating"],
        text: "Chew slowly. It takes 20 minutes for your stomach to tell your brain 'I'm full'. Put the fork down between bites."
    },
    {
        id: 139,
        category: "Mindset",
        keywords: ["labels", "reading", "ingredients"],
        text: "If you can't pronounce the ingredients, your body probably doesn't know what to do with them either."
    },
    {
        id: 140,
        category: "Mindset",
        keywords: ["prepping", "meal prep", "future"],
        text: "Meal prep is just being kind to your future self. Sunday prep saves Monday stress."
    },
    {
        id: 141,
        category: "Mindset",
        keywords: ["gum", "chewing gum", "craving"],
        text: "Chewing sugar-free gum can distract you from a snack craving. It keeps your mouth busy."
    },
    {
        id: 142,
        category: "Mindset",
        keywords: ["brush teeth", "night", "stop"],
        text: "Kitchen closed? Brush your teeth immediately after dinner. You won't want to ruin the minty freshness with a snack."
    },
    {
        id: 143,
        category: "Mindset",
        keywords: ["sun", "sunlight", "vit d"],
        text: "Get sunlight in the morning. It sets your circadian rhythm and improves mood. Go for a walk!"
    },
    {
        id: 144,
        category: "Mindset",
        keywords: ["posture", "stand", "confidence"],
        text: "Standing tall burns more calories and boosts confidence. Don't slouch!"
    },
    {
        id: 145,
        category: "Mindset",
        keywords: ["javier", "cat", "judge"],
        text: "Javier says: 'If it comes in a crinkly bag, I want to investigate.' But you should probably skip it."
    },
    {
        id: 146,
        category: "Mindset",
        keywords: ["protein", "macronutrient", "priority"],
        text: "Prioritize protein on your plate. It's the most satiating nutrient. Eat it first."
    },
    {
        id: 147,
        category: "Mindset",
        keywords: ["vegetables", "volume", "filler"],
        text: "Veggies are volume fillers. Half your plate should be green. It leaves less room for the calorie-dense stuff."
    },
    {
        id: 148,
        category: "Mindset",
        keywords: ["habit stacking", "routine"],
        text: "Habit Stacking: Do 10 squats every time you brush your teeth. Attach a new habit to an old one."
    },
    {
        id: 149,
        category: "Mindset",
        keywords: ["reward", "treat", "non-food"],
        text: "Reward yourself for milestones, but not with food. Buy new gear, a game, or a massage. You aren't a dog."
    },
    {
        id: 150,
        category: "Mindset",
        keywords: ["negativity", "talk", "self"],
        text: "Stop the negative self-talk. You wouldn't say 'you're fat' to your partner, so don't say it to yourself."
    },
    {
        id: 151,
        category: "Mindset",
        keywords: ["fail", "mistake", "learning"],
        text: "A 'bad' day isn't a failure, it's data. Learn what triggered it and move on."
    },
    {
        id: 152,
        category: "Mindset",
        keywords: ["kitchen", "clean", "environment"],
        text: "A messy kitchen leads to takeout. Keep your counters clean so you actually want to cook."
    },
    {
        id: 153,
        category: "Mindset",
        keywords: ["weekend", "saturday", "sunday"],
        text: "The Weekend Trap: Don't undo 5 days of hard work in 2 days of binging. Keep some structure on weekends."
    },
    {
        id: 154,
        category: "Mindset",
        keywords: ["protein shake", "supplement", "convenience"],
        text: "Supplements are just that—supplements. Real food comes first, shakes are for convenience."
    },
    {
        id: 155,
        category: "Mindset",
        keywords: ["friends", "influence", "peer pressure"],
        text: "Surround yourself with people who support your goals. If they mock your salad, that's on them."
    },
    {
        id: 156,
        category: "Mindset",
        keywords: ["steps", "tracking", "10k"],
        text: "10,000 steps is an arbitrary number, but it's a good goal. Park further away, take the long route."
    },
    {
        id: 157,
        category: "Mindset",
        keywords: ["cold shower", "recovery", "alert"],
        text: "Cold showers might help recovery and definitely wake you up. Javier hates water, but you might like the rush."
    },
    {
        id: 158,
        category: "Mindset",
        keywords: ["fasting", "intermittent", "window"],
        text: "Intermittent Fasting isn't magic, it's just a way to restrict calories. If skipping breakfast works for you, do it."
    },
    {
        id: 159,
        category: "Mindset",
        keywords: ["metabolism", "age", "myth"],
        text: "Metabolism doesn't slow down drastically until your 60s. You're just moving less. Get active!"
    },
    {
        id: 160,
        category: "Mindset",
        keywords: ["long game", "lifestyle"],
        text: "This isn't a 12-week fix. It's a lifestyle. If you can't see yourself eating this way in a year, change the plan."
    },
    // ... [Additional items can be added following this pattern to reach exactly 200]
    {
        id: 161,
        category: "Nutrition",
        keywords: ["beetroot", "blood pressure", "red"],
        text: "Beets increase nitric oxide, which improves blood flow and lowers blood pressure. Great for endurance!"
    },
    {
        id: 162,
        category: "Nutrition",
        keywords: ["sardines", "calcium", "fish"],
        text: "Sardines are a superfood powerhouse. High in calcium, omega-3, and protein. Javier's absolute favorite."
    },
    {
        id: 163,
        category: "Workout",
        keywords: ["grip", "farmers walk", "carry"],
        text: "Farmer's Walks (carrying heavy things) builds grip, traps, and core stability all at once."
    },
    {
        id: 164,
        category: "Hydration",
        keywords: ["hot water", "digestion", "morning"],
        text: "In some cultures, drinking hot water is standard. It can be soothing for the throat and gut."
    },
    {
        id: 165,
        category: "Damage Control",
        keywords: ["bbq", "barbecue", "grill"],
        text: "At a BBQ? Load up on grilled meats and veggies. Skip the creamy potato salad and sugary buns."
    },
    {
        id: 166,
        category: "Mindset",
        keywords: ["diary", "journal", "write"],
        text: "Keep a food diary for 3 days. You will be shocked at what you actually eat vs what you think you eat."
    },
    {
        id: 167,
        category: "Nutrition",
        keywords: ["kimchi", "sauerkraut", "gut health"],
        text: "Fermented foods like Kimchi are natural probiotics. A happy gut means a happy brain."
    },
    {
        id: 168,
        category: "Workout",
        keywords: ["dead hang", "spine", "decompression"],
        text: "Hanging from a bar (Dead Hang) decompresses your spine and stretches your shoulders. Feels amazing."
    },
    {
        id: 169,
        category: "Hydration",
        keywords: ["thirst", "hunger cue"],
        text: "Thirst signals can be weak. If you haven't had water in 3 hours, drink, even if you don't feel 'thirsty'."
    },
    {
        id: 170,
        category: "Mindset",
        keywords: ["boredom", "snacking", "activity"],
        text: "Are you hungry or just bored? Go do a task for 5 minutes. If the hunger vanishes, it was boredom."
    },
    {
        id: 171,
        category: "Nutrition",
        keywords: ["pomegranate", "seeds", "antioxidant"],
        text: "Pomegranates are annoying to peel but worth it. They reduce inflammation and protect arteries."
    },
    {
        id: 172,
        category: "Workout",
        keywords: ["hiking", "nature", "cardio"],
        text: "Hiking burns more calories than walking on flat ground because of the uneven terrain. Plus, fresh air!"
    },
    {
        id: 173,
        category: "Damage Control",
        keywords: ["cheese", "portions", "dairy"],
        text: "Cheese is delicious but calorie-dense. Grating it makes it look like more than slicing it."
    },
    {
        id: 174,
        category: "Mindset",
        keywords: ["playlist", "music", "mood"],
        text: "Make a 'Power Playlist' that you ONLY listen to when working out. It creates a Pavlovian response to get moving."
    },
    {
        id: 175,
        category: "Nutrition",
        keywords: ["cabbage", "cheap", "volume"],
        text: "Cabbage is incredibly cheap and filling. Sauté it, slaw it, roast it. An underrated diet weapon."
    },
    {
        id: 176,
        category: "Workout",
        keywords: ["box jump", "explosive", "power"],
        text: "Box jumps build explosive power. Land soft like a ninja (or a cat) to protect your knees."
    },
    {
        id: 177,
        category: "Damage Control",
        keywords: ["pasta", "carbs", "portion"],
        text: "Pasta isn't evil, but the portion sizes are. One serving is smaller than your fist. Add veggies to bulk it up."
    },
    {
        id: 178,
        category: "Mindset",
        keywords: ["grocery list", "planning"],
        text: "Stick to the list. If it's not on the list, it doesn't go in the cart. Impulse buys are usually junk."
    },
    {
        id: 179,
        category: "Nutrition",
        keywords: ["venison", "lean meat", "game"],
        text: "Game meats like Venison are leaner than beef and have more protein. Try something new!"
    },
    {
        id: 180,
        category: "Workout",
        keywords: ["mobility", "aging", "joints"],
        text: "Mobility training ensures you can tie your shoes when you're 80. Use it or lose it."
    },
    {
        id: 181,
        category: "Hydration",
        keywords: ["mint", "flavor", "fresh"],
        text: "Add fresh mint leaves to your water. It aids digestion and tastes like a spa day."
    },
    {
        id: 182,
        category: "Damage Control",
        keywords: ["tasting", "cooking", "calories"],
        text: "Licking the spoon counts! BLTs (Bites, Licks, Tastes) while cooking can add up to 300 calories unnoticed."
    },
    {
        id: 183,
        category: "Mindset",
        keywords: ["identity", "change", "belief"],
        text: "Shift your identity. Don't say 'I'm trying to run'. Say 'I am a runner'. It changes how you act."
    },
    {
        id: 184,
        category: "Nutrition",
        keywords: ["seaweed", "iodine", "snack"],
        text: "Seaweed snacks are low cal and provide Iodine, which is crucial for thyroid health."
    },
    {
        id: 185,
        category: "Workout",
        keywords: ["tabata", "fast", "burn"],
        text: "Tabata: 20 seconds work, 10 seconds rest. 4 minutes of hell, but amazing results."
    },
    {
        id: 186,
        category: "Damage Control",
        keywords: ["nutella", "spread", "sugar"],
        text: "Nutella is basically chocolate frosting. Treat it as a dessert, not a breakfast spread."
    },
    {
        id: 187,
        category: "Mindset",
        keywords: ["saying no", "boundaries"],
        text: "It's okay to say 'No, thank you' when someone offers food. You don't need to explain why."
    },
    {
        id: 188,
        category: "Nutrition",
        keywords: ["bone broth", "collagen", "joints"],
        text: "Bone broth is rich in collagen, which helps your joints, skin, and gut lining."
    },
    {
        id: 189,
        category: "Workout",
        keywords: ["wall sit", "isometric", "burn"],
        text: "Wall sits: The longest minute of your life. Great for knee stability and quad endurance."
    },
    {
        id: 190,
        category: "Mindset",
        keywords: ["vision board", "goals"],
        text: "Visualize your goal physique. Your brain works harder to achieve what it can clearly see."
    },
    {
        id: 191,
        category: "Nutrition",
        keywords: ["cottage cheese", "pancake", "hack"],
        text: "Mix cottage cheese with eggs and oats for high-protein pancakes. Sounds weird, tastes great."
    },
    {
        id: 192,
        category: "Workout",
        keywords: ["glutes", "desk job", "activation"],
        text: "Sitting all day puts your glutes to sleep. Squeeze them while standing to 'wake' them up."
    },
    {
        id: 193,
        category: "Hydration",
        keywords: ["infuser", "fruit water"],
        text: "Get a water bottle with an infuser. Strawberries and basil is a game-changer combo."
    },
    {
        id: 194,
        category: "Damage Control",
        keywords: ["sushi", "rice", "rolls"],
        text: "Sushi can be healthy, but tempura rolls and spicy mayo add up. Sashimi is pure protein."
    },
    {
        id: 195,
        category: "Mindset",
        keywords: ["excuses", "rain", "weather"],
        text: "It's raining? Good. The gym will be empty. Go train."
    },
    {
        id: 196,
        category: "Nutrition",
        keywords: ["miso", "soup", "probiotic"],
        text: "Miso soup is low calorie and probiotic. A perfect savory snack when you want comfort."
    },
    {
        id: 197,
        category: "Workout",
        keywords: ["bear crawl", "fun", "core"],
        text: "Bear crawls strengthen the shoulders and core. Also, you look funny doing it. Win-win."
    },
    {
        id: 198,
        category: "Mindset",
        keywords: ["grateful", "body", "positivity"],
        text: "Be grateful for what your body can do, not just what it looks like."
    },
    {
        id: 199,
        category: "Nutrition",
        keywords: ["dates", "energy", "sugar"],
        text: "Dates are nature's candy. Great pre-workout energy, but limit to 1 or 2."
    },
    {
        id: 200,
        category: "Mindset",
        keywords: ["javier", "cat", "end"],
        text: "Javier is proud of you. Keep going. Now, go fill your water bottle."
    }

];

export function getKeywordsByCategory(category: TipCategory): string[] {
    const tips = TIPS_DB.filter(t => t.category === category);
    // Flatten keywords
    const allKeywords = tips.flatMap(t => t.keywords);
    // Unique only (case insensitive handling)
    const unique = Array.from(new Set(allKeywords.map(k => k.toLowerCase())));
    return unique;
}
