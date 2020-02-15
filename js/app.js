document.addEventListener('DOMContentLoaded', init());

function init() {

    let screenWidth = screen.width;
    let screenHeight = screen.height;

    let canvas = new fabric.Canvas('canvas');

    /*
    *   Добавление фото плана
    * */
    fabric.Image.fromURL('img/Restaurant-Floor-Plans.png', function(oImg) {
        oImg.selectable = true;
        oImg.id = 'image';
        canvas.add(oImg);
    });

    /*
    *   Скролл зум
    * */
    canvas.on('mouse:wheel', function(opt) {
        var delta = opt.e.deltaY;
        var pointer = canvas.getPointer(opt.e);
        var zoom = canvas.getZoom();
        zoom = zoom + delta/200;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
    });

    canvas.setHeight(screenHeight);
    canvas.setWidth(screenWidth);

    /*
    *   Добавление стола
    * */

    let btnTable = document.querySelector('.addTable');

    btnTable.addEventListener('click', () => {
        fabric.Image.fromURL('img/table.png', function(oImg) {
            oImg.selectable = true;
            oImg.id = 'table';
            canvas.add(oImg);
        });
    });

    /*
    *   Добавление стула
    * */

    let btnChair = document.querySelector('.addChair');

    btnChair.addEventListener('click', () => {
        fabric.Image.fromURL('img/chair.png', function(oImg) {
            oImg.selectable = true;
            oImg.id = 'chair';
            oImg.scale(0.1);
            canvas.add(oImg);
        });
    });


    
}
