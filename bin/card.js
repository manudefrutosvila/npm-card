#!/usr/bin/env node

'use strict'

// Pull in our modules
import chalk from 'chalk'
import boxen from 'boxen'

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('        🖖  Manu de Frutos Vila  =)'),
  work: chalk.white('Software engineer, frontend specialist'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('manufv'),
  // npm: chalk.gray('https://npmjs.com/') + chalk.red('~manudefrutosvila'),
  github: chalk.gray('https://github.com/') + chalk.white('manudefrutosvila'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('manufv'),
  instagram: chalk.gray('https://instagram.com/') + chalk.magenta('manufv'),
  web: chalk.green('https://www.manudefrutosvila.com/'),
  hobbies: chalk.white('In love with 🐕 animals 🌲 nature and 🌍 adventure   '),
  hobbies2: chalk.white('🎮 Dota2 enthusiast'),
  hobbies3: chalk.white('⚽ Valencia CF supporter'),
  hobbies4: '🐾🐾👣👣',
  npx: chalk.white('💻 $ ') + chalk.red('npx') + ' ' + chalk.white('manudefrutosvila')
}

const label = {
  work: chalk.white.bold('     Work:'),
  twitter: chalk.white.bold('  Twitter:'),
  // npm: chalk.white.bold('      npm:'),
  gitHub: chalk.white.bold('   GitHub:'),
  linkedIn: chalk.white.bold(' LinkedIn:'),
  instagram: chalk.white.bold('Instagram:'),
  web: chalk.white.bold('      Web:'),
  card: chalk.white.bold('    Card:'),
  hobbies: chalk.white.bold(' Hobbies:'),
  hobbiesMore: chalk.white('          ')
}

const newline = '\n'
const heading = `${data.name}`
const working = `${label.work}  ${data.work}`
const twittering = `${label.twitter}  ${data.twitter}`
// const npming = `${label.npm}  ${data.npm}`
const githubing = `${label.gitHub}  ${data.github}`
const linkedining = `${label.linkedIn}  ${data.linkedin}`
const instagraming = `${label.instagram}  ${data.instagram}`
const webing = `${label.web}  ${data.web}`
const carding = `${label.card}  ${data.npx}`
const hobbies = `${label.hobbies}  ${data.hobbies}`
const hobbies2 = `${label.hobbiesMore} ${data.hobbies2}  `
const hobbies3 = `${label.hobbiesMore} ${data.hobbies3}`
const hobbies4 = `${label.hobbiesMore} ${data.hobbies4}`

const output =
  heading +
  newline + newline +
  working + newline + newline +
  twittering + newline +
  // npming + newline + // data.labelnpm + data.npm
  githubing + newline +
  linkedining + newline +
  instagraming + newline +
  webing + newline + newline +
  hobbies + newline +
  hobbies2 + newline +
  hobbies3 + newline +
  hobbies4 + newline + newline +
  carding

console.log(chalk.green(boxen(output, options)))
