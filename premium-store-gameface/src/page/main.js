import './main.scss';

const $tabpanel = document.querySelector('.tab-panel')
const $goods = document.querySelector('.goods')
const $wishCount = document.querySelector('.nav-panel__count--wishlist')
const $shopcartCount = document.querySelector('.nav-panel__count--shopcart')

$goods.addEventListener('click', (event) => {
  const $target = event.target
  const isWishBtn = $target.classList.contains('item__wish')
  const isPurchaseBtn = $target.classList.contains('item__purchase')

  if (isWishBtn) {
    const prevCount = getCount($wishCount.textContent)
    const isAdded = $target.classList.contains('item__wish--added')
    $wishCount.textContent = isAdded ? `(${prevCount - 1})` : `(${prevCount + 1})`
    $target.classList.toggle('item__wish--added')
  }

  if (isPurchaseBtn) {
    const prevCount = getCount($shopcartCount.textContent)
    const isAdded = $target.classList.contains('item__purchase--added')
    $shopcartCount.textContent = isAdded ? `(${prevCount - 1})` : `(${prevCount + 1})`
    $target.textContent = isAdded ? 'purchase' : 'added'
    $target.classList.toggle('item__purchase--added')
  }
})

$tabpanel.addEventListener('click', event => {
  const $target = event.target
  const isFilter = $target.classList.contains('tab-panel__btn')

  if (isFilter) {
    const $prevActiveFilter = $tabpanel.querySelector('.tab-panel__btn--active')
    if ($target !== $prevActiveFilter) {
      $target.classList.add('tab-panel__btn--active')
      $prevActiveFilter.classList.remove('tab-panel__btn--active')
    }
  }
})

function getCount(str) {
  return +str.replace(/\D/g, '')
}
