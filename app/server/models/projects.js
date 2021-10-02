const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
        this.name = name;
        this.abstract = abstract;
        this.authors = authors;
        this.tags = tags;
        this.createdBy = createdBy;

    }
}

class Projects extends DataModel {
    validate(obj) {
 let val = true;
 for(let item in obj){
     if (!obj[item] || obj[item] === null){
         val = false;
     }
 }
  let auth = Array.isArray(obj.authors);
  let tag = Array.isArray(obj.tags);

  if(auth && tag && val){
      return true;
  }
  else{
      return false;
  }
    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};