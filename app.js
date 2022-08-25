(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `./images/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'Godfred', 'God has been kind to me. Beyond the pomp and circumstance of self-pride in my efforts and the brilliance that went into this process, my recurring feeling is self-perpetuating gratitude to God and to all those he used along the way to make this a reality. I have amazing sponsors, mentors and friends around me. I love and appreciate them all.')

    createCustomer(1, 'Serlly', 'I have amazing sponsors, mentors and friends around me. I love and appreciate them all.')

    createCustomer(2, 'Sarkodie', 'Beyond the pomp and circumstance of self-pride in my efforts and the brilliance that went into this process, my recurring feeling is self-perpetuating gratitude to God and to all those he used along the way to make this a reality. ')

    createCustomer(3, 'Medical', 'God is writing a meaningful biography on my behalf — this is my favorite chapter yet — and I will come back to tell you how this ends.')

    createCustomer(4, 'Michael', 'Today, I woke up in Boston, Massachusetts. I will be undertaking my LLM Programme at the Harvard Law School for the next year with focus on Corporate & Project Finance.')

    createCustomer(5, 'Linda', 'A multidisciplinary designer, developer, and entrepreneur. Passionate about problem-solving to make the world a better place. ❤️')

    btn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if(e.target.parentElement.classList.contains('prevBtn')) {
                if(index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if(index === customers.length) {
                    index = 0
                }
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })

})()


//Creator: thegoddysmart
