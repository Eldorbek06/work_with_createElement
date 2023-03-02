import arr from "./db.js"

let products = document.querySelector('.products'),
    show_first_five = document.querySelector('.show_first_five'),
    show_all = document.querySelector('.show_all'),
    chosen_products_span = document.querySelector('.title span'),
    chosen_products_span_count = 0

reload(arr)

show_first_five.onclick = () => {
    chosen_products_span_count = 0
    chosen_products_span.innerHTML = chosen_products_span_count
    reload(arr.slice(0, 5))
}

show_all.onclick = () => {
    chosen_products_span_count = 0
    chosen_products_span.innerHTML = chosen_products_span_count
    reload(arr)
}

function reload(array) {
    products.innerHTML = ''
    for (let item of array) {
        let product = document.createElement('div'),
            image = document.createElement('div'),
            img = document.createElement('img'),
            product_descr = document.createElement('div'),
            product_descr_title = document.createElement('div'),
            txt = document.createElement('p'),
            rating = document.createElement('div'),
            price = document.createElement('div'),
            price_span_$ = document.createElement('span'),
            price_span = document.createElement('span'),
            rate = document.createElement('div'),
            rate_span_star = document.createElement('span'),
            rate_span = document.createElement('span'),
            count = document.createElement('div'),
            count_span_box = document.createElement('span'),
            count_span = document.createElement('span'),
            btn_favorite = document.createElement('div')


        product.classList.add('product', 'grid-box')
        image.classList.add('image')
        product_descr.classList.add('product-descr')
        product_descr_title.classList.add('product-descr-title')
        txt.classList.add('txt')
        rating.classList.add('rating')
        price.classList.add('price')
        price_span_$.classList.add('material-symbols-outlined')
        rate_span_star.classList.add('material-symbols-outlined')
        count_span_box.classList.add('material-symbols-outlined')
        btn_favorite.classList.add('favorite')

        img.src = item.image
        img.alt = 'image'

        product_descr_title.innerHTML = item.title.length >= 20 ? item.title.slice(0, 20) : item.title
        txt.innerHTML = item.description.length >= 100 ? item.description.slice(0, 150) : item.description
        price_span_$.innerHTML = 'attach_money'
        rate_span_star.innerHTML = 'star'
        count_span_box.innerHTML = 'inventory_2'
        price_span.innerHTML = item.price
        rate_span.innerHTML = item.rating.rate
        count_span.innerHTML = item.rating.count
        btn_favorite.innerHTML = 'В избранное'


        product.append(image)
        product.append(product_descr)
        image.append(img)
        product_descr.append(product_descr_title)
        product_descr.append(txt)
        product_descr.append(rating)
        rating.append(price)
        price.append(price_span_$)
        price.append(price_span)
        rating.append(rate)
        rate.append(rate_span_star)
        rate.append(rate_span)
        rating.append(count)
        count.append(count_span_box)
        count.append(count_span)
        product_descr.append(btn_favorite)
        products.append(product)


        btn_favorite.onclick = () => {
            if (btn_favorite.classList.contains('fav_act')) {
                btn_favorite.classList.remove('fav_act')
                btn_favorite.innerHTML = 'В избранное'
                chosen_products_span_count--
            } else {
                btn_favorite.classList.add('fav_act')
                btn_favorite.innerHTML = 'Добавлено'
                chosen_products_span_count++
            }
            chosen_products_span.innerHTML = chosen_products_span_count
            console.log(chosen_products_span_count);
        }

    }

}