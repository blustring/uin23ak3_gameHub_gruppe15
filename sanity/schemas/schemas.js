import game from "./game";
import genre from "./genre"


export default createSchema({
  name: "default",
  types: [game, genre],

});
