// Pulls the latest AppBlips and rebuilds it.
module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: ["git pull", "npm install", "npm run build"],
      },
    },
  ],
}
