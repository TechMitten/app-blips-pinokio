// Pinokio launcher for AppBlips (the browser version: node server.js).
module.exports = {
  version: "2.0",
  title: "AppBlips",
  description: "Turn a plain-English prompt into a working app, website or game, with a live preview.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    const installed = info.exists("app/node_modules") && info.exists("app/dist/index.html")
    const running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
    }
    if (running.install) {
      return [{ default: true, icon: "fa-solid fa-plug", text: "Installing", href: "install.js" }]
    }
    if (running.update) {
      return [{ default: true, icon: "fa-solid fa-rotate", text: "Updating", href: "update.js" }]
    }
    if (running.reset) {
      return [{ default: true, icon: "fa-solid fa-trash", text: "Resetting", href: "reset.js" }]
    }
    if (!installed) {
      return [{ default: true, icon: "fa-solid fa-plug", text: "Install", href: "install.js" }]
    }
    if (running.start) {
      const local = info.local("start.js")
      if (local && local.url) {
        return [
          { default: true, icon: "fa-solid fa-rocket", text: "Open AppBlips", href: local.url },
          { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.js" },
        ]
      }
      return [{ default: true, icon: "fa-solid fa-terminal", text: "Terminal", href: "start.js" }]
    }
    return [
      { default: true, icon: "fa-solid fa-power-off", text: "Start", href: "start.js" },
      { icon: "fa-solid fa-rotate", text: "Update", href: "update.js" },
      { icon: "fa-solid fa-plug", text: "Reinstall", href: "install.js" },
      { icon: "fa-regular fa-circle-xmark", text: "Reset", href: "reset.js", confirm: "Delete the downloaded app? Your saved AI key in the data folder is kept." },
    ]
  },
}
