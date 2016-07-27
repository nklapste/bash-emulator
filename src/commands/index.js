var commands = {
  cat: require('./cat'),
  cd: require('./cd'),
  cp: require('./cp'),
  history: require('./history'),
  ls: require('./ls'),
  mkdir: require('./mkdir'),
  mv: require('./mv'),
  pwd: require('./pwd'),
  touch: require('./touch')
}

module.exports = commands
