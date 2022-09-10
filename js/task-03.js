const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery')

const markup = images
  .map(el => `<li><img src=${el.url} alt=${el.alt}/></li>`)
  .join('')

  gallery.insertAdjacentHTML('beforeend', markup)

  gallery.style.backgroundColor = 'teal'
  gallery.style.listStyle = 'none'
  gallery.style.display = 'flex'
  gallery.style.flexWrap = 'wrap'

  gallery.style.paddingTop = '20px'
  gallery.style.paddingBottom = '20px'
  gallery.style.paddingLeft = '20px'
  gallery.style.paddingRight = '20px'
  gallery.style.border = '1px solid tomato'
  
  console.log(gallery)