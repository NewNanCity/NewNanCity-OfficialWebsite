/* Powered by Sttot, 2021-2-15 14:44:20 */

var headerHTML = '<header id="header">\n' +
    '   <h1><a href="index.html">{{ title }}</a></h1>\n' +
    '   <nav id="nav"><ul><li class="special">\n' +
    '       <a href="#menu" class="menuToggle"><span>菜单</span></a>\n' +
    '       <div id="menu"><ul><li v-for="url in urls">\n' +
    '           <a :href="url.url">{{ url.title }}</a>\n' +
    '       </li></ul></div>\n' +
    '   </li></ul></nav>\n' +
    '</header>';

var footerHTML = '<footer id="footer">\n' +
    '    <ul class="icons">\n' +
    '        <li><a :href="qqGroupLink" class="icon brands fa-qq"><span class="label">QQ</span></a></li>\n' +
    '        <li><a :href="githubLink" class="icon brands fa-github"><span class="label">GitHub</span></a></li>\n' +
    '        <li><a :href="\'mailto:\' + mailTo" class="icon solid fa-envelope"><span class="label">Email</span></a></li>\n' +
    '    </ul>\n' +
    '    <ul class="copyright">\n' +
    '        <li>Copyright &copy; 2020 - {{thisYear}} NewNanCity. All rights reserved.</li>\n' +
    '        <li>页面模版设计：<a href="http://html5up.net">HTML5 UP</a></li>\n' +
    '        <li>由<a href="https://blog.cubik65536.top/">Cubik65536</a> & <a href="https://github.com/Gk0Wk">Sttot</a>强力驱动</li>\n' +
    '        <li>ICP备案号：<a href="http://www.beian.miit.gov.cn/">{{ICP_ID}}</a></li>\n' +
    '    </ul>\n' +
    '</footer>';

var page = new Vue({
    el  : '#page-wrapper',
    data: {
        header: headerHTML,
        footer: footerHTML
    }
});

var footer = new Vue({
    el  : '#footer',
    data: {
        thisYear   : new Date().getFullYear(),
        qqGroupLink: 'https://jq.qq.com/?_wv=1027&k=oOaVyeRX',
        githubLink : 'https://github.com/NewNanCity',
        mailTo     : 'newnancity@cubik65536.top',
        ICP_ID     : '浙ICP备 20009998号'
    }
});

var header = new Vue({
    el  : '#header',
    data: {
        title: '牛腩小镇｜NewNan City',
        urls : [
            { url: './index.html', title: '主页' },
            { url: './基础介绍.html', title: '关于牛腩' },
            { url: 'http://wiki.newnan.city/2052170', title: '牛腩法典' },
            { url: 'https://docs.qq.com/doc/DUGFObHVabWFNSFNM', title: '牛腩史书' },
            { url: 'http://wiki.newnan.city', title: '牛腩百科' },
            { url: 'https://forum.newnan.city/', title: '牛腩论坛' },
            { url: 'https://skin.newnan.city/', title: '牛腩皮肤站' },
            { url: 'http://map.newnan.city/', title: '实时地图' },
            { url: './牛腩记账本.html', title: '赞助我们' }
        ]
    }
});
