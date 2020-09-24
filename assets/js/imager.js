//author: Kamran A-eff

(function ($) {

    let link = $(`<style/>`);
    $(document.head).append(link);

    $(link).html(`
    `);

    $.makeid = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    $.fn.imgadd = function (options) {
        let that = this;

        options = $.extend(options, {
            tnWidth: '120px',
            tnHeight: '120px',
            fontSize: '55px',
            plusInnerHtml: '<i class="fa fa-image"></i>',
            plusBtnClass: undefined
        });

        console.log(options);

        $(that).each(function (index, element) {

            let guid = $.makeid(8);
            console.log(guid);

            let btnPlus = $(`<button class='img-plus' type='button'>${options.plusInnerHtml}</button>`)
                .css({
                    width: options.tnWidth,
                    height: options.tnHeight,
                });

            if (options.plusBtnClass) {
                $(btnPlus).addClass(options.plusBtnClass);
            }
            else {
                $(btnPlus).css({
                    'font-size': options.fontSize
                })
                    .addClass('img-plus-no-bt');
            }

            let ix = 1;
            let elName = $(element).attr('name');
            $(btnPlus).click(function () {
                // let hasEmpty = false;

                // $(element).find('input:file').each(function (i, e) {

                //     if ($(e).val() == '') {
                //         hasEmpty = true;
                //         $(e).trigger('click');
                //     }

                // });

                // if (hasEmpty)
                //     return;


                let fileInput = $(`<input name='${elName}' type="file" accept="image/x-png,image/gif,image/jpeg"/>`);

                let label = $(`<label for='${guid}-${ix}' class='img-thumb' style="background-image:url('assets/img/img-rendering.gif')"></label>`)
                    .append(fileInput)
                    .css({
                        width: options.tnWidth,
                        height: options.tnHeight
                    });

                    $(element).find('.viewer-thumbs').append(label);
                    console.log(label);

                $(`<input value='${ix - 1}' name='${elName}SelectedIndex' id='${guid}-${ix}' type='radio' class="imager-rio">`)
                    .insertBefore(label);

                $(fileInput).change(function (e) {
                    $(label).attr('title', e.target.files[0].name);

                    let reader = new FileReader();
                    reader.addEventListener("load", function () {
                        $(label).css({
                            'background-image': `url(${reader.result})`
                        }).unbind('click')
                            .click(function () {
                                $(element).find('.viewer').css({
                                    'background-image': `url(${reader.result})`
                                });

                                $(element).find('.viewer').removeClass('no-show');
                            });

                        if ($(that).find('input:checked').length == 0)
                            $(label).trigger('click');
                    }, false);

                    reader.readAsDataURL(e.target.files[0]);
                });
                ix++;
                $(fileInput).trigger('click');
            });
            $(element).find('.viewer').append(btnPlus);
        });

    };


})(jQuery);