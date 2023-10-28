document.addEventListener('DOMContentLoaded', function (e) {
    const faq_wrapper = document.querySelector('.faq_wrapper');
    faq_wrapper.addEventListener('click', function (e) {
        const group_header = e.target.closest('.faq_header');
        const faq_group = group_header.parentElement;
        const faq_body = faq_group.querySelector('.faq_body');
        const icon = group_header.querySelector('i.fa');

        // toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //  toggle the visibility of the faq_body
        faq_body.classList.toggle('open');

        // closing the groups that are open already 
        const other_group = faq_wrapper.querySelectorAll('.faq_group');
        other_group.forEach((othergroup) => {
            if (othergroup !== faq_group) {
                const otherbody = othergroup.querySelector('.faq_body');
                const othericon = othergroup.querySelector('.faq_header i');

                otherbody.classList.remove('open');
                othericon.classList.remove('fa-minus');
                othericon.classList.add('fa-plus');

            }

        })

        console.log(icon);
        console.log(faq_body);
        console.log(faq_group);
    })


})

document.addEventListener('DOMContentLoaded', function () {

    const toogle_btn = document.querySelector('.toogle_btn');
    const navigation = document.querySelector('.nav-links');

    toogle_btn.addEventListener('click', function (e) {
        const isexpanded = navigation.getAttribute('aria-expanded') === 'true' || false;

        navigation.setAttribute('aria-expanded', !isexpanded);
    })
    console.log(toogle_btn, navigation);
})

