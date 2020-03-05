let fun = 50;

const increaseFunScore = () => {
  if (fun <= 50) {
    fun += 50;
  } else {
    fun = 100;
  }
};

const slightlyIncreaseFunScore = () => {
  if (fun <= 98) {
    fun += 2;
  } else {
    fun = 100;
  }
};

const getFull = () => fun;

export default { getFull, increaseFunScore, slightlyIncreaseFunScore };
