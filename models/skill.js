const skills = [
    {skill: 'Javascript', done: true},
    {skill: 'Node.js', done: false},
    {skill: 'Epress.js', done: false}
];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
      skills.splice(id, 1);
  }

  function create(skill) {
      skills.push(skill);
  }

  function getOne(id) {
      return skills[id];
  }
  
  function getAll() {
    return skills;
  }