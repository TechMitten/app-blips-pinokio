// Runs the browser version's server. The port is fixed on purpose: projects
// are saved in the browser's storage for http://localhost:<port>, so a new
// port each launch would make saved projects look like they disappeared.
module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        env: {
          PORT: "42013",
          // Keep the saved AI key next to the launcher, outside app/, so
          // Reset and Update don't remove it.
          APPBLIPS_DATA_DIR: "{{path.resolve(cwd, 'data')}}",
        },
        message: "node server.js",
        on: [{ event: "/http:\\/\\/\\S+/", done: true }],
      },
    },
    {
      method: "local.set",
      params: { url: "{{input.event[0]}}" },
    },
  ],
}
