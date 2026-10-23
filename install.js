// Downloads AppBlips into app/, installs its packages and builds the page
// once, so start.js only has to run the small server.
module.exports = {
  run: [
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: "git clone https://github.com/techmitten/app-blips app",
      },
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: ["npm install", "npm run build"],
      },
    },
    {
      method: "notify",
      params: { html: "AppBlips is installed. Click <b>Start</b> to open it." },
    },
  ],
}
