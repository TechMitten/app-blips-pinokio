// Deletes the downloaded app so it can be installed fresh. data/ (the saved
// AI key) is left alone.
module.exports = {
  run: [
    {
      method: "fs.rm",
      params: { path: "app" },
    },
  ],
}
