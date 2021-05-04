const express = require("express");
const axios = require("axios");
var cors = require("cors");
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  await axios({ ...req.body.data })
    .then((result) => {
      res.send({
        data: {
          data: result.data,
          headers: result.headers,
          status: result.status,
          statusText: result.statusText,
        },
        isSuccess: true,
        error: null,
      });
    })
    .catch((err) => {
      res.send({
        data: null,
        isSuccess: false,
        error: err,
      });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
