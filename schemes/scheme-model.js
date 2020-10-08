
const database = require("../data/knexconfig");

function find() {
  return database("schemes");
}

function findById(id) {
    return database("schemes")
    .where({id})
    .then((scheme) =>{
        if (!scheme.length) {
            return null;
        }else{
            return scheme
        }
    })
}

function findSteps(id) {
   //have to join `steps` table, 
   return database("schemes")
   .join("steps", "steps.scheme_id", "scheme.id")
   .select(
       "steps.id",
       "steps.step_number",
       "steps.instructions", 
       "shemes.scheme_name"
    )
    .where({"schemes.id":id})
    .orderBy("steps.step_number")
}

function add(scheme) {
    return database("scheme")
    .insert(scheme) //Inserts scheme into the database
    .then((id)=>{ // Resolves to the newly inserted scheme, including id.
        return findById(id[0]);
    })
    .catch((err) =>{
        return null;
    });
}

function update(changes, id) {
    database("scheme")
        .where({id})
        .update(changes)
        .then((scheme) =>{
            if (scheme) {
                return findById(id)
            } else {
                return null;
            }
        })
        .catch((err) =>{
            return null;
        })
}

function remove(id) {
    return database ("schemes")
    .where({ id }).delete();

}

module.exports = { find, findById, findSteps, add, update, remove };
