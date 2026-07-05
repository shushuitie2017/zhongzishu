// Shared GUI control schema for Weber-Penn broadleaf species (oak, maple, poplar,
// sweetgum, beech, …). Each entry maps a slider to that species' own params, so
// every broadleaf gets the same vocabulary without duplicating the array.

import { CROWN_SHAPES } from '../ui/controls.js';

export const broadleafControls = [
  { key: 'height', name: '高度（米）', min: 4, max: 30, step: 0.5, get: (s) => s.params.scale, set: (s, v) => { s.params.scale = v; } },
  { key: 'levels', name: '分支层级', min: 2, max: 4, step: 1, get: (s) => s.params.levels, set: (s, v) => { s.params.levels = Math.round(v); } },
  { key: 'crownShape', name: '树冠形状', dropdown: CROWN_SHAPES, get: (s) => s.params.shape, set: (s, v) => { s.params.shape = Math.round(v); } },
  { key: 'branchDensity', name: '分支密度', min: 2, max: 45, step: 1, get: (s) => s.params.branches[1] ?? 20, set: (s, v) => { s.params.branches[1] = Math.round(v); } },
  { key: 'branchAngle', name: '分支角度', min: 15, max: 95, step: 1, get: (s) => s.params.downAngle[1] ?? 50, set: (s, v) => { s.params.downAngle[1] = v; } },
  { key: 'gnarliness', name: '虬曲度', min: 0, max: 120, step: 1, get: (s) => s.params.curveV[1] ?? 40, set: (s, v) => { s.params.curveV[1] = v; } },
  { key: 'trunks', name: '主干数', min: 1, max: 4, step: 1, get: (s) => 1 + (s.params.baseSplits || 0), set: (s, v) => { s.params.baseSplits = Math.round(v) - 1; } },
  { key: 'trunkThickness', name: '主干粗细', min: 0.4, max: 2.2, step: 0.05, get: () => 1, set: (s, v) => { s.params.ratio *= v; } },
  { key: 'leafSize', name: '叶片大小', min: 0.2, max: 1.5, step: 0.05, get: (s) => s.foliage.size ?? 0.6, set: (s, v) => { s.foliage.size = v; } },
  { key: 'leavesPerBranch', name: '每枝叶数', min: 0, max: 30, step: 1, get: (s) => s.foliage.leavesPerBranch ?? 14, set: (s, v) => { s.foliage.leavesPerBranch = Math.round(v); } },
];
