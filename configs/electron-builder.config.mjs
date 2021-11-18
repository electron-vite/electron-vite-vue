
/**
 * @type {import('electron-builder').Configuration}
 */
const config = {
  appId: "308487730@qq.com",
  asar: true,
  directories: {
    output: "release/${version}"
  },
  files: [
    "!node_modules",
    "dist",
    "package.json"
  ],
  mac: {
    artifactName: "${productName}_${version}.${ext}",
    target: [
      "dmg"
    ]
  },
  win: {
    target: [
      {
        target: "nsis",
        arch: [
          "x64"
        ]
      }
    ],
    artifactName: "${productName}_${version}.${ext}"
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false
  }
}

export { config }
