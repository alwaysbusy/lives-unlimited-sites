window.document.addEventListener('DOMContentLoaded', function () {
    window.document.getElementById('content').style.marginTop = window.document.getElementsByTagName('header')[0].offsetHeight + "px";
    for (var i = 0; i < window.document.getElementById('mainav').getElementsByTagName('li').length; i++) {
        window.document.getElementById('mainav').getElementsByTagName('li')[i].addEventListener('click', function () {
            if (this.className != 'selected') {
                for (var j = 0; j < window.document.getElementById('mainav').getElementsByTagName('li').length; j++) {
                    window.document.getElementById('mainav').getElementsByTagName('li')[j].className = '';
                    if (window.document.getElementById('content').getElementsByTagName('section')[j]) {
                        window.document.getElementById('content').getElementsByTagName('section')[j].className = '';
                    }
                }
                this.className = 'selected';
                window.document.getElementById(this.getElementsByTagName('a')[0].getAttribute('href').replace('#', '')).className = 'selected';
            }
        });
    }
    for (var i = 0; i < window.document.getElementsByTagName('iframe').length; i++) {
        if (window.document.getElementsByTagName('iframe')[i].className == 'fullsize') {
            window.document.getElementsByTagName('iframe')[i].style.height = (window.innerHeight - window.document.getElementsByTagName('header')[0].offsetHeight - window.document.getElementsByTagName('footer')[0].offsetHeight) + "px";
        }
    }
}, false);