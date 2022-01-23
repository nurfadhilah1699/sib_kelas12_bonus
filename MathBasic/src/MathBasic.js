const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima dua parameter');
    }

    const a = args[0];
    const b = args[1];

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }
  },
  subtract: () => {

  },
  multiply: () => {

  },
  divide: () => {

  },
};

module.exports = MathBasic;
