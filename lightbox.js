const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen')
const contenedorgaleria = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click' , ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click' , (e)=>{
    if(e.target !== imagenLight){

     contenedorgaleria.classList.toggle('show')
     imagenLight.classList.toggle('showImage')
     hamburguer1.style.opacity = '1'
    }
})


const aparecerImagen = (imagen)=>{
     imagenLight.src = imagen;
     contenedorgaleria.classList.toggle('show')
     imagenLight.classList.toggle('showImage')
     hamburguer1.style.opacity = '0'
}
