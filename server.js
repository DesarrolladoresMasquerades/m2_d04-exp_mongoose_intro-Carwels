require("dotenv/config")

require("./configs/database.config")

const Cat = require("./models/Cat.model")

//Cat.findOneAndUpdate() is dangerous because it will update the wrong object if the filter object is "wrong"

Cat.findByIdAndUpdate("6204fed35a11b0c0dfa3828d", {$set: {name: "Sandra"}},
{new: true}
).then((cat) => console.log(cat))


