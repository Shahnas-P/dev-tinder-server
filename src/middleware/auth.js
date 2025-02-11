const auth = (req, res, next) => {
  //Beause it should applicatble to get , post etc ..

  console.log(" Passed through middleware !!");

  const token = "adsfadfadf";
  const authorization = token === "sds";
  if (!authorization) {
    res.send("Unauthorized admin");
  }

  next();
};

module.exports = {
  auth,
};
