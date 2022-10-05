const mainDiv = createElement({
    cName: 'container-fluid black',
    eId: 'mainDiv',
    parent: body,
})

const headerRow = createElement({
    cName: 'row',
    eId: 'headerRow',
    parent: mainDiv,
})

const logo = createElement({
    eType: 'img',
    cName: 'col-3',
    eId: 'logo',
    parent: headerRow,
    source: '/img/Initials-1.png',
    eStyle: 'width: 8rem;',
})

const title = createElement({
    cName: 'col text-white',
    eId: 'title',
    parent: headerRow,
    text: '<h1 id="name"><strong>Tyler Consalvi</strong></h1><br><h3>Full Stack Web Development</h3>',
})

// const awesome = createElement({
//     cName: 'col-2',
//     parent: headerRow,
//     eType: 'img',
//     source: '/img/aincu-bootcamp-logo.png',
//     eStyle: 'width: 8rem;'
// })