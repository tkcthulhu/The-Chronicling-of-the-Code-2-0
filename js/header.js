const mainDiv = createElement({
    cName: 'container-fluid',
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
    source: '/img/Initials-1.png'
})

const title = createElement({
    cName: 'col',
    eId: 'title',
    parent: headerRow,
    text: '<h1 id="name"><strong>Tyler Consalvi</strong></h1><br><h3>Full Stack Web Development</h3>',
})