const contactContainer = createElement({
    cName: 'container-fluid black',
    parent: body,
    eId: 'contactContainer',
})

const contactRow = createElement({
    cName: 'row',
    parent: contactContainer,
})

const contactCol = createElement({
    cName: 'col-4 justify-items-center',
    parent: contactRow,
})

const contactCard = createElement({
    cName: 'card black',
    parent: contactCol,
})

const contactImage = createElement({
    eType: 'img',
    cName: 'card-img-top',
    parent: contactCard,
    source: '/img/cigar.JPG',
})

const contactBody = createElement({
    cName: 'card-body',
    parent: contactCard,
})

const contactTitle = createElement({
    eType: 'h5',
    cName: 'card-title',
    parent: contactBody,
    text: 'Tyler Consalvi'
})

const contactText = createElement({
    eType: 'p',
    cName: 'card-text',
    parent: contactBody,
    text: 'Let\'s talk about your ✨vision✨',
})