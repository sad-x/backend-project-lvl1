#!/usr/bin/env node
import greet from '../src/cli.js';
import evenGame from '../src/even-game.js';

const name = greet();
evenGame(name);
