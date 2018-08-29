# BattleShip

"scripts": {
    "default:dev": "npm run clean && webpack --mode development",
    "default:prod": "npm run clean && webpack --mode production",
    "build:dev": "npm run clean && webpack --mode development",
    "build": "npm run clean && BABEL_ENV=production webpack --mode production",
    "stats": "webpack --profile --json > stats.json",
    "dev": "webpack-dev-server",
    "clean": "rimraf dist",
    "example:nodejs": "cd examples && npm run nodejs"
 }