# imager-js

 &lt;div class="imager-container" id="viewer1"&gt;
                     &lt;div class="viewer no-show"&gt; &lt;/div&gt;
                     &lt;div class="viewer-thumbs" name="image"&gt; &lt;/div&gt;
 &lt;/div&gt;

----------------------------
<code>
$('#viewer1').imgadd();

or

$('#viewer1').imgadd({
            tnWidth: '120px',
            tnHeight: '120px',
            fontSize: '55px',
            plusInnerHtml: '<i class="fa fa-image"></i>',
            plusBtnClass: undefined
        });
<code>