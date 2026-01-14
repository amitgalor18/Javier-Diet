export type Tip = {
    id: number;
    category: "Nutrition" | "Workout" | "Hydration" | "Mindset" | "Damage Control";
    keywords: string[];
    text: string;
};

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
    }
];