const users = {
  results: [
    {
      gender: "female",
      name: { title: "miss", first: "louane", last: "vidal" },
      location: {
        street: "2479 place du 8 février 1962",
        city: "avignon",
        state: "vendée",
        postcode: 78276,
        coordinates: { latitude: "2.0565", longitude: "95.2422" },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      email: "louane.vidal@example.com",
      login: {
        uuid: "9f07341f-c7e6-45b7-bab0-af6de5a4582d",
        username: "angryostrich988",
        password: "r2d2",
        salt: "B5ywSDUM",
        md5: "afce5fbe8f32bcec1a918f75617ab654",
        sha1: "1a5b1afa1d9913cf491af64ce78946d18fea6b04",
        sha256:
          "0124895aa1e6e5fb0596fad4c413602e0922e8a8c2dc758bbdb3fa070ad25a07"
      },
      dob: { date: "1965-12-20T13:32:15Z", age: 53 },
      registered: { date: "2015-07-25T23:14:54Z", age: 3 },
      phone: "02-62-35-18-98",
      cell: "06-07-80-83-11",
      id: { name: "INSEE", value: "2NNaN01776236 16" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/88.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg"
      },
      nat: "FR"
    },
    {
      gender: "male",
      name: { title: "mr", first: "don", last: "white" },
      location: {
        street: "4542 rochestown road",
        city: "sallins",
        state: "monaghan",
        postcode: 44584,
        coordinates: { latitude: "89.4367", longitude: "135.6354" },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia"
        }
      },
      email: "don.white@example.com",
      login: {
        uuid: "1cd1e622-12bb-4b35-a2c9-63ff7bda6c73",
        username: "angryduck156",
        password: "0101",
        salt: "XDlG0rRr",
        md5: "35e6f5e0247d43f6dec0056c8317f320",
        sha1: "ee6a3affc22de617283eb28e8df7fab72b153052",
        sha256:
          "6cf456410cf19343336972d23d00d0884fed29c3e73a5584aeae2eeda3a48758"
      },
      dob: { date: "1949-08-25T19:03:36Z", age: 69 },
      registered: { date: "2016-04-28T08:03:55Z", age: 3 },
      phone: "051-441-5241",
      cell: "081-956-4429",
      id: { name: "PPS", value: "5081227T" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/38.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/38.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/38.jpg"
      },
      nat: "IE"
    },
    {
      gender: "male",
      name: { title: "mr", first: "loan", last: "lucas" },
      location: {
        street: "2256 place de l'église",
        city: "argenteuil",
        state: "lot-et-garonne",
        postcode: 87662,
        coordinates: { latitude: "3.9825", longitude: "176.6213" },
        timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" }
      },
      email: "loan.lucas@example.com",
      login: {
        uuid: "4b400301-d696-4618-862e-8a673f80e334",
        username: "orangepanda844",
        password: "wonderboy",
        salt: "iHPZA8UP",
        md5: "97eca8070d96e8e27b1c468e9cb3fd9e",
        sha1: "23c5a9a09387d4d9b381c5f86330a1629971a7fa",
        sha256:
          "817b0ddb16a74507134956bcd0e80467e5efbcc309116bf3caf98199b6c54e59"
      },
      dob: { date: "1991-10-03T09:36:23Z", age: 27 },
      registered: { date: "2007-05-27T06:42:59Z", age: 12 },
      phone: "04-56-18-88-34",
      cell: "06-74-93-14-75",
      id: { name: "INSEE", value: "1NNaN18631077 64" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/3.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/3.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/3.jpg"
      },
      nat: "FR"
    },
    {
      gender: "male",
      name: { title: "monsieur", first: "arno", last: "brun" },
      location: {
        street: "3976 rue de la mairie",
        city: "stocken-höfen",
        state: "schaffhausen",
        postcode: 9563,
        coordinates: { latitude: "52.7455", longitude: "6.1478" },
        timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" }
      },
      email: "arno.brun@example.com",
      login: {
        uuid: "679d3319-d28a-4d6f-baf8-bde50a8a2edd",
        username: "whitebutterfly474",
        password: "shonuf",
        salt: "DDoEyFRG",
        md5: "394d45b58344b04772234b6fd54bbfd1",
        sha1: "2fccefa4bbcd5e0d22f867652d617112968a582f",
        sha256:
          "044cf6fd20327cc39f2a8cad8f972bef7591a7d662afdb4ae19b5ba4d4c9d746"
      },
      dob: { date: "1982-06-25T23:51:59Z", age: 37 },
      registered: { date: "2014-03-19T04:29:03Z", age: 5 },
      phone: "(379)-340-0466",
      cell: "(727)-174-4592",
      id: { name: "AVS", value: "756.3936.3115.16" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/23.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg"
      },
      nat: "CH"
    },
    {
      gender: "male",
      name: { title: "mr", first: "sigmar", last: "kießling" },
      location: {
        street: "berliner straße 142",
        city: "weilheim-schongau",
        state: "sachsen",
        postcode: 45132,
        coordinates: { latitude: "-18.3929", longitude: "-5.5054" },
        timezone: { offset: "+4:30", description: "Kabul" }
      },
      email: "sigmar.kießling@example.com",
      login: {
        uuid: "b7e527c8-3ca5-430c-ba83-711d6ad98773",
        username: "bluezebra268",
        password: "presiden",
        salt: "Mek6MaY0",
        md5: "2bed9bf64f596d625ef13f05522a0016",
        sha1: "911ad7d34ec9c823ea8958b5ec8d65338a0c5cf0",
        sha256:
          "760227b1c4c59f58b006d14cb3c45b3fab33959692d3542cc4bc177aadbb89c4"
      },
      dob: { date: "1960-08-21T11:29:02Z", age: 58 },
      registered: { date: "2016-12-15T11:54:24Z", age: 2 },
      phone: "0561-2795710",
      cell: "0173-8872460",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/45.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg"
      },
      nat: "DE"
    },
    {
      gender: "male",
      name: { title: "mr", first: "florian", last: "dobler" },
      location: {
        street: "lindenstraße 55",
        city: "trebbin",
        state: "brandenburg",
        postcode: 69783,
        coordinates: { latitude: "-1.8238", longitude: "-38.6202" },
        timezone: { offset: "-8:00", description: "Pacific Time (US & Canada)" }
      },
      email: "florian.dobler@example.com",
      login: {
        uuid: "8b8ce16b-b3f5-4cf5-a007-a9c4c2c778f4",
        username: "organicgoose847",
        password: "trek",
        salt: "7ZxlZ1kP",
        md5: "2624d26bb343a17ad07cf3592d8b8f50",
        sha1: "5daaf606c1cc4f22feace987d52f530a70744cf2",
        sha256:
          "43b72ca42bb8820a1b9e793987304c37aa635792c2a5e3539d7620410e0e2179"
      },
      dob: { date: "1986-11-17T02:22:35Z", age: 32 },
      registered: { date: "2002-07-15T06:02:58Z", age: 17 },
      phone: "0785-1811444",
      cell: "0179-8390123",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/32.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/32.jpg"
      },
      nat: "DE"
    },
    {
      gender: "female",
      name: { title: "ms", first: "iida", last: "peura" },
      location: {
        street: "4273 hämeenkatu",
        city: "kajaani",
        state: "uusimaa",
        postcode: 46205,
        coordinates: { latitude: "-35.4549", longitude: "149.0069" },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      email: "iida.peura@example.com",
      login: {
        uuid: "6a52282a-46d6-4a71-ac69-12ea0dfb3f24",
        username: "redfrog830",
        password: "rachel",
        salt: "mW5wRfzD",
        md5: "7394f7d44bc87d0eed2d6be737de4d20",
        sha1: "8241244c54b3e562d4f00cae650dbb9b16605915",
        sha256:
          "71f6b6dd9ab011de96a780a0b96f7040e2c284f54989cbdca8188670ec172847"
      },
      dob: { date: "1953-10-14T11:58:12Z", age: 65 },
      registered: { date: "2006-05-28T15:19:26Z", age: 13 },
      phone: "09-167-970",
      cell: "041-352-54-27",
      id: { name: "HETU", value: "NaNNA238undefined" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/7.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/7.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/7.jpg"
      },
      nat: "FI"
    },
    {
      gender: "male",
      name: { title: "mr", first: "شایان", last: "یاسمی" },
      location: {
        street: "2633 میدان شهیدان رحیمی",
        city: "کرمان",
        state: "کرمانشاه",
        postcode: 57373,
        coordinates: { latitude: "73.3382", longitude: "-15.8943" },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      email: "شایان.یاسمی@example.com",
      login: {
        uuid: "8a23be8b-115d-4ec3-ba0b-47422f9d3afd",
        username: "bluegoose643",
        password: "homerun",
        salt: "ppW5EINh",
        md5: "6ebfbeb822dd6db116b9df8e659c0def",
        sha1: "26504936da013f79eb7a22e5414e831360930deb",
        sha256:
          "40de6510d41a653e80356942717ba42623fd51c8cecba064393960a627760935"
      },
      dob: { date: "1980-12-06T11:21:31Z", age: 38 },
      registered: { date: "2005-08-27T09:33:26Z", age: 13 },
      phone: "071-05792846",
      cell: "0977-107-8278",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/81.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/81.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/81.jpg"
      },
      nat: "IR"
    },
    {
      gender: "male",
      name: { title: "mr", first: "harry", last: "thomas" },
      location: {
        street: "715 roscommon road",
        city: "dunedin",
        state: "otago",
        postcode: 25493,
        coordinates: { latitude: "-20.3448", longitude: "-114.4092" },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown"
        }
      },
      email: "harry.thomas@example.com",
      login: {
        uuid: "dd2ae95d-c05b-4e83-9226-76ed6f023546",
        username: "redpeacock807",
        password: "horndog",
        salt: "MvC0ajKz",
        md5: "9fbd3996b6e355991e0fe0251fcdd9c6",
        sha1: "e6274de97c9c63b450b03a83d5f5c6ffbc910615",
        sha256:
          "3066d4d8ac94e791c08d9312d8f37de3e4c8bdbc9cd238dfbf361be5023c6b2c"
      },
      dob: { date: "1960-01-02T06:10:30Z", age: 59 },
      registered: { date: "2016-02-03T20:29:14Z", age: 3 },
      phone: "(229)-993-1818",
      cell: "(185)-084-4877",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/18.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/18.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg"
      },
      nat: "NZ"
    },
    {
      gender: "male",
      name: { title: "mr", first: "gary", last: "clarke" },
      location: {
        street: "3999 o'connell street",
        city: "balbriggan",
        state: "roscommon",
        postcode: 11148,
        coordinates: { latitude: "48.2435", longitude: "-61.3271" },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      email: "gary.clarke@example.com",
      login: {
        uuid: "be8633e6-3ce5-4b16-bba5-c241e2acfc12",
        username: "blackgorilla831",
        password: "rangers1",
        salt: "oCmjuxdM",
        md5: "9dd8e8a6a734d5a0b350aea5be880ce3",
        sha1: "2615a9ae6e7173662b39ff01b472f4e37d25de7e",
        sha256:
          "543879e2f7e5a0988a98c2dcb5f94b72e06a413002d6d8624c141b036634a3aa"
      },
      dob: { date: "1992-01-09T08:56:10Z", age: 27 },
      registered: { date: "2006-11-02T19:40:35Z", age: 12 },
      phone: "071-830-5310",
      cell: "081-659-8217",
      id: { name: "PPS", value: "9479368T" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/21.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/21.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/21.jpg"
      },
      nat: "IE"
    }
  ],
  info: { seed: "abc", results: 10, page: 1, version: "1.2" }
};

const civilizations = [
  {
    id: 1,
    name: "Aztecs",
    expansion: "The Conquerors",
    army_type: "Infantry and Monk",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars"
    ],
    team_bonus: "Relics generate +33% gold",
    civilization_bonus: [
      "Villagers carry +5",
      "Military units created 15% faster",
      "+5 Monk hit points for each Monastery technology",
      "Loom free"
    ]
  },
  {
    id: 2,
    name: "Britons",
    expansion: "Age of Kings",
    army_type: "Foot Archer",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/longbowman"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/yeomen"
    ],
    team_bonus: "Archery Ranges work 20% faster",
    civilization_bonus: [
      "Town Centers cost -50% wood upon reaching the Castle Age",
      "Foot archers (excluding Skirmishers) have +1 range in Castle Age and +1 in Imperial Age (for +2 total)",
      "Shepherds work 25% faster"
    ]
  },
  {
    id: 3,
    name: "Bizantines",
    expansion: "Age of Kings",
    army_type: "Defensive",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cataphract"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/logistica"
    ],
    team_bonus: "Monks +50% heal speed",
    civilization_bonus: [
      "Buildings (except gates) have +10% HP in Dark Age / +20% HP in Feudal Age  / +30% in Castle Age / +40% in Imperial Age",
      "Spearman skirmisher and camel lines cost 25% less",
      "Fire Ships attack 20% faster",
      "Imperial Age costs -33%",
      "Town Watch is free"
    ]
  },
  {
    id: 4,
    name: "Celts",
    expansion: "Age of Kings",
    army_type: "Infantry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/woad_raider"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/furor_celtica"
    ],
    team_bonus: "Siege Workshops work 20% faster",
    civilization_bonus: [
      "Infantry moves 15% faster",
      "Lumberjacks work 15% faster",
      "Siege weapons reload 20% faster",
      "Sheep cannot be stolen if within one Celt unit's line of sight"
    ]
  },
  {
    id: 5,
    name: "Chinese",
    expansion: "Age of Kings",
    army_type: "Archer",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/chu_ko_nu"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/rocketry"
    ],
    team_bonus: "Famrs provide +45 food",
    civilization_bonus: [
      "Start game with 3 extra villagers but -50 wood and -200 food",
      "Technologies cost -10% in Feudal Age/ -15% in Castle Age/-20% in Imperial Age",
      "Town Centers support 10 population instead of 5",
      "Demolition Ships have +50% HP"
    ]
  },
  {
    id: 6,
    name: "Franks",
    expansion: "Age of Kings",
    army_type: "Cavalry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/throwing_axeman"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/bearded_axe"
    ],
    team_bonus: "Knights have +2 line of sight",
    civilization_bonus: [
      "Castles are 25% cheaper",
      "Knights have +20% HP",
      "Farm upgrades are free (Mill is required to receive bonus)"
    ]
  },
  {
    id: 7,
    name: "Goths",
    expansion: "Age of Kings",
    army_type: "Infantry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/huskarl"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/anarchy",
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/perfusion"
    ],
    team_bonus: "Barracks operate 20% faster",
    civilization_bonus: [
      "Infantry cost 35% less (starting in Feudal Age)",
      "Infantry have +1 attack against buildings",
      "Villagers have +5 attack versus wild boar",
      "Hunters carry +15 meat",
      "+10 to population limit in Imperial Age"
    ]
  },
  {
    id: 8,
    name: "Huns",
    expansion: "The Conquerors",
    army_type: "Cavalry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/tarkan"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/atheism"
    ],
    team_bonus: "Stables are 20% faster",
    civilization_bonus: [
      "Houses are not required to support population",
      "Start game with -100 Wood",
      "Cavalry Archers cost -25% in Castle Age/ -30% in Imperial Age",
      "Trebuchets are 35% more accurate."
    ]
  },
  {
    id: 9,
    name: "Japanese",
    expansion: "Age of Kings",
    army_type: "Infantry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/samurai"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/kataparuto"
    ],
    team_bonus: "Galleys have +50% line of sight",
    civilization_bonus: [
      "Fishing Ships have 2x HP and +2 pierce armor",
      "Fishing Ships work +5% faster in Dark Age/ +10% in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
      "Lumber Camps / Mining Camps / Mills are 50% cheaper",
      "Infantry attack 25% faster (starting in Feudal Age)"
    ]
  },
  {
    id: 10,
    name: "Koreans",
    expansion: "The Conquerors",
    army_type: "Tower and naval",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/war_wagon",
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/turtle_ship"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/shinkichon"
    ],
    team_bonus: "Mangonel line has +1 range",
    civilization_bonus: [
      "Villagers have +3 line of sight",
      "Stone miners work 20% faster",
      "Guard Tower and Keep upgrades are free",
      "Towers (except bombard towers) have +1 range in Castle Age/ +2 in Imperial Age"
    ]
  },
  {
    id: 11,
    name: "Mayans",
    expansion: "The Conquerors",
    army_type: "Archer",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/plumed_archer"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/el_dorado"
    ],
    team_bonus: "Walls are 50% cheaper",
    civilization_bonus: [
      "Start game with 1 extra villager but -50 food",
      "Natural resources last 20% longer",
      "Archers cost -10% in Feudal Age/ -20% in Castle Age/ -30% in Imperial Age"
    ]
  },
  {
    id: 12,
    name: "Mongols",
    expansion: "Age of Kings",
    army_type: "Cavalry Archer",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mangudai"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/drill"
    ],
    team_bonus: "Scout line has +2 Line of sight",
    civilization_bonus: [
      "Cavalry Archers reload 20% faster",
      "Light Cavalry and Hussars have +30% HP",
      "Hunters work 50% faster"
    ]
  },
  {
    id: 13,
    name: "Persians",
    expansion: "Age of Kings",
    army_type: "Cavalry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/war_elephant"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/mahouts"
    ],
    team_bonus: "Knights have +2 attack versus Archers",
    civilization_bonus: [
      "Start game with +50 wood and food",
      "Town Center and Docks have 2x HP",
      "Town Centers and Docks operate +10% faster in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age"
    ]
  },
  {
    id: 14,
    name: "Saracens",
    expansion: "Age of Kings",
    army_type: "Camel and naval",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mameluke"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/zealotry"
    ],
    team_bonus: "Foot archers have +2 attack bonus against buildings",
    civilization_bonus: [
      "Market trade cost is only 5%",
      "Transport Ships have 2x HP and carry capacity",
      "Galleys attack 20% faster",
      "Cavalry Archers have +4 attack bonus against buildings"
    ]
  },
  {
    id: 15,
    name: "Spanish",
    expansion: "The Conquerors",
    army_type: "Gunpowder and Monk",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/conquistador",
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/missionary"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/supremacy"
    ],
    team_bonus: "Trade units generate +33% Gold",
    civilization_bonus: [
      "Villagers construct buildings 30% faster",
      "Blacksmith upgrades do not cost any gold",
      "Cannon Galleons benefit from Ballistics (less reload time and more accuracy)",
      "Hand Cannoneers and Bombard Cannons reload 15% faster"
    ]
  },
  {
    id: 16,
    name: "Teutons",
    expansion: "Age of Kings",
    army_type: "Infantry",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/teutonic_knight"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/crenellations"
    ],
    team_bonus: "Units are more resistant to conversion",
    civilization_bonus: [
      "Monks have 2x healing range",
      "Towers can garrison 2x units (more arrows)",
      "Murder Holes is free",
      "Farms cost 33% less",
      "Town Centers have +1 attack and +5 line of sight"
    ]
  },
  {
    id: 17,
    name: "Turks",
    expansion: "Age of Kings",
    army_type: "Gunpowder",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/janissary"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/artillery"
    ],
    team_bonus: "Gunpowder units are created 20% faster",
    civilization_bonus: [
      "Gunpowder Units have +25% HP",
      "Gunpowder technologies cost 50% less",
      "Chemistry is free",
      "Gold miners work 15% faster",
      "Light Cavalry and Hussar upgrades are free"
    ]
  },
  {
    id: 18,
    name: "Vikings",
    expansion: "Age of Kings",
    army_type: "Infantry and naval",
    unique_unit: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/berserk",
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/longboat"
    ],
    unique_tech: [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/berserkergang"
    ],
    team_bonus: "Docks are 25% cheaper",
    civilization_bonus: [
      "Warships cost 20% less",
      "Infantry have +10% HP in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
      "Wheelbarrow and Hand Cart are free"
    ]
  }
];

module.exports = {
  users: users,
  civilizations: civilizations
};
