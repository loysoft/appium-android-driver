import findCmds from './find';
import generalCmds from './general';
import alertCmds from './alert';
import elementCmds from './element';
import contextCmds from './context';
import actionCmds from './actions';
import touchCmds from './touch';
import imeCmds from './ime';
import networkCmds from './network';


let commands = {};
Object.assign(
  commands,
  findCmds,
  generalCmds,
  alertCmds,
  elementCmds,
  contextCmds,
  actionCmds,
  touchCmds,
  imeCmds,
  networkCmds
  // add other command types here
);

export default commands;
