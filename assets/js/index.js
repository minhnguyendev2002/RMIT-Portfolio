const homeActionText = document.getElementById("home-action-text");
if (homeActionText) {
    var typedHome = new Typed('#home-action-text', {
        strings: ['designer', 'illustrator', 'INFP'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
        backDelay: 1200,
        cursorChar: '',
    });
}

const workActionText = document.getElementById("works__action-text");
if (workActionText) {
    var typedWork = new Typed('#works__action-text', {
        strings: ['Welcome to my gallery<span class="hight-light-text">!</span><span class="hight-light-text">!</span>'],
        typeSpeed: 120,
        backSpeed: 120,
        loop: true,
        backDelay: 200,
        cursorChar: '',
    });
}

const works = [
    {
        source: '/assets/images/works/1.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/2.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/3.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/4.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/5.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/6.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/7.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/8.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/9.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/10.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/11.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/12.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/13.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/14.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/15.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/16.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/17.png',
        tooltip: 'My Product',
    },
    {
        source: '/assets/images/works/18.png',
        tooltip: 'My Product',
    },
];

const gallery = document.getElementById("gallery");
if (gallery) {
    for (let i = 0; i < works.length; i++) {
        if (gallery) {
            console.log(i)
            const galleryItem = document.createElement("DIV");
            galleryItem.classList.add("works__main__gallery__item");
            galleryItem.innerHTML = `<img src="${works[i].source}" onmousemove="onShowTooltip('${i}')" alt="/"><span class="tooltip">${works[i].tooltip}</span>`;
            gallery.appendChild(galleryItem);
        }
    }
}

function onShowTooltip(item) {
    let tooltip = document.getElementsByClassName("tooltip")[item];
    window.onmousemove = function(e) {
        let x = e.clientX,
            y = e.clientY;
        tooltip.style.top = (y + 20) + 'px';
        tooltip.style.left = (x + 20) + 'px';
    }
}

const well = document.getElementById("well");
if (well) {
    var typedAboutWell = new Typed('#well', {
        strings: ['Well<span class="hight-light-text">.</span><span class="hight-light-text">.</span><span class="hight-light-text">.</span>'],
        typeSpeed: 120,
        backSpeed: 120,
        loop: true,
        backDelay: 200,
        cursorChar: '',
    });
}

const experience = document.getElementById('experience');
if (experience) {
    var typedAboutExperience = new Typed('#experience', {
        strings: ['I have experience in<span class="hight-light-text">.</span><span class="hight-light-text">.</span><span class="hight-light-text">.</span>'],
        typeSpeed: 120,
        backSpeed: 120,
        loop: true,
        backDelay: 200,
        cursorChar: '',
    });
}

const haveYou = document.getElementById('haveYou');
if (haveYou) {
    var typedHaveYou = new Typed('#haveYou', {
        strings: ['I can have you with<span class="hight-light-text">.</span><span class="hight-light-text">.</span><span class="hight-light-text">.</span>'],
        typeSpeed: 120,
        backSpeed: 120,
        loop: true,
        backDelay: 200,
        cursorChar: '',
    });
}