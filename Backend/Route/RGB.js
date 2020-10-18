const totalSet = 32;
var interval = parseInt(256 / totalSet);
var count = 0;
var rgbColorArray = [];

for (let red = 1; red <= totalSet; red++) { 
  for (let green = 1; green <= totalSet; green++) { 
     for (let blue = 1; blue <= totalSet; blue++) {
      rgbColorArray.push("rgb(" + (red * interval)+","+(green * interval)+","+(blue * interval) +")")
      count++;
     }
  }
}

const RGB = (app) => {
  app.get("/api/rgb-color", (req, res) => {
    const limit = req.query.limit;
    if (
      req.headers.authorization ===
      "&*^&^&%$fdffgfgeEEEWE#@"
    ) {
      const updatedArr = rgbColorArray.slice(0,limit)
      res.send({ data: updatedArr, total: count });
    }
    else res.sendStatus(403);
  });
};

module.exports = RGB;
