const fs = require("fs")
const path = require("path")

const alphabetStr = `A	𝐀	𝐴	𝑨	𝖠	𝗔	𝘈	𝘼	𝒜	𝓐	𝔄	𝕬	𝙰	𝔸
B	𝐁	𝐵	𝑩	𝖡	𝗕	𝘉	𝘽	ℬ	𝓑	𝔅	𝕭	𝙱	𝔹
C	𝐂	𝐶	𝑪	𝖢	𝗖	𝘊	𝘾	𝒞	𝓒	ℭ	𝕮	𝙲	ℂ
D	𝐃	𝐷	𝑫	𝖣	𝗗	𝘋	𝘿	𝒟	𝓓	𝔇	𝕯	𝙳	𝔻
E	𝐄	𝐸	𝑬	𝖤	𝗘	𝘌	𝙀	ℰ	𝓔	𝔈	𝕰	𝙴	𝔼
F	𝐅	𝐹	𝑭	𝖥	𝗙	𝘍	𝙁	ℱ	𝓕	𝔉	𝕱	𝙵	𝔽
G	𝐆	𝐺	𝑮	𝖦	𝗚	𝘎	𝙂	𝒢	𝓖	𝔊	𝕲	𝙶	𝔾
H	𝐇	𝐻	𝑯	𝖧	𝗛	𝘏	𝙃	ℋ	𝓗	ℌ	𝕳	𝙷	ℍ
I	𝐈	𝐼	𝑰	𝖨	𝗜	𝘐	𝙄	ℐ	𝓘	ℑ	𝕴	𝙸	𝕀
J	𝐉	𝐽	𝑱	𝖩	𝗝	𝘑	𝙅	𝒥	𝓙	𝔍	𝕵	𝙹	𝕁
K	𝐊	𝐾	𝑲	𝖪	𝗞	𝘒	𝙆	𝒦	𝓚	𝔎	𝕶	𝙺	𝕂
L	𝐋	𝐿	𝑳	𝖫	𝗟	𝘓	𝙇	ℒ	𝓛	𝔏	𝕷	𝙻	𝕃
M	𝐌	𝑀	𝑴	𝖬	𝗠	𝘔	𝙈	ℳ	𝓜	𝔐	𝕸	𝙼	𝕄
N	𝐍	𝑁	𝑵	𝖭	𝗡	𝘕	𝙉	𝒩	𝓝	𝔑	𝕹	𝙽	ℕ
O	𝐎	𝑂	𝑶	𝖮	𝗢	𝘖	𝙊	𝒪	𝓞	𝔒	𝕺	𝙾	𝕆
P	𝐏	𝑃	𝑷	𝖯	𝗣	𝘗	𝙋	𝒫	𝓟	𝔓	𝕻	𝙿	ℙ
Q	𝐐	𝑄	𝑸	𝖰	𝗤	𝘘	𝙌	𝒬	𝓠	𝔔	𝕼	𝚀	ℚ
R	𝐑	𝑅	𝑹	𝖱	𝗥	𝘙	𝙍	ℛ	𝓡	ℜ	𝕽	𝚁	ℝ
S	𝐒	𝑆	𝑺	𝖲	𝗦	𝘚	𝙎	𝒮	𝓢	𝔖	𝕾	𝚂	𝕊
T	𝐓	𝑇	𝑻	𝖳	𝗧	𝘛	𝙏	𝒯	𝓣	𝔗	𝕿	𝚃	𝕋
U	𝐔	𝑈	𝑼	𝖴	𝗨	𝘜	𝙐	𝒰	𝓤	𝔘	𝖀	𝚄	𝕌
V	𝐕	𝑉	𝑽	𝖵	𝗩	𝘝	𝙑	𝒱	𝓥	𝔙	𝖁	𝚅	𝕍
W	𝐖	𝑊	𝑾	𝖶	𝗪	𝘞	𝙒	𝒲	𝓦	𝔚	𝖂	𝚆	𝕎
X	𝐗	𝑋	𝑿	𝖷	𝗫	𝘟	𝙓	𝒳	𝓧	𝔛	𝖃	𝚇	𝕏
Y	𝐘	𝑌	𝒀	𝖸	𝗬	𝘠	𝙔	𝒴	𝓨	𝔜	𝖄	𝚈	𝕐
Z	𝐙	𝑍	𝒁	𝖹	𝗭	𝘡	𝙕	𝒵	𝓩	ℨ	𝖅	𝚉	ℤ
a	𝐚	𝑎	𝒂	𝖺	𝗮	𝘢	𝙖	𝒶	𝓪	𝔞	𝖆	𝚊	𝕒
b	𝐛	𝑏	𝒃	𝖻	𝗯	𝘣	𝙗	𝒷	𝓫	𝔟	𝖇	𝚋	𝕓
c	𝐜	𝑐	𝒄	𝖼	𝗰	𝘤	𝙘	𝒸	𝓬	𝔠	𝖈	𝚌	𝕔
d	𝐝	𝑑	𝒅	𝖽	𝗱	𝘥	𝙙	𝒹	𝓭	𝔡	𝖉	𝚍	𝕕
e	𝐞	𝑒	𝒆	𝖾	𝗲	𝘦	𝙚	ℯ	𝓮	𝔢	𝖊	𝚎	𝕖
f	𝐟	𝑓	𝒇	𝖿	𝗳	𝘧	𝙛	𝒻	𝓯	𝔣	𝖋	𝚏	𝕗
g	𝐠	𝑔	𝒈	𝗀	𝗴	𝘨	𝙜	ℊ	𝓰	𝔤	𝖌	𝚐	𝕘
h	𝐡	ℎ	𝒉	𝗁	𝗵	𝘩	𝙝	𝒽	𝓱	𝔥	𝖍	𝚑	𝕙
i	𝐢	𝑖	𝒊	𝗂	𝗶	𝘪	𝙞	𝒾	𝓲	𝔦	𝖎	𝚒	𝕚
j	𝐣	𝑗	𝒋	𝗃	𝗷	𝘫	𝙟	𝒿	𝓳	𝔧	𝖏	𝚓	𝕛
k	𝐤	𝑘	𝒌	𝗄	𝗸	𝘬	𝙠	𝓀	𝓴	𝔨	𝖐	𝚔	𝕜
l	𝐥	𝑙	𝒍	𝗅	𝗹	𝘭	𝙡	𝓁	𝓵	𝔩	𝖑	𝚕	𝕝
m	𝐦	𝑚	𝒎	𝗆	𝗺	𝘮	𝙢	𝓂	𝓶	𝔪	𝖒	𝚖	𝕞
n	𝐧	𝑛	𝒏	𝗇	𝗻	𝘯	𝙣	𝓃	𝓷	𝔫	𝖓	𝚗	𝕟
o	𝐨	𝑜	𝒐	𝗈	𝗼	𝘰	𝙤	ℴ	𝓸	𝔬	𝖔	𝚘	𝕠
p	𝐩	𝑝	𝒑	𝗉	𝗽	𝘱	𝙥	𝓅	𝓹	𝔭	𝖕	𝚙	𝕡
q	𝐪	𝑞	𝒒	𝗊	𝗾	𝘲	𝙦	𝓆	𝓺	𝔮	𝖖	𝚚	𝕢
r	𝐫	𝑟	𝒓	𝗋	𝗿	𝘳	𝙧	𝓇	𝓻	𝔯	𝖗	𝚛	𝕣
s	𝐬	𝑠	𝒔	𝗌	𝘀	𝘴	𝙨	𝓈	𝓼	𝔰	𝖘	𝚜	𝕤
t	𝐭	𝑡	𝒕	𝗍	𝘁	𝘵	𝙩	𝓉	𝓽	𝔱	𝖙	𝚝	𝕥
u	𝐮	𝑢	𝒖	𝗎	𝘂	𝘶	𝙪	𝓊	𝓾	𝔲	𝖚	𝚞	𝕦
v	𝐯	𝑣	𝒗	𝗏	𝘃	𝘷	𝙫	𝓋	𝓿	𝔳	𝖛	𝚟	𝕧
w	𝐰	𝑤	𝒘	𝗐	𝘄	𝘸	𝙬	𝓌	𝔀	𝔴	𝖜	𝚠	𝕨
x	𝐱	𝑥	𝒙	𝗑	𝘅	𝘹	𝙭	𝓍	𝔁	𝔵	𝖝	𝚡	𝕩
y	𝐲	𝑦	𝒚	𝗒	𝘆	𝘺	𝙮	𝓎	𝔂	𝔶	𝖞	𝚢	𝕪
z	𝐳	𝑧	𝒛	𝗓	𝘇	𝘻	𝙯	𝓏	𝔃	𝔷	𝖟	𝚣	𝕫`

const numberStr = `0	𝟎	𝟘	𝟢	𝟬	𝟶
1	𝟏	𝟙	𝟣	𝟭	𝟷
2	𝟐	𝟚	𝟤	𝟮	𝟸
3	𝟑	𝟛	𝟥	𝟯	𝟹
4	𝟒	𝟜	𝟦	𝟰	𝟺
5	𝟓	𝟝	𝟧	𝟱	𝟻
6	𝟔	𝟞	𝟨	𝟲	𝟼
7	𝟕	𝟟	𝟩	𝟳	𝟽
8	𝟖	𝟠	𝟪	𝟴	𝟾
9	𝟗	𝟡	𝟫	𝟵	𝟿`

const genericNames = [
  "serif.normal",
  "serif.bold",
  "serif.italic",
  "serif.bold-italic",
  "sans-serif.normal",
  "sans-serif.bold",
  "sans-serif.italic",
  "sans-serif.bold-italic",
  "script.normal",
  "script.bold",
  "fraktur.normal",
  "fraktur.bold",
  "mono-space.normal",
  "double-struck.bold"
]

const numberNames = [
  "serif.normal",
  "serif.bold",
  "double-struck.bold",
  "sans-serif.normal",
  "sans-serif.bold",
  "mono-space.normal"
]

const mapByColumn = (matrix = [], f = x => x) => {
  const columnLength = matrix.length
  const rowLength = matrix[0].length
  const res = []
  for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
    let column = []
    for (let columnIndex = 0; columnIndex < columnLength; columnIndex++) {
      column.push(matrix[columnIndex][rowIndex])
    }
    res.push(f(column))
  }
  return res
}

const toTable = (s = "") => s.split("\n")
  .map(row => row.split(/\s/))

const toMap = (table = [], names = []) =>
  table.reduce((acc, row, index) => {
    acc[names[index]] = row
    return acc
  }, {})

const alphabetTable = mapByColumn(toTable(alphabetStr))
const numberTable = mapByColumn(toTable(numberStr))
const alphabetMap = toMap(alphabetTable, genericNames)
const numberMap = toMap(numberTable, numberNames)

Object.keys(alphabetMap)
  .forEach(name => {
    if (numberMap[name]) {
      alphabetMap[name].push(...numberMap[name])
    }
  })

fs.writeFileSync(
  path.join(__dirname, "data.json"),
  JSON.stringify(alphabetMap)
)
