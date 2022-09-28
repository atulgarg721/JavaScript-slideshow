(function (){
    "use strict";
    const myImage = ['slides/image1.jpg', 'slides/image2.jpg', 'slides/image3.jpg', 'slides/image4.jpg', 'slides/image5.jpg'];
    let container = document.getElementById('content');
    let count = 0;
    document.getElementById('previous').addEventListener('click', (event) => {
        event.preventDefault();
        count --;
        if(count < 0) {count = myImage.length - 1;}
        swapImage(count);
        });
    document.getElementById('next').addEventListener('click',(event) => {
        event.preventDefault();
        count ++;
        if(num > myImage.length - 1){num = 0;}
        swapImage(count);
        
    });
    function swapImage(num){
        const newSlide = document.createElement('img');
        newSlide.src = myImage[num];
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);

        if(container.children.length > 2) {
            container.removeChild(container.children[0]);
        }

    }
})();