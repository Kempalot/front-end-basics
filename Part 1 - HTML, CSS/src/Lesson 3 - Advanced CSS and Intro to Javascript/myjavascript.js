function imageSwap(id) {
  const image1 = 'https://i.guim.co.uk/img/media/e78c31b44912c934a46f8cfde703e30303d6b5e8/0_173_3500_2101/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16dbd6e354df7269c6782459cccd77a4'
  const image2 = 'https://files.worldwildlife.org/wwfcmsprod/images/Sleeping_red_panda_species_spotlight_279173/story_full_width/6q742cr2fv_WEB_279173.jpg'

  const image = document.getElementById(id)

  if(image.src === image1) {
    image.src = image2
  } else {
    image.src = image1
  }
}