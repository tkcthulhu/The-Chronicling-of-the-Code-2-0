const navCont = createElement({
    cName: 'container-fluid',
    parent: body,
    eId: 'navContainer'
})

const navRow = createElement({
    cName: 'nav',
    cName: 'navbar navbar-expand-lg justify-content-end',
    parent: navCont,
    eId: 'navRow',
})

const navBar = createElement({
    eType: 'ul',
    cName: 'navbar-nav',
    eId: 'navBar',
    parent: navRow,
})

const navName = createElement({
    eType: 'li',
    cName: 'nav-item',
    parent: navBar,
})

const navP = createElement({
    eType: 'a',
    cName: 'nav-link',
    text: '//HOME',
    link: '/index.html',
    parent: navName
})

const blogLi = createElement({
    eType: 'li',
    cName: 'nav-item',
    parent: navBar,
})

const blog = createElement({
    eType: 'a',
    cName: 'nav-link',
    parent: blogLi,
    link: './pages/blog.html',
    text: '//BLOG'
})

const aboutMeLi = createElement({
    eType: 'li',
    cName: 'nav-item',
    parent: navBar,
})

const aboutMe = createElement({
    eType: 'a',
    cName: 'nav-link',
    parent: aboutMeLi,
    link: './pages/about-me.html',
    text: '//ABOUT ME'
})

const myWorkLi = createElement({
    eType: 'li',
    cName: 'nav-item',
    parent: navBar,
})

const myWork = createElement({
    eType: 'a',
    cName: 'nav-link',
    parent: myWorkLi,
    link: './pages/my-work.html',
    text: '//MY WORK'
})

const contactMeLi = createElement({
    eType: 'li',
    cName: 'nav-item',
    parent: navBar,
})

const contactMe = createElement({
    eType: 'a',
    cName: 'nav-link',
    parent: contactMeLi,
    link: './pages/contact-card.html',
    text: '//CONTACT ME'
})