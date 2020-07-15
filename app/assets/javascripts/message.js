$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="message">
          <div class="message_up">
            <div class="message__up-name">
              ${message.user_name}
            </div>
            <div class="message__up-time">
              ${message.created_at}
            </div>
          </div>
          <div class="message__text">
            <p class="message__text-true">
              ${message.content}
            </p>
          </div>
          <img class="message__text__image src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="message">
          <div class="message__up">
            <div class="message__up-name">
              ${message.user_name}
            </div>
            <div class="message__up-time">
              ${message.created_at}
            </div>
          </div>
          <div class="message__text">
            <p class="message__text-true">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData, 
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
      $('.submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});