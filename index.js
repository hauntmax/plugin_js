const options = {
    title: 'Заголовок для модального окна',
    content: 'Текст',
    closable: true,
    width: '600px',
    footerButtons: [
        {
            text: 'Ок',
            type: 'primary',
            handler(){
                console.log('Primary btn clicked');
            }
        },
        {
            text: 'Cancel',
            type: 'danger',
            handler(){
                console.log('Danger btn clicked');
            }
        },
    ]
}

const modal = $.modal(options);
modal.open();
