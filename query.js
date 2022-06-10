// DB CONNECTION
require('./config/db.connection.js')

const { Profile } = require('./models/index.js')
// REQUIRING
const Class = require('./models/Class');
const Coach = require('./models/Coach');
const Fighter = require('./models/Fighter');

Fighter.create(
    {
        name: "BELAL MUHAMMAD",
        nickname: "REMEMBER THE NAME",
        stance: "Orthodox",
        weight: "170lbs",
        weightclass: "Welterweight",
        record: "21-3-0 (W-L-D)",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-07/MUHAMMAD_BELAL_L_06-12.png?itok=0GphvQXy",
        competitiontype: "MMA",
        promotions: "UFC"
    },
    {
        name: "HORACIO GUTIERREZ",
        nickname: "THE PUNISHER",
        stance: "Orthodox",
        weight: "170lbs",
        "weightclass": "Welterweight",
        record: "0-0-0 (W-L-D)",
        image: "https://thatshirt.com/wp-content/uploads/2017/12/thatshirt-t-shirt-clip-art-martial-arts-mma_fighter_7-39517.jpg",
        competitiontype: "MMA",
        promotions: "UFC"
    },
    {
        name: "MAX PEREZ",
        nickname: "MAXIMO",
        stance: "Orthodox",
        weight: "155lbs",
        "weightclass": "Lightweight",
        record: "0-0-0 (W-L-D)",
        image: "https://thatshirt.com/wp-content/uploads/2017/12/thatshirt-t-shirt-clip-art-martial-arts-mma_fighter_7-39517.jpg",
        competitiontype: "MMA",
        promotions: "B2 FIghting Series"

    },
    {
        name: "ALEXIS RODRIGUEZ",
        nickname: "THE BARBER",
        stance: "Orthodox",
        weight: "220lbs",
        "weightclass": "Heavyweight",
        record: "0-0-0 (W-L-D)",
        image: "https://thatshirt.com/wp-content/uploads/2017/12/thatshirt-t-shirt-clip-art-martial-arts-mma_fighter_7-39517.jpg",
        competitiontype: "MMA",
        promotions: "Fight Card Ent"
    },
    {
        name: "GABRIEL MOTA",
        nickname: "HANDS OF STONE",
        stance: "Orthodox",
        weight: "205lbs",
        "weightclass": "Light Heavyweight",
        record: "0-0-0 (W-L-D)",
        image: "https://thatshirt.com/wp-content/uploads/2017/12/thatshirt-t-shirt-clip-art-martial-arts-mma_fighter_7-39517.jpg",
        competitiontype: "MMA, Boxing",
        promotions: "Bare Knuckle Boxing, LFA"
    },
    {
        name: "MIKHAIL WILLIS",
        nickname: "BANCO",
        stance: "Southpaw",
        weight: "145lbs",
        "weightclass": "Featherweight",
        record: "0-0-0 (W-L-D)",
        image: "https://thatshirt.com/wp-content/uploads/2017/12/thatshirt-t-shirt-clip-art-martial-arts-mma_fighter_7-39517.jpg",
        competitiontype: "MMA, BJJ",
        promotions: "Fight Card Ent"
    }
)