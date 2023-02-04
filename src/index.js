// const tabs = document.querySelectorAll('.tab')
// const panels = document.querySelectorAll('.panel')
// tabs.forEach(tab => {
//     return tab.addEventListener('click', function (e) {
//         // deactivate all tabs
//         tabs.forEach(tab => tab.children[0].classList.remove('border-b-4', 'border-softRed', 'md:border-b-0'))
//         //hide all panels
//         panels.forEach(panel => panel.classList.add('hidden'))
//         //base on target activate tabs
//         e.target.classList.add('border-b-4', 'border-softRed')
//         const tar = e.target.dataset.target
//         console.log(tar)
//         const pl = document.getElementById('panels')
//         pl.getElementsByClassName(tar)[0].classList.remove('hidden')
        
        
//     })
    
// })



//mobile menu
const btnMobile = document.querySelector('.btnn-mobile-nav')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

btnMobile.addEventListener('click', function (e) {
    btnMobile.classList.toggle('nav-open')
    menu.classList.toggle('hidden')
    
    if (!menu.classList.contains('hidden')) {
        logo.setAttribute('src','../images/logo-bookmark-footer.svg')
    } else {
        logo.setAttribute('src','../images/logo-bookmark.svg')
    }
    
})


const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')


tabs.forEach(tab => {
    return tab.addEventListener('click', function (e) {
        tabs.forEach(tab => tab.children[0].classList.remove('border-b-4', 'border-softRed', 'md:border-b-0'))
        
        panels.forEach(panel => panel.classList.add('hidden'))
        
        e.target.classList.add('border-b-4', 'border-softRed')
        
        const tar = e.target.dataset.target
        const pl = document.getElementById('panels')
        pl.getElementsByClassName(tar)[0].classList.remove('hidden')
    })
})

// for accordion

const faqs = document.querySelectorAll('.faq ')
console.log(faqs)
faqs.forEach(faq => {
    return faq.addEventListener('click', function (e) {
        // faqs.forEach(faqq=>faqq.classList.remove('active'))
        if (faq.classList.contains('active')) {
            faq.classList.remove('active')   
        } else {
            const activate = document.querySelectorAll('.active')
            activate.forEach(act=>act.classList.remove('active'))
            faq.classList.add('active')
        }
       
        
    })
})