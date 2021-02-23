/* Powered by Sttot, 2021-2-15 14:44:20 */

var donationList = [{
        date  : '2020-2',
        income: [
            ['Kitou_', 50],
            ['IronGuo', 40],
            ['Martian', 50],
            ['Judy', 24]
        ],
        cost: [116.72, '从单核2G转到双核4G']
    },
    {
        date  : '2020-3',
        income: [
            ['Kitou_', 50],
            ['Martian', 50],
            ['RainListener7', 20],
            ['Binggan_owo', 30],
            ['tsukimi', 20],
            ['Judy', 200],
            ['Acam', 50],
            ['LFCF_yu', 30]
        ],
        cost: [260, null]
    },
    {
        date  : '2020-4',
        income: [
            [null, 50],
            ['LFCF_yu', 50],
            ['Sttot', 80],
            ['红石自学八级', 260],
            ['Martian', 100]
        ],
        cost: [260, null]
    },
    {
        date  : '2020-5',
        income: [
            ['Sttot', 380],
            ['Sheng_qi', 30],
            ['MatsusitaYuko', 20],
            ['bingogyz', 50]
        ],
        cost: [380, '幻境云预付两个月-至6月']
    },
    {
        date  : '2020-6',
        income: [
            ['Sttot', 410],
            ['Martian', 300],
            ['MatsusitaYoku', 20],
            ['RainListener7', 20],
            ['Yi_LiXi', 50],
            ['cornelia_318', 50],
            ['CC', 50]
        ],
        cost: [410, '(幻境云服务器升级(i9, 5GHz) 6核8G)+购买一些正版插件']
    },
    {
        date  : '2020-7',
        income: [
            [null, 23.33],
            ['MatsusitaYoku', 20],
            ['CursoR_2333', 4.14],
            ['Hooyah', 50]
        ],
        cost: [500, null]
    },
    {
        date  : '2020-8',
        income: [
            ['WUTONG', 30],
            ['blacklight', 20],
            [null, 50],
            ['CC', 52.25],
            ['Martian', 200],
            ['TANGHAHA', 30]
        ],
        cost: [500, null]
    },
    {
        date  : '2020-9',
        income: [
            ['Martian', 300],
            ['默默然', 100],
            ['WUTONG', 5]
        ],
        cost: [500, null]
    },
    {
        date  : '2020-10',
        income: [
            ['WUTONG', 25.23],
            ['Judy', 100],
            ['Cubik65536', 9.2],
            ['quenton1225', 58]
        ],
        cost: [500, null]
    },
    {
        date  : '2020-11',
        income: [
            ['Martian', 200],
            ['quenton1225', 174],
            ['罗格斯', 100],
            ['Cubik_65536', 6.61],
            [null, 6.66],
            [null, 58],
            ['默默然', 100]
        ],
        cost: [500, null]
    },
    {
        date  : '2020-12',
        income: [
            ['Charon', 520],
            ['Martian', 200]
        ],
        cost: [500, '幻境云服务器升级(AMD Ryzen 5950X 6核10G)']
    },
    {
        date  : '2021-1',
        income: [
            ['罗格斯', 100],
            ['YouZhaGui', 10],
            ['pencil', 23.33],
            ['Ryzen_', 18.88]
        ],
        cost: [400, '预付打八折']
    },
    {
        date  : '2021-2',
        income: [
            ['WilliamDragon', 12],
            ['WUTONG', 20],
            ['Judy', 11.4],
            [null, 10],
            ['OGODANIX', 13],
            ['Martian', 200]
        ],
        cost: [400, null]
    }
];

var last = 0.0;
for(var i = 0, ilen = donationList.length; i < ilen; i++) {
    donationList[i].last = last.toFixed(2);
    for (var j = 0, jlen = donationList[i].income.length; j < jlen; j++) {
        last += donationList[i].income[j][1];
    }
    last -= donationList[i].cost[0];
}

var incomes = new Vue({
    el  : '#incomes',
    data: {
        months: donationList
    }
});
