

const round = document.querySelectorAll('.arrow')

let current = 1;

const carousel = document.querySelectorAll('.carousel div')

const slides = carousel.length;

round.forEach(button => {
    button.addEventListener('click', e => {
        const isLeftArrow = button.classList.contains('arrow-left')

        if (isLeftArrow) {
            current -= 1;
        } else {
            current += 1;
        }

        if (current >= slides - 1) {
            current = 1;
        }

        if (current < 1) {
            current = slides - 2;
        }

        carousel[current].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
    })
})

