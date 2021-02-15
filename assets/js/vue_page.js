/* Powered by Sttot, 2021-2-15 14:44:20 */

var footer = '<footer id="footer">\n' +
'    <ul class="icons">\n' +
'        <li><a href="https://jq.qq.com/?_wv=1027&k=oOaVyeRX" class="icon brands fa-qq"><span class="label">QQ</span></a></li>\n' +
'        <li><a href="https://github.com/NewNanCity" class="icon brands fa-github"><span class="label">GitHub</span></a></li>\n' +
'        <li><a href="mailto:newnancity@cubik65536.top" class="icon solid fa-envelope"><span class="label">Email</span></a></li>\n' +
'    </ul>\n' +
'    <ul class="copyright">\n' +
'        <li>Copyright &copy; 2020 - ' + new Date().getFullYear() + '</li>\n' +
'        <li>页面模版设计：<a href="http://html5up.net">HTML5 UP</a></li>\n' +
'        <li>由<a href="https://www.cubik65536.top/">Cubik65536</a> & <a href="https://github.com/Gk0Wk">Sttot</a>强力驱动</li>\n' +
'        <li>ICP备案号：<a href="http://www.beian.miit.gov.cn/">浙ICP备20009998号</a></li>\n' +
'    </ul>\n' +
'</footer>';

var page = new Vue({
    el  : '#page-wrapper',
    data: {
        urls: [
            { url: './index.html', title: '主页' },
            { url: './基础介绍.html', title: '关于牛腩' },
            { url: 'http://wiki.newnan.city/2052170', title: '牛腩法典' },
            { url: 'https://docs.qq.com/doc/DUGFObHVabWFNSFNM', title: '牛腩史书' },
            { url: 'http://wiki.newnan.city', title: '牛腩百科' },
            { url: 'https://www.newnan.city/Flarum/public/', title: '牛腩论坛' },
            { url: 'https://www.newnan.city/skin/public/', title: '牛腩皮肤站' },
            { url: 'http://map.newnan.city/', title: '实时地图' },
            { url: './牛腩记账本.html', title: '赞助我们' }
        ],
        footer: footer
    }
});
