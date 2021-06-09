const api = require("./api/index");
const client = require("./client/index");

async function exp() {
  const apiObj = api(8088);
  await apiObj.start();
  await client("http://localhost:8088");
  await apiObj.end();
}

exp().then(() => {});
