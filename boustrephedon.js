var paragraph2words = function(para) {
  return para.text().split(' ');
};

var paragraph2sentences = function(para) {
  var words = paragraph2words(para);
  var font = para.css('font');
  var body = $('body');
  var container = $('<div></div>');
  container.css(font);
  container.css({'visibility': 'hidden'});
  container.width(para.width());
  para.after(container);
  var sentence = words[0];
  container.append(words[0]);
  var init_height = container.height();
  var sentences = [];

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    container.text(sentence + ' ' + word);
    if (container.height() > init_height) {
      container.text('');
      sentences.push(sentence);
      sentence = word;

      if (sentences.length % 2 == 0) {
        container.addClass('backward');
      } else {
        container.removeClass('backward');
      }
    } else {
      sentence += ' ' + word;
    }
  }

  container.remove();
  sentences.push(sentence);
  return sentences;
};

var transform_paragraph = function(para) {
  var sentences = paragraph2sentences(para);
  var original_text = para.text();
  para.text('');
  for (var i = 0; i < sentences.length; i++) {
    var c;
    if (i % 2 == 0) {
      c = 'forward';
    } else {
      c = 'backward';
    }

    para.append('<div class="'+ c +'">'+ sentences[i] +'</div>');
  }

  $(window).resize(function(e) {
    para.text(original_text);
    $(window).unbind(e);
    transform_paragraph(para);
  });
};

$('p').each(function(i,e) { transform_paragraph($(e)); });

