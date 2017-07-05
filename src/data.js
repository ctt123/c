/**
 * Created by ctt on 2017/5/16.
 */
import Mock from 'mockjs'

// let Random = Mock.Random
let mock2 = Mock.mock(
  'http://g.cn', {
    'array|6': [{
      'id|+1': 0,
      'title': '@ctitle',
      'age|1-100': 100,
      'color': '@color',
      'img|+1': [
        {href: 'http://s2.mogucdn.com/mlcdn/c45406/170515_47dlgi48lf85g4614ah00l2lj7lc3_302x604.jpg_300x9999.v1c7E.70.webp'},
        {href: 'http://s2.mogucdn.com/mlcdn/c45406/170522_357cjj342hll59c21ib5abhed93ac_551x1102.jpg_400x9999.v1c7E.70.webp'},
        {href: 'http://s2.mogucdn.com/mlcdn/c45406/170522_3kjbibdceb1al2bla69a8885fckge_495x990.jpg_400x9999.v1c7E.70.webp'},
        {href: 'http://s2.mogucdn.com/mlcdn/c45406/170520_35eid9ic5kjb315e4ai4ef9a22jgi_611x1221.png_400x9999.v1c7E.70.webp'},
        {href: 'http://s11.mogucdn.com/mlcdn/c45406/170520_2jff63698cefgkl2140ck4b6933g3_424x847.jpg_400x9999.v1c7E.70.webp'},
        {href: 'http://s2.mogucdn.com/mlcdn/c45406/170519_7h35l8cgei94i7a0lflaf63ffbehd_395x790.jpg_400x9999.v1c7E.70.webp'},
        {href: 'http://s2.mogucdn.com/mlcdn/c45406/170520_81f8g0i868c2l72gfece6ccejhkcb_385x769.jpg_400x9999.v1c7E.70.webp'},
        {href: 'http://s2.mogucdn.com/mlcdn/c45406/170415_306a7iggi6705ga16440aa8l18g99_302x604.jpg_300x9999.v1c7E.70.webp'},
        {href: 'http://s2.mogucdn.com/mlcdn/c45406/170417_72h3didl0lhh3cc3g50418g48i84b_302x604.jpg_300x9999.v1c7E.70.webp'},
        {href: 'http://s2.mogucdn.com/mlcdn/c45406/170414_83h3i8ga1f9k7eb38ll828lc24413_302x604.jpg_300x9999.v1c7E.70.webp'}
      ]
    }],
    'serviceArray|20': [{
      'id|+1': 0,
      'title': '@ctitle',
      'age|1-100': 100,
      'color': '@color',
      'img|+1': [
        {
          href: 'http://s2.mogucdn.com/mlcdn/c45406/170515_47dlgi48lf85g4614ah00l2lj7lc3_302x604.jpg_300x9999.v1c7E.70.webp',
          name: '裙子1'
        },
        {
          href: 'http://s2.mogucdn.com/mlcdn/c45406/170522_357cjj342hll59c21ib5abhed93ac_551x1102.jpg_400x9999.v1c7E.70.webp',
          name: '裙子2'
        },
        {
          href: 'http://s2.mogucdn.com/mlcdn/c45406/170522_3kjbibdceb1al2bla69a8885fckge_495x990.jpg_400x9999.v1c7E.70.webp',
          name: '裙子3'
        },
        {
          href: 'http://s2.mogucdn.com/mlcdn/c45406/170520_35eid9ic5kjb315e4ai4ef9a22jgi_611x1221.png_400x9999.v1c7E.70.webp',
          name: '裙子4'
        },
        {
          href: 'http://s11.mogucdn.com/mlcdn/c45406/170520_2jff63698cefgkl2140ck4b6933g3_424x847.jpg_400x9999.v1c7E.70.webp',
          name: '裙子5'
        },
        {
          href: 'http://s2.mogucdn.com/mlcdn/c45406/170519_7h35l8cgei94i7a0lflaf63ffbehd_395x790.jpg_400x9999.v1c7E.70.webp',
          name: '裙子6'
        },
        {
          href: 'http://s2.mogucdn.com/mlcdn/c45406/170520_81f8g0i868c2l72gfece6ccejhkcb_385x769.jpg_400x9999.v1c7E.70.webp',
          name: '裙子7'
        },
        {
          href: 'http://s2.mogucdn.com/mlcdn/c45406/170415_306a7iggi6705ga16440aa8l18g99_302x604.jpg_300x9999.v1c7E.70.webp',
          name: '裙子8'
        },
        {
          href: 'http://s2.mogucdn.com/mlcdn/c45406/170417_72h3didl0lhh3cc3g50418g48i84b_302x604.jpg_300x9999.v1c7E.70.webp',
          name: '裙子9'
        },
        {
          href: 'http://s2.mogucdn.com/mlcdn/c45406/170414_83h3i8ga1f9k7eb38ll828lc24413_302x604.jpg_300x9999.v1c7E.70.webp',
          name: '裙子10'
        }
      ]
    }],
    commodityType: [
      {
        name: '学习',
        id: 0,
        child: [
          {name: '教科本', id: 0},
          {name: '笔', id: 0},
          {name: '课外书', id: 0}
        ]
      },
      {name: '配饰', href: '/serviceTopic/:1', id: 1},
      {name: '电子', href: '/serviceTopic/:2', id: 2},
      {name: '包包', href: '/serviceTopic/:3', id: 3},
      {name: '女装', href: '/serviceTopic/:4', id: 4},
      {name: '男装', href: '/serviceTopic/:5', id: 5},
      {name: '园艺', href: '/serviceTopic/:6', id: 6},
      {name: '配件', href: '/serviceTopic/:7', id: 7},
      {name: '化妆', href: '/serviceTopic/:8', id: 8},
      {name: '运动', href: '/serviceTopic/:9', id: 9},
      {name: '其他', href: '/serviceTopic/:10', id: 10}
    ]
  })

export default mock2

