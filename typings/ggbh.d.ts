interface AbilityPointUp {
  // ID int
  id: string;
  // 需求心得 int
  exp: string;
}

interface AppellationFortuitous {
  // 奇遇表ID int
  id: string;
  // 剧情ID int
  dramaID: string;
  // 同意按钮ID int
  OKBtnID: string;
  // 道具类型 int[]
  propClassName: string;
  // 物品价值比率 int
  worthRate: string;
}

interface AppellationGrant {
  // 道号ID int
  id: string;
  // 类型 int
  type: string;
  // 参数 int
  value: string;
  // 发放道号前提条件 string
  sendCondition: string;
  // NPC条件 string
  condition: string;
  // 最大数量 int
  count: string;
  // 发放概率 int
  grantProbability: string;
  // 每次发放数量 int[]
  grantCount: string;
  // 获得月结日志 string
  gainLogID: string;
  // 获得角色日志 string
  roleLogID: string;
}

interface AppellationSymbolNamed {
  // ID int
  id: string;
  // 符号 string
  name: string;
}

interface AppellationTitle {
  // ID int
  id: string;
  // 道号类型 int[]
  className: string;
  // 道号等级 int
  appellationLevel: string;
  // 显示区域 int[]
  showArea: string;
  // 优先级 int
  priority: string;
  // 道号名称 string
  name: string;
  // 道号描述 string
  desc: string;
  // 悬停提示 string
  tips: string;
  // 获得途径描述 string
  gainDesc: string;
  // 效果 int[]
  roleEffect: string;
  // 施加概率 int
  addFeatureProbability: string;
  // 为自身施加气运 int[]
  addSelfFeatureID: string;
  // 为对方施加气运 int[]
  addFeatureID: string;
  // 易主类型 int
  lossType: string;
  // 易主参数 int[]
  lossValue: string;
  // 失去类型 int
  dropType: string;
  // 失去参数 int[]
  dropValue: string;
  // 触发监听列表 int[]
  unitActionTrigger: string;
  // 拥有该道号的条件 string
  askCondition: string;
  // 可获得列表显示条件 string
  condition: string;
  // 解锁的符号 int[]
  symbolID: string;
  // 喜欢的符号 int[]
  symbolLike: string;
  // 厌恶的符号 int[]
  symbolHate: string;
  // 播放月结日志条件 string
  logCondition: string;
  // 易主角色日志A string
  lootRoleLogIDA: string;
  // 易主角色日志B string
  lootRoleLogIDB: string;
  // 失去角色日志 string
  lossRoleLogID: string;
  // 易主日志 string
  lootLogID: string;
  // 失去月结日志 string
  lossLogID: string;
}

interface ArtifactShape {
  // 道具ID int
  id: string;
  // 初始境界 int
  initGrade: string;
  // 技能ID int
  skillID: string;
  // 技能初始词条数量 int
  prefixInit: string;
  // 技能最大词条数量 int
  perfixMax: string;
  // 耐久度 int
  durable: string;
  // 法宝单位 int
  unitID: string;
  // 法宝施加效果 string
  addArtifactBattleEffect: string;
  // 对召唤者施加效果 string
  addRoleBattleEffect: string;
  // 大图ID string
  avatar: string;
  // 容纳魂力百分比 int
  soulCapcity: string;
  // 装备占用念力上限百分比 int
  equipSp: string;
  // 施放消耗念力百分比 int
  spCost: string;
  // 每秒消耗念力百分比 int
  spCostDuration: string;
  // 持续时间 int
  duration: string;
  // 可收回冷却时间 int
  cdUse: string;
  // 收回后冷却时间 int
  cdTake: string;
  // 收回后每秒回复体力万分比 int
  hpRestore: string;
  // 被打爆之后增加的冷却时间 int
  cdBreak: string;
  // 体力 int
  hp: string;
  // 攻击 int
  atk: string;
  // 防御 int
  def: string;
  // 物理免伤 int
  pfr: string;
  // 魔法免伤 int
  mfr: string;
  // 会心 int
  crit: string;
  // 护心 int
  guard: string;
  // 会心倍率 int
  critV: string;
  // 护心倍率 int
  guardV: string;
  // 释放范围 int
  useRange: string;
}

interface ArtifactShapeCommon {
  // 法宝境界 int
  id: string;
  // 标准容纳魂力 int
  soulCapcity: string;
  // 标准装备占用念力上限 int
  equipSp: string;
  // 标准施放消耗念力 int
  spCost: string;
  // 每秒消耗念力 float
  spCostDuration: string;
}

interface ArtifactShapeFire {
  // 真火ID int
  id: string;
  // 持续时间 int
  time: string;
  // 每秒产生球的数量最小值 int
  ballMin: string;
  // 每秒产生球的数量最大值 int
  ballMax: string;
  // 纯度球提升的纯度值 int
  pureAdd: string;
  // 杂质球提升的杂质值 int
  mixedAdd: string;
}

interface ArtifactShapeMaterial {
  // 炼器图谱技能ID int
  id: string;
  // 炼器资质要求 int
  basEqp: string;
  // 核心材料ID int
  coreMaterialID: string;
  // 稀有辅助材料 int
  rareMaterial: string;
  // 每个稀有材料提升属性倍率 float
  rareAttrGrow: string;
  // 稀有材料最大作用个数 int
  rareNumMax: string;
  // 通用辅助材料类型 int[]
  materialType: string;
  // 辅助材料数量 int
  materialNum: string;
  // 纯度球属性 string
  pureType: string;
  // 标准杂质 int
  mixedRequire: string;
  // 标准炼器资质 int
  basEqpRequire: string;
  // 需求纯度 int
  pureRequire: string;
  // 产出器形 int
  shape: string;
}

interface ArtifactShapeMixed {
  // 道具ID int
  id: string;
  // 杂质值 int
  mixed: string;
}

interface ArtifactShapeRefine {
  // 境界ID int
  id: string;
  // 消耗道具 int
  costItem: string;
  // 每条词条消耗道具数量 int
  itemNum: string;
  // 每条词条消耗灵石 int
  money: string;
}

interface ArtifactShapeRepair {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface ArtifactShapeRepairSub {
  // 境界ID int
  id: string;
  // 炼器材料数量 int
  materialNum: string;
  // 总杂质需求 int
  mixedRequire: string;
  // 修复石ID int
  repairItem: string;
  // 修复石数量 int
  repairNum: string;
  // 消耗灵石数量 int
  costMoney: string;
}

interface ArtifactShapeUpgrade {
  // 境界ID int
  id: string;
  // 升级材料道具ID int
  item: string;
  // 消耗材料数量 int
  num: string;
  // 融合石ID int
  upgradeItem: string;
  // 融合石数量 int
  upgradeNum: string;
  // 消耗灵石数量 int
  costMoney: string;
  // 升级后的属性倍率损益百分比 int
  attrReduce: string;
  // 升级材料产出区域 int
  materialArea: string;
}

interface ArtifactSprite {
  // ID int
  id: string;
  // 名称 string
  name: string;
  // 区域 int[]
  area: string;
  // 品级 int
  level: string;
  // 图标 string
  icon: string;
  // 大图 string
  avatar: string;
  // 模型 string
  model: string;
  // 技能 int[]
  skill: string;
  // 技能动作 string[]
  skillAnim: string;
  // 本命技能ID int
  lifeSkill: string;
  // 法宝施加效果 string
  addArtifactSpriteBattleEffect: string;
  // 对召唤者施加效果 string
  addRoleBattleEffect: string;
  // 佩戴后对召唤者施加效果 string
  wearAddRoleBattleEffect: string;
  // 被动效果 string
  skillRoleEffect: string;
  // 魂力 int
  soul: string;
  // 精力最大值 int
  staminaMax: string;
  // 每月回复精力 int
  staminaRestore: string;
  // 精力回复道具种类 int
  staminaType: string;
  // 喜欢的道具ID int[]
  likeItem: string;
  // 抽取权重 int
  cardStoneWeight: string;
  // 是否重复抽取 int
  isMultiple: string;
  // 分解产出 int
  releaseReward: string;
  // 分解经验 int
  releaseExp: string;
  // 亲密度分等 int[]
  closeLevel: string;
  // 本命契约解锁等级 int
  lifeRequire: string;
}

interface ArtifactSpriteArt {
  // 技能ID int
  id: string;
  // 器灵ID int
  spriteID: string;
  // 解锁等级 int
  level: string;
  // 使用条件 string
  condition: string;
  // 条件不满足时执行命令 string
  failFunction: string;
  // 主动生活技能 string
  skillFunction: string;
  // 主动冷却时间 int
  skillFunctionCD: string;
  // 技能消耗精力 int
  costStamina: string;
  // 被动生活技能 string
  skillRoleEffect: string;
  // 技能图标 string
  icon: string;
  // 技能名称 string
  name: string;
  // 技能说明 string
  desc: string;
}

interface ArtifactSpriteClose {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface ArtifactSpriteDialogue {
  // ID int
  id: string;
  // 器灵ID int
  spriteID: string;
  // 触发类型 int
  triggerType: string;
  // 触发器 string
  tigger: string;
  // 出现概率百分比 int
  prob: string;
  // 触发间隔（月） int
  interval: string;
  // 是否可重复 int
  isRepeat: string;
  // 对话框样式 int
  dialogType: string;
  // 对话id int
  dialogueId: string;
  // 对话组 int
  group: string;
  // 语音 string
  vocal: string;
}

interface ArtifactSpriteDialogueSub {
  // ID int
  id: string;
  // 器灵ID int
  spriteID: string;
  // 行为 string
  active: string;
  // 亲密等级需求 int
  closeLevel: string;
  // 对话id string
  dialogueId: string;
  // 表情动画名 string
  anime: string;
  // 语音 string
  vocal: string;
}

interface ArtifactSpriteEquip {
  // ID int
  id: string;
  // 修正数值 string
  prefixValue: string;
  // 属性数值 string
  attrValue: string;
  // 法宝施加效果 string
  addArtifactSpriteBattleEffect: string;
  // 对召唤者施加效果 string
  addRoleBattleEffect: string;
  // 技能 int[]
  skill: string;
  // 技能动作 string[]
  skillAnim: string;
}

interface ArtifactSpriteLevel {
  // ID int
  id: string;
  // 器灵ID int
  spriteID: string;
  // 等级 int
  level: string;
  // 经验 int
  exp: string;
}

interface ArtifactSpriteSkill {
  // ID int
  id: string;
  // 器灵ID int
  spriteID: string;
  // 技能序列 int
  skillIndex: string;
  // 技能id int
  skillID: string;
}

interface ArtifactSpriteStroy {
  // 器灵ID int
  id: string;
  // 种族 string
  type: string;
  // 简介 string
  story: string;
  // 记忆 string
  memory: string;
}

interface ArtifactSpriteTalent {
  // ID int
  id: string;
  // 器灵ID int
  spriteID: string;
  // 天赋编号 int
  number: string;
  // 技能点坐标X,x表示圈数 int
  axisX: string;
  // 技能点坐标Y,y表示从y轴开始顺时针索引 int
  axisY: string;
  // 天赋名称 string
  name: string;
  // 增加魂力消耗 int
  addSoul: string;
  // 是否显示 int
  isShow: string;
  // 修正数值 string
  prefixValue: string;
  // 是否不能重复修正 int[]
  notRepetPrefix: string;
  // 属性数值 string
  attrValue: string;
  // 法宝施加效果 string
  addArtifactSpriteBattleEffect: string;
  // 对召唤者施加效果 string
  addRoleBattleEffect: string;
  // 佩戴后对召唤者施加效果 string
  wearAddRoleBattleEffect: string;
  // 技能 int[]
  skill: string;
  // 技能动作 string[]
  skillAnim: string;
  // 主动生活技能 string
  skillFunction: string;
  // 主动冷却时间 int
  skillFunctionCD: string;
  // 被动生活技能 string
  skillRoleEffect: string;
  // 天赋图标 string
  icon: string;
  // 天赋说明 string
  desc: string;
  // 解锁条件1 string
  unlock: string;
  // 激活条件2类型 int
  unlock2Type: string;
  // 激活条件2参数 string
  unlock2Value: string;
  // 激活条件2需要次数 int
  unlock2Count: string;
  // 激活条件3类型 int
  unlock3Type: string;
  // 激活条件3参数 string
  unlock3Value: string;
  // 激活条件3需要次数 int
  unlock3Count: string;
  // 解锁条件描述 string
  unlockDesc: string;
  // 启动剧情 int
  drama: string;
  // 激活消耗 int[][]
  activeCost: string;
}

interface ArtifactSpriteTalentCost {
  // 当前激活数量 int
  id: string;
  // 额外激活消耗 string
  addCost: string;
}

interface BattleAIBossValue {
  // ID int
  id: string;
  // 组ID int
  groupID: string;
  // 强制进入触发 string
  trigger: string;
  // 进入条件，下一个动作条件 string
  condition: string;
  // 动作命令 string
  cmd: string;
  // 动作参数 string
  cmdValue: string;
  // 是否使用仙法 int
  immortal: string;
  // 技能ID int
  skill: string;
  // 技能循环次数 string
  cycle: string;
  // 技能循环间隔 int
  interval: string;
  // 是否每次攻击前更新方向 int
  updateDire: string;
  // 攻击时是否不看向敌人 int
  attackNotSetDire: string;
  // 下一动作 string
  next: string;
}

interface BattleAIBossValueCrazy {
  // ID int
  id: string;
  // 组ID int
  groupID: string;
  // 强制进入触发 string
  trigger: string;
  // 强制进入条件，下一个动作条件 string
  condition: string;
  // 动作命令 string
  cmd: string;
  // 动作参数 string
  cmdValue: string;
  // 是否使用仙法 int
  immortal: string;
  // 技能ID int
  skill: string;
  // 技能循环次数 string
  cycle: string;
  // 技能循环间隔 int
  interval: string;
  // 是否每次攻击前更新方向 int
  updateDire: string;
  // 攻击时是否不看向敌人 int
  attackNotSetDire: string;
  // 下一动作 string
  next: string;
}

interface BattleAIDefaultValue {
  // ID int
  id: string;
  // 警戒范围 string
  AlertRange: string;
  // 游荡距离 string
  WanderMoveDis: string;
  // 发呆间隔时间 string
  DazeIntervalTime: string;
  // 发呆次数 string
  DazeDazeCount: string;
  // 巡逻开始位置，巡逻结束位置：x1,y1,x2,y2 string
  PatrolOffsetPosi: string;
  // 战斗触发通知范围内AI string
  BattleTriggerNotifyRadius: string;
  // 追击参数（追击类型_追击距离_休息时间） string
  ChaseValues: string;
  // 追踪范围 string
  ChaseRange: string;
  // 攻击轮数 string
  AttackTotalCount: string;
  // 一轮的攻击次数 string
  AttackCount: string;
  // 攻击间隔时移动距离 string
  AttackMoveDis: string;
  // 一轮攻击结束后移动休息时间 string
  AttackIntervalTime: string;
  // 攻击状态CD时间 string
  AttackCDTime: string;
  // 攻击偏移距离 string
  AttackOffsetDis: string;
  // 攻击是否锁定方向 string
  AttackXDire: string;
  // 攻击是否每次更新方向 string
  AttackUpdateDire: string;
  // 无法使用技能时，是否返回玩家身边 string
  isNotUseSkillMovePlayer: string;
  // 待机类型：1原地不动，2巡逻，3游荡 string
  IdleType: string;
}

interface BattleAbilityBase {
  // 心法ID int
  id: string;
  // 名称 string
  name: string;
  // 技能分类 string
  className: string;
  // 心法类型 int
  type: string;
  // 最低境界 int
  gradeMin: string;
  // 最高境界 int
  gradeMax: string;
  // 悟性需求 string
  talent: string;
  // 资质类型 string
  basType: string;
  // 资质要求 string
  basRequire: string;
  // 道点要求 string
  abilityPoint: string;
  // 心法效果 string
  skillEffect: string;
  // 每击杀一个敌人获得的经验 string
  growExp: string;
  // 装备属性 string
  equipEffect: string;
  // 技能说明 string
  desc: string;
}

interface BattleAbilityCombine {
  // 组合ID int
  id: string;
  // 心法类型 string
  type: string;
  // 最终品质指定 string
  level: string;
  // 技能分类(-1不指定) string
  className: string;
  // 境界类型指定 int
  rewardGradeID: string;
  // 物品名称 string
  itemName: string;
  // 物品品质 int
  itemColor: string;
  // 物品说明 string
  itemDesc: string;
}

interface BattleAbilitySuitBase {
  // ID int
  id: string;
  // 套装名称 string
  suitName: string;
  // 套装称谓 string
  suitCall: string;
  // 套装类型 int
  suitType: string;
  // 套装成员ID string
  suitMember: string;
  // 触发条件 string
  suitCondition: string;
  // 激活要求1 int
  activationClaim1: string;
  // 套装属性1 string
  suitQualityEffect1: string;
  // 套装气运1 string
  suitRole1: string;
  // 套装属性修正1 string
  suitPrefixValue1: string;
  // 套装属性1描述 string
  suitDesc1: string;
  // 激活要求2 int
  activationClaim2: string;
  // 套装属性2 string
  suitQualityEffect2: string;
  // 套装气运2 string
  suitRole2: string;
  // 套装属性修正2 string
  suitPrefixValue2: string;
  // 套装属性2描述 string
  suitDesc2: string;
  // 套装背景 string
  suit_history: string;
  // 套装签名 string
  suit_historyName: string;
  // 图标 string
  icon: string;
}

interface BattleBarrier {
  // 障碍物ID int
  id: string;
  // 生命值 int
  hp: string;
  // 是否穿透 int
  isThrough: string;
}

interface BattleBarrierReward {
  // ID int
  id: string;
  // 障碍物ID int
  barrierID: string;
  // 最小副本等级 int
  minLevel: string;
  // 最大副本等级 int
  maxLevel: string;
  // 掉落产出 int
  rewardID: string;
}

interface BattleEffect {
  // 效果ID int
  id: string;
  // 效果类型ID int
  typeID: string;
  // 作用目标 string
  targetID: string;
  // 参数1 string
  value1: string;
  // 参数2 string
  value2: string;
  // 参数3 string
  value3: string;
  // 参数4 string
  value4: string;
  // 参数5 string
  value5: string;
  // 参数6 string
  value6: string;
  // 参数7 string
  value7: string;
  // 参数8 string
  value8: string;
  // 是否叠加 int
  overlay: string;
  // 叠加层数 string
  layCount: string;
  // 持续时间 string
  duration: string;
  // 分类 string
  classID: string;
  // 特效1 string
  effect1: string;
  // 特效2 string
  effect2: string;
  // 特效3 string
  effect3: string;
  // 特效4 string
  effect4: string;
  // 特效5 string
  effect5: string;
  // 特效6 string
  effect6: string;
  // 效果ICON string
  icon: string;
  // ICON是否显示在头顶 int
  headIcon: string;
  // 效果名称 string
  name: string;
  // 效果说明 string
  desc: string;
  // 数值说明 string
  valueDesc: string;
}

interface BattleEffectBasePower {
  // ID int
  id: string;
  // 受到资质影响 int
  based: string;
  // 显示文本 string
  desc: string;
}

interface BattleEffectClassName {
  // ID int
  id: string;
  // 分类名称 string
  name: string;
}

interface BattleEffectSelection {
  // ID int
  id: string;
  // 基准单位 int
  refrence: string;
  // 范围 string
  range: string;
  // 是否包括隐藏单位 int
  hide: string;
  // 阵营 int
  camp: string;
  // 是否包括基准单位 int
  include: string;
  // 排除的单位类型 string
  ingoreUnitType: string;
  // 排除的怪物标签 string
  ingoreUnitClassName: string;
  // 单位类型 string
  unitType: string;
  // 指定单位ID string
  unitID: string;
  // 单位效果状态 int
  unitEffect: string;
  // 效果参数 string
  effectValue: string;
  // 单位属性状态 int
  unitAttr: string;
  // 属性类型 int
  attrType: string;
  // 临界值 int
  attrValue: string;
  // 排序方式 int
  rankType: string;
  // 目标数量 string
  count: string;
}

interface BattleEffectTrigger {
  // 触发ID int
  id: string;
  // 类型 int
  type: string;
  // 参数 int
  value: string;
}

interface BattleFunctionList {
  // ID int
  id: string;
  // 延迟执行 int
  delay: string;
  // 剧情作用 string
  function: string;
  // 触发副本作用 string
  battleFunction: string;
  // 下一个命令 string
  nextID: string;
  // 权重 int
  weight: string;
}

interface BattleHaloAttack {
  // 光环ID int
  id: string;
  // 碰撞位置 int
  boxType: string;
  // 物理伤害 string
  phycicalDmg: string;
  // 武器类型 int
  phycicalType: string;
  // 属性伤害 string
  magicDmg: string;
  // 属性类型 int
  magicType: string;
  // 攻击延时 string
  attackStartDelay: string;
  // 攻击次数 string
  attackCount: string;
  // 攻击间隔 string
  attackDelay: string;
  // 多段伤害比例 string
  phaseDmg: string;
  // 目标条件 string
  condition: string;
  // 附加效果 string
  haloEffect: string;
}

interface BattleHaloBase {
  // 光环ID int
  id: string;
  // 光环类型 int
  type: string;
  // 主技能 int
  mainSkill: string;
  // 光环分类 int
  classID: string;
  // 光环模型 string
  model: string;
  // 光环大小 string
  range: string;
  // 碰撞位置 int
  boxType: string;
  // 光环阻挡 int
  block: string;
  // 排除的怪物类型 int[]
  ingoreTarget: string;
  // 生效目标 int
  target: string;
  // 目标条件 string
  condition: string;
  // 是否跟随至下一房间 int
  chase: string;
  // 是否包含无敌单位 int
  includeInvincible: string;
  // 是否启启用距离检测（包含隐藏单位） int
  isDisCheck: string;
  // 生效延迟 int
  delay: string;
  // 持续时间 string
  duration: string;
  // 进入效果ID string
  enterEffect: string;
  // 退出效果ID string
  exitEffect: string;
  // 光环销毁是否删除进入、退出效果 int
  clearEffect: string;
  // 光环销毁时为召唤光环者施加效果 string
  destroyEffect: string;
  // 召唤主死亡时是否立即删除光环 int
  clearHalo: string;
  // 单位在光环内时，是否在光环消失时触发退出效果 int
  triggerExitEffect: string;
  // 光环特殊效果 string
  haloEffectActive: string;
}

interface BattleHaloSpecialEffect {
  // 效果ID int
  id: string;
  // 效果类型 int
  type: string;
  // 效果参数 string
  value: string;
  // 参数2 string
  value2: string;
  // 参数3 string
  value3: string;
  // 参数4 string
  value4: string;
  // 参数5 string
  value5: string;
}

interface BattleHaloSummon {
  // 光环ID int
  id: string;
  // 召唤物ID string
  unitID: string;
  // 每次召唤数量 string
  count: string;
  // 召唤延迟 string
  delay: string;
  // 召唤次数 string
  number: string;
  // 每次召唤间隔 string
  interval: string;
  // 召唤物持续时间 string
  duration: string;
  // 继承属性A组 string
  inheritAttr: string;
  // 召唤后给召唤物施加的效果ID string
  effect: string;
  // 是否不创建出生动画 int
  notCreateEffect: string;
  // 不显示召唤物头像 int
  noAvatar: string;
}

interface BattleMissile {
  // 弹道ID int
  id: string;
  // 弹道类型 int
  type: string;
  // 弹道模型 string
  model: string;
  // 模型比例 string
  size: string;
  // 弹道速度 string
  speed: string;
  // 弹道射程 string
  range: string;
  // 发射前摇 int
  shake: string;
  // 发射ID int
  shotID: string;
  // 发射类型 int
  shotType: string;
  // 轨迹ID int
  trailID: string;
  // 轨迹类型 int
  trailType: string;
  // 生命周期 string
  lifecycle: string;
  // 目标条件 string
  condition: string;
  // 反弹能量值 int
  reflectPower: string;
  // 穿透类型 string
  throughPower: string;
  // 能否被抵挡 int
  resist: string;
  // 击退类型 string
  backType: string;
  // 震屏配置 int
  shakeID: string;
}

interface BattleShot96 {
  // ID int
  id: string;
  // 初始伤害百分比 string
  dmgInit: string;
  // 初始弹道模型比例 string
  scaleInit: string;
  // 成长时间 string
  growTime: string;
  // 持续施法时的效果ID string
  effect: string;
  // 影响光环 int
  halo: string;
  // 光环初始大小百分比 string
  haloInit: string;
  // 最大持续时间 string
  lastTime: string;
  // 停止施法时要移除和效果 string
  removeEffect: string;
  // 弹道是否跟随角色 int
  follow: string;
  // 是否检测射程范围 int
  rangeCheck: string;
  // 角度缓动事件 float
  lerp: string;
}

interface BattleShot97 {
  // ID int
  id: string;
  // 初始伤害百分比 string
  dmgInit: string;
  // 最大伤害奖励百分比 string
  dmgBonus: string;
  // 初始弹道模型比例 string
  scaleInit: string;
  // 初始弹道射程 string
  rangeInit: string;
  // 最大有效蓄力时间 string
  validTimeMax: string;
  // 极限蓄力时间 string
  limitTime: string;
  // 蓄力时的效果ID string
  effect: string;
  // 蓄力达到完美时施加的效果 string
  effectPerfect: string;
  // 完美缓冲时间 string
  perfectTime: string;
  // 是否显示完美TIPS int
  perfectDesc: string;
  // 发射位置点 int
  shotPos: string;
  // 目标位置点 int
  targetPos: string;
  // 发射位置的特效表现 string
  shotEff: string;
  // 目标位置的特效表现 string
  targetEff: string;
  // 影响光环 int
  halo: string;
  // 光环初始大小百分比 string
  haloInit: string;
  // 影响光环的持续时间 int
  haloDuration: string;
  // 是否检测射程范围 int
  rangeCheck: string;
  // 蓄力音效 string
  sound: string;
}

interface BattleShot98 {
  // ID int
  id: string;
  // 连发时CD string
  innerCD: string;
  // 最大连发时间 string
  maxTime: string;
  // 开始施放时为自己施加效果 string
  startEffect: string;
  // 连发过程中为自己施加的效果 string
  duringEffect: string;
  // 停止连发后为自己施加效果 string
  finallyEffect: string;
  // 停止连发后移除的效果 string
  removeEffect: string;
  // 是否自动持续施法 int
  isAutoShot: string;
}

interface BattleShot99 {
  // ID int
  id: string;
  // 连发次数 string
  innerNum: string;
  // 连发间隔 string
  innerCD: string;
  // 发射初始点位置 int
  startPos: string;
  // 发射目标点位置 int
  targetPos: string;
  // 是否检测射程范围 int
  rangeCheck: string;
}

interface BattleSkillAttack {
  // 技能ID int
  id: string;
  // 技能名称 string
  name: string;
  // 技能图标 string
  icon: string;
  // 技能分类 string
  className: string;
  // 技能类型 int
  type: string;
  // 最低境界 int
  gradeMin: string;
  // 最高境界 int
  gradeMax: string;
  // 底层技能ID int
  skillID: string;
  // 灵力消耗 string
  mpCost: string;
  // 施法条件ID string
  condition: string;
  // 施放减速百分比 string
  slowDown: string;
  // 悟性需求 string
  talent: string;
  // 释放获得的经验 string
  growExp: string;
  // 资质类型 string
  basType: string;
  // 资质要求 string
  basRequire: string;
  // 预警ID int
  alertID: string;
  // 动画触发技能 int
  animTrigger: string;
  // 施法技能时音效 string[]
  sounds: string;
  // 技能说明 string
  desc: string;
}

interface BattleSkillBase {
  // 技能ID int
  id: string;
  // 主技能 int
  mainSkill: string;
  // 技能分类 string
  className: string;
  // 普通伤害威力 string
  phycicalDmg: string;
  // 武器类型 int
  weaponType: string;
  // 属性伤害威力 string
  magicDmg: string;
  // 属性类型 int
  magicType: string;
  // 会心加成 string
  crit: string;
  // 充能数值（已废弃） int
  chargeValue: string;
  // 弹道ID int
  missileID: string;
  // 发射间隔 string
  shotCD: string;
  // 附加效果ID string
  skillEffect: string;
  // 技能方向 string
  skillDire: string;
  // 偏移位置 string
  offsetPosi: string;
  // 发射位置 int
  shotPos: string;
  // 首次需要的等待时间 int
  loadTime: string;
  // 二段技能配置ID string
  skillSub: string;
}

interface BattleSkillCombine {
  // 组合ID int
  id: string;
  // 技能类型 string
  type: string;
  // 标准技能指定 string
  baseID: string;
  // 最终品质指定 string
  level: string;
  // 技能分类(1-所有可产出的，不可填-1) string
  className: string;
  // 境界类型指定 int
  rewardGradeID: string;
  // 物品名称 string
  itemName: string;
  // 物品品质 int
  itemColor: string;
  // 物品说明 string
  itemDesc: string;
}

interface BattleSkillCondition {
  // ID int
  id: string;
  // 条件类型 string
  condition: string;
  // 类型参数 string
  type: string;
  // 数值参数 string
  value: string;
  // 条件说明文本 string
  desc: string;
}

interface BattleSkillCost {
  // ID int
  id: string;
  // 技能境界 int
  grade: string;
  // 技能品质 int
  level: string;
  // 技能类型 string
  type: string;
  // 消耗灵石 int
  money: string;
  // 消耗天数 int
  days: string;
  // 经验参数 int
  talentExp: string;
}

interface BattleSkillDifficult {
  // ID int
  id: string;
  // 需求悟性 int
  talent: string;
  // 描述文本 string
  desc: string;
}

interface BattleSkillEffect {
  // 技能效果ID int
  id: string;
  // 触发条件ID int
  triggerID: string;
  // 触发概率 string
  triggerProb: string;
  // 施加延迟时间 string
  delay: string;
  // 目标类型 int
  target: string;
  // 效果ID int
  effectID: string;
}

interface BattleSkillFlashCost {
  // ID int
  id: string;
  // 技能境界 int
  grade: string;
  // 词条品质 int
  level: string;
  // 回溯点消耗 int
  flashCost: string;
}

interface BattleSkillForget {
  // ID int
  id: string;
  // 技能境界 int
  grade: string;
  // 词条品质 int
  level: string;
  // 返还材料 string
  output: string;
}

interface BattleSkillLevel {
  // 品质ID int
  id: string;
  // 初始境界 int
  grade: string;
  // 境界+1 int
  gradeA: string;
  // 境界+2 int
  gradeB: string;
  // 境界+3 int
  gradeC: string;
  // 境界+4 int
  gradeD: string;
}

interface BattleSkillMastery {
  // ID int
  id: string;
  // 熟练度名称 string
  name: string;
  // 境界1 int
  grade1: string;
  // 境界2 int
  grade2: string;
  // 境界3 int
  grade3: string;
  // 境界4 int
  grade4: string;
  // 境界5 int
  grade5: string;
  // 境界6 int
  grade6: string;
  // 境界7 int
  grade7: string;
  // 境界8 int
  grade8: string;
  // 境界9 int
  grade9: string;
  // 境界10 int
  grade10: string;
}

interface BattleSkillPrefixLevel {
  // 品质ID int
  id: string;
  // 初始权重 int
  weight: string;
}

interface BattleSkillPrefixName {
  // ID int
  id: string;
  // 位置 int
  index: string;
  // 文本 string
  text: string;
  // 繁体|支持空字符串 string
  tc: string;
  // 英文|支持空字符串 string
  en: string;
}

interface BattleSkillPrefixValue {
  // ID int
  id: string;
  // 技能类型 int
  skillType: string;
  // 技能ID string
  skillID: string;
  // 编号 int
  number: string;
  // 前置条件 string
  require: string;
  // 最多重复次数 int
  multi: string;
  // 资质要求 string
  basRequire: string;
  // 悟性要求 string
  talent: string;
  // 道点要求 string
  abilityPoint: string;
  // 每个位置的权重1 int
  weight1: string;
  // 每个位置的权重2 int
  weight2: string;
  // 每个位置的权重3 int
  weight3: string;
  // 每个位置的权重4 int
  weight4: string;
  // 每个位置的权重5 int
  weight5: string;
  // 每个位置的权重6 int
  weight6: string;
  // 每个位置的权重7 int
  weight7: string;
  // 每个位置的权重8 int
  weight8: string;
  // 每个位置的权重9 int
  weight9: string;
  // 每个位置的权重10 int
  weight10: string;
  // 每个位置的权重11 int
  weight11: string;
  // 效果说明 string
  desc: string;
  // 装备属性 string
  equipEffect: string;
  // 技能效果增加 string
  skillEffect: string;
  // 修正配置 string
  prefixKey: string;
  // 选择类型 int
  selectType: string;
}

interface BattleSkillRealizeCost {
  // 技能境界ID int
  id: string;
  // 消耗道具 int
  item: string;
  // 消耗数量 int
  num: string;
  // 消耗灵石 int
  money: string;
}

interface BattleSkillSub {
  // 二段ID int
  id: string;
  // 二段技能触发条件 int
  triggerID: string;
  // 触发概率 string
  triggerProb: string;
  // 触发条件ID string
  condition: string;
  // 初始化延迟 string
  delay: string;
  // 创建技能延迟 string
  createSkillDelay: string;
  // 技能类型 int
  skillType: string;
  // 二段技能ID string
  subSkillID: string;
  // 二段技能偏移位置 string
  subSkillOffsetPosi: string;
  // 二段光环是否随弹道旋转角度 int
  chaseRotation: string;
  // 二段光环是否随弹道移动 int
  chaseBullet: string;
  // 主弹道销毁时是否销毁二段光环 int
  destroySubMissile: string;
  // 二段弹道是否对触发单位生效 int
  subSkillTriggerActivate: string;
  // 二段技能容量 string
  capacity: string;
  // 是否摧毁主弹道 int
  destroyMainMissile: string;
}

interface BattleSkillTrain {
  // ID int
  id: string;
  // 技能境界 int
  grade: string;
  // 技能类型 string
  type: string;
  // 修炼等级 int
  masteryLevel: string;
  // 消耗材料ID int
  costItem: string;
  // 消耗数量 int
  costNum: string;
  // 消耗天数 int
  days: string;
  // 标准经验 int
  mastery: string;
  // 悟性加成参数A int
  talentPara: string;
  // 遗忘返还MIN int
  forgetMin: string;
  // 遗忘返还MAX int
  forgetMax: string;
}

interface BattleSkillValue {
  // ID int
  id: string;
  // 键 string
  key: string;
  // 境界1数值 string
  value1: string;
  // 境界2数值 string
  value2: string;
  // 境界3数值 string
  value3: string;
  // 境界4数值 string
  value4: string;
  // 境界5数值 string
  value5: string;
  // 境界6数值 string
  value6: string;
  // 境界7数值 string
  value7: string;
  // 境界8数值 string
  value8: string;
  // 境界9数值 string
  value9: string;
  // 境界10数值 string
  value10: string;
  // 怪物专用数值 string
  valueMon: string;
  // 是否与品质相关（分组） int
  colorBind: string;
  // 数值前置图标 string
  icon: string;
  // 显示数值缩放 string
  valueScale: string;
}

interface BattleStepBase {
  // 身法ID int
  id: string;
  // 身法名称 string
  name: string;
  // 身法图标 string
  icon: string;
  // 技能分类 string
  className: string;
  // 身法类型 int
  type: string;
  // 最小境界 int
  gradeMin: string;
  // 最大境界 int
  gradeMax: string;
  // 参数1 string
  value1: string;
  // 参数2 string
  value2: string;
  // 参数3 string
  value3: string;
  // 装备属性 string
  equipEffect: string;
  // 灵力消耗 string
  mpCost: string;
  // 技能效果 string
  skillEffect: string;
  // 悟性需求 string
  talent: string;
  // 资质类型 string
  basType: string;
  // 资质要求 string
  basRequire: string;
  // 释放获得的经验 string
  growExp: string;
  // 冷却时间 string
  cd: string;
  // 说明 string
  desc: string;
}

interface BattleStepCombine {
  // ID int
  id: string;
  // 身法类型 string
  type: string;
  // 最终品质指定 string
  level: string;
  // 技能分类(-1不指定) string
  className: string;
  // 境界类型指定 int
  rewardGradeID: string;
  // 物品名称 string
  itemName: string;
  // 物品品质 int
  itemColor: string;
  // 物品说明 string
  itemDesc: string;
}

interface BattleStepEntry {
  // ID int
  id: string;
  // 关键词 string
  entry: string;
  // 显示文本 string
  title: string;
}

interface BattleStepParameter {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 数值 int
  value: string;
}

interface BattleSubMissileTrigger {
  // 条件ID int
  id: string;
  // 条件类型 int
  type: string;
  // 参数 string
  value: string;
}

interface BattleTrail10 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹距离间隔 string
  bulletDistance: string;
}

interface BattleTrail11 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹角度间隔 string
  bulletDegree: string;
}

interface BattleTrail12 {
  // 轨迹ID int
  id: string;
  // 螺旋半径 int
  screwRadius: string;
  // 螺旋角速度 int
  angularSpeed: string;
}

interface BattleTrail13 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 圆圈半径 string
  radius: string;
  // 半径变化速度 string
  radiusGrow: string;
  // 最大半径 string
  radiusMax: string;
  // 旋转角速度 string
  angularSpeed: string;
}

interface BattleTrail14 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹总角度 string
  bulletDegree: string;
  // 弹道是否返回 string
  backConfirm: string;
  // 弹道到达极限位置后停留时间 string
  stayTime: string;
}

interface BattleTrail15 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 随机角度总范围 string
  degreeRange: string;
  // 是否朝最近敌人发射 int
  resetNearEnemyDire: string;
}

interface BattleTrail16 {
  // 轨迹ID int
  id: string;
  // 点类型 int
  posiType: string;
  // 是否旋转 int
  isRotation: string;
}

interface BattleTrail17 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 开始追踪距离 int
  chaseActive: string;
  // 追踪旋转角度 int
  chaseDegree: string;
  // 子弹总角度 int
  bulletDegree: string;
  // 追踪目标点偏移 int
  offsetDis: string;
  // 最大跟踪时间 int
  maxTargetTime: string;
  // 撞到人后是否停止追踪 int
  stopTarget: string;
  // 是否只跟踪自身 int
  isTargetSelfUnit: string;
  // 是否只跟踪召唤者 int
  isTargetSummonUnit: string;
  // 施放者死亡时是否删除弹道 int
  isDelete: string;
  // 命中敌人后是否返回 int
  hitRegression: string;
  // 弹道弹道销毁后是否返回 int
  destroyRegression: string;
}

interface BattleTrail18 {
  // 轨迹ID int
  id: string;
  // 初始偏移角度 int
  initDegreeRange: string;
  // 参数A float
  valueA: string;
  // 参数B float
  valueB: string;
  // 最大偏移量 string
  degreeRangeMax: string;
  // 冷却后每1秒回复的偏移量 string
  dereeRangeRecover: string;
}

interface BattleTrail19 {
  // 轨迹ID int
  id: string;
  // 弹道内CD int
  innerCD: string;
  // 弹夹容量 string
  bulletNum: string;
}

interface BattleTrail21 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹总角度 string
  bulletDegree: string;
  // 收拢速度 int
  bulletDegreeTrend: string;
}

interface BattleTrail22 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 收拢速度 int
  bulletDegreeTrend: string;
  // 超出距离后才开始收拢 int
  moveDis: string;
  // 初始化最小角度 int
  initMinAngle: string;
  // 初始化最大角度 string
  initMaxAngle: string;
  // 随机增加最小角度 string
  randomMinAngle: string;
  // 随机增加最大角度 string
  randomMaxAngle: string;
  // 达到固定距离后停止旋转 int
  maxAngleDis: string;
}

interface BattleTrail23 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 偏移半径 string
  radius: string;
  // 每个子弹偏移半径最小值 int
  minRadiusDis: string;
  // 是否只偏移前方 int
  isRadiusFront: string;
  // 抛物线高度 int
  height: string;
  // 重力速度 int
  gravity: string;
  // 落地之后延迟销毁 int
  delay: string;
  // 落点位置类型 int
  landPos: string;
  // 落地音效 string
  sound: string;
  // 开始时在目的地创建特效 string
  endPosiEffect: string;
}

interface BattleTrail24 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹角度间隔 string
  bulletDegree: string;
  // 聚拢时间 int
  angleTime: string;
}

interface BattleTrail25 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹垂直偏移范围 string
  offsetRange: string;
  // 是否以屏幕为中心 int
  sceneCentre: string;
}

interface BattleTrail26 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 目标点偏移半径 int
  offsetRange: string;
  // 蓄力后施放，是否限定射程，刷新施放点 int
  finalRangeLimit: string;
  // 子弹是否追踪范围内随机敌人 string
  chase: string;
}

interface BattleTrail27 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹是否追踪范围内随机敌人 string
  chase: string;
}

interface BattleTrail28 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹角度间隔 string
  bulletDegree: string;
  // 子弹出现间隔 int
  bulletInterval: string;
  // 整体延时 int
  totalDelay: string;
  // 所有弹道发射出去时音效 string
  sound: string;
  // 中心点偏移 int
  offset: string;
  // 是否跟随发射点 int
  target: string;
}

interface BattleTrail29 {
  // 轨迹ID int
  id: string;
  // 弹射次数 string
  popNum: string;
  // 能否重复弹射 string
  repeatPop: string;
  // 首个目标类型 int
  firstTarget: string;
  // 目标锁定方式 int
  lockTarget: string;
  // 强制目标怪物ID int
  unitID: string;
  // 击中怪物后为其施加的效果ID string
  effectID: string;
  // 能否弹射施法者 string
  popSelf: string;
  // 击中施法者时施加的效果 string
  popEffect: string;
}

interface BattleTrail30 {
  // 轨迹ID int
  id: string;
  // 持续时间类型 int
  lastType: string;
  // 发射位置类型 int
  startType: string;
  // 目标位置类型 int
  endType: string;
  // 长度类型 int
  rangeType: string;
  // 伤害间隔时间 string
  interval: string;
  // 每秒消耗百分比 int
  costPer: string;
  // 持续时间内施加的效果 string
  duringEffect: string;
  // 是否持续广播使用技能 int
  mulUseSkill: string;
  // 插值 float
  lerp: string;
  // 是否修正技能威力 int
  modifyDmg: string;
}

interface BattleTrail31 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹总角度 int
  bulletDegree: string;
  // 发射总时间 int
  shotTime: string;
}

interface BattleTrail32 {
  // 轨迹ID int
  id: string;
  // 持续时间类型 int
  lastType: string;
  // 发射位置类型 int
  startType: string;
  // 目标位置类型 int
  endType: string;
  // 伤害间隔时间 string
  interval: string;
  // 怪物使用（角度缓动事件） float
  lerp: string;
  // 是否持续广播使用技能 int
  mulUseSkill: string;
}

interface BattleTrail33 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 弹射次数 string
  popNum: string;
  // 弹射范围 string
  popRange: string;
  // 能否重复弹射 string
  repeatPop: string;
  // 弹射目标锁定方式 int
  lockTarget: string;
  // 目标搜索范围 int
  searchRange: string;
  // 跳跃延时 int
  popDelay: string;
  // 没有目标时，是否攻击鼠标位置 int
  attackBlank: string;
  // 首次获取目标位置 int
  targetPos: string;
}

interface BattleTrail34 {
  // 轨迹ID int
  id: string;
  // 子弹数量 int
  bulletNum: string;
  // 偏移半径 int
  radius: string;
  // 曲线弯曲度 int
  winding: string;
  // 落地之后延迟销毁 int
  delay: string;
  // 落点位置类型 int
  landPos: string;
}

interface BattleTrail35 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹移动类型 int
  moveType: string;
  // 伤害间隔时间 string
  interval: string;
  // 是否修正技能威力 int
  modifyDmg: string;
}

interface BattleTrail36 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹距离间隔 string
  bulletDistance: string;
  // 目标点类型 int
  targetType: string;
  // 目标偏移范围 int
  targetOffsetPosi: string;
  // 弹道销毁类型 int
  destroyType: string;
  // 最近射程限制 int
  rangeMin: string;
  // 预警特效 string
  warnEffect: string;
  // 预警大小 int
  warnSize: string;
}

interface BattleTrail37 {
  // 轨迹ID int
  id: string;
  // 到达鼠标位置后停留时间 int
  stayTime: string;
  // 返回时音效 string
  backSound: string;
  // 弹道是否返回 string
  backConfirm: string;
  // 弹道返回次数增加 string
  backNum: string;
}

interface BattleTrail38 {
  // 轨迹ID int
  id: string;
}

interface BattleTrail39 {
  // 轨迹ID int
  id: string;
  // 左右移动距离 int
  dis: string;
  // 左右移动速度 int
  speed: string;
}

interface BattleTrail40 {
  // 轨迹ID int
  id: string;
  // 子弹数量 int
  bulletNum: string;
  // 偏移半径 int
  radius: string;
  // 到达目的地后延迟销毁 int
  delay: string;
  // 落地音效 string
  sound: string;
  // 开始时在目的地创建特效 string
  startPosiEffect: string;
  // 到达目的地创建特效 string
  endPosiEffect: string;
}

interface BattleTrail41 {
  // 轨迹ID int
  id: string;
  // 反弹次数 string
  rebounds: string;
  // 反弹特效 string
  reboundEff: string;
  // 反弹特效时间 int
  reboundEffDur: string;
  // 伤害间隔时间 string
  interval: string;
}

interface BattleTrail70 {
  // 轨迹ID int
  id: string;
  // 是否旋转 int
  isRotation: string;
  // 位置 int
  posi: string;
  // 是否跟踪目标位置 int
  isTargetPosi: string;
  // 伤害间隔时间 string
  interval: string;
}

interface BattleTrail802 {
  // 光环ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 发射间隔 int
  shotCD: string;
  // 旋转角速度 int
  angular: string;
  // 弹道波数 int
  wave: string;
  // 每波间隔 int
  interval: string;
}

interface BattleTrail803 {
  // 光环ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 首发弹道数 int
  firstBullet: string;
}

interface BattleTrail804 {
  // 光环ID int
  id: string;
  // 小弹道模型 string
  smallModel: string;
  // 生效延迟 int
  delay: string;
  // 小弹道总威力百分比 int
  smallDmgScale: string;
  // 小弹道数量 string
  bulletNum: string;
  // 小弹道间隔 int
  interval: string;
  // 大弹道模型 string
  bigModel: string;
  // 大弹道威力百分比 int
  bigDmgScale: string;
}

interface BattleTrail805 {
  // 轨迹ID int
  id: string;
  // 是否在最近目标位置出现 int
  isNearTargetUnitPosi: string;
  // 光环大小 int
  range: string;
  // 光环中心是否跟随目标位置 int
  isTargetUnitPosi: string;
  // 二段出的光环是否跟踪目标 int
  isTarget: string;
  // 是否跟随方向 int
  isDire: string;
  // 子弹数量 string
  bulletNum: string;
  // 子弹出现间隔 string
  interval: string;
  // 是否生成在屏幕中 int
  inScreenCheck: string;
}

interface BattleTrail806 {
  // 轨迹ID int
  id: string;
  // 范围半径 int
  range: string;
  // 持续时间1 int
  duration: string;
  // 每波间隔1 int
  interval: string;
  // 每波数量1 int
  bulletNum: string;
  // 波内间隔1 int
  subInterval: string;
  // 转阶段延迟 int
  delay: string;
  // 持续时间2 int
  secDuration: string;
  // 每波间隔2 int
  secInterval: string;
  // 每波数量2 int
  secBulletNum: string;
  // 波内间隔2 int
  secSubInterval: string;
}

interface BattleTrail901 {
  // 轨迹ID int
  id: string;
  // 随机角度范围 string
  degree: string;
  // 子弹数量 string
  bulletNum: string;
  // 发射间隔 string
  shotCD: string;
  // 弹道波数 int
  wave: string;
  // 每波间隔 int
  interval: string;
}

interface BattleTrail902 {
  // 轨迹ID int
  id: string;
  // 宽度 string
  width: string;
  // 子弹数量 string
  bulletNum: string;
  // 发射间隔 string
  shotCD: string;
  // 弹道波数 int
  wave: string;
  // 每波间隔 int
  interval: string;
}

interface BattleTrail903 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 发射间隔 string
  shotCD: string;
  // 弹道波数 string
  wave: string;
  // 每波间隔 string
  interval: string;
  // 每波整体旋转角度最小值 int
  rotateMin: string;
  // 每波整体旋转角度最大值 int
  rotateMax: string;
}

interface BattleTrail904 {
  // 轨迹ID int
  id: string;
  // 螺旋半径 int
  screwRadius: string;
  // 子弹数量 string
  bulletNum: string;
  // 发射间隔 int
  shotCD: string;
  // 螺旋角速度 int
  angularSpeed: string;
}

interface BattleTrail905 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 随机偏移宽度 int
  width: string;
  // 子弹波数 int
  wave: string;
  // 每波间隔 int
  interval: string;
  // 圆圈半径 int
  radius: string;
  // 半径变化速度 int
  radiusGrow: string;
  // 旋转角速度 int
  angularSpeed: string;
}

interface BattleTrail906 {
  // 轨迹ID int
  id: string;
  // 子弹数量 string
  bulletNum: string;
  // 初始旋转半径 string
  radius: string;
  // 旋转半径变化 string
  radiusGrow: string;
  // 旋转角速度 string
  angularSpeed: string;
  // 最大半径 string
  radiusMax: string;
  // 最大旋转时间 string
  time: string;
}

interface BattleTrail907 {
  // 轨迹ID int
  id: string;
  // 子弹分布类型 int
  type: string;
  // 子弹数量 string
  bulletNum: string;
  // 发射间隔 int
  shotCD: string;
  // 弹道波数 string
  wave: string;
  // 每波间隔 string
  interval: string;
  // 是否只到达中心 int
  center: string;
  // 子弹前摇 int
  shake: string;
  // 子弹后摇 int
  postShake: string;
  // 半径（0则读取弹道射程） int
  radius: string;
}

interface BattleUnitAttr {
  // 怪物ID int
  id: string;
  // 名称 string
  name: string;
  // 基础ID int
  baseID: string;
  // 成长百分比 int
  growPercent: string;
  // 指定属性缩放 string
  attrScale: string;
  // 掉落ID string
  dropID: string;
  // 首次掉落 string
  firstReward: string;
  // 基础经验 int
  exp: string;
  // 怪物数据 string[][]
  unitDatas: string;
}

interface BattleUnitBase {
  // 基础ID int
  id: string;
  // 模型 string
  model: string;
  // 怪物类型 int
  type: string;
  // 怪物标签 string
  className: string;
  // 是否修改技能威力 int
  isModifSkillDmg: string;
  // 体力 int
  hp: string;
  // 灵力 int
  mp: string;
  // 念力 int
  sp: string;
  // 体力恢复 int
  hpRestore: string;
  // 灵力恢复 int
  mpRestore: string;
  // 念力恢复 int
  spRestore: string;
  // 移动速度 int
  moveSpeed: string;
  // 是否进入下一房间 int
  nextRoom: string;
  // 召唤主死亡，自身是否死亡 int
  summonDieDestroy: string;
  // 仙法 string
  immortal: string;
  // 技能 string
  skills: string;
  // 技能动作 string
  anims: string;
  // 技能特效后缀 string
  effectSuffix: string;
  // 心法 string
  abilities: string;
  // 身法 int
  step: string;
  // 道具 string
  items: string;
  // 攻击 int
  atk: string;
  // 防御 int
  def: string;
  // 刀资质 int
  basBlade: string;
  // 枪资质 int
  basSpear: string;
  // 剑资质 int
  basSword: string;
  // 拳资质 int
  basFist: string;
  // 掌资质 int
  basPalm: string;
  // 指资质 int
  basFinger: string;
  // 火灵根 int
  basFire: string;
  // 冰灵根 int
  basFroze: string;
  // 雷灵根 int
  basThunder: string;
  // 风灵根 int
  basWind: string;
  // 土灵根 int
  basEarth: string;
  // 木灵根 int
  basWood: string;
  // 物理免伤 int
  pfr: string;
  // 魔法免伤 int
  mfr: string;
  // 会心 int
  crit: string;
  // 护心 int
  guard: string;
  // 会心倍率 int
  critV: string;
  // 护心倍率 int
  guardV: string;
  // AI类型 int
  aiType: string;
  // AI参数ID int
  aiValueID: string;
}

interface BattleUnitDrop {
  // ID int
  id: string;
  // 掉落ID int
  dropID: string;
  // 境界 int
  grade: string;
  // 产出组ID配置 int
  rewards: string;
}

interface BattleUnitLevel {
  // 等级 int
  id: string;
  // 境界 int
  grade: string;
  // 体力 float
  hp: string;
  // 灵力 float
  mp: string;
  // 念力 float
  sp: string;
  // 体力恢复 float
  hpRestore: string;
  // 灵力恢复 float
  mpRestore: string;
  // 念力恢复 float
  spRestore: string;
  // 移动速度 float
  moveSpeed: string;
  // 攻击 float
  atk: string;
  // 防御 float
  def: string;
  // 刀资质 float
  basBlade: string;
  // 枪资质 float
  basSpear: string;
  // 剑资质 float
  basSword: string;
  // 拳资质 float
  basFist: string;
  // 掌资质 float
  basPalm: string;
  // 指资质 float
  basFinger: string;
  // 火灵根 float
  basFire: string;
  // 冰灵根 float
  basFroze: string;
  // 雷灵根 float
  basThunder: string;
  // 风灵根 float
  basWind: string;
  // 土灵根 float
  basEarth: string;
  // 木灵根 float
  basWood: string;
  // 物理免伤 float
  pfr: string;
  // 魔法免伤 float
  mfr: string;
  // 会心 float
  crit: string;
  // 护心 float
  guard: string;
  // 会心倍率 float
  critV: string;
  // 护心倍率 float
  guardV: string;
  // 技能威力 float
  skillDmg: string;
  // 怪物战力值 int
  power: string;
}

interface BattleValueScale {
  // ID int
  id: string;
  // 分组 int
  group: string;
  // 境界 int
  grade: string;
  // 颜色ID int
  color: string;
  // 缩放百分比 int
  scale: string;
}

interface BrokenAltar {
  // 层数ID int
  id: string;
  // 层数ID int
  layer: string;
  // 难度 int
  level: string;
  // 副本ID int
  dungeonBaseId: string;
  // 副本等级偏移 int
  dungeonLevelOffset: string;
  // 预览BOSS名称 string
  bossName: string;
  // 预览BOSS int[]
  bossID: string;
  // 奖励仙法ID int[]
  passiveMethodReward: string;
  // 道具掉落（填道具产出组ID） int[]
  produceGoods: string;
  // 场景特效 string
  sceneEffect: string;
}

interface BrokenAltarParamer {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface BrokenLevel {
  // id int
  id: string;
  // 难度 int
  level: string;
  // 精英怪附加效果 string
  monstEffects: string;
  // bOSS附加效果 string
  bossEffects: string;
  // 按钮文本 string
  btnText: string;
  // 按钮描述 string
  benDesc: string;
  // 需要上一难度通关数量 int
  needPassCount: string;
}

interface BuildingBook {
  // ID int
  id: string;
  // 产出使用的初始随机数最小值 int
  initMin: string;
  // 产出使用的初始随机数最大值 int
  initMax: string;
  // 每点名誉降低的随机数值 float
  randomReduce2: string;
  // 每次刷新时降低的随机数 int
  randomReduce: string;
  // 随机数最小值 int
  rangeMin: string;
  // 随机数最大值 int
  rangeMax: string;
  // 产出ID组 string
  output: string;
  // 产出ID组 string
  outputCrazy: string;
}

interface BuildingHospital {
  // ID int
  id: string;
  // 健康恢复Min int
  healthMin: string;
  // 健康恢复Max int
  healthMax: string;
  // 精力恢复Min int
  energyMin: string;
  // 精力恢复Max int
  energyMax: string;
  // 可移除气运 string
  badFeature: string;
  // 移除概率 int
  removeRate: string;
  // 消耗时间 int
  costDay: string;
}

interface BuildingMeditation {
  // ID int
  id: string;
  // 组ID int
  group: string;
  // 宗门地区 int
  areaID: string;
  // 经验值 int
  exp: string;
  // 消耗贡献 int
  costContribution: string;
}

interface BuildingStorageImmortal {
  // ID int
  id: string;
  // 触发条件 string
  condition: string;
  // 仙人立绘ID int
  dressID: string;
  // 进入剧情 string
  enterDrama: string;
  // 闲聊剧情 string
  chatDrama: string;
  // 触发概率 int
  probabilities: string;
  // 冷却 string
  cd: string;
  // 停留时长 string
  time: string;
}

interface ClothChange {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface ClothItem {
  // 道具ID int
  id: string;
  // 衣服ID int
  clothID: string;
  // 男女款 int
  sex: string;
  // 款式组 int
  style: string;
  // 衣服颜色 int
  color: string;
  // 默认模特 int
  modelID: string;
  // 道具消耗 int[][]
  itemCost: string;
  // 权重 int
  weight: string;
}

interface ClothShopBase {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface DefaultKeys {
  // ID int
  id: string;
  // 键位分组 int
  group: string;
  // 是否可以自定义 int
  custom: string;
  // 分组文本 string
  groupText: string;
  // 键位文本 string
  keyText: string;
  // 默认键位ID int
  keyID: string;
}

interface DevilDemonAbsorb {
  // ID int
  id: string;
  // 境界差距 int
  gradeRange: string;
  // 捕获血量百分比 int
  hpPervent: string;
  // 捕获概率百分比 int
  rate: string;
  // 血量减少1%增加的概率万分比 int
  addRate: string;
}

interface DevilDemonBase {
  // ID int
  id: string;
  // 吸收boss数量上限 int
  collectBossCount: string;
  // 历练壶妖小队数量 int
  LifeTeamCount: string;
  // 炼妖壶容量 int
  devilDemonCount: string;
}

interface DevilDemonDrama {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface DevilDemonDramaModelScale {
  // 壶灵ID int
  id: string;
  // 兽形缩放比例 float
  scale: string;
  // 兽形位置高度 float
  height: string;
  // Q版缩放比例 float
  scaleQ: string;
  // Q版位置高度 float
  heightQ: string;
}

interface DevilDemonParamer {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 float
  value: string;
}

interface DevilDemonTeam {
  // 玩家境界 int
  id: string;
  // 壶妖队伍数量 int
  teamCount: string;
  // 每个队伍最大妖数 int
  unitCount: string;
  // 壶妖背包上限 int
  potmonMaxCount: string;
}

interface DevilDemonWork {
  // 区域ID int
  id: string;
  // 历练时长（月份） string
  workMonth: string;
  // 历练基础产出ID（每个壶妖计算一次） int
  workdOutput: string;
}

interface DevilDemonWorkExp {
  // ID int
  id: string;
  // 历练区域 int
  workArea: string;
  // 壶妖境界 int
  workGrade: string;
  // 获得经验概率（百分比） int
  expRate: string;
  // 获得经验最小值 int
  minExp: string;
  // 获得经验最大值（每月） int
  maxExp: string;
}

interface DramaCondition {
  // ID int
  id: string;
  // 条件 string
  condition: string;
}

interface DramaDialogue {
  // ID int
  id: string;
  // UI类型 int
  uiType: string;
  // 剧情条件 string
  condition: string;
  // 权重 int
  weight: string;
  // 对话NPC左 int
  npcLeft: string;
  // 对话NPC右 int
  npcRight: string;
  // 说话者 int
  speaker: string;
  // 对话背景图 string
  backgroud: string;
  // 背景音乐 string
  soundsBg: string;
  // 音效 string
  soundsEffect: string;
  // 对话标题 string
  title: string;
  // 对话内容 string
  dialogue: string;
  // 打开作用 string
  openFunction: string;
  // 关闭作用 string
  function: string;
  // 对话选项 string
  options: string;
  // 下一对话 string
  nextDialogue: string;
}

interface DramaFunctionGroup {
  // ID int
  id: string;
  // 组ID int
  group: string;
  // 剧情条件 string
  condition: string;
  // 作用 string
  function: string;
  // 权重 int
  weight: string;
}

interface DramaModel {
  // ID int
  id: string;
  // 性别 int
  sex: string;
  // 帽子 string
  hat: string;
  // 头发 string
  hair: string;
  // 头发前 string
  hairFront: string;
  // 头 string
  head: string;
  // 眉毛 string
  eyebrows: string;
  // 眼睛 string
  eyes: string;
  // 鼻子 string
  nose: string;
  // 嘴 string
  mouth: string;
  // 身体 string
  body: string;
  // 背部 string
  back: string;
  // 眉心 string
  forehead: string;
  // 全脸 string
  faceFull: string;
  // 左脸 string
  faceLeft: string;
  // 右脸 string
  faceRight: string;
}

interface DramaNpc {
  // ID int
  id: string;
  // 类型 int
  type: string;
  // NPC名称 string
  name: string;
  // NPC半身像 string
  avatar: string;
  // 怪物ID int
  unitID: string;
  // 自定义模型 int
  modelID: string;
  // 是否显示血条UI int
  isHpUI: string;
  // 剧情ID string
  dramaId: string;
  // 是否可以重复对话 int
  repatDialogue: string;
}

interface DramaOptions {
  // 选项ID int
  id: string;
  // 剧情条件 string
  condition: string;
  // 是否改变颜色 int
  hue: string;
  // 是否隐藏按钮 int
  optionsHide: string;
  // 选项文本 string
  text: string;
  // 消耗 string
  cost: string;
  // 是否隐藏消耗物 int
  costHide: string;
  // 作用 string
  function: string;
  // 按钮点击后二次确认提示 string
  clickTip: string;
  // 下一对话 string
  nextDialogue: string;
}

interface DramaTrigger {
  // ID int
  id: string;
  // 类型 int
  type: string;
  // 触发参数 string
  trigger: string;
  // 条件 string
  condition: string;
  // 是否重复触发 int
  isRepeat: string;
  // 触发间隔 int
  triggerCD: string;
  // 设置NPC1 string
  setNPCA: string;
  // 设置NPC2 string
  setNPCB: string;
  // 剧情ID string
  dramaID: string;
  // 作用 string
  function: string;
}

interface DrawLotResult {
  // ID int
  id: string;
  // 抽签结果 string
  key: string;
  // 剧情ID string
  value: string;
}

interface DungeonBase {
  // 基础ID int
  id: string;
  // 副本类型 int
  type: string;
  // 副本类型文本 string
  typeDesc: string;
  // 副本分类 int[]
  className: string;
  // 副本名称 string
  name: string;
  // 副本简介 string
  info: string;
  // 特殊描述 string
  desc: string;
  // 战斗BOSS图片（非模型） string
  bossBG: string;
  // 战斗图标（大地图使用） string
  icon: string;
  // 怪物总战力点数 int
  totalPoint: string;
  // 普通怪物组ID string
  unitBaseID: string;
  // 精英怪物组ID string
  eliteBaseID: string;
  // BOSS组ID string
  bossBaseID: string;
  // 规模ID string
  scaleBaseID: string;
  // 房间尺寸ID string
  roomBaseID: string;
  // 场景ID string
  sceneBaseID: string;
  // 是否可以逃跑 int
  flee: string;
  // boss房间是否可以逃跑 int
  bossFlee: string;
  // 特殊房间 string
  roomSpecial: string;
  // 副本时间限制（秒） int
  timeLimit: string;
  // 胜利条件 int
  victory: string;
  // 失败条件 int
  fail: string;
  // 胜利条件说明 string
  victoryDesc: string;
  // 副本胜利作用 string
  winFunction: string;
  // 副本失败作用 string
  loseFunction: string;
  // 副本效果 string
  dungeonEffect: string;
  // 精英怪物波数 int
  eliteWave: string;
  // 是否有战斗准备 int
  setout: string;
  // 通关是否记录日志 int
  dungeonLog: string;
}

interface DungeonEffect1001 {
  // ID int
  id: string;
  // 副本ID int
  dungeonID: string;
  // 条件 string
  condition: string;
  // 设置NPC1 int[]
  setNPCA: string;
  // 房间类型 int
  type: string;
  // 房间索引 int
  roomIndex: string;
  // 组 int
  group: string;
  // 创建怪物波数后副本作用 string
  createMonstBattleFunction: string;
  // 进入房间后执行副本作用的前提条件 string
  battleFunctionCondition: string;
  // 进入房间后副本作用 string
  battleFunction: string;
  // 刷新类型 int
  updateUnitType: string;
  // 刷新参数1 string
  updateUnitValue1: string;
  // 刷新参数2 string
  updateUnitValue2: string;
  // 刷新参数3 string
  updateUnitValue3: string;
  // 刷新参数4 string
  updateUnitValue4: string;
  // 刷新参数5 string
  updateUnitValue5: string;
  // 组权重 int
  weight: string;
}

interface DungeonEffect1002 {
  // ID int
  id: string;
  // 房间索引 int
  roomIndex: string;
  // 基础属性变化 string
  baseAttr: string;
  // 怪物属性提升 string
  unitAttr: string;
  // BOSS属性提升 string
  bossAttr: string;
}

interface DungeonEffectBase {
  // 效果ID int
  id: string;
  // 效果类型 int
  type: string;
}

interface DungeonEnemyDesc {
  // ID int
  id: string;
  // 副本规模 int
  dungeonScale: string;
  // 怪物数量描述 string
  desc: string;
}

interface DungeonPowerDesc {
  // ID int
  id: string;
  // 战力倍数（BOSS+小怪/玩家） float
  powerTimes: string;
  // 显示文本 string
  desc: string;
}

interface DungeonRoomBase {
  // 规模ID int
  id: string;
  // 类型 int
  type: string;
  // 宽度 int
  width: string;
  // 高度 int
  height: string;
  // 权重 int
  weight: string;
  // 刷怪类型 int
  refreshType: string;
  // 刷怪参数 string
  refreshValue: string;
  // 可用传送点 string
  transfer: string;
}

interface DungeonScaleBase {
  // ID int
  id: string;
  // 规模组ID int
  scaleID: string;
  // 房间战力 int
  roomPoint: string;
  // 怪物波数 int
  waveNum: string;
  // 每波怪物战力递增 int
  wavePointGrow: string;
  // 精英怪物波数 int
  eliteWave: string;
  // 权重 int
  weight: string;
  // 类型 int
  type: string;
  // 场上怪物上限 int
  monsterNum: string;
}

interface DungeonSceneBase {
  // 场景ID int
  id: string;
  // 场景类型 int
  type: string;
  // 仙法是否限制镜头 int
  immortalLimitCamera: string;
  // 场景名称（MOD使用，不区分普通房间和boss房间） string
  name: string;
  // 背景颜色 string
  bgColor: string;
  // 地板 string
  floor: string;
  // 地板宽度 float
  floorWidth: string;
  // 场景装饰物 string
  decoration: string;
  // 外部装饰物 string
  edgeDecoration: string;
  // 战斗结束背景图 string
  bg: string;
  // 背景音乐 string
  sounds: string;
  // 环境音 string
  soundEffect: string;
  // 权重 int
  weight: string;
}

interface DungeonSceneObject {
  // ID int
  id: string;
  // 装饰物ID string
  decorationID: string;
  // 原点x int
  originX: string;
  // 原点y int
  originY: string;
  // 宽度 int
  width: string;
  // 高度 int
  height: string;
  // 模块数量（最小） float
  uniteNumMin: string;
  // 模块数量（最大） float
  uniteNumMax: string;
  // 模块最小间隔(像素) int
  uniteDistanceMin: string;
  // 模块元素数量（最小） int
  elementNumMin: string;
  // 模块元素数量（最大） int
  elementNumMax: string;
  // 模块内元素最小间隔(像素) int
  elementDistanceMin: string;
  // 优先依附元素 string
  priorAttachElement: string;
  // 依附最小距离(像素) int
  attachDistanceMin: string;
  // 依附最大距离(像素) int
  attachDistanceMax: string;
  // 是否受场景大小影响 int
  isScale: string;
  // 能否飞过 int
  barrierType: string;
}

interface DungeonSpecial47 {
  // ID int
  id: string;
  // 副本ID int
  dungeonId: string;
  // 施法条件ID string
  condition: string;
  // 光环ID int
  haloId: string;
  // 最小数量 int
  minQuantity: string;
  // 最大数量 int
  maxQuantity: string;
  // 光环刷新最小间隔 int
  minDelay: string;
  // 光环刷新最大间隔 int
  maxDelay: string;
  // 持续生成光环时间的单位 int
  holeTimeUnitType: string;
  // 持续生成光环时间(秒） int
  holoTime: string;
  // 位置 int
  posiType: string;
}

interface DungeonSpecial48 {
  // 副本ID int
  id: string;
  // 最小副本等级 int
  minDungeonLevel: string;
  // 最大副本等级 int
  maxDungeonLevel: string;
  // 产出ID string
  rewardID: string;
}

interface DungeonSpecial49 {
  // 副本ID int
  id: string;
  // 最小副本等级 int
  minLevel: string;
  // 最大副本等级 int
  maxLevel: string;
  // 产出ID string
  rewardID: string;
}

interface DungeonSpecial51 {
  // 副本ID int
  id: string;
  // 分支1剧情1 int
  accomplishDialogueA1: string;
  // 分支1剧情2 int
  accomplishDialogueA2: string;
  // 分支2剧情 int
  accomplishDialogueB: string;
  // 分支2选项1 int
  accomplishDialogueBOptions1: string;
  // 分支2选项2 int
  accomplishDialogueBOptions2: string;
  // 分支2任务ID string
  taskID2: string;
  // 分支3剧情1 int
  accomplishDialogueC1: string;
  // 分支3剧情2 int
  accomplishDialogueC2: string;
  // 分支3选项1 int
  accomplishDialogueCOptions1: string;
  // 分支3选项2 int
  accomplishDialogueCOptions2: string;
  // 分支3任务ID string
  taskID3: string;
  // 产出ID string
  rewardID: string;
  // 找仇人概率 int
  probabilityA: string;
  // 找良性关系概率 int
  probabilityB: string;
  // 找陌生人概率 int
  probabilityC: string;
  // 损失寿命最小值 int
  lifeDownMin: string;
  // 损失寿命最大值 int
  lifeDownMax: string;
  // 每个境界提升的损失 int
  damageUp: string;
}

interface DungeonSpecial56 {
  // 副本ID int
  id: string;
  // 互动增加亲密度 int
  intim: string;
  // 额外增加的亲密度 int
  intimAddEx: string;
  // 增加亲密度的互动次数 int
  intimCount: string;
  // 亲密互动最大次数剧情ID int
  intimCountDrama: string;
  // 亲密互动最大次数剧情ID2 int
  intimCountDrama2: string;
  // 最大互动次数 int
  intimCountMax: string;
  // 最大互动次数结束后的剧情ID string
  intimMaxDrama: string;
}

interface DungeonSpecial56Trigger {
  // ID int
  id: string;
  // 副本ID int
  dungeonId: string;
  // 触发类型 int
  type: string;
  // 触发参数 int
  value: string;
  // NPCID int
  npcConditionID: string;
  // 触发剧情 string
  dramaID: string;
  // 共享间隔组 int
  cdGroup: string;
  // 触发间隔 int
  triggerCD: string;
  // 重复触发 int
  repeatedly: string;
  // 触发概率万分比 int
  probabilityA: string;
}

interface DungeonSpecial60 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int[][]
  value: string;
}

interface DungeonSpecial61 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int[][]
  value: string;
}

interface DungeonSpecial65 {
  // ID int
  id: string;
  // 房间位置 int[]
  point: string;
  // 房间类型 int
  roomType: string;
  // 规模ID int
  scaleBaseID: string;
  // 尺寸ID int
  roomBaseID: string;
  // 场景ID int
  sceneBaseID: string;
  // 进攻方人数限制 int
  atkNumber: string;
  // 防守方人数限制 int
  defNumber: string;
  // 反攻的进攻方人数限制 int
  atkInNumber: string;
  // 反攻的防守方人数限制 int
  defInNumber: string;
  // 传送阵位置(左上右下) int[]
  passPositions: string;
}

interface DungeonSpecial73 {
  // ID int
  id: string;
  // 刷出怪物组 int
  monstGroupID: string;
  // 僚机增益效果组 string
  buffGroup: string;
  // 僚机减益效果组 string
  debuffGroup: string;
  // 僚机修正组 string
  prefixGroup: string;
  // 僚机对应颜色 string
  color: string;
}

interface DungeonSpecial74 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface DungeonSpecial75 {
  // ID int
  id: string;
  // 副本编号 int
  dungeonID: string;
  // BOSS编号 int
  bossID: string;
  // 侵蚀最大层数 int
  failEffLimit: string;
  // 恢复层数 int
  delEffLayers: string;
  // 特殊效果 string
  specEffects: string;
}

interface DungeonSpecial75System {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface DungeonSpecial76 {
  // ID int
  id: string;
  // 副本编号 int
  dungeonID: string;
  // 好感度奖励（切磋模式） int
  intimBonus: string;
  // 死亡倒计时 int
  deadTime: string;
  // 死亡倒计时结束效果（对仙鸡） string
  deadTimeEffects: string;
  // 死亡倒计时标题描述 string
  deadDesc: string;
  // 空置死亡倒计时 int
  noUnitsDeadTime: string;
}

interface DungeonSpecial77 {
  // ID int
  id: string;
  // 房间位置 int[]
  point: string;
  // 房间类型 int
  roomType: string;
  // 规模ID int
  scaleBaseID: string;
  // 尺寸ID int
  roomBaseID: string;
  // 场景ID int
  sceneBaseID: string;
}

interface DungeonSpecial80 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface DungeonSpecial83 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface DungeonSpecial84 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface DungeonSpecial85 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface DungeonSpecial86 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface DungeonSpecial87 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface DungeonSpecial88 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface DungeonSpecialRoom1 {
  // 宝箱ID int
  id: string;
  // 宝箱名称 string
  name: string;
  // 模型 string
  model: string;
  // 掉落ID string
  drops: string;
  // 效果ID string
  effect: string;
  // 开启宝箱后执行的剧情命令 string
  dramaFunc: string;
  // 开启宝箱后弹出剧情 string
  drama: string;
  // 开启宝箱后是否直接胜利 int
  isWin: string;
  // 宝箱旁怪物组 string
  unitGroup: string;
}

interface DungeonSpecialRoom30 {
  // ID int
  id: string;
  // 怪物组 string
  unitGroup: string;
  // NPC队伍 int
  unitType: string;
  // NPC string
  npc: string;
}

interface DungeonSpecialRoom31 {
  // ID int
  id: string;
  // NPC生成条件 string
  condition: string;
  // NPCID int
  npcConditionID: string;
  // NPC位置 float[][]
  npcPosi: string;
  // 副本作用 string
  battleFunction: string;
  // 进入触发剧情 string
  roomDramaID: string;
  // 互动触发剧情 string
  npcDramaID: string;
}

interface DungeonSpecialRoom77Parameters {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface DungeonSpecialRoomBase {
  // ID int
  id: string;
  // 生成条件 string
  condition: string;
  // 房间类型 int
  type: string;
  // 房间宽度 int
  width: string;
  // 房间高度 int
  height: string;
  // 场景ID string
  sceneID: string;
  // 进入房间对话ID string
  dramaID: string;
  // 小地图图标 string
  minMapIcon: string;
  // 权重 int
  weight: string;
}

interface DungeonSpecialRoomTrigger {
  // ID int
  id: string;
  // 副本ID int[]
  dungeonID: string;
  // 副本类型 int[]
  dungeonType: string;
  // 分类 int[]
  className: string;
  // 概率万分比 int
  probability: string;
  // 奇遇房间ID int[]
  dungeonSpecialRoomBaseID: string;
}

interface DungeonTrigger {
  // ID int
  id: string;
  // 副本类型 string
  dungeonType: string;
  // 副本ID int[]
  dungeonID: string;
  // 触发类型 int
  triggerType: string;
  // 触发参数 string
  triggerValue: string;
  // 触发条件 string
  condition: string;
  // 触发剧情作用 string
  dramaFunction: string;
  // 触发副本作用 string
  battleFunction: string;
  // 设置NPC1 string
  setNPCA: string;
  // 设置NPC2 string
  setNPCB: string;
  // 同一副本中重复触发 int
  dungeonIsRepeat: string;
  // 是否重复触发 int
  isRepeat: string;
  // 触发间隔（月） int
  triggerCD: string;
  // 组 int
  group: string;
  // 触发概率万分比 int
  probability: string;
  // 权重 int
  weight: string;
}

interface DungeonUnitBase {
  // 怪物组ID int
  id: string;
  // 怪物ID string
  unitID: string;
  // 自定义每个怪物出现权重 string
  unitIDWeight: string;
  // 分布范围 int
  range: string;
  // 刷怪数量 int
  num: string;
  // 战力花费 int
  pointCost: string;
  // 基础权重 int
  weightBase: string;
  // 进度权重 int
  weightGrow: string;
}

interface DungonSpecial74sub {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface ElderBase {
  // 神魂ID int
  id: string;
  // 名称 string
  name: string;
  // 装备效果ID string
  equipEffect: string;
  // 效果说明文本 string
  desc: string;
  // 副本ID int
  dungeonID: string;
  // 化气时可获得的属性 string
  growAttr: string;
  // 所属道具 int
  item: string;
  // 图标 string
  icon: string;
  // 神魂小立绘 string
  smallImage: string;
  // 神魂大立绘 string
  BigImage: string;
}

interface ElderCostItem {
  // 神魂等级 int
  id: string;
  // 消耗道具 int
  item: string;
  // 消耗灵石 int
  money: string;
  // 增加经验 int
  exp: string;
}

interface ElderGetExp {
  // ID int
  id: string;
  // 敌人境界 int
  grade: string;
  // 敌人类型 int
  type: string;
  // 获得经验 int
  exp: string;
}

interface ElderLevel {
  // ID int
  id: string;
  // 神魂ID int
  elderID: string;
  // 等级 int
  level: string;
  // 境界需求 int
  grade: string;
  // 经验需求 int
  exp: string;
  // 装备效果ID string
  equipEffect: string;
  // 效果说明文本 string
  desc: string;
}

interface FairyChickenBase {
  // 编号 int
  id: string;
  // 仙鸡名称 string
  name: string;
  // 品质索引 int
  level: string;
  // 怪物模型 int
  monstId: string;
  // 属性总价值MIN int
  individualMin: string;
  // 属性总价值MAX int
  individualMax: string;
  // 属性倾向 string
  specific: string;
  // 仙力点 int
  fairyPoint: string;
  // 装备槽 int
  slots: string;
  // 必杀技 int[]
  superSkill: string;
  // 必杀技蓄力值 int
  superSkillEnergy: string;
  // 专属技能库 int[]
  abilityPool: string;
  // 技能1概率-百分比 int
  ability1: string;
  // 技能2概率-百分比 int
  ability2: string;
  // 技能3概率-百分比 int
  ability3: string;
  // 技能4概率-百分比 int
  ability4: string;
  // 技能5概率-百分比 int
  ability5: string;
}

interface FairyChickenDress {
  // 部位ID int
  id: string;
  // 模型 string
  model: string;
  // 部位类型 string
  type: string;
  // 怪物ID int
  monstBaseId: string;
  // 纯色分类 int
  color: string;
}

interface FairyChickenRestraint {
  // 类型 int
  id: string;
  // 克制类型 string
  targetId: string;
  // 己方效果（满足克制） string
  effects: string;
  // 敌方效果（满足克制） string
  targetEffects: string;
}

interface FairyChickenSkillBase {
  // 底层表ID int
  id: string;
  // 技能动画 string
  skillAnim: string;
  // 触发类型 int
  triggerType: string;
  // 技能类型 int
  skillType: string;
  // 弹道级别 int
  missileLevel: string;
  // 仙法蓄力 int
  immortCharge: string;
  // 必杀蓄力 int
  superCharge: string;
  // 品质 int
  level: string;
  // 品质要求 int[]
  requirement: string;
  // 释放权重 int
  skillWeight: string;
  // 生成权重 int
  createWeight: string;
  // 额外期望收益 int
  extraExpect: string;
  // 单次额外期望收益 int
  extraExpectSingle: string;
  // 子弹时间缩放（万分比） int
  timeScale: string;
  // 子弹时间长度（毫秒数） int
  timeScaleDur: string;
}

interface FairyChickenStore {
  // ID int
  id: string;
  // 道具ID int
  item: string;
  // 分配组 int
  group: string;
  // 区域 int
  area: string;
  // 组内产出权重 int
  weight: string;
  // 每次刷新最小数量 int
  countMin: string;
  // 每次刷新最大数量 int
  countMax: string;
  // 兑换价格（仙羽） int
  price: string;
}

interface FairyChickenSystemBase {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 float
  value: string;
}

interface FairyLeagueParameters {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface FairyLeagueStoreParameters {
  // ID int
  id: string;
  // 键 string
  key: string;
  // 值 string
  value: string;
}

interface FairyLeagueStoreProp {
  // 道具ID int
  id: string;
  // 售卖类型 int
  type: string;
  // 价格 int
  price: string;
  // 数量 int
  num: string;
  // 出现层 int
  layer: string;
}

interface FairyLeagueTaskReward {
  // ID int
  id: string;
  // 任务ID int
  taskID: string;
  // 仙盟任务类型 int
  taskType: string;
  // 解锁进度 int
  progress: string;
}

interface FateFeature {
  // 气运 int
  id: string;
  // 出现条件 string
  condition: string;
  // 升级组 int
  group: string;
  // 互斥组 int
  mutexGroup: string;
  // 基础权重 int
  weightBase: string;
  // 品质权重 int
  weightQuility: string;
  // 最小境界 int
  gradeMin: string;
  // 最大境界 int
  gradeMax: string;
  // 故事插图 string
  picture: string;
  // 故事说明 string
  desc: string;
}

interface FateFeatureGroup {
  // ID int
  id: string;
  // 组ID int
  groupID: string;
  // 逆天改命id int
  fateFeatureID: string;
}

interface FateGradeRequire {
  // ID int
  id: string;
  // 来源说明文本 string
  desc: string;
}

interface FieldSkillBase {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface FieldSkillItem {
  // ID int
  id: string;
  // 属性类型 int
  basType: string;
  // 道力上限 int
  dpMax: string;
  // 蓄能时间 int
  chargeTime: string;
  // 技能消耗 int
  dpCost: string;
  // 持续时间 int
  duration: string;
  // 技能冷却 int
  cd: string;
  // 光环范围 int
  range: string;
}

interface FieldSkillType {
  // ID int
  id: string;
  // 属性类型 int
  basType: string;
  // 等级 int
  level: string;
  // 光环ID string
  halo: string;
  // 技能说明 string
  desc: string;
}

interface FortuitousEvent {
  // ID int
  id: string;
  // 奇遇名称 string
  name: string;
  // 奇遇类型 int
  type: string;
  // 触发事件 string
  trigger: string;
  // 需求条件 string
  condition: string;
  // 需求属性 string
  attribute: string;
  // 概率参数A float
  paraA: string;
  // 概率参数B float
  paraB: string;
  // 概率参数C float
  paraC: string;
  // 是否重复触发 int
  repeatedly: string;
  // 是否可以通过堪舆触发 int
  geomantic: string;
  // 触发间隔 int
  triggerCD: string;
  // 共享间隔组 int
  cdGroup: string;
  // 设置NPC1 string
  setNPCA: string;
  // 设置NPC2 string
  setNPCB: string;
  // 事件动作 string
  function: string;
  // 是否忽略正在打开的剧情 int
  breakDrama: string;
  // 特殊触发 string
  specialTrigger: string;
  // 触发分类 int[]
  className: string;
  // 优先级分组 int
  priority: string;
}

interface FortuitousParameters {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface GameDifficultyCrazy {
  // 境界ID int
  id: string;
  // 怪物属性 string
  unitAttr: string;
  // 精英怪额外强化 string
  eliteAttr: string;
  // BOSS额外强化 string
  bossAttr: string;
  // 精英怪对玩家召唤物的伤害百分比 int
  eliteDmgBrob: string;
  // BOSS对玩家召唤物的伤害百分比 int
  bossDmgBrob: string;
  // 精英怪对玩家法宝的伤害百分比 int
  eliteDmgArtifact: string;
  // BOSS对玩家法宝的伤害百分比 int
  bossDmgArtifact: string;
  // 精英怪对玩家壶妖的伤害百分比 int
  eliteDmgPotmon: string;
  // BOSS对玩家壶妖的伤害百分比 int
  bossDmgPotmon: string;
}

interface GameDifficultyValue {
  // 难度ID int
  id: string;
  // 大地图额外回复的格子总数量百分比 int
  refillBlockRequire: string;
  // 每个格子的属性数值上限百分比 int
  blockAttribute: string;
  // 整体物价百分比 int
  price: string;
  // 角色初始属性 string
  roleAttr: string;
  // 双鱼佩初始点数 int
  fishJade: string;
  // 怪物属性 string
  unitAttr: string;
  // 精英怪额外强化 string
  eliteAttr: string;
  // BOSS额外强化 string
  bossAttr: string;
  // 副本规模百分比 int
  totalPoint: string;
  // 死亡删档的境界条件（低于） int
  removeSave: string;
  // 重塑肉身需要的时间（分钟） int
  rebuildTime: string;
  // 难度解锁条件（难度_境界） string
  unlock: string;
  // 掉落倍率百分比 int
  dropRate: string;
}

interface GameItemCost {
  // ID int
  id: string;
  // 消耗组ID int
  costID: string;
  // 境界 int
  grade: string;
  // 道具ID int
  item: string;
  // 道具类型 int
  itemType: string;
  // 道具数量 int
  num: string;
  // 属性类型 string
  attrType: string;
  // 属性消耗值 int
  attrValue: string;
  // 强制消耗 int
  forceCost: string;
}

interface GameItemReward {
  // ID int
  id: string;
  // 产出组ID int
  rewardID: string;
  // 条件 string
  condition: string;
  // 道具类型 int
  itemType: string;
  // 道具ID int
  item: string;
  // 道具数量 float
  numMin: string;
  // 道具数量 float
  numMax: string;
  // 小组 int
  group: string;
  // 首次掉落组 int
  firstRewardGroup: string;
  // 掉落时最大叠加数量 int
  layMax: string;
  // 是否不受到幸运影响 int
  noLuckAffect: string;
  // 权重 string
  weight: string;
}

interface GameItemRewardAbilitySuit {
  // id int
  id: string;
  // 产出组ID int
  rewardID: string;
  // 条件 string
  condition: string;
  // 套装ID int
  suitID: string;
  // 道具品质要求 int
  level: string;
  // 权重 int
  weight: string;
  // 出现概率 int
  rate: string;
}

interface GameItemRewardArtifact {
  // id int
  id: string;
  // 产出组ID int
  rewardID: string;
  // 条件 string
  condition: string;
  // 法宝ID int
  artifactID: string;
  // 指定境界 int
  grade: string;
  // 属性最小百分比 int
  statusPercentMin: string;
  // 属性最大百分比 int
  statusPercentMax: string;
  // 权重 int
  weight: string;
}

interface GameKeyCode {
  // ID int
  id: string;
  // 文本 string
  keyText: string;
  // 是否可以作为自定义按键 int
  custon: string;
}

interface GameLoadScenesBG {
  // ID int
  id: string;
  // 背景 string
  bg: string;
}

interface GameLoadScenesTip {
  // ID int
  id: string;
  // 描述 string
  text: string;
}

interface GameParameter {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface GameSettingCursor {
  // ID int
  id: string;
  // 地图鼠标 string
  cursorMap: string;
  // 地图鼠标高亮 string
  cursorMapLed: string;
  // 战斗鼠标 string
  cursorBattle: string;
  // 战斗鼠标高亮 string
  cursorBattleLed: string;
}

interface GameUnitDifficulty {
  // ID int
  id: string;
  // 怪物ID string
  monsterID: string;
  // 指定难度 int
  diff: string;
  // 境界ID int
  grade: string;
  // 怪物属性 string
  unitAttr: string;
}

interface GeomancyEvent {
  // 序号 int
  id: string;
  // 风水事件条件 string
  eventCondition: string;
  // 风水图ID int
  itemGroup: string;
  // 事件ID int
  eventId: string;
  // 生成风水事件间隔（月） int
  cd: string;
  // 权重 int
  weight: string;
}

interface GeomancyGame {
  // 编号 int
  id: string;
  // 分组 int
  group: string;
  // 难度 int
  difficult: string;
  // 移动风水盘 int
  targetCircle: string;
  // 关联风水盘 int
  effectCircle: string;
  // 关联移动步数 int
  direction: string;
  // 模拟操作轮次 int
  operateCount: string;
  // 模拟每轮最小次数 int
  operateRotateMin: string;
  // 模拟每轮最大次数 int
  operateRotateMax: string;
  // 步数限制 int
  limitedStpes: string;
}

interface GeomancyQuantity {
  // ID int
  id: string;
  // 生成数量 int
  quantity: string;
  // 回合 int
  time: string;
}

interface GeomancyResult {
  // 序号 int
  id: string;
  // 成功or失败 int
  gameResult: string;
  // 衔接的剧情ID int
  resultDrama: string;
  // 权重 int
  weight: string;
}

interface GeomancySkill {
  // ID int
  id: string;
  // 技能组 int
  group: string;
  // 技能图标 string
  icon: string;
  // 境界 int
  grade: string;
  // 资质类型 string
  basType: string;
  // 资质要求 int
  basRequire: string;
  // 区域 string
  area: string;
  // 类型 int
  type: string;
  // 指定区域参数 string
  effect1: string;
  // 其他区域参数 string
  effect2: string;
  // 描述 string
  desc: string;
  // 提示文本 string
  remind: string;
}

interface GeomancyTalent {
  // 序号 int
  id: string;
  // 风水图ID int
  itemGroup: string;
  // 最低风水资质 int
  eventCondition: string;
  // 额外范围可视概率(万分比) int
  horizonPercent: string;
  // 视野扩大MIN(总面积万分比) int
  horizonMin: string;
  // 视野扩大MAX(总面积万分比) int
  horizonMax: string;
}

interface GhostMountainBossProduce {
  // ID int
  id: string;
  // 水晶条件 int[][]
  crystalCondition: string;
  // 副本ID int
  targetDungeon: string;
  // 怪物ID int[]
  monsterID: string;
  // 产出概率 int
  prodRate: string;
  // 产出最小数量 int
  prodNumMin: string;
  // 产出最大数量 int
  prodNumMax: string;
}

interface GhostMountainSalvage {
  // ID int
  id: string;
  // 晶石等级 int
  crystalLv: string;
  // 副本ID int[]
  targetDungeons: string;
  // 注入材料 int[]
  injectMaterials: string;
  // 失败概率万分比 int
  failure: string;
  // 道具产出 int[][]
  propGen: string;
  // 怪物产出 int[][]
  monstGen: string;
  // 宝箱产出 string[][]
  chestGen: string;
  // 抽卡石产出概率 int
  cardStoneGenProbability: string;
  // 是否强制产出 int
  forceProduce: string;
  // 失败掉落等级 int
  dropLv: string;
}

interface GhostMountainSalvagePillar {
  // ID int
  id: string;
  // 副本ID int
  dungeonID: string;
  // 消耗道具 int
  costItemID: string;
  // 怪物ID int[]
  battleUnit: string;
  // 持续施加效果 int[]
  continueAddBattleEffect: string;
  // 指定阀值施加效果 int[][]
  assignAddBattleEffect: string;
  // 指定数量修改效果参数 int[][]
  assignCountAlterBattleEffect: string;
  // 票档 int[]
  costItemLevel: string;
}

interface GodEyeBaseCost {
  // 境界 int
  id: string;
  // 耗费 int
  cost: string;
}

interface GodEyeExtraCost {
  // 次数 int
  id: string;
  // 耗费 int
  cost: string;
}

interface GodEyePar {
  // id int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface GodEyeSkills {
  // 技能ID int
  id: string;
  // 技能名称 string
  name: string;
  // 技能说明 string
  desc: string;
  // 监听技能ID int[]
  skillID: string;
  // 冷却时间 string
  cd: string;
  // 灵力消耗 string
  mpCost: string;
  // 附加效果ID string
  skillEffect: string;
  // 修正说明 string
  prefixDesc: string;
  // BOSS怪物ID int
  bossID: string;
}

interface HerdBattle77Log {
  // id int
  id: string;
  // 事件icon string
  icon: string;
  // 事件类型 int
  type: string;
  // 事件描述 string
  desc: string;
}

interface HerdNPCNameFirst {
  // ID int
  id: string;
  // 名字（姓） string
  name: string;
  // 繁体|支持空字符串 string
  tc: string;
  // 英文|支持空字符串 string
  en: string;
}

interface HerdNpcClothes {
  // ID int
  id: string;
  // 女衣服类型 string
  womanClothesType: string;
  // 女鼻子 string
  womanNose: string;
  // 女头部 string
  womanHead: string;
  // 女全脸 string
  womanFullFace: string;
  // 女眼睛 string
  womanEye: string;
  // 女嘴巴 string
  womanMouth: string;
  // 男鼻子 string
  manNose: string;
  // 男头部 string
  manHead: string;
  // 男全脸 string
  manFullFace: string;
  // 男眼睛 string
  manEye: string;
  // 男嘴巴 string
  manMouth: string;
  // 男衣服类型 string
  manClothesType: string;
}

interface HerdNpcFortuitous {
  // ID int
  id: string;
  // 兽潮NpcID string
  setNPCA: string;
  // 普通NpcID string
  setNPCB: string;
  // 调用剧情命令 string
  function: string;
  // 条件 string
  condition: string;
  // 权重 int
  weight: string;
  // 月结ID string
  monthTipID: string;
}

interface HerdNpcLevel {
  // ID int
  id: string;
  // 等级 int
  level: string;
  // 名称 string
  gradeName: string;
  // 需求经验 int
  exp: string;
  // 年龄随机min int
  ageMin: string;
  // 年龄随机max int
  ageMax: string;
  // 寿命随机min int
  lifeMin: string;
  // 寿命随机max int
  lifeMax: string;
  // 声望增加min int
  reputationMin: string;
  // 声望增加max int
  reputationMax: string;
  // 体力最小 int
  hpMin: string;
  // 体力最大 int
  hpMax: string;
  // 灵力最小 int
  mpMin: string;
  // 灵力最大 int
  mpMax: string;
  // 念力最小 int
  spMin: string;
  // 念力最大 int
  spMax: string;
  // 攻击最小 int
  atkMin: string;
  // 攻击最大 int
  atkMax: string;
  // 防御最小 int
  defMin: string;
  // 防御最大 int
  defMax: string;
  // 会心最小 int
  critMin: string;
  // 会心最大 int
  critMax: string;
  // 护心最小 int
  guardMin: string;
  // 护心最大 int
  guardMax: string;
  // 会心倍率最小 int
  critVMin: string;
  // 会心倍率最大 int
  critVMax: string;
  // 护心倍率最小 int
  guardVMin: string;
  // 护心倍率最大 int
  guardVMax: string;
  // 资质最小 int
  basMin: string;
  // 资质最大 int
  basMax: string;
  // 道点最小 int
  abilityPointMin: string;
  // 道点最大 int
  abilityPointMax: string;
  // 物免魔免增加min int
  freeMin: string;
  // 物免魔免增加max int
  freeMax: string;
  // 基础战功奖励 int
  basereward: string;
  // 击杀NPC数量战功倍率 int
  rewardScale: string;
}

interface HerdNpcParameters {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface HerdNpcSkill {
  // 技能ID int
  id: string;
  // 技能类型 int
  skillType: string;
  // 物理威力 string
  basePhycicalDmg: string;
  // 魔法威力 string
  baseMagicDmg: string;
  // 冷却时间 string
  cd: string;
}

interface HerdWakingAttr {
  // ID int
  id: string;
  // 体力 int
  hp: string;
  // 灵力 int
  mp: string;
  // 念力 int
  sp: string;
  // 体力恢复 int
  hpRestore: string;
  // 灵力恢复 int
  mpRestore: string;
  // 念力恢复 int
  spRestore: string;
  // 移动速度 int
  moveSpeed: string;
  // 攻击 int
  atk: string;
  // 防御 int
  def: string;
  // 刀资质 int
  basBlade: string;
  // 枪资质 int
  basSpear: string;
  // 剑资质 int
  basSword: string;
  // 拳资质 int
  basFist: string;
  // 掌资质 int
  basPalm: string;
  // 指资质 int
  basFinger: string;
  // 火灵根 int
  basFire: string;
  // 冰灵根 int
  basFroze: string;
  // 雷灵根 int
  basThunder: string;
  // 风灵根 int
  basWind: string;
  // 土灵根 int
  basEarth: string;
  // 木灵根 int
  basWood: string;
  // 物理免伤 int
  pfr: string;
  // 魔法免伤 int
  mfr: string;
  // 会心 int
  crit: string;
  // 护心 int
  guard: string;
  // 会心倍率 int
  critV: string;
  // 护心倍率 int
  guardV: string;
}

interface Hunt {
  // 难度 int
  id: string;
  // 游戏时长 int
  gameDuration: string;
  // 鹿出现最小间隔 float
  intervalMin: string;
  // 鹿出现最大间隔 float
  intervalMax: string;
  // 鹿出现最小持续时间 float
  durationMin: string;
  // 鹿出现最大持续时间 float
  durationMax: string;
  // 动画倍速 float
  animSpeedMultiplier: string;
  // 获胜条件 int
  winCondition: string;
  // 失手惩罚时间 float
  penaltyTime: string;
  // 胜利剧情 string
  winDialogueID: string;
  // 失败剧情 int
  loseDialogueID: string;
}

interface ImmortalHuman {
  // 基础id int
  id: string;
  // 名字 string
  name: string;
  // 描述 string
  desc: string;
  // 主动技能 string
  activeSkills: string;
  // 被动技能 string
  passiveSkills: string;
  // 仙法收集ID string
  collectID: string;
  // 仙祠建筑 int
  buildId: string;
  // 立绘大 string
  IconBig: string;
  // 立绘小头像 string
  IconSmall: string;
}

interface ImmortalMethod {
  // 基础ID int
  id: string;
  // 仙法名称 string
  name: string;
  // 技能图标 string
  icon: string;
  // 仙法蓄力时间 string
  castTime: string;
  // 仙法中断CD int
  stopTime: string;
  // 仙法蓄能时间（cd） string
  cardColddown: string;
  // 仙法费用 int
  cardCost: string;
  // 真实释放的等待时间 int
  loadTime: string;
  // 技能ID string
  skillID: string;
  // 仙法简介 string
  info: string;
  // 特殊效果介绍 string
  desc: string;
  // 获取途径文本说明 string
  getText: string;
  // 镜头高度 float
  cameraHight: string;
  // 播放特效 string
  effectAnim: string;
  // 进入动画时间 int
  inAnim: string;
  // 技能放完后退出异空间的时间 int
  animTime: string;
  // 退出动画 string
  fadeAnim: string;
  // 开始释放技能施加效果 string
  inEffect: string;
  // 结束技能施加效果 string
  fadeEffect: string;
  // 立绘大 string
  IconBig: string;
}

interface ImmortalMethodBase1 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface ImmortalMethodSet {
  // 基础ID int
  id: string;
  // 使用主仙法ID int
  immortalMethodId: string;
  // 使用被动仙卡ID string
  passiveMethodId: string;
  // 异空间特效、仙法名字、仙人立绘、镜头缩放开关 int
  effectOpen: string;
}

interface ImmortalPoint {
  // 基础id int
  id: string;
  // 触发类型 int
  type: string;
  // 触发事件 string
  trigger: string;
  // 需求条件 string
  condition: string;
  // 是否重复触发 int
  repeatedly: string;
  // 触发CD（月） int
  interval: string;
  // 共享间隔组 int
  cdGroup: string;
  // 仙力点数增加 int
  cost: string;
  // 触发后执行的命令 string
  function: string;
}

interface ImmortalPosition {
  // 基础id int
  id: string;
  // 仙法收集数 int
  cardsCollected: string;
  // 仙法槽位数 int
  slotPosition: string;
}

interface ImmortalSlot {
  // 基础id int
  id: string;
  // 境界值 int
  grade: string;
  // 小境界值 int
  phase: string;
  // 仙法槽位数 int
  slotNum: string;
}

interface ImmortalStore {
  // ID int
  id: string;
  // 产出ID int
  rewardID: string;
  // 价格 int
  price: string;
  // 权重(万分比) int
  weight: string;
  // 只出现一次 int
  onlyOne: string;
}

interface ImmortalUISetting {
  // ID int
  id: string;
  // key string
  key: string;
  // 剧情ID int
  value: string;
}

interface ItemBook {
  // ID int
  id: string;
  // UI类型 int
  type: string;
  // 文本描述 string
  desc: string;
  // 标题 string
  title: string;
}

interface ItemChest {
  // ID int
  id: string;
  // 掉落ID int[][]
  outputID: string;
  // 最大次数 int
  count: string;
  // 最大价值 int
  value: string;
  // 特效等级 int
  effectLevel: string;
  // 一次最多能开几个 int
  maxOpenCount: string;
}

interface ItemChestDrops {
  // ID int
  id: string;
  // 掉落ID int
  dropID: string;
  // 道具ID int
  itemID: string;
  // 道具数量 int
  number: string;
  // 权重 int
  weight: string;
}

interface ItemFate {
  // ID int
  id: string;
  // 修改境界 int[]
  modifyGrade: string;
  // 需求境界 int
  requireGrade: string;
}

interface ItemFunction {
  // ID int
  id: string;
  // 条件 string
  condition: string;
  // 作用 string
  function: string;
  // 使用后是否消耗 int
  consume: string;
  // 是否可叠加使用 int
  multiUse: string;
}

interface ItemGloom {
  // ID int
  id: string;
  // 条件 string
  condition: string;
  // 作用 string
  function: string;
  // 条件不满足时命令 string
  failFunction: string;
}

interface ItemHerbal {
  // ID int
  id: string;
  // 材料类型 int
  effectType: string;
  // 作用参数ID string
  effectValue: string;
}

interface ItemHobby {
  // ID int
  id: string;
  // 作用参数 string
  effectValue: string;
  // 兴趣ID int
  hobbyID: string;
  // 品质 int
  level: string;
  // 是否有耐久度 int
  lasting: string;
}

interface ItemHorse {
  // ID int
  id: string;
  // 作用参数 string
  effectValue: string;
  // 特殊效果 string
  feature: string;
  // 模型 string
  model: string;
  // 大地图行走时的声音 string
  mapMoveSounds: string;
  // 背景故事描述 string
  desc: string;
  // 境界需求 int
  grade: string;
}

interface ItemImmortalPoint {
  // ID int
  id: string;
}

interface ItemLevelDesc {
  // ID int
  id: string;
  // 品质描述 string
  desc: string;
}

interface ItemMapSearch {
  // ID int
  id: string;
  // 可探查区域 string
  areaID: string;
  // 探查范围 int
  range: string;
  // 探查类型 int
  type: string;
  // 探查参数 string
  value: string;
  // 探查事件ID string
  searchEventID: string;
}

interface ItemPill {
  // ID int
  id: string;
  // 作用类型 int
  effectType: string;
  // 可使用（战斗外） int
  operUse: string;
  // 可装备（战斗内） int
  operEquip: string;
  // 获得后是否自动使用（战斗内外通用） int
  autoUse: string;
  // 作用参数 string
  effectValue: string;
  // 需求资质类型 string
  basType: string;
  // 需求资质数值 int
  basRequire: string;
  // 道具境界 int
  grade: string;
  // 使用消耗念力 int
  spCost: string;
  // 使用时忽略境界限制 int
  useIgnoreGrade: string;
  // 使用冷却 int
  applyCD: string;
  // 冷却组 int
  cdGroup: string;
  // 丹药类型 int
  pillType: string;
  // 战斗可携带数量 int
  carryCount: string;
  // 不可叠加使用 int
  noUseTogether: string;
  // 消耗天数 string
  cost: string;
  // 战斗准备界面是否排除 int
  battleUIHide: string;
  // 是否不消耗 int
  consume: string;
}

interface ItemPillSpRequire {
  // ID int
  id: string;
  // 道具境界 int
  grade: string;
  // 念力需求 int
  spRequire: string;
}

interface ItemProps {
  // 物品ID int
  id: string;
  // 物品名称 string
  name: string;
  // 物品类型 int
  type: string;
  // 物品分类 int
  className: string;
  // 是否隐藏 int
  hide: string;
  // 玩家背包是否强制显示 int
  playerShow: string;
  // NPC背包是否强制显示 int
  npcShow: string;
  // 物品图标 string
  icon: string;
  // 物品品质 int
  level: string;
  // 物品说明 string
  desc: string;
  // 是否叠加 int
  isOverlay: string;
  // 是否允许丢弃 int
  drop: string;
  // 死亡掉落 int
  dieDrop: string;
  // 是否可拍卖 int
  auction: string;
  // 出售价格 int
  sale: string;
  // 道具价值 int
  worth: string;
  // 可否翻倍产出 int
  isMultiDrop: string;
}

interface ItemRarityMaterials {
  // ID int
  id: string;
  // 作用参数 string
  effect: string;
  // 突破境界 int
  grade: string;
  // 增加护宗神兽饥饿值 int
  hunger: string;
}

interface ItemSchoolRelocateFlag {
  // ID int
  id: string;
  // 事件id int
  eventId: string;
  // 距离其他宗门领地范围 int
  disTerritoryRange: string;
  // 距离任意建筑范围 int
  disBuildRange: string;
  // 危险区域间距 int
  areaSpacing: string;
  // 飞舟建造的剧情id int
  buildDramaId: string;
  // 飞舟开始剧情id int
  moveStartDramaId: string;
  // 飞舟移动完成的剧情id int
  moveDramaId: string;
  // 距离地图边缘最大X轴 int
  maxOffsetX: string;
  // 距离地图边缘最大Y轴 int
  maxOffsetY: string;
}

interface ItemSkill {
  // ID int
  id: string;
  // 技能类型 int
  skillType: string;
  // 境界 int
  grade: string;
  // 品质 int
  level: string;
  // 售价（城主令） int
  price: string;
  // 售价（灵石） int
  cost: string;
  // 是否可拍卖 int
  auction: string;
  // 宗门秘籍售价（贡献） int
  contribution: string;
  // 道具价值 int
  worth: string;
  // 出售价格（灵石） int
  sale: string;
}

interface ItemTerrain {
  // ID int
  id: string;
  // 消耗 string
  cost: string;
  // 需求地形类型 string
  terrainType: string;
  // 返回文本 string
  failTips: string;
  // 读条图标 string
  awaitIcon: string;
  // 读条时间 int
  awaitTime: string;
  // 触发条件 string
  condition: string;
  // 触发间隔 int
  triggerCD: string;
  // 触发概率万分比 int
  probability: string;
  // 设置NPC1 string
  setNPCA: string;
  // 设置NPC2 string
  setNPCB: string;
  // 作用 string
  function: string;
}

interface ItemTransfer {
  // ID int
  id: string;
  // 作用类型 string
  effectType: string;
  // 可传送区域 string
  area: string;
}

interface ItemTreasureMap {
  // ID int
  id: string;
  // 事件ID int
  eventID: string;
  // 地点类型 int
  pointType: string;
  // 地点参数 string
  pointValues: string;
  // 消耗 string
  cost: string;
}

interface ItemType {
  // 类型ID int
  id: string;
  // 所属大类 int
  type: string;
  // UI显示分类 string
  uiLabel: string;
  // 类型名称 string
  name: string;
  // 排序 int
  sort: string;
}

interface LetterBase {
  // ID int
  id: string;
  // 发信人 string
  sendName: string;
  // 显示ICON string
  icon: string;
  // 信件标题 string
  title: string;
  // 信件内容 string
  content: string;
}

interface LocalText {
  //   int
  id: string;
  // 文本索引 string
  key: string;
  // 中文|支持空字符串 string
  ch: string;
  // 繁体|支持空字符串 string
  tc: string;
  // 英文|支持空字符串 string
  en: string;
}

interface LogLocalVocal {
  // ID int
  id: string;
  // 角色日志表id int
  logLocalID: string;
  // 语音 string
  vocal: string;
}

interface MakePillFormula {
  // ID int
  id: string;
  // 丹方名称 string
  name: string;
  // 丹方境界 int
  grade: string;
  // 消耗精力 int
  costEnergy: string;
  // 要求炼丹资质 int
  basPil: string;
  // 必要材料 string
  herbalRequier: string;
  // 必要材料需求数量 string
  herbalRequierCount: string;
  // 火 int
  huo: string;
  // 水 int
  shui: string;
  // 雷 int
  lei: string;
  // 风 int
  feng: string;
  // 土 int
  tu: string;
  // 木 int
  mu: string;
  // 阴 int
  yin: string;
  // 阳 int
  yan: string;
  // 一品丹药 string
  pillA: string;
  // 二品丹药 string
  pillB: string;
  // 三品丹药 string
  pillC: string;
  // 四品丹药 string
  pillD: string;
  // 五品丹药 string
  pillE: string;
  // 六品丹药 string
  pillF: string;
  // 标准产量 int
  outputNum: string;
  // 是否是丹宗丹方 int
  isExFormula: string;
  // 投放条件 string
  outPutCondition: string;
  // 丹方组 int
  group: string;
  // 下一个等级的丹方 int
  nextPillFormulaID: string;
}

interface MakePillFurnace {
  // ID int
  id: string;
  // 丹炉名称 string
  name: string;
  // 资质需求 int
  basRequire: string;
  // 可放入材料 int
  siteNum: string;
  // 初始耐久度（使用效果配置） string
  effectValue: string;
  // 图标 string
  icon: string;
  // 丹炉技能 string
  skills: string;
}

interface MakePillSkill {
  // ID int
  id: string;
  // 技能名称 string
  name: string;
  // 技能说明 string
  desc: string;
  // 触发条件 string
  trigger: string;
  // 技能效果 string
  effect: string;
  // 是否隐藏 int
  isHide: string;
}

interface MapData {
  // ID int
  id: string;
  // 名字类型 int
  type: string;
  // 参数 string
  value: string;
}

interface MapPosition {
  // ID int
  id: string;
  // 地图区域 string
  areaID: string;
  // 地形类型 int
  posiType: string;
  // 地形ID string
  posiID: string;
  // 条件 string
  condition: string;
  // 建筑索引 int
  buildingIndex: string;
}

interface ModCondition {
  // ID int
  id: string;
  // 函数key string
  key: string;
  // 是否开放 int
  isShow: string;
  // 需要传入NPC才能使用 string[]
  requireNPC: string;
  // 标题 string
  title: string;
  // 参数1 string
  value1: string;
  // 参数2 string
  value2: string;
  // 参数3 string
  value3: string;
  // 参数4 string
  value4: string;
  // 参数5 string
  value5: string;
  // 参数6 string
  value6: string;
  // 参数7 string
  value7: string;
  // 参数8 string
  value8: string;
  // 参数1名称 string
  value1Name: string;
  // 参数2名称 string
  value2Name: string;
  // 参数3名称 string
  value3Name: string;
  // 参数4名称 string
  value4Name: string;
  // 参数5名称 string
  value5Name: string;
  // 参数6名称 string
  value6Name: string;
  // 参数7名称 string
  value7Name: string;
  // 参数8名称 string
  value8Name: string;
  // 参数1描述 string
  value1Desc: string;
  // 参数2描述 string
  value2Desc: string;
  // 参数3描述 string
  value3Desc: string;
  // 参数4描述 string
  value4Desc: string;
  // 参数5描述 string
  value5Desc: string;
  // 参数6描述 string
  value6Desc: string;
  // 参数7描述 string
  value7Desc: string;
  // 参数8描述 string
  value8Desc: string;
}

interface ModEnum {
  // ID int
  id: string;
  // 枚举标题 string
  title: string;
  // 枚举描述 string
  desc: string;
  // 类型值 string[]
  types: string;
  // 类型名称 string[]
  typesName: string;
  // 类型注释 string[]
  typesDesc: string;
  // 是否重定义宽度 int
  enumWidth: string;
}

interface ModFunction {
  // ID int
  id: string;
  // 函数key string
  key: string;
  // 是否开放 int
  isShow: string;
  // 需要传入NPC才能使用 string[]
  requireNPC: string;
  // 标题 string
  title: string;
  // 参数1 string
  value1: string;
  // 参数2 string
  value2: string;
  // 参数3 string
  value3: string;
  // 参数4 string
  value4: string;
  // 参数5 string
  value5: string;
  // 参数6 string
  value6: string;
  // 参数7 string
  value7: string;
  // 参数8 string
  value8: string;
  // 参数1名称 string
  value1Name: string;
  // 参数2名称 string
  value2Name: string;
  // 参数3名称 string
  value3Name: string;
  // 参数4名称 string
  value4Name: string;
  // 参数5名称 string
  value5Name: string;
  // 参数6名称 string
  value6Name: string;
  // 参数7名称 string
  value7Name: string;
  // 参数8名称 string
  value8Name: string;
  // 参数1描述 string
  value1Desc: string;
  // 参数2描述 string
  value2Desc: string;
  // 参数3描述 string
  value3Desc: string;
  // 参数4描述 string
  value4Desc: string;
  // 参数5描述 string
  value5Desc: string;
  // 参数6描述 string
  value6Desc: string;
  // 参数7描述 string
  value7Desc: string;
  // 参数8描述 string
  value8Desc: string;
}

interface ModHorseModel {
  // ID int
  id: string;
  // 模型 string
  model: string;
  // 背景模型类型 string
  animBG: string;
  // 背景模型位置 string
  posiBG: string;
  // 背景模型缩放 float
  scaleBG: string;
  // 地图模型类型 string
  animMap: string;
  // 地图模型位置 string
  posiMap: string;
  // 地图模型缩放 float
  scaleMap: string;
  // 地图玩家模型位置 string
  posiPlayer: string;
  // 地图玩家动画名 string
  playerHorseAnim: string;
  // 坐骑特效 string
  effectMap: string;
  // 坐骑特效层级 int
  effectMapLayer: string;
  // 坐骑特效位置 string
  posiEffectMap: string;
  // 坐骑特效缩放 float
  scaleEffectMap: string;
  // 背景特效 string
  effectBG: string;
  // 背景特效层级 int
  effectBGLayer: string;
  // 背景特效位置 string
  posiEffectBG: string;
  // 背景特效缩放 float
  scaleEffectBG: string;
}

interface ModNpcAddWorld {
  // ID int
  id: string;
  // 初始位置类型 int
  pointType: string;
  // 初始位置参数 string
  pointValue: string;
  // 境界 int
  grade: string;
  // 性别 int
  sex: string;
  // 年龄 int
  age: string;
  // 寿命 int
  life: string;
  // 姓 string
  name1: string;
  // 名 string
  name2: string;
  // 先天气运 int[]
  bornLuck: string;
  // 内在性格 int
  inTrait: string;
  // 外在性格 int[]
  outTrait: string;
  // 自定义男模型 int
  dressMan: string;
  // 自定义女模型 int
  dressWoman: string;
  // 与其他单位的关系 int[]
  unitRelationType: string;
  // 关系 int[]
  unitRelationValue: string;
  // 与其他单位初始化亲密度 int[]
  intim: string;
  // 自定义属性 string[][]
  arrt: string;
  // 加入的宗门名字 string
  joinSchoolName: string;
  // 加入的宗门职位 int
  joinSchoolPostType: string;
  // 是否是天骄 int
  isHeart: string;
  // 是否永生 int
  isNotDie: string;
  // 后天气运 int[]
  addLuck: string;
}

interface ModRoleEffectType1 {
  // ID int
  id: string;
  // 属性Key string
  attrKey: string;
  // 属性文本 string
  attrText: string;
  // 属性描述 string
  attrDesc: string;
  // 支持的效果类型 int[]
  types: string;
}

interface ModRoleEffectType2 {
  // ID int
  id: string;
  // 属性Key string
  attrKey: string;
  // 属性文本 string
  attrText: string;
  // 属性描述 string
  attrDesc: string;
}

interface ModRoleEffectType3 {
  // ID int
  id: string;
  // 函数key string
  key: string;
  // 是否开放 int
  isShow: string;
  // 支持的效果类型 int[]
  roleEffectTypes: string;
  // 标题 string
  title: string;
  // 参数1 string
  value1: string;
  // 参数2 string
  value2: string;
  // 参数3 string
  value3: string;
  // 参数4 string
  value4: string;
  // 参数5 string
  value5: string;
  // 参数6 string
  value6: string;
  // 参数7 string
  value7: string;
  // 参数8 string
  value8: string;
  // 参数1名称 string
  value1Name: string;
  // 参数2名称 string
  value2Name: string;
  // 参数3名称 string
  value3Name: string;
  // 参数4名称 string
  value4Name: string;
  // 参数5名称 string
  value5Name: string;
  // 参数6名称 string
  value6Name: string;
  // 参数7名称 string
  value7Name: string;
  // 参数8名称 string
  value8Name: string;
  // 参数1描述 string
  value1Desc: string;
  // 参数2描述 string
  value2Desc: string;
  // 参数3描述 string
  value3Desc: string;
  // 参数4描述 string
  value4Desc: string;
  // 参数5描述 string
  value5Desc: string;
  // 参数6描述 string
  value6Desc: string;
  // 参数7描述 string
  value7Desc: string;
  // 参数8描述 string
  value8Desc: string;
}

interface ModSchoolCustom {
  // ID int
  id: string;
  // 所在区域 int
  area: string;
  // 查找的是正道还是魔道 int
  findStand: string;
  // 宗门索引 int
  index: string;
  // 宗门大小 int
  initScaleID: string;
  // 宗门名字1 int
  name1: string;
  // 宗门名字2 int
  name2: string;
  // 宗门类型ID int
  schoolTypeID: string;
  // 正魔 int
  stand: string;
  // 特殊逆天改命 int
  feature: string;
  // 功法类型 int
  skillType: string;
  // 宗旨1 int
  schoolSloganType1_1: string;
  // 宗旨2 int
  schoolSloganType1_2: string;
  // 门规1 int
  schoolSloganType2_1: string;
  // 门规2 int
  schoolSloganType2_2: string;
}

interface ModTags {
  // ID int
  id: string;
  // 标签 string
  tag: string;
  // 标签名称 string
  tagName: string;
}

interface MonthLogBase {
  // ID int
  id: string;
  // 日志类型 int
  type: string;
  // 是否强制弹出 int
  compel: string;
  // 优先级 int
  priority: string;
  // 标题 string
  title: string;
  // 大图标 string
  icon: string;
  // 小图标 string
  tinyIcon: string;
  // 日志ID string
  eventLog: string;
}

interface MoveCam {
  // ID int
  id: string;
  // 目标类型 int
  type: string;
  // 类型参数 string
  value: string;
  // 是否解锁目标视野 int
  unlockView: string;
  // 镜头是否返回到玩家身边 int
  endMoveToPlayer: string;
  // 下一剧情ID string
  dramaID: string;
}

interface NoticeBase {
  // ID int
  id: string;
  // 图标 string
  icon: string;
  // 标题 string
  title: string;
  // 文本 string
  content: string;
}

interface NpcBase {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface NpcCondition {
  // ID int
  id: string;
  // 区域 int[]
  area: string;
  // 境界 int[]
  grade: string;
  // 排序类型 int
  sortType: string;
  // 排序参数 int[]
  sortPara: string;
  // 条件1 string
  condition1: string;
  // 条件2 string
  condition2: string;
  // 条件3 string
  condition3: string;
  // 条件4 string
  condition4: string;
  // 条件5 string
  condition5: string;
  // 条件1：ABC string
  condition1ABC: string;
  // 条件2：ABC string
  condition2ABC: string;
  // 条件3：ABC string
  condition3ABC: string;
  // 条件4：ABC string
  condition4ABC: string;
  // 条件5：ABC string
  condition5ABC: string;
  // 是否储存 int
  save: string;
  // 储存后，每次获取NPC时，NPC必须达成此条件 string
  saveCondition: string;
  // 条件组 int
  group: string;
  // 获取间隔 int
  time: string;
  // 剧情命令 string
  uninhabitedFunction: string;
  // 是否获取隐藏单位 int
  hideRole: string;
  // 种族 int
  raceType: string;
}

interface NpcFavouriteLooks {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface NpcFortuitous {
  // ID int
  id: string;
  // 奇遇气运 int
  featureID: string;
  // 权重 int
  weight: string;
  // 奇遇日志 string
  eventLog: string;
}

interface NpcHeroes {
  // ID int
  id: string;
  // 境界 int
  grade: string;
  // 等级 int
  level: string;
  // 期望天骄万分比 int
  heroesProb: string;
  // 初始天骄属性膨胀百分比最大值（找回属性的标准百分比目标） int
  attrInit1: string;
  // 初始天骄属性膨胀百分比最大值（找回属性的标准百分比目标） int
  attrInit2: string;
  // 初始天骄属性膨胀百分比最大值（找回属性的标准百分比目标） int
  attrInit3: string;
  // 初始天骄属性膨胀百分比最大值（找回属性的标准百分比目标） int
  attrInit4: string;
  // 初始天骄属性膨胀百分比最大值（找回属性的标准百分比目标） int
  attrInit5: string;
  // 随机百分比最小值 int
  attrInitMin: string;
  // 随机百分比最大值 int
  attrInitMax: string;
  // 天骄突破时的属性膨胀百分比 int
  attrGrow: string;
  // 红色气运最小个数 int
  luckMaxLevelMin: string;
  // 红色气运最大个数 int
  luckMaxLevelMax: string;
  // 每缺少1个该档次的NPC，增加的补充概率百分比 int
  addHeroesProb: string;
  // 补充普通NPC时初始化气运概率 int
  initLuckRate: string;
}

interface NpcHeroesParn {
  // ID int
  id: string;
  // 随机百分比最小值 string
  key: string;
  // 随机百分比最大值 int
  value: string;
}

interface NpcImmortSkill {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface NpcImmortValue {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface NpcInitAttrGrow {
  // 职位ID int
  id: string;
  // 年龄放大 int
  age: string;
  // 年龄放大最大寿命百分比 int
  ageMaxRate: string;
  // 声望放大 int
  reputation: string;
  // 体力放大 int
  hp: string;
  // 灵力放大 int
  mp: string;
  // 念力放大 int
  sp: string;
  // 攻击放大 int
  atk: string;
  // 防御放大 int
  def: string;
  // 会心放大 int
  crit: string;
  // 护心放大 int
  guard: string;
  // 会心倍率放大 int
  critV: string;
  // 护心倍率放大 int
  guardV: string;
  // 资质放大 int
  bas: string;
  // 道点放大 int
  abilityPoint: string;
  // 物免魔免放大 int
  free: string;
}

interface NpcInitAttrTend {
  // 宗门地区ID int
  id: string;
  // 特长基准准概率（百分比） int
  tendBaseProbability: string;
  // 职位修正概率 int
  tendPostProbability: string;
}

interface NpcInitCharacter {
  // ID int
  id: string;
  // 散修权重 int
  weightFree: string;
  // 正道宗门基础权重 int
  weightBaseUp: string;
  // 正道宗门职位权重 int
  weightPostUp: string;
  // 魔道宗门基础权重 int
  weightBaseDown: string;
  // 魔道宗门职位权重 int
  weightPostDown: string;
}

interface NpcInitFeature {
  // 气运ID int
  id: string;
  // 气运类型 int
  type: string;
  // 属性条件 string
  condition: string;
  // 禁止立场 int
  forbitStand: string;
  // 基础权重 int
  weightBase: string;
  // 境界权重 int
  weightGrade: string;
}

interface NpcInitGradeSchool {
  // ID int
  id: string;
  // 宗门区域 int
  areaID: string;
  // 职位ID int
  post: string;
  // 境界 int
  grade: string;
  // 期数 int
  phase: string;
  // 权重 int
  weight: string;
  // 宗门贡献 int
  contribution: string;
}

interface NpcInitGradeTown {
  // ID int
  id: string;
  // 城镇等级 int
  townLevel: string;
  // 境界 int
  grade: string;
  // 期数 int
  phase: string;
  // 权重 int
  weight: string;
}

interface NpcInitHobby {
  // 兴趣ID int
  id: string;
  // 属性条件 string
  condition: string;
  // 散修权重 int
  weightFree: string;
  // 正道宗门基础权重 int
  weightBaseUp: string;
  // 正道宗门职位权重 int
  weightPostUp: string;
  // 魔道宗门基础权重 int
  weightBaseDown: string;
  // 魔道宗门职位权重 int
  weightPostDown: string;
}

interface NpcInitMoney {
  // 境界ID int
  id: string;
  // 灵石最小值 int
  moneyMin: string;
  // 灵石最大值 int
  moneyMax: string;
  // 宗门加成百分比 int
  schoolGrow: string;
}

interface NpcInitParameters {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface NpcInitSkill {
  // ID int
  id: string;
  // 境界 int
  grade: string;
  // 期数 int
  phase: string;
  // 技能境界 int
  skillGrade: string;
  // 技能品质 int
  skillLevel: string;
  // 概率万分比 int
  probability: string;
  // 概率万分比 int
  probabilityCrazy: string;
}

interface NpcNameFirst {
  // ID int
  id: string;
  // 性别 int
  gender: string;
  // 权重 int
  weight: string;
  // 名字（姓） string
  name: string;
  // 繁体|支持空字符串 string
  tc: string;
  // 英文|支持空字符串 string
  en: string;
}

interface NpcNameLast {
  // ID int
  id: string;
  // 性别 int
  gender: string;
  // 名字（名） string
  name: string;
  // 繁體 string
  tc: string;
  // 英文 string
  en: string;
}

interface NpcSpecial {
  // npcID int
  id: string;
  // 初始境界 int
  grade: string;
  // 境界条件 string
  gradeFix: string;
  // 性别 int
  gender: string;
  // 属性修改 string
  attrFix: string;
  // 气运修改 string
  featureFix: string;
  // 关系配置 string
  relationFix: string;
  // 指定内在性格 string
  characterA: string;
  // 指定外在性格 string
  characterB: string;
  // 男立绘指定 string
  dressMan: string;
  // 女立绘指定 string
  dressWoman: string;
  // 出生位置 string
  startPos: string;
}

interface PassiveMethod {
  // ID int
  id: string;
  // 被动仙卡ID int
  passiveId: string;
  // 被动子效果ID(不可重复) int
  subID: string;
  // 被动仙法类型 int
  type: string;
  // 参数 string
  para: string;
  // 条件 string
  condition: string;
  // 专属仙法 string
  exclusiveImmortal: string;
  // 装备后获得气运 string
  roleLuck: string;
  // 仙法名称 string
  name: string;
  // 被动图标 string
  icon: string;
  // 仙法费用 int
  cardCost: string;
  // 仙法简介 string
  info: string;
  // 特殊效果介绍 string
  desc: string;
  // 获取途径文本说明 string
  getText: string;
}

interface PassiveMethodType31 {
  // 基础ID int
  id: string;
  // 次数 string
  num: string;
  // 技能底层ID int
  skillBaseID: string;
  // 技能持续时间 int
  skillTime: string;
  // 作为倒数第二个技能时延长持续时间 int
  lastSkillTime: string;
}

interface PillSchoolFight {
  // ID int
  id: string;
  // 使用条件ID(武技条件表) string
  condition: string;
  // 对盟友作用效果 string
  allyEffect: string;
  // 对敌人作用效果 string
  enemyEffect: string;
  // 使用冷却 int
  applyCD: string;
  // 公共冷却 int
  applyGroupCD: string;
  // 冷却组 int
  cdGroup: string;
  // 治愈重伤 string
  heal: string;
}

interface PiscesParam {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface PotmonBase {
  // ID int
  id: string;
  // 名字 string
  name: string;
  // 种族 string
  race: string;
  // 小形态模型 string
  potmonModel: string;
  // 小形态人形 string
  potmonModel2: string;
  // 小人生活技能条件 int
  model2Skill: string;
  // 壶妖战斗形态怪物ID int
  monstAttrID: string;
  // 吸收战斗怪物id string
  collectBaseID: string;
  // 忽略怪物id string
  ignorMonstAttrID: string;
  // 壶妖AI类型 int
  potmonAIType: string;
  // 壶妖AI int
  potmonAI: string;
  // 初始技能 string
  initSkills: string;
  // 技能库 string
  skills: string;
  // 技能特效后缀 string
  effectSuffix: string;
  // 不加速技能 string
  accelerateExcludeSkill: string;
  // 召唤Boss形态时施加效果 string
  bossFormEffect: string;
  // 召唤化形形态时施加效果 string
  changeFormEffect: string;
  // 心法效果描述 string
  abilityDesc: string;
  // 心法效果icon string
  abilityIcon: string;
  // 战斗技能数量上限 int
  battleSkillMax: string;
  // 生活技能数量上限 int
  lifeSkillMax: string;
  // 性别 string
  sex: string;
  // 开出探索技能的概率 int
  adventureSkillPercent: string;
  // 探索技能数量 int
  adventureSkillNum: string;
  // 气运修改 string
  featureFix: string;
  // 指定内在性格 string
  characterA: string;
  // 指定外在性格 string
  characterB: string;
  // 男立绘指定 string
  dressMan: string;
  // 女立绘指定 string
  dressWoman: string;
  // 壶灵化形成功剧情 string
  converDrama: string;
  // 壶灵离开时剧情 string
  leaveDrama: string;
  // 玩家放生时剧情 string
  giveUpDrama: string;
  // 兽形放生时剧情 string
  giveUpMonstDrama: string;
  // 传授秘籍时剧情 string
  studyDrama: string;
  // 人形设为护卫时剧情 string
  battleDrama: string;
  // 兽形设为护卫 string
  battleMonstDrama: string;
  // 人形重伤/濒死使用道具回复后 string
  feedDrama: string;
  // 兽形重伤/濒死使用道具回复后 string
  feedMonstDrama: string;
  // 首次获得该种族壶妖 string
  firstGetMonstDrama: string;
}

interface PotmonBattle {
  // ID int
  id: string;
  // 壶妖在场持续时间 int
  stayTime: string;
  // 战斗使用技能冷却 int
  cd: string;
  // 战斗使用技能念力消耗 int
  spCost: string;
}

interface PotmonBattleExp {
  // ID int
  id: string;
  // 境界差距 int
  gradeRange: string;
  // 胜利获得经验值 int
  winExp: string;
}

interface PotmonBattleSkill {
  // ID int
  id: string;
  // 壶妖ID int
  potmonID: string;
  // 技能ID int
  skillID: string;
  // 技能CD（毫秒） int
  skillCD: string;
  // 化形后替换技能 int
  converReplace: string;
  // 每次召唤最多使用技能次数 int
  useTimes: string;
  // 评分 int
  score: string;
}

interface PotmonConverPropertyScale {
  // ID int
  id: string;
  // 体力 int
  hp: string;
  // 灵力 int
  mp: string;
  // 念力 int
  sp: string;
  // 攻击 int
  atk: string;
  // 防御 int
  def: string;
  // 会心 int
  crit: string;
  // 护心 int
  guard: string;
  // 会心倍率 int
  critV: string;
  // 护心倍率 int
  guardV: string;
  // 资质 int
  bas: string;
  // 物免 int
  pfr: string;
  // 魔免 int
  mfr: string;
  // 最高资质 int
  bas1st: string;
  // 次高资质 int
  bas2nd: string;
  // 第三资质 int
  bas3rd: string;
}

interface PotmonFurryAction {
  // ID int
  id: string;
  // 执行行为ID int
  actionID: string;
  // 循环次数 int
  actionCount: string;
  // 执行概率(百分比) int
  actionRate: string;
  // 保底次数 int
  minCount: string;
}

interface PotmonFurryGradeLevel {
  // ID int
  id: string;
  // 境界 int
  grade: string;
  // 期数 int
  phase: string;
  // 等级id int
  gradeId: string;
  // 怪物等级id int
  monstLevel: string;
  // 所需经验 int
  exp: string;
  // 所需道具 int
  upgradeProp: string;
}

interface PotmonGradeLevel {
  // ID int
  id: string;
  // 境界 int
  grade: string;
  // 怪物属性等级 int
  level: string;
  // 所需经验 int
  exp: string;
  // 所需道具 int
  upgradeProp: string;
}

interface PotmonLogFunction {
  // id int
  id: string;
  // 获得道具日志 string
  logKey: string;
  // 角色日志id string
  roleLogId: string;
  // 条件 string
  condition: string;
  // 默认日志id string
  failRoleLogId: string;
  // 设置NPC string
  setNPC: string;
  // 执行命令 string
  function: string;
  // 奇遇触发组 int
  group: string;
}

interface PotmonMap {
  // ID int
  id: string;
  // 重伤时间 int
  hurtTime: string;
  // 重伤丹药 int[]
  hurtItem: string;
  // 濒死丹药 int[]
  reviveItem: string;
}

interface PotmonParamer {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface PotmonPropertyScale {
  // ID int
  id: string;
  // 移动速度 int
  moveSpeed: string;
  // 体力 string
  hp: string;
  // 灵力 string
  mp: string;
  // 念力 string
  sp: string;
  // 体力恢复 string
  hpRestore: string;
  // 灵力恢复 string
  mpRestore: string;
  // 念力恢复 string
  spRestore: string;
  // 攻击 string
  atk: string;
  // 防御 string
  def: string;
  // 物理免伤 string
  pfr: string;
  // 魔法免伤 string
  mfr: string;
  // 会心 string
  crit: string;
  // 护心 string
  guard: string;
  // 会心倍率 string
  critV: string;
  // 护心倍率 string
  guardV: string;
  // 技能威力 string
  skillDmg: string;
}

interface PotmonRomanTarget {
  // 序号 int
  id: string;
  // 探索方向技能组 int[]
  targetGroup: string;
  // 探索方向名称 string
  targetName: string;
  // 产出描述 string
  targetDesc: string;
  // 探索方向图标 string
  targetIcon: string;
}

interface PotmonSkill {
  // 技能id int
  id: string;
  // 技能名字 string
  name: string;
  // 技能图标 string
  icon: string;
  // 技能描述 string
  desc: string;
  // 获得道具日志 string
  logKey: string;
  // 设置NPC string
  setNPC: string;
  // 奇遇触发组 int
  group: string;
  // 汇报剧情id string
  dramaId: string;
  // 角色日志id string
  roleLogId: string;
  // 技能生效时执行命令 string
  function: string;
}

interface PotmonSkillAid {
  // 技能id int
  id: string;
  // 前置技能 string
  aidSkill: string;
  // 辅助技能触发概率（万分比） int
  triggerRate: string;
  // 技能触发概率提升（叠加万分比） int
  addRate: string;
  // 数量增加百分比 int
  addCountRate: string;
  // 道具产出修正等级 int
  fixOutputLevel: string;
  // 修改功法品质 string
  fixMartialColor: string;
  // 减少前置技能CD string
  decreaseSkillCD: string;
}

interface PotmonSkillFixOutput {
  // 道具产出ID int
  id: string;
  // 修正后的道具产出ID int[]
  fixId: string;
}

interface PotmonSkillLife {
  // 序号 int
  id: string;
  // 技能id int
  skillID: string;
  // 探索区域 string
  areaID: string;
  // 道具产出ID int
  outputPropId: string;
  // 产出道具数量百分比 int
  propCountRate: string;
  // 产出秘籍境界 string
  martialGrade: string;
  // 产出秘籍品质 string
  martialColor: string;
  // 产出秘籍灵根 string
  martialBas: string;
  // 特殊技能 int
  specialSkill: string;
  // 特殊技能参数n string
  specialSkillParam: string;
  // 触发概率（万分比） int
  triggerRate: string;
  // 触发cd string
  triggerCD: string;
}

interface PotmonSkillStudy {
  // id int
  id: string;
  // 技能id int
  skillID: string;
  // 壶灵ID int
  potmonId: string;
  // 技能类型 int
  skillType: string;
  // 领悟境界 string
  studyGrade: string;
  // 领悟区域 string
  studyArea: string;
  // 领悟条件 string
  studyCondition: string;
  // 历练获得技能概率（百分比） int
  studyRate: string;
  // 权重 int
  weight: string;
  // CD组 int
  coolGroup: string;
  // CD string
  cool: string;
  // 日志 string
  studyLogKey: string;
  // 战斗中领悟技能的概率(万分比） int
  battleStudyRate: string;
  // 战斗中领悟技能的日志 string
  battleStudyLogKey: string;
  // 技能组 int
  skillGroup: string;
  // 技能组参数 string
  skillGroupParam: string;
  // 升级前置技能 int
  advanceSkill: string;
  // 汇报剧情id string
  dramaId: string;
}

interface PotmonUnitAction {
  // ID int
  id: string;
  // 壶妖种族 string
  race: string;
  // 行为 int
  action: string;
  // 参数 string
  param: string;
  // 目标是否是玩家 int
  isPlayer: string;
  // 是否可以交互 int
  isSelect: string;
  // 是否强制交互 int
  isForce: string;
}

interface PotmonUnitFeedBack {
  // ID int
  id: string;
  // 壶妖种族 string
  race: string;
  // 条件 string
  condition: string;
  // 行为 int
  action: string;
  // 参数 string
  param: string;
  // 发起者是否是玩家 int
  isPlayer: string;
  // 是否同意 int
  isAccept: string;
  // 剧情id int
  dramaID: string;
  // 触发剧情后是否降低好感度 int
  reduceIntim: string;
}

interface RingBase {
  // ID int
  id: string;
  // 境界 int
  grade: string;
  // 格子容量 int
  capacity: string;
  // 封印评分 int
  lockScore: string;
  // 效果 string
  effectValue: string;
}

interface RoleAppellationBattle {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleAskfor {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleAttack {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleAttributeDesc {
  // ID int
  id: string;
  // 键 string
  attribute: string;
  // 图标 string
  icon: string;
  // 值 string
  desc: string;
}

interface RoleBattle {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleBattleChicken {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleBattleSub {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface RoleBeauty {
  // ID int
  id: string;
  // 魅力值 int
  beauty: string;
  // 表示文本 string
  text: string;
}

interface RoleBreedTaoistSeed {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleCall {
  // ID int
  id: string;
  // A与B的关系 int
  relation: string;
  // 条件 string
  condition: string;
  // 称呼 string
  call: string;
  // 组 int
  group: string;
  // 权重 int
  weight: string;
}

interface RoleChat {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleClose {
  // ID int
  id: string;
  // 亲密度区间 int
  closeMin: string;
  // 亲密度提升速率 float
  closeIncrease: string;
  // 亲密度下降速率 float
  closeReduce: string;
  // 仇恨度提升速率 float
  hateIncrease: string;
  // 仇恨度下降速率 float
  hateReduce: string;
}

interface RoleCloseDevelop {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleCreateFeature {
  // ID int
  id: string;
  // 气运类型 int
  type: string;
  // 气运分组 int
  group: string;
  // 气运品质 int
  level: string;
  // 持续时间 string
  duration: string;
  // 持续时间叠加类型 int
  refreshType: string;
  // 气运是否隐藏 int
  conceal: string;
  // 气运名称 string
  name: string;
  // 气运效果 string
  effect: string;
  // 悬停提示 string
  tips: string;
  // 图标及文本说明 string
  iconAndDesc: string;
  // 是否锁定 int
  lockLuck: string;
  // 开局介绍文本 string
  introduceText: string;
  // 玩家随机出现权重 int
  weight: string;
}

interface RoleCreateHobby {
  // ID int
  id: string;
  // 兴趣名称 string
  name: string;
  // 兴趣说明 string
  desc: string;
  // 分组 int
  group: string;
  // 初始权重 int
  weight: string;
  // 是否显示 int
  show: string;
  // 加分道具 string
  item: string;
  // 心情加分 int
  moodAdd: string;
  // 冷却时间 int
  cd: string;
}

interface RoleDiscovery {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface RoleDress {
  // ID int
  id: string;
  // 衣服ID int
  dressID: string;
  // 衣服性别 int
  sex: string;
  // 衣服类型 string
  type: string;
  // 分类 string
  className: string;
  // 颜色组 int
  colorGroup: string;
  // 颜色 string
  color: string;
  // 衣服名称 string
  name: string;
  // 标签 string
  flag: string;
  // 玩家投稿标签 string
  gamerFlag: string;
  // 标签Tips string
  flagDesc: string;
  // 魅力 int
  beauty: string;
  // 单位是否可选 int
  active: string;
  // NPC出现的概率 int
  weight: string;
  // NPC穿戴境界要求 int
  npcGrade: string;
}

interface RoleDressCombination {
  // ID int
  id: string;
  // 部件ID1 string
  dressID: string;
  // 部件ID2 string
  dressID2: string;
  // 部件ID3 string
  dressID3: string;
  // 部件ID4 string
  dressID4: string;
  // 部件ID5 string
  dressID5: string;
  // 部件ID6 string
  dressID6: string;
  // 部件ID7 string
  dressID7: string;
  // 额外增加魅力 int
  beauty: string;
}

interface RoleDrill {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleDying {
  // 境界ID int
  id: string;
  // 是否可变成元魂 int
  ghost: string;
  // 求助信ID int
  letterID: string;
  // 被动目标ID int
  goalID: string;
  // 元魂可显示的相性评分 int
  matchScore: string;
  // 元魂可存活的时间 int
  ghostLife: string;
  // 元魂气运ID int
  deadFeatureID: string;
  // 需要的丹药ID string
  itemID: string;
}

interface RoleEffect {
  // 效果ID int
  id: string;
  // 效果类型 int
  effectType: string;
  // 效果参数 string
  value: string;
}

interface RoleEscape {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleEvent {
  // 事件ID int
  id: string;
  // 目击半径 int
  range: string;
  // 传播率参数A float
  npcParaA: string;
  // 传播率参数B float
  npcParaB: string;
  // 事件记录时间（月） int
  duration: string;
  // 关系者 string
  relative: string;
  // 关系者得知后效果 string
  effect: string;
  // 相关目标ID string
  goal: string;
  // 响应时的日志 string
  dialogue: string;
}

interface RoleFace {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleFunction {
  // ID int
  id: string;
  // 操作按钮 string
  name: string;
  // 陌生人是否可用 int
  strangerOpen: string;
}

interface RoleGive {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleGrade {
  // ID int
  id: string;
  // 境界 int
  grade: string;
  // 名称 string
  gradeName: string;
  // 前中后期 int
  phase: string;
  // 名称 string
  phaseName: string;
  // 突破品质 int
  quality: string;
  // 名称 string
  qualityName: string;
  // 需求经验 int
  exp: string;
  // 突破条件 string
  condition: string;
  // 需求剧情 string
  drama: string;
  // 瓶颈气运ID int
  lockFeature: string;
  // 突破材料需求 string
  growItemRequire: string;
  // 突破材料需求数量 int
  growItemNum: string;
  // 可放入天材地宝数量 int
  materialsNum: string;
  // 突破后可选气运 int
  fateNum: string;
  // 突破增加寿命 int
  growAddLife: string;
  // 突破增加道点 int
  abilityPoint: string;
  // 标准攻击 int
  atkUp: string;
  // 标准防御 int
  defUp: string;
  // 标准体力 int
  hpUp: string;
  // 标准灵力 int
  mpUp: string;
  // 标准念力 int
  spUp: string;
  // 会心 int
  crit: string;
  // 护心 int
  guard: string;
  // 会心倍率 int
  critV: string;
  // 护心倍率 int
  guardV: string;
  // 标准物抗 int
  pfrUp: string;
  // 标准魔抗 int
  mfrUp: string;
  // 本源仙力 int
  immortalPoint: string;
  // 失败获得气运概率 int
  failFeatureProb: string;
  // 失败施加气运 int
  failFeatureID: string;
  // 失败进入副本ID int
  dungeonID: string;
  // 失败进入副本等级 int
  dungeonLevel: string;
  // 动态特效 string
  effectShow: string;
  // 属性说明 string
  attrDesc: string;
  // 开启功能说明 string
  funcDesc: string;
  // 配文 string
  verse: string;
  // 突破说明文本 string
  growWayDesc: string;
  // 突破必要材料展示 string
  itemShowA: string;
  // 天材地宝材料展示 string
  itemShowB: string;
  // 所有可突破材料 int[][]
  allItemShowA: string;
}

interface RoleHealth {
  // ID int
  id: string;
  // 健康值 int
  health: string;
  // 每月降低体力百分比 int
  hpReduce: string;
  // 每月减少寿命 int
  lifeReduce: string;
}

interface RoleHealthReduce {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleInvite {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleKill {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleLogBase {
  // ID int
  id: string;
  // 事件类型 int
  eventType: string;
  // NPC是否记录 int
  recordType: string;
  // 日志ID string
  eventLog: string;
}

interface RoleLogLocal {
  // ID int
  id: string;
  // 参数ID string
  keyID: string;
  // 身份 string
  part: string;
  // 目标 string
  goal: string;
  // 行为 string
  active: string;
  // B的性格 int
  characterGroup: string;
  // A与B的关系 int[]
  relation: string;
  // 条件 string
  condition: string;
  // 权重 int
  weight: string;
  // 优先级组 string
  group: string;
  // 日志图标 string
  icon: string;
  // 起点颜色 string
  pointColor: string;
  // 语音 string
  vocal: string;
  // 初期表情 int
  emotionID: string;
  // 国际化文本 string
  ch: string;
  // 国际化文本繁体|支持空字符串 string
  tc: string;
  // 国际化文本英文|支持空字符串 string
  en: string;
}

interface RoleLoginTip {
  // ID int
  id: string;
  // 图标 string
  icon: string;
  // 提示背景图 string
  bg: string;
  // 提示文本 string
  tip: string;
}

interface RoleMark {
  // 境界ID int
  id: string;
  // 需要念力上限 int
  needSp: string;
  // 消耗精力 int
  cost: string;
}

interface RoleMarry {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleMartialGradeGrid {
  // ID int
  id: string;
  // 类型 int
  type: string;
  // 达到的境界 int
  grade: string;
  // 开放的格子数 int
  grid: string;
}

interface RoleMood {
  // 气运ID int
  id: string;
  // 心情值 int
  mood: string;
  // 获得负面气运概率百分比 int
  prob: string;
}

interface RoleMoodFeature {
  // ID int
  id: string;
  // 心情值最小值 int
  moodMin: string;
  // 心情值最大值 int
  moodMax: string;
  // 气运ID int
  featureID: string;
  // 权重 int
  weight: string;
}

interface RolePoisonAction {
  // ID int
  id: string;
  // 行为ID int
  actionID: string;
  // 行为类型 int
  actionType: string;
  // 后续行为类型 int
  afterActionType: string;
  // 后续行为参数 string
  afterActionParam: string;
  // 条件 string
  condition: string;
  // 性格 int[]
  traits: string;
  // 关系参数 int[]
  RelationType: string;
  // 性格触发干预行为概率百分比 int[]
  triggerRate: string;
  // 性格干预行为类型 int
  triggerType: string;
  // 干预行为时记录的生平日志 string
  triggerLogKey: string;
  // 不受性格影响准备执行行为的日志 string
  defTriggerLogKey: string;
}

interface RolePoisonActionType {
  // ID int
  id: string;
  // 行为类型 int
  actionType: string;
  // 后续行为类型 int
  afterActionType: string;
  // 后续行为参数 string
  afterActionParam: string;
  // 条件 string
  condition: string;
}

interface RoleRelease {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleReputation {
  // ID int
  id: string;
  // 名声值 int
  reputation: string;
  // 表示文本 string
  text: string;
}

interface RoleRutElixirAction {
  // ID int
  id: string;
  // 行为组 int
  group: string;
  // 抓取的NPC string
  conditionID: string;
  // 行为条件 string
  actionCondition: string;
  // 服药者为npc时执行行为 string
  actionFunction: string;
  // 服药者时玩家时执行行为 string
  playerFunction: string;
  // 玩家执行时触发的剧情 string
  playerDrama: string;
  // 玩家是投药者时触发的剧情 string
  playerFeederDrama: string;
  // 记录日志 string
  log: string;
  // 月结通知 string
  monthlog: string;
  // 触发间隔(月) int
  triggerCD: string;
  // 触发权重 int
  weight: string;
  // 最大触发次数 int
  maxTime: string;
  // 全局CD(月) int
  globalCD: string;
}

interface RoleSave {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleSchoolRecruit {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleStealItem {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleThankGiveClothes {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleTrains {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RoleViewItem {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface RuleDungeonEffect {
  // ID int
  id: string;
  // 组 int
  group: string;
  // 属性类型 int
  basType: string;
  // 刷新道具 string
  item: string;
  // 单位效果ID string
  effect: string;
  // 光环效果ID string
  haloEffect: string;
  // 效果说明 string
  desc: string;
}

interface RuleDungeonEffectLevel {
  // 等级ID int
  id: string;
  // 需求资质 int
  basRequire: string;
  // 增加元素数值 int
  addElement: string;
  // 权重 int
  weight: string;
}

interface RuleDungeonName {
  // ID int
  id: string;
  // 道界名称 string
  name: string;
  // 属性图标 string
  attr: string;
  // 属性颜色 string
  color: string;
  // 道魂图标 string
  itemIcon: string;
  // 技能图标 string
  skillIcon: string;
}

interface RuleDungeonRoom {
  // 房间序号ID int
  id: string;
  // 提升属性 string
  attr: string;
}

interface RuneFormula {
  // 序号 int
  id: string;
  // 图谱ID int
  formulaId: string;
  // 符箓图谱名称 string
  name: string;
  // 符箓功能描述 string
  desc: string;
  // 组 int
  group: string;
  // 图谱组名字 string
  groupName: string;
  // 要求画符资质 int
  basSymbol: string;
  // 符箓等级 int
  grade: string;
  // 符箓页面图片 string
  picture: string;
  // 笔迹图形 string
  writingId: string;
  // 消耗精力 int
  costEnergy: string;
  // 必要材料1 string
  requier1: string;
  // 材料1所需数量 int
  requier1Count: string;
  // 必要材料2 string
  requier2: string;
  // 材料1所需数量 int
  requier2Count: string;
  // 产出符箓1 int
  rune1: string;
  // 产出符箓2 int
  rune2: string;
  // 符箓1产量 string
  rune1Yield: string;
  // 符箓2产量 string
  rune2Yield: string;
  // 符箓2必要资质 int
  rune2Talent: string;
  // 额外产量概率（万分比） int
  extraPercent: string;
}

interface RuneParameters {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 float
  value: string;
}

interface RuneWriting {
  // 笔迹图形 int
  id: string;
  // 图谱ID int
  formulaId: string;
  // 组 int
  group: string;
  // 符箓等级 int
  grade: string;
  // 顶部和边框 string
  title: string;
  // 底部收尾 string
  bottom: string;
  // 需要绘制的部分 string
  writingDraw: string;
  // 绘制时间 int
  writingTime: string;
}

interface SchoolApprove {
  // ID int
  id: string;
  // 宗门资源id string
  resId: string;
  // 区域 int
  area: string;
  // 增加数量 int
  addCount: string;
  // 增益性格 string
  characterBuff: string;
  // 增益后比例(万分比) int
  plusRate: string;
  // 减益性格 string
  characterDebuff: string;
  // 减益后比例(万分比) int
  minusRate: string;
  // 玩家同意后npc日志 string
  agreeNpcLog: string;
  // 玩家拒绝后npc日志 string
  refuseNpcLog: string;
  // 宗门记事 int
  schoolLogId: string;
  // 月结新闻 string
  monthLog: string;
  // 玩家是宗主触发的剧情 int
  dramaId: string;
  // 玩家同意触发的剧情 int
  playerAgreeDrama: string;
  // 玩家拒绝时触发的剧情 int
  playerRefuseDrama: string;
}

interface SchoolAura {
  // ID int
  id: string;
  // 建筑等级 int
  level: string;
  // 配置组ID int
  group: string;
}

interface SchoolBigFight {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface SchoolBigFightDrama {
  // ID int
  id: string;
  // 触发条件 string
  condition: string;
  // 剧情ID string
  dramaId: string;
}

interface SchoolBigFightEvent1 {
  // ID int
  id: string;
  // 剧情编号 int
  dramaId: string;
  // 剧情角色（左） string
  dramaUnitLeft: string;
  // 剧情角色（右） string
  dramaUnitRight: string;
  // 权重 int
  weight: string;
  // 触发条件 string[][]
  triggerConditions: string;
  // 触发组 int
  triggerGroup: string;
  // 触发间隔 int
  triggerMonths: string;
}

interface SchoolBigFightReward {
  // ID int
  id: string;
  // 类型 int
  targetTypeId: string;
  // 区域 int
  areaId: string;
  // 名次 int
  rank: string;
  // 荣誉值 int
  honor: string;
  // 声望 int
  reputation: string;
  // 药材 int
  herb: string;
  // 矿材 int
  ore: string;
  // 道具产出ID int[]
  rewardIds: string;
  // 气运 int[]
  luckies: string;
}

interface SchoolBuilding {
  // ID int
  id: string;
  // 建筑名称 string
  name: string;
  // 建筑类型 int
  type: string;
  // 最高职位 int
  postMin: string;
  // 最低职位 int
  postMax: string;
  // 外人是否可见 int
  outShow: string;
  // 外人访问亲密度需求 int
  closeRequire: string;
  // 区域不可见 string
  notShowAreaID: string;
}

interface SchoolClose {
  // ID int
  id: string;
  // 宗门亲密度 int
  close: string;
  // 倍率（百分比） int
  multiple: string;
}

interface SchoolConsultFAQ {
  // ID int
  id: string;
  // 区域 string
  area: string;
  // 显示条件 string
  condition: string;
  // 标题 string
  title: string;
  // 剧情ID int[]
  dialogueID: string;
  // 红点提示 string
  newTip: string;
}

interface SchoolCurScale {
  // 当前规模ID int
  id: string;
  // 功法类型最大格子数量 int
  skillType: string;
  // 功法类型最大格子数量（小宗门） int
  skillTypeSmall: string;
}

interface SchoolDragonArtifactDialog {
  // ID int
  id: string;
  // 形态 string
  state: string;
  // 好感级别 int
  level: string;
  // 交谈对话 string
  dialogueId: string;
}

interface SchoolDragonDoor {
  // ID int
  id: string;
  // 等级 int
  level: string;
  // 跟屁龙添加战斗效果 int[][]
  dragonBuff: string;
  // 玩家添加战斗效果 int[][]
  playerBuff: string;
  // 升级消耗灵石 int
  upgradeCostMoney: string;
  // 升级消耗矿材 int
  upgradeCostMedicina: string;
  // 升级消耗药材 int
  upgradeCostMine: string;
  // 是否可以化形 int
  canTransfiguration: string;
  // 可升级区域 int
  upgradeArea: string;
  // 升级后触发剧情 int
  upgradeQuest: string;
  // 需要此逆天改命才能升级龙池并激活词条 int
  needFate: string;
  // 升级条件 string
  upgradeCondition: string;
  // 不能升级提示 string
  negativeUpgradeTips: string;
}

interface SchoolDragonDoorEffect {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值[红龙_蓝龙_金龙] string
  value: string;
}

interface SchoolEquipRoom {
  // ID int
  id: string;
  // 建筑等级 int
  level: string;
  // 法宝基础产量 int
  equipOutput: string;
}

interface SchoolFate {
  // ID int
  id: string;
  // 宗门规模 int
  scale: string;
  // 宗门特有逆天改命 int
  fateFeature: string;
}

interface SchoolFight {
  // 比试ID int
  id: string;
  // 晋升职位 int
  post: string;
  // 检测时间间隔 int
  month: string;
  // 开启延时时间 int
  startMonth: string;
  // 宗门信件ID int
  letterID: string;
  // 招收人员数量 int
  winNum: string;
  // 玩家报名检测人数上限百分比 int
  playerPer: string;
  // 比赛最小人数 int
  unitMin: string;
  // 比赛最大人数 int
  unitMax: string;
  // 失败后触发收徒对话概率 int
  loseProb: string;
  // 战斗时长要求 int
  battleTime: string;
  // 收徒者职位 int
  battlePostID: string;
  // 相性评分参数A int
  paraA: string;
  // 相性评分参数B int
  paraB: string;
  // 亲密度评分参数C int
  paraC: string;
  // 宗门比试名称 string
  desc: string;
}

interface SchoolFightBigElder {
  // ID int
  id: string;
  // 宗门所属区域 int
  schoolArea: string;
  // 比试副本ID int[]
  dungeonID: string;
  // 玩家参赛真传弟子最大值 int
  playerIninheritMax: string;
  // 大长老参赛徒弟最大值 int
  grandElderDiscipleMax: string;
  // 亲密度 int
  close: string;
  // 失败剧情ID int
  hateDialogue: string;
  // 获胜剧情ID int
  noHateDialogue: string;
}

interface SchoolFightDrama {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface SchoolFightElder {
  // ID int
  id: string;
  // 宗门所属区域 int
  schoolArea: string;
  // 比试副本ID int[]
  dungeonID: string;
  // 长老方参赛真传弟子最大值 int
  elderIninheritMax: string;
  // 亲密度 int
  close: string;
  // 失败剧情ID int
  hateDialogue: string;
  // 获胜剧情ID int
  noHateDialogue: string;
}

interface SchoolFightInherit {
  // ID int
  id: string;
  // 宗门所属区域 int
  schoolArea: string;
  // 比试副本ID int[]
  dungeonID: string;
  // 剧情1 int
  drama1: string;
  // 剧情2 int
  drama2: string;
  // 大长老及宗主收真传的亲密度要求 int
  inheritIntim: string;
  // 大长老及宗主收玩家为真传的基础概率百分比 int
  inheritProp: string;
  // 参赛人数最小值 int
  competitorMin: string;
}

interface SchoolFightPost {
  // 比试ID int
  id: string;
  // 区域 int
  area: string;
  // 晋升职位 int
  post: string;
  // 检测时间间隔 int
  month: string;
  // 开启延时时间 int
  startMonth: string;
  // 报名消耗贡献值 int
  applyCost: string;
  // 宗门信件ID int
  letterID: string;
  // 最大对战人数 int
  fightNum: string;
  // 天骄战力计算百分比 int
  fightPowerRateA: string;
  // 准天骄战力计算百分比 int
  fightPowerRateB: string;
  // 招收人员数量 int
  winNum: string;
  // 自动运转间隔时间 int
  autoMonth: string;
  // 自动运转招收人数 int
  autoNum: string;
  // 宗门比试名称 string
  desc: string;
}

interface SchoolFightReward {
  // ID int
  id: string;
  // 所在区域 int
  area: string;
  // 职位 int
  post: string;
  // 奖励（按排名） int[][]
  rewards: string;
}

interface SchoolFightSchoolMain {
  // ID int
  id: string;
  // 宗门所属区域 int
  schoolArea: string;
  // npc晋升长老月份 int
  autoMonth: string;
  // 标准宗主战力 int
  standardPower: string;
  // 解锁传承亲密度要求 int
  closeRequire: string;
  // 禅让的任职时间需求（月） int
  demiseCareerTime: string;
  // 禅让剧情ID int
  demiseDialogueID: string;
  // 亲属倍率缩放百分比 int
  rateScale: string;
  // 职位空缺时长（月） int
  vacancyMonth: string;
  // 副本等级类型 int
  dungeonLevelType: string;
  // 副本等级偏移 int
  levelOffset: string;
  // 传承挑战间隔（月） int
  challengeCD: string;
  // 被邀约角色仇恨对话ID int[]
  hateDialogueID: string;
  // 宗主空缺时间（月） int
  lackTime: string;
  // 传承剧情触发几率百分比 int
  inheritDialogueRate: string;
  // 每月几率增长值 int
  growRate: string;
  // 发现传承剧情ID int
  findinheritDialogueID: string;
  // 传承副本胜利剧情 int
  inheritWinDialogue: string;
  // 传承副本失败剧情 int
  inheritLoseDialogue: string;
}

interface SchoolFixedEffect {
  // ID int
  id: string;
  // 消耗道具ID string
  itemCostID: string;
  // 消耗贡献 int
  cost: string;
  // 获得气运 string
  addEffect: string;
  // 标题文本 string
  title: string;
  // 说明文本 string
  desc: string;
}

interface SchoolGeologyRoom {
  // ID int
  id: string;
  // 建筑等级 int
  level: string;
  // 风水道具基础产量 int
  geologyOutput: string;
}

interface SchoolGodBeast {
  // ID int
  id: string;
  // 宗门区域 int
  area: string;
  // 初始等级 int
  level: string;
  // 等级上限 int
  maxLevel: string;
  // 成长比率 int
  growRate: string;
  // 初始心情 int
  mood: string;
  // 心情值最大值限制 int
  maxMoodLimit: string;
  // 月结心情值下降点数 int
  monthMoodDown: string;
  // 交谈后提升心情 int
  promoteMood: string;
  // 交谈后提升经验值 int
  talkpromoteExp: string;
  // 初始饥饿 int
  hunger: string;
  // 饥饿值最大值限制 int
  maxHungerLimit: string;
  // 月结饥饿值下降点数 int
  monthHungerDown: string;
}

interface SchoolGodBeastFeed {
  // ID int
  id: string;
  // 优先级 int
  topest: string;
  // 对话 string
  dialogue: string;
  // 条件 string
  condition: string;
}

interface SchoolGodBeastFeedProp {
  // 道具 int
  id: string;
  // 神兽经验 int
  propExp: string;
  // 每个增加饱食度 int
  propHunger: string;
}

interface SchoolGodBeastGetReward {
  // ID int
  id: string;
  // 奖励组 int
  groupID: string;
  // 奖励触发条件 string
  condition: string;
  // 冷却 int
  cd: string;
  // 喂养产出（剧情ID） string
  memory: string;
}

interface SchoolGodBeastInfo {
  // ID int
  id: string;
  // 模型 string
  model: string;
  // 生成位置类型 int
  postType: string;
  // 名字 string
  name: string;
}

interface SchoolGodBeastInterval {
  // ID int
  id: string;
  // 状态 string
  state: string;
  // 最小值 int
  min: string;
  // 最大值 int
  max: string;
}

interface SchoolGodBeastTalk {
  // ID int
  id: string;
  // 心情低于触发对话 int
  moodValue: string;
  // 交谈对话 string
  moodDialogue: string;
  // 冷却对话 string
  cdDialogue: string;
}

interface SchoolGodExcrete {
  // ID int
  id: string;
  // 宗门规模 int
  area: string;
  // 可消耗道具ID int[]
  eatItemType: string;
  // 消耗道具数量 int
  eatItemCount: string;
  // 生成道具 int[]
  excreteItemID: string;
  // 生成数量 int
  excreteCount: string;
}

interface SchoolHospital {
  // ID int
  id: string;
  // 建筑等级 int
  level: string;
  // 恢复ID int
  hospitalID: string;
  // 贡献消耗 int
  cost: string;
  // 外门弟子任务死亡率降低 int
  deathReduce: string;
}

interface SchoolInherited {
  // ID int
  id: string;
  // 宗门评级 int
  localScale: string;
  // 伤害增幅 float
  atkUp: string;
  // 伤害减免 float
  defUp: string;
  // 生命增幅 float
  hpUp: string;
  // 完全激发提高效果 float
  bigUp: string;
}

interface SchoolInheritedInfo {
  // ID int
  id: string;
  // 宗门资质属性 int
  schoolBas: string;
  // 传承副本ID int
  dungeonID: string;
  // 副本等级偏移值 int
  levelShift: string;
  // 传承效果 int
  inheritEffect: string;
  // 宗门战效果 int
  effectID: string;
  // 传承效果的CD int
  effectCD: string;
  // 传承效果说明 string
  inheritEffectDesc: string;
}

interface SchoolInitScale {
  // ID int
  id: string;
  // 宗门规模 int
  scale: string;
  // 初始宗门大小 int
  initLevel: string;
  // 分舵层级 int
  branch: string;
  // 大地图建筑图标 int
  buildIcon: string;
  // 所在区域 int
  area: string;
  // 初始生成数量 int
  num: string;
  // 入宗资质需求 int
  basRequire: string;
  // 入宗亲密度需求 int
  closeRequire: string;
  // 入宗境界限制 int
  applyGrade: string;
  // 玩家可达到的最大职位 int
  playerPostMax: string;
  // 初始灵石 int
  money: string;
  // 初始药材 int
  herbal: string;
  // 初始矿材 int
  mine: string;
  // 初始宗主 int
  schoolMain: string;
  // 初始大长老 int
  bigElders: string;
  // 初始长老 int
  elders: string;
  // 初始真传弟子 int
  inherit: string;
  // 初始内门弟子 int
  inner: string;
  // 初始外门弟子 int
  outer: string;
  // 初始记名弟子 int
  population: string;
  // 最大记名弟子数量 int
  maxPopulation: string;
  // 初始名誉 int
  reputation: string;
  // 初始领地 int
  territory: string;
  // 初始安定度 int
  stable: string;
  // 初始繁荣度 int
  prosperous: string;
  // 初始弟子忠诚度 int
  loyalty: string;
  // 初始功法类型数量 int
  skillInit: string;
}

interface SchoolIntim {
  // ID int
  id: string;
  // 好感等级 int
  level: string;
  // 好感称号 string
  name: string;
  // 好感度min int
  min: string;
  // 好感度max int
  max: string;
}

interface SchoolIntimEvent {
  // ID int
  id: string;
  // 好感等级 string
  level: string;
  // 触发类型 int
  triggerType: string;
  // 触发参数 string
  triggerParam: string;
  // 触发概率百分比 int
  probability: string;
  // 副本类型 string
  dungeonID: string;
  // npc数量 int
  num: string;
  // npc条件 string
  condition: string;
  // 格子范围 string
  range: string;
  // 触发间隔 int
  triggerCD: string;
  // 参数1 string
  param1: string;
  // 参数2 string
  param2: string;
  // 参数3 string
  param3: string;
  // 参数4 string
  param4: string;
  // 参数5 string
  param5: string;
}

interface SchoolLibrary {
  // ID int
  id: string;
  // 宗门区域 int
  areaID: string;
  // 层数 int
  layer: string;
  // 需求职位ID int
  post: string;
  // 宗门贡献需求 int
  contribution: string;
  // 最小秘籍数量 int
  numMin: string;
  // 最大秘籍数量 int
  numMax: string;
  // 境界显示 int
  grade: string;
  // 秘籍类型显示 string
  type: string;
  // 刀法资质 int
  basBlade: string;
  // 枪法资质 int
  basSpear: string;
  // 剑法资质 int
  basSword: string;
  // 拳法资质 int
  basFist: string;
  // 掌法资质 int
  basPalm: string;
  // 指法资质 int
  basFinger: string;
  // 火灵根 int
  basFire: string;
  // 水灵根 int
  basFroze: string;
  // 雷灵根 int
  basThunder: string;
  // 风灵根 int
  basWind: string;
  // 土灵根 int
  basEarth: string;
  // 木灵根 int
  basWood: string;
}

interface SchoolLibrarySub2 {
  // ID int
  id: string;
  // 分舵层级 int
  branch: string;
  // 层数 int
  layer: string;
  // 需求职位ID int
  post: string;
}

interface SchoolLibraySub {
  // ID int
  id: string;
  // 宗门规模 int
  scale: string;
  // 层数 int
  layer: string;
  // 初始最小秘籍数量 int
  numMin: string;
  // 初始最大秘籍数量 int
  numMax: string;
  // 每增加一本秘籍所需要的名誉（区域2） int
  reputationNeed2: string;
  // 每增加一本秘籍所需要的名誉（区域4） int
  reputationNeed4: string;
  // 每增加一本秘籍所需要的名誉（区域6） int
  reputationNeed6: string;
  // 每增加一本秘籍所需要的名誉（区域8） int
  reputationNeed8: string;
  // 每增加一本秘籍所需要的名誉（区域9） int
  reputationNeed9: string;
  // 每增加一本秘籍所需要的名誉（区域10） int
  reputationNeed10: string;
  // 总的最大秘籍数量 int
  numAllMax: string;
}

interface SchoolLocalScale {
  // ID int
  id: string;
  // 宗门评级 int
  localScale: string;
  // 等级名称 string
  localScaleName: string;
  // 荣誉度要求 int
  honor: string;
  // 弟子数要求 int
  totalMember: string;
  // 领地要求 int
  manor: string;
  // 繁荣度要求 int
  prosperous: string;
  // 宗门大阵阵眼数量 int
  eyeCount: string;
  // 单个阵眼生命值 int
  eyeHp: string;
  // 情报值 int
  intelligence: string;
}

interface SchoolLog {
  // ID int
  id: string;
  // 日志类型 int
  logType: string;
  // 显示序列 int
  order: string;
  // 主日志文本 string
  logDescMain: string;
  // 副日志文本 string
  logDescSub: string;
}

interface SchoolLuckyEffect {
  // ID int
  id: string;
  // 消耗道具ID string
  itemCostID: string;
  // 消耗贡献 int
  cost: string;
  // 获得气运 string
  addEffect: string;
  // 说明文本 string
  desc: string;
}

interface SchoolMainHall {
  // ID int
  id: string;
  // 建筑等级 int
  level: string;
  // 宗门最大人数 int
  memberMax: string;
  // 大长老数量 int
  maxBigElders: string;
  // 长老数量 int
  maxElders: string;
  // 真传弟子数量 int
  maxStudentA: string;
  // 内门弟子数量 int
  maxStudentB: string;
  // 外门弟子数量 int
  maxStudentC: string;
  // 宗门期望人数Min int
  expectMemberMin: string;
  // 宗门期望人数Max int
  expectMemberMax: string;
  // 宗门基础税收 int
  baseTax: string;
  // 宗门领地范围 int
  domainRange: string;
}

interface SchoolMove {
  // 宗门地区 int
  id: string;
  // 建造飞舟所需灵石 int
  needMoneyCount: string;
  // 建造飞舟所需药材 int
  needMedicineCount: string;
  // 建造飞舟所需矿材 int
  needMineCount: string;
  // 搬迁灵石数量 float[]
  awayMoneyCount: string;
  // 搬迁药材数量 float[]
  awayMedicineCount: string;
  // 搬迁矿材数量 float[]
  awayMineCount: string;
  // 搬迁人口数量 float[]
  awayPopulationCount: string;
}

interface SchoolMystTreasureProd {
  // ID int
  id: string;
  // 道具编号 int
  propsId: string;
  // 产出权重 int
  weight: string;
  // 产出区域 int[]
  areas: string;
}

interface SchoolName {
  // ID int
  id: string;
  // 分组 int
  group: string;
  // 宗门名字 string
  name1: string;
  // 宗门名字 string
  name2: string;
}

interface SchoolNextAreaParam {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface SchoolParameters1 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int[]
  value: string;
}

interface SchoolPillOutput {
  // ID int
  id: string;
  // 道具ID int
  itemID: string;
  // 基础产出权重 建筑等级1 int
  weightLv1: string;
  // 基础产出权重 建筑等级2 int
  weightLv2: string;
  // 基础产出权重 建筑等级3 int
  weightLv3: string;
  // 基础产出权重 建筑等级4 int
  weightLv4: string;
  // 基础产出权重 建筑等级5 int
  weightLv5: string;
  // 基础产出权重 建筑等级6 int
  weightLv6: string;
  // 基础产出权重 建筑等级7 int
  weightLv7: string;
  // 基础产出权重 建筑等级8 int
  weightLv8: string;
  // 基础产出权重 建筑等级9 int
  weightLv9: string;
  // 基础产出权重 建筑等级10 int
  weightLv10: string;
  // 基础产出权重 建筑等级11 int
  weightLv11: string;
  // 基础产出权重 建筑等级12 int
  weightLv12: string;
  // 基础产出权重 建筑等级13 int
  weightLv13: string;
  // 基础产出权重 建筑等级14 int
  weightLv14: string;
  // 基础产出权重 建筑等级15 int
  weightLv15: string;
  // 收益灵石 int
  price: string;
}

interface SchoolPost {
  // ID int
  id: string;
  // 所在区域 int
  area: string;
  // 职位 int
  post: string;
  // 职位名称 string
  postName: string;
  // 人数上限 int
  numMax: string;
  // 宗门亲密度占比 int
  close: string;
  // 标准工资（月） int
  salary: string;
  // 累计宗门贡献需求 int
  contribution: string;
  // 声望需求 int
  reputation: string;
  // 最小境界需求 int
  gradeRequire: string;
  // 最小资质需求 int
  basRequire: string;
  // 花费折扣 int
  discount: string;
  // 可领任务 string
  task: string;
}

interface SchoolPostParam {
  // ID int
  id: string;
  // key string
  key: string;
  // value int
  value: string;
}

interface SchoolPostScore {
  // 职位ID int
  id: string;
  // 击杀战功 int
  score: string;
  // 击杀战功（天骄） int
  heroScore: string;
}

interface SchoolPromoteEffec {
  // ID int
  id: string;
  // 名称 string
  name: string;
  // 描述 string
  desc: string;
  // 增加属性 string
  effect: string;
  // 消耗道具 string
  itemCostID: string;
  // 消耗贡献 int
  cost: string;
}

interface SchoolReviveCost {
  // 境界ID int
  id: string;
  // 普通NPC int
  cost: string;
  // 天骄NPC int
  heroCost: string;
}

interface SchoolRoleCall {
  // ID int
  id: string;
  // A与B的关系 int
  relation: string;
  // 条件 string
  condition: string;
  // 称呼 string
  call: string;
}

interface SchoolSlogan {
  // ID int
  id: string;
  // 宗门规模 int
  scale: string;
  // 分组 int
  group: string;
  // 正魔 int
  stand: string;
  // 分类 int
  type: string;
  // 效果 string
  effect: string;
  // 违反门规惩罚 string
  punish: string;
  // 宗旨名字 string
  slogan: string;
  // 宗门说明 string
  desc: string;
}

interface SchoolSmall {
  // 小宗门ID int
  id: string;
  // 生成位置条件 string
  condition: string;
  // 宗门分组 int
  group: string;
  // 最后一个字定制 string
  lastName: string;
  // 宗门道心（已废弃） int
  TaoistHeart: string;
  // 特殊逆天改命 int
  feature: string;
  // 必出功法类型 int[]
  mustskillType: string;
  // 是否定制玩家功法 int
  playerSkill: string;
  // 随机功法类型 int[]
  skillType: string;
  // 特殊建筑 int
  specialBuilder: string;
  // 需要先天气运才能出现这个宗门 int
  needFate: string;
  // 拦截申请入宗条件 string
  applySchoolCondition: string;
  // 拦截申请入宗门 int
  applySchoolDrama: string;
  // 传承副本ID int
  dungeonID: string;
}

interface SchoolStand {
  // ID int
  id: string;
  // 差值数值 int
  differValue: string;
  // 差值百分比 int
  differPercent: string;
  // 减少贡献百分比 int
  contributionReduce: string;
  // 信件ID（正道） int
  letterIDA: string;
  // 信件ID（魔道） int
  letterIDB: string;
  // 没收灵石百分比 int
  costMoney: string;
  // 禁足时间（月） int
  captivity: string;
}

interface SchoolStock {
  // ID int
  id: string;
  // 商店类型,1-药材,2-矿材 int
  type: string;
  // 区域 int
  area: string;
  // 宗门资质 int
  bas: string;
  // 道具ID int
  item: string;
  // 出现权重基础值 int
  weightBas: string;
  // 增加1点权重所需要的资源值 int
  addWeightNeed: string;
  // 每增加1个需要消耗的资源值 int
  assetExpend: string;
  // 互斥组（每次增加时的互斥组） int
  group: string;
  // 每次刷新最小数量 int
  addCountMin: string;
  // 每次刷新最大数量 int
  addCountMax: string;
  // 售价百分比 int
  pricePer: string;
  // 优先刷新 int
  fisrtAdd: string;
  // 商店最大存量 int
  countMax: string;
  // 同一互斥组新增CD（月） int
  addCD: string;
}

interface SchoolStockSub {
  // 区域ID int
  id: string;
  // 药材消耗最大值 int
  herbCostMax: string;
  // 药材消耗最小值 int
  herbAdd: string;
  // 药材商店补货最大间隔（月） int
  herbRefreshCD: string;
  // 矿材消耗最大值 int
  mineCostMax: string;
  // 矿材消耗最小值 int
  mineAdd: string;
  // 矿材商店补货最大间隔（月） int
  mineRefreshCD: string;
}

interface SchoolStore {
  // ID int
  id: string;
  // 道具ID int
  item: string;
  // 宗门资质 int
  bas: string;
  // 特点ID string
  advantage: string;
  // 平均分配组 int
  group: string;
  // 区域 string
  area: string;
  // 刷新概率百分比 int
  prob: string;
  // 每次刷新最小数量 int
  countMin: string;
  // 每次刷新最大数量 int
  countMax: string;
}

interface SchoolSymbolRoom {
  // ID int
  id: string;
  // 建筑等级 int
  level: string;
  // 符箓基础产量 int
  symbolOutput: string;
}

interface SchoolTask {
  // ID int
  id: string;
  // 任务类型ID int
  taskType: string;
  // 所属部门 int
  className: string;
  // 任务标准权重 int
  taskWeight: string;
  // 任务权重提升 int
  weightGrow: string;
  // 名字 string
  name: string;
}

interface SchoolTask102 {
  // ID int
  id: string;
  // 任务权重 int
  weight: string;
  // 任务材料 int
  item: string;
  // 所需数量 int
  number: string;
  // 任务需求材料品质 int
  requireLevel: string;
  // 任务需求材料数量 int
  requireNumber: string;
  // 道具的分类 string
  className: string;
  // NPC任务所需要药草价值 int
  herbalWorth: string;
}

interface SchoolTask103 {
  // ID int
  id: string;
  // 任务权重 int
  weight: string;
  // 炼丹资质要求 int
  basRequire: string;
  // 发放材料 int
  sourceItem: string;
}

interface SchoolTask104 {
  // ID int
  id: string;
}

interface SchoolTask105 {
  // ID int
  id: string;
  // 需要提升的安定度 int
  requireStable: string;
}

interface SchoolTask106 {
  // ID int
  id: string;
  // 副本ID int
  dungeonID: string;
  // 副本等级 int
  dungeonLevel: string;
}

interface SchoolTask109 {
  // ID int
  id: string;
  // 增加的声望 int
  taskAddReputation: string;
  // 参数A int
  memberSucceeParaA: string;
  // 参数B int
  memberSucceeParaB: string;
  // 气运ID int
  memberDefeatFeature: string;
}

interface SchoolTask111 {
  // ID int
  id: string;
  // 任务权重 int
  weight: string;
  // 任务材料 int
  item: string;
  // 所需数量 int
  number: string;
  // 发布数量 int
  taskCount: string;
}

interface SchoolTask112 {
  // ID int
  id: string;
  // 副本ID int
  dungeonID: string;
  // 副本等级 int
  dungeonLevel: string;
  // 发布数量 int
  taskCount: string;
  // 最小范围 int
  minIconRange: string;
  // 最大范围 int
  maxIonRange: string;
}

interface SchoolTask113 {
  // ID int
  id: string;
}

interface SchoolTask114 {
  // ID int
  id: string;
}

interface SchoolTask115 {
  // ID int
  id: string;
}

interface SchoolTask116 {
  // ID int
  id: string;
  // 大地图元素ID int
  mapEventID: string;
  // 图标范围 int
  minIconRange: string;
  // 图标范围 int
  maxIonRange: string;
}

interface SchoolTask117 {
  // ID int
  id: string;
  // 任务权重 int
  weight: string;
  // 任务材料 int
  item: string;
  // 所需数量 int
  number: string;
  // 发布数量 int
  taskCount: string;
}

interface SchoolTask118 {
  // ID int
  id: string;
  // 任务权重 int
  weight: string;
  // 大地图元素ID int
  mapEventID: string;
  // 图标范围 int
  minIconRange: string;
  // 图标范围 int
  maxIonRange: string;
  // 抓取NPC条件1 string
  condition1: string;
  // 抓取NPC条件2 string
  condition2: string;
  // 抓取NPC条件3 string
  condition3: string;
}

interface SchoolTask119 {
  // ID int
  id: string;
  // 任务权重 int
  weight: string;
  // 帮助的NPC数量 int
  npcCount: string;
}

interface SchoolTaskAllot {
  // 任务ID int
  id: string;
  // 类型 string
  className: string;
  // 任务名称 string
  taskName: string;
  // 任务描述 string
  taskDesc: string;
  // 区域 int
  area: string;
  // 宗门等级 int
  level: string;
  // 职位需求 int[]
  postAsk: string;
  // 部门 int
  department: string;
  // 派遣任务类型 int
  allotTaskType: string;
  // 是否隐藏 int
  taskHide: string;
  // 任务等级 int
  taskLevel: string;
  // 显示持续时间 int
  taskTime: string;
  // 死亡率百分比 string
  mortality: string;
  // 宗门资源 string[][]
  schollAttr: string;
  // 贡献 string
  contribution: string;
  // 赏罚 string
  award: string;
  // 禁闭 string
  captivity: string;
  // 每次提升进度 int
  addPlan: string;
  // 进度最大值 int
  planMax: string;
  // 任务解锁 string
  openTask: string;
  // 领取剧情ID int
  dialogueID: string;
  // 概率变量 string
  taskResultPower: string;
  // 人数上限 int
  peopleCount: string;
  // 日志 string
  schoolTaskLog: string;
}

interface SchoolTaskAllotCount {
  // 部门类型 int
  id: string;
  // 每月最小任务数量 int
  taskCountMin: string;
  // 每月最大任务数量 int
  taskCountMax: string;
}

interface SchoolTaskHall {
  // ID int
  id: string;
  // 建筑等级 int
  level: string;
  // 最大领取任务数量 int
  taskNumber: string;
}

interface SchoolTaskTypeBase {
  // ID int
  id: string;
  // 任务名字 string
  taskName: string;
  // 任务类型ID int
  taskType: string;
  // 任务等级 int
  taskLevel: string;
  // 宗门地区 int[]
  schoolAreaID: string;
  // 条件 string
  condition: string;
  // 正魔值奖励 int
  stand: string;
  // 所属部门 int
  className: string;
  // 任务奖励宗门贡献 int
  rewardContribution: string;
  // 灵石奖励 int
  money: string;
  // 声望奖励 int
  reputation: string;
  // 宗门资源 string[][]
  schollAttr: string;
  // 最高职位 int
  postMin: string;
  // 最低职位 int
  postMax: string;
  // 每月刷新数量次数玩家专用 int
  refreshNum: string;
  // 每次刷新成功的概率百分比 int
  refreshProb: string;
  // 外门弟子所需数量 int
  requireMember: string;
  // 外门弟子成功率 int
  memberBaseSucceeRate: string;
  // 外门弟子死亡率 int
  memberBaseDieRate: string;
  // 任务模板ID int
  taskTamlpate: string;
  // 领取任务时调用剧情调剂及影响 string
  addTaskFunction: string;
  // 完成任务后调用剧情条件及影响 string
  completeTaskFunction: string;
  // 任务描述 string
  desc: string;
}

interface SchoolTrainingHall {
  // ID int
  id: string;
  // 建筑等级 int
  level: string;
  // 技能境界 int
  skillGrade: string;
  // 演武熟练 int
  skillMastery: string;
  // 贡献消耗 int
  cost: string;
  // 外门弟子任务成功率加成 int
  succeedGain: string;
}

interface SchoolTransmit {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface SchoolType {
  // ID int
  id: string;
  // 宗门规模 int
  scale: string;
  // 宗门名称 string
  name: string;
  // 立场 int
  stand: string;
}

interface SchoolWarAreaInfo {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  valueArea2: string;
  // 值 int
  valueArea4: string;
  // 值 int
  valueArea6: string;
  // 值 int
  valueArea8: string;
  // 值 int
  valueArea10: string;
}

interface SchoolWarBattleInfo {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface SchoolWarBoss {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface SchoolWarBossBattleInfo {
  // ID int
  id: string;
  // 房间位置 int[]
  point: string;
  // 怪物ID int
  monsterID: string;
  // 位置(左上右下) int[]
  position: string;
  // 偏移 float[]
  offset: string;
  // 朝向 float[]
  toward: string;
}

interface SchoolWarBossHumanNum {
  // ID int
  id: string;
  // 房间位置 int[]
  point: string;
  // 进攻方职位 int[]
  atkSchoolPost: string;
  // 进攻方职位人数 int[]
  atkSchoolPostNum: string;
  // 防守方职位 int[]
  defSchoolPost: string;
  // 防守方职位人数 int[]
  defSchoolPostNum: string;
  // 玩家是防守宗主 int[]
  defPlayerPost: string;
  // 玩家是防守宗主职位人数 int[]
  defPlayerPostNum: string;
}

interface SchoolWarInfo {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface SkillCombineGrade {
  // ID int
  id: string;
  // 境界指定类型 int
  type: string;
  // 参数 string
  value: string;
}

interface SkillEffectDesc {
  // ID int
  id: string;
  // Key值 string
  key: string;
  // 前置图标 string
  icon: string;
  // 类型 string
  type: string;
  // 类型图标 string
  typeIcon: string;
  // 说明内容 string
  value: string;
}

interface SoundGroups {
  // ID int
  id: string;
  // 目录 string
  path: string;
  // 组 string
  group: string;
}

interface SoundLowPass {
  // ID int
  id: string;
  // 键 string
  key: string;
  // 值 float
  value: string;
}

interface SoundsEffectPitch {
  // ID int
  id: string;
  // 目录 string
  path: string;
  // 随机最小音高 float
  minPitch: string;
  // 随机最大音高 float
  maxPitch: string;
}

interface SpecificBattleSkill {
  // ID int
  id: string;
  // 角色ID int
  npcId: string;
  // 技能ID int
  skillBaseID: string;
  // 普通伤害威力 string
  phycicalDmg: string;
  // 武器类型 int
  weaponType: string;
  // 属性伤害威力 string
  magicDmg: string;
  // 属性类型 int
  magicType: string;
  // 弹道ID int
  missileID: string;
  // 发射间隔 string
  shotCD: string;
  // 附加效果ID string
  skillEffect: string;
  // 偏移位置 string
  offsetPosi: string;
  // 二段技能配置ID string
  skillSub: string;
}

interface SpecificNpcCreate {
  // ID int
  id: string;
  // 角色ID int
  npcId: string;
  // 立绘名称 string
  clothingName: string;
  // 标签 string
  flag: string;
  // 装饰 int
  model: string;
  // 气运 int
  luck: string;
}

interface SpecificSkillAttack {
  // ID int
  id: string;
  // 角色ID int
  npcId: string;
  // 武技ID int
  skillAttackID: string;
  // 技能名称 string
  name: string;
  // 技能图标 string
  icon: string;
  // 技能说明 string
  desc: string;
}

interface TaoistHeart {
  // ID int
  id: string;
  // 道心名字 string
  heartName: string;
  // 道心描述 string
  heartDescribe: string;
  // 界面tips string
  tips: string;
  // 凝结道种进度条增长变量 int
  taoistSeedExpUp: string;
  // 每个月增加最小值 int
  taoistSeedExpMin: string;
  // 凝结道种进度条上限 int
  taoistSeedExpMax: string;
  // 逆天改命池子 int
  fateFeatureGroupID: string;
  // 策略技能 int[]
  heartSkills: string;
  // 接种后出现的道种 int
  InheritanceSeed: string;
  // 违背行为类型 int[]
  unethicalAction: string;
  // 参数 string[]
  unethicalValue: string;
  // 减少耐久度 int[]
  maxhpDes: string;
  // 道心光环 string
  halo: string;
  // 道心图片 string
  heartIcon: string;
  // 道心UI特效 string
  heartUIEffect: string;
  // 凝结日志 string
  gainHeartLog: string;
  // 破碎日志 string
  badHeartLog: string;
  // 升为天骄选择技能组作为发展方向 int[]
  skillGroup: string;
  // 需求资质每一点增加的权重 int[][]
  weight: string;
}

interface TaoistHeartEffect {
  // ID int
  id: string;
  // 道心ID int
  taoistHeartID: string;
  // 状态 int
  level: string;
  // 坚定度区间 int[]
  maxhpScope: string;
  // 气运（叠加） int
  feature: string;
  // 气运（不叠加） int
  feature2: string;
}

interface TaoistSeed {
  // ID int
  id: string;
  // 道种名字 string
  seedName: string;
  // 道种描述 string
  seedDescribe: string;
  // 成长值 string
  seedExp: string;
  // 成长值上限 int
  seedExpMax: string;
  // 心魔挑战间隔 int[]
  ghostInterval: string;
  // 心魔挑战节点 string
  ghostConnector: string;
  // 心魔挑战基础概率 int
  ghostBasicsValue: string;
  // 挑战成功日志 string
  ghostWinLog: string;
  // 挑战失败日志 string
  ghostLoseLog: string;
  // 道种所需属性 int
  seedNeedAttr: string;
  // 满足条件增加概率 int
  ghostConnectorUp: string;
  // 心魔挑战失败次数 int
  ghostMortality: string;
  // 种植减少概率 int[]
  decRate: string;
  // 接种后可能出现的道心 int[]
  InheritanceHeart: string;
  // 道种图片 string
  seedIcon: string;
  // 道种UI特效 string
  seedUIEffect: string;
}

interface Task101 {
  // ID int
  id: string;
  // 道具的大类型 string
  type: string;
  // 道具的分类 string
  className: string;
  // 道具的品质 string
  level: string;
  // 道具的ID string
  item: string;
  // 需求数量 int
  number: string;
  // 提交道具描述 string
  selectItemDesc: string;
  // 有道具时的任务标题 string
  itemTitle: string;
  // 有道具时的任务描述 string
  itemDesc: string;
}

interface Task102 {
  // ID int
  id: string;
  // 消耗道具的分类 string
  costClassName: string;
  // 消耗道具的品质 string
  costLevel: string;
  // 消耗材料ID string
  costItem: string;
  // 消耗数量 int
  costNumber: string;
  // 产出道具的分类 string
  outputClassName: string;
  // 产出道具的品质 string
  outputLevel: string;
  // 产出道具ID string
  outputItem: string;
  // 产出数量 int
  outputNumber: string;
  // 任务侦听类型 int
  listenType: string;
}

interface Task103 {
  // ID int
  id: string;
  // 副本类型 string
  dungeonType: string;
  // 副本区域 string
  dungeonArea: string;
  // 副本等级 int
  dungeonLevel: string;
  // 副本ID string
  dungeonID: string;
  // 副本中心 string
  dungeonCenter: string;
  // 副本范围 int
  dungeonRange: string;
  // 侦听类型 int
  listenType: string;
}

interface Task104 {
  // ID int
  id: string;
  // 需要提升的数值 int
  requireNumber: string;
}

interface Task105 {
  // ID int
  id: string;
  // 运送道具 int
  item: string;
  // 道具数量 int
  number: string;
  // 目的地坐标 string
  destination: string;
}

interface Task106 {
  // ID int
  id: string;
}

interface Task107 {
  // ID int
  id: string;
  // 目标的宗门立场 int
  stand: string;
  // 目标的位置区域 string
  area: string;
  // 宗门对目标的仇恨度需求 int
  schoolHate: string;
  // 目标的境界最小值 int
  grade: string;
  // 是否必须杀死 int
  realDie: string;
}

interface Task108 {
  // ID int
  id: string;
  // 副本ID string
  dungeonID: string;
  // 副本等级 int
  dungeonLevel: string;
  // 副本中心 string
  dungeonCenter: string;
  // 副本范围 int
  dungeonRange: string;
  // 副本位置 string
  dungeonPos: string;
  // 侦听类型 int
  listenType: string;
}

interface Task109 {
  // ID int
  id: string;
  // 大地图元素ID int
  mapEventID: string;
  // 图标类型 int
  iconType: string;
  // 图标中心 string
  iconCenter: string;
  // 图标范围 int
  iconRange: string;
}

interface Task110 {
  // ID int
  id: string;
  // 剧情对话ID string
  fortuitousEventID: string;
  // 地图位置ID int
  positionID: string;
}

interface Task111 {
  // ID int
  id: string;
  // 触发类型 int
  triggerType: string;
  // 调用引导触发参数1 string
  triggerValue1: string;
  // 调用引导触发参数2 string
  triggerValue2: string;
  // 任务存在时，发光的按钮 string
  buttonLed: string;
  // 按钮类型 int
  buttonLedType: string;
  // 按钮缩放 string
  buttonLedScale: string;
  // 调用条件说明表 string
  condition: string;
  // 地图位置ID int
  positionID: string;
}

interface Task112 {
  // ID int
  id: string;
  // B对A的亲密度提升最小值 int
  closeMin: string;
  // B对A的亲密度提升最大值 int
  closeMax: string;
  // 目标道具ID int
  argetItem: string;
  // 接取任务剧情ID int
  startDialogue: string;
  // 提交任务剧情ID1 int
  accomplishDialogueA: string;
  // 提交任务剧情ID2 int
  accomplishDialogueB: string;
  // 身份日志1 string
  motivationLogA: string;
  // 目标日志1 string
  goalStartLogA: string;
  // 行为日志1 string
  eventLogTaskA: string;
  // 行为日志2 string
  eventLogTaskB: string;
  // 行为日志3 string
  eventLogTaskC: string;
}

interface Task113 {
  // ID int
  id: string;
  // B对A的亲密度提升最小值 int
  closeMin: string;
  // B对A的亲密度提升最大值 int
  closeMax: string;
  // 相性评分参数A int
  matchScoreParaA: string;
  // 相性评分参数B int
  matchScoreParaB: string;
  // 亲密度评分参数C int
  closeScorePara: string;
  // 进入分支1评分要求 int
  scoreRequire: string;
  // 坐标位置 int
  location: string;
  // 范围 int
  scope: string;
  // 事件ID int
  eventID: string;
  // 接取任务剧情ID int
  startDialogue: string;
  // 进入副本剧情ID int
  battleDialogue: string;
  // 互动剧情ID int
  interactionDialogue: string;
  // 分支1剧情ID int
  accomplishDialogueA: string;
  // 分支2剧情ID int
  accomplishDialogueB: string;
  // 身份日志1 string
  motivationLogA: string;
  // 目标日志1 string
  goalStartLogA: string;
  // 行为日志1 string
  eventLogTaskA: string;
  // 行为日志2 string
  eventLogTaskB: string;
  // 行为日志3 string
  eventLogTaskC: string;
  // 行为日志4 string
  eventLogTaskD: string;
  // 行为日志5 string
  eventLogTaskE: string;
}

interface Task114 {
  // ID int
  id: string;
  // B对A的亲密度提升最小值 int
  closeMin: string;
  // B对A的亲密度提升最大值 int
  closeMax: string;
  // 相性评分参数A int
  matchScoreParaA: string;
  // 相性评分参数B int
  matchScoreParaB: string;
  // 亲密度评分参数C int
  closeScorePara: string;
  // 进入分支1评分要求 int
  scoreRequire: string;
  // 坐标位置 int
  location: string;
  // 事件ID int
  eventID: string;
  // 接取任务剧情ID int
  startDialogue: string;
  // 进入副本剧情ID int
  battleDialogue: string;
  // 互动剧情ID int
  interactionDialogue: string;
  // 怪物组ID int
  unitGroupID: string;
  // 分支1剧情ID int
  accomplishDialogueA: string;
  // 分支2剧情ID int
  accomplishDialogueB: string;
  // 身份日志1 string
  motivationLogA: string;
  // 目标日志1 string
  goalStartLogA: string;
  // 行为日志1 string
  eventLogTaskA: string;
  // 行为日志2 string
  eventLogTaskB: string;
  // 行为日志3 string
  eventLogTaskC: string;
  // 行为日志4 string
  eventLogTaskD: string;
  // 行为日志5 string
  eventLogTaskE: string;
}

interface Task115 {
  // ID int
  id: string;
  // B对A的亲密度提升最小值 int
  closeMinBA: string;
  // B对A的亲密度提升最大值 int
  closeMaxBA: string;
  // C对A的亲密度提升最小值 int
  closeMinCA: string;
  // C对A的亲密度提升最大值 int
  closeMaxCA: string;
  // 接取任务剧情ID int
  startDialogue: string;
  // 坐标位置 int
  location: string;
  // 事件ID int
  eventID: string;
  // 进入BOSS房间剧情ID int
  battleDialogue: string;
  // 互动剧情ID int
  interactionDialogue: string;
  // 提交任务剧情ID1 int
  finishDialogueA: string;
  // 提交任务剧情ID2 int
  finishDialogueB: string;
  // 行为日志1 string
  eventLogTaskA: string;
  // 行为日志2 string
  eventLogTaskB: string;
  // 行为日志3 string
  eventLogTaskC: string;
  // 行为日志4 string
  eventLogTaskD: string;
  // 行为日志5 string
  eventLogTaskE: string;
  // 行为日志6 string
  eventLogTaskF: string;
}

interface Task116 {
  // ID int
  id: string;
  // B对A的亲密度提升最小值 int
  closeMinBA: string;
  // B对A的亲密度提升最大值 int
  closeMaxBA: string;
  // 接取任务剧情ID int
  startDialogue: string;
  // 提交任务剧情ID1 int
  accomplishDialogueA: string;
  // 提交任务剧情ID2 int
  accomplishDialogueB: string;
  // 完成任务对话 int
  completeTaskDramaID: string;
  // 完成任务发送信件 int
  completeEmailID: string;
  // 身份日志1 string
  motivationLogA: string;
  // 目标日志1 string
  goalStartLogA: string;
  // 行为日志1 string
  eventLogTaskA: string;
  // 行为日志2 string
  eventLogTaskB: string;
}

interface Task117 {
  // ID int
  id: string;
  // B对A的亲密度提升最小值 int
  closeMinBA: string;
  // B对A的亲密度提升最大值 int
  closeMaxBA: string;
  // 剧情ID1 int
  accomplishDialogueA: string;
  // 剧情ID2男 int
  accomplishDialogueB1: string;
  // 剧情ID2女 int
  accomplishDialogueB2: string;
  // 道具ID int
  itemID: string;
  // 气运ID int
  luckID: string;
  // 复仇概率万分比 int
  moveGhostRevengeRate: string;
}

interface Task118 {
  // ID int
  id: string;
  // B对A的亲密度提升最小值 int
  closeMin: string;
  // B对A的亲密度提升最大值 int
  closeMax: string;
  // 目标道具ID int
  argetItem: string;
  // 事件ID int
  eventID: string;
  // 提交任务剧情ID int
  accomplishDialogue: string;
  // 身份日志1 string
  motivationLogA: string;
  // 目标日志1 string
  goalStartLogA: string;
  // 行为日志1 string
  eventLogTaskA: string;
  // 行为日志2 string
  eventLogTaskB: string;
  // 行为日志3 string
  eventLogTaskC: string;
  // 行为日志4 string
  eventLogTaskD: string;
  // 行为日志5 string
  eventLogTaskE: string;
  // 行为日志6 string
  eventLogTaskF: string;
}

interface Task119 {
  // ID int
  id: string;
  // 条件1 string
  condition1: string;
  // 条件2 string
  condition2: string;
  // 地图位置ID int
  positionID: string;
}

interface Task120 {
  // ID int
  id: string;
  // 位置ID int
  positionID: string;
}

interface Task121 {
  // ID int
  id: string;
  // 道具ID int
  itemID: string;
  // 接取任务剧情ID int
  startDialogue: string;
}

interface Task122 {
  // ID int
  id: string;
  // 道具ID int
  itemID: string;
  // 接取任务剧情ID int
  startDialogue: string;
}

interface Task123 {
  // ID int
  id: string;
  // 副本ID int
  dungeonID: string;
  // 接取任务剧情ID int
  startDialogue: string;
  // 地图位置ID int
  positionID: string;
  // 目的地条件 string
  condition: string;
}

interface Task124 {
  // ID int
  id: string;
  // 设置NPC1 int
  setNPCA: string;
  // 设置NPC2 int
  setNPCB: string;
  // 指定地点 int
  npcMapPosition: string;
  // 接取任务剧情ID int
  startDialogue: string;
}

interface Task125 {
  // ID int
  id: string;
  // 外门弟子数量 int
  staffCount1: string;
  // 内门弟子数量 int
  staffCount2: string;
  // 真传弟子数量 int
  staffCount3: string;
  // 等待时间 int
  delayed: string;
  // 广播 string
  trigger: string;
  // 二级确认界面文本 string
  affirmTips: string;
  // 确认后打开剧情 string
  openDialogueID: string;
  // 提升心得最小值 int
  expMin: string;
  // 提升心得最大值 int
  expMax: string;
  // 提升亲密最小值 int
  closeMin: string;
  // 提升亲密最大值 int
  closeMax: string;
  // 接取任务剧情ID int
  startDialogue: string;
}

interface Task126 {
  // ID int
  id: string;
}

interface Task127 {
  // ID int
  id: string;
}

interface Task128 {
  // ID int
  id: string;
  // 所有类型 int[]
  types: string;
  // 大地图元素ID int
  mapEventID: string;
  // 图标中心 string
  iconCenter: string;
  // 图标范围 int
  iconRange: string;
  // 副本ID int
  battleID: string;
  // 副本结束符合期待的key string
  battleDataKey: string;
  // 接取任务时剧情 string[]
  dramaTaskAdd: string;
  // 完成任务时剧情 string[]
  dramaTaskComplete: string;
}

interface Task129 {
  // ID int
  id: string;
  // 接取任务时剧情 string
  dramaID1: string;
  // 进入副本按钮ID int
  dramaID1OptionID1: string;
  // 玩家走到事件上，弹出的剧情ID string
  dramaID2: string;
  // 进入副本按钮ID int
  dramaID2OptionID: string;
  // NPC在战斗中死亡剧情 int
  battleDieDrama: string;
}

interface Task130 {
  // ID int
  id: string;
  // 接取任务时剧情 string
  dramaID1: string;
  // 传送至目标点按钮ID int
  dramaID1OptionID1: string;
  // 任务即将失败弹出剧情（开战回合） string
  dramaID2: string;
  // 进入副本按钮ID int
  dramaID2OptionID: string;
  // 是否进攻任务 int
  isAttack: string;
}

interface Task131 {
  // ID int
  id: string;
  // 属性ID int
  schollAttrID: string;
  // 比较类型 int
  decType: string;
  // 值 int
  value: string;
}

interface TaskBase {
  // ID int
  id: string;
  // 任务名称 string
  name: string;
  // 任务显示类型 int
  group: string;
  // 任务类型   int
  type: string;
  // 任务等级 int
  level: string;
  // 任务持续时间 int
  duration: string;
  // 能否同时接取多条 int
  multiple: string;
  // 任务奖励道具 string
  rewardItem: string;
  // 任务奖励正道值 int
  rewardStandUp: string;
  // 人物奖励魔道值 int
  rewardStandDown: string;
  // 任务奖励贡献 int
  rewardContribution: string;
  // 任务奖励灵石 int
  rewardMoney: string;
  // 任务奖励城主令 int
  rewardToken: string;
  // 任务奖励声望 int
  rewardReputation: string;
  // 奖励战功 int
  contribution: string;
  // 领取者宗门名誉 int
  rewardFame: string;
  // 是否自动提交 int
  submit: string;
  // 是否可以放弃 int
  isGive: string;
  // 任务描述 string
  desc: string;
  // 领取任务时调用剧情调剂及影响 string
  addTaskFunction: string;
  // 完成任务后调用剧情条件及影响 string
  completeTaskFunction: string;
  // 达到任务时间未能完成任务时调用剧情条件及影响 string
  failedTaskFunction: string;
  // 存在任务时得到气运（任务不存在时失去气运） string
  gainFeature: string;
  // 地图位置ID int
  positionID: string;
  // 领取、完成任务时是否有任务提示 int
  remind: string;
}

interface TaskLevel {
  // 任务等级 int
  id: string;
  // 难度名字 string
  name: string;
}

interface TownAuction {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface TownAuctionDrama {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface TownAuctionProp {
  // ID int
  id: string;
  // 产出ID int
  rewardID: string;
  // 城镇规模 int
  scale: string;
  // 组 int
  group: string;
  // 权重 int
  weight: string;
}

interface TownAuctionSpecialItem {
  // ID int
  id: string;
  // 条件 string
  condition: string;
  // 道具ID int
  item: string;
  // 流拍次数 int
  failCount: string;
  // 城镇等级 int
  level: string;
  // NPC竞拍 int
  bidding: string;
  // 道具底价 int
  itemPrice: string;
  // 月结ID string
  monthLogID: string;
}

interface TownBlackMarket {
  // 收购的道具ID int
  id: string;
  // 收购价格 int
  recoveryPrice: string;
}

interface TownBookstore {
  // ID int
  id: string;
  // 所需数量 int
  quantity: string;
  // 作用 string
  function: string;
  // 作用说明 string
  desc: string;
}

interface TownBounty {
  // ID int
  id: string;
  // 任务ID int
  taskID: string;
  // 城镇等级 int
  townLevel: string;
  // 类型 string
  className: string;
  // 条件 string
  condition: string;
  // 组 int
  group: string;
  // 每组最大数量 int
  countMax: string;
  // 刷出后存在时间（月） int
  duration: string;
  // 基础权重 int
  weightBase: string;
  // 每次刷新时增加的随机数 int
  randomReduce: string;
  // 最大权重 int
  weightMax: string;
  // 图标 string
  icon: string;
  // 悬赏榜任务描述 string
  desc: string;
  // 强制刷新条件 string
  forceUpdate: string;
}

interface TownBuilding {
  // ID int
  id: string;
  // 建筑名称 string
  name: string;
  // 建筑类型 int
  type: string;
  // 只在主城 int
  main: string;
  // 区域 string
  area: string;
}

interface TownFactotySell {
  // 道具ID int
  id: string;
  // 城镇等级 int
  level: string;
  // 只在主城出售 int
  mainTown: string;
  // 工坊炼制价格 int
  makePrice: string;
}

interface TownFactotySellArtifact {
  // 道具ID int
  id: string;
  // 城镇等级 int
  level: string;
  // 只在主城出售 int
  mainTown: string;
}

interface TownFight {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface TownFightDrama {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface TownFightSub {
  // 城镇区域ID int
  id: string;
  // 需求境界 int
  grade: string;
  // 需求声望 int
  reputation: string;
  // 需求职位 int
  postMax: string;
  // NPC的最高职位 int
  postMin: string;
  // 参赛选手数量 int
  unitNum: string;
  // 奖励道具 int
  item: string;
  // 报名消耗灵石 int
  money: string;
}

interface TownGirl {
  // ID int
  id: string;
  // 需求好感 int
  askClose: string;
  // 常驻剧情ID string
  dramaID: string;
  // 闲聊剧情ID string
  chatDramaID: string;
  // CD时的闲聊剧情ID string
  cdChatDramaID: string;
  // 闲聊增加好感 int
  chatCloseUp: string;
  // 闲聊间隔 int
  chatCD: string;
  // 赠送剧情ID string
  giveDramaID: string;
  // CD时赠送剧情ID string
  cdGiveDramaID: string;
  // 赠送基础好感 int
  giveCloseUp: string;
  // 道具价值缩放 string
  worthDown: string;
  // 赠送间隔 int
  giveCD: string;
  // 事件剧情ID string
  eventDramaID: string;
  // 事件触发间隔 int
  triggerCD: string;
  // 事件消耗好感 int
  closeDown: string;
}

interface TownHotel {
  // ID int
  id: string;
  // 建筑等级 int
  level: string;
  // 恢复ID int
  hospitalID: string;
  // 灵石消耗 int
  costMoney: string;
}

interface TownMarketBase {
  // ID int
  id: string;
  // 城镇等级 int
  level: string;
  // 道具组 int
  group: string;
  // 道具组名称 string
  name: string;
  // 最大数量 int
  countMax: string;
}

interface TownMarketBook {
  // ID int
  id: string;
  // 城镇规模 int
  scale: string;
  // 层数 int
  layer: string;
  // 声望需求 int
  reputation: string;
  // 境界显示 int
  grade: string;
  // 秘籍类型显示 string
  type: string;
  // 产出数量最小值 int
  numMin: string;
  // 产出数量最大值 int
  numMax: string;
  // 二级建筑产出ID int
  subID: string;
  // 必定产出 int
  outID: string;
}

interface TownMarketItem {
  // 道具ID int
  id: string;
  // 道具分组 int
  group: string;
  // 城镇等级 string
  level: string;
  // 仅在主城刷新 int
  mainTown: string;
  // 互斥分组 int
  conflict: string;
  // 最小数量 int
  amountMin: string;
  // 最大数量 int
  amountMax: string;
  // 权重 int
  weight: string;
  // 补丁替换ID int
  patch: string;
}

interface TownName {
  // ID int
  id: string;
  // 城镇名称 string
  name: string;
  // 前后类型 int
  position: string;
  // 规模类型 int
  scale: string;
  // 类型 int
  type: string;
}

interface TownNpcInfo {
  // ID int
  id: string;
  // 建筑ID int
  building: string;
  // 城镇规模 string
  scale: string;
  // NPC int
  dramaNpc: string;
  // 常驻对话 string
  dialogueID: string;
}

interface TownPub {
  // 物品ID int
  id: string;
  // 规模 string
  scale: string;
  // 组 int
  group: string;
  // 物品名称 string
  name: string;
  // 境界需求 int
  grade: string;
  // 图标A string
  iconA: string;
  // 品质 int
  level: string;
  // 说明 string
  descA: string;
  // 价格 int
  cost: string;
  // 作用 string
  function: string;
  // 添加气运 string
  addEffect: string;
  // 图标B string
  iconB: string;
  // 请所有人喝的价格 int
  bill: string;
  // 说明B string
  descB: string;
  // 增加的好感度最小值 int
  closeMin: string;
  // 增加的好感度最大值 int
  closeMax: string;
  // 人数最小值 int
  numMin: string;
  // 人数最大值 int
  numMax: string;
}

interface TownPubDrama {
  // ID int
  id: string;
  // 城镇等级 int
  level: string;
  // 出现地点 int
  main: string;
  // 出现悬赏按钮条件 string
  condition: string;
  // 点击按钮执行剧情命令 string
  action: string;
  // 按钮显示的文本 string
  btnText: string;
}

interface TownPubSub {
  // ID int
  id: string;
  // 城镇等级 int
  level: string;
  // 出现地点 int
  main: string;
  // 问句标题 string
  askText: string;
  // 问句 string
  ask: string;
  // 剧情ID string
  drama: string;
  // 红点提示 string
  newTip: string;
}

interface TownRefine {
  // ID int
  id: string;
  // 城镇等级 int
  level: string;
  // 名称 string
  name: string;
  // 产出组ID int
  rewardID: string;
  // 成功概率 int
  probability: string;
  // 消耗道具ID string
  itemCostID: string;
  // 消耗的灵石 int
  moneyCost: string;
}

interface TownTransmit {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface UnitActionTrigger {
  // ID int
  id: string;
  // 触发类型 int
  type: string;
  // 角色条件 string
  condition: string;
  // 获得角色日志 string
  roleLogID: string;
  // 获得月结日志 string
  gainLogID: string;
  // 触发参数1 string
  value1: string;
  // 触发参数2 string
  value2: string;
  // 触发参数3 string
  value3: string;
  // 触发参数4 string
  value4: string;
  // 触发参数5 string
  value5: string;
  // 触发参数6 string
  value6: string;
  // 触发参数7 string
  value7: string;
  // 触发参数8 string
  value8: string;
}

interface WeatherChangAddRate {
  // ID int
  id: string;
  // 区域ID int
  areaBaseId: string;
  // 天气类型 int
  weatherType: string;
  // 天气id int
  weatherId: string;
  // 成功率加值 int
  addRate: string;
}

interface WeatherEffect {
  // ID int
  id: string;
  // 天气名称 string
  name: string;
  // 天气模型 string
  model: string;
  // 生成作用 string
  initialFunction: string;
  // 持续作用 string
  continueFunction: string;
  // 间隔(月） int
  triggerCD: string;
  // 共享间隔组 int
  cdGroup: string;
  // 持续时间 int
  duration: string;
  // 季节 string
  season: string;
  // 排序 int
  sort: string;
  // 权重 int
  weight: string;
}

interface WeatherLayout {
  // 区域ID int
  id: string;
  // 天气效果ID string
  weatherId: string;
}

interface WingmanBase {
  // ID int
  id: string;
  // 名称 string
  name: string;
  // 普通效果描述 string
  effectDesc: string;
  // 爆发效果描述 string
  desc: string;
  // 图标 string
  icon: string;
  // 效果 string
  effect: string;
  // 战斗条件ID string
  battleSkillConditionID: string;
  // 删除玩家身上的效果 string
  delPlayerEffect: string;
  // 点击左键施加效果 string
  roleEffect: string;
  // 模型 string
  model: string;
  // 特效名 string
  effectName: string;
  // 爆发效果进度条件 int
  breakSkillConditionID: string;
}

interface WingmanEffect {
  // ID int
  id: string;
  // 效果图标 string
  icon: string;
  // 所属僚机 int
  wingManID: string;
  // 效果ID string
  effectID: string;
  // 名称 string
  name: string;
  // 描述 string
  desc: string;
}

interface WingmanFixValue {
  // ID int
  id: string;
  // 效果图标 string
  icon: string;
  // 所属僚机 int
  wingManID: string;
  // 修正数值 string
  prefixValue: string;
  // 突破修正1 string
  prefixValue1: string;
  // 突破修正2 string
  prefixValue12: string;
  // 名称 string
  name: string;
  // 显示数据 string
  showValue: string;
  // 显示数据修正1 string
  showValueFix1: string;
  // 显示数据修正2 string
  showValueFix2: string;
  // 描述 string
  desc: string;
}

interface WorldAreaSpecial {
  // ID int
  id: string;
  // 位置类型 int
  posType: string;
  // 位置参数 string
  posValue: string;
  // 数量 string
  count: string;
  // 是否强制创建 int
  coerceCreate: string;
  // 中心装饰ID string
  decorateID: string;
  // 建筑数据 string
  buildData: string;
  // 包围装饰ID string
  baseDecorateID: string;
  // 包围大小（x_y） int
  size: string;
  // 边缘扩大一格的装饰ID string
  edgeDecorateID: string;
  // 与相同地形最小距离 int
  minTheTerrDis: string;
  // 与特殊地形最小距离 int
  minTerrDis: string;
}

interface WorldBlockAttribute {
  // 类型ID int
  id: string;
  // 基础灵气 int
  basGas: string;
  // 基础风水 int
  basGeo: string;
  // 基础药材 int
  basHerb: string;
  // 基础金石 int
  basMine: string;
  // 环境灵气 int
  aroundGas: string;
  // 环境风水 int
  aroundGeo: string;
  // 环境药材 int
  aroundHerb: string;
  // 环境金石 int
  aroundMine: string;
  // 回复最小百分比 int
  restoreMin: string;
  // 回复最大百分比 int
  restoreMax: string;
}

interface WorldBlockGeomantic {
  // ID int
  id: string;
  // 参数名称 string
  key: string;
  // 参数值 int
  value: string;
}

interface WorldBlockGeomanticSub {
  // 格子事件ID int
  id: string;
  // 探测状态一评分参数 int
  scoreStateA: string;
  // 探测状态二评分参数 int
  scoreStateB: string;
  // 探测状态三评分参数 int
  scoreStateC: string;
}

interface WorldBlockGetExp {
  // 境界ID int
  id: string;
  // 角色境界 int
  grade: string;
  // 消耗灵气的最小百分比 int
  costGasMin: string;
  // 消耗灵气的最大百分比 int
  costGasMax: string;
  // 灵气转化率 float
  expPerGas: string;
  // 额外经验百分比 int
  expBonus: string;
  // 修炼消耗天数 int
  costDay: string;
  // 回复灵力百分比 int
  mpGrow: string;
}

interface WorldBlockHerb {
  // 技能ID int
  id: string;
  // 资质条件 int
  basHerb: string;
  // 是否默认学会 int
  conceal: string;
  // 是否默认产出 int
  outPut: string;
  // 地形ID int
  terrainID: string;
  // 道具ID int
  item: string;
  // 每次产出数量 string
  quantity: string;
  // 消耗时间 int
  costDay: string;
  // 每调用一次产出需要消耗的药材值 int
  costHerb: string;
  // 区域1权重 int
  weight1: string;
  // 区域2权重 int
  weight2: string;
  // 区域3权重 int
  weight3: string;
  // 区域4权重 int
  weight4: string;
  // 区域5权重 int
  weight5: string;
  // 区域6权重 int
  weight6: string;
  // 区域7权重 int
  weight7: string;
  // 区域8权重 int
  weight8: string;
  // 区域9权重 int
  weight9: string;
  // 区域10权重 int
  weight10: string;
  // 区域11权重 int
  weight11: string;
  // 区域12权重 int
  weight12: string;
  // 区域13权重 int
  weight13: string;
}

interface WorldBlockMine {
  // ID int
  id: string;
  // 区域ID int
  area: string;
  // 地形ID int
  terrainID: string;
  // 道具ID int[]
  item: string;
  // 价值参数 int
  pricePara: string;
  // 数量上限最小值 int
  limitMin: string;
  // 数量上限最大值 int
  limitMax: string;
  // 消耗时间 int
  costDay: string;
}

interface WorldBlockMineBook {
  // 技能ID int
  id: string;
  // 矿材资质要求 int
  basMine: string;
  // 条件 string
  condition: string;
  // 是否默认学会 int
  conceal: string;
  // 是否默认产出 int
  outPut: string;
  // 地形ID int
  terrainID: string;
  // 道具ID int
  item: string;
  // 数量上限最小值 int
  limitMin: string;
  // 数量上限最大值 int
  limitMax: string;
  // 消耗时间 int
  costDay: string;
  // 区域1权重 int
  weight1: string;
  // 区域2权重 int
  weight2: string;
  // 区域3权重 int
  weight3: string;
  // 区域4权重 int
  weight4: string;
  // 区域5权重 int
  weight5: string;
  // 区域6权重 int
  weight6: string;
  // 区域7权重 int
  weight7: string;
  // 区域8权重 int
  weight8: string;
  // 区域9权重 int
  weight9: string;
  // 区域10权重 int
  weight10: string;
  // 区域11权重 int
  weight11: string;
  // 区域12权重 int
  weight12: string;
  // 区域13权重 int
  weight13: string;
}

interface WorldBlockOperation {
  // ID int
  id: string;
  // 操作类型 string
  operation: string;
  // 消耗时间(天） int
  cost: string;
}

interface WorldBuilding10001 {
  // ID int
  id: string;
  // 投入道具ID int
  item: string;
  // 副本ID int
  dungeonID: string;
  // 副本等级 int
  level: string;
  // 副本权重 int
  weight: string;
  // 副本持续时间 int
  duration: string;
}

interface WorldBuilding10002 {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface WorldBuilding10005 {
  // ID int
  id: string;
  // 图标 string
  icon: string;
  // 名称 string
  name: string;
  // 按钮文本 string
  buttonText: string;
  // 描述 string
  desc: string;
  // 条件 string
  condition: string;
  // 不满足条件文本 string
  conditionDesc: string;
  // 消耗 string
  cost: string;
  // 是否隐藏消耗物 int
  costHide: string;
  // 按钮点击后二次确认提示 string
  clickTip: string;
  // 使用过一次后的额外文本 string
  winExtraDesc: string;
  // 冷却时间（月） int
  cd: string;
  // 冷却时是否隐藏 int
  cdHideBuild: string;
  // 图标隐藏时填充的装饰ID int
  decorateID: string;
  // 作用 string
  function: string;
  // 预览怪物组产出 int[]
  preview: string;
  // 预览中屏蔽显示道具 int[]
  ingorePreviewItem: string;
  // 建筑类型 int
  buildType: string;
  // 小地图图标类型 string
  minMapIconType: string;
}

interface WorldBuilding10007 {
  // ID int
  id: string;
  // 范围 int
  distance: string;
  // 获取的建筑类型 string
  terrainType: string;
  // 剧情ID int
  dramaID: string;
}

interface WorldBuilding10008 {
  // ID int
  id: string;
  // 仙祠名称 string
  name: string;
  // 仙祠等级 int
  level: string;
  // 生成区域 string
  area: string;
  // 图标id int
  icon: string;
  // 注入仙力剧情 string
  fairyPowerID: string;
  // 认证剧情 string
  dramaID: string;
  // 供奉价值 int
  consecrateAmount: string;
  // 挑战剧情 string
  challengeID: string;
  // 闲聊剧情 string
  gossipID: string;
  // 切磋剧情 string
  DuelID: string;
  // 初始可以打开 int
  initCanOpen: string;
  // 供奉剧情 string
  consecrateID: string;
  // 石像ID int
  stoneID: string;
}

interface WorldBuildingBase {
  // 建筑ID int
  id: string;
  // 进入建筑打开的UI string
  openUI: string;
  // 进入建筑打开的剧情 string
  dramaID: string;
}

interface WorldCreateCmd {
  // ID int
  id: string;
  // 执行顺序（在命令之后） string
  cmdOrder: string;
  // 命令 string
  cmd: string;
  // 参数 string
  value: string;
}

interface WorldDungeonLevel {
  // ID int
  id: string;
  // 区域积分 int
  areaPoint: string;
  // 副本等级Min int
  dungeonLevelMin: string;
  // 副本等级Max int
  dungeonLevelMax: string;
}

interface WorldFortuitousEvent2 {
  // ID int
  id: string;
  // 目的地类型 int
  finishType: string;
  // 目的地参数 string
  finishValue: string;
  // 移动类型 int
  moveType: string;
  // 移动参数 int
  moveValue: string;
  // 移动时是否转向 int
  isLookDire: string;
  // 创建时是否执行一次作用 int
  createEvemtFunction: string;
  // 抵达目的地执行的作用 int
  functionValue: string;
  // 移动到目的地是否隐藏事件 int
  moveEndHide: string;
  // 移动到目的地是否删除事件 int
  moveEndDel: string;
  // 移动到范围内弹出对话 int
  dramaRange: string;
  // 弹出的对话ID string
  dramaID: string;
}

interface WorldFortuitousEvent2Effect {
  // ID int
  id: string;
  // 中心区域大小大小 int
  size: string;
  // 中心区域地形ID,最少包含一个一格的地形 string
  baseDecorateID: string;
  // 初始区域边缘格子出现百分比 int
  showDecorateRate: string;
  // 间隔（月） int
  interval: string;
  // 填充地形,只能为1格地形 string
  decorateID: string;
  // 增长半径 int
  sizeVariation: string;
  // 最大半径 int
  sizeMax: string;
  // 天气ID int
  weatherId: string;
}

interface WorldFortuitousEvent3 {
  // ID int
  id: string;
  // 最小资源 int
  minResource: string;
  // 最大资源 int
  maxResource: string;
  // 生成最大数量 int
  foundMaxValue: string;
  // 最大数量 int
  maxValue: string;
  // 生成概率 int
  weight: string;
  // 最大回合数 int
  maxTime: string;
}

interface WorldFortuitousEvent4 {
  // ID int
  id: string;
  // 移动图标 string
  icon: string;
  // 移动速度 int
  moveValue: string;
  // 待机时移动范围 string
  idleMoveSize: string;
  // 移动时是否转向 int
  isLookDire: string;
  // 警戒触发追踪的视野 int
  attackDis: string;
  // 最大追踪距离 int
  maxMoveDis: string;
  // 弹出的对话ID string
  dramaID: string;
}

interface WorldFortuitousEvent5 {
  // ID int
  id: string;
  // 移动图标 string
  icon: string;
  // 移动速度 int
  moveValue: string;
  // 移动时是否转向 int
  isLookDire: string;
  // 目的地 string
  point: string;
  // 弹出的对话ID string
  dramaID: string;
}

interface WorldFortuitousEvent7 {
  // ID int
  id: string;
  // 资源等级 int
  level: string;
  // 领地形状 int
  shape: string;
  // 领地范围 int
  range: string;
  // 领地格子 string
  points: string;
  // 数量（可以采几个月） int
  count: string;
  // 特殊产出（给商店） int
  specialReward: string;
  // 掠夺产出（给玩家） int
  specialRewardToPlayer: string;
  // 产出灵石（掠夺产出给宗门） int
  outSpiritStonesToPlayer: string;
  // 产出药材（掠夺产出给宗门） int
  outHerbToPlayer: string;
  // 产出矿材（掠夺产出给宗门） int
  outOreToPlayer: string;
  // 资源类型 int
  typ: string;
  // 产出灵石（给宗门） string
  outSpiritStones: string;
  // 产出药材 string
  outHerb: string;
  // 产出矿材 string
  outOre: string;
  // 出战消耗灵石 string
  warUsageSpiritStones: string;
  // 出战消耗药材 string
  warUsageHerb: string;
  // 出战消耗矿材 string
  warUsageOre: string;
  // 占领产出（给玩家） int
  warUsageRewardToPlayer: string;
  // 发生战斗降低的安定度 int
  warLoseStable: string;
  // 掠夺任务战力 string
  taskRobPower: string;
  // 每个区域的刷出权重 int[][]
  refreshWeight: string;
}

interface WorldFortuitousEvent7Sub {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 int
  value: string;
}

interface WorldFortuitousEventBase {
  // ID int
  id: string;
  // 事件名称 string
  name: string;
  // 是否显示名字到UI int
  showName: string;
  // 事件图标 string
  icon: string;
  // 生成是否切换镜头 string
  moveCamGridEffect: string;
  // 事件分类 int
  className: string;
  // 事件类型 int
  type: string;
  // 出现时弹出的对话ID string
  createDramaID: string;
  // 移动至图标上弹出的对话ID string
  dramaID: string;
  // 是否默认隐藏，需要通过堪舆才显示 int
  isGeomantic: string;
  // 是否需要通过特殊途径删除 int
  isForceDel: string;
  // 创建事件时执行的命令 string
  createFunction: string;
  // 时间到了删除事件后执行命令（中途清除的不算） string
  notTimeFunction: string;
  // 移动至图标上打开剧情前触发作用 string
  function: string;
  // 移动至图标上打开剧情后触发作用 string
  moveOnFunction: string;
  // 持续时间（月） string
  duration: string;
  // 设置NPC1 string
  setNPCA: string;
  // 设置NPC2 string
  setNPCB: string;
  // 移动至图标上弹出的对话ID string
  notNPCDramaID: string;
  // 最大数量 int
  maxCount: string;
  // 是否在小地图显示 string
  appearMap: string;
  // 打开周围视野 int
  openView: string;
  // 生成时月结日志 string
  createMonthLog: string;
  // 删除时月结日志 string
  delMonthLog: string;
  // 小地图图标类型 string
  minMapIconType: string;
  // 事件图标特效 string
  iconEffect: string;
  // 特效显示条件 string
  effectCondition: string;
}

interface WorldFortuitousEventIcon {
  // ID int
  id: string;
  // 事件图标 string
  icon: string;
  // 所占的格子数 string
  point: string;
  // 触发对话生效格子 string
  dramaPoint: string;
  // 生成是否隐藏地形 int
  hideDecorate: string;
  // 走出视野外是否隐藏 int
  outViewHide: string;
}

interface WorldMonsterArea {
  // 区域ID int
  id: string;
  // 类型 int
  type: string;
  // 区域中心点X int
  centreX: string;
  // 区域中心点Y int
  centreY: string;
}

interface WorldMonsterAreaMatch {
  // ID int
  id: string;
  // 区域ID int
  areaID: string;
  // 副本ID int
  dungeonID: string;
  // 初始等级 int
  initLevel: string;
  // 最大等级提升的间隔月数 int
  levelUpMonth: string;
  // 最大等级限制 int
  maxLevel: string;
  // 权重 int
  weight: string;
}

interface WorldMonsterAreaTrigger {
  // 区域ID int
  id: string;
  // 遇怪概率 int
  probability: string;
  // 最长遇怪距离 int
  distanceMax: string;
  // 基础副本等级 int
  levelBase: string;
  // 距离提升等级系数 int
  levelDis: string;
}

interface WorldMonsterRefresh {
  // ID int
  id: string;
  // 参数 string
  key: string;
  // 值 string
  value: string;
}

interface WorldMonsterSpecialArea {
  // ID int
  id: string;
  // 坐标点 string
  site: string;
  // 事件ID string
  eventID: string;
  // 刷新时间 int
  time: string;
}

interface WorldTerr1001 {
  // ID int
  id: string;
  // 名字 string
  name: string;
  // 遇怪概率 int
  probability: string;
  // 作用 string
  function: string;
  // 图标 string
  icon: string;
}

interface WorldTerrainDecorate {
  // 装饰ID int
  id: string;
  // 地形类型 int
  type: string;
  // 分类 string
  className: string;
  // 所占的格子数 string
  point: string;
  // 打开建筑生效格子 string
  openBuildPoint: string;
  // 参数 string
  condition: string;
  // 出现概率 int
  weight: string;
}

interface WorldTerrainType {
  // ID int
  id: string;
  // 名称 string
  name: string;
  // 地形是否可以覆盖 int
  isOverDecorate: string;
  // 移动消耗 int
  moveCost: string;
}

interface WorldVillage1 {
  // id int
  id: string;
  // 村庄ID int
  villageID: string;
  // 小人位置 int
  index: string;
  // 显示条件 string
  condition: string;
  // 剧情ID string
  dramaID: string;
  // 红点提示 string
  newTip: string;
}

interface WorldVillageBase {
  // 村庄ID int
  id: string;
  // 村庄名字 string
  name: string;
  // 背景 string
  bg: string;
}
