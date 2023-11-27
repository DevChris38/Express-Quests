const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;
  const errors = [];

  if (title == null) {
    errors.push({
      field: "title",
      message: "le champs title n'est pas défini",
    });
  } else if (title.length > 255) {
    errors.push({ field: "title", message: "le champs title est trop long" });
  }
  if (director == null) {
    errors.push({
      field: "director",
      message: "le champs director n'est pas défini",
    });
  } else if (director.length > 255) {
    errors.push({
      field: "director",
      message: "le champs director est trop long",
    });
  }
  if (year == null) {
    errors.push({ field: "year", message: "le champs year n'est pas défini" });
  } else if (year.length > 255) {
    errors.push({
      field: "year",
      message: "le champs year est trop long",
    });
  }
  if (color == null) {
    errors.push({
      field: "color",
      message: "le champs color n'est pas défini",
    });
  } else if (color.length > 255) {
    errors.push({
      field: "color",
      message: "le champs color est trop long",
    });
  }
  if (duration == null) {
    errors.push({
      field: "duration",
      message: "le champs duration n'est pas défini",
    });
  }
  if (errors.length !== 0) {
    let errorList = "";
    errors.forEach((err) => (errorList += err.message += "\n"));
    res
      .status(422)
      .send(`Les erreurs suivantes ont été détectées : \n\n${[errorList]}`);
  } else {
    next();
  }
};

module.exports = validateMovie;
