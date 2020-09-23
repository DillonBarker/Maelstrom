import { goblinAttack } from "../../characterAnimation/goblin/goblin_attack.js";
import { goblinDead } from "../../characterAnimation/goblin/goblin_dead.js";
import { goblinIdle } from "../../characterAnimation/goblin/goblin_idle.js";
import Character from "../character_super/character_super";

const STARTING_HITPOINTS = 100;

class Goblin extends Character{
  constructor(idleImage = goblinIdle, attackImage = goblinAttack, deathImage = goblinDead, deathFrameNumber = 3, idleSourceY = 0, deathSourceY = 0, attackSourceY = 0){
    super(idleImage, attackImage, deathImage, deathFrameNumber, idleSourceY, deathSourceY, attackSourceY)
    this.name = 'Opponent_Placeholder'
    this.hp = STARTING_HITPOINTS
    this.MAX_HP = STARTING_HITPOINTS
    this.is_attacking = false;
    this.money = 0
  }
}

export default Goblin;