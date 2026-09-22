import { mongoDB } from "./utils/db.js"
import { Product } from "./model/product.model.js"
export const product = async () => {
    try {
        await mongoDB()
        const productData = await Product.create([

            {
                "name": "Wireless Bluetooth Headphones",
                "price": 3500,
                "description": "Comfortable over-ear headphones with clear sound, deep bass, and a long-lasting battery.",
                "category": "Electronics",
                "brand": "SoundMax",
                "stock": 45,
                "rating": 4.5
            },
            {
                "name": "Mechanical Gaming Keyboard",
                "price": 6500,
                "description": "Durable mechanical keyboard with responsive keys, RGB lighting, and USB connectivity.",
                "category": "Electronics",
                "brand": "KeyPro",
                "stock": 25,
                "rating": 4.7
            },
            {
                "name": "Wireless Optical Mouse",
                "price": 1800,
                "description": "Ergonomic wireless mouse with adjustable sensitivity and a compact design.",
                "category": "Electronics",
                "brand": "ClickTech",
                "stock": 60,
                "rating": 4.3
            },
            {
                "name": "USB-C Fast Charger",
                "price": 2200,
                "description": "Compact USB-C wall charger designed for fast charging compatible phones and tablets.",
                "category": "Electronics",
                "brand": "VoltPlus",
                "stock": 80,
                "rating": 4.4
            },
            {
                "name": "Portable Bluetooth Speaker",
                "price": 4200,
                "description": "Portable speaker with rich sound, wireless connectivity, and a rechargeable battery.",
                "category": "Electronics",
                "brand": "SoundMax",
                "stock": 32,
                "rating": 4.6
            },
            {
                "name": "1080p Webcam",
                "price": 4800,
                "description": "Full HD webcam with a built-in microphone for online meetings, classes, and streaming.",
                "category": "Electronics",
                "brand": "ViewPro",
                "stock": 20,
                "rating": 4.2
            },
            {
                "name": "20,000mAh Power Bank",
                "price": 3800,
                "description": "High-capacity portable power bank with multiple charging ports and battery indicators.",
                "category": "Electronics",
                "brand": "VoltPlus",
                "stock": 50,
                "rating": 4.5
            },
            {
                "name": "Smart Fitness Watch",
                "price": 7500,
                "description": "Smartwatch with activity tracking, notifications, customizable watch faces, and sleep tracking.",
                "category": "Electronics",
                "brand": "FitTrack",
                "stock": 18,
                "rating": 4.1
            },
            {
                "name": "USB-C Hub 7-in-1",
                "price": 5200,
                "description": "Multiport USB-C hub with USB ports, HDMI, SD card reader, and power pass-through.",
                "category": "Electronics",
                "brand": "ConnectPro",
                "stock": 22,
                "rating": 4.6
            },
            {
                "name": "Laptop Cooling Pad",
                "price": 2800,
                "description": "Laptop cooling stand with built-in fans and adjustable positioning for comfortable use.",
                "category": "Electronics",
                "brand": "CoolTech",
                "stock": 35,
                "rating": 4.0
            },
            {
                "name": "Men's Casual Cotton T-Shirt",
                "price": 950,
                "description": "Soft breathable cotton T-shirt suitable for everyday wear and casual outings.",
                "category": "Clothing",
                "brand": "UrbanWear",
                "stock": 100,
                "rating": 4.3
            },
            {
                "name": "Women's Oversized Hoodie",
                "price": 2400,
                "description": "Relaxed-fit hoodie made with a soft fabric blend, featuring a front pocket and adjustable hood.",
                "category": "Clothing",
                "brand": "CozyStyle",
                "stock": 40,
                "rating": 4.6
            },
            {
                "name": "Classic Denim Jeans",
                "price": 2800,
                "description": "Everyday denim jeans with a classic fit, durable stitching, and practical pockets.",
                "category": "Clothing",
                "brand": "UrbanWear",
                "stock": 55,
                "rating": 4.4
            },
            {
                "name": "Lightweight Running Jacket",
                "price": 3200,
                "description": "Lightweight sports jacket with a zip front and breathable fabric for outdoor activities.",
                "category": "Clothing",
                "brand": "ActiveWay",
                "stock": 28,
                "rating": 4.2
            },
            {
                "name": "Women's Floral Summer Dress",
                "price": 2600,
                "description": "Light and comfortable floral dress designed for warm weather and casual occasions.",
                "category": "Clothing",
                "brand": "BloomWear",
                "stock": 30,
                "rating": 4.5
            },
            {
                "name": "Men's Formal Shirt",
                "price": 1900,
                "description": "Smart long-sleeve formal shirt suitable for office wear, meetings, and special occasions.",
                "category": "Clothing",
                "brand": "ClassicFit",
                "stock": 48,
                "rating": 4.1
            },
            {
                "name": "Unisex Cotton Sweatpants",
                "price": 1800,
                "description": "Comfortable cotton-blend sweatpants with an elastic waistband and adjustable drawstring.",
                "category": "Clothing",
                "brand": "CozyStyle",
                "stock": 42,
                "rating": 4.3
            },
            {
                "name": "Waterproof Hiking Jacket",
                "price": 5800,
                "description": "Outdoor jacket with a water-resistant shell, adjustable cuffs, and practical storage pockets.",
                "category": "Clothing",
                "brand": "TrailGear",
                "stock": 16,
                "rating": 4.7
            },
            {
                "name": "Classic Baseball Cap",
                "price": 750,
                "description": "Adjustable baseball cap with a curved brim for everyday casual styling.",
                "category": "Clothing",
                "brand": "UrbanWear",
                "stock": 75,
                "rating": 4.0
            },
            {
                "name": "Unisex Wool Scarf",
                "price": 1200,
                "description": "Soft knitted scarf designed to provide warmth and complement winter outfits.",
                "category": "Clothing",
                "brand": "CozyStyle",
                "stock": 38,
                "rating": 4.4
            },
            {
                "name": "Stainless Steel Water Bottle",
                "price": 1400,
                "description": "Reusable stainless steel bottle designed to keep drinks at a comfortable temperature.",
                "category": "Home & Kitchen",
                "brand": "DailyHome",
                "stock": 65,
                "rating": 4.5
            },
            {
                "name": "Ceramic Coffee Mug Set",
                "price": 1600,
                "description": "Set of four ceramic mugs suitable for serving coffee, tea, and other hot beverages.",
                "category": "Home & Kitchen",
                "brand": "ClayNest",
                "stock": 34,
                "rating": 4.4
            },
            {
                "name": "Non-Stick Frying Pan",
                "price": 2400,
                "description": "Everyday frying pan with a non-stick cooking surface and a heat-resistant handle.",
                "category": "Home & Kitchen",
                "brand": "CookEase",
                "stock": 26,
                "rating": 4.2
            },
            {
                "name": "Electric Kettle 1.8L",
                "price": 3200,
                "description": "Electric kettle with automatic shut-off and a large capacity for everyday hot water needs.",
                "category": "Home & Kitchen",
                "brand": "HeatWave",
                "stock": 20,
                "rating": 4.6
            },
            {
                "name": "Digital Kitchen Scale",
                "price": 1500,
                "description": "Compact digital scale for measuring cooking ingredients with an easy-to-read display.",
                "category": "Home & Kitchen",
                "brand": "CookEase",
                "stock": 31,
                "rating": 4.3
            },
            {
                "name": "LED Desk Lamp",
                "price": 2100,
                "description": "Adjustable LED desk lamp with multiple brightness settings for reading and working.",
                "category": "Home & Kitchen",
                "brand": "BrightNest",
                "stock": 29,
                "rating": 4.5
            },
            {
                "name": "Cotton Bedsheet Set",
                "price": 3500,
                "description": "Soft cotton bedsheet set with matching pillow covers for everyday bedroom comfort.",
                "category": "Home & Kitchen",
                "brand": "SleepWell",
                "stock": 24,
                "rating": 4.4
            },
            {
                "name": "Decorative Table Clock",
                "price": 1300,
                "description": "Minimalist tabletop clock with a clear display and a design suitable for home or office.",
                "category": "Home & Kitchen",
                "brand": "BrightNest",
                "stock": 33,
                "rating": 4.1
            },
            {
                "name": "Storage Organizer Box Set",
                "price": 1800,
                "description": "Set of stackable storage boxes for organizing clothes, accessories, and household items.",
                "category": "Home & Kitchen",
                "brand": "DailyHome",
                "stock": 44,
                "rating": 4.2
            },
            {
                "name": "Reusable Food Container Set",
                "price": 1700,
                "description": "Reusable food storage containers with secure lids for organizing meals and leftovers.",
                "category": "Home & Kitchen",
                "brand": "CookEase",
                "stock": 50,
                "rating": 4.3
            },
            {
                "name": "Yoga Mat",
                "price": 1800,
                "description": "Cushioned exercise mat with a textured surface for yoga, stretching, and home workouts.",
                "category": "Sports & Fitness",
                "brand": "ActiveWay",
                "stock": 40,
                "rating": 4.5
            },
            {
                "name": "Adjustable Dumbbell Pair",
                "price": 6500,
                "description": "Adjustable dumbbell set designed for strength training and home fitness routines.",
                "category": "Sports & Fitness",
                "brand": "PowerFit",
                "stock": 12,
                "rating": 4.6
            },
            {
                "name": "Resistance Band Set",
                "price": 1200,
                "description": "Set of resistance bands with different resistance levels for stretching and strength exercises.",
                "category": "Sports & Fitness",
                "brand": "PowerFit",
                "stock": 55,
                "rating": 4.3
            },
            {
                "name": "Professional Football",
                "price": 2200,
                "description": "Durable football designed for recreational matches, practice sessions, and outdoor play.",
                "category": "Sports & Fitness",
                "brand": "GoalPro",
                "stock": 27,
                "rating": 4.4
            },
            {
                "name": "Badminton Racket Set",
                "price": 2800,
                "description": "Pair of lightweight badminton rackets with shuttlecocks for recreational games.",
                "category": "Sports & Fitness",
                "brand": "SmashPro",
                "stock": 22,
                "rating": 4.2
            },
            {
                "name": "Hiking Backpack 35L",
                "price": 4800,
                "description": "Outdoor backpack with multiple compartments, adjustable straps, and space for hiking essentials.",
                "category": "Sports & Fitness",
                "brand": "TrailGear",
                "stock": 15,
                "rating": 4.7
            },
            {
                "name": "Stainless Steel Jump Rope",
                "price": 900,
                "description": "Adjustable jump rope with comfortable handles for cardio workouts and fitness training.",
                "category": "Sports & Fitness",
                "brand": "PowerFit",
                "stock": 48,
                "rating": 4.1
            },
            {
                "name": "Cycling Gloves",
                "price": 1400,
                "description": "Padded cycling gloves with a breathable design for improved comfort during bike rides.",
                "category": "Sports & Fitness",
                "brand": "TrailGear",
                "stock": 36,
                "rating": 4.3
            },
            {
                "name": "Insulated Sports Shaker",
                "price": 1100,
                "description": "Reusable shaker bottle with a secure lid for mixing drinks before or after exercise.",
                "category": "Sports & Fitness",
                "brand": "FitTrack",
                "stock": 42,
                "rating": 4.0
            },
            {
                "name": "Running Waist Belt",
                "price": 1000,
                "description": "Lightweight adjustable waist belt for carrying small essentials during running and walking.",
                "category": "Sports & Fitness",
                "brand": "ActiveWay",
                "stock": 39,
                "rating": 4.2
            },
            {
                "name": "Classic Leather Wallet",
                "price": 1600,
                "description": "Compact wallet with multiple card slots and compartments for everyday essentials.",
                "category": "Accessories",
                "brand": "CarryCraft",
                "stock": 45,
                "rating": 4.4
            },
            {
                "name": "Polarized Sunglasses",
                "price": 2400,
                "description": "Stylish sunglasses with polarized lenses designed to reduce glare in bright conditions.",
                "category": "Accessories",
                "brand": "SunStyle",
                "stock": 30,
                "rating": 4.5
            },
            {
                "name": "Minimalist Wristwatch",
                "price": 4200,
                "description": "Classic analog wristwatch with a clean dial and an adjustable everyday strap.",
                "category": "Accessories",
                "brand": "TimeCraft",
                "stock": 19,
                "rating": 4.3
            },
            {
                "name": "Canvas Travel Backpack",
                "price": 3200,
                "description": "Versatile canvas backpack with padded shoulder straps and multiple storage compartments.",
                "category": "Accessories",
                "brand": "CarryCraft",
                "stock": 26,
                "rating": 4.6
            },
            {
                "name": "Stainless Steel Keychain",
                "price": 450,
                "description": "Simple durable keychain with a polished finish for organizing everyday keys.",
                "category": "Accessories",
                "brand": "CarryCraft",
                "stock": 90,
                "rating": 4.0
            },
            {
                "name": "Leather Card Holder",
                "price": 950,
                "description": "Slim card holder with several slots for carrying essential cards in a compact format.",
                "category": "Accessories",
                "brand": "CarryCraft",
                "stock": 52,
                "rating": 4.2
            },
            {
                "name": "Travel Neck Pillow",
                "price": 1300,
                "description": "Soft supportive neck pillow designed for added comfort during long journeys.",
                "category": "Accessories",
                "brand": "TravelEase",
                "stock": 37,
                "rating": 4.3
            },
            {
                "name": "Compact Travel Umbrella",
                "price": 1200,
                "description": "Foldable umbrella with a compact design for carrying in a backpack or handbag.",
                "category": "Accessories",
                "brand": "TravelEase",
                "stock": 41,
                "rating": 4.1
            }
        ])

        console.log("Product Add successfully")
        process.exit(0)
       

    } catch (error) {
        console.error("Product seeding failed:", error.message);
        process.exit(1)
    }
}

product()