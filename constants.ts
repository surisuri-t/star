
import { Constellation } from './types';

export const CONSTELLATIONS: Constellation[] = [
  {
    id: 'big-dipper',
    name: 'The Big Dipper',
    koreanName: '북두칠성',
    description: 'The seven brightest stars of the constellation Ursa Major.',
    myth: '한국 신화에서는 죽음을 관장하는 신성한 별로 여겨졌으며, 일곱 형제가 효심을 기리기 위해 하늘의 별이 되었다는 전설이 있습니다.',
    funFact: '북두칠성은 그 자체로 별자리가 아니라, 큰곰자리의 일부분입니다.',
    difficulty: 'Easy',
    stars: [
      { id: 0, x: 20, y: 30 },
      { id: 1, x: 35, y: 45 },
      { id: 2, x: 50, y: 50 },
      { id: 3, x: 60, y: 40 },
      { id: 4, x: 80, y: 35 },
      { id: 5, x: 85, y: 55 },
      { id: 6, x: 65, y: 60 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]]
  },
  {
    id: 'cassiopeia',
    name: 'Cassiopeia',
    koreanName: '카시오페아',
    description: 'A distinct W-shaped constellation.',
    myth: '허영심 많은 왕비 카시오페아가 의자에 앉은 채 거꾸로 매달려 벌을 받고 있는 모습이라고 전해집니다.',
    funFact: '계절에 따라 W자 또는 M자로 보입니다.',
    difficulty: 'Easy',
    stars: [
      { id: 0, x: 20, y: 40 },
      { id: 1, x: 35, y: 60 },
      { id: 2, x: 50, y: 45 },
      { id: 3, x: 65, y: 65 },
      { id: 4, x: 80, y: 40 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4]]
  },
  {
    id: 'lyra',
    name: 'Lyra',
    koreanName: '거문고자리',
    description: 'The lyre of Orpheus.',
    myth: '신화 속 최고의 음악가 오르페우스의 하프입니다. 그의 연주에 동식물은 물론 바위까지 감동했다고 합니다.',
    funFact: '가장 밝은 별 베가(Vega)는 우리나라에서 직녀성으로 알려져 있습니다.',
    difficulty: 'Medium',
    stars: [
      { id: 0, x: 50, y: 20 },
      { id: 1, x: 40, y: 45 },
      { id: 2, x: 60, y: 45 },
      { id: 3, x: 40, y: 70 },
      { id: 4, x: 60, y: 70 }
    ],
    connections: [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4], [4, 2]]
  },
  {
    id: 'orion',
    name: 'Orion',
    koreanName: '오리온자리',
    description: 'The Hunter.',
    myth: '거인 사냥꾼 오리온의 모습입니다. 그는 죽어서도 하늘을 가로지르며 사냥을 계속하고 있습니다.',
    funFact: '겨울철 밤하늘에서 가장 찾기 쉬운 별자리 중 하나입니다.',
    difficulty: 'Hard',
    stars: [
      { id: 0, x: 35, y: 20 },
      { id: 1, x: 65, y: 20 },
      { id: 2, x: 45, y: 50 },
      { id: 3, x: 50, y: 50 },
      { id: 4, x: 55, y: 50 },
      { id: 5, x: 35, y: 80 },
      { id: 6, x: 65, y: 80 }
    ],
    connections: [[0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6]]
  }
];
