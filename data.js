/* Shared data and small helpers for Spring Table (used by index.html and info.html) */

var principles = [
  ["Eat real fibre, not powder", "Isolated fibre supplements can't replicate the hundreds of fibre types whole food provides."],
  ["Build every plate around whole plants", "Vegetables, whole grains, fruit, nuts, seeds, fermented foods at the centre of the plate."],
  ["Beans and lentils, most days", "Four or five times a week, for the gut bacteria that produce butyrate."],
  ["Whole grains over refined", "Sourdough/seeded bread and quinoa/bulgur over white bread and white rice."],
  ["A vegetable starter, every meal", "Raw veg and hummus, or sautéed greens, before the main dish."],
  ["Diverse seeds and nuts", "A mixed jar to sprinkle over meals."],
  ["Snack on whole foods", "Nuts and seeds instead of packets."],
  ["Chew properly", "Foods that take effort to eat slow you down."],
  ["Aim for 30+ plants a week", "Herbs, spices, beans, grains, nuts, seeds, fruit, veg all count."],
  ["Cook with intent", "Treat each meal as an active choice, not just refuelling."],
  ["Real food at real mealtimes", "Eat when hungry, not constant grazing."],
  ["Stay out of the packaged aisle", "Ultra-processed food displaces fibre and empties fast."]
];

var stats = [
  { num: "30g+", label: "fibre minimum daily" },
  { num: "55g", label: "protective target" },
  { num: "4–5×", label: "beans/lentils per week" },
  { num: "30+", label: "different plants per week" }
];

var seasons = ["Spring", "Summer", "Autumn", "Winter"];

var seasonalProduce = {
  Spring: {
    Vegetables: ["asparagus", "broad beans", "peas", "spring onions", "silverbeet", "spinach", "new potatoes", "radishes", "lettuce", "rocket", "broccoli"],
    Fruit: ["late navel oranges", "tangelos", "rhubarb", "first strawberries (late Nov)"],
    Herbs: ["mint", "chives", "parsley", "dill"]
  },
  Summer: {
    Vegetables: ["courgette", "tomatoes", "corn", "green beans", "cucumber", "capsicum", "beetroot", "lettuce"],
    Fruit: ["strawberries", "cherries", "apricots", "peaches", "nectarines", "blueberries", "watermelon", "plums"],
    Herbs: ["basil", "coriander", "mint"]
  },
  Autumn: {
    Vegetables: ["pumpkin", "kumara", "silverbeet", "leeks", "cauliflower", "brussels sprouts", "mushrooms", "celery"],
    Fruit: ["apples", "pears", "feijoas", "persimmons", "grapes", "quince"],
    Herbs: ["sage", "thyme", "rosemary"]
  },
  Winter: {
    Vegetables: ["broccoli", "cabbage", "cauliflower", "kale", "leeks", "swede", "parsnip", "carrots", "silverbeet"],
    Fruit: ["oranges", "mandarins", "lemons", "grapefruit", "tamarillos"],
    Herbs: ["rosemary", "thyme", "bay"]
  }
};

var categories = ["Beans & lentils", "Grain bowls", "Soups", "Fish & eggs", "Vegetable starters", "Snacks", "Pasta & one-pot", "Roasts & traybakes", "Salads"];

var recipes = [
  { cat: "Beans & lentils", season: "Winter", title: "Red lentil & silverbeet dahl", desc: "A quick spiced dahl loaded with silverbeet.",
    ingredients: ["1 cup red lentils, rinsed", "1 onion, diced", "2 cloves garlic, crushed", "1 tbsp curry powder", "1 bunch silverbeet, shredded", "400ml coconut milk"],
    steps: ["Sauté onion and garlic until soft.", "Add curry powder, lentils, coconut milk and 2 cups water; simmer 20 minutes.", "Stir through silverbeet until wilted.", "Serve with rice or flatbread."] },
  { cat: "Beans & lentils", season: "Spring", title: "White bean & broad bean stew", desc: "A light spring stew of two beans and fresh herbs.",
    ingredients: ["2 cans white beans, drained", "1 cup broad beans, podded", "1 leek, sliced", "2 cups vegetable stock", "1 tbsp olive oil", "handful parsley, chopped"],
    steps: ["Soften leek in olive oil.", "Add stock and white beans; simmer 10 minutes.", "Stir in broad beans for the final 3 minutes.", "Finish with parsley and a squeeze of lemon."] },
  { cat: "Beans & lentils", season: "Summer", title: "Black bean & sweetcorn tacos", desc: "Smoky black beans and charred corn in soft tacos.",
    ingredients: ["2 cans black beans, drained", "2 corn cobs, kernels cut off", "1 tsp smoked paprika", "8 small tortillas", "1 avocado, sliced", "lime wedges"],
    steps: ["Char corn kernels in a hot dry pan.", "Add black beans and paprika; warm through.", "Warm tortillas and fill with the bean mix.", "Top with avocado and a squeeze of lime."] },
  { cat: "Beans & lentils", season: "Spring", title: "Chickpea & spinach curry", desc: "A fast midweek curry built on pantry chickpeas.",
    ingredients: ["2 cans chickpeas, drained", "1 onion, diced", "2 tbsp curry paste", "400g tin tomatoes", "200g spinach", "1 cup rice, cooked"],
    steps: ["Fry onion until soft, then stir in curry paste.", "Add tomatoes and chickpeas; simmer 15 minutes.", "Stir through spinach until wilted.", "Serve over rice."] },
  { cat: "Beans & lentils", season: "Autumn", title: "Puy lentil & mushroom ragù", desc: "An earthy lentil ragù for pasta or mash.",
    ingredients: ["1 cup puy lentils", "300g mushrooms, sliced", "1 onion, diced", "2 cloves garlic", "400g tin tomatoes", "1 tsp thyme"],
    steps: ["Cook lentils in water until just tender; drain.", "Fry onion, garlic and mushrooms until golden.", "Add tomatoes, thyme and lentils; simmer 15 minutes.", "Serve over pasta or mashed potato."] },
  { cat: "Beans & lentils", season: "Summer", title: "Butter bean & tomato bake", desc: "A one-dish bake of butter beans in a rich tomato sauce.",
    ingredients: ["2 cans butter beans, drained", "400g tin tomatoes", "1 onion, sliced", "2 cloves garlic", "1 tsp oregano", "feta, crumbled"],
    steps: ["Combine beans, tomatoes, onion, garlic and oregano in a baking dish.", "Bake at 200°C for 30 minutes.", "Scatter feta over the top before serving.", "Serve with crusty bread."] },
  { cat: "Beans & lentils", season: "Any", title: "Three-bean chilli", desc: "A hearty chilli that works from any pantry shelf.",
    ingredients: ["1 can kidney beans, drained", "1 can black beans, drained", "1 can cannellini beans, drained", "1 onion, diced", "2 tbsp chilli powder", "400g tin tomatoes", "1 capsicum, diced"],
    steps: ["Fry onion and capsicum until soft.", "Stir in chilli powder, tomatoes and beans.", "Simmer 20 minutes, stirring occasionally.", "Serve with rice or in a wrap."] },
  { cat: "Beans & lentils", season: "Summer", title: "Moroccan chickpea & apricot stew", desc: "A warmly spiced stew balancing chickpeas and dried apricot.",
    ingredients: ["2 cans chickpeas, drained", "1/2 cup dried apricots, chopped", "1 onion, diced", "1 tbsp ras el hanout", "400g tin tomatoes", "handful coriander"],
    steps: ["Fry onion until soft, then add ras el hanout.", "Add tomatoes, chickpeas and apricots; simmer 20 minutes.", "Adjust seasoning to taste.", "Finish with coriander."] },

  { cat: "Grain bowls", season: "Spring", title: "Quinoa spring bowl", desc: "Quinoa topped with the first spring vegetables.",
    ingredients: ["1 cup quinoa, cooked", "1 cup asparagus, blanched", "1/2 cup peas", "radishes, sliced", "2 tbsp olive oil", "lemon juice"],
    steps: ["Arrange quinoa in a bowl.", "Top with asparagus, peas and radish.", "Dress with olive oil and lemon juice.", "Season and serve."] },
  { cat: "Grain bowls", season: "Summer", title: "Bulgur tabbouleh with white beans", desc: "A herb-heavy tabbouleh bulked out with white beans.",
    ingredients: ["1 cup bulgur, soaked", "1 can white beans, drained", "2 tomatoes, diced", "large bunch parsley, chopped", "lemon juice", "2 tbsp olive oil"],
    steps: ["Fluff soaked bulgur with a fork.", "Fold through beans, tomato and parsley.", "Dress with lemon juice and olive oil.", "Chill briefly before serving."] },
  { cat: "Grain bowls", season: "Autumn", title: "Farro & roast pumpkin bowl", desc: "Nutty farro with sweet roasted pumpkin.",
    ingredients: ["1 cup farro, cooked", "2 cups pumpkin, cubed", "1 tbsp olive oil", "handful walnuts", "feta, crumbled", "rocket"],
    steps: ["Roast pumpkin with olive oil at 200°C for 25 minutes.", "Combine farro and rocket in a bowl.", "Top with roast pumpkin, walnuts and feta.", "Season to taste."] },
  { cat: "Grain bowls", season: "Winter", title: "Buckwheat & roasted veg bowl", desc: "Roasted winter roots over hearty buckwheat.",
    ingredients: ["1 cup buckwheat, cooked", "2 cups carrot and swede, cubed", "1 tbsp olive oil", "handful pumpkin seeds", "tahini", "lemon juice"],
    steps: ["Roast carrot and swede with olive oil at 200°C for 30 minutes.", "Spoon buckwheat into bowls.", "Top with roast vegetables and pumpkin seeds.", "Drizzle with tahini loosened with lemon juice."] },
  { cat: "Grain bowls", season: "Summer", title: "Brown rice & edamame bowl", desc: "A simple sesame bowl built for hot evenings.",
    ingredients: ["1 cup brown rice, cooked", "1 cup edamame, podded", "1 carrot, grated", "1 tbsp sesame oil", "soy sauce", "sesame seeds"],
    steps: ["Spoon rice into bowls.", "Top with edamame and grated carrot.", "Dress with sesame oil and soy sauce.", "Scatter with sesame seeds."] },
  { cat: "Grain bowls", season: "Winter", title: "Freekeh & roasted cauliflower bowl", desc: "Smoky roasted cauliflower over chewy freekeh.",
    ingredients: ["1 cup freekeh, cooked", "1/2 cauliflower, cut into florets", "1 tsp cumin", "2 tbsp olive oil", "yoghurt", "mint"],
    steps: ["Toss cauliflower with cumin and oil; roast at 220°C for 20 minutes.", "Spoon freekeh into bowls.", "Top with roasted cauliflower.", "Finish with yoghurt and mint."] },

  { cat: "Soups", season: "Any", title: "Minestrone with borlotti beans", desc: "A classic vegetable soup thickened with borlotti beans.",
    ingredients: ["1 can borlotti beans, drained", "1 onion, diced", "2 carrots, diced", "2 celery stalks, diced", "400g tin tomatoes", "1 cup small pasta"],
    steps: ["Sauté onion, carrot and celery until soft.", "Add tomatoes, beans and 1L water; simmer 15 minutes.", "Add pasta and cook until tender.", "Season and serve."] },
  { cat: "Soups", season: "Spring", title: "Spring pea & mint soup", desc: "A bright, quick soup for the first warm weeks.",
    ingredients: ["3 cups peas, fresh or frozen", "1 onion, diced", "2 cups vegetable stock", "handful mint leaves", "1 tbsp olive oil", "yoghurt to serve"],
    steps: ["Soften onion in olive oil.", "Add stock and peas; simmer 5 minutes.", "Blend with mint until smooth.", "Serve with a swirl of yoghurt."] },
  { cat: "Soups", season: "Winter", title: "Red lentil & carrot soup", desc: "A warming, simple soup for cold nights.",
    ingredients: ["1 cup red lentils", "3 carrots, chopped", "1 onion, diced", "1 tsp cumin", "1L vegetable stock", "lemon juice"],
    steps: ["Sauté onion and cumin until fragrant.", "Add carrots, lentils and stock; simmer 20 minutes.", "Blend until smooth.", "Finish with a squeeze of lemon."] },
  { cat: "Soups", season: "Autumn", title: "Kumara & coconut soup", desc: "A silky soup pairing kumara with coconut milk.",
    ingredients: ["3 kumara, peeled and chopped", "1 onion, diced", "1 tbsp curry powder", "400ml coconut milk", "2 cups vegetable stock", "coriander"],
    steps: ["Sauté onion and curry powder until fragrant.", "Add kumara, coconut milk and stock; simmer 20 minutes.", "Blend until smooth.", "Top with coriander."] },
  { cat: "Soups", season: "Winter", title: "Silverbeet & white bean soup", desc: "A simple green soup built on white beans.",
    ingredients: ["2 cans white beans, drained", "1 bunch silverbeet, shredded", "1 onion, diced", "2 cloves garlic", "1L vegetable stock", "parmesan"],
    steps: ["Sauté onion and garlic until soft.", "Add stock and beans; simmer 10 minutes, then partly mash.", "Stir through silverbeet until wilted.", "Serve with grated parmesan."] },
  { cat: "Soups", season: "Summer", title: "Tomato & butter bean soup", desc: "A rich tomato soup made hearty with butter beans.",
    ingredients: ["800g tin tomatoes", "1 can butter beans, drained", "1 onion, diced", "2 cloves garlic", "1 tsp oregano", "basil to serve"],
    steps: ["Sauté onion and garlic until soft.", "Add tomatoes, beans and oregano; simmer 15 minutes.", "Blend partially for texture.", "Top with torn basil."] },

  { cat: "Fish & eggs", season: "Any", title: "Baked fish, sautéed greens, lentils", desc: "A simple protein-and-fibre plate for any night.",
    ingredients: ["2 fish fillets", "1 cup lentils, cooked", "2 cups greens, shredded", "1 tbsp olive oil", "lemon", "garlic"],
    steps: ["Bake fish at 200°C for 12 minutes.", "Sauté greens and garlic in olive oil.", "Warm the lentils through.", "Plate together with a squeeze of lemon."] },
  { cat: "Fish & eggs", season: "Any", title: "Veg-loaded frittata", desc: "A flexible frittata for using up whatever vegetables are on hand.",
    ingredients: ["6 eggs", "2 cups mixed vegetables, chopped", "1 onion, diced", "1/4 cup milk", "feta, crumbled", "herbs"],
    steps: ["Sauté onion and vegetables until soft.", "Whisk eggs with milk and pour over the vegetables.", "Cook gently until mostly set, then scatter feta.", "Finish under the grill until set."] },
  { cat: "Fish & eggs", season: "Winter", title: "Salmon, broccoli & farro tray", desc: "A tray bake pairing salmon with winter broccoli.",
    ingredients: ["2 salmon fillets", "2 cups broccoli florets", "1 cup farro, cooked", "1 tbsp olive oil", "lemon", "garlic"],
    steps: ["Toss broccoli with oil and garlic on a tray.", "Roast at 200°C for 10 minutes, then add salmon.", "Roast a further 10 minutes until cooked through.", "Serve over farro with lemon."] },
  { cat: "Fish & eggs", season: "Summer", title: "Shakshuka with chickpeas", desc: "Eggs poached in a spiced tomato sauce with chickpeas.",
    ingredients: ["6 eggs", "1 can chickpeas, drained", "800g tin tomatoes", "1 onion, diced", "1 tsp cumin", "1 tsp paprika"],
    steps: ["Sauté onion with cumin and paprika.", "Add tomatoes and chickpeas; simmer 10 minutes.", "Make wells and crack in the eggs.", "Cover and cook until eggs are just set."] },
  { cat: "Fish & eggs", season: "Spring", title: "Tuna, white bean & rocket salad", desc: "A quick pantry salad with fresh spring rocket.",
    ingredients: ["2 cans tuna, drained", "1 can white beans, drained", "2 cups rocket", "1/2 red onion, sliced thin", "olive oil", "lemon juice"],
    steps: ["Combine tuna, beans, onion and rocket in a bowl.", "Dress with olive oil and lemon juice.", "Toss gently to combine.", "Season and serve."] },
  { cat: "Fish & eggs", season: "Any", title: "Miso-baked fish with brown rice & greens", desc: "A savoury miso glaze on baked fish, served with rice.",
    ingredients: ["2 fish fillets", "2 tbsp miso paste", "1 tbsp honey", "1 cup brown rice, cooked", "2 cups greens, steamed", "sesame seeds"],
    steps: ["Mix miso and honey and spread over fish.", "Bake at 200°C for 12 minutes.", "Steam the greens until just tender.", "Serve fish over rice and greens, scattered with sesame seeds."] },

  { cat: "Vegetable starters", season: "Any", title: "Raw veg + hummus plate", desc: "The simplest possible plant-forward starter.",
    ingredients: ["hummus", "carrot sticks", "cucumber sticks", "capsicum strips", "snap peas", "olive oil"],
    steps: ["Spread hummus over a plate.", "Arrange raw vegetables around it.", "Drizzle with olive oil.", "Serve immediately."] },
  { cat: "Vegetable starters", season: "Winter", title: "Olive-oil sautéed greens", desc: "A fast, simple way to get greens onto the plate.",
    ingredients: ["2 bunches seasonal greens", "2 cloves garlic, sliced", "2 tbsp olive oil", "chilli flakes", "lemon juice"],
    steps: ["Warm olive oil and garlic in a pan.", "Add greens and cook until wilted.", "Season with chilli flakes.", "Finish with lemon juice."] },
  { cat: "Vegetable starters", season: "Spring", title: "Roasted asparagus with lemon", desc: "A five-minute spring classic.",
    ingredients: ["1 bunch asparagus", "1 tbsp olive oil", "1 lemon", "parmesan shavings", "black pepper"],
    steps: ["Toss asparagus with olive oil.", "Roast at 220°C for 8 minutes.", "Squeeze lemon over the top.", "Finish with parmesan shavings."] },
  { cat: "Vegetable starters", season: "Winter", title: "Charred broccoli with tahini", desc: "Blackened broccoli against a creamy tahini sauce.",
    ingredients: ["1 head broccoli, cut into florets", "2 tbsp olive oil", "2 tbsp tahini", "lemon juice", "garlic", "sesame seeds"],
    steps: ["Char broccoli in a hot dry pan or under the grill.", "Whisk tahini with lemon juice, garlic and water.", "Spoon sauce over the broccoli.", "Scatter with sesame seeds."] },
  { cat: "Vegetable starters", season: "Autumn", title: "Beetroot & walnut small plate", desc: "An earthy small plate for the start of a meal.",
    ingredients: ["3 beetroot, roasted and sliced", "handful walnuts, toasted", "soft cheese", "olive oil", "balsamic vinegar"],
    steps: ["Arrange beetroot slices on a plate.", "Scatter with walnuts and soft cheese.", "Drizzle with olive oil and balsamic.", "Serve at room temperature."] },

  { cat: "Snacks", season: "Any", title: "Seed and nut mix jar", desc: "A jar of mixed seeds and nuts to sprinkle or snack on.",
    ingredients: ["pumpkin seeds", "sunflower seeds", "almonds", "walnuts", "dried cranberries"],
    steps: ["Combine all ingredients in a jar.", "Shake to mix.", "Store in a cool, dry place.", "Sprinkle over meals or eat by the handful."] },
  { cat: "Snacks", season: "Any", title: "Roasted chickpeas", desc: "A crunchy, salty snack straight from a tin of chickpeas.",
    ingredients: ["2 cans chickpeas, drained and dried", "2 tbsp olive oil", "1 tsp paprika", "salt"],
    steps: ["Toss chickpeas with oil, paprika and salt.", "Spread on a tray.", "Roast at 200°C for 30 minutes, shaking halfway.", "Cool before serving."] },
  { cat: "Snacks", season: "Autumn", title: "Apple & seed butter plate", desc: "A simple sliced-apple snack with seed butter.",
    ingredients: ["2 apples, sliced", "2 tbsp seed butter", "cinnamon", "pumpkin seeds"],
    steps: ["Arrange apple slices on a plate.", "Spoon seed butter alongside for dipping.", "Dust with cinnamon.", "Scatter with pumpkin seeds."] },
  { cat: "Snacks", season: "Any", title: "Hummus & veg sticks", desc: "A grab-and-go plant snack.",
    ingredients: ["hummus", "carrot sticks", "celery sticks", "cucumber sticks"],
    steps: ["Spoon hummus into a small container.", "Cut vegetables into sticks.", "Pack together.", "Eat within the day."] },
  { cat: "Snacks", season: "Any", title: "Homemade seed & oat bars", desc: "Nut-free bars that travel well, including in a school bag.",
    ingredients: ["2 cups rolled oats", "1/2 cup mixed seeds", "1/3 cup honey", "1/4 cup melted butter", "pinch salt"],
    steps: ["Mix oats, seeds and salt in a bowl.", "Stir through melted honey and butter.", "Press into a lined tin.", "Bake at 160°C for 20 minutes, then cool and cut into bars."] },

  { cat: "Pasta & one-pot", season: "Winter", title: "Wholegrain pasta with white beans & greens", desc: "A store-cupboard pasta dressed up with greens.",
    ingredients: ["300g wholegrain pasta", "1 can white beans, drained", "2 cups greens, shredded", "2 cloves garlic", "olive oil", "parmesan"],
    steps: ["Cook pasta according to packet instructions.", "Sauté garlic and greens in olive oil.", "Toss through pasta and beans, with a splash of pasta water.", "Finish with parmesan."] },
  { cat: "Pasta & one-pot", season: "Any", title: "Lentil bolognese", desc: "A meat-free bolognese built on green lentils.",
    ingredients: ["1 cup green lentils, cooked", "1 onion, diced", "2 carrots, diced", "800g tin tomatoes", "1 tsp oregano", "pasta to serve"],
    steps: ["Sauté onion and carrot until soft.", "Add tomatoes, oregano and lentils; simmer 20 minutes.", "Cook pasta according to packet instructions.", "Serve the sauce over pasta."] },
  { cat: "Pasta & one-pot", season: "Any", title: "One-pot chickpea & orzo stew", desc: "A single-pot stew that thickens as the orzo cooks.",
    ingredients: ["2 cans chickpeas, drained", "1 cup orzo", "800g tin tomatoes", "1 onion, diced", "2 cloves garlic", "spinach"],
    steps: ["Sauté onion and garlic until soft.", "Add tomatoes, chickpeas and 3 cups water; bring to a simmer.", "Stir in orzo and cook until tender.", "Stir through spinach to wilt."] },
  { cat: "Pasta & one-pot", season: "Autumn", title: "Pearl barley & mushroom risotto-style", desc: "A creamy, stirred barley dish standing in for risotto.",
    ingredients: ["1 cup pearl barley", "300g mushrooms, sliced", "1 onion, diced", "1L vegetable stock", "parmesan", "thyme"],
    steps: ["Sauté onion and mushrooms until golden.", "Add barley and a ladle of stock, stirring until absorbed.", "Continue adding stock gradually until barley is tender.", "Finish with parmesan and thyme."] },
  { cat: "Pasta & one-pot", season: "Spring", title: "Wholewheat pasta primavera", desc: "A light pasta tossed with the first spring vegetables.",
    ingredients: ["300g wholewheat pasta", "1 cup asparagus, chopped", "1 cup peas", "2 tbsp olive oil", "parmesan", "lemon zest"],
    steps: ["Cook pasta, adding asparagus and peas for the final 3 minutes.", "Drain, reserving a little pasta water.", "Toss with olive oil and reserved water.", "Finish with parmesan and lemon zest."] },
  { cat: "Pasta & one-pot", season: "Summer", title: "Soba noodles with edamame & sesame", desc: "A cold noodle salad for hot evenings.",
    ingredients: ["200g soba noodles", "1 cup edamame, podded", "1 carrot, julienned", "2 tbsp soy sauce", "1 tbsp sesame oil", "sesame seeds"],
    steps: ["Cook soba noodles and rinse under cold water.", "Toss with edamame and carrot.", "Dress with soy sauce and sesame oil.", "Scatter with sesame seeds and chill before serving."] },

  { cat: "Roasts & traybakes", season: "Any", title: "Chickpea & roast veg tray bake", desc: "A one-tray dinner for a low-effort night.",
    ingredients: ["2 cans chickpeas, drained", "3 cups mixed vegetables, chopped", "2 tbsp olive oil", "1 tsp cumin", "lemon"],
    steps: ["Toss chickpeas and vegetables with oil and cumin.", "Spread on a tray.", "Roast at 200°C for 30 minutes.", "Finish with a squeeze of lemon."] },
  { cat: "Roasts & traybakes", season: "Autumn", title: "Roast kumara, broccoli & lentil traybake", desc: "Sweet kumara and broccoli roasted over green lentils.",
    ingredients: ["2 kumara, cubed", "2 cups broccoli florets", "1 cup lentils, cooked", "2 tbsp olive oil", "1 tsp smoked paprika"],
    steps: ["Toss kumara and broccoli with oil and paprika.", "Roast at 200°C for 25 minutes.", "Warm lentils through.", "Serve vegetables over the lentils."] },
  { cat: "Roasts & traybakes", season: "Winter", title: "Whole roast cauliflower with tahini", desc: "A whole cauliflower roasted until tender, dressed with tahini.",
    ingredients: ["1 whole cauliflower", "2 tbsp olive oil", "1 tsp cumin", "2 tbsp tahini", "lemon juice", "pomegranate seeds"],
    steps: ["Rub the whole cauliflower with oil and cumin.", "Roast at 200°C for 45 minutes until tender.", "Whisk tahini with lemon juice and water.", "Drizzle over the cauliflower and scatter with pomegranate seeds."] },
  { cat: "Roasts & traybakes", season: "Any", title: "Roast veg & haloumi traybake with chickpeas", desc: "Salty haloumi against sweet roasted vegetables.",
    ingredients: ["3 cups mixed vegetables, chopped", "1 can chickpeas, drained", "200g haloumi, sliced", "2 tbsp olive oil", "1 tsp oregano"],
    steps: ["Toss vegetables and chickpeas with oil and oregano.", "Roast at 200°C for 25 minutes.", "Add haloumi slices for the final 10 minutes.", "Serve straight from the tray."] },
  { cat: "Roasts & traybakes", season: "Summer", title: "Baked stuffed capsicums", desc: "Summer capsicums stuffed with a grain and bean filling.",
    ingredients: ["4 capsicums, halved and deseeded", "1 cup rice, cooked", "1 can black beans, drained", "1 cup corn kernels", "1 tsp cumin", "cheese, grated"],
    steps: ["Mix rice, beans, corn and cumin.", "Spoon into capsicum halves.", "Top with cheese.", "Bake at 190°C for 30 minutes."] },

  { cat: "Salads", season: "Any", title: "Lentil & roasted veg salad", desc: "A substantial salad built on lentils and roast vegetables.",
    ingredients: ["1 cup lentils, cooked", "2 cups roasted vegetables", "handful rocket", "2 tbsp olive oil", "balsamic vinegar"],
    steps: ["Roast vegetables until tender.", "Combine lentils, rocket and roasted vegetables.", "Dress with olive oil and balsamic.", "Toss and serve."] },
  { cat: "Salads", season: "Spring", title: "Broad bean, pea & feta salad", desc: "A green, fresh salad for the first weeks of spring.",
    ingredients: ["1 cup broad beans, podded", "1 cup peas", "feta, crumbled", "mint leaves", "olive oil", "lemon juice"],
    steps: ["Blanch broad beans and peas briefly.", "Combine with feta and mint.", "Dress with olive oil and lemon juice.", "Toss gently and serve."] },
  { cat: "Salads", season: "Summer", title: "Chickpea, cucumber & herb salad", desc: "A crisp, herby salad for hot days.",
    ingredients: ["2 cans chickpeas, drained", "1 cucumber, diced", "large bunch herbs, chopped", "2 tbsp olive oil", "lemon juice", "feta"],
    steps: ["Combine chickpeas, cucumber and herbs.", "Dress with olive oil and lemon juice.", "Crumble feta over the top.", "Toss and serve."] },
  { cat: "Salads", season: "Winter", title: "Kale & white bean caesar-style salad", desc: "A hearty winter salad standing in for caesar.",
    ingredients: ["1 bunch kale, shredded", "1 can white beans, drained", "parmesan, shaved", "2 tbsp olive oil", "1 tbsp lemon juice", "1 tsp dijon mustard"],
    steps: ["Massage kale with a little olive oil to soften.", "Whisk remaining olive oil, lemon juice and mustard.", "Toss kale with beans and dressing.", "Top with shaved parmesan."] },
  { cat: "Salads", season: "Autumn", title: "Beetroot, orange & walnut salad", desc: "A classic pairing of sweet beetroot and citrus.",
    ingredients: ["3 beetroot, roasted and sliced", "2 oranges, segmented", "handful walnuts, toasted", "soft cheese", "olive oil"],
    steps: ["Arrange beetroot and orange segments on a plate.", "Scatter with walnuts and soft cheese.", "Drizzle with olive oil.", "Serve at room temperature."] }
];
recipes.forEach(function (r, i) { r.id = "r" + i; r.isLunchbox = false; });

var lunchboxGroups = [
  { name: "Whole grain base", items: ["Seeded sourdough sandwich", "Wholegrain wrap", "Leftover quinoa", "Bulgur salad", "Oat crackers"] },
  { name: "Protein & fibre", items: ["Hummus", "Boiled egg", "Roasted chickpeas", "Leftover lentil dahl", "Cheese cubes"] },
  { name: "Vegetables", items: ["Carrot sticks", "Cucumber rounds", "Cherry tomatoes", "Snap peas", "Capsicum strips"] },
  { name: "Fruit", items: ["Apple slices", "Mandarin", "Grapes", "Rhubarb & yoghurt pot", "Kiwifruit"] },
  { name: "Seeds (nut-free friendly)", items: ["Pumpkin seed mix", "Sunflower seed mix", "Roasted chickpeas (salted)", "Homemade seed & oat bar"] }
];
var lunchboxCategories = lunchboxGroups.map(function (g) { return g.name; });

var lunchboxRecipes = [];
lunchboxGroups.forEach(function (g, gi) {
  g.items.forEach(function (item, ii) {
    lunchboxRecipes.push({ cat: g.name, title: item, desc: "", ingredients: [item], steps: [], isLunchbox: true, id: "lb" + gi + "-" + ii });
  });
});

var allRecipes = recipes.concat(lunchboxRecipes);
var recipesByTitle = {};
allRecipes.forEach(function (r) { recipesByTitle[r.title] = r; });

var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var dayNames = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" };
var dayLetters = { Mon: "M", Tue: "T", Wed: "W", Thu: "T", Fri: "F", Sat: "S", Sun: "S" };

function getCurrentSeason() {
  var m = new Date().getMonth(); // 0 = Jan
  if (m >= 8 && m <= 10) return "Spring";
  if (m === 11 || m <= 1) return "Summer";
  if (m >= 2 && m <= 4) return "Autumn";
  return "Winter";
}

function loadJSON(key, fallback) {
  try {
    var raw = localStorage.getItem(key);
    if (!raw) return fallback;
    var parsed = JSON.parse(raw);
    return parsed == null ? fallback : parsed;
  } catch (e) {
    return fallback;
  }
}
function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) { /* ignore write failures, e.g. private browsing */ }
}

function initThemeToggle(btn) {
  var themeOrder = ["auto", "light", "dark"];
  var theme = loadJSON("springtable_theme", "auto");
  function applyTheme() {
    if (theme === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
    btn.textContent = "Theme: " + theme.charAt(0).toUpperCase() + theme.slice(1);
  }
  btn.addEventListener("click", function () {
    theme = themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length];
    saveJSON("springtable_theme", theme);
    applyTheme();
  });
  applyTheme();
}
